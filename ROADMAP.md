# Roadmap

## Current Release: v1.4.0

Released 2026-03-16

- 27 specialist academic writing skills
- Multi-tool support: Claude Code, Gemini CLI, Cursor IDE
- ECC-pattern directory structure
- Selective installer with profiles
- GitHub Actions CI/CD

---

## v1.5.0 — Planned

### OpenCode Support
- `OPENCODE.md` integration guide
- OpenCode-specific context injection patterns
- Model routing recommendations for OpenCode

### VS Code Extension Guide
- `VSCODE.md` — manual integration guide for VS Code + Copilot
- Snippet file (`.vscode/academic-writer.code-snippets`) for common triggers
- Tasks file (`.vscode/tasks.json`) for installer

### New Skills (Candidates)

| Skill | Description | Priority |
|-------|-------------|----------|
| `systematic-search` | Search strategy development for systematic reviews | High |
| `research-ethics-guide` | IRB/ethics committee submissions, consent forms | High |
| `academic-translation` | Academic register translation between languages | Medium |
| `meta-analysis-guide` | Meta-analysis methodology and reporting | Medium |

### Enhancements
- Context auto-detection (auto-select writing/research/review mode)
- Skill usage analytics (opt-in)
- Interactive profile selector for installer
- `scripts/validate.js` — standalone validation script

---

## v2.0.0 — Planned

### npm Package
- Publish to npm: `npm install -g academic-writer-skills`
- Global installer command: `academic-writer install --profile=researcher`
- Auto-detect AI tool installation targets

### Selective Skill Install (Claude Code native)
- Work with Claude Code plugin system for granular skill selection
- Per-project skill profiles via `.claude-plugin-config.json`

### Skill Versioning
- Individual skill version tracking
- `skills/{name}/CHANGELOG.md` per skill
- Backward-compatible skill updates

### API
- REST API for skill content retrieval
- Webhook for new skill notifications
- Skill health checks (detect outdated policy references)

### Additional Tools
- Obsidian plugin (for academic note-taking workflows)
- Zotero integration guide
- Notion integration guide

---

## Long-Term Vision

The Academic Writer Skills plugin aims to be the most comprehensive AI writing toolkit for academic and research contexts — supporting every tool, every discipline, and every stage of the scholarly writing process.

**Guiding principles:**
1. **Tool-agnostic** — Works with any AI tool, not just Claude Code
2. **Evidence-based** — Content based on published style guides and funder requirements
3. **Current** — Actively maintained to reflect latest journal policies and funder requirements
4. **Community-driven** — Skill requests and corrections welcome via GitHub issues

---

## Contributing

Have a skill request or want to contribute? See:
- [Skill Request template](.github/ISSUE_TEMPLATE/skill_request.md)
- [Contributing guide](CLAUDE.md)
- [Bug report template](.github/ISSUE_TEMPLATE/bug_report.md)
