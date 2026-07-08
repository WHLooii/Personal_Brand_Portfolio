# Roadmap：AI Native Product Builder Portfolio

用途：定义阶段推进顺序。Roadmap 定义阶段，backlog 定义小步开发路径。

当前状态：项目身份已绑定，内容系统骨架已纳入，技术路线已决，最小技术基座已完成，第一个正式 Case Study 内容骨架已完成。

## 推进规则

- 不一次性生成完整网站。
- 每轮只完成一个可验证的小增量。
- 技术路线已决后，先进入 foundation，不跳过基座直接做完整页面或案例内容。
- 真实应用代码和 runtime content 只能放在 `apps/ai-native-product-builder-portfolio/` 下。

## 阶段总览

| 阶段 | 目标 | 主要产出 | 依赖条件 | 不做什么 |
| --- | --- | --- | --- | --- |
| Phase 0：项目绑定与内容系统骨架 | 将通用启动包绑定为 AI Native Product Builder Portfolio，并建立内容系统规范 | PRD、内容战略、Case Study Schema、Content Model、Project Index、文档边界 | 用户确认项目方向 | 不初始化应用，不写页面代码 |
| Phase 1：技术路线决策 | 确定作品集网站技术形态、内容格式、部署方式和验证命令 | `docs/tech-radar.md`、`docs/tech-stack-decision.md` | Phase 0 完成 | 不直接创建应用 |
| Phase 2：最小技术基座 Foundation | 在 `apps/ai-native-product-builder-portfolio/` 下搭建最小可运行框架 | 应用初始化、基础路由、空结构、内容读取最小闭环 | 技术栈已决 | 不做完整视觉系统，不填完整案例 |
| Phase 3：内容系统落地 | 将 Case Study Schema 落为可维护内容结构 | Project Schema、Case Study Template、1 个示例项目内容闭环 | Foundation 可运行 | 不一次性填完所有项目 |
| Phase 4：视觉与组件系统 | 建立内容优先、克制、系统化的 Portfolio UI | Typography、Layout、Project Card、Workflow Diagram、Architecture Block、Decision Matrix、Timeline | 内容结构稳定 | 不做复杂动画、3D、AI 科幻视觉 |
| Phase 5：项目内容填充 | 逐个补齐重点项目案例 | 3 个 Featured Case Studies，补充项目逐步完善 | Schema 和组件可用 | 不合并多个案例一次性完成 |
| Phase 6：上线优化 | 让作品集可访问、可分享、可被招聘方快速理解 | SEO、Responsive、Performance、Contact / Resume、Deployment | 核心内容可读 | 不扩展 CMS、登录、社区 |

## 当前 Phase 0 / Phase 1 / Phase 2 验收

- `docs/prd.md` 已包含真实项目身份。
- `docs/portfolio-content-strategy.md` 已定义能力证明链。
- `docs/case-study-template-schema.md` 已定义 Canonical Case Study Schema。
- `docs/content-model.md` 已定义未来内容实体和边界。
- `docs/project-portfolio-index.md` 已定义项目池和 Featured 优先级。
- `docs/tech-stack-decision.md` 已确认 primary route 为 Astro-powered Editorial Product Experience System。
- `docs/tech-radar.md` 已记录候选路线比较和最终路线。
- `apps/ai-native-product-builder-portfolio/` 已完成最小 Astro + TypeScript 基座。
- `pnpm run check`、`pnpm run build`、`pnpm run lint` 已通过。

## 已完成：Phase 2 最小技术基座 Foundation

已完成：

- 在 `apps/ai-native-product-builder-portfolio/` 下初始化 Astro + TypeScript 应用。
- 接入 Tailwind CSS + CSS variables 基础样式系统。
- 建立 Astro Content Collections + MDX + Zod schema。
- 建立 Home、Projects、Case Study Detail 的路由空结构。
- 建立 ProjectCard、CaseStudyLayout、WorkflowDiagram、DecisionMatrix、CapabilityMap 的最小组件骨架。
- 补齐 dev / build / check / lint / content validation 命令。

不做：

- 不做完整视觉系统。
- 不填完整案例正文。
- 不引入 CMS、登录、数据库或 AI runtime。
- 不做重动画、3D、粒子背景或动画 showcase。

## 下一阶段：Phase 3 内容系统落地

目标：

- `CS-001` 已完成：Ecommerce Review Copilot 的正式 Case Study 内容骨架已进入内容集合。
- 下一步执行 `prddev-increment` 的 `CS-002`。
- 扩展 Case Study Detail 的正式案例展示骨架，让已录入字段更完整可见。

不做：

- 不一次性填完所有项目。
- 不编造指标、截图、链接或真实用户反馈。
- 不新增 CMS、登录、数据库、AI runtime 或复杂 Demo。

## 项目内容填充建议顺序

1. Ecommerce Review Copilot
2. TalentSignal AI
3. AI PM Judgment Coach
4. JD Research Analyzer
5. Unity Optoelectronic Learning System

每次只填充或完善一个项目的一个可验收切片。
