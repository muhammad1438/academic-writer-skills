---
name: academic-writing-core
description: Master skill for producing, editing, evaluating, and transforming any text into high-quality academic writing. Use this skill whenever the user asks to write, improve, rewrite, or review academic content — including essays, research papers, dissertations, journal articles, reports, abstracts, literature reviews, or any scholarly text. Also trigger for requests like "make this sound more academic," "write this in an academic tone," "help me with my thesis," "improve my research paper," or any task involving academic language, structure, or conventions. This is the primary entry point — it routes to specialist sub-skills as needed.
---

# Academic Writing Core

This is the master orchestrator for all academic writing tasks. It defines the foundational principles that govern all sub-skills and routes complex tasks to the appropriate specialist skill.

## Core Philosophy

Academic writing is NOT a single style. It is a **complex ecology of distinct discourse communities**, each governed by its own epistemological values (what counts as knowledge) that dictate rhetorical conventions, syntactic preferences, and structural paradigms. Before producing any academic text, establish:

1. **Discipline** — Which field? (STEM / Social Sciences / Humanities / Law / Medicine / Business)
2. **Paper Type** — What genre? (Essay / Research Paper / Dissertation / Review / Report)
3. **Citation Style** — Which format? (APA / MLA / Chicago / IEEE / Vancouver / Harvard)
4. **Audience** — Experts in the field? Interdisciplinary? Instructors?
5. **Regional Tradition** — US English or UK English?

---

## Discipline-Specific Conventions at a Glance

### Humanities (Literature, History, Philosophy, Art History)
- **Voice:** Active voice preferred — emphasizes human agency and interpretation
- **Evidence:** Direct quotation is primary evidence; exact wording of sources is deeply valued
- **Tone:** Reflective, interpretive, argumentative; nuanced close reading
- **Citation:** MLA (literature), Chicago NB (history/arts)
- **Key genres:** Literary analysis, historical monograph, philosophical argument essay
- **First-person:** Generally permitted for interpretive stance

### Social Sciences (Psychology, Sociology, Education, Political Science)
- **Voice:** Mix; APA recommends active ("We conducted") for clarity
- **Evidence:** Paraphrase and synthesis of existing research dominates; statistics
- **Tone:** Strictly objective; extensive exploration of complex social phenomena
- **Citation:** APA 7th (psychology, education), Chicago Author-Date (political science)
- **Key genres:** Empirical research report, literature review, case study
- **First-person:** Permitted in APA 7th ("We found that...")

### STEM (Physics, Engineering, Biology, Computer Science, Chemistry)
- **Voice:** Historically passive ("The experiment was conducted") — focuses on the phenomenon, not the researcher. Modern guidelines increasingly allow active for clarity.
- **Evidence:** Data, statistics, empirical reproducibility
- **Tone:** Strictly objective, information-dense, highly structured
- **Citation:** IEEE (engineering/CS), Vancouver (biomedicine), ACS (chemistry), CSE (sciences)
- **Key genres:** Lab report, technical report, conference paper, journal manuscript
- **First-person:** Traditionally avoided; check journal guidelines

### Medicine and Health Sciences
- **Voice:** Passive dominant in clinical documentation; active allowed in discussion
- **Tone:** User-centered, legally precise, unambiguous
- **Evidence:** Clinical data, trials, systematic reviews; GRADE evidence hierarchy
- **Citation:** Vancouver (ICMJE) for journal manuscripts; APA for nursing education
- **Key genres:** SOAP notes, systematic reviews, clinical case reports, health policy briefs

### Business and Management
- **Voice:** Active preferred — direct, persuasive, efficient
- **Tone:** Professional, persuasive, user-centered; "accentuating the positives"
- **Style:** HATS procedure (Headings, Art, Typography, Space) for document design
- **Citation:** APA or Chicago Author-Date
- **Key genres:** Business memo, white paper, market analysis, executive summary, grant proposal

### Law
- **Voice:** Formal, precise, often impersonal
- **Tone:** Authoritative, structured, precedent-based
- **Citation:** Jurisdiction-specific (Bluebook for US, OSCOLA for UK)
- **Key genres:** Legal memoranda, case briefs, appellate briefs, law review articles

---

## UK vs. US English — Quick Reference

| Feature | US English | UK English |
|---|---|---|
| Suffix | -ize, -yze (analyze, prioritize) | -ise, -yse (analyse, prioritise) |
| Ending | -or (color, behavior) | -our (colour, behaviour) |
| Consonants | Single (canceled, traveled) | Double (cancelled, travelled) |
| Punctuation | Periods/commas INSIDE "quotes." | Periods/commas OUTSIDE 'quotes'. |
| Collective nouns | Singular (The team is…) | Often plural (The team are…) |
| Past participle | -ed (learned, burned) | -t or -ed (learnt, burnt) |

**Rule:** Never mix traditions within a single document. Choose one and be consistent throughout.

---

## Routing to Sub-Skills

When the task falls into a specialist area, read the relevant SKILL.md:

| Task | Sub-Skill |
|---|---|
| Format or generate citations | `citation-formatter/SKILL.md` |
| Academic vocabulary, hedging, transitions | `academic-language-toolkit/SKILL.md` |
| Write or improve an abstract | `abstract-writer/SKILL.md` |
| Paraphrase a source or avoid plagiarism | `paraphrasing-engine/SKILL.md` |
| Write or structure a literature review | `literature-review/SKILL.md` |
| Structure a full paper (IMRAD, essay, etc.) | `paper-structure/SKILL.md` |
| Build an argument or critical analysis | `argumentation-engine/SKILL.md` |
| Fix grammar, tone, style | `grammar-style-checker/SKILL.md` |
| AI disclosure, ethics in academic writing | `ai-academic-ethics/SKILL.md` |
| Write a grant proposal (NSF, NIH, EU, etc.) | `grant-proposal/SKILL.md` |
| Write a research proposal (PhD, ethics, funding) | `research-proposal/SKILL.md` |
| Write a lab report | `lab-report/SKILL.md` |
| Respond to peer review / write a rebuttal letter | `peer-review-response/SKILL.md` |
| Report statistical results | `statistical-reporting/SKILL.md` |
| Write or compile in LaTeX | `latex-writer/SKILL.md` |
| Check figures or tables | `figure-table-checker/SKILL.md` |
| Choose a journal to submit to | `journal-selection/SKILL.md` |
| Verify reference accuracy | `reference-verifier/SKILL.md` |
| Write a data management plan | `data-management-plan/SKILL.md` |
| Write a journal submission cover letter | `cover-letter-writer/SKILL.md` |
| Report qualitative research findings | `qualitative-reporting/SKILL.md` |
| Write a thesis or dissertation | `thesis-dissertation-guide/SKILL.md` |
| Write a plain-language or lay summary | `plain-language-summary/SKILL.md` |
| Preregister a research study | `preregistration-guide/SKILL.md` |
| Design a conference poster or presentation | `conference-presentation/SKILL.md` |
| Write an academic CV or job application materials | `academic-cv/SKILL.md` |

---

## Publication Track

For researchers submitting to journals or applying for funding, the typical workflow is:

1. **Plan** → `paper-structure/SKILL.md` or `research-proposal/SKILL.md`
2. **Research** → `literature-review/SKILL.md` + `argumentation-engine/SKILL.md`
3. **Write** → `academic-language-toolkit/SKILL.md` + `abstract-writer/SKILL.md`
4. **Edit** → `grammar-style-checker/SKILL.md` + `citation-formatter/SKILL.md`
5. **Funding** → `grant-proposal/SKILL.md`
6. **Respond to reviewers** → `peer-review-response/SKILL.md`

## Coursework Track

For students writing essays, reports, and dissertations:

1. **Structure** → `paper-structure/SKILL.md`
2. **Research** → `literature-review/SKILL.md`
3. **Write** → `academic-language-toolkit/SKILL.md` + `paraphrasing-engine/SKILL.md`
4. **Lab work** → `lab-report/SKILL.md`
5. **Edit** → `grammar-style-checker/SKILL.md` + `citation-formatter/SKILL.md`
6. **Ethics** → `ai-academic-ethics/SKILL.md`

---

## Universal Quality Checklist

Before finalizing any academic output, verify:

- [ ] Correct discipline conventions applied (voice, tone, evidence type)
- [ ] Consistent US or UK English throughout
- [ ] Citation style applied correctly and consistently
- [ ] Every claim supported by evidence or hedged appropriately
- [ ] No plagiarism — all sources cited, all paraphrases genuinely reworded
- [ ] No anthropomorphism (theories don't "argue" or "feel")
- [ ] Parallel structure in lists, headings, comparisons
- [ ] Appropriate tense conventions per section
- [ ] Bias-free, inclusive language throughout
- [ ] Abstract accurately represents the paper

---

## Key Resources Referenced
- Purdue OWL: Writing in the Disciplines
- APA Publication Manual 7th Edition
- University of Manchester Academic Phrasebank
- Averil Coxhead's Academic Word List (AWL)
