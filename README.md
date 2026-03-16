# Academic Writer Skills

[![npm version](https://img.shields.io/badge/npm-1.4.0-blue.svg)](https://www.npmjs.com/package/academic-writer-skills)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![CI](https://github.com/muhammad1438/academic-writer-skills/actions/workflows/ci.yml/badge.svg)](https://github.com/muhammad1438/academic-writer-skills/actions/workflows/ci.yml)
[![Skills: 27](https://img.shields.io/badge/skills-27-orange.svg)](skills/)

27 specialist skills covering the complete academic writing lifecycle — works with Claude Code, Gemini CLI, and Cursor IDE.

## Supported Tools

| Tool | Status | Guide |
|------|--------|-------|
| Claude Code | ✅ Full support | See below |
| Gemini CLI | ✅ Full support | [GEMINI.md](GEMINI.md) |
| Cursor IDE | ✅ Full support | [.cursorrules](.cursorrules) |
| OpenCode | 🔜 Planned v1.5.0 | [ROADMAP.md](ROADMAP.md) |

## Skills Overview

| # | Skill | What it does |
|---|-------|-------------|
| 1 | academic-writing-core | Master orchestrator — routes to specialist skills |
| 2 | abstract-writer | Write and improve abstracts (CONSORT, PRISMA, APA 7th) |
| 3 | academic-language-toolkit | Hedging, reporting verbs, nominalization, AWL vocabulary |
| 4 | ai-academic-ethics | AI disclosure requirements; 2025 journal policies |
| 5 | argumentation-engine | Toulmin/Rogerian models; fallacy detection; counterarguments |
| 6 | citation-formatter | APA, MLA, Chicago, IEEE, Vancouver, Harvard, ACS, CSE |
| 7 | grammar-style-checker | Voice, tense, parallel structure, wordiness |
| 8 | literature-review | Narrative/systematic/scoping reviews; PRISMA; synthesis |
| 9 | paper-structure | IMRaD, dissertations, essays, case studies |
| 10 | paraphrasing-engine | Paraphrase, summarise, quote; plagiarism avoidance |
| 11 | grant-proposal | NIH, NSF, EU Horizon, ERC, Wellcome, UKRI |
| 12 | research-proposal | PhD proposals, ethics submissions, Gantt charts |
| 13 | lab-report | Full lab report structure for all sciences |
| 14 | peer-review-response | Rebuttal letters; point-by-point responses |
| 15 | statistical-reporting | APA 7th stats; effect sizes; Bayesian reporting |
| 16 | latex-writer | Document classes; BibLaTeX; equations; templates |
| 17 | figure-table-checker | APA figure/table compliance; colorblind palettes |
| 18 | journal-selection | Journal metrics; predatory journal detection |
| 19 | reference-verifier | DOI verification; retraction checking |
| 20 | data-management-plan | NIH DMS, FAIR principles, repository selection |
| 21 | cover-letter-writer | Journal submission cover letters |
| 22 | qualitative-reporting | COREQ, thematic analysis, reflexivity |
| 23 | thesis-dissertation-guide | PhD/master's thesis structure; viva prep |
| 24 | plain-language-summary | Lay summaries, patient summaries |
| 25 | preregistration-guide | OSF, AsPredicted, PROSPERO |
| 26 | conference-presentation | Research posters, slides, beamer |
| 27 | academic-cv | Academic CVs, research statements, faculty applications |

## Installation

### Claude Code

```bash
claude plugin install academic-writer
```

Or selective install by profile:

```bash
# Core (5 essential skills)
./install.sh --profile=core

# Researcher (15 skills, recommended)
./install.sh --profile=researcher

# Full (all 27 skills)
./install.sh --profile=full
```

### Gemini CLI

```bash
# Load all context and skills
gemini -p @GEMINI.md "Write a structured abstract for my paper on [topic]"

# Load with writing mode context
gemini -p @contexts/writing.md @GEMINI.md "Help me structure my research paper"

# See the full Gemini guide
cat GEMINI.md
```

### Cursor IDE

Copy `.cursorrules` to your project root:

```bash
cp .cursorrules /path/to/your/project/.cursorrules
```

Or symlink for automatic updates:

```bash
ln -s /path/to/academic-writer-skills/.cursorrules /path/to/your/project/.cursorrules
```

### Node.js Installer

```bash
# See what will be installed
node scripts/install-plan.js

# Install researcher profile (default)
node scripts/install.js

# Install specific profile
node scripts/install.js --profile=full

# Dry run to preview
node scripts/install.js --profile=full --dry-run

# Install specific skills
node scripts/install.js --skills=grant-proposal,statistical-reporting
```

## Quick Start

### Claude Code

After installation:

```
write my paper on climate adaptation in coastal cities
help me format my references in APA style
I need to respond to peer reviewers — here are their comments: [paste]
write my NIH Specific Aims page for a study on [topic]
```

### Gemini CLI

```bash
gemini -p @GEMINI.md "Help me write a literature review on [topic]"
gemini -p @GEMINI.md "Format this citation in Chicago style: [paste citation]"
gemini -p @GEMINI.md "Is this journal predatory? [journal name]"
```

### Cursor IDE

Open any `.tex`, `.md`, or paper file in Cursor. With `.cursorrules` in your project, Cursor will automatically activate academic writing mode and route to appropriate skill behaviors.

## Profiles

| Profile | Skills | Best for |
|---------|--------|----------|
| `core` | 5 | Students, quick start |
| `researcher` | 15 | Active researchers (default) |
| `full` | 27 | Power users, grant writers, PhD students |

## Multi-Agent Workflows

See [AGENTS.md](AGENTS.md) for complete pipeline patterns:
- Full paper pipeline (6 sequential steps)
- Grant application pipeline
- Thesis/dissertation workflow
- Systematic literature review
- Rapid paper revision (post-reviewer)

## Contributing

See [CLAUDE.md](CLAUDE.md) for the full contribution guide, skill format specification, and quality checklist.

- [Bug reports](.github/ISSUE_TEMPLATE/bug_report.md)
- [Skill requests](.github/ISSUE_TEMPLATE/skill_request.md)
- [Security issues](SECURITY.md)

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for full release history.

## License

MIT — see [LICENSE](LICENSE)
