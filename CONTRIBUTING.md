# Contributing to Academic Writer

Thank you for considering contributing to the Academic Writer plugin. This guide explains how to add new skills, improve existing ones, and maintain quality standards.

---

## Adding a New Skill

### Step 1: Identify the Gap
Before creating a new skill, verify that:
- The skill covers a distinct domain not addressed by existing skills
- It has sufficient depth to justify its own file (not just a subsection of an existing skill)
- There is clear demand from academic writers

### Step 2: Create the Skill Directory
```bash
mkdir -p 1.0.0/skills/<skill-name>
touch 1.0.0/skills/<skill-name>/SKILL.md
```

### Step 3: Write the SKILL.md

Every skill file must follow this structure:

```markdown
---
name: skill-name
description: [One comprehensive paragraph that serves as the trigger description.
Include all trigger phrases that should activate this skill. Be explicit about
what types of user requests should invoke this skill.]
---

# Skill Display Name

[Brief introductory sentence establishing the skill's purpose and importance.]

---

## Section 1 Heading

[Content...]

---

## Section 2 Heading

[Content...]
```

### Frontmatter Requirements
- `name`: Lowercase, hyphenated, matches the directory name exactly
- `description`: Must include explicit trigger phrases in the format "Trigger for: 'phrase 1,' 'phrase 2,' ..." This description is used for routing — be comprehensive

### Content Quality Checklist
- [ ] Covers the full scope of the domain (not just common cases)
- [ ] Includes discipline-specific variants where relevant
- [ ] Contains at least one comparison table
- [ ] Includes a "Common Mistakes" or "Common Errors" table
- [ ] Provides ready-to-use templates or examples
- [ ] Includes cross-references to related skills where appropriate
- [ ] Minimum 600 words of substantive content

### Step 4: Update the Routing Table
Add the new skill to `academic-writing-core/SKILL.md` in the "Routing to Sub-Skills" table:
```markdown
| Task description | `new-skill/SKILL.md` |
```

### Step 5: Update Plugin Manifests
Add the skill to both `.claude-plugin/plugin.json` (in the keywords) and `.claude-plugin/marketplace.json` (in the `skills` array).

### Step 6: Update Documentation
- Add a section to `docs/SKILLS_GUIDE.md`
- Update the Mermaid diagrams in `docs/skill-map.md` and `docs/workflow.md` as needed
- Add the skill to the README skills table

---

## Improving an Existing Skill

### Guidelines
- Preserve existing content structure; add to it rather than replacing
- Update the frontmatter `description` if new trigger phrases are identified
- Add new tables, examples, or discipline variants as needed
- Do not remove existing content that may serve users in less common cases

### Pull Request Requirements
- State which skill(s) you are improving
- Describe specifically what content was added, corrected, or updated
- If correcting factual information, cite the authoritative source

---

## Style Guide for Skill Content

### Language
- Write in clear, direct academic prose — not informal, not condescending
- Use "the writer," "the researcher," or "you" (second person is acceptable for instructional content)
- Avoid meta-commentary like "This section will teach you..." — just teach it

### Tables
- Use tables for comparisons, options, and reference material
- All tables must have header rows
- Aim for 3–5 columns maximum for readability

### Examples
- Every major technique or rule should have at least one concrete example
- Use realistic academic examples, not trivial toy examples
- Mark good examples with ✓ and bad examples with ✗

### Structure
- Use `##` for major sections, `###` for subsections
- Use `---` horizontal rules between major sections
- Bold key terms on first use
- Use bullet lists for parallel items; use numbered lists for sequences

---

## Pull Request Process

1. Fork the repository
2. Create a feature branch: `git checkout -b add-skill-name` or `git checkout -b improve-skill-name`
3. Make your changes following the guidelines above
4. Test that your SKILL.md renders correctly (view in a Markdown previewer)
5. Update the CHANGELOG.md under `[Unreleased]`
6. Submit a pull request with a clear description of what was added or changed

---

## Questions

Open an issue on GitHub for any questions about the contribution process.
