---
name: preregistration-guide
description: Write and complete preregistrations for research studies before data collection or analysis. Use this skill when preregistering a study, writing a registered report, or understanding open science practices. Trigger for: "preregister my study," "how to write a preregistration," "OSF preregistration," "AsPredicted," "PROSPERO systematic review registration," "registered reports," "hypothesis registration," "pre-analysis plan," "clinical trial registration," or any task involving the formal registration of research intentions before conducting the study.
---

# Preregistration Guide

Preregistration is the practice of documenting your research plan before conducting a study — specifying hypotheses, methods, and analyses in advance. It separates confirmatory research (testing hypotheses) from exploratory research (generating hypotheses), reducing the risk of questionable research practices such as p-hacking, HARKing (hypothesising after results are known), and selective reporting.

---

## What Is Preregistration?

**Definition:** A time-stamped, immutable record of your research intentions, created before you collect or analyse data.

**Purpose:**
1. Distinguish confirmatory from exploratory research
2. Reduce researcher degrees of freedom (flexibility in analysis choices)
3. Prevent selective reporting of significant results
4. Increase transparency and credibility

**Benefits:**
- Higher credibility for published findings
- Clearer thinking during study design
- Protection against reviewer requests for post-hoc analyses
- Evidence of research integrity for funders and institutions

---

## When to Preregister

| Stage | Preregistration Type | Description |
|---|---|---|
| **Before data collection** | Full preregistration | Hypotheses, design, sample size, analysis plan all specified in advance |
| **Before data analysis** | Secondary data analysis / Registered Report | Hypotheses and analysis plan specified before analysing existing data |
| **After data collection, before analysis** | Partial preregistration | Analysis plan specified; hypotheses may be informed by data patterns |

---

## Platforms

### OSF Preregistration

**URL:** osf.io/preregistration

**Features:**
- Multiple templates (Standard, OSF-Standard, APA-style, etc.)
- Free and open access
- Integration with OSF projects
- DOI assignment
- Embargo option (private until publication)

**Best for:** Psychology, social sciences, general research.

### AsPredicted

**URL:** aspredicted.org

**Features:**
- Streamlined 9-question format
- Quick and simple
- Free
- PDF output

**Best for:** Psychology, simple designs, quick registration.

### PROSPERO

**URL:** crd.york.ac.uk/prospero

**Features:**
- International prospective register of systematic reviews
- Required by many journals for systematic review submission
- 30+ fields specific to systematic reviews

**Best for:** Systematic reviews and meta-analyses in health.

### ClinicalTrials.gov

**URL:** clinicaltrials.gov

**Features:**
- Required for clinical trials in the US
- International recognition
- Mandated by FDA for certain trial types

**Best for:** Clinical trials, interventional studies.

### EGAP

**URL:** egap.org/registry

**Features:**
- Pre-analysis plans for social science experiments
- Focus on causal inference

**Best for:** Political science, development economics, social experiments.

### OSF Registries (General)

**URL:** osf.io/registries

**Features:**
- Public searchable database of preregistrations
- Multiple templates
- Discipline-specific options

---

## Registered Reports

**Definition:** A journal article format where peer review occurs in two stages:
- **Stage 1:** In-principle acceptance (IPA) based on rationale, methods, and planned analysis
- **Stage 2:** Publication after data collection, with guaranteed acceptance if protocol was followed

### How It Works

```
Submit Stage 1 (Introduction, Methods, Planned Analysis)
         ↓
    Peer Review
         ↓
In-Principle Acceptance (IPA) — guaranteed publication if protocol followed
         ↓
   Data Collection
         ↓
    Analysis (as preregistered)
         ↓
Submit Stage 2 (Full manuscript)
         ↓
    Peer Review (verifies protocol adherence)
         ↓
     Publication
```

### Journals Offering Registered Reports

| Discipline | Journals |
|---|---|
| **Psychology** | Psychological Science, Journal of Experimental Psychology, Advances in Methods and Practice in Psychological Science |
| **Neuroscience** | Cortex, European Journal of Neuroscience |
| **Medicine** | Trials, BMC Medicine |
| **Social Sciences** | Royal Society Open Science, Comprehensive Results in Social Psychology |
| **Multidisciplinary** | PLOS ONE, Scientific Reports, Nature Human Behaviour |

---

## What to Include in a Preregistration

### 1. Study Information

| Element | Content |
|---|---|
| **Title** | Descriptive title of the study |
| **Authors** | All investigators and their roles |
| **Institution** | Affiliation(s) |
| **Funding** | Funding sources and grant numbers |

### 2. Hypotheses

**Requirements:**
- Directional (predict a direction of effect)
- Falsifiable (can be proven wrong)
- Tied to theory or prior evidence

**Strong hypothesis example:**
> We hypothesise that participants who receive the mindfulness intervention will show a greater reduction in anxiety scores (GAD-7) from baseline to 8-week follow-up compared to participants who receive the control intervention. This hypothesis is based on prior meta-analytic evidence showing moderate effects of mindfulness-based interventions on anxiety (Hofmann et al., 2010, d = 0.63).

**Weak hypothesis (avoid):**
> We will explore whether the intervention affects anxiety.

### 3. Design

| Element | Content |
|---|---|
| **Study type** | Experimental, observational, longitudinal, cross-sectional |
| **Design** | Between-subjects, within-subjects, mixed |
| **Conditions** | Number and description of conditions |
| **Randomisation** | How participants are assigned to conditions |
| **Blinding** | Single-blind, double-blind, or unblinded |

### 4. Sample Size Justification

**Elements to specify:**
- Target sample size
- Power analysis (if applicable)
- Effect size estimate and justification
- Alpha level (typically 0.05)
- Power target (typically 0.80)
- Anticipated attrition and oversampling

**Example:**
> A power analysis using G*Power 3.1 indicated that a sample of 128 participants (64 per condition) is required to detect a medium effect size (d = 0.50) with 80% power at α = 0.05 (two-tailed). This effect size estimate is based on a meta-analysis of similar interventions (Smith et al., 2018). We will recruit 150 participants to account for an estimated 15% attrition rate.

### 5. Exclusion Criteria

**Elements to specify:**
- Pre-screening exclusions (who cannot participate)
- Data exclusions (what data will be removed)
- How exclusions will be applied and documented

**Example:**
> Participants will be excluded if they: (1) have a current diagnosis of a psychotic disorder; (2) are currently receiving psychological treatment for anxiety; (3) do not complete both baseline and follow-up assessments. All exclusions will be documented with reasons.

### 6. Variables

| Variable Type | Content |
|---|---|
| **Independent variable(s)** | What is manipulated; levels |
| **Dependent variable(s)** | Primary outcome(s); how measured |
| **Covariates** | Variables to control for; why included |
| **Manipulation check** | How intervention fidelity will be verified |

### 7. Analysis Plan

**Elements to specify:**
- Primary analysis: Statistical test, variables, model specification
- Secondary analyses: Additional planned tests
- Handling of outliers: Definition and procedure
- Missing data: How handled (imputation, exclusion, etc.)
- Multiple comparisons: Correction method if applicable
- Software: What software and version

**Example:**
> The primary analysis will be an independent samples t-test comparing GAD-7 change scores (follow-up minus baseline) between the intervention and control groups. Assumptions of normality will be assessed using Shapiro-Wilk tests; if violated, a Mann-Whitney U test will be used. Missing data will be handled using multiple imputation with 20 imputations. Outliers (>3 SD from the mean) will be winsorised. All analyses will be conducted in R version 4.3.0.

---

## Writing Strong Hypotheses

### The 3 Components

1. **Directional prediction** — State the expected relationship
2. **Justification** — Why you expect this (theory or prior evidence)
3. **Operationalisation** — How it will be measured

### Examples by Study Type

**Experimental:**
> We hypothesise that participants in the high-power priming condition will rate themselves as more confident on the State Self-Confidence Scale (α = 0.88) than participants in the neutral condition. This prediction is based on approach-inhibition theory of power (Keltner et al., 2003).

**Correlational:**
> We hypothesise a positive correlation between daily smartphone use (minutes) and self-reported sleep disturbance (PSQI score). This prediction is based on evidence that blue light exposure disrupts melatonin production (Chang et al., 2015).

**Mediational:**
> We hypothesise that the effect of social support on depression severity will be mediated by perceived stress. This prediction is based on the stress-buffering hypothesis (Cohen & Wills, 1985).

---

## Power Analysis and Sample Size

### What to Specify

| Element | Example |
|---|---|
| **Software** | G*Power 3.1 |
| **Test** | Independent t-test, two-tailed |
| **Effect size** | d = 0.50 (medium) |
| **Alpha** | 0.05 |
| **Power** | 0.80 |
| **Required sample** | n = 128 |
| **Justification for effect size** | Based on meta-analysis X |

### Effect Size Justification Sources

- Prior meta-analyses in the area
- Pilot study data
- Smallest effect size of interest (SESOI)
- Convention (small/medium/large) — weakest justification, use only if no other basis

---

## Analysis Plan: Key Elements

### Statistical Test Specification

| Test | What to Specify |
|---|---|
| **t-test** | One-sample, independent, or paired; one-tailed or two-tailed; alpha level |
| **ANOVA** | Between or within; factors and levels; planned contrasts; post-hoc tests |
| **Regression** | Variables; model type (linear, logistic); covariates; interactions |
| **Correlation** | Pearson vs. Spearman; one-tailed or two-tailed |

### Handling Outliers

**Define:**
> Outliers will be defined as values more than 3 standard deviations from the mean.

**Specify procedure:**
> Outliers will be winsorised to the most extreme non-outlier value. Sensitivity analyses will be conducted with outliers excluded.

### Missing Data

| Strategy | When to Use | How to Report |
|---|---|---|
| **Complete case analysis** | <5% missing, missing completely at random | "Participants with missing data were excluded." |
| **Multiple imputation** | Missing at random, larger datasets | "We used multiple imputation with 20 imputations via mice package in R." |
| **Maximum likelihood** | Structural equation models | "Full information maximum likelihood estimation was used." |

---

## Deviations from Preregistration

### When They Happen

- Preregistration was incomplete or incorrect
- Unexpected data features (e.g., distribution violations)
- Practical constraints (e.g., recruitment fell short)
- Reviewer requests

### How to Document

1. **Acknowledge the deviation** in the manuscript
2. **Explain why it was necessary**
3. **Report both planned and actual analyses** (as sensitivity analyses)
4. **Distinguish confirmatory from exploratory** analyses clearly

**Example deviation statement:**
> In the preregistration, we specified an independent samples t-test as the primary analysis. However, the assumption of homogeneity of variances was violated (Levene's test p < .001), so we conducted a Welch's t-test instead. Results of the planned t-test are reported in Supplementary Table S1.

---

## Posting Timeline

| Stage | Visibility |
|---|---|
| **Immediately upon submission** | Private (only you can see) |
| **After clicking "Register"** | Public with timestamp (or embargoed if selected) |
| **Embargo period** | Private until date you specify (OSF allows up to 4 years) |

### Embargo Options

- **Immediate release:** Visible to everyone immediately
- **Embargo:** Private until publication or specified date (max 4 years on OSF)
- **Private forever:** Not recommended — undermines transparency goals

---

## Citation of Preregistration

### In Methods Section

> This study was preregistered on the Open Science Framework (https://osf.io/xxxxx).

### In References

> Author, A., Author, B., & Author, C. (2026). Preregistration for "Title of Study." Open Science Framework. https://osf.io/xxxxx

### Using DOI

After registration, OSF assigns a DOI. Use this for permanent linking:

> https://doi.org/10.17605/OSF.IO/XXXXX

---

## Disciplines

### Psychology

**Norm:** Increasingly standard; required by many journals.

**Platforms:** OSF, AsPredicted.

**Guidelines:** APA recommends preregistration for confirmatory research.

### Medicine / Clinical Trials

**Requirement:** Legal requirement for certain trial types (FDA, EU CTR).

**Platforms:** ClinicalTrials.gov, ISRCTN, EU Clinical Trials Register.

### Ecology / Evolution

**Norm:** Growing, especially for experimental studies.

**Platforms:** OSF.

**Guidance:** Transparent and Open Promotion (TOP) guidelines.

### Economics

**Norm:** Pre-analysis plans common for RCTs and observational studies.

**Platforms:** EGAP, OSF, AEA RCT Registry.

---

## Journals Requiring Preregistration

| Journal | Requirement |
|---|---|
| *Psychological Science* | Required for hypothesis-testing research |
| *Nature Human Behaviour* | Required for primary research |
| *Advances in Methods and Practice in Psychological Science* | Required |
| *Comprehensive Results in Social Psychology* | Required (Registered Reports format) |
| *Cortex* | Required for Registered Reports |
| *Trials* | Clinical trial registration required |
| *Journal of Experimental Psychology: General* | Encouraged; badge system |

---

## Common Mistakes

| Mistake | Why It's a Problem | Correction |
|---|---|---|
| Vague hypotheses | Cannot be falsified | State directional predictions clearly |
| Missing power analysis | Sample size unjustified | Conduct and report power analysis |
| Overly flexible analysis plan | Defeats purpose of preregistration | Specify tests, covariates, handling of outliers |
| Post-hoc additions | Becomes undisclosed exploratory analysis | Document deviations; separate confirmatory from exploratory |
| Not citing preregistration | Readers can't verify adherence | Include link and DOI in manuscript |
| Embargo forever | Undermines transparency | Use reasonable embargo periods |
| Preregistering after seeing data | HARKing in disguise | Preregister before data collection or analysis |

---

## Key Resources

- OSF Preregistration: osf.io/preregistration
- AsPredicted: aspredicted.org
- PROSPERO: crd.york.ac.uk/prospero
- ClinicalTrials.gov: clinicaltrials.gov
- EGAP Registry: egap.org/registry
- TOP Guidelines: cos.io/top
- Preregistration 101 (COS): cos.io/preregistration
- Registered Reports: cos.io/rr