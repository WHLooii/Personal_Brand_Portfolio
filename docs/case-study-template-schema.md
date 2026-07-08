# Case Study Template Schema

用途：定义作品集中每个 Case Study 应该遵循的数据结构和展示逻辑，供 Codex、未来前端组件和内容维护使用。

本文件是案例内容规范，不是运行时代码。真实项目内容在 foundation 之后应放入 `apps/ai-native-product-builder-portfolio/` 下的内容目录，具体格式由 `docs/tech-stack-decision.md` 决定。

## 为什么需要 Schema

AI Native Product Builder Portfolio 不应只是项目截图墙。每个案例都要稳定呈现：

```text
为什么做
-> 为什么适合 AI
-> AI 在哪里介入
-> 人在哪里控制
-> 原型如何落地
-> 如何评估和迭代
```

统一 Schema 可以保证：

- 所有项目展示逻辑一致。
- 首页卡片、Projects 列表和 Case Study 详情可以来自同一内容源。
- 后续新增项目时，不需要重新设计页面结构。
- Codex / 前端组件能按固定字段生成页面。

## Canonical Case Study Schema v0.2

```yaml
case_study:
  meta:
    slug: string
    visibility: featured | standard | archived
    priority: integer
    last_updated: YYYY-MM-DD

  basic:
    title: string
    tagline: string
    category: string
    user: string
    role: string
    timeline: string
    status: concept | prototype | mvp | launched | archived
    tech_stack_summary:
      - string

  brand_evidence:
    primary_capability: business_judgment | ai_workflow | prototype_builder | engineering_background
    secondary_capabilities:
      - business_judgment | ai_workflow | prototype_builder | product_iteration | technical_communication
    proof_statement: string

  context:
    background: string
    target_user: string
    current_workflow: string
    problem: string
    user_pain_points:
      - string

  product_judgment:
    why_ai: string
    ai_opportunity: string
    ai_boundary:
      - task: string
        ai_can_do: string
        human_must_do: string
    human_in_the_loop:
      - step: string
        reason: string
    non_goals:
      - string

  product:
    solution: string
    core_features:
      - name: string
        description: string
        user_value: string
    user_flow:
      - step: string
        description: string

  ai_design:
    ai_role: string
    workflow_summary: string
    agent_workflow:
      - step: string
        input: string
        process: string
        output: string
        owner: ai | human | system
    prompt_strategy: string
    context_strategy: string
    evaluation_method: string

  technical:
    architecture: string
    data_flow: string
    tech_stack:
      frontend:
        - string
      backend:
        - string
      ai:
        - string
      database:
        - string
      deployment:
        - string
    implementation_notes:
      - string
    tradeoffs:
      - decision: string
        reason: string
        rejected_alternative: string

  evaluation:
    product_metrics:
      - name: string
        definition: string
        target: string | TBD
    ai_metrics:
      - name: string
        definition: string
        target: string | TBD
    validation_status: string

  outcome:
    demo_link: string | TBD
    github_link: string | TBD
    screenshots:
      - path: string | TBD
        caption: string
    impact: string

  reflection:
    challenges:
      - string
    product_decisions:
      - string
    limitations:
      - string
    future_iterations:
      - string
```

## 必填字段

每个正式 Case Study 至少必须填写：

```text
meta.slug
basic.title
basic.tagline
basic.category
basic.user
basic.role
basic.status
brand_evidence.primary_capability
brand_evidence.proof_statement
context.target_user
context.problem
product_judgment.why_ai
product_judgment.ai_boundary
product_judgment.human_in_the_loop
product.solution
ai_design.ai_role
ai_design.agent_workflow
technical.architecture
technical.tradeoffs
evaluation.product_metrics
evaluation.ai_metrics
outcome.impact
reflection.product_decisions
reflection.limitations
```

字段暂缺时使用 `TBD`，不删除字段。

## 页面展示顺序

建议 Case Study 页面按以下顺序展示：

```text
01. Project Overview
02. Context & Problem
03. Product Judgment
04. Product Solution
05. User Flow
06. AI Workflow / Agent Design
07. System Architecture
08. Technical Implementation / Tradeoffs
09. Evaluation
10. Outcome / Demo Evidence
11. Reflection & Next Iteration
```

## 使用规则

1. 所有项目页面必须使用统一数据结构。
2. `Product Judgment`、`AI Workflow / Agent Design`、`Evaluation` 不允许省略。
3. 不用技能 Badge 墙替代技术实现说明。
4. 不为完整感编造指标、截图、链接或真实用户反馈。
5. 真实 runtime content 只能放在 `apps/ai-native-product-builder-portfolio/` 下。

