# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.3.x   | :white_check_mark: |
| 1.2.x   | :x:                |
| < 1.2   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in the Academic Writer Skills plugin, please report it responsibly.

**Do NOT open a public GitHub issue for security vulnerabilities.**

### How to Report

1. Email: security@example.com (replace with actual contact)
2. Or use GitHub's private vulnerability reporting:
   - Navigate to the repository's Security tab
   - Click "Report a vulnerability"

### What to Include

- Description of the vulnerability
- Steps to reproduce
- Potential impact assessment
- Any suggested fix (optional)

### Response Timeline

- **Acknowledgement:** Within 48 hours
- **Initial assessment:** Within 7 days
- **Fix timeline:** Depends on severity (critical: 7 days, high: 14 days, medium: 30 days)

### Scope

This plugin consists of Markdown skill files used by AI coding assistants. The primary security concerns are:
- Prompt injection in skill content
- Malicious instructions that could cause AI assistants to take harmful actions
- Privacy leakage in skill prompts

### Out of Scope

- Vulnerabilities in Claude Code, Gemini CLI, or Cursor IDE themselves
- General AI safety concerns
- Issues with third-party packages listed in package.json
