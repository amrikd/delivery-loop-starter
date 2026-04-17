#!/bin/bash
# Territory enforcement hook
# Blocks agents from writing outside their designated directories
# Reads the tool input from stdin (JSON with tool_name and tool_input)

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | grep -o '"file_path":"[^"]*"' | head -1 | cut -d'"' -f4)

# If no file path (e.g. Bash tool), allow
if [ -z "$FILE_PATH" ]; then
  exit 0
fi

# Detect which agent is active from the session
# The CLAUDE_AGENT_NAME env var is set when running as a subagent
AGENT="${CLAUDE_AGENT_NAME:-unknown}"

# Normalize path — strip leading ./
FILE_PATH="${FILE_PATH#./}"

# Designer territory: components/ and tokens/ only
if [ "$AGENT" = "Designer" ]; then
  case "$FILE_PATH" in
    components/*|tokens/*|*.css)
      exit 0  # Allowed
      ;;
    *)
      echo "BLOCKED: Designer agent cannot write to $FILE_PATH"
      echo "Designer territory is components/ and tokens/ only."
      echo "Switch to the Developer agent to modify app code."
      exit 1
      ;;
  esac
fi

# Developer territory: app/, src/, lib/, utils/, types/, e2e/ only
if [ "$AGENT" = "Developer" ]; then
  case "$FILE_PATH" in
    app/*|src/*|lib/*|utils/*|types/*|e2e/*|playwright.config.*|*.config.*|package.json|tsconfig.json)
      exit 0  # Allowed
      ;;
    components/*|tokens/*)
      echo "BLOCKED: Developer agent cannot write to $FILE_PATH"
      echo "components/ and tokens/ are the Designer's territory."
      echo "Switch to the Designer agent to modify components."
      exit 1
      ;;
    *)
      exit 0  # Allow other files (readme, config, etc.)
      ;;
  esac
fi

# Unknown agent or no agent — allow (for direct Claude Code usage)
exit 0
