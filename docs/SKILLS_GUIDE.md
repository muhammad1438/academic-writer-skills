# Skills Guide

Detailed per-skill documentation with usage examples, trigger phrases, and cross-references.

---

## academic-writing-core

**When to invoke:** Every academic writing task. This is the entry point that establishes discipline conventions and routes to specialist skills.

**What it produces:**
- Discipline identification (STEM / Social Sciences / Humanities / Law / Medicine / Business)
- Citation style selection
- UK vs. US English decision
- Routing to the appropriate sub-skill

**Example prompts:**
- "Help me write my research paper on climate policy."
- "Make this text sound more academic."
- "I need to write a dissertation chapter."

**Pairs well with:** All other skills — this is the master router.

---

## abstract-writer

**When to invoke:** When writing, rewriting, or evaluating any academic abstract.

**What it produces:**
- Informational or descriptive abstract (correctly identified for context)
- All 5 rhetorical moves present
- Correct tense conventions (past for methods/results, present for implications)
- Keyword list with controlled vocabulary recommendations

**Example prompts:**
- "Write an abstract for my paper on machine learning in radiology."
- "My abstract is 450 words — help me cut it to 250."
- "Is my abstract missing anything?"
- "Write a structured abstract for a medical journal."

**Pairs well with:** `paper-structure` (write after the paper is complete), `grammar-style-checker` (for final polish)

**Discipline notes:**
- Medicine: structured abstract (Background/Objectives/Methods/Results/Conclusions) often mandatory
- Humanities: descriptive abstract may be more appropriate than informational
- STEM: include specific numbers and statistical outcomes

---

## academic-language-toolkit

**When to invoke:** When text needs to be elevated to academic register, or when the user needs hedging language, reporting verbs, or transition phrases.

**What it produces:**
- Hedging language appropriate to the discipline and certainty level
- Reporting verbs categorised by function (supportive, tentative, critical)
- Transition and cohesion devices
- Nominalization guidance
- AWL vocabulary substitutions

**Example prompts:**
- "Make this paragraph sound more academic."
- "What verb should I use to introduce this author's argument?"
- "Add appropriate hedging to these claims."
- "Replace informal words in this text."

**Pairs well with:** `grammar-style-checker` (always use together for comprehensive language review), `paraphrasing-engine`

**Discipline notes:**
- STEM: hedging through statistical language; passive voice often appropriate
- Humanities: hedging through phrases like "arguably," "one might contend"
- Social sciences: heavy use of modal verbs; APA active voice preferred

---

## ai-academic-ethics

**When to invoke:** When any question arises about using AI tools in academic writing or research.

**What it produces:**
- Clear guidance on what AI can and cannot ethically do
- Disclosure statement templates
- Citation formats for AI tools (APA, Vancouver)
- Summary of publisher and institutional policies
- AI detection tool limitations
- Ethical decision framework

**Example prompts:**
- "Can I use Claude to help write my dissertation?"
- "How do I disclose that I used ChatGPT to improve my grammar?"
- "Write a disclosure statement for using AI in my paper."
- "My university uses Turnitin — will it detect AI?"

**Pairs well with:** `citation-formatter` (for citing AI tools), `grammar-style-checker` (appropriate use case for AI)

**Discipline notes:**
- All disciplines: disclosure is mandatory regardless of discipline
- Medical journals (Lancet, NEJM): among strictest policies
- Check current institutional policy — changes rapidly

---

## argumentation-engine

**When to invoke:** When building, evaluating, or strengthening an academic argument.

**What it produces:**
- Choice of argumentation model (Classical / Toulmin / Rogerian) with rationale
- Structured argument with all components made explicit
- Thesis statement evaluation or construction
- Counterargument and rebuttal strategies
- Logical fallacy identification

**Example prompts:**
- "Help me build my argument for why X policy should be adopted."
- "Use the Toulmin model to structure my argument about social media and polarisation."
- "Is my thesis statement strong enough?"
- "Write a counterargument to my position and then rebut it."
- "What logical fallacies are in this passage?"

**Pairs well with:** `paper-structure` (argumentation within a structure), `academic-language-toolkit` (language to express the argument), `literature-review` (evidence base for the argument)

**Discipline notes:**
- Humanities/Law/Philosophy: Classical and Toulmin models most relevant
- Policy/Social sciences: Rogerian model effective for contested social topics
- STEM: argumentation applies primarily to Discussion and Conclusion sections

---

## citation-formatter

**When to invoke:** For any citation, reference, or bibliography task.

**What it produces:**
- Correctly formatted in-text citations
- Correctly formatted reference list / bibliography entries
- Style conversion between formats
- Error identification in existing citations

**Example prompts:**
- "Format this journal article in APA 7th."
- "Convert these APA references to IEEE."
- "How do I cite a website with no author in MLA?"
- "Check my reference list for errors."

**Pairs well with:** `paraphrasing-engine` (integrated with source use), `ai-academic-ethics` (for citing AI tools)

**Discipline notes:**
- APA 7th: Social sciences, psychology, education, nursing
- MLA 9th: Literature, languages, humanities
- IEEE: Engineering, computer science, electronics
- Vancouver: Medicine, biomedicine
- Harvard: UK/Australian universities (check institution's specific variant)
- Chicago NB: History, fine arts; Chicago AD: sciences and social sciences

---

## grammar-style-checker

**When to invoke:** For proofreading, grammar correction, style improvement at sentence and paragraph level.

**What it produces:**
- Voice corrections (active/passive applied correctly)
- Tense consistency corrections by section
- Parallel structure repairs
- Pronoun reference clarifications
- Anthropomorphism removal
- Wordiness reduction (typically 15–25% cut)
- Inclusive language compliance

**Example prompts:**
- "Proofread this methods section."
- "Fix the tense consistency in this paragraph."
- "Make this more concise without losing meaning."
- "Is the voice appropriate for a STEM lab report?"

**Pairs well with:** `academic-language-toolkit` (together they provide comprehensive language review), `abstract-writer` (final polish of the abstract)

---

## literature-review

**When to invoke:** For writing, structuring, or improving a literature review or evidence synthesis.

**What it produces:**
- Thematic organisation of sources (not annotated bibliography)
- Synthesis paragraphs with sources speaking to each other
- Research gap identification and articulation
- PRISMA protocol for systematic reviews
- Critical evaluation of sources' limitations

**Example prompts:**
- "Help me structure my literature review chapter."
- "Synthesise these 8 sources on X."
- "What's the research gap in this literature?"
- "How do I write a PRISMA-compliant systematic review?"

**Pairs well with:** `paraphrasing-engine` (source integration), `argumentation-engine` (building the review's argument), `paper-structure` (positioning the review chapter)

**Discipline notes:**
- Medicine/Health: Systematic reviews with PRISMA required for evidence-based guidelines
- Humanities: Narrative reviews; thematic organisation around interpretive debates
- Social sciences: Both narrative and systematic approaches used

---

## paper-structure

**When to invoke:** When planning or structuring any academic document.

**What it produces:**
- Recommended structure for the identified paper type
- Section-by-section guidance with required content
- CARS model for introductions
- Tense conventions by section
- Paragraph structure templates (PEEL)

**Example prompts:**
- "Help me outline my research paper."
- "What sections should my dissertation have?"
- "How do I structure a health policy brief?"
- "What goes in the Introduction of an IMRaD paper?"

**Pairs well with:** `literature-review` (Chapter 2), `argumentation-engine` (argumentative essay body), `abstract-writer` (to be written after structure is complete)

---

## paraphrasing-engine

**When to invoke:** For paraphrasing sources, avoiding plagiarism, integrating quotations.

**What it produces:**
- Correctly paraphrased versions of source passages
- Detection and correction of patchwriting
- Quotation integration guidance
- Block quote formatting
- Similarity score interpretation guidance

**Example prompts:**
- "Paraphrase this paragraph from the Smith (2020) paper."
- "Is this too close to the original? Check for plagiarism risk."
- "How do I integrate this long quote?"
- "My Turnitin score is 22% — is that okay?"

**Pairs well with:** `citation-formatter` (all paraphrases require citations), `literature-review` (evidence integration)

---

## grant-proposal

**When to invoke:** For writing any competitive research funding application.

**What it produces:**
- Funder-specific structure and guidance (NIH, NSF, EU Horizon, ERC, Wellcome, UKRI)
- Specific Aims page (NIH) or equivalent
- Significance section using Gap → Impact → Solution framework
- Broader Impacts section (NSF)
- Budget justification templates
- Logic model (for foundations and EU grants)
- Pre-emption of common reviewer criticisms

**Example prompts:**
- "Write my NIH Specific Aims page for a study on X."
- "Help me write the Broader Impacts section of my NSF proposal."
- "What do NIH reviewers look for in the Approach section?"
- "Write a budget justification for personnel and supplies."
- "Create a logic model for my EU Horizon proposal."

**Pairs well with:** `research-proposal` (underlying research plan), `literature-review` (background and significance), `academic-language-toolkit` (persuasive precision)

---

## research-proposal

**When to invoke:** For PhD applications, ethics board submissions, internal funding bids.

**What it produces:**
- Complete research proposal structure
- Compelling research question (PICO / RQ framework)
- Theoretical framework section
- Methodology section with design justification
- Timeline / Gantt chart
- Ethics submission structure (IRB / HREC / HRA)

**Example prompts:**
- "Write a 2,000-word PhD research proposal on X."
- "Help me formulate my research question using PICO."
- "What theoretical framework should I use for a study on Y?"
- "Write the ethics section for my IRB submission."
- "Create a Gantt chart for my 3-year PhD."

**Pairs well with:** `literature-review` (background section), `grant-proposal` (funding component), `paper-structure` (structural guidance)

---

## lab-report

**When to invoke:** For writing any scientific lab or experiment report.

**What it produces:**
- Complete lab report structure (Title through References)
- Discipline-specific variants (Chemistry, Biology, Physics, Engineering, Psychology)
- Statistical reporting in APA style
- Figure and table formatting rules
- Methods section with reproducibility standard
- Discussion section guidance

**Example prompts:**
- "Write a lab report for my enzyme kinetics experiment."
- "My methods section is too vague — help me add detail."
- "How do I report these t-test results in APA format?"
- "Format my figures and tables correctly."
- "What should I include in my Discussion section?"

**Pairs well with:** `grammar-style-checker` (tense and voice conventions), `citation-formatter` (references section), `abstract-writer` (lab report abstract)

---

## peer-review-response

**When to invoke:** When responding to journal peer review comments after manuscript submission.

**What it produces:**
- Cover letter to editor
- Point-by-point response letter structure
- Professional responses to each reviewer comment
- Templates for handling difficult situations (contradictory reviewers, impossible requests)
- Resubmission checklist
- Appeals letter template

**Example prompts:**
- "Help me respond to these 15 reviewer comments."
- "Reviewer 1 and Reviewer 2 are asking for opposite things — what do I do?"
- "How do I politely disagree with this reviewer?"
- "Write a cover letter for my major revision submission."
- "The reviewer wants new experiments I can't do — how do I respond?"

**Pairs well with:** `academic-language-toolkit` (professional tone), `grammar-style-checker` (final review of response letter)

---

## statistical-reporting

**When to invoke:** When writing up statistical results in any academic paper or report.

**What it produces:**
- Exact APA 7th format strings for t-tests, ANOVA, correlation, regression, chi-square
- Effect size reporting (Cohen's d, η², partial η², ω², r, f², Cramer's V) with interpretation thresholds
- Power analysis report template (G*Power format)
- Non-parametric test notation (Mann-Whitney U, Wilcoxon, Kruskal-Wallis, Spearman)
- Bayesian reporting (Bayes factors, Jeffreys interpretation scale, posterior distributions)
- Reporting guideline checklist (CONSORT, STROBE, PRISMA, ARRIVE)
- Common errors table (10 items)

**Example prompts:**
- "How do I report my t-test results in APA format?"
- "What effect size should I report for a one-way ANOVA?"
- "My reviewer says I'm missing effect sizes — what should I add?"
- "How do I report a Bayesian analysis in a psychology paper?"
- "Write up my multiple regression results in APA 7th."

**Pairs well with:** `lab-report` (Results section), `grammar-style-checker` (final polish), `figure-table-checker` (statistical figures)

**Discipline notes:**
- Psychology/Education: APA 7th is mandatory
- Medicine/Clinical: CONSORT or STROBE guidelines apply; CIs often preferred over p values
- Ecology/Biology: ARRIVE for animal studies; species-specific reporting norms

---

## latex-writer

**When to invoke:** When writing, structuring, or troubleshooting a LaTeX document.

**What it produces:**
- Document class selection guidance with comparison table
- Minimal working examples for common document types
- Package recommendations with purpose and usage
- BibLaTeX/Biber and BibTeX bibliography management
- Equation formatting in all major environments
- Figure and table code templates
- Journal-specific template guidance (Elsevier, IEEE, ACM, APS, Springer)
- Common error fixes table

**Example prompts:**
- "Write a LaTeX template for an Elsevier journal submission."
- "How do I align equations in LaTeX?"
- "My bibliography isn't appearing — what's wrong?"
- "How do I create a professional table with no vertical lines?"
- "I keep getting 'undefined reference' — how do I fix it?"

**Pairs well with:** `figure-table-checker` (compliance of LaTeX figures/tables), `citation-formatter` (bibliography style decisions), `statistical-reporting` (formatting equations for statistical results)

**Discipline notes:**
- Physics: revtex4-2 for APS journals; siunitx for units
- Computer Science: acmart for ACM; IEEEtran for IEEE conferences
- Mathematics: amsthm for theorem environments; amsmath for proofs
- Humanities: May not use LaTeX; check if required before recommending

---

## figure-table-checker

**When to invoke:** When creating, reviewing, or improving figures and tables in academic papers.

**What it produces:**
- Figure compliance checklist (15 items)
- Table compliance checklist (12 items)
- Error bar selection guide (SD vs SEM vs 95% CI)
- Colorblind-accessible palette (Wong 8-color, Okabe-Ito hex codes)
- APA 7th figure and table formatting rules
- Journal-specific requirements (Nature, Science, Cell, IEEE, Elsevier)
- CONSORT and PRISMA flow diagram element requirements
- Common figure mistakes table (8 items)

**Example prompts:**
- "Check whether my figures comply with APA 7th requirements."
- "What error bars should I use for a comparison between two groups?"
- "Is my colour palette colourblind-accessible?"
- "How do I create a CONSORT flow diagram?"
- "My journal says 300 dpi — how do I check and fix my figure?"

**Pairs well with:** `lab-report` (figure/table section), `statistical-reporting` (statistical figures), `latex-writer` (LaTeX figure code)

**Discipline notes:**
- Medicine: CONSORT mandatory for RCTs; PRISMA for systematic reviews
- STEM journals: Strict resolution and format requirements (TIFF, EPS)
- Psychology: APA caption format (below figure, above table)

---

## journal-selection

**When to invoke:** When deciding where to submit a manuscript.

**What it produces:**
- Journal metrics comparison (IF, CiteScore, SJR, h5-index)
- Open access model decision guide (Gold, Green, Diamond, Hybrid)
- Predatory journal detection checklist (THINK.CHECK.SUBMIT)
- Journal matching workflow (step-by-step)
- Scope fit assessment framework with scoring
- Funder OA mandate overview (NIH, NSF, UKRI, Wellcome, EU Horizon)
- Resubmission strategy after rejection

**Example prompts:**
- "Which journals should I target for my study on X?"
- "Is [journal name] a predatory journal?"
- "My funder requires open access — which route should I take?"
- "My paper was rejected from Nature — what next?"
- "What's the difference between CiteScore and Impact Factor?"

**Pairs well with:** `peer-review-response` (after submission and review), `abstract-writer` (abstract needed for journal finder tools), `reference-verifier` (before final submission)

**Discipline notes:**
- Humanities: IF less meaningful; reputation within community more important
- STEM: High IF journals (Nature, Science, Cell) for breakthrough findings
- Social sciences: APA-published journals common; SSCI indexing important

---

## reference-verifier

**When to invoke:** When checking the accuracy and integrity of a reference list.

**What it produces:**
- Reference error type classification table (10 types)
- DOI verification workflow via CrossRef
- Retraction checking procedure via RetractionWatch
- PubPeer integrity check guidance
- AI-generated citation red flags and detection patterns
- Pre-submission reference audit checklist

**Example prompts:**
- "Check whether these references are accurate."
- "I used AI to draft my paper — are my citations real?"
- "How do I find the DOI for this reference?"
- "Has this paper been retracted?"
- "My co-author's reference list looks suspicious — how do I check it?"

**Pairs well with:** `citation-formatter` (fixing format after verifying accuracy), `ai-academic-ethics` (AI-generated content verification), `journal-selection` (pre-submission checklist)

**Discipline notes:**
- All disciplines: AI-generated citation verification is now essential
- Medicine/Clinical: Retraction checking is especially important for clinical evidence
- Systematic reviews: Every included study must be verified before reporting

---

## data-management-plan

**When to invoke:** When writing or reviewing a DMP for a research grant or project.

**What it produces:**
- Funder requirements table (NIH, NSF, UKRI, EU Horizon Europe)
- FAIR principles with concrete implementation actions
- Standard DMP sections template (7 sections)
- Data types and recommended formats table
- Repository selection guide (Zenodo, Figshare, Dryad, OSF, domain-specific)
- Sensitive data handling section (anonymisation, access levels)
- Metadata standards by discipline
- DMPTool and DMPonline quick-start guidance
- Pre-submission DMP checklist

**Example prompts:**
- "Write a DMP for my NIH R01 grant application."
- "What does NSF require in a data management plan?"
- "Which data repository should I use for my psychology study?"
- "How do I satisfy FAIR data principles in my DMP?"
- "My EU Horizon grant requires a living DMP — what does that mean?"

**Pairs well with:** `grant-proposal` (DMP is often a required component), `research-proposal` (data plan section), `ai-academic-ethics` (open science and transparency)

**Discipline notes:**
- Life sciences: GenBank/NCBI for genomics; ArrayExpress/GEO for expression data
- Social sciences: UK Data Archive; DDI metadata standard; anonymisation essential
- Ecology: PANGAEA for environmental data; EML metadata standard
- Clinical: Data often restricted; use controlled-access repositories (dbGaP, UK Biobank)

---

## cover-letter-writer

**When to invoke:** When preparing to submit a manuscript to a journal, writing a presubmission inquiry, or responding to an invitation to submit.

**What it produces:**
- 5-paragraph cover letter structure (hook, novelty, fit, declarations, reviewers)
- Journal-specific variations (Nature/Science brief format, clinical journals)
- Presubmission inquiry format
- Handling of special situations (prior rejection, related manuscripts, invited submissions)
- Common mistakes table (10 items)

**Example prompts:**
- "Write a cover letter for my manuscript submission to Nature."
- "How do I write a presubmission inquiry?"
- "What should I include in a cover letter for a clinical journal?"
- "Help me format a cover letter after my paper was rejected elsewhere."

**Pairs well with:** `journal-selection` (targeting), `peer-review-response` (if resubmitting after rejection)

**Discipline notes:**
- High-impact journals (Nature, Science, Cell): Very brief format; emphasise novelty
- Clinical journals: Include trial registration, patient consent statements
- Society journals: May require membership status disclosure

---

## qualitative-reporting

**When to invoke:** When writing up qualitative research, including phenomenology, grounded theory, thematic analysis, ethnography, or case study.

**What it produces:**
- Study design write-up (phenomenology, grounded theory, thematic analysis, ethnography, case study)
- Sampling and saturation justification
- Data collection reporting (interviews, focus groups, observation)
- Analysis reporting (coding process, theme development)
- Reflexivity statement
- Trustworthiness demonstration (credibility, transferability, dependability, confirmability)
- COREQ and SRQR checklists
- Common mistakes table (10 items)

**Example prompts:**
- "How do I write a qualitative methods section?"
- "Write up my thematic analysis results."
- "What is a reflexivity statement?"
- "How do I report saturation in a grounded theory study?"
- "Check my qualitative paper against COREQ."

**Pairs well with:** `academic-language-toolkit` (reporting verbs, hedging), `grammar-style-checker` (tense conventions)

**Discipline notes:**
- Health/medicine: COREQ checklist often required
- Social sciences: SRQR or discipline-specific standards
- Psychology: APA 7th qualitative reporting standards

---

## thesis-dissertation-guide

**When to invoke:** When planning, structuring, or writing a PhD or master's thesis or dissertation.

**What it produces:**
- Thesis type selection (monograph vs. article-based)
- Chapter structure by discipline (humanities, sciences, social sciences)
- Introduction chapter structure (hook, gap, aims, overview)
- Literature review chapter guidance (integration vs. summary)
- Theoretical framework chapter
- Methodology chapter elements
- Results/findings chapter organisation
- Discussion chapter structure
- Conclusion chapter elements
- Voice and tense conventions by chapter
- Examiner expectations (UK viva, US defense)
- Country-specific requirements (UK, US, Australia, EU)
- Timeline and milestone management
- Working with supervisors

**Example prompts:**
- "Help me structure my 80,000-word PhD thesis."
- "What should go in my dissertation introduction?"
- "How do I write a literature review chapter?"
- "What do UK examiners look for in a viva?"
- "Create a timeline for my 3-year PhD."

**Pairs well with:** `paper-structure` (individual chapter guidance), `literature-review` (Chapter 2), `research-proposal` (planning stage)

**Discipline notes:**
- Humanities: 70,000–100,000 words; monograph format common
- Sciences: Article-based thesis common; 60,000–80,000 words
- Social sciences: Mix of formats; methodology chapter critical

---

## plain-language-summary

**When to invoke:** When writing for non-expert audiences, funder-mandated lay summaries, patient summaries, or public engagement.

**What it produces:**
- 4-move lay summary structure (hook, what we did, what we found, why it matters)
- 100-word and 250-word templates
- Press release format
- Social media translation (Twitter thread, LinkedIn, blog)
- Policy brief format
- Readability targets and tools
- Funder requirements (Wellcome, NIHR, EU Horizon, NHMRC, NIH)
- Journal requirements (PLOS, Nature, BMJ)
- Common mistakes table

**Example prompts:**
- "Write a lay summary of my research for Wellcome."
- "Create a patient summary for my clinical trial."
- "Explain my study to a general audience."
- "Help me write a press release about my paper."
- "What readability level should I target for a lay summary?"

**Pairs well with:** `abstract-writer` (parallel to academic abstract), `grammar-style-checker` (plain language techniques)

**Discipline notes:**
- Health/medicine: Patient summaries often required; Grade 6–8 reading level
- Social sciences: Policy brief format for impact
- STEM: Focus on concrete examples and real-world relevance

---

## preregistration-guide

**When to invoke:** When preregistering a study, writing a registered report, or planning open science practices.

**What it produces:**
- Preregistration platform comparison (OSF, AsPredicted, PROSPERO, ClinicalTrials.gov, EGAP)
- Registered Reports format and journal list
- Hypothesis writing (directional, falsifiable, tied to theory)
- Sample size justification (power analysis)
- Analysis plan specification
- Deviation documentation
- Citation of preregistration
- Common mistakes table

**Example prompts:**
- "How do I preregister my study on OSF?"
- "Write a preregistration for my experiment."
- "What's the difference between OSF and AsPredicted?"
- "How do I write a registered report?"
- "What should I include in a pre-analysis plan?"

**Pairs well with:** `grant-proposal` (often required by funders), `research-proposal` (early planning), `statistical-reporting` (analysis plan)

**Discipline notes:**
- Psychology: Increasingly standard; required by many journals
- Medicine/clinical: Clinical trial registration legally required
- Economics: Pre-analysis plans common for RCTs
- Ecology/evolution: Growing adoption

---

## conference-presentation

**When to invoke:** When designing a conference poster, preparing slides for an academic talk, writing a conference abstract, or preparing for a presentation.

**What it produces:**
- Poster layout templates with dimensions (A0, US standard, large format)
- Visual hierarchy and typography guidelines
- Oral presentation structure (5–60 minutes)
- Slide design principles (one idea per slide, 6×6 rule)
- Conference abstract format (250–500 words)
- Q&A preparation strategies
- Software guidance (PowerPoint, Canva, Figma, LaTeX beamerposter)
- Common mistakes tables for posters and presentations

**Example prompts:**
- "Design my conference poster for an A0 display."
- "Help me create slides for my 15-minute research talk."
- "Write my conference abstract (300 words)."
- "Convert my paper into a poster presentation."
- "What should I put on my research poster?"
- "Prepare me for Q&A after my presentation."

**Pairs well with:** `abstract-writer` (conference abstracts), `figure-table-checker` (poster figures), `latex-writer` (beamer slides, beamerposter)

**Discipline notes:**
- STEM: Heavy use of figures and data visualisation; minimal text
- Humanities: May include more textual analysis; quotations prominent
- Social sciences: Mixed methods may require both quantitative figures and qualitative quotes
- Medical: Structured abstracts; CONSORT diagrams for trial presentations

---

## academic-cv

**When to invoke:** When creating or improving academic CVs, research statements, teaching philosophies, diversity statements, or preparing academic job applications.

**What it produces:**
- Comprehensive academic CV format (5–15 pages)
- Research statement (Past → Present → Future structure)
- Teaching philosophy with evidence
- Diversity/inclusion statement
- Academic cover letters (1.5–2 pages)
- Tenure dossier components
- Country-specific requirements (US, UK, EU, Australia)
- Templates for CV, research statement, teaching philosophy, cover letter

**Example prompts:**
- "Write my academic CV for a faculty position."
- "Help me develop my research statement."
- "Write a teaching philosophy for a teaching-focused position."
- "Create an academic cover letter for a US research university."
- "What should go in my tenure dossier?"
- "How do I write a diversity statement?"

**Pairs well with:** `grant-proposal` (research funding record), `cover-letter-writer` (journal cover letters are different), `academic-language-toolkit` (professional tone)

**Discipline notes:**
- All disciplines: CV is comprehensive; length grows with career
- US: Cover letter, research statement, teaching statement, diversity statement often required
- UK: More concise CV; research plan often shorter
- Australia: Selection criteria must be explicitly addressed
- EU: Europass format sometimes required
