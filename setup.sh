#!/usr/bin/env bash
#
# Delivery Loop — Setup script
# One command to check prerequisites, install dependencies, and verify you're ready.
#
# Usage:
#   ./setup.sh
#
# If you hit issues, see prerequisites.md or ask your facilitator.

set -e

BOLD=$'\033[1m'
DIM=$'\033[2m'
GREEN=$'\033[32m'
YELLOW=$'\033[33m'
RED=$'\033[31m'
CYAN=$'\033[36m'
RESET=$'\033[0m'

ok()   { printf "  ${GREEN}✓${RESET} %s\n" "$1"; }
warn() { printf "  ${YELLOW}!${RESET} %s\n" "$1"; }
fail() { printf "  ${RED}✗${RESET} %s\n" "$1"; }
step() { printf "\n${BOLD}${CYAN}▶ %s${RESET}\n" "$1"; }

printf "${BOLD}Delivery Loop — Setup${RESET}\n"
printf "${DIM}One command, designer-friendly.${RESET}\n"

# ─── 1. Node ──────────────────────────────────────────────────────
step "Checking Node.js"
if command -v node >/dev/null 2>&1; then
  NODE_VERSION=$(node --version)
  NODE_MAJOR=$(echo "$NODE_VERSION" | sed 's/^v\([0-9]*\).*/\1/')
  if [ "$NODE_MAJOR" -ge 20 ]; then
    ok "Node.js $NODE_VERSION"
  else
    fail "Node.js $NODE_VERSION — need v20 or higher"
    echo "    Install the LTS from https://nodejs.org"
    exit 1
  fi
else
  fail "Node.js not found"
  echo "    Install the LTS from https://nodejs.org"
  exit 1
fi

# ─── 2. Git ───────────────────────────────────────────────────────
step "Checking Git"
if command -v git >/dev/null 2>&1; then
  ok "Git $(git --version | awk '{print $3}')"
else
  fail "Git not found"
  echo "    Install from https://git-scm.com or run: xcode-select --install"
  exit 1
fi

# ─── 3. Dependencies ──────────────────────────────────────────────
step "Installing npm dependencies"
if [ -d "node_modules" ] && [ -f "node_modules/.package-lock.json" ]; then
  ok "Dependencies already installed — skipping (delete node_modules to force)"
else
  echo "  (this takes ~30 seconds)"
  if npm install --silent 2>&1 | grep -E '(error|ERR!)' >/dev/null; then
    fail "npm install had errors — run 'npm install' manually to see"
    exit 1
  else
    ok "Dependencies installed"
  fi
fi

# ─── 4. Build check ───────────────────────────────────────────────
step "Verifying the app builds"
if npx next build --no-lint 2>&1 | tail -2 | grep -q "prerendered\|Static"; then
  ok "Clean build — app is ready"
else
  warn "Build had issues — try 'npx next build' to see details"
fi

# ─── 5. Tool checks ───────────────────────────────────────────────
step "Checking your AI tools"

# Claude Code
if command -v claude >/dev/null 2>&1; then
  ok "Claude Code installed"
else
  warn "Claude Code not installed (designers need this)"
  echo "    Install: https://claude.com/claude-code"
fi

# Figma desktop (mac check)
if [ "$(uname)" = "Darwin" ]; then
  if [ -d "/Applications/Figma.app" ]; then
    ok "Figma desktop app installed"
  else
    warn "Figma desktop app not found (designers need this)"
    echo "    Install: https://www.figma.com/downloads"
    echo "    The MCP needs the desktop app running, not the browser."
  fi
fi

# VS Code
if command -v code >/dev/null 2>&1; then
  ok "VS Code installed"
else
  warn "VS Code not found (devs need this for Copilot)"
  echo "    Install: https://code.visualstudio.com"
fi

# ─── 6. Start dev server hint ─────────────────────────────────────
step "You're set"
cat <<EOF

${BOLD}Next steps:${RESET}

  1. Start the dev server:
     ${CYAN}npm run dev${RESET}

  2. Open in browser:
     ${DIM}http://localhost:3000${RESET}          ← home
     ${DIM}http://localhost:3000/gallery${RESET}  ← components preview
     ${DIM}http://localhost:3000/explore${RESET}  ← designer scratch canvas

  3. Read the core lesson:
     ${CYAN}WRITING-SPECS.md${RESET}  ← how to write specs AI can build from

  4. If you're the designer, also read:
     ${CYAN}DESIGN-WITH-CLAUDE.md${RESET}  ← how to design in Figma with Claude

  5. When the workshop starts, open Claude Code or Copilot Chat and say:
     "${DIM}I'm the designer${RESET}" OR "${DIM}I'm the developer${RESET}"

${BOLD}See you there.${RESET}

EOF
