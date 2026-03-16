#!/usr/bin/env bash
# Academic Writer Skills — Bash installer wrapper
# Usage: ./install.sh [--profile=researcher] [--dry-run] [--help]

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Check for Node.js
if ! command -v node &>/dev/null; then
  echo "Error: Node.js is required but not installed."
  echo "Install Node.js from https://nodejs.org (v18+ recommended)"
  exit 1
fi

# Check Node version
NODE_VERSION=$(node --version | sed 's/v//' | cut -d. -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
  echo "Warning: Node.js v18+ recommended. Found v${NODE_VERSION}."
fi

echo "Academic Writer Skills Installer"
echo "================================"
exec node "$SCRIPT_DIR/scripts/install.js" "$@"
