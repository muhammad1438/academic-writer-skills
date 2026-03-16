---
name: latex-writer
description: Write, structure, and compile LaTeX documents for academic purposes. Use this skill whenever the user needs to write a LaTeX document, choose the right document class or packages, format equations, manage bibliographies, create figures and tables in LaTeX, troubleshoot errors, or prepare a journal-ready manuscript. Trigger for: "write this in LaTeX", "what document class should I use", "how do I cite in LaTeX", "help me with my BibTeX", "how do I align equations in LaTeX", "LaTeX error undefined reference", "which packages do I need", or any task involving LaTeX document preparation.
---

# LaTeX Writer

LaTeX is the standard document preparation system for mathematics, physics, engineering, computer science, and increasingly used across all academic disciplines for its precise typesetting, equation rendering, and bibliography management.

---

## Document Class Selection

Choose the document class before anything else — it sets the fundamental layout.

| Class | Use Case | Key Features |
|---|---|---|
| `article` | Journal papers, short reports, conference papers | Standard academic default; no chapter divisions |
| `report` | Long reports, theses, technical documentation | Has chapters; two-sided by default |
| `book` | Textbooks, monographs, book-length works | Parts, chapters; front/main/back matter |
| `beamer` | Presentations and slides | Frame-based; themes and colour schemes |
| `IEEEtran` | IEEE journal and conference papers | Strict IEEE formatting; two-column option |
| `revtex4-2` | APS/AIP physics journals (Physical Review, etc.) | Physics-community standard; multiple journal modes |
| `elsarticle` | Elsevier journal submissions | Author-year and numbered citation modes |
| `acmart` | ACM conference and journal papers | Multiple sub-formats (acmsmall, sigconf, etc.) |
| `memoir` | Highly customisable books and theses | Replaces many packages; built-in flexibility |

**Standard article declaration:**
```latex
\documentclass[12pt, a4paper]{article}
```

**Two-column IEEE:**
```latex
\documentclass[conference]{IEEEtran}
```

**Elsevier submission:**
```latex
\documentclass[review, 12pt]{elsarticle}
```

---

## Minimal Working Example (MWE)

Every LaTeX document needs this skeleton:

```latex
\documentclass[12pt, a4paper]{article}

% ── Encoding & fonts ──────────────────────────────────────────
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}   % not needed in modern TeX distributions

% ── Page geometry ─────────────────────────────────────────────
\usepackage[margin=2.5cm]{geometry}

% ── Mathematics ───────────────────────────────────────────────
\usepackage{amsmath, amssymb, amsthm}

% ── Bibliography ──────────────────────────────────────────────
\usepackage[style=apa, backend=biber]{biblatex}
\addbibresource{references.bib}

% ── Figures ───────────────────────────────────────────────────
\usepackage{graphicx}
\graphicspath{{figures/}}

% ── Tables ────────────────────────────────────────────────────
\usepackage{booktabs}

% ── Cross-references ──────────────────────────────────────────
\usepackage[hidelinks]{hyperref}
\usepackage{cleveref}

% ── Title information ─────────────────────────────────────────
\title{Your Paper Title}
\author{Author Name \and Second Author}
\date{\today}

\begin{document}
\maketitle
\begin{abstract}
  Your abstract text.
\end{abstract}

\section{Introduction}
Your introduction.

\printbibliography
\end{document}
```

---

## Essential Packages Reference

| Package | Purpose | Key Command |
|---|---|---|
| `amsmath` | Advanced math environments | `\begin{align}`, `\begin{equation}` |
| `amssymb` | AMS symbols (ℝ, ℕ, etc.) | `\mathbb{R}`, `\leq`, `\geq` |
| `amsthm` | Theorem environments | `\newtheorem{thm}{Theorem}` |
| `biblatex` | Modern bibliography management | `\printbibliography` |
| `booktabs` | Professional tables | `\toprule`, `\midrule`, `\bottomrule` |
| `cleveref` | Smart cross-references | `\cref{label}` → "Figure 1" automatically |
| `geometry` | Page margins and layout | `\usepackage[margin=2.5cm]{geometry}` |
| `graphicx` | Include images | `\includegraphics[width=\linewidth]{file}` |
| `hyperref` | Clickable links and metadata | `\href{url}{text}`, PDF bookmarks |
| `siunitx` | SI units and numbers | `\SI{9.81}{\metre\per\second\squared}` |
| `mhchem` | Chemical formulas | `\ce{H2O}`, `\ce{Fe^{2+}}` |
| `listings` | Code listings | `\begin{lstlisting}[language=Python]` |
| `tikz` | Vector graphics and diagrams | `\begin{tikzpicture}` |
| `pgfplots` | Data plots | `\begin{axis}` |
| `algorithm2e` | Algorithm pseudocode | `\begin{algorithm}` |
| `todonotes` | Inline draft notes | `\todo{Fix this}` |
| `microtype` | Typography improvements | Load after fonts; no special commands needed |
| `xcolor` | Colour support | `\textcolor{red}{text}` |
| `subcaption` | Sub-figures | `\begin{subfigure}` |
| `natbib` | Author-year citations (legacy) | `\citet{}`, `\citep{}` |

---

## Bibliography Management

### BibLaTeX/Biber (Recommended)

**Setup:**
```latex
\usepackage[style=apa, backend=biber]{biblatex}
\addbibresource{references.bib}
```

**Common styles:**
- `style=apa` — APA 7th edition
- `style=ieee` — IEEE numbered
- `style=chicago-authordate` — Chicago author-date
- `style=mla` — MLA (use mla-new package for MLA 9th)
- `style=authoryear` — Generic author-year
- `style=numeric` — Generic numbered

**Citing:**
```latex
\cite{smith2023}          % basic citation
\textcite{smith2023}      % "Smith (2023) found..."
\parencite{smith2023}     % "(Smith, 2023)"
\footcite{smith2023}      % footnote citation
\cites{jones2021}{lee2022} % multiple
```

**Compile sequence:**
```
pdflatex → biber → pdflatex → pdflatex
```
Or use latexmk: `latexmk -pdf -biber document.tex`

### BibTeX/natbib (Legacy)

**Setup:**
```latex
\usepackage[round, authoryear]{natbib}
\bibliographystyle{apa}
\bibliography{references}  % at end of document
```

**Citing:**
```latex
\citet{smith2023}    % Smith (2023)
\citep{smith2023}    % (Smith, 2023)
\citealp{smith2023}  % Smith, 2023 (no parentheses)
```

### .bib File — Common Entry Types

```bibtex
% Journal article
@article{smith2023effect,
  author    = {Smith, John and Jones, Mary},
  title     = {The effect of temperature on reaction rates},
  journal   = {Journal of Chemistry},
  year      = {2023},
  volume    = {45},
  number    = {3},
  pages     = {123--145},
  doi       = {10.1000/example.doi}
}

% Book
@book{brown2022methods,
  author    = {Brown, Alice},
  title     = {Research Methods in Psychology},
  year      = {2022},
  publisher = {Oxford University Press},
  address   = {Oxford},
  edition   = {4th}
}

% Book chapter
@incollection{wilson2021chapter,
  author    = {Wilson, Bob},
  title     = {Statistical approaches},
  booktitle = {Handbook of Research},
  editor    = {Davis, Carol},
  year      = {2021},
  publisher = {Sage},
  pages     = {45--78}
}

% Conference paper
@inproceedings{li2023neural,
  author    = {Li, Wei and Chen, Fang},
  title     = {Neural networks for text classification},
  booktitle = {Proceedings of the 2023 Conference on NLP},
  year      = {2023},
  pages     = {234--240},
  doi       = {10.1145/example}
}

% PhD thesis
@phdthesis{garcia2022thesis,
  author = {Garcia, Maria},
  title  = {Computational models of language acquisition},
  school = {University of Cambridge},
  year   = {2022}
}

% Website / online resource
@online{who2023report,
  author = {{World Health Organization}},
  title  = {Global Health Report 2023},
  year   = {2023},
  url    = {https://www.who.int/report2023},
  urldate = {2024-01-15}
}
```

---

## Equation Formatting

### Environment Choices

| Environment | Use | Numbered? |
|---|---|---|
| `equation` | Single centred equation | Yes |
| `equation*` | Single centred equation | No |
| `align` | Multiple equations, aligned at `&` | Yes (each line) |
| `align*` | Multiple equations, aligned | No |
| `gather` | Multiple equations, centred | Yes |
| `multline` | Single long equation broken across lines | Yes |
| `cases` | Piecewise functions | One number |
| `split` | Single equation split across lines (inside equation) | One number |

**Single numbered equation:**
```latex
\begin{equation}
  E = mc^2
  \label{eq:einstein}
\end{equation}
```

**Aligned system:**
```latex
\begin{align}
  a &= b + c \label{eq:first} \\
  d &= e \cdot f \label{eq:second}
\end{align}
```

**Piecewise function:**
```latex
\begin{equation}
  f(x) = \begin{cases}
    x^2 & \text{if } x \geq 0 \\
    -x   & \text{if } x < 0
  \end{cases}
\end{equation}
```

**Referencing equations:**
```latex
As shown in \cref{eq:einstein}...      % "As shown in Equation (1)..."
\eqref{eq:einstein}                     % "(1)"
```

### Common Math Commands

```latex
\frac{numerator}{denominator}    % fraction
\sqrt{x}                         % square root
\sqrt[n]{x}                      % nth root
\sum_{i=1}^{n} x_i               % summation
\int_0^\infty f(x)\,dx           % integral (\, adds thin space)
\lim_{x \to \infty}              % limit
\partial                         % partial derivative
\nabla                           % nabla / gradient
\mathbf{A}                       % bold (for matrices/vectors)
\mathbb{R}                       % blackboard bold (real numbers)
\hat{x}                          % hat accent
\bar{x}                          % bar accent (sample mean)
\tilde{x}                        % tilde
```

---

## Figures and Tables

### Including a Figure

```latex
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.8\linewidth]{filename}
  \caption{Descriptive caption placed below the figure.}
  \label{fig:descriptive-name}
\end{figure}
```

**Float placement options [htbp]:**
- `h` — here (approximately)
- `t` — top of page
- `b` — bottom of page
- `p` — separate page of floats
- `!` — override LaTeX's internal restrictions (use sparingly)
- `H` — exactly here (requires `float` package; prevents float management)

**Sub-figures:**
```latex
\usepackage{subcaption}
\begin{figure}
  \begin{subfigure}{0.45\linewidth}
    \includegraphics[width=\linewidth]{fig1a}
    \caption{Panel A}\label{fig:a}
  \end{subfigure}
  \hfill
  \begin{subfigure}{0.45\linewidth}
    \includegraphics[width=\linewidth]{fig1b}
    \caption{Panel B}\label{fig:b}
  \end{subfigure}
  \caption{Overall figure caption.}
\end{figure}
```

### Professional Table (booktabs)

```latex
\begin{table}[htbp]
  \centering
  \caption{Table title placed ABOVE the table.}
  \label{tab:results}
  \begin{tabular}{lrrc}
    \toprule
    Group & $n$ & Mean & SD \\
    \midrule
    Control   & 30 & 12.4 & 2.1 \\
    Treatment & 32 & 15.7 & 1.8 \\
    \midrule
    Total     & 62 & 14.1 & 2.3 \\
    \bottomrule
  \end{tabular}
  \caption*{\textit{Note.} SD = standard deviation.}
\end{table}
```

**booktabs rules:**
- `\toprule` — top border
- `\midrule` — internal horizontal rule
- `\bottomrule` — bottom border
- **Never use** `\hline` or `|` for vertical lines in professional tables
- Caption above for tables; caption below for figures

---

## Journal Template Quick-Start

| Publisher | Template Source | Document Class |
|---|---|---|
| Elsevier | Overleaf gallery / journal homepage | `elsarticle` |
| Springer | Overleaf gallery | `svjour3` |
| IEEE | ieee.org / Overleaf | `IEEEtran` |
| ACM | acm.org / Overleaf | `acmart` |
| APS (Physical Review) | journals.aps.org | `revtex4-2` |
| AMS | ams.org | `amsart` |
| Nature Portfolio | Overleaf | `article` with specific instructions |
| PLOS | plos.org template | Modified `article` |
| MDPI | mdpi.com template | `article`-based |

**Overleaf gallery:** overleaf.com/latex/templates — search by publisher or journal name. Most major journals have official or community templates.

**Thesis templates:** Overleaf thesis gallery has templates for Oxford, Cambridge, Harvard, MIT, and most major universities.

---

## Common LaTeX Errors and Fixes

| Error Message | Cause | Fix |
|---|---|---|
| `Undefined control sequence` | Typo in command or missing package | Check spelling; add `\usepackage{}` |
| `! Missing $ inserted` | Math outside math mode | Wrap in `$...$` or `\(...\)` |
| `Overfull \hbox` | Text/element too wide for column | Use `\linebreak`, `\allowbreak`, or adjust margins |
| `Underfull \vbox` | Page not filled — too few lines | Usually harmless; adjust `\raggedbottom` |
| `Citation ... undefined` | Missing .bib entry or wrong key | Check .bib file; run biber/BibTeX again |
| `Label ... undefined` | `\ref{}` before `\label{}` or typo | Check label spelling; compile twice |
| `File ... not found` | Wrong filename or path | Check `\graphicspath`; verify file extension |
| `Too many floats` | Accumulated unplaced figures | Add `[H]` or `\clearpage`; use `placeins` package |
| `Package clash` | Two packages conflict | Check package documentation; reorder `\usepackage` |
| `Font shape ... undefined` | Missing font package | Install required LaTeX font package |
| `Runaway argument` | Unclosed brace `{` | Find and close the missing `}` |

**General debugging strategy:**
1. Read the first error only — subsequent errors often cascade from the first
2. Use `\nonstopmode` to see all errors without stopping
3. Comment out blocks to isolate the problem section
4. Search the error message on tex.stackexchange.com

---

## Cross-Referencing Best Practices

**Labelling convention:**
```latex
\label{fig:myplot}    % figures
\label{tab:results}   % tables
\label{eq:main}       % equations
\label{sec:methods}   % sections
\label{thm:main}      % theorems
```

**Referencing with cleveref:**
```latex
\usepackage{cleveref}
\cref{fig:myplot}     % "Figure 1"
\Cref{fig:myplot}     % "Figure 1" (capital, for start of sentence)
\cref{eq:main,eq:b}   % "Equations (1) and (2)"
```

**Without cleveref:**
```latex
Figure~\ref{fig:myplot}   % tilde prevents line break between word and number
Table~\ref{tab:results}
Equation~(\ref{eq:main})
Section~\ref{sec:methods}
```

---

## Handling "Too Many Floats"

LaTeX holds unplaced floats in a queue. If too many accumulate:

1. **Add `\clearpage`** — forces all pending floats to be placed before continuing
2. **Use `[H]`** (from `float` package) — places figure/table at exact position (disables floating)
3. **Use `placeins` package** — `\FloatBarrier` prevents floats from crossing a barrier
4. **Use `afterpage` package** — `\afterpage{\clearpage}` places floats at next page

```latex
\usepackage{placeins}
...
\section{Methods}
\FloatBarrier   % all pending floats placed here
```

---

## Key Resources

- CTAN (ctan.org) — Comprehensive TeX Archive Network: all packages
- Overleaf documentation (overleaf.com/learn) — guides for all skill levels
- TeX Stack Exchange (tex.stackexchange.com) — authoritative Q&A
- The LaTeX Companion (Mittelbach et al.) — definitive reference book
- Overleaf thesis gallery — university-specific dissertation templates
