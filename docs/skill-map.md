# Skill Map

> **Path note (v1.4.0):** All skill files are now located at `skills/*/SKILL.md` (e.g., `skills/abstract-writer/SKILL.md`). The previous path `1.0.0/skills/*/SKILL.md` is no longer used. Plugin manifests and all documentation have been updated to reflect this structure.

Full relationship diagram of all 27 academic-writer skills, grouped by phase.

```mermaid
graph TB
    subgraph Foundation["Foundation (Always Active)"]
        CORE[academic-writing-core]
    end

    subgraph Planning["Planning Phase"]
        PS[paper-structure]
        RP[research-proposal]
        GP[grant-proposal]
        DMP[data-management-plan]
        TDG[thesis-dissertation-guide]
        PRG[preregistration-guide]
        ACV[academic-cv]
    end

    subgraph Research["Research Phase"]
        LR[literature-review]
        AE[argumentation-engine]
        QR[qualitative-reporting]
    end

    subgraph Writing["Writing Phase"]
        AW[abstract-writer]
        ALT[academic-language-toolkit]
        PE[paraphrasing-engine]
        LAB[lab-report]
        LTX[latex-writer]
        PLS[plain-language-summary]
        CP[conference-presentation]
    end

    subgraph Editing["Editing Phase"]
        GSC[grammar-style-checker]
        CF[citation-formatter]
        SR[statistical-reporting]
        FTC[figure-table-checker]
        RV[reference-verifier]
    end

    subgraph Publication["Publication Phase"]
        PRR[peer-review-response]
        AAE[ai-academic-ethics]
        JS[journal-selection]
        CLW[cover-letter-writer]
    end

    CORE --> PS
    CORE --> RP
    CORE --> GP
    CORE --> DMP
    CORE --> LR
    CORE --> AE
    CORE --> AW
    CORE --> ALT
    CORE --> PE
    CORE --> LAB
    CORE --> LTX
    CORE --> GSC
    CORE --> CF
    CORE --> SR
    CORE --> FTC
    CORE --> RV
    CORE --> PRR
    CORE --> AAE
    CORE --> JS
    CORE --> TDG
    CORE --> QR
    CORE --> PLS
    CORE --> PRG
    CORE --> CLW
    CORE --> CP
    CORE --> ACV

    PS --> AW
    PS --> LR
    RP --> LR
    RP --> AE
    GP --> DMP
    LR --> PE
    LR --> AW
    AE --> ALT
    AW --> GSC
    ALT --> GSC
    PE --> CF
    LAB --> SR
    LAB --> FTC
    LAB --> CF
    SR --> GSC
    FTC --> GSC
    RV --> CF
    GSC --> CF
    CF --> PRR
    CF --> JS
    JS --> PRR
    TDG --> PS
    TDG --> LR
    QR --> GSC
    PLS --> GSC
    PRG --> GP
    PRG --> RP
    CLW --> JS
    CLW --> PRR
    CP --> LTX
    CP --> FTC
    ACV --> GP
    ACV --> CLW
```