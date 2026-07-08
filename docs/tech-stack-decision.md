# 技术栈决策

用途：记录 `prddev-tech-route` 的技术路线与技术栈最终决策，作为 foundation 和后续 increment 的依据。

## 决策状态

- selected project direction：AI Native Product Builder Portfolio / AI 产品案例库
- primary technical route：Astro-powered Editorial Product Experience System
- 决策日期：2026-07-07
- 决策人：橘子 / Codex
- 状态：已决

当前允许进入：

- `prddev-foundation`
- 在 `apps/ai-native-product-builder-portfolio/` 下初始化最小 Astro 应用基座
- 建立基础路由、内容读取最小闭环、基础样式系统和验证命令

当前仍不得直接进入：

- 页面完整开发
- 多个 Case Study 内容填充
- runtime content 大规模创建
- CMS、登录、数据库、AI runtime 或复杂 Demo
- 重动画、3D、粒子背景或视觉炫技型实现

## Final Route

```yaml
final_route:
  product_form: hybrid
  route_name: Astro-powered Editorial Product Experience System
  route_summary: "内容驱动的编辑型产品体验系统，辅以轻量交互岛和结构化视觉组件。"
  framework: Astro
  language: TypeScript
  styling: Tailwind CSS + CSS variables + design tokens
  content_format: Astro Content Collections + MDX + Zod schema
  content_location: apps/ai-native-product-builder-portfolio/src/content/
  deployment: Vercel static deployment first, Netlify/static hosting compatible
  backend: none
  database: none
  ai_runtime: none_for_portfolio_v1

visual_principle:
  core: "视觉表现力不是装饰，而是产品判断、信息组织和 AI Workflow 表达能力的一部分。"
  direction: "Linear x Vercel x Notion, with AI workflow identity"
  goal: "Premium, calm, structured, technically credible"
  layout: "Editorial grid + product cards + structured diagrams"
  diagrams: "SVG-first Workflow Diagram / Decision Matrix / Architecture Block"
  motion: "CSS micro-interactions + Astro View Transitions + limited React Islands"

foundation_entry_criteria:
  - docs/prd.md is complete
  - docs/portfolio-content-strategy.md exists
  - docs/case-study-template-schema.md exists
  - docs/content-model.md exists
  - docs/project-portfolio-index.md exists
  - final_route.framework is Astro
  - final_route.content_format is Astro Content Collections + MDX + Zod schema
  - validation scripts are created during foundation
```

## 技术路线决策

- 产品应该以什么技术形态存在：内容驱动的编辑型产品体验系统，而不是普通个人主页、博客、纯视觉作品集或完整 SaaS。
- 选择原因：本项目的核心价值是通过结构化 Case Study、AI Workflow 图表、Decision Matrix、Capability Map 和克制视觉系统，让访问者快速判断橘子的 AI 产品判断、工作流设计、原型落地和评估能力。
- 与用户场景的匹配：招聘方、合作伙伴和客户需要在较短时间内看清能力证据；Astro 的静态内容能力适合承载案例阅读，React Islands 只在筛选、阅读进度、工作流展开等关键位置增强交互。
- 与 MVP 范围的匹配：V1 只需要 Home、Projects、Case Study 详情、统一内容结构和少量视觉化模块，不需要后端、数据库、登录、CMS 或站点级 AI runtime。
- 视觉原则：视觉表现力不是装饰，而是产品判断、信息组织和 AI Workflow 表达能力的一部分。

## MVP 技术栈

| 维度 | 选择 | required now / deferred | 选择原因 | 备注 |
| --- | --- | --- | --- | --- |
| Frontend | Astro | required now | 内容驱动、静态优先、SEO 友好，适合作品集案例库 | foundation 阶段初始化 |
| Language | TypeScript | required now | 便于内容 schema、组件 props 和长期维护 | 与 Astro 配套 |
| Content Format | Astro Content Collections + MDX + Zod schema | required now | Case Study 既需要结构化字段，也需要局部富文本表达 | 内容源位于 `src/content/` |
| Styling | Tailwind CSS + CSS variables + design tokens | required now | 支撑克制、统一、可复用的视觉系统 | 避免一次性散写样式 |
| Visual Components | Astro components + SVG-first diagrams | required now | Workflow Diagram、Decision Matrix、Architecture Block 是产品判断证据，不是装饰 | V1 先做基础组件形态 |
| Motion | CSS transitions / keyframes + Astro View Transitions | required now | 保持现代感和页面连续性，同时避免重 JS | 动效用于引导注意力 |
| Interactive Islands | React Islands | deferred | 只在 ProjectFilter、WorkflowStepper、ReadingProgress、InteractiveDecisionMatrix 等需要交互的组件使用 | 不把全站变成 React App |
| Advanced Motion | Motion for React | deferred | 仅在少量 React Islands 中需要更细的 layout、hover 或 scroll 动效时使用 | 不作为全站默认依赖 |
| Backend | none | deferred | V1 默认静态内容站 | Demo 需求出现后单独评估 |
| Database | none | deferred | V1 不做 CMS / 登录 | 动态内容需求出现后再评估 |
| Authentication | none | deferred | V1 无用户系统 | 明确不纳入 V1 |
| AI / LLM Integration | none_for_portfolio_v1 | deferred | 作品集展示 AI 产品能力，不默认运行 AI 能力 | 单个 Demo 可单独评估 |
| Vector Search / Retrieval | none | deferred | V1 不做 RAG 系统本体 | 案例中可展示设计，不作为站点能力 |
| File Storage | repository static assets | deferred | 初期可用仓库静态资源 | 大量媒体资产时复核 |
| Background Jobs | none | deferred | 无后台任务 | 不纳入 V1 |
| Deployment | Vercel static deployment first | required now | 作品集需要可访问、可分享、部署成本低 | 保持 Netlify/static hosting 兼容 |
| Testing | build / check / lint / content validation / responsive visual QA | required now | 需要验证内容结构、构建结果和关键响应式页面 | 命令在 foundation 阶段创建 |
| Analytics / Monitoring | deferred | deferred | 上线后可评估 | 不阻塞 foundation |

## 备选方案与不选原因

| 备选方案 | 不选原因 | 未来触发条件 |
| --- | --- | --- |
| Next.js + MDX / Content Collections | 对当前内容驱动 Portfolio 略重；全站 React 容易把注意力带向应用开发，而不是案例叙事、内容结构和视觉表达 | 如果未来需要复杂 demo、服务端能力、API routes 或更强 React app 形态 |
| Astro + MDX without explicit visual system | 只解决内容生成，不足以约束高级产品表达，容易退化成普通模板站或 Markdown 项目页 | 如果未来另有成熟设计系统约束，可简化视觉策略 |
| Vite + React + Static Data | 快速但长期 SEO、路由、内容集合和 schema validation 需要额外设计 | 如果只追求极轻原型，不追求内容长期维护 |
| No-code / Webflow / Framer | 不利于展示工程协作能力、内容 Schema 能力和 Codex 长期维护能力 | 如果目标临时变成纯视觉简历页 |
| Full SaaS / CMS / Login | 超出 V1，稀释作品集目标，增加后端、权限和运维复杂度 | 如果未来多人维护或动态内容管理成为核心需求 |
| Heavy 3D / animation showcase | 与 PRD 的克制、清晰、产品判断导向冲突，会削弱专业可信度 | 如果项目目标转为创意互动作品而非 AI 产品案例库 |

## Foundation 落地建议

- 最小项目形态：在 `apps/ai-native-product-builder-portfolio/` 下初始化 Astro + TypeScript 项目，接入 Tailwind CSS，建立 `src/content/` 内容集合和最小路由。
- 必要模块：
  - 基础路由：Home、Projects、Case Study Detail 空结构。
  - 内容读取：Astro Content Collections、Zod schema、一个示例 placeholder 内容闭环。
  - 基础样式系统：CSS variables、Tailwind config、typography 和 layout tokens。
  - 基础视觉组件：ProjectCard、CaseStudyLayout、WorkflowDiagram、DecisionMatrix、CapabilityMap 的最小可渲染形态。
  - 验证命令：dev、build、check、lint/content validation。
- 第一轮不做：完整视觉系统、完整案例正文、CMS、登录、在线编辑器、AI runtime、复杂 demo、重动画、3D、粒子背景。
- 预期验证命令：
  - install command：`npm install`
  - dev command：`npm run dev`
  - build command：`npm run build`
  - check command：`npm run check`
  - lint command：`npm run lint`
  - content validation command：由 Astro Content Collections / Zod schema 纳入 `npm run check` 或单独脚本

## 后续复核问题

| 问题 | 影响 | 负责人 | 截止或复核时机 |
| --- | --- | --- | --- |
| 首版是否需要嵌入可运行 Demo | 影响是否需要 iframe、API 或 demo 子应用边界 | 橘子 | 单个案例规划时 |
| React Islands 的首批组件范围 | 影响 JS 体积和交互复杂度 | Codex | 对应组件进入 backlog 前 |
| Motion for React 是否进入依赖 | 影响动效能力和依赖体积 | Codex | 第一个复杂交互组件前 |
| 是否新增独立视觉系统文档 | 影响视觉规则的集中维护方式 | 橘子 / Codex | 后续视觉组件系统阶段；本轮不新增 |
