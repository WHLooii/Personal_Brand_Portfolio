# 测试与验证

用途：记录当前项目的验证策略、可执行命令和测试缺口，供 foundation、increment、checkpoint 使用。

## 当前状态

- Project：AI Native Product Builder Portfolio
- Status：Foundation complete；first formal Case Study content and detail display skeleton available；homepage dark glass hero with refined personal signature, restored header product identity, and AIPM method sample module available
- 当前可以执行文档级验证、Astro 内容 schema 校验、TypeScript / Astro check 和静态构建验证。
- 当前目录未检测到 `.git`；checkpoint 时无法执行 `git status`，版本状态暂以文件扫描和文档检索确认。

## 当前验证方式

本阶段验证以下内容：

```text
1. docs/prd.md 是否已经包含真实 Portfolio PRD。
2. docs/portfolio-content-strategy.md 是否存在并定义能力证明链。
3. docs/case-study-template-schema.md 是否存在并定义 Canonical Case Study Schema。
4. docs/content-model.md 是否定义内容实体、docs/apps 边界和内容使用规则。
5. docs/project-portfolio-index.md 是否定义 Featured 项目和项目池。
6. docs/visual-system.md 是否定义视觉方向、组件表达、动效边界和 Visual QA Checklist。
7. docs/tech-stack-decision.md 是否明确 primary route 为 Astro-powered Editorial Product Experience System。
8. AGENTS.md 与 CLAUDE.md 是否同步。
9. apps/ai-native-product-builder-portfolio/ 是否存在最小 Astro 基座。
10. Astro Content Collections / Zod schema 是否能校验 placeholder 内容。
11. Home / Projects / Case Study Detail 是否能静态构建。
```

## Foundation 已补充

当前可执行命令：

```text
install command: pnpm install
dev command: pnpm run dev
build command: pnpm run build
check command: pnpm run check
lint command: pnpm run lint
test command: not configured in foundation
content validation command: covered by Astro Content Collections / Zod schema via pnpm run check and pnpm run build
manual acceptance checklist: Home / Projects / Case Study shell, responsive layout, content schema errors, no forbidden visual style
```

本地当前环境说明：

```text
node command: /Users/juzihaidou/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node
pnpm command: /Users/juzihaidou/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/pnpm
```

如果系统 PATH 没有 Node / pnpm，需要先安装 Node.js，或显式使用 Codex bundled Node / pnpm。

## 视觉验收清单

进入页面、组件或视觉增量时，必须额外检查：

- 是否立即传达 AI Native Product Builder 定位。
- 是否让 Product Judgment 和 AI Workflow 更容易理解。
- 是否遵守 `docs/visual-system.md` 的色彩、Typography、Layout、Component、Motion 和 Anti-patterns。
- 是否避免技能 Badge 墙、项目截图墙、AI 科幻视觉、复杂 3D、粒子背景和动画 showcase。
- 是否尊重 `prefers-reduced-motion`。
- 是否保持响应式可读性和键盘可访问性。

## 内容验收清单

每个 Case Study 至少检查：

- 是否有明确用户和问题。
- 是否解释 Why AI。
- 是否定义 AI Boundary。
- 是否包含 Human-in-the-loop。
- 是否有 AI Workflow / Agent Design。
- 是否解释技术取舍。
- 是否包含 Product Metrics 和 AI Metrics。
- 是否保留 Outcome 和 Reflection。
- 是否避免技能 Badge 墙。
- 是否没有编造 demo、截图、指标或真实用户反馈。

## 首页验收清单

首页必须让访问者在 5-10 秒内理解：

```text
Who: AI Native Product Builder
What: AI Copilot / Agent Workflow / AI Product Prototype
How: Problem -> AI Judgment -> Workflow -> Prototype -> Evaluation
```

## 命令清单

| 命令 | 用途 | 何时运行 | 当前状态 |
| --- | --- | --- | --- |
| `pnpm install` | 安装依赖 | clone 或清理 node_modules 后 | 已创建 |
| `pnpm run dev` | 本地开发预览 | foundation 后 | 已创建 |
| `pnpm run build` | 生产构建 | foundation 后每次重要改动 | 已创建并通过 |
| `pnpm run check` | Astro / TypeScript / 内容 schema 校验 | foundation 后每次重要改动 | 已创建并通过 |
| `pnpm run lint` | 基础检查；当前等同 `astro check` | foundation 后每次重要改动 | 已创建并通过 |
| Playwright screenshots / manual responsive QA | 响应式和视觉验收 | 页面或视觉组件阶段 | 待评估 |

## 最近验证记录

| 日期 | 变更 | 执行命令或方式 | 结果 |
| --- | --- | --- | --- |
| 2026-07-08 | UX-008 首页精选案例重构为能力样本 | 普通 PATH 执行 `pnpm run check`；使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint`；检索 `dist/index.html` 中的“能力样本”、“方法样本：我如何拆解一个 AI 产品机会”、“样本 01：从非结构化评论到运营决策 Copilot”和“查看拆解过程”；负向检索“精选案例”、“暂无案例”、“coming soon”、“mock”和“没有真实用户”；授权启动 `astro preview` 并检查首页 HTTP 状态 | 通过，带已知环境限制；普通 PATH 因 `node: not found` 失败，符合当前本地环境限制；bundled Node 环境下 `astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 3 个静态页面：`/`、`/projects/`、`/projects/ecommerce-review-copilot/`；关键方法样本文案可检索；负向文案未检索到；`http://127.0.0.1:4324/` 返回 200 OK |
| 2026-07-08 | UX-007 首页 Hero 个人品牌识别与能力系统精修 | 使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint`；检索源码和 `dist/index.html` 中的个人品牌签名、副标签、能力节点编号、系统日志标签和旧重复短语 | 通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 3 个静态页面：`/`、`/projects/`、`/projects/ecommerce-review-copilot/`；构建产物可检索到“巫浩林”、`AI 产品原型构建者 / Personal Portfolio`、`LOG 01`、`system-node__code` 和 `AI Product Prototype System`；源码与构建产物不再检索到 `巫浩林 · AI Native Product Builder Portfolio` |
| 2026-07-08 | UX-006 首页暗色玻璃质感 Hero 改版 | 使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint`；检索 `dist/index.html` 和 `dist/_astro/*.css` 中的新 Hero 标题、CTA、暗色页眉、能力系统面板、六个能力节点与六个编号标签；尝试本地浏览器预览和截图级 QA | 通过，带已知限制；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 3 个静态页面：`/`、`/projects/`、`/projects/ecommerce-review-copilot/`；构建产物可检索到 `把业务问题拆成`、`查看作品集`、`了解能力模型`、`AI Product Prototype System`、`业务拆解` 和 `06 Portfolio Delivery`；本地端口访问因沙箱端口权限受限，Browser `data:` 预览因安全策略受限，未完成截图级视觉 QA |
| 2026-07-08 | UX-005 恢复页眉产品身份文本 | 使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint`；检索 `dist/index.html` 中页眉身份和 Hero 姓名；检查本地预览首页 HTTP 状态 | 通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 3 个静态页面：`/`、`/projects/`、`/projects/ecommerce-review-copilot/`；首页构建产物页眉可检索到 `AI Native Product Builder`，Hero 可检索到“巫浩林”，未恢复 `identity-mark` / `identity-role`；`http://127.0.0.1:4323/` 返回 200 OK |
| 2026-07-08 | UX-004 首页姓名标识回收为文字署名 | 使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint`；检索源码与 `dist/index.html` 中的姓名和旧 identity 关键词；授权启动 `astro preview` 并检查首页 HTTP 状态 | 通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 3 个静态页面：`/`、`/projects/`、`/projects/ecommerce-review-copilot/`；首页构建产物可检索到“巫浩林”，源码不再包含 `identity-mark` / `identity-role` 或可见的 `AI Native Product Builder`；`http://127.0.0.1:4323/` 返回 200 OK |
| 2026-07-07 | UX-003 首页姓名身份标识视觉优化 | 使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` | 通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 3 个静态页面：`/`、`/projects/`、`/projects/ecommerce-review-copilot/` |
| 2026-07-07 | UX-002 首页封面能力证明链条 | `pnpm run check` 普通 PATH 先因 `node: not found` 失败；随后使用 Codex bundled Node / pnpm 执行 `pnpm run check`、`pnpm run build`、`pnpm run lint` | 通过；bundled Node 环境下 `astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 3 个静态页面：`/`、`/projects/`、`/projects/ecommerce-review-copilot/`；普通 PATH 缺少 `node` 是已知本地环境限制，不代表项目验证失败 |
| 2026-07-07 | CS-002 扩展 Case Study Detail 正式案例展示骨架 | `pnpm run check`；`pnpm run build`；`pnpm run lint`；构建产物关键区块检索；构建产物 `TBD` 检索 | 通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 3 个静态页面：`/`、`/projects/`、`/projects/ecommerce-review-copilot/`；构建产物可检索到 `Product Solution`、`Evaluation Metrics`、`Outcome / Demo Evidence`、`Reflection`、`人的控制点` 和 `实现说明与取舍`；构建产物未检索到直接暴露的 `TBD` |
| 2026-07-07 | CS-001 创建 Ecommerce Review Copilot 正式 Case Study 内容骨架 | `pnpm run check`；`pnpm run build`；`pnpm run lint` | 通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 3 个静态页面：`/`、`/projects/`、`/projects/ecommerce-review-copilot/`；`foundation-placeholder` 已归档且不再生成公开静态路由 |
| 2026-07-07 | UX-001 前端文案中文优先表达 | `pnpm run check`；`pnpm run build`；`pnpm run lint`；`curl -s http://127.0.0.1:4322/` 检查中文导航、CTA、案例卡片与流程标签 | 通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 3 个静态页面：`/`、`/projects/`、`/projects/foundation-placeholder/`；本地 dev server 页面可读到中文优先文案，必要英文仅保留在品牌名和 AI Workflow / Agent / Human-in-the-loop / AI Boundary 等术语中 |
| 2026-07-07 | FN-001 最小 Astro + TypeScript 基座 | `pnpm add astro @astrojs/mdx @tailwindcss/vite tailwindcss`；`pnpm add -D @astrojs/check typescript`；`pnpm rebuild esbuild`；`pnpm run check`；`pnpm run build`；`pnpm run lint`；`pnpm exec astro dev --host 127.0.0.1 --port 4321 --force`；`curl -I http://127.0.0.1:4322/`；`curl -I http://127.0.0.1:4322/projects/foundation-placeholder/` | 通过；`astro check` 结果 0 errors / 0 warnings / 0 hints；`astro build` 生成 3 个静态页面：`/`、`/projects/`、`/projects/foundation-placeholder/`；dev server 因 4321 被占用自动使用 `http://127.0.0.1:4322/`，首页和动态详情页均返回 200 OK；依赖安装曾因沙箱网络和 Astro telemetry 写入用户级目录受阻，已通过授权联网安装和 `ASTRO_TELEMETRY_DISABLED=1` 解决 |
| 2026-07-07 | CP-003 Foundation 前状态同步 | 读取 PRD / architecture / backlog / iteration-log / decision-log / testing / tech-stack-decision；`find apps -maxdepth 4 -type f -print`；`diff -u AGENTS.md CLAUDE.md`；关键字检索当前阶段、技术路线、视觉系统和下一步路由；`git status --short` | 通过，带已知限制；`apps/` 仍只有 `.gitkeep`，AGENTS/CLAUDE 仅镜像声明互指差异，下一步仍为 `prddev-foundation`；当前目录不是 Git 仓库，`git status --short` 不可用 |
| 2026-07-07 | CP-002 同步 PRD 技术路线与视觉系统状态 | 读取 `docs/prd.md`、`docs/tech-stack-decision.md`、`docs/visual-system.md`；`rg` 检查“技术路线未决”“待技术路线确认”、Astro-powered route、`docs/visual-system.md`、Astro Content Collections + MDX + Zod schema 和视觉与体验边界；`find apps -maxdepth 4 -type f -print` | 通过；`docs/prd.md` 已同步当前技术路线和视觉系统状态，未进入应用初始化，`apps/` 仍只有 `.gitkeep` |
| 2026-07-07 | VS-001 新增 Portfolio 视觉系统护栏 | `rg --files docs`；关键术语、路径、`VS-001`、`D-004` 检索；冲突关键词检查 `apps/portfolio`、负 `letter-spacing`、过大圆角 token；`diff -u AGENTS.md CLAUDE.md`；`find apps -maxdepth 4 -type f -print` | 通过；`docs/visual-system.md` 已存在，AGENTS/CLAUDE 仅镜像声明互指差异，`apps/` 仍只有 `.gitkeep`，未初始化应用；`docs/prd.md` 的文档状态仍保留旧的“技术路线未决”表述，建议后续 checkpoint 同步 |
| 2026-07-07 | TR-001 确认 Astro-powered Editorial Product Experience System | 读取并更新 `docs/tech-stack-decision.md`、`docs/tech-radar.md`、`docs/decision-log.md`、`docs/architecture.md`、`docs/content-model.md`、`docs/roadmap.md`、`docs/backlog.md`、`docs/testing.md`、`docs/iteration-log.md`；`rg` 检查 technical route 状态、visual-system 文件引用、foundation 下一步；`find apps -maxdepth 4 -type f -print` | 通过；primary route 已写入，`docs/visual-system.md` 未创建，`apps/` 仍只有 `.gitkeep`，下一步已更新为 `prddev-foundation`；`docs/prd.md` 的文档状态仍保留旧的“技术路线未决”表述，按本轮 tech-route 边界未改，建议后续 checkpoint 同步 |
| 2026-07-07 | CP-001 Portfolio 文档一致性复核 | 读取 PRD / architecture / backlog / iteration-log / decision-log / testing；扫描 AGENTS / CLAUDE / tech-stack-decision / roadmap；`find apps -maxdepth 4 -type f -print`；关键字检索下一步路由与边界 | 通过；文档状态一致，`docs/tech-stack-decision.md` 仍为未决，foundation / coding 被阻止，`apps/` 仍只有 `.gitkeep`，下一步唯一建议已更新为 `prddev-tech-route` |
| 2026-07-07 | PB-001 纳入 Portfolio 内容系统骨架 | `rg --files docs`、关键字检索、`diff -u AGENTS.md CLAUDE.md`、`find apps -maxdepth 3 -type f` | 通过；新增内容系统文档存在，关键边界可检索，AGENTS/CLAUDE 除镜像声明互指外内容一致，`apps/` 仍只有 `.gitkeep` |
