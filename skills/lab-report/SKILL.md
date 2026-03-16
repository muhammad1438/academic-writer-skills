---
name: lab-report
description: Write, structure, and improve lab reports for any scientific discipline. Use this skill whenever the user needs to write a lab report, understand what goes in each section, improve their methods or results section, format figures and tables, report statistics correctly, or understand the conventions of scientific writing. Trigger for: "write my lab report," "what goes in the methods section of a lab report," "how do I write a results section," "how do I report statistics in a lab report," "improve my discussion section," "how should I format my figures," "what tense do I use in a lab report," or any task involving the writing or structure of a scientific experiment report.
---

# Lab Report

A lab report is a formal record of a scientific investigation — its purpose is to communicate what was done, what was found, and what it means with sufficient clarity and detail that another scientist could replicate the work and evaluate the conclusions.

---

## Standard Lab Report Structure

| Section | Purpose | Key Conventions |
|---|---|---|
| **Title** | Identify the experiment | Descriptive, specific; no vague titles |
| **Abstract** | Standalone summary | 150–250 words; all 5 elements present |
| **Introduction** | Context and purpose | Background → gap → hypothesis |
| **Methods** | Reproducibility record | Past tense, passive voice; sufficient detail |
| **Results** | Objective data presentation | No interpretation; figures + statistics |
| **Discussion** | Interpretation and analysis | Relate to hypothesis and literature |
| **Conclusion** | Summary and implications | Brief; no new information |
| **References** | Sources cited | Per discipline style (APA, Vancouver, ACS, CSE) |

---

## Discipline Variants

| Discipline | Key Differences |
|---|---|
| **Chemistry** | Reaction equations in Methods; yield calculations in Results; mechanism discussion; ACS citation style |
| **Biology** | Organism descriptions in Methods; ecological context; species names in italics; CSE or Vancouver citation |
| **Physics** | Error analysis and uncertainty reporting required; significant figures strictly observed; SI units mandatory |
| **Engineering** | May include design specifications; MATLAB/code in appendix; IEEE citation; safety considerations |
| **Psychology** | APA format throughout; ethics statement required; statistical reporting follows APA style strictly |

---

## Title Rules

A good lab report title is **specific and informative**, not vague.

| Weak Title | Strong Title |
|---|---|
| "Enzyme Lab" | "Effect of Temperature on Amylase Activity in Human Saliva" |
| "Electricity Experiment" | "Relationship Between Resistance and Temperature in Copper Wire" |
| "Titration" | "Determination of Acetic Acid Concentration in Commercial Vinegar by Acid-Base Titration" |

**Rule:** The title should allow a reader to understand the experiment's purpose without reading further. Include the key variable(s) and the system studied.

---

## Introduction Section

### Three-Part Structure
1. **Background:** Relevant scientific context — what is already known about this topic?
2. **Rationale:** Why is this experiment being conducted? What gap does it address?
3. **Hypothesis:** A specific, testable prediction stated in the form: "It is hypothesised that [independent variable] will [effect] [dependent variable] because [scientific reasoning]."

### Tense in Introduction
- Established scientific facts: **present tense** ("Enzymes catalyse biochemical reactions by...")
- What the experiment will do: **future or present** ("This experiment investigates...")

### Hypothesis vs. Aim
- **Hypothesis:** A testable prediction with a stated rationale (used in experimental designs)
- **Aim / Objective:** A statement of purpose (used when no specific prediction is possible)

---

## Methods Section

### Core Requirements
The Methods section must contain **sufficient detail for full replication** by another researcher. A reader should be able to repeat your experiment exactly using only your Methods section.

### Conventions
- **Voice:** Passive voice traditional ("Samples were prepared..." not "We prepared samples...")
- **Tense:** Past tense throughout ("The solution was heated to 80°C")
- **Specificity:** Include exact quantities, concentrations, temperatures, durations, equipment models
- **Ethical statement:** Required for studies involving humans or animals

### What to Include
- Participants / materials / specimens (with full specifications)
- Equipment (model numbers where relevant)
- Chemicals and reagents (concentration, supplier, grade where relevant)
- Step-by-step procedure
- Controls used (positive/negative)
- Statistical analysis method

### What NOT to Include
- Results (these go in the Results section)
- Explanations of why you chose the method (this goes in Introduction or Discussion)
- Background literature (this goes in Introduction)

---

## Results Section

### Core Principle
Present data **objectively and without interpretation**. The Results section shows what was found; the Discussion explains what it means.

### Structure
- Begin with a brief statement of what the results address (the research question or hypothesis)
- Present data in logical order (not necessarily chronological)
- Refer to every figure and table in the text
- Do not duplicate data in both text and figures/tables — choose one

### Statistical Reporting — APA Style

**t-test:** t(df) = value, p = value
> "The mean score was significantly higher in the treatment group (M = 8.4, SD = 1.2) than the control group (M = 6.1, SD = 1.5), t(58) = 6.23, p < .001."

**ANOVA:** F(df between, df within) = value, p = value
> "A one-way ANOVA revealed a significant effect of condition, F(2, 87) = 14.3, p < .001."

**Correlation:** r(df) = value, p = value
> "A strong positive correlation was found between X and Y, r(48) = .72, p < .001."

**Effect size:** Always report alongside significance
> "Cohen's d = 0.85, indicating a large effect."

**Reporting p-values:**
- Report exact values where possible: p = .032, p = .001
- Use p < .001 for very small values (not p = .000)
- Never write p = 0

### Figure and Table Formatting Rules

**Figures:**
- Every figure needs: a number, a descriptive caption below, axis labels with units, a legend if multiple conditions
- "Figure 1." appears **below** the figure
- Error bars must be defined in the caption (SEM, SD, 95% CI)
- Never include raw data in a figure title; describe what the figure shows

**Tables:**
- Every table needs: a number, a descriptive title above, column headers, units in headers
- "Table 1." appears **above** the table
- No vertical lines in APA-style tables
- Footnotes below the table explain abbreviations or statistical symbols

---

## Discussion Section

### Structure
1. **Restate the main finding** — What was the key result? (One sentence, no statistics)
2. **Interpret in relation to hypothesis** — Was the hypothesis supported or refuted? What does this mean?
3. **Compare to existing literature** — How do your findings compare to what is already known? (Cite sources)
4. **Explain unexpected results** — If results were not as predicted, why might that be?
5. **Sources of error** — What could have introduced error or bias? How did this affect results?
6. **Limitations** — What are the boundaries of your conclusions?
7. **Implications and future research** — What does this mean? What should be investigated next?

### Discussion vs. Results: The Key Distinction
| Results | Discussion |
|---|---|
| "The reaction rate increased by 40% at 40°C compared to 20°C." | "This finding is consistent with Arrhenius kinetics, which predict exponential rate increases with temperature, and supports the hypothesis that..." |
| "A significant difference was found (p < .05)." | "This suggests that the intervention had a meaningful effect on outcome X, which aligns with the theoretical framework proposed by..." |

### Hedging Language for Uncertainty
Use appropriate hedging when results are inconclusive or interpretation is uncertain:
- "These results suggest..." (not "These results prove...")
- "One possible explanation is..."
- "This finding may be attributable to..."
- "These results should be interpreted with caution given..."

---

## 8 Common Lab Report Errors

| Error | Fix |
|---|---|
| **Interpreting results in the Results section** | Move all interpretation to the Discussion |
| **Missing error bars or undefined error bars** | Add error bars (SD or SEM); define in figure caption |
| **Wrong tense in Methods** | Use past tense throughout ("were heated," not "are heated") |
| **Vague title** | Include independent variable, dependent variable, and system |
| **No hypothesis in Introduction** | State a specific, testable prediction with rationale |
| **Methods not reproducible** | Add quantities, times, temperatures, equipment models |
| **Presenting only significant results** | Report all results; negative results are scientifically valid |
| **Discussion restates Results without interpretation** | Every sentence in Discussion must add interpretive value |
