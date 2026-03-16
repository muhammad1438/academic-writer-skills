# Academic Writer Skills — Claude Code Project Instructions

This file configures Claude Code for contributing to and using the Academic Writer Skills plugin.

## Project Overview

The Academic Writer Skills plugin provides 27 specialist AI skills for academic writing. Skills are stored in `skills/{skill-name}/SKILL.md` and configured in `.claude-plugin/plugin.json`.

## Directory Structure

```
academic-writer-skills/
├── skills/                    # 27 skill directories
│   └── {skill-name}/
│       └── SKILL.md           # Skill definition file
├── .claude-plugin/
│   ├── plugin.json            # Plugin manifest (source of truth)
│   └── marketplace.json       # Marketplace listing (mirrors plugin.json)
├── manifests/
│   ├── install-modules.json   # Module group definitions
│   ├── install-components.json # Component-to-module mapping
│   └── install-profiles.json  # Preset installation profiles
├── contexts/
│   ├── writing.md             # Writing mode context
│   ├── research.md            # Research mode context
│   └── review.md              # Review mode context
├── scripts/
│   ├── install.js             # Node.js selective installer
│   └── install-plan.js        # Installation plan viewer
├── .github/
│   └── workflows/             # CI/CD pipelines
├── GEMINI.md                  # Gemini CLI integration guide
├── AGENTS.md                  # Multi-agent workflow guide
├── CLAUDE.md                  # This file
├── .cursorrules               # Cursor IDE rules
├── install.sh                 # Bash installer wrapper
└── README.md                  # User documentation
```

## Skill Format Specification

Every skill MUST follow this format:

```markdown
# {Skill Display Name}

## Overview
[2-3 sentence description of what this skill does and when to use it]

## Capabilities

### {Capability Group 1}
[Description and examples]

### {Capability Group 2}
[Description and examples]

## Usage Examples

### Example 1: {Use Case}
[Prompt and expected output description]

### Example 2: {Use Case}
[Prompt and expected output description]

## {Domain-Specific Sections}
[e.g., Citation Styles, Statistical Formats, Funder Requirements]

## Integration with Other Skills
[Which skills this one commonly works with and in what order]
```

## Skill Quality Checklist

Before adding or modifying a skill, verify:
- [ ] Skill file is at `skills/{name}/SKILL.md`
- [ ] Skill name matches directory name exactly
- [ ] Skill is listed in `.claude-plugin/plugin.json` with correct path
- [ ] Skill name matches `manifests/install-modules.json` exactly
- [ ] Minimum 200 lines of substantive content
- [ ] At least 5 concrete usage examples with prompts
- [ ] Covers at least 3 distinct use cases
- [ ] Includes integration guidance with related skills
- [ ] No hardcoded personal details (institution names, personal emails)
- [ ] References are accurate (style guides, journal policies, funder requirements)

## Adding a New Skill

1. Create `skills/{new-skill-name}/SKILL.md`
2. Add skill to `.claude-plugin/plugin.json`:
   ```json
   {
     "name": "new-skill-name",
     "displayName": "Display Name",
     "description": "One-line description",
     "path": "skills/new-skill-name/SKILL.md",
     "triggers": ["trigger phrase 1", "trigger phrase 2"]
   }
   ```
3. Sync to `.claude-plugin/marketplace.json`
4. Add skill to appropriate module(s) in `manifests/install-modules.json`
5. Add skill to `manifests/install-profiles.json` full profile
6. Update CHANGELOG.md
7. Update README.md skill count and description

## Updating Existing Skills

When updating a skill:
1. Read the current skill content first
2. Preserve the overall structure
3. Update outdated references (journal policies, style guide versions)
4. Expand thin sections (aim for 200+ lines)
5. Add new examples if applicable
6. Do NOT change the skill's name or directory path

## Manifest Consistency Rule

**Critical:** `.claude-plugin/plugin.json` and `.claude-plugin/marketplace.json` must be identical. Always update both files when making changes.

When updating plugin.json, immediately sync marketplace.json:
```bash
cp .claude-plugin/plugin.json .claude-plugin/marketplace.json
```

## Testing

To validate all skill paths resolve:
```bash
node scripts/validate.js   # (when created)
```

To test installation:
```bash
node scripts/install.js --profile=core --dry-run
node scripts/install.js --profile=full --dry-run
```

## CI Checks

The CI pipeline (`.github/workflows/ci.yml`) checks:
1. Markdownlint on all `.md` files
2. All skill paths in plugin.json resolve to real files
3. No artifact files (*.log, *.zip) committed
4. plugin.json and marketplace.json are identical

Before committing, ensure these pass locally.

## Style Guide for Skill Content

### Tone
- Instructional and clear
- Second person ("you", "your paper")
- Avoid excessive hedging in instructions (be direct)

### Examples
- Use realistic academic content in examples
- Vary disciplines across examples (don't always use psychology)
- Include both correct and incorrect examples where helpful

### Technical Content
- Keep style guide references current (APA 7th, not APA 6th)
- Include journal-specific policies where relevant
- Cite policy sources (e.g., "per APA Publication Manual, 7th ed., p. 198")

## Version Management

- Plugin version is in `package.json` and `.claude-plugin/plugin.json`
- Update both when releasing a new version
- Follow semantic versioning: MAJOR.MINOR.PATCH
  - MAJOR: Breaking changes to skill format or API
  - MINOR: New skills added, significant content additions
  - PATCH: Bug fixes, minor content updates
- Document all changes in `CHANGELOG.md`
