# Academic Writer Skills — Multi-Agent Workflow Guide

This document describes how to orchestrate multiple Academic Writer skills in multi-agent pipelines for complex academic writing tasks.

## Overview

The Academic Writer plugin uses `academic-writing-core` as the master orchestrator skill that routes tasks to 26 specialist skills. In multi-agent systems, you can run skills in parallel or sequence depending on task dependencies.

## Skill Dependency Map

```
academic-writing-core (orchestrator)
├── paper-structure          → defines sections for other skills
├── literature-review        → feeds into argumentation-engine
├── argumentation-engine     → feeds into paper-structure
├── abstract-writer          → requires completed paper/draft
├── grammar-style-checker    → final pass, no dependencies
├── citation-formatter       → runs on any draft
├── reference-verifier       → validates citation-formatter output
├── statistical-reporting    → parallel with other sections
├── figure-table-checker     → parallel with other sections
├── journal-selection        → informs cover-letter-writer
└── cover-letter-writer      → requires completed paper
```

## Pipeline Patterns

### Pattern 1: Full Research Paper

Run in sequence (each step depends on previous):

```
Step 1 (Structure):
  Agent: paper-structure
  Input: topic, paper type, discipline, target journal
  Output: section outline with word counts

Step 2 (Parallel research):
  Agent A: literature-review
    Input: topic, key sources
    Output: synthesised literature section
  Agent B: statistical-reporting
    Input: statistical results
    Output: formatted results section

Step 3 (Writing):
  Agent: academic-writing-core
  Input: outline + literature + results
  Output: full draft

Step 4 (Parallel polish):
  Agent A: grammar-style-checker
    Input: full draft
    Output: corrected draft
  Agent B: citation-formatter
    Input: reference list
    Output: formatted bibliography
  Agent C: figure-table-checker
    Input: figures and tables
    Output: compliance report

Step 5 (Abstract):
  Agent: abstract-writer
  Input: completed paper
  Output: structured abstract

Step 6 (Publication prep):
  Agent A: journal-selection
    Input: paper topic, target IF
    Output: journal recommendations
  Agent B: cover-letter-writer
    Input: paper + selected journal
    Output: submission cover letter
```

### Pattern 2: Grant Application Pipeline

```
Step 1 (Parallel, independent):
  Agent A: grant-proposal
    Task: Write Specific Aims (NIH) or Project Summary (NSF)
  Agent B: research-proposal
    Task: Write research background and significance

Step 2 (Parallel):
  Agent A: grant-proposal
    Task: Write Research Strategy - Innovation section
  Agent B: data-management-plan
    Task: Write funder-compliant DMP
  Agent C: statistical-reporting
    Task: Format power analysis for sample size justification

Step 3 (Sequential):
  Agent: grant-proposal
    Task: Write Research Strategy - Approach section using outputs from Step 2

Step 4 (Final):
  Agent: cover-letter-writer
    Task: Write grant submission cover letter
```

### Pattern 3: Thesis/Dissertation Writing

```
Week 1-2 (Parallel):
  Agent A: thesis-dissertation-guide
    Task: Create chapter outlines and word targets
  Agent B: literature-review
    Task: Draft Chapter 2 (Literature Review)
  Agent C: research-proposal
    Task: Draft methodology framework

Week 3-4 (Parallel):
  Agent A: paper-structure
    Task: Draft Introduction chapter
  Agent B: qualitative-reporting OR statistical-reporting
    Task: Draft Results chapter (depending on method type)
  Agent C: argumentation-engine
    Task: Build Discussion chapter arguments

Week 5 (Sequential):
  Agent: grammar-style-checker
    Task: Full thesis copy-edit
  Then: citation-formatter
    Task: Format all references
  Then: abstract-writer
    Task: Write dissertation abstract

Final:
  Agent: thesis-dissertation-guide
    Task: Viva preparation — likely questions and answers
```

### Pattern 4: Systematic Literature Review

```
Step 1 (Research design):
  Agent: preregistration-guide
    Task: Prepare PROSPERO registration
    Output: Registered protocol

Step 2 (Parallel):
  Agent A: literature-review
    Task: Systematic review protocol (PRISMA)
  Agent B: statistical-reporting
    Task: Meta-analysis planning if applicable

Step 3 (Writing, parallel):
  Agent A: paper-structure
    Task: Structure systematic review paper
  Agent B: figure-table-checker
    Task: Create PRISMA flow diagram template

Step 4 (Final):
  Agent: abstract-writer
    Task: Write systematic review abstract
  Then: journal-selection
    Task: Select appropriate systematic review journal
```

### Pattern 5: Rapid Paper Revision (Post-Review)

```
Step 1 (Assessment):
  Agent: peer-review-response
    Task: Categorise reviewer comments by severity and type
    Output: Prioritised action list

Step 2 (Parallel revisions):
  Agent A: argumentation-engine
    Task: Strengthen arguments as requested by reviewers
  Agent B: statistical-reporting
    Task: Add additional statistical analyses requested
  Agent C: grammar-style-checker
    Task: Apply language corrections

Step 3 (Response letter):
  Agent: peer-review-response
    Task: Write point-by-point response letter

Step 4 (Final checks):
  Agent A: reference-verifier
    Task: Verify any new citations added
  Agent B: abstract-writer
    Task: Update abstract to reflect revisions
```

## Sequential vs. Parallel Decision Guide

### Run in PARALLEL when:
- Skills work on independent sections (Introduction vs. Methods vs. Results)
- Skills work on different aspects of the same content (grammar check + citation format)
- Skills produce outputs that don't depend on each other
- Time efficiency is important

### Run in SEQUENCE when:
- Later skills need output from earlier skills
- Example: `paper-structure` must complete before section-specific writers begin
- Example: `journal-selection` must complete before `cover-letter-writer` can name the target journal
- Example: Full draft must exist before `abstract-writer` runs
- Example: `peer-review-response` assessment must complete before revision agents begin

## Orchestrator Skill: academic-writing-core

The `academic-writing-core` skill serves as the routing hub. When used as an orchestrator:

**Input signals it uses to route:**
- Explicit task type ("write an abstract", "format citations")
- Document type (thesis, journal article, grant)
- Discipline (detected from terminology, citation style)
- Stage of writing (early draft, revision, submission-ready)

**Routing rules:**
```
"write abstract" or "abstract" → abstract-writer
"literature review" or "synthesise" → literature-review
"argument" or "thesis statement" → argumentation-engine
"cite" or "reference" or "bibliography" → citation-formatter
"grammar" or "proofread" or "style" → grammar-style-checker
"statistics" or "t-test" or "ANOVA" → statistical-reporting
"structure" or "outline" or "sections" → paper-structure
"grant" or "NIH" or "NSF" or "funding" → grant-proposal
"thesis" or "dissertation" or "PhD" → thesis-dissertation-guide
"reviewer" or "rebuttal" or "response" → peer-review-response
"journal" or "where to publish" → journal-selection
"LaTeX" or ".tex" or "beamer" → latex-writer
"AI" or "ChatGPT" or "disclosure" → ai-academic-ethics
"qualitative" or "thematic" or "COREQ" → qualitative-reporting
"preregister" or "OSF" or "PROSPERO" → preregistration-guide
"poster" or "slides" or "conference" → conference-presentation
"CV" or "curriculum vitae" or "faculty" → academic-cv
"lay summary" or "plain language" or "public" → plain-language-summary
"data management" or "DMP" or "FAIR" → data-management-plan
"cover letter" or "submission letter" → cover-letter-writer
"paraphrase" or "plagiarism" → paraphrasing-engine
"verify" or "retracted" or "check citation" → reference-verifier
"lab report" or "experiment report" → lab-report
"figure" or "table" or "error bar" → figure-table-checker
"research proposal" or "PhD proposal" → research-proposal
"academic language" or "hedging" or "nominalization" → academic-language-toolkit
```

## Context Files for Agent Priming

Before running skill agents, prime them with appropriate context:

```bash
# Writing mode — for all writing and drafting tasks
@contexts/writing.md

# Research mode — for literature review, analysis, synthesis
@contexts/research.md

# Review mode — for editing, proofreading, peer review response
@contexts/review.md
```

## Quality Gates Between Agents

Add quality checkpoints between pipeline stages:

```
After literature-review:
  → Check: synthesis vs. summary ratio (aim for >70% synthesis)
  → Check: research gaps identified
  → Check: sources are recent (>50% within 10 years, field-dependent)

After argumentation-engine:
  → Check: Toulmin components present (claim, grounds, warrant)
  → Check: counterarguments addressed
  → Check: no logical fallacies

After grammar-style-checker:
  → Check: passive voice <30%
  → Check: no contractions remain
  → Check: consistent tense per section

After citation-formatter:
  → Trigger: reference-verifier on all citations
  → Check: consistent citation style throughout

After paper-structure:
  → Check: word count targets per section are specified
  → Check: all IMRaD (or equivalent) sections present
```

## Error Handling in Agent Pipelines

Common failure modes and recovery strategies:

| Failure | Detection | Recovery |
|---------|-----------|----------|
| Literature review too descriptive | >50% of paragraphs summarise single paper | Re-run with explicit "synthesise across papers" instruction |
| Abstract too long | Word count check | Re-run abstract-writer with stricter word limit |
| Citation style inconsistency | Mixed APA/MLA patterns | Re-run citation-formatter on full bibliography |
| Statistical formatting errors | Fails APA format check | Re-run statistical-reporting with specific test names |
| Cover letter too generic | Missing journal name or paper specifics | Re-run with explicit journal and paper title |

## Claude Code Multi-Agent Example

```bash
# Using Claude Code's Agent tool for parallel pipeline
# Run literature review and methods in parallel, then combine

# Agent 1: Literature Review
claude -p "Using the literature-review skill, synthesise these papers on [topic]: [list]"

# Agent 2: Methods (parallel)
claude -p "Using the paper-structure skill, draft a Methods section for a quantitative study on [topic]"

# After both complete, combine and write abstract
claude -p "Using the abstract-writer skill, write a structured abstract for a paper that: [summary of lit review and methods]"
```
