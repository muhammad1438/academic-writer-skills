---
name: statistical-reporting
description: Report statistical results accurately and completely for any academic discipline. Use this skill whenever the user needs to write up statistics in APA 7th or other styles, report effect sizes, describe power analyses, interpret Bayesian factors, check reporting against CONSORT/STROBE/PRISMA/ARRIVE guidelines, or identify and fix common statistical reporting errors. Trigger for: "how do I report a t-test in APA", "what effect size should I report", "how do I write up my regression", "is my statistics section correct", "Bayesian reporting", "what is an overpowered study", or any task involving writing or auditing statistical results.
---

# Statistical Reporting

Statistical reporting translates numbers into verifiable, interpretable scientific communication. The goal is completeness: every reader must be able to evaluate the strength of evidence and reproduce the analysis from your description alone.

---

## Choosing a Reporting Style

| Discipline | Primary Style | Key Standard |
|---|---|---|
| Psychology, Education | APA 7th | Publication Manual Chapter 7 |
| Medicine, Clinical | APA 7th or Vancouver | CONSORT, STROBE |
| Biology, Ecology | APA or CSE | ARRIVE (animal), STROBE (observational) |
| Epidemiology, Public Health | STROBE / APA hybrid | Confidence intervals mandatory |
| Systematic reviews / Meta-analyses | APA + PRISMA | PRISMA 2020 |
| Engineering, Computer Science | IEEE | Varies by journal |

**Rule:** APA 7th is the default for behavioral and social sciences. Always check the target journal's author guidelines — many override style with their own statistical reporting requirements.

---

## Exact Format Templates (APA 7th)

### t-Test

**Independent samples:**
```
t(df) = X.XX, p = .XXX, d = X.XX, 95% CI [X.XX, X.XX]
```
Example: *t*(58) = 2.34, *p* = .023, *d* = 0.61, 95% CI [0.09, 1.12]

**Paired samples / dependent:**
```
t(df) = X.XX, p = .XXX, d = X.XX
```
Example: *t*(29) = −3.12, *p* = .004, *d* = −0.57

**One-sample:**
```
t(df) = X.XX, p = .XXX, d = X.XX (comparison to μ = XX)
```

**Formatting rules:**
- Italicise the statistic letter: *t*, *F*, *r*, *p*, *M*, *SD*
- Report exact *p* values (not *p* < .05), except when *p* < .001 — then write *p* < .001
- Use a leading zero before decimals only when the value can exceed 1: *M* = 3.45, but *p* = .034 (not *p* = 0.034)
- Use two decimal places for most statistics; three for *p* values and correlations

### ANOVA (One-Way and Factorial)

**One-way:**
```
F(df_between, df_within) = X.XX, p = .XXX, η² = .XX
```
Example: *F*(2, 87) = 7.43, *p* = .001, η² = .15

**Factorial:**
```
Main effect of A: F(df_A, df_error) = X.XX, p = .XXX, ηₚ² = .XX
Main effect of B: F(df_B, df_error) = X.XX, p = .XXX, ηₚ² = .XX
A × B interaction: F(df_AB, df_error) = X.XX, p = .XXX, ηₚ² = .XX
```

**Post hoc comparisons:**
```
Tukey HSD post hoc tests indicated that Group A (M = X.XX, SD = X.XX) scored significantly higher than Group B (M = X.XX, SD = X.XX), p = .XXX.
```

### Correlation (Pearson and Spearman)

**Pearson:**
```
r(df) = .XX, p = .XXX, 95% CI [.XX, .XX]
```
Example: *r*(48) = .53, *p* < .001, 95% CI [.29, .71]

**Spearman (non-parametric):**
```
rs(N) = .XX, p = .XXX
```
Example: *r*s(48) = .47, *p* = .001

**Note:** The df for r = N − 2, but many authors report N instead. Check journal preference.

### Regression

**Simple linear regression:**
```
The regression model was significant, F(1, N−2) = X.XX, p = .XXX, R² = .XX.
The unstandardised regression coefficient for [predictor] was B = X.XX, SE = X.XX, β = .XX, t(N−2) = X.XX, p = .XXX, 95% CI [X.XX, X.XX].
```

**Multiple regression:**
```
The overall model was significant, F(k, N−k−1) = X.XX, p = .XXX, R² = .XX, adjusted R² = .XX.
[Predictor X] was a significant predictor, B = X.XX, SE = X.XX, β = .XX, t = X.XX, p = .XXX.
```

**Logistic regression:**
```
The model significantly predicted [outcome], χ²(k) = X.XX, p = .XXX, Nagelkerke R² = .XX.
[Predictor X] significantly increased the odds of [outcome], B = X.XX, SE = X.XX, Wald χ²(1) = X.XX, p = .XXX, OR = X.XX, 95% CI [X.XX, X.XX].
```

### Chi-Square

**Goodness of fit:**
```
χ²(df, N = XX) = X.XX, p = .XXX
```

**Test of independence:**
```
χ²(df, N = XX) = X.XX, p = .XXX, φ = .XX  [for 2×2]
χ²(df, N = XX) = X.XX, p = .XXX, V = .XX  [for larger tables]
```
Example: χ²(1, *N* = 120) = 6.42, *p* = .011, φ = .23

### Confidence Intervals

Always report in the form: **95% CI [lower, upper]**

- Report for all primary effects and estimates
- Use square brackets: 95% CI [1.23, 4.56]
- For standardised differences: 95% CI [d: 0.12, 0.89]
- For odds ratios: 95% CI [1.45, 3.20]

---

## Effect Size Reference

### Interpretation Thresholds

| Statistic | Small | Medium | Large | Use With |
|---|---|---|---|---|
| Cohen's *d* | 0.20 | 0.50 | 0.80 | t-tests, mean differences |
| η² (eta-squared) | .01 | .06 | .14 | One-way ANOVA |
| ηₚ² (partial eta-squared) | .01 | .06 | .14 | Factorial ANOVA |
| ω² (omega-squared) | .01 | .06 | .14 | ANOVA (less biased than η²) |
| *r* (Pearson/Spearman) | .10 | .30 | .50 | Correlations |
| *f²* (Cohen's f²) | .02 | .15 | .35 | Multiple regression |
| Cramer's *V* | depends on df | — | — | Chi-square |
| Odds Ratio (OR) | 1.5 | 2.5 | 4.0 | Logistic regression |
| Risk Ratio (RR) | 1.5 | 2.0 | 3.0 | Clinical epidemiology |

**Cramer's V thresholds by degrees of freedom (minimum of rows−1, cols−1):**

| df | Small | Medium | Large |
|---|---|---|---|
| 1 | .10 | .30 | .50 |
| 2 | .07 | .21 | .35 |
| 3 | .06 | .17 | .29 |

**Prefer ω² over η²** for ANOVA because η² overestimates population effect size in small samples.

**Prefer partial η²** for factorial designs so each effect can be evaluated independently of others.

### How to Calculate and Report

Cohen's *d* for independent samples:
```
d = (M₁ − M₂) / SDpooled
```
Report as: Cohen's *d* = 0.65 (medium effect)

ω² (omega-squared):
```
ω² = (SS_between − (k−1) × MS_within) / (SS_total + MS_within)
```

---

## Power Analysis Reporting

Report in the Methods section, before data collection, or in Participants section:

**Template:**
```
An a priori power analysis was conducted using G*Power 3.1 (Faul et al., 2007).
For a two-tailed independent samples t-test with α = .05, power = .80, and
an expected medium effect size (d = 0.50), the minimum required sample size
was N = 128 (64 per group). [Final N = XX was therefore adequately powered.]
```

**Required elements:**
- Software used (G*Power version + citation)
- Test type
- Alpha level (typically .05)
- Desired power (typically .80 or .90)
- Effect size expected (and how derived — prior literature, meta-analysis, pilot study)
- Resulting minimum N
- Actual achieved N

**Post-hoc power** (if underpowered): Report but contextualise — post-hoc power is controversial and often misleading. Prefer reporting the minimum detectable effect size at achieved N and power.

---

## Non-Parametric Tests

| Test | Parametric Equivalent | Reporting Format |
|---|---|---|
| Mann-Whitney U | Independent t-test | *U* = XX, *z* = X.XX, *p* = .XXX, *r* = .XX |
| Wilcoxon Signed-Rank | Paired t-test | *W* = XX, *z* = X.XX, *p* = .XXX, *r* = .XX |
| Kruskal-Wallis | One-way ANOVA | *H*(df) = X.XX, *p* = .XXX, η² = .XX |
| Friedman | Repeated measures ANOVA | χ²(df, *N* = XX) = X.XX, *p* = .XXX |
| Spearman ρ | Pearson r | *r*s(*N*) = .XX, *p* = .XXX |
| Kendall's τ | Pearson r | τ = .XX, *p* = .XXX |

**Effect size for Mann-Whitney / Wilcoxon:**
```
r = z / √N
```
(Same Cohen's r thresholds apply: .10 small, .30 medium, .50 large)

**Always report medians and IQRs** (not means and SDs) alongside non-parametric tests:
```
Mdn = X.XX, IQR = [X.XX, X.XX]
```

---

## Assumptions Testing Reporting

Report in the Methods or Results section:

**Normality:**
```
The Shapiro-Wilk test indicated that [variable] was approximately normally distributed
in both groups (Group A: W = .97, p = .34; Group B: W = .95, p = .12).
```
For large samples (N > 50), use Q-Q plot visual inspection or Kolmogorov-Smirnov.

**Homogeneity of Variance (Levene's):**
```
Levene's test indicated equal variances (F(1, 58) = 0.43, p = .51), satisfying
the homogeneity assumption for the independent samples t-test.
```
If violated, use Welch's t-test and report: *t*Welch(df) = X.XX.

**Sphericity (for repeated measures ANOVA):**
```
Mauchly's test of sphericity was significant (W = .78, p = .023), indicating
a violation of sphericity. Therefore, Greenhouse-Geisser corrected degrees of freedom
are reported (ε = .81).
```

---

## Bayesian Reporting

Bayesian inference provides an alternative or complement to NHST. Report:

**Bayes Factor (BF₁₀):**
```
A Bayesian independent samples t-test using a default Cauchy prior (r = 0.707)
indicated moderate evidence for H₁ over H₀, BF₁₀ = 6.23.
```

**Jeffreys (1961) BF Interpretation Scale:**

| BF₁₀ | Evidence for H₁ |
|---|---|
| > 100 | Extreme |
| 30 – 100 | Very strong |
| 10 – 30 | Strong |
| 3 – 10 | Moderate |
| 1 – 3 | Anecdotal |
| 1 | No evidence |
| 1/3 – 1 | Anecdotal for H₀ |
| 1/10 – 1/3 | Moderate for H₀ |
| < 1/10 | Strong for H₀ |

**Posterior distributions:**
```
The posterior distribution for the mean difference had a 95% credible interval
of [0.34, 1.12], indicating that the true effect is likely between small and large.
```

**Software citation:** Report the R package or JASP version: "Bayesian analyses were performed using JASP 0.18 (JASP Team, 2023)."

---

## Reporting Guidelines by Study Type

| Study Type | Guideline | Key Checklist Items |
|---|---|---|
| Randomised Controlled Trial | CONSORT 2010 | Flow diagram (enrollment → allocation → follow-up → analysis); allocation concealment; blinding |
| Observational (cohort, case-control) | STROBE | Exposure definition; matching; potential confounders; missing data handling |
| Systematic Review / Meta-analysis | PRISMA 2020 | Flow diagram; search strategy; PICO; risk of bias; heterogeneity (I²) |
| Animal Studies | ARRIVE 2.0 | Species, sex, age, housing; ethical approval; sample size justification |
| Diagnostic Accuracy | STARD 2015 | Reference standard; blinding; participants flow diagram |
| Qualitative Research | COREQ / SRQR | Reflexivity; saturation; member checking |
| Economic Evaluation | CHEERS 2022 | Perspective; time horizon; discount rate; sensitivity analysis |

**For meta-analyses, always report:**
- I² statistic (heterogeneity): < 25% low, 25–75% moderate, > 75% high
- Cochran's Q test for heterogeneity
- Forest plot description
- Funnel plot for publication bias (Egger's test if N ≥ 10 studies)

---

## Common Statistical Reporting Errors

| Error | Example of Error | Correct Approach |
|---|---|---|
| Reporting p = 0.000 | "p = 0.000" | Write *p* < .001 |
| Omitting effect sizes | "t(58) = 3.21, p = .002" | Add Cohen's *d* and 95% CI |
| Not reporting assumptions | No mention of normality checks | Report Shapiro-Wilk or describe visual checks |
| Using "significant" without p value | "Results were significant" | "Results were statistically significant, t(58) = 2.34, p = .023" |
| Misinterpreting p value | "p = .04 means 96% chance H₁ is true" | p value is probability of data given H₀, not probability of H₁ |
| Confusing η² and partial η²  | Using η² in factorial ANOVA | Use ηₚ² in factorial designs; report which is used |
| n vs. N confusion | n = total sample size | N = total sample; n = subgroup size |
| Over-reporting decimal places | "M = 3.234756" | Round to 2 decimal places for most statistics |
| Inconsistent rounding | "M = 3.2 (SD = 0.45)" | Match decimal places: "M = 3.20, SD = 0.45" |
| Post-hoc tests without correction | Multiple t-tests without Bonferroni | Report correction applied or use family-wise methods |

---

## Statistical Reporting Checklist

### Before Submitting

- [ ] All reported statistics use correct formatting (italics, exact p values)
- [ ] Effect size reported for every inferential test
- [ ] Confidence intervals reported for primary effects
- [ ] Sample size and power analysis reported
- [ ] Assumptions tested and results reported
- [ ] Non-significant results reported fully (not just omitted)
- [ ] Post-hoc corrections applied where multiple comparisons made
- [ ] Descriptive statistics (M, SD or Mdn, IQR) accompany inferential statistics
- [ ] Direction of effects described in text (not just statistics)
- [ ] Reporting guideline checklist completed (CONSORT / STROBE / PRISMA as applicable)
- [ ] Software and version cited for all analyses

---

## Key References

- APA (2020). *Publication manual of the American Psychological Association* (7th ed.)
- Cohen, J. (1988). *Statistical power analysis for the behavioral sciences* (2nd ed.)
- Faul, F., et al. (2007). G*Power 3: A flexible statistical power analysis program. *Behaviour Research Methods*, 39, 175–191.
- Lakens, D. (2013). Calculating and reporting effect sizes. *Frontiers in Psychology*, 4, 863.
- Jeffreys, H. (1961). *Theory of probability* (3rd ed.). Oxford University Press.
