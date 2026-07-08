# 架构说明

用途：记录 `prddev-foundation` 产出的最小技术基座与扩展方式，帮助后续 increment 找到正确添加位置。

## 架构状态

- 项目：AI Native Product Builder Portfolio
- 依赖技术栈决策：`docs/tech-stack-decision.md`
- 当前基座状态：最小 Astro + TypeScript 基座已初始化
- 最后更新：2026-07-07

`docs/tech-stack-decision.md` 已确认 primary route 为 Astro-powered Editorial Product Experience System；当前已在 `apps/ai-native-product-builder-portfolio/` 下完成最小 Astro 基座，用于后续按 backlog 逐步落地内容系统、页面和组件。

## 系统边界

- 当前包含：PRD、内容战略、Case Study Schema、Content Model、Project Portfolio Index、阶段文档、验证计划、最小 Astro 应用源码、基础路由、内容 schema、基础样式 tokens 和验证命令。
- 当前不包含：完整页面开发、真实 Case Study 内容填充、完整视觉系统、复杂交互、CMS、登录、数据库、AI runtime、可运行 demo。
- 未来可能扩展：静态内容站、内容驱动 Case Study 页面、结构化视觉组件、项目内容校验、可运行 demo 嵌入。

## 当前应用结构

当前 foundation 已创建：

```text
apps/ai-native-product-builder-portfolio/
  astro.config.mjs
  package.json
  pnpm-lock.yaml
  tsconfig.json
  src/
    content.config.ts
    pages/
      index.astro
      projects/
        index.astro
        [slug].astro
    layouts/
      BaseLayout.astro
      CaseStudyLayout.astro
    components/
      ProjectCard.astro
      CapabilityMap.astro
      WorkflowDiagram.astro
      ArchitectureBlock.astro
      DecisionMatrix.astro
      Timeline.astro
    content/
      projects/
        foundation-placeholder.mdx
    styles/
      tokens.css
      global.css
    lib/
      content.ts
  tests/
    README.md
```

说明：Astro 7 当前官方内容集合入口为 `src/content.config.ts`，runtime content 仍位于 `src/content/projects/`，符合 `docs/tech-stack-decision.md` 的内容驱动路线。

## 技术栈摘要

| 维度 | 当前选择 | required now / deferred | 说明 |
| --- | --- | --- | --- |
| Frontend Framework | Astro 7 | required now | 内容驱动、静态优先、SEO 友好 |
| Language | TypeScript | required now | 支撑 schema、组件 props 和长期维护 |
| Content Format | Astro Content Collections + MDX + Zod schema | required now | 需承载 Case Study Schema |
| Styling | Tailwind CSS 4 + CSS variables + design tokens | required now | 需符合克制、内容优先、结构化的视觉方向 |
| Visual Components | Astro components + SVG-first diagrams | required now | Workflow、Decision Matrix、Architecture Block 是产品判断证据 |
| Motion | CSS micro-interactions + Astro View Transitions | required now | 动效用于引导注意力，不做动画 showcase |
| React Islands | limited use | deferred | 仅在 ProjectFilter、WorkflowStepper、ReadingProgress 等局部交互使用 |
| Backend | none | deferred | V1 默认不需要后端 |
| Database | none | deferred | V1 不做 CMS / 登录 |
| AI Runtime | none_for_portfolio_v1 | deferred | 站点本体不默认接入 AI |

## 模块职责

| 模块 | 职责 | 后续扩展位置 |
| --- | --- | --- |
| Content Source | 维护 projects runtime content；foundation 仅放 placeholder 内容验证 schema | `apps/ai-native-product-builder-portfolio/src/content/projects/` |
| Content Schema | 定义 Case Study collection schema、Zod 校验和 glob loader | `apps/ai-native-product-builder-portfolio/src/content.config.ts` |
| Content Loader | 读取、排序和筛选项目内容 | `apps/ai-native-product-builder-portfolio/src/lib/content.ts` |
| Routing | 提供 Home、Projects Index、Case Study Detail 的最小路由闭环 | `apps/ai-native-product-builder-portfolio/src/pages/` |
| BaseLayout | 提供全站 HTML shell、基础导航和全局样式入口 | `apps/ai-native-product-builder-portfolio/src/layouts/BaseLayout.astro` |
| CaseStudyLayout | 按统一 schema 渲染案例详情骨架 | `apps/ai-native-product-builder-portfolio/src/layouts/CaseStudyLayout.astro` |
| ProjectCard | 首页和 Projects 列表复用的项目摘要卡片 | `apps/ai-native-product-builder-portfolio/src/components/ProjectCard.astro` |
| WorkflowDiagram | 展示 AI Workflow / Agent Design 的最小结构 | `apps/ai-native-product-builder-portfolio/src/components/WorkflowDiagram.astro` |
| DecisionMatrix | 展示 AI Boundary、Human-in-the-loop、产品取舍 | `apps/ai-native-product-builder-portfolio/src/components/DecisionMatrix.astro` |
| CapabilityMap | 展示项目与能力维度的映射关系 | `apps/ai-native-product-builder-portfolio/src/components/CapabilityMap.astro` |
| Visual System Foundation | 维护 CSS variables、layout tokens、typography 基础规则 | `apps/ai-native-product-builder-portfolio/src/styles/` |
| Validation | Astro build、Astro check、内容 schema 校验 | `package.json` scripts |

## 数据流

- 输入：`src/content/projects/*.mdx` 中的结构化 Case Study 内容。
- 处理：Astro Content Collections + Zod schema validation；`src/lib/content.ts` 负责排序、featured 过滤和 slug 派生。
- 输出：Home、Projects、Case Study Detail 静态页面。
- 存储：V1 优先使用仓库内静态内容文件；数据库延后。

## 可执行命令

```text
install command: pnpm install
dev command: pnpm run dev
build command: pnpm run build
check command: pnpm run check
lint command: pnpm run lint
test command: not configured in foundation
```

本地当前环境需使用 Codex bundled Node / pnpm 或自行安装 Node.js。`package.json` 脚本已设置 `ASTRO_TELEMETRY_DISABLED=1`，避免 Astro telemetry 写入用户级偏好目录导致沙箱验证失败。

## Architecture Rules

1. 真实应用代码只能在 `apps/ai-native-product-builder-portfolio/` 内。
2. `docs/` 不放 runtime code、可运行 demo、测试代码或构建配置。
3. Case Study 页面必须从统一内容结构生成。
4. 首页 Featured Projects 和 Projects Index 必须从同一项目数据源读取。
5. `Product Judgment`、`AI Workflow / Agent Design`、`Evaluation` 是核心模块，不得在页面层省略。
6. V1 不做 CMS、用户系统、登录、社区、在线编辑器。
7. `foundation-placeholder.mdx` 只用于验证 schema、路由和布局，不代表正式项目内容；后续应逐个替换或新增真实 Case Study。
8. 单个项目 demo 如需运行时能力，必须作为独立增量评估边界。
9. 视觉表现力必须服务产品判断、信息组织和 AI Workflow 表达，不做重动画、3D、粒子背景或滚动劫持。

## 暂不实现

| 能力 | 延后原因 | 触发条件 |
| --- | --- | --- |
| CMS / 在线编辑器 | 超出 V1，增加后端和权限复杂度 | 内容更新频率高且手工维护成为瓶颈 |
| 登录 / 用户系统 | 与作品集目标无关 | 未来转为多人协作产品 |
| 数据库 | V1 静态内容足够 | 出现动态内容、评论、收藏或后台管理需求 |
| AI Runtime | 站点本体是案例证明系统，不是 AI 产品运行平台 | 某个 demo 明确需要并拆成独立增量 |
