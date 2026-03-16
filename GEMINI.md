# Academic Writer Skills — Gemini CLI Integration Guide

This file configures the Academic Writer Skills plugin for use with **Google Gemini CLI**.

## Quick Start

```bash
# Load all context files
gemini -p @GEMINI.md

# Load with a specific context mode
gemini -p @contexts/writing.md @GEMINI.md

# Load for research tasks
gemini -p @contexts/research.md @GEMINI.md

# Load for editing/review tasks
gemini -p @contexts/review.md @GEMINI.md
```

## What This Plugin Does

The Academic Writer Skills plugin provides 27 specialist AI skills covering the complete academic writing lifecycle:

| Category | Skills |
|----------|--------|
| **Core Writing** | academic-writing-core, paper-structure, grammar-style-checker, academic-language-toolkit, paraphrasing-engine |
| **Citations** | citation-formatter, reference-verifier |
| **Grants** | grant-proposal, data-management-plan, cover-letter-writer |
| **Statistics** | statistical-reporting, figure-table-checker, lab-report |
| **Publication** | journal-selection, peer-review-response, abstract-writer, plain-language-summary |
| **Qualitative** | qualitative-reporting, argumentation-engine |
| **Specialized** | thesis-dissertation-guide, research-proposal, literature-review, preregistration-guide, conference-presentation, academic-cv, latex-writer, ai-academic-ethics |

## Model Recommendations

| Task Type | Recommended Model | Reason |
|-----------|-------------------|--------|
| Citation formatting | `gemini-2.0-flash` | Mechanical, pattern-based |
| Grammar checking | `gemini-2.0-flash` | Fast, cost-effective |
| Argument construction | `gemini-2.0-pro` | Requires deeper reasoning |
| Literature synthesis | `gemini-2.0-pro` | Complex multi-source analysis |
| Grant writing | `gemini-2.0-pro` | High-stakes, nuanced output |
| Thesis structure | `gemini-2.0-pro` | Long-form, complex structure |

## Skill Reference and Example Prompts

### academic-writing-core
**Purpose:** Master orchestrator that routes to specialist skills and applies discipline-specific conventions.

```bash
gemini -p @GEMINI.md "Help me write a research paper on climate change adaptation strategies in coastal cities."
gemini -p @GEMINI.md "Make this paragraph more academic: [paste text]"
gemini -p @GEMINI.md "I need to write an essay on the ethics of genetic engineering."
```

### abstract-writer
**Purpose:** Write and improve academic abstracts for journals, dissertations, and conferences.

```bash
gemini -p @GEMINI.md "Write a structured abstract for my paper on [topic]. It has Introduction, Methods, Results, Discussion sections."
gemini -p @GEMINI.md "Improve this abstract: [paste abstract]"
gemini -p @GEMINI.md "Write a conference abstract (250 words) for a study on [topic]."
gemini -p @GEMINI.md "I need a clinical trial abstract in CONSORT format."
```

### academic-language-toolkit
**Purpose:** Hedging language, reporting verbs, transitions, nominalization, academic vocabulary.

```bash
gemini -p @GEMINI.md "Add appropriate hedging language to this paragraph: [paste text]"
gemini -p @GEMINI.md "Give me a list of reporting verbs for citing sources that show agreement vs. criticism."
gemini -p @GEMINI.md "Make this section sound more academic using nominalization."
gemini -p @GEMINI.md "I need transition phrases to connect my methods section to results."
```

### ai-academic-ethics
**Purpose:** Ethical AI use, disclosure requirements, citation of AI, detection tools.

```bash
gemini -p @GEMINI.md "Can I use AI to help write my dissertation? What do I need to disclose?"
gemini -p @GEMINI.md "How do I cite ChatGPT in APA format?"
gemini -p @GEMINI.md "What is Nature journal's policy on AI-generated content as of 2025?"
gemini -p @GEMINI.md "Help me write an AI disclosure statement for my paper."
```

### argumentation-engine
**Purpose:** Toulmin, Rogerian, Classical models; thesis construction; fallacies; counterargument.

```bash
gemini -p @GEMINI.md "Help me build a Toulmin argument for my thesis that [claim]."
gemini -p @GEMINI.md "Identify the logical fallacies in this argument: [paste text]"
gemini -p @GEMINI.md "Write a counterargument to the position that [claim]."
gemini -p @GEMINI.md "Help me construct a Rogerian argument on the topic of [controversial topic]."
```

### citation-formatter
**Purpose:** Generate and fix citations in APA, MLA, Chicago, IEEE, Vancouver, Harvard, ACS, CSE.

```bash
gemini -p @GEMINI.md "Cite this in APA 7th: Smith, J. (2023). The future of AI. Nature, 612, 45-52."
gemini -p @GEMINI.md "Convert these APA citations to Vancouver format: [paste references]"
gemini -p @GEMINI.md "Format this website citation in Chicago style: [URL and details]"
gemini -p @GEMINI.md "Fix my bibliography — I have a mix of APA and MLA: [paste bibliography]"
```

### grammar-style-checker
**Purpose:** Voice, tense, parallel structure, pronoun reference, punctuation, wordiness.

```bash
gemini -p @GEMINI.md "Proofread this paragraph and fix grammar issues: [paste text]"
gemini -p @GEMINI.md "Is this sentence too informal for an academic paper? [paste sentence]"
gemini -p @GEMINI.md "Fix the parallel structure issues in this list: [paste text]"
gemini -p @GEMINI.md "Reduce wordiness in this abstract: [paste abstract]"
```

### literature-review
**Purpose:** Narrative and systematic reviews, PRISMA, synthesis vs. summary, research gaps.

```bash
gemini -p @GEMINI.md "Help me write a literature review on [topic]. I have these 10 papers: [list]"
gemini -p @GEMINI.md "Should I do a systematic or narrative literature review for my research?"
gemini -p @GEMINI.md "Synthesise these findings from multiple papers: [paste summaries]"
gemini -p @GEMINI.md "Help me identify gaps in the literature on [topic] based on these papers."
gemini -p @GEMINI.md "Create a PRISMA flow diagram description for my systematic review."
```

### paper-structure
**Purpose:** IMRaD, dissertations, essays, case studies, technical reports, policy briefs.

```bash
gemini -p @GEMINI.md "Structure my research paper on [topic] — it's an empirical study in psychology."
gemini -p @GEMINI.md "What sections does a systematic review paper need?"
gemini -p @GEMINI.md "Create an outline for my dissertation on [topic]."
gemini -p @GEMINI.md "How should I structure a policy brief on [topic]?"
```

### paraphrasing-engine
**Purpose:** Paraphrase, summarise, quote correctly; avoid plagiarism and patchwriting.

```bash
gemini -p @GEMINI.md "Paraphrase this passage in my own words: [paste text]"
gemini -p @GEMINI.md "Is this paraphrase too close to the original (patchwriting)? [paste both]"
gemini -p @GEMINI.md "Should I quote or paraphrase this passage? [paste source text]"
gemini -p @GEMINI.md "Summarise this 500-word passage in 100 words."
```

### grant-proposal
**Purpose:** NIH, NSF, EU Horizon, ERC, Wellcome, UKRI proposals.

```bash
gemini -p @GEMINI.md "Write my NIH Specific Aims page for a study on [topic]."
gemini -p @GEMINI.md "Help me write the Broader Impacts section for my NSF proposal."
gemini -p @GEMINI.md "I need an EU Horizon Europe abstract (2000 chars) for a project on [topic]."
gemini -p @GEMINI.md "Write a budget justification for [items] for my NIH R01 grant."
```

### research-proposal
**Purpose:** PhD proposals, ethics submissions, research questions, theoretical frameworks.

```bash
gemini -p @GEMINI.md "Write my PhD research proposal on [topic] — it's a qualitative study."
gemini -p @GEMINI.md "Help me formulate a clear research question for my study on [topic]."
gemini -p @GEMINI.md "Write the theoretical framework section for my research on [topic]."
gemini -p @GEMINI.md "Create a Gantt chart for my 3-year PhD project on [topic]."
```

### lab-report
**Purpose:** Full lab report structure for all sciences; statistical reporting; figure/table formatting.

```bash
gemini -p @GEMINI.md "Write the Methods section for my experiment on [topic]."
gemini -p @GEMINI.md "Help me write the Results section for my lab report — data: [paste data]"
gemini -p @GEMINI.md "Review my Discussion section for a chemistry lab report: [paste text]"
gemini -p @GEMINI.md "Write a complete lab report for [experiment name]."
```

### peer-review-response
**Purpose:** Rebuttal letters, point-by-point responses, handling contradictory reviewers.

```bash
gemini -p @GEMINI.md "Help me respond to Reviewer 2 who says: [paste comment]"
gemini -p @GEMINI.md "Write a professional rebuttal to this reviewer comment: [paste comment]"
gemini -p @GEMINI.md "Two reviewers have contradictory suggestions. How do I respond?"
gemini -p @GEMINI.md "Draft a cover letter for my revised manuscript submission."
```

### statistical-reporting
**Purpose:** APA 7th statistical formats, effect sizes, power analysis, Bayesian reporting.

```bash
gemini -p @GEMINI.md "How do I report a t-test result in APA format? t(48) = 2.34, p = .023"
gemini -p @GEMINI.md "What effect size should I report for an ANOVA? η² or ω²?"
gemini -p @GEMINI.md "Format this Bayesian analysis for publication: [paste results]"
gemini -p @GEMINI.md "Report my chi-square test in APA format: χ²(2) = 8.45, p = .015"
```

### latex-writer
**Purpose:** Document classes, BibLaTeX, equation formatting, journal templates.

```bash
gemini -p @GEMINI.md "Write a LaTeX template for an IEEE conference paper."
gemini -p @GEMINI.md "How do I add a BibLaTeX bibliography to my LaTeX document?"
gemini -p @GEMINI.md "Format this equation in LaTeX: [mathematical expression]"
gemini -p @GEMINI.md "Fix this LaTeX error: overfull \hbox [paste error]"
```

### figure-table-checker
**Purpose:** APA and journal-specific figure/table compliance, colorblind-accessible palettes.

```bash
gemini -p @GEMINI.md "Check my APA table format: [paste table]"
gemini -p @GEMINI.md "What error bars should I use for my bar chart showing group means?"
gemini -p @GEMINI.md "Suggest a colorblind-accessible color palette for my 4-group figure."
gemini -p @GEMINI.md "Help me write a PRISMA flow diagram for my systematic review."
```

### journal-selection
**Purpose:** Journal metrics, open access models, predatory journal detection.

```bash
gemini -p @GEMINI.md "Which journal should I submit my paper on [topic] to? Target IF: 3-5."
gemini -p @GEMINI.md "Is [journal name] a predatory journal?"
gemini -p @GEMINI.md "What are the best open access journals for [field]?"
gemini -p @GEMINI.md "My paper was rejected by [journal]. Where should I resubmit?"
```

### reference-verifier
**Purpose:** DOI verification, retraction checking, AI-hallucinated citation detection.

```bash
gemini -p @GEMINI.md "Check these references for accuracy: [paste bibliography]"
gemini -p @GEMINI.md "Verify this citation exists: [paste citation]"
gemini -p @GEMINI.md "Has this paper been retracted? [paste citation]"
gemini -p @GEMINI.md "I used AI to find sources. Check these citations for hallucinations: [paste]"
```

### data-management-plan
**Purpose:** NIH DMS Policy, NSF DMP, FAIR principles, repository selection.

```bash
gemini -p @GEMINI.md "Write a data management plan for my NIH grant on [topic]."
gemini -p @GEMINI.md "Which data repository should I use for my genomics data?"
gemini -p @GEMINI.md "Help me write an EU Horizon Europe data management plan."
gemini -p @GEMINI.md "What FAIR principles do I need to address in my DMP?"
```

### cover-letter-writer
**Purpose:** Journal submission cover letters, presubmission inquiries.

```bash
gemini -p @GEMINI.md "Write a cover letter for submitting my paper to [journal name]."
gemini -p @GEMINI.md "Help me write a presubmission inquiry to [journal]."
gemini -p @GEMINI.md "Suggest reviewers for my paper on [topic] for the cover letter."
gemini -p @GEMINI.md "Write an ethics declaration section for my cover letter."
```

### qualitative-reporting
**Purpose:** COREQ, SRQR guidelines; thematic analysis; reflexivity statements.

```bash
gemini -p @GEMINI.md "Help me write my qualitative Methods section using COREQ guidelines."
gemini -p @GEMINI.md "How do I report thematic analysis findings?"
gemini -p @GEMINI.md "Write a reflexivity statement for my qualitative study on [topic]."
gemini -p @GEMINI.md "How do I demonstrate trustworthiness in my qualitative research?"
```

### thesis-dissertation-guide
**Purpose:** PhD and master's thesis structure, chapter organisation, viva preparation.

```bash
gemini -p @GEMINI.md "Help me structure my PhD thesis on [topic] — it's a qualitative study."
gemini -p @GEMINI.md "How many chapters should my master's dissertation have?"
gemini -p @GEMINI.md "Help me prepare for my viva voce examination."
gemini -p @GEMINI.md "What should go in my thesis literature review vs. introduction?"
```

### plain-language-summary
**Purpose:** Lay summaries, funder-mandated summaries, patient summaries.

```bash
gemini -p @GEMINI.md "Write a plain-language summary of my paper for the general public."
gemini -p @GEMINI.md "I need a Wellcome Trust lay summary (max 200 words) for my grant."
gemini -p @GEMINI.md "Write a patient summary for my clinical study on [topic]."
gemini -p @GEMINI.md "Convert my abstract into a press release."
```

### preregistration-guide
**Purpose:** OSF, AsPredicted, PROSPERO registration; registered reports.

```bash
gemini -p @GEMINI.md "Help me preregister my study on OSF."
gemini -p @GEMINI.md "Write my AsPredicted preregistration for a study on [topic]."
gemini -p @GEMINI.md "What is a registered report and how do I submit one?"
gemini -p @GEMINI.md "Register my systematic review on PROSPERO — study on [topic]."
```

### conference-presentation
**Purpose:** Research posters, oral presentations, slide design, Q&A preparation.

```bash
gemini -p @GEMINI.md "Help me design a research poster for [conference name]."
gemini -p @GEMINI.md "Create a 15-minute talk outline for my paper on [topic]."
gemini -p @GEMINI.md "Write my conference abstract (300 words) for [conference]."
gemini -p @GEMINI.md "Help me prepare answers to likely Q&A questions about my study."
gemini -p @GEMINI.md "Write a LaTeX beamerposter template for my conference poster."
```

### academic-cv
**Purpose:** Academic CVs, research statements, teaching philosophies, faculty applications.

```bash
gemini -p @GEMINI.md "Help me write my academic CV — I'm applying for a lecturer position."
gemini -p @GEMINI.md "Write a 2-page research statement for my faculty job application."
gemini -p @GEMINI.md "I need a teaching philosophy statement for a university position."
gemini -p @GEMINI.md "Help me write a diversity statement for my faculty application."
```

## Multi-Agent Workflow Examples

### Full Paper Pipeline
```bash
# Step 1: Structure
gemini -p @GEMINI.md "Structure my empirical paper on [topic]."
# Step 2: Write sections
gemini -p @contexts/writing.md @GEMINI.md "Write the Introduction for a paper on [topic] with these key sources: [list]"
# Step 3: Literature review
gemini -p @contexts/research.md @GEMINI.md "Write a literature review synthesising these papers: [list]"
# Step 4: Abstract
gemini -p @GEMINI.md "Write a structured abstract for my completed paper: [paste paper]"
# Step 5: Review and polish
gemini -p @contexts/review.md @GEMINI.md "Check grammar and style: [paste draft]"
```

### Grant Application Pipeline
```bash
gemini -p @GEMINI.md "Write my NIH Specific Aims for a study on [topic] with a budget of $500K."
gemini -p @GEMINI.md "Write the Research Strategy - Significance section."
gemini -p @GEMINI.md "Write a data management plan compliant with NIH DMS Policy."
gemini -p @GEMINI.md "Write the cover letter for my NIH R01 submission."
```

## Gemini-Specific Notes

- **Flash models** are recommended for mechanical tasks (citations, grammar) for speed and cost
- **Pro models** are recommended for complex writing tasks requiring judgment
- Use `@contexts/writing.md` to prime writing mode before complex writing sessions
- Gemini handles long documents well — paste full papers for review tasks
- For systematic tasks, use `gemini --model gemini-2.0-flash-exp` for cost efficiency
