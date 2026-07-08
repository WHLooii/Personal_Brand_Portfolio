# 决策日志

用途：记录产品方向或技术方向的重要变化。普通执行记录放在 `docs/iteration-log.md`。

## 决策记录

| ID | 日期 | 类型 | 决策 | 背景 | 影响文件 | 状态 |
| --- | --- | --- | --- | --- | --- | --- |
| D-001 | 2026-07-07 | 产品 / 范围 | 将本项目确认为 AI Native Product Builder Portfolio，以 AI 产品案例库而非普通个人主页为核心 | 用户明确目标受众、定位、设计原则、禁止项和阶段策略 | `AGENTS.md`、`CLAUDE.md`、`docs/prd.md`、`docs/iteration-log.md` | 已确认 |
| D-002 | 2026-07-07 | 产品 / 内容边界 | 将 Portfolio 内容系统骨架纳入项目正式边界，所有项目页面和案例内容必须遵守统一内容模型与 Case Study Schema | 用户确认吸收优化版项目中可复用的内容战略、Schema、Content Model 和项目索引，但不进入 coding 或技术路线决策 | `AGENTS.md`、`CLAUDE.md`、`docs/portfolio-content-strategy.md`、`docs/case-study-template-schema.md`、`docs/content-model.md`、`docs/project-portfolio-index.md`、`docs/architecture.md`、`docs/testing.md` | 已确认 |
| D-003 | 2026-07-07 | 技术路线 / 视觉表达 | 采用 Astro-powered Editorial Product Experience System 作为 primary technical route，并明确视觉表现力是产品判断、信息组织和 AI Workflow 表达能力的一部分 | 用户确认 Astro 主站、结构化内容、克制视觉系统、轻量交互和案例叙事系统的方向；本轮不新增 `docs/visual-system.md` | `docs/tech-radar.md`、`docs/tech-stack-decision.md`、`docs/architecture.md`、`docs/content-model.md`、`docs/roadmap.md`、`docs/backlog.md`、`docs/testing.md`、`docs/iteration-log.md` | 已确认 |
| D-004 | 2026-07-07 | 产品 / 视觉边界 | 将 `docs/visual-system.md` 纳入正式文档体系，作为页面、组件和视觉增量的执行护栏 | 用户确认将附件中文化、项目化后添加，并要求不初始化应用、不创建组件、不创建 runtime content | `docs/visual-system.md`、`AGENTS.md`、`CLAUDE.md`、`docs/content-model.md`、`docs/testing.md`、`docs/backlog.md`、`docs/iteration-log.md` | 已确认 |
| D-005 | 2026-07-07 | 产品 / 表达规则 | 前端可见文案以中文为主，只保留必要英文术语 | 用户明确要求前端主要用中文表达，只有必要英文才使用英文 | `docs/visual-system.md`、`docs/content-model.md`、`docs/backlog.md`、`docs/testing.md`、`docs/iteration-log.md` | 已确认 |
| D-006 | 2026-07-08 | 产品 / 视觉表达 | 首页 Hero 允许采用暗色高级玻璃质感作为局部封面方向，但不扩展为全站暗色科幻风格 | 用户明确要求首页封面更神秘、高级、未来感，并重点优化右侧能力模型；项目仍需保持克制、专业、简洁和产品可信度 | `apps/ai-native-product-builder-portfolio/src/pages/index.astro`、`apps/ai-native-product-builder-portfolio/src/components/HeroAbilitySystem.astro`、`docs/backlog.md`、`docs/testing.md`、`docs/iteration-log.md` | 已确认 |
| D-007 | 2026-07-08 | 产品 / 首页内容策略 | 首页当前公开阶段将“精选案例”收敛为单个 AIPM 方法样本，不做多项目卡片堆叠 | 用户明确当前定位是 AI Product Manager / AI 产品原型构建者，现阶段先展示核心能力、判断方式和方法论，而不是大量完整项目案例或空项目占位卡 | `apps/ai-native-product-builder-portfolio/src/pages/index.astro`、`docs/prd.md`、`docs/portfolio-content-strategy.md`、`docs/project-portfolio-index.md`、`docs/content-model.md`、`docs/backlog.md`、`docs/testing.md`、`docs/iteration-log.md` | 已确认 |
| D-008 | 2026-07-08 | 产品 / 首页信息架构 | 首页叙事从项目展示型作品集升级为能力驱动个人品牌，优先展示个人定位、AIPM 能力系统和 AI 产品方法论，再展示方法样本 | 用户明确第二阶段目标是 Capability-driven Personal Brand，首页 5-10 秒内应理解巫浩林能发现 AI 产品机会并转化为可验证 AI 产品，而不是先关注项目数量 | `apps/ai-native-product-builder-portfolio/src/pages/index.astro`、`apps/ai-native-product-builder-portfolio/src/components/HeroAbilitySystem.astro`、`apps/ai-native-product-builder-portfolio/src/components/AIPMCapabilitySystem.astro`、`apps/ai-native-product-builder-portfolio/src/components/ProductOperatingProcess.astro`、`apps/ai-native-product-builder-portfolio/src/layouts/BaseLayout.astro`、`docs/prd.md`、`docs/backlog.md`、`docs/testing.md`、`docs/iteration-log.md` | 已确认 |

## 决策详情

### D-001 确认 AI Native Product Builder Portfolio 产品方向

- 日期：2026-07-07
- 类型：产品 / 范围
- 背景：用户明确当前项目是个人作品集网站，但目标不是普通个人主页或前端技术展示，而是面向 AI PM / AI 产品岗位招聘方、潜在合作伙伴和客户，展示 AI 产品判断、AI Workflow 设计和原型落地能力。
- 决策：项目方向确认为 AI Native Product Builder Portfolio。最终网站应像一个 AI 产品案例库，参考 Linear / Vercel / Notion 的克制、清晰、系统化、文档化气质。
- 备选方案：普通个人主页、技能展示型 Portfolio、视觉炫技型作品集、SaaS 模板式落地页。
- 不选原因：这些方案容易强调工具、页面和视觉包装，无法充分证明“判断什么问题值得 AI 化、如何设计 AI 进入业务流程、如何构建可控 AI Workflow、如何通过原型验证产品假设”。
- 影响：后续 PRD、技术路线、信息架构、视觉系统和案例内容都必须围绕 Product Judgment、AI Workflow Design、Prototype Execution、Evaluation 展开。
- 复核条件：如果目标受众、求职方向、商业合作方向或作品集用途发生明显变化，需要复核该定位。

### D-002 纳入 Portfolio 内容系统骨架

- 日期：2026-07-07
- 类型：产品 / 内容边界
- 背景：用户提供了优化版项目补丁包，并确认先执行 PB-001 小增量，只吸收可复用的内容系统骨架，不改应用代码、不初始化框架、不进入技术路线决策。
- 决策：将内容战略、Case Study Template Schema、Content Model 和 Project Portfolio Index 纳入当前项目正式边界。后续所有页面、组件、项目数据和案例内容都必须以这些文档为依据。
- 影响：
  - `docs/portfolio-content-strategy.md` 成为品牌叙事和项目组合策略依据。
  - `docs/case-study-template-schema.md` 成为项目案例字段与页面结构依据。
  - `docs/content-model.md` 成为未来前端内容实体与 docs/apps 边界依据。
  - `docs/project-portfolio-index.md` 成为 Featured 项目、补充项目和能力映射依据。
  - `Product Judgment`、`AI Workflow / Agent Design`、`Evaluation` 成为 Case Study 必备模块。
- 非目标：不创建真实应用；不创建 runtime content；不初始化 Next.js / Astro；不直接决定技术路线；不一次性填充所有案例正文。
- 复核条件：如果未来作品集从内容驱动案例系统转为博客、CMS、普通简历页、SaaS 或在线工具平台，需要复核本决策。

### D-003 确认 Astro-powered Editorial Product Experience System

- 日期：2026-07-07
- 类型：技术路线 / 视觉表达
- 背景：用户确认 primary route 定为 Astro-powered Editorial Product Experience System，并要求将“视觉表现力不是装饰，而是产品判断、信息组织和 AI Workflow 表达能力的一部分”写入技术路线。用户同时明确本轮先不新增 `docs/visual-system.md`。
- 决策：V1 采用内容驱动的编辑型产品体验系统：Astro + TypeScript + Astro Content Collections + MDX + Zod schema + Tailwind CSS + CSS variables + SVG-first visual components + CSS micro-interactions + Astro View Transitions + limited React Islands。
- 选择原因：
  - 本项目核心是 AI 产品案例库，不是完整 SaaS、博客、CMS 或视觉炫技作品集。
  - Astro 更适合静态内容、SEO、性能和文档化案例阅读。
  - MDX 与结构化 schema 可以同时承载 Case Study 字段和局部叙事表达。
  - SVG-first Workflow Diagram、Decision Matrix、Architecture Block 和 Capability Map 能把产品判断视觉化。
  - React Islands 只用于筛选、阅读进度、工作流展开等少量交互，避免全站复杂化。
- 备选方案：Next.js + MDX、Vite + React + Static Data、No-code / Webflow / Framer、Full SaaS / CMS / Login、重动画 / 3D showcase。
- 不选原因：这些方案要么对 V1 过重，要么不利于内容 Schema 和工程协作展示，要么会削弱“AI Native Product Builder Portfolio”的专业判断感。
- 影响：
  - `docs/tech-stack-decision.md` 从未决更新为已决。
  - 下一阶段可以进入 `prddev-foundation`，但仍不得跳过 foundation 直接开发完整页面或创建大量 runtime content。
  - Foundation 应先创建最小 Astro 基座、内容集合、基础样式系统和验证命令。
  - 独立视觉系统文档暂不新增；视觉原则先收敛在技术路线和技术栈决策中。
- 复核条件：如果未来作品集目标从内容案例库转向复杂在线产品、多人 CMS、重交互 demo 平台或创意动画作品，需要复核本决策。

### D-004 纳入 Portfolio 视觉系统护栏

- 日期：2026-07-07
- 类型：产品 / 视觉边界
- 背景：用户提供 `visual-system.md` 附件，并确认在调整后添加到项目中。要求翻译为中文，保留必要英文术语，做项目化改写，不初始化应用，不创建组件，不创建 runtime content，并轻量更新 `AGENTS.md` / `CLAUDE.md` 的读取规则。
- 决策：新增 `docs/visual-system.md`，作为后续页面、组件、视觉系统和 Case Study 视觉呈现的执行护栏。
- 调整原则：
  - 路径统一为 `apps/ai-native-product-builder-portfolio/`。
  - 保留 AI Native Product Builder、Product Judgment、AI Workflow、Human-in-the-loop、Astro、MDX、Tailwind CSS、React Islands、组件名和 schema 字段名。
  - 移除或改写与项目约束冲突的部分，例如负 letter-spacing、过大圆角、装饰性背景、装饰性 split hero。
  - Visual Backlog 仅作为想法池，不自动改变当前下一步。
- 影响：
  - 后续开发页面、组件、视觉系统、项目数据或 Case Study 前，必须读取 `docs/visual-system.md`。
  - 视觉验收应同时检查内容证明、结构化表达、动效边界、可访问性和性能。
  - 决策当时的下一步仍是 `prddev-foundation`，不因视觉系统文档加入而直接进入完整页面开发；该 foundation 已在 `FN-001` 完成。
- 复核条件：如果作品集视觉方向从克制的 AI 产品案例库转为创意互动站、普通简历站、博客或 SaaS 产品站，需要复核本决策。

### D-005 前端中文优先表达规则

- 日期：2026-07-07
- 类型：产品 / 表达规则
- 背景：用户明确要求前端主要使用中文表达，只有必要英文才使用英文。
- 决策：所有前端可见文案默认中文优先；必要英文仅保留在品牌名、AI Native / AI Workflow / Agent / Human-in-the-loop / AI Boundary / Why AI、技术名词、schema 字段名和必要路由 slug 中。
- 影响：
  - 导航、按钮、卡片标签、状态标签、区块标题、占位说明、表格表头和空状态文案应使用中文。
  - schema 枚举可以继续保留英文内部值，但前端需要通过映射显示中文。
  - 字段暂缺时，前端优先显示“待补充”，避免把 `TBD` 直接暴露给访问者。
- 复核条件：如果未来目标受众改为英文招聘方、海外客户或双语展示场景，需要复核本规则。

### D-006 首页 Hero 暗色高级玻璃封面方向

- 日期：2026-07-08
- 类型：产品 / 视觉表达
- 背景：用户明确要求首页封面主题为“把业务问题拆成可验证的 AI 产品原型”，整体更有神秘感、高级感和未来感，并将右侧能力模型从普通列表升级为玻璃拟态能力系统面板。
- 决策：首页 Hero 作为第一屏品牌封面，可以采用暗色高级玻璃质感、克制蓝紫微光、细颗粒、远处网格和能力星图。但该决策仅作为首页首屏的局部视觉方向，不代表全站改为暗色科幻风、游戏化视觉或重动画展示站。
- 影响：
  - Home Hero 可以使用暗色全幅背景和暗色页眉变体。
  - 右侧能力模型优先表达为 `AI Product Prototype System` 能力系统，而不是线性任务列表。
  - 后续 Case Study、Projects 和正文阅读区仍应优先保持内容清晰、可读、克制，避免大面积炫光或过度科幻。
- 非目标：不引入 3D、粒子场、复杂视差、全站暗色模式、重动画库或新的视觉依赖。
- 复核条件：如果未来全站视觉系统要从 light-first editorial interface 改为 dark-first product interface，需要复核 `docs/visual-system.md` 和整体可读性验收。

### D-007 首页“精选案例”收敛为 AIPM 方法样本

- 日期：2026-07-08
- 类型：产品 / 首页内容策略
- 背景：用户明确当前网站不是要先展示大量完整项目案例，而是证明 AI Product Manager / AI 产品原型构建者的核心能力、产品判断方式和方法论。
- 决策：首页原“精选案例”模块重构为“能力样本 / 方法样本：我如何拆解一个 AI 产品机会”。当前只公开 Ecommerce Review Copilot 这一个完整判断链路样本，并将其包装为“样本 01：从非结构化评论到运营决策 Copilot”。
- 选择原因：
  - 单个完整方法样本比多个弱证据项目卡更能证明 AIPM 能力。
  - 当前核心价值是展示业务问题拆解、AI 适用边界、Human-in-the-loop、AI Workflow、可交互 MVP 和评估闭环。
  - 完整项目案例应在截图、指标和复盘补齐后再逐步上线。
- 非目标：不新增多个空项目占位卡；不把首页做成传统项目列表；不编造截图、真实指标、用户反馈或上线证据；不改变 Projects Index 和 Case Study Detail 的统一内容源原则。
- 影响：后续首页内容增量应优先深化当前方法样本和详情页拆解过程；TalentSignal AI 等候选案例仍可保留在项目池，但进入首页前必须补齐准入字段。
- 复核条件：当至少 2-3 个案例都已补齐截图、指标、复盘和完整 Case Study 后，可复核是否恢复多 Featured 案例展示。

### D-008 首页能力驱动个人品牌信息架构

- 日期：2026-07-08
- 类型：产品 / 首页信息架构
- 背景：用户明确第二阶段目标是将首页从 Project-driven Portfolio 升级为 Capability-driven Personal Brand。首页第一视觉权重应依次强调个人定位、能力系统、产品方法论，再进入项目/方法样本。
- 决策：首页信息流调整为 Hero -> AIPM Capability System -> How I Build AI Products -> 方法样本 / 能力样本 -> 其他内容。Hero 必须在 5-10 秒内说明巫浩林是 AI Product Manager / AI Product Builder，核心价值是把业务问题转化为可验证的 AI 产品。
- 选择原因：
  - 个人品牌首页需要先证明“如何发现 AI 产品机会并转化为可验证产品”，而不是先证明“完成过多少项目”。
  - AIPM 能力系统能比项目卡更快传达 Problem Framing、AI Judgment、Workflow Design、Prototype Building、Evaluation 和 Reflection。
  - `UX-008` 的方法样本仍然重要，但应作为能力系统和方法论之后的证据，而不是首页第一关注。
- 非目标：不撤销 `UX-008` 已确认的“方法样本 / 能力样本”定位；不新增项目；不把首页变成技能 Badge 墙；不引入 3D、粒子、重动画或 AI runtime。
- 影响：
  - 首页导航顺序同步改为能力系统、构建流程、方法样本、案例库。
  - 后续首页增量应优先维护能力驱动叙事，不应重新回到多项目墙。
  - 详情页下一步仍建议执行 `CS-004`，让方法样本详情承接首页“查看拆解过程”入口。
- 复核条件：如果未来目标从 AI PM / AI Product Builder 个人品牌转向项目型作品集、英文求职站或完整商业服务站，需要复核首页信息架构。

## 待复核决策

| 决策 ID | 复核条件 | 负责人 | 状态 |
| --- | --- | --- | --- |
