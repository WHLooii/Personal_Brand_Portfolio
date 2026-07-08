# 技术路线雷达：AI Native Product Builder Portfolio

用途：由 `prddev-tech-route` 梳理技术路线候选、备选架构和技术栈信号。

状态：Primary route selected。最终决策见 `docs/tech-stack-decision.md`。

## 调研背景

- 已选项目方向：AI Native Product Builder Portfolio / AI 产品案例库
- 目标用户：AI PM / AI 产品岗位招聘方、潜在合作伙伴、同领域产品与 AI Workflow 从业者
- MVP 目标：用内容驱动的首页、Projects 列表和 Case Study 详情证明 Product Judgment、AI Workflow、Prototype Execution 和 Evaluation 能力
- 关键约束：
  - V1 不做 CMS、登录、社区、在线编辑器。
  - V1 不做站点级后端、数据库或 AI runtime。
  - 内容结构必须服务 Case Study Schema。
  - 视觉表现力必须服务产品判断、信息组织和 AI Workflow 表达。
  - 未来应用必须落在 `apps/ai-native-product-builder-portfolio/`。
- 最后更新：2026-07-07

## 产品技术形态判断

本项目是内容驱动型 AI 产品案例库，不是 SaaS、社区、博客、CMS、在线工具平台或视觉炫技作品集。

核心技术需求：

- 内容结构稳定。
- Case Study 页面可复用。
- Markdown / MDX / 结构化数据长期可维护。
- 首页与项目页内容优先。
- 易部署、易维护、SEO 友好。
- 能承载 Workflow Diagram、Decision Matrix、Architecture Block、Capability Map 等结构化视觉模块。
- 后续可承载少量交互原型或 demo 嵌入，但不让这些能力主导 V1。

## 已选 Primary Route

```text
Astro-powered Editorial Product Experience System
```

解释：

```text
Astro + Structured Content
+
Design System
+
Motion System
+
Case Study Visual Components
```

它不是单纯的静态站，也不是完整 Web App；更准确地说，是一个内容驱动的编辑型产品体验系统，辅以轻量交互岛和结构化视觉组件。

关键原则：

> 视觉表现力不是装饰，而是产品判断、信息组织和 AI Workflow 表达能力的一部分。

## 技术路线候选比较

| 技术路线 | 适用场景 | 优势 | 风险 | MVP 匹配度 | 当前结论 |
| --- | --- | --- | --- | --- | --- |
| Astro-powered Editorial Product Experience System | 内容驱动案例库，需要高级编辑感、结构化图表和少量交互 | 内容集合清晰、性能好、SEO 友好，视觉/动效可按需增强 | 需要明确 islands 边界，避免把交互复杂度带入全站 | 高 | 已选 primary route |
| Next.js + MDX / Content Collections | 需要 React 组件表达复杂交互，未来可能有服务端能力或复杂 demo | 组件化强，部署到 Vercel 顺滑，生态成熟 | 对当前静态 Portfolio 略重，容易扩大为应用工程 | 中高 | 不选为 V1 primary，保留未来可能 |
| Astro + MDX without explicit visual system | 内容站优先、静态化和性能优先 | 简洁、维护成本低 | 只解决内容生成，无法充分约束高级产品表达 | 中 | 被已选路线吸收，但不单独采用 |
| Vite + React + Static Data | 快速原型、全部内容放 TS / JSON 数据文件 | 简单直接，开发快 | SEO、路由、内容扩展需要自己补 | 中 | 轻量备选，不作为正式路线 |
| No-code / Webflow / Framer | 追求最快视觉呈现 | 上手快、视觉迭代快 | 不利于展示工程协作能力和内容 Schema 能力，不适合 Codex 长期维护 | 低 | V1 不选 |
| 完整 SaaS / CMS / 登录系统 | 有多人内容管理、账号、动态内容需求 | 扩展能力强 | 严重超出 V1，稀释作品集目标 | 低 | 明确延后 |

## 技术栈维度观察

| 维度 | 主流选择 | 适配信号 | 风险 | 是否 MVP 必需 |
| --- | --- | --- | --- | --- |
| Frontend | Astro / Next.js / Vite React | 内容页面 + 少量组件化表达 | 过早复杂化 | 必需 |
| Content Format | Astro Content Collections / MDX / Markdown / JSON / TS data | Case Study Schema 可结构化维护 | 纯自由 Markdown 容易字段漂移 | 必需 |
| Styling | Tailwind / CSS variables / scoped CSS | 需要克制、稳定、可复用布局 | 过度设计会偏离文档化气质 | 必需 |
| Visual Components | Astro components / SVG / React components | Workflow、Decision Matrix、Architecture Block 需要视觉化表达 | 如果缺少规则，容易变成装饰图 | 必需 |
| Motion | CSS transitions / Astro View Transitions / Motion for React | 动效用于引导注意力和增强页面连续性 | 动效过多会削弱专业感 | 基础必需，高级延后 |
| Backend | none | V1 以静态内容为主 | 后续 Demo 可能单独需要 API | 当前不必需 |
| Database | none | V1 不做 CMS / 登录 | 动态内容需求出现后再评估 | 当前不必需 |
| Authentication | none | 无用户系统 | 引入会扩大范围 | 不必需 |
| AI / LLM Integration | none for portfolio v1 / demo only | 作品集展示 AI 产品能力，不默认运行 AI 产品 | 过早接入会造成运维和成本负担 | 当前不必需 |
| Deployment | Vercel / Netlify / static hosting | 易部署、SEO 友好 | 取决于框架配置 | 必需 |
| Testing | build / check / lint / content validation / responsive visual QA | 内容结构和响应式需要验证 | foundation 前无命令 | 必需，foundation 阶段补齐 |

## Foundation 落地结果

`prddev-foundation` 已完成，当前已在 `apps/ai-native-product-builder-portfolio/` 下搭建最小 Astro 基座。下一阶段应进入 `prddev-increment` 的 `CS-001`，先创建第一个正式 Case Study 内容骨架，而不是开发完整页面。

foundation 已落地：

- Astro + TypeScript 应用骨架。
- Tailwind CSS + CSS variables 基础样式系统。
- Astro Content Collections + MDX + Zod schema。
- Home、Projects、Case Study Detail 的路由空结构。
- ProjectCard、CaseStudyLayout、WorkflowDiagram、DecisionMatrix、CapabilityMap 的最小组件骨架。
- dev / build / check / lint / content validation 命令。

foundation 未落地，且仍不应顺手加入：

- 完整视觉系统。
- 完整案例正文。
- CMS、登录、数据库、AI runtime。
- 重动画、3D、粒子背景、滚动劫持或动画 showcase。
