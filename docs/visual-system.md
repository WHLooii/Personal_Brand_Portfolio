# 视觉系统：AI Native Product Builder Portfolio

用途：定义 AI Native Product Builder Portfolio 的视觉方向、布局规则、组件表达、动效边界和验收标准，作为后续 foundation、页面、组件和视觉增量的执行护栏。

本文件不是高保真 UI 稿，不替代 `docs/prd.md`、`docs/content-model.md` 或 `docs/case-study-template-schema.md`。它只回答一个问题：

> 产品定位和内容结构应该如何被清晰、克制、有产品判断地呈现？

## 文档状态

- Project：AI Native Product Builder Portfolio
- Version：v0.2
- Document Type：Visual System / Design Direction / Agent Execution Guardrail
- Status：Implemented and verified through `VU-005`
- Primary Audience：Codex、Claude Code、未来前端实现、未来内容维护
- 最后更新：2026-07-10

## 1. 核心目的

这个作品集不应该变成普通个人主页、简历页、前端动画展示站或模板化项目墙。它应该像一个高级、结构化、内容优先的 AI 产品案例库，让访问者快速形成判断：

```text
Problem Discovery
-> Product Judgment
-> AI Workflow Design
-> Prototype Building
-> Evaluation and Iteration
```

视觉系统服务三个目标：

1. 让访问者在 5-10 秒内理解定位：`AI Native Product Builder`。
2. 让每个 Case Study 都显得结构清楚、可信、有产品判断。
3. 用克制的视觉和少量动效提升理解效率，而不是分散注意力。

核心原则：

> 视觉表现力不是装饰，而是产品判断、信息组织和 AI Workflow 表达能力的一部分。

## 2. 与其他文档的关系

本文件与以下文档配合使用：

```text
docs/prd.md
docs/portfolio-content-strategy.md
docs/case-study-template-schema.md
docs/content-model.md
docs/project-portfolio-index.md
docs/tech-stack-decision.md
```

职责边界：

| 文档 | 职责 |
| --- | --- |
| `docs/prd.md` | 定义产品定位、目标用户、MVP 范围、页面结构、验收标准和不做什么 |
| `docs/portfolio-content-strategy.md` | 定义能力证明链和项目组合策略 |
| `docs/case-study-template-schema.md` | 定义每个 Case Study 的统一数据结构 |
| `docs/content-model.md` | 定义未来前端内容数据模型和 docs/apps 边界 |
| `docs/project-portfolio-index.md` | 定义 Featured Projects、补充项目和能力映射 |
| `docs/tech-stack-decision.md` | 定义 Astro-powered Editorial Product Experience System 技术路线 |
| `docs/visual-system.md` | 定义上述产品与内容决策如何落到布局、组件、视觉语言、动效和验收规则 |

本文件不承载项目事实，不创建 runtime content，不写生产 UI 代码。

## 3. 视觉定位

视觉关键词：

```text
Calm Intelligence
Structured Builder
Premium Technical Editorial
```

中文解释：

```text
冷静的智能感
结构化的构建者气质
高级技术编辑感
```

网站应该像：

- 高质量 AI 产品官网。
- 结构化 Product Case Study 档案库。
- 技术编辑型内容系统。
- 冷静、可信、有判断力的个人品牌界面。

网站不应该像：

- 学生简历模板。
- 普通作品集项目墙。
- 个人博客主题。
- 前端动画 demo。
- 暗黑 AI 科幻落地页。
- 技能 Badge 墙。

第一印象应该是：

> 这个人有产品判断、信息架构能力、AI Workflow 思维和视觉表达品味。

## 4. 参考风格

参考方向：

```text
Linear x Vercel x Notion
```

这些是质量和克制感参考，不是要复制品牌视觉。

### Linear 可借鉴

- 冷静的产品系统感。
- 信息密度高但可读。
- 间距精准。
- 层次细腻。
- 交互状态优雅。

### Vercel 可借鉴

- 技术可信感。
- 清晰 Typography。
- 高对比信息层级。
- 清楚的产品 section。
- 面向技术受众的精致感。

### Notion 可借鉴

- 内容清晰。
- 文档式可读性。
- 结构化信息块。
- 低认知负担。
- 安静但有秩序的界面。

不要直接复制这些产品的布局、图形、图标、渐变或营销文案。

## 5. 核心视觉原则

### 5.1 Content First，视觉服务判断

作品集的目标是证明 Product Judgment，而不是单独展示审美。

每一个视觉选择都应该帮助访问者理解：

```text
发现了什么问题？
为什么适合 AI？
AI Workflow 如何设计？
原型如何落地？
如何评估和迭代？
```

如果一个视觉元素不能帮助理解这些问题，就应该删除或简化。

### 5.2 Structure Is the Brand

本项目最强的视觉识别不应来自装饰，而应来自结构。

优先使用：

- Grid。
- Matrix。
- Diagram。
- Timeline。
- Decision Card。
- Product Workflow Block。

不要只依赖截图、技术 Badge 或装饰性 Hero 图。

### 5.3 Motion Guides Attention

动效用于引导注意力，不用于娱乐或炫技。

合适的动效：

```text
Workflow 线条从 Input 走向 Output。
Project Card hover 时轻微上浮。
Case Study section 进入视口时轻微 fade-up。
Decision Matrix 中被选择的判断项变为 active。
```

不合适的动效：

```text
大面积粒子背景。
整页滚动劫持。
复杂视差叙事。
鼠标跟随效果抢走正文注意力。
长 loading 动画延迟内容出现。
每个 section 都为了动画而动画。
```

### 5.4 Premium Restraint

高级感不是堆更多元素，而是更好的取舍。

优先追求：

- 更少的颜色。
- 更清楚的 Typography。
- 更稳定的间距。
- 更一致的对齐。
- 更克制的交互反馈。
- 更明确的信息层级。

### 5.5 Schema Drives Components

视觉组件应该来自结构化内容字段。

示例映射：

```text
product_judgment -> DecisionMatrix
ai_design.agent_workflow -> WorkflowDiagram
technical.architecture -> ArchitectureBlock
evaluation -> MetricBlock / EvaluationPanel
reflection.future_iterations -> Timeline
```

### 5.6 中文优先表达

前端可见文案默认使用中文表达，只保留必要英文术语。

应该保留的英文包括：

```text
AI Native Product Builder
AI Workflow
Agent
Human-in-the-loop
AI Boundary
Why AI
Astro / MDX / Tailwind CSS 等技术名词
schema 字段名和必要路由 slug
```

不应该保留英文的内容包括：

```text
导航、按钮、卡片标签、状态标签、区块标题、占位说明、表格表头、空状态文案。
```

如果内容字段暂缺，前端展示优先使用“待补充”，避免把 `TBD` 直接暴露给访问者。

不要为单个项目硬编码一套特殊页面，除非该模式会沉淀为可复用组件。

### 5.7 Performance Is Aesthetic

高级界面必须感觉快。

V1 避免：

- 不必要的重 JavaScript。
- 大型动画库。
- 自动播放背景视频。
- 不必要的 3D 资源。
- 大量不可复用的一次性视觉效果。

视觉表现力优先来自 Layout、Typography、SVG、CSS 和少量 React Islands。

## 6. 视觉语气

应该传达：

```text
Precise
Calm
Confident
Editorial
Technical
Readable
Product-minded
```

避免：

```text
Cute
Chaotic
Overly playful
Overly futuristic
Overly corporate
Overly academic
Overly personal
```

个性来自判断和 craft，不来自过度装饰。

## 7. 色彩系统

### 7.1 方向

V1 使用黑白灰为基础，只保留一个主 accent 色系。

色彩需要表达：

- 清晰。
- 技术可信。
- 冷静智能。
- 高级克制。

### 7.2 明暗叙事

V1 采用“深色品牌层 -> 灰蓝雾层 -> 浅色阅读层”的单向视觉弧线：

- 深色负责建立 AI Native Product Builder 的品牌与技术感。
- 灰蓝雾层负责连接深色系统图与浅色案例内容。
- Porcelain / Paper 浅色面负责承载 Case Study 证据和长内容阅读。
- 不使用深浅交替的拼贴节奏，也不把全站改成暗色科幻界面。
- 页面缩小为长图时，明暗变化应是连续曲线，而不是模块级硬切。

### 7.3 语义化 tokens

使用语义 token，不要在组件里散写随机色值。

当前实现基线：

```css
:root {
  --color-night-950: #050816;
  --color-night-900: #08101f;
  --color-night-800: #101a31;
  --color-mist-700: #596579;
  --color-mist-400: #aab4c5;
  --color-porcelain: #f3f5f9;
  --color-paper: #ffffff;

  --color-accent: #0f6b83;
  --color-accent-on-dark: #bfeeff;

  --surface-glass-subtle: rgba(255, 255, 255, 0.04);
  --surface-glass: rgba(255, 255, 255, 0.045);
  --surface-glass-elevated: rgba(255, 255, 255, 0.08);
  --surface-paper-translucent: rgba(255, 255, 255, 0.94);
}
```

V1 只使用青蓝主 accent family。紫色仅允许作为已有标题光谱渐变的低占比端点，不作为按钮、状态、分类或第二套界面强调色。

### 7.4 使用规则

使用颜色表达：

- Primary CTA。
- Active workflow step。
- Key decision highlight。
- Link hover state。
- Selected capability dimension。
- Subtle product identity。

不要用颜色制造：

- 随机卡片装饰。
- 彩虹技能 Badge。
- 多套项目分类色。
- 影响可读性的大面积渐变。

### 7.5 背景规则

优先背景：

```text
Plain off-white
Subtle grid texture
Section-level muted surface
```

避免：

```text
Heavy gradients
Cyberpunk neon backgrounds
Large animated particles
Busy image backgrounds behind text
Decorative glow backgrounds
```

## 8. Typography 系统

### 8.1 方向

Typography 应该有：

```text
Editorial
Technical
Readable
Confident
Precise
```

用字体层级建立秩序，不用夸张字效制造视觉噪音。

### 8.2 推荐字体栈

```css
--font-sans: Inter, Geist, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono: "Geist Mono", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
```

不要把字体文件直接放入仓库，除非授权和加载方案已经明确。优先使用系统字体、npm package 或规范的 web-font 集成方式。

### 8.3 字号层级

Desktop 建议：

```text
Hero Title:      56px-64px / line-height 1.0-1.08
Page H1:         44px-48px / line-height 1.08
Section H2:      32px-36px / line-height 1.15
Section H3:      22px-24px / line-height 1.25
Card Title:      18px / line-height 1.35
Body:            16px / line-height 1.7
Small:           14px / line-height 1.55
Meta:            12px / line-height 1.4
Code / Label:    13px / line-height 1.5
```

Mobile 建议：

```text
Hero Title:      40px-48px
Page H1:         34px-40px
Section H2:      28px-32px
Body:            16px
Small:           14px
```

全站 `letter-spacing` 默认使用 `0`，不要使用负字距。标题可以通过字号、行高、字重和间距形成高级感。

### 8.4 文本宽度

控制行长：

```text
Hero subtitle:       max-width 680px
Body paragraph:      max-width 720px
Case study content:  max-width 760px
Wide diagrams:       max-width 1080px-1200px
```

不要出现满屏横向长段落。

### 8.5 标签文案

标签要短、具体、有判断。

推荐：

```text
Why AI?
AI Boundary
Human-in-the-loop
Workflow
Evaluation
```

避免：

```text
Introduction
More Details
My Work
Features
```

## 9. Layout 系统

### 9.1 页面宽度

主容器最大宽度：

```text
1200px
```

### 9.2 Grid

桌面端可使用 12-column grid，但不强制每个 section 都使用复杂网格。

推荐模式：

```text
Homepage Hero:
- 文本主导
- 可加入 Product Building Framework 或 AI Workflow system diagram
- 不做装饰性左右分屏模板

Featured Projects:
- desktop 3-column
- tablet 2-column
- mobile 1-column

Case Study:
- main content 8 columns
- metadata / section nav 4 columns

Wide Diagrams:
- 可跨 12 columns
```

### 9.3 间距系统

使用稳定 spacing scale：

```text
4px
8px
12px
16px
24px
32px
48px
64px
96px
128px
```

推荐 section 间距：

```text
Hero vertical padding:       96px-144px desktop
Section vertical padding:    80px-120px desktop
Card internal padding:       24px-32px
Case study block spacing:    48px-80px
Mobile section padding:      56px-80px
```

### 9.4 对齐

优先左对齐。

居中只用于：

- 小 section label。
- Hero eyebrow。
- Final CTA。

不要居中长文本。

### 9.5 视觉节奏

首页节奏建议：

```text
Text-led section
Card grid section
Diagram section
Case proof section
CTA section
```

不要连续堆很多 card grid，中间需要有叙事转换。

## 10. 组件系统

组件必须可复用，并尽量由结构化内容驱动。

### 10.1 Hero

目的：

```text
在 5 秒内建立 AI Native Product Builder 定位。
```

内容：

```text
AI Native Product Builder
设计并构建 AI-native 产品，从 Product Judgment、Agent/RAG Workflow 到可运行原型。
Primary CTA: View Case Studies
Secondary CTA: Contact / Resume
```

视觉规则：

- 不使用大头像作为 Hero 主视觉。
- 不写长篇自传。
- 不做满屏动画背景。
- 用强 Typography 和留白建立第一印象。
- 可加入一个结构化视觉模块，例如 Product Building Framework。

动效：

- 标题轻微 fade-up。
- CTA hover transition。
- Framework nodes 顺序出现。

### 10.2 ProjectCard

目的：

```text
让每个项目成为某项能力的证据。
```

必需内容：

```text
Project Name
Tagline
Problem
AI Role
My Role
Status
Capability Proof
View Case Study
```

视觉规则：

- 卡片干净，边框细腻。
- 内容可扫读。
- 只突出一个 primary capability。
- 不堆技术 Badge。
- 如果有 AI Workflow 或产品系统线索，可以加入小型结构提示。

动效：

```text
hover translateY(-4px)
subtle border accent
soft shadow increase
CTA arrow shift
```

避免：

```text
large scale transform
3D card tilt by default
glow effects that reduce readability
```

### 10.3 WhatIBuildCard

目的：

```text
解释能力方向，而不是做技能墙。
```

三类卡片：

```text
AI Copilot Products
Agent / RAG Workflow
AI Product Thinking System
```

每张卡片包含：

```text
Capability title
One-sentence explanation
Representative project
Small diagram or icon-like line drawing
```

不要把技术列表当成主要证据。

### 10.4 ProductBuildingFramework

目的：

```text
可视化橘子的工作方法。
```

结构：

```text
Problem
-> AI Judgment
-> Workflow Design
-> Prototype
-> Evaluation
```

视觉规则：

- desktop 可横向。
- mobile 应垂直。
- 每个 step 是一个 node，配短说明。
- accent 色只用于 active 或关键步骤。

动效：

- nodes 顺序出现。
- connector line 轻微推进一次。
- hover 展开短说明。

避免循环动画干扰阅读。

### 10.5 CapabilityMap

目的：

```text
展示多个项目如何共同证明品牌能力。
```

结构示例：

```text
Project                     Product Judgment    AI Workflow    Prototype    Evaluation
TalentSignal AI             Strong              Strong         Medium       Medium
Ecommerce Review Copilot    Strong              Medium         Medium       Medium
AI PM Judgment Coach        Medium              Strong         Strong       Medium
```

视觉规则：

- 用 matrix，不写成长段说明。
- 分数表达要简单。
- 可使用文字标签或小圆点。
- 不把能力评分做成游戏化界面。

### 10.6 CaseStudyHeader

目的：

```text
像介绍一个产品案例，而不是博客文章。
```

必需内容：

```text
Project Name
Tagline
Category
User
Role
Timeline
Tech Stack
Status
Primary capability proof
```

视觉规则：

- 标题强，定位短。
- 包含 metadata panel。
- 如果有 proof statement，要优先展示。
- 可选 product screenshot 或 architecture preview，但必须服务证据，不做装饰。

### 10.7 DecisionMatrix

目的：

```text
展示 Product Judgment。
```

必需内容：

```text
Why AI?
AI Opportunity
AI Boundary
Human-in-the-loop
Non-goals
Risk / Limitation
```

视觉规则：

- 使用 matrix 或 stacked decision cards。
- 每条判断短而精确。
- 明确呈现边界，不只呈现机会。
- 让访问者看出 AI 不是被盲目使用。

交互规则：

- 可 hover 强调。
- 可展开长说明。
- 核心判断不能只藏在交互里。

### 10.8 WorkflowDiagram

目的：

```text
展示 AI 如何进入产品流程。
```

基础结构：

```text
Input
-> Data Processing
-> AI Reasoning
-> Human Review
-> Output
-> Feedback
```

视觉规则：

- V1 优先 SVG-first。
- 使用简单 node 和 connector。
- 区分 AI step、human step、system step。
- 标签必须可读。
- 避免过度复杂的架构图。

实现偏好：

```text
静态流程图：Astro component。
需要 step-by-step 交互：React Island。
```

### 10.9 ArchitectureBlock

目的：

```text
解释技术实现与 tradeoffs，而不是堆工程细节。
```

内容：

```text
Frontend
Backend
Data Flow
AI Provider
Database / Storage
Deployment
Key Tradeoffs
```

视觉规则：

- 使用 block diagram 或 layered system view。
- 清楚展示数据移动。
- 用短 notes 解释 tradeoffs。
- V1 不做过大的 cloud architecture 图。

### 10.10 MetricBlock / EvaluationPanel

目的：

```text
展示如何评估成败。
```

必需分组：

```text
Product Metrics
AI Metrics
Validation Status
```

可用指标示例：

```text
Task Completion
User Efficiency
Evidence Coverage
Hallucination Risk
Human Correction Rate
```

规则：

- 可使用 compact cards 或 stat rows。
- 没有真实指标时，诚实展示验证状态。
- 不编造量化结果。

### 10.11 Timeline

目的：

```text
展示 roadmap、iteration 和 future direction。
```

结构：

```text
P0 MVP
-> P1 Optimization
-> P2 Productization
```

规则：

- milestone label 必须具体。
- 状态要诚实。
- 不把未来计划写成已经完成。

### 10.12 InsightCallout

目的：

```text
突出产品决策、反思和限制。
```

类型：

```text
Product Decision
AI Boundary
Tradeoff
Limitation
Future Iteration
```

规则：

- 使用克制背景面。
- 只保留一条 accent line 或 marker。
- 内容保持短而有判断。

## 11. 动效系统

### 11.1 动效哲学

动效应该引导注意力、解释结构、提升 polish。

动效不应该成为产品本身。

推荐比例：

```text
80% static premium visual design
15% CSS micro-interactions
5% interactive motion islands
```

### 11.2 动效层级

Layer 1：CSS micro-interactions。

使用于：

```text
hover state
button transition
card lift
border highlight
link underline
section fade-up
small icon movement
```

Layer 2：Astro View Transitions。

使用于：

```text
Home project card -> Project detail page
Projects index -> Project detail page
Shared project title or preview image transition
```

Layer 3：React Islands + motion library。

只用于确实需要交互的组件：

```text
ProjectFilter.tsx
WorkflowStepper.tsx
ReadingProgress.tsx
InteractiveDecisionMatrix.tsx
```

不要为了动画把整个站点变成 React app。

### 11.3 Motion tokens

```css
:root {
  --duration-fast: 120ms;
  --duration-normal: 200ms;
  --duration-slow: 360ms;
  --duration-section: 520ms;

  --ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
}
```

### 11.4 V1 允许的动效

```text
Project Card hover lift
CTA hover arrow movement
Subtle section fade-up
Framework node reveal
Workflow connector progress
Sticky reading progress
Project card to detail view transition
Decision matrix hover emphasis
```

### 11.5 V1 禁止的动效

```text
Large particle field
Heavy 3D scene
Scroll-jacking
Complex parallax storytelling
Long loading animation
Cursor-following glow as a main effect
Autoplay background video behind text
Animation that hides core content
Every section using a different animation style
```

### 11.6 Reduced Motion

实现必须尊重 `prefers-reduced-motion`。

当用户偏好 reduced motion：

```text
Disable section reveal motion.
Disable connector progress animation.
Keep hover state changes simple.
Keep page transitions minimal or disabled.
```

动效不能成为理解内容的必要条件。

## 12. 首页视觉规格

首页应该像聚焦的产品首页，而不是个人日记或简历首页。

### 12.1 Hero

目标：

```text
5 秒内建立 AI Native Product Builder 定位。
```

结构：

```text
Eyebrow: AI Native Product Builder Portfolio
Title: AI Native Product Builder
Subtitle: concise positioning
CTA row
Supporting visual: Product Building Framework diagram or compact AI workflow system card
```

规则：

- 不放大头像。
- 不写长篇 biography。
- 不使用通用 AI 抽象插画。
- 不做花哨满屏动画。
- 支撑视觉应该是系统图，不是装饰图。

### 12.2 What I Build

目标：

```text
把定位翻译成具体能力方向。
```

三类卡片：

```text
AI Copilot Products
Agent / RAG Workflow
AI Product Thinking System
```

每张卡回答：

```text
这是什么能力？
能构建什么产品？
哪个项目可以证明？
```

### 12.3 Featured Projects

目标：

```text
把精选项目作为 proof，而不是 gallery。
```

每张卡需要清楚展示：

```text
Project
Problem
AI Role
My Role
Capability Proof
Status
```

项目卡不应被截图或技术 Badge 主导。

### 12.4 Product Building Framework

目标：

```text
让工作方法被记住。
```

结构：

```text
Problem -> AI Judgment -> Workflow Design -> Prototype -> Evaluation
```

这个模块可以成为首页的 signature visual element。

### 12.5 Capability Map

目标：

```text
展示作品集如何形成完整能力证明链。
```

使用 matrix 连接项目与能力维度，不写成长段文字。

### 12.6 About

目标：

```text
提供足够个人背景，但不把页面变成简历。
```

规则：

- 短段落即可。
- 详细经历交给 resume。
- 强调 AI product builder 定位。
- 不重复完整简历。

### 12.7 Contact

目标：

```text
让下一步行动清楚。
```

包含：

```text
Email
LinkedIn
GitHub
Resume
```

保持简单直接。

## 13. Case Study 页面视觉规格

每个 Case Study 应该像结构化产品案例，而不是博客文章。

推荐结构：

```text
Case Study Hero
-> Project Overview / Metadata
-> Context & Problem
-> Product Judgment
-> AI Workflow
-> Prototype
-> Technical Implementation
-> Evaluation
-> Reflection
-> Future Roadmap
```

Desktop layout：

```text
Main content: 8 columns
Sticky side panel: 4 columns
```

Side panel 可包含：

```text
Project metadata
Capability proof
Section navigation
Status
Links
```

Mobile layout：

```text
Metadata collapses below hero.
Sticky side panel becomes inline navigation.
Diagrams become vertical.
Cards stack in one column.
```

使用视觉模块打断长叙事：

```text
DecisionMatrix for Product Judgment
WorkflowDiagram for AI Workflow
ArchitectureBlock for Technical Implementation
MetricBlock for Evaluation
Timeline for Future Roadmap
InsightCallout for reflection
```

诚实规则：

```text
如果没有真实 metric，不要编造。
可使用：
- Validation Status: Prototype validated by self-testing
- Metric Status: TBD
- User Feedback: Pending
```

## 14. Content-to-Component Mapping

```text
case_study.meta
-> SEO metadata, route slug, ordering, featured state

case_study.basic
-> CaseStudyHeader, ProjectCard, ProjectOverview

case_study.brand_evidence
-> CapabilityMap, ProjectCard proof label, Hero proof statement

case_study.context
-> ProblemSection, UserPainPointList, ContextBlock

case_study.product_judgment
-> DecisionMatrix, WhyAIBlock, BoundaryBlock

case_study.product
-> ProductSolutionBlock, FeatureGrid, UserFlow

case_study.ai_design
-> WorkflowDiagram, AgentStepList, PromptStrategyBlock

case_study.technical
-> ArchitectureBlock, TechStackPanel, DataFlowDiagram

case_study.evaluation
-> MetricBlock, EvaluationPanel, ValidationStatus

case_study.outcome
-> DemoLinks, ScreenshotGallery, ImpactBlock

case_study.reflection
-> ReflectionBlock, LimitationCallout, FutureRoadmapTimeline
```

实现规则：

> 不创建项目专属组件，除非内容模型确实需要一个新的可复用模式。

## 15. 实现方向

本视觉系统基于以下技术路线：

```text
Astro
TypeScript
Astro Content Collections
MDX
Tailwind CSS
CSS variables
Astro components
SVG-first diagrams
React Islands only for selected interactions
```

推荐文件组织：

```text
apps/ai-native-product-builder-portfolio/
  src/
    styles/
      tokens.css
      global.css

    components/
      ui/
        Button.astro
        Card.astro
        SectionHeader.astro
        Badge.astro
        Callout.astro

      home/
        Hero.astro
        WhatIBuild.astro
        FeaturedProjects.astro
        ProductBuildingFramework.astro
        CapabilityMap.astro
        ContactCTA.astro

      case-study/
        CaseStudyHeader.astro
        ProjectOverview.astro
        DecisionMatrix.astro
        WorkflowDiagram.astro
        ArchitectureBlock.astro
        MetricBlock.astro
        Timeline.astro
        ReflectionBlock.astro

      interactive/
        ProjectFilter.tsx
        WorkflowStepper.tsx
        ReadingProgress.tsx
```

样式规则：

```text
Use CSS variables for colors, radius, shadows, and motion durations.
Use reusable components for repeated card and section patterns.
Use semantic component names.
Use consistent spacing.
Do not hardcode random hex colors across components.
Do not create one-off card styles for every section.
Do not add many gradients without a system.
```

推荐 design tokens：

```css
:root {
  --radius-control: 8px;
  --radius-card: 12px;
  --radius-shell: 28px;

  --shadow-card: 0 1px 2px rgba(10, 10, 10, 0.04), 0 8px 24px rgba(10, 10, 10, 0.06);
  --shadow-card-hover: 0 2px 4px rgba(10, 10, 10, 0.06), 0 16px 40px rgba(10, 10, 10, 0.10);

  --container-width: 1200px;
  --content-width: 760px;
}
```

按钮、输入和标签使用 `8px`；普通卡片使用 `12px`；只有跨越明暗区域的大型内容壳可使用 `28px`。胶囊状态和圆形节点使用 `999px`，不要把该值扩散到普通卡片。

Diagram 实现：

```text
Prefer SVG or semantic HTML/CSS diagrams for V1.
Use diagrams for Workflow, Architecture, Capability Map, Product Building Framework, and Decision Matrix.
Do not use a heavy charting library unless the data becomes complex.
```

图片使用：

```text
Use images only when they support proof:
- Product screenshot
- Prototype flow
- Architecture preview
- Before/after workflow
```

避免装饰性 stock images。

## 16. Accessibility and Usability

### 16.1 Contrast

正文必须保持强对比度。不要把正文放在渐变、图片或复杂背景上，除非可读性已经被验证。

### 16.2 Focus States

所有可交互元素必须有可见 focus state，包括：

```text
Buttons
Links
Project cards
Tabs
Accordion triggers
Workflow steps
```

### 16.3 Keyboard Navigation

React Islands 必须支持键盘：

```text
Tab order is logical.
Enter / Space activates controls.
ARIA labels are used when necessary.
```

### 16.4 Reduced Motion

必须尊重 `prefers-reduced-motion`。

### 16.5 Reading Comfort

Case Study 页面应支持 3-5 分钟舒适阅读。

避免：

```text
Too-small body text
Low contrast meta text
Dense paragraphs without visual breaks
Overly narrow content width
Overly wide content width
```

## 17. 性能规则

高级界面必须感觉快。

### 17.1 JavaScript Budget

V1 避免不必要的 client-side JavaScript。

默认：

```text
Astro components render static HTML.
React Islands are used only for selected interactions.
```

### 17.2 Animation Performance

优先动画属性：

```text
opacity
transform
```

避免频繁动画：

```text
width
height
top
left
box-shadow on many elements
filter blur on large areas
```

### 17.3 Media

所有图片都应压缩并使用合适尺寸。

规则：

```text
Use compressed images.
Use appropriate dimensions.
Avoid autoplay video in V1.
Avoid large background media.
```

### 17.4 LCP Priority

Hero 内容必须快速出现。首页定位信息不应等待复杂动画或大图加载完成后才显示。

## 18. Visual QA Checklist

任何视觉增量验收前，至少检查：

```text
[ ] 页面是否立即传达 AI Native Product Builder 定位？
[ ] 视觉层级是否让内容更容易理解？
[ ] Project Card 是否是 proof-oriented，而不是 screenshot-oriented？
[ ] Product Judgment 是否可见，而不是被埋在正文里？
[ ] AI Workflow 是否以结构化视觉模块呈现？
[ ] 色彩是否克制并 tokenized？
[ ] 是否只有一个主 accent color family？
[ ] Typography 是否可读且有质量感？
[ ] Section spacing 是否一致？
[ ] 动效是否克制且有目的？
[ ] reduced motion 下是否仍可用？
[ ] 布局是否响应式？
[ ] Case Study 是否和 schema 保持一致？
[ ] 是否避免了不必要的重 JavaScript？
[ ] 是否避免了模板站气质？
```

## 19. Anti-Patterns

V1 不实现以下模式。

### 19.1 Skill Badge Wall

避免：

```text
React | Next.js | Python | AI | GPT | Figma | SQL | Tailwind
```

技能应通过项目决策和 implementation tradeoffs 被证明。

### 19.2 Generic Project Gallery

避免项目卡只展示：

```text
Screenshot
Project name
Tech stack
GitHub link
```

每个项目必须说明它证明了什么能力。

### 19.3 Over-personalized Resume Homepage

Hero 不以学校、经历、大头像或自传为中心。Hero 应该聚焦定位和产品能力。

### 19.4 Animation Showcase

不要围绕动效技巧构建网站。访问者应该记住产品思考，而不是记住效果。

### 19.5 AI Cliche Visuals

避免过度使用：

```text
Robot icons
Brain icons
Neural network backgrounds
Purple-blue particle clouds
Magic sparkle effects
```

优先使用 system diagrams。

## 20. Visual Backlog Ideas

以下是未来可拆分为 backlog item 的视觉增量想法。本节不自动改变当前下一步，当前下一步仍以 `docs/backlog.md` 和 `docs/iteration-log.md` 为准。

### V-001 Create Visual Design Tokens

目标：

```text
建立 color、typography、radius、shadow、spacing、motion tokens。
```

范围：

```text
apps/ai-native-product-builder-portfolio/src/styles/tokens.css
apps/ai-native-product-builder-portfolio/src/styles/global.css
Tailwind config if applicable
```

验收：

```text
Tokens exist and are used by at least one base page.
No random color system is introduced.
```

### V-002 Build Base UI Primitives

目标：

```text
创建 Button、Card、SectionHeader、Badge、Callout 等基础 primitives。
```

验收：

```text
Homepage and project pages can reuse these primitives.
Hover and focus states are implemented.
```

### V-003 Build Homepage Visual Skeleton

目标：

```text
创建 Hero、What I Build、Featured Projects、Framework、Capability Map、Contact sections 的 placeholder 结构。
```

验收：

```text
Homepage communicates positioning clearly even before full project content is written.
```

### V-004 Build Case Study Visual Components

目标：

```text
创建 CaseStudyHeader、DecisionMatrix、WorkflowDiagram、ArchitectureBlock、MetricBlock、Timeline。
```

验收：

```text
One sample case study can render through the unified component structure.
```

### V-005 Add Motion Layer

目标：

```text
加入 hover、reveal、workflow 和 page transition 的克制动效。
```

验收：

```text
Motion improves clarity and respects reduced-motion preferences.
```

## 21. Agent Execution Rules

Codex / Claude Code 在实现视觉增量时必须遵守：

### 21.1 不一次性构建完整网站

每次视觉增量只完成一个小的、可验证的改进。

推荐：

```text
Good: Implement design tokens.
Good: Implement ProjectCard visual states.
Good: Implement WorkflowDiagram from schema data.
Bad: Implement full homepage, all projects, animations, and deployment in one pass.
```

### 21.2 编辑前先说明范围

进入实现前先说明：

```text
Current goal
Files to modify
Expected output
Risk
Validation method
```

### 21.3 不绕过内容模型

foundation 存在后，视觉组件必须读取结构化内容。

不要把最终项目数据硬编码进页面组件，除非是临时 placeholder，并且明确标记。

### 21.4 不随意加重依赖

新增设计或动效依赖前，必须说明：

```text
Why it is needed
Which component needs it
Why CSS / SVG / Astro is insufficient
How it affects performance
```

### 21.5 保持 docs/apps 边界

```text
docs/visual-system.md
```

定义视觉规则。

```text
apps/ai-native-product-builder-portfolio/src/styles/
```

实现 tokens 和 global styles。

```text
apps/ai-native-product-builder-portfolio/src/components/
```

实现视觉组件。

```text
apps/ai-native-product-builder-portfolio/src/content/projects/
```

存放 runtime project content。

不要把生产 UI 代码放进 `docs/`。

## 22. Definition of Done for V1 Visual System

V1 视觉系统可视为完成，当且仅当：

```text
[x] 网站具备清晰的 AI Native Product Builder 视觉身份。
[x] 首页不是普通个人主页。
[x] Case Study 页面围绕 Product Judgment 和 AI Workflow 组织。
[x] 主要视觉组件可复用。
[x] 色彩系统 tokenized 且克制。
[x] Typography 和 spacing 一致。
[x] 动效克制、有目的、可访问。
[x] 网站保持 static-first portfolio 的性能优势。
[x] 新项目可以通过同一结构加入，而不需要重做页面。
```

## 23. Final Visual North Star

最终网站应该让访问者形成直觉判断：

> This person does not merely use AI tools. This person can identify AI product opportunities, design controlled AI workflows, build prototypes, evaluate outcomes, and communicate decisions with clarity and taste.

视觉系统的职责，是让这个判断更容易、更快、更可信。

## 24. 全站视觉连续性实施状态（VU-001 至 VU-005）

当前全站采用唯一明暗叙事：

```text
深色品牌层 -> 深蓝结构层 -> 灰蓝雾层 -> 白色阅读与证据层
```

- 首页：Hero 保持满屏；能力系统与构建流程使用自然高度；页面级滚动吸附已取消；方法样本通过白色 Editorial 主面与深色证明栏同时预告详情页两种界面；联系区以 porcelain 浅色收尾。
- Projects：使用暗色透明页眉和紧凑深色 Hero，自然过渡到浅色项目区；单案例卡采用白色主内容 + 灰蓝证明栏，不使用空白三列项目模板。
- Case Study：保留原 12 段左右渐变、中央泛白、雾面抗色带、白色内容壳、外侧纵深网格和 Sticky 摘要；局部视觉常量统一使用共享 token。
- 统一组件家族：跨区域内容壳为 28px、普通卡片为 12px、控件为 8px；深色玻璃阴影与白色纸面阴影各保留一套；accent 仅使用青蓝 family，紫色只保留在既有标题强调和极少量环境光。
- 响应式：已检查 1440×900、1280×800、1024×768、390×844；所有公开页面无横向溢出，桌面与移动阅读路径连续。
- 可访问性：轮盘支持滚轮、触控板与方向键；`prefers-reduced-motion` 下关闭非必要动画和位移；关键文字组合对比度不低于 4.92:1。
