# Content Model

用途：统一 PRD、内容战略、Case Study Schema 与未来前端内容数据结构，作为长期内容维护的数据规范。

本文件只定义内容模型和边界。进入 foundation 前，不创建 runtime content；进入 foundation 后，内容格式和目录以 `docs/tech-stack-decision.md` 为准。

## 内容所有权边界

### `docs/` 的职责

`docs/` 保存推进文档、产品策略、Schema、决策、日志和验证计划。

允许放：

```text
docs/prd.md
docs/portfolio-content-strategy.md
docs/case-study-template-schema.md
docs/content-model.md
docs/project-portfolio-index.md
docs/visual-system.md
docs/roadmap.md
docs/backlog.md
docs/architecture.md
docs/testing.md
docs/decision-log.md
docs/iteration-log.md
```

### `apps/` 的职责

真实应用代码、可被前端构建系统读取的 runtime content、组件、路由、样式、测试文件都必须放在：

```text
apps/ai-native-product-builder-portfolio/
```

技术路线已确认采用 Astro Content Collections + MDX + Zod schema。进入 foundation 后，runtime content 应按 `docs/tech-stack-decision.md` 放在：

```text
apps/ai-native-product-builder-portfolio/src/content/projects/
apps/ai-native-product-builder-portfolio/src/content/site/
apps/ai-native-product-builder-portfolio/src/content/capabilities/
```

## 顶层内容实体

未来内容系统至少包含以下实体：

```yaml
site_profile:
  owner_name: string | TBD
  title: "AI Native Product Builder"
  subtitle: string
  location: string | TBD
  resume_url: string | TBD
  contact_email: string | TBD
  social_links:
    - label: string
      url: string

capability:
  id: string
  title: string
  description: string
  proof_projects:
    - case_study_slug

case_study:
  slug: string
  basic: object
  brand_evidence: object
  context: object
  product_judgment: object
  product: object
  ai_design: object
  technical: object
  evaluation: object
  outcome: object
  reflection: object

project_index:
  featured:
    - case_study_slug
  all:
    - case_study_slug
```

## 首页与项目页数据关系

```text
site_profile
  -> Home Hero
  -> About / Contact

capability
  -> Capability Map
  -> What I Build

project_index.featured
  -> Selected Case Studies

project_index.all
  -> Projects Index

case_study
  -> Case Study Detail
  -> Project Card summary
```

首页 Featured Projects 和 Projects Index 必须来自同一项目数据源，避免首页文案和详情页内容分裂。

## Project Card 最小字段

首页和 Projects 列表中的项目卡片至少需要：

```yaml
project_card:
  slug: string
  title: string
  tagline: string
  status: concept | prototype | mvp | launched | archived
  primary_capability: string
  problem_summary: string
  ai_role_summary: string
  my_role: string
```

这些字段应从 `case_study` 派生，不单独维护第二份事实。

## 内容准入规则

新增项目必须通过以下检查：

1. 是否存在明确用户和真实问题？
2. 是否说明 Why AI，而不是简单套 AI？
3. 是否定义 AI Boundary 和 Human-in-the-loop？
4. 是否能证明至少一个能力维度？
5. 是否能按 `docs/case-study-template-schema.md` 填写？

未通过检查的项目不得进入 Featured Projects。

## Codex / Claude Code 使用规则

当生成页面、组件或内容文件时，必须先读取：

```text
docs/prd.md
docs/portfolio-content-strategy.md
docs/case-study-template-schema.md
docs/content-model.md
docs/project-portfolio-index.md
docs/visual-system.md
```

并遵守：

1. Case Study 页面必须按 v0.2 Schema 渲染。
2. `Product Judgment`、`AI Workflow / Agent Design`、`Evaluation` 不允许省略。
3. 技术实现部分必须解释取舍，不允许做技能 Badge 墙。
4. 页面文案应证明 AI Native Product Builder 能力，而不是展示“用了哪些工具”。
5. 前端可见文案以中文为主，只保留必要英文术语；导航、按钮、卡片标签、状态标签和占位说明不直接使用英文。
6. 如果字段暂缺，内容字段可以保留 `TBD` 或“待补充”，但前端展示优先显示“待补充”。
7. 视觉化组件必须服务内容判断：Workflow Diagram、Decision Matrix、Architecture Block、Capability Map 应从内容字段或派生数据生成，不单独维护第二份事实。
8. 页面、组件和视觉增量必须遵守 `docs/visual-system.md` 的视觉方向、动效边界和 Visual QA Checklist。
