# Backlog

用途：定义每次 `prddev-increment` 的小步开发路径。每轮只执行一个 backlog item。

## 状态说明

- `todo`：未开始
- `in_progress`：进行中
- `done`：已完成并验证
- `blocked`：受阻，需要外部输入或前置条件
- `deferred`：已确认延后

## 拆分原则

- 一个 item 只对应一个最小功能增量。
- 每个 item 必须可验收、可独立推进。
- 不把多个大模块合并成一个 item。
- 不把“实现整个 PRD”作为 item。
- UI polish、认证、支付、后台、AI workflow、RAG 管道等大模块必须单独评估，不能顺手加入。

## Backlog 队列

| ID | 状态 | 标题 | 目标 | 范围 | 不做什么 | 验收标准 | 依赖 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F-001 | done | 强化 AGENTS/CLAUDE 项目启动路由说明 | 让 Codex 和 Claude Code 在新会话中快速理解本项目定位、阶段边界、路由规则与旧启动包能力映射 | 仅更新 `AGENTS.md`、`CLAUDE.md` 的入口协议，并同步本 backlog 与 iteration-log | 不新增 `brief.md`、`context.md`、`decisions.md`；不改 PRD、架构或 skill 实现 | 新入口文件包含项目定位、新会话启动协议、旧包能力映射、阶段读取规则、默认路由与关键防线，且两份文件保持镜像 | 用户确认执行 |
| F-002 | done | 通用化 AGENTS/CLAUDE 项目定位说明 | 删除入口协议中的旧启动包描述，并为新项目适配保留快速介绍占位 | 仅更新 `AGENTS.md`、`CLAUDE.md` 的项目定位、新会话启动协议和关键防线，并同步本 backlog 与 iteration-log | 不改 PRD、架构、技术路线或 skill 实现 | 两份入口协议不再包含旧启动包能力说明；项目定位下有“本项目的快速介绍了解”占位；两份文件保持镜像 | 用户确认执行 |
| F-005 | done | 明确 apps 开发目录与 docs 文档目录边界 | 防止真实项目开发文件散落在根目录或 docs 中，明确 docs 只承载推进文档和待确认内容 | 更新 `AGENTS.md`、`CLAUDE.md` 的文件边界规则，创建 `apps/` 目录，并同步 backlog 与 iteration-log | 不初始化应用代码；不重构 docs 体系；不进入实际产品开发 | 入口协议明确任何实际项目开发只能在 `apps/` 下；`docs/` 只放推进文档、方案、待确认内容和过程记录；仓库存在 `apps/` 目录 | 用户确认执行 |
| F-006 | done | 补首次开机引导卡 | 让新项目第一次复制启动包后，人和 AI 能先补齐项目身份，再进入后续阶段 | 新增 `docs/first-run.md`，并在 `AGENTS.md`、`CLAUDE.md` 启动协议和关键防线中指向它，同步 backlog 与 iteration-log | 不把 first-run 变成第二份 PRD；不进入技术路线、backlog、foundation 或 coding；不初始化应用代码 | 空白项目触发条件、5 个首次补齐问题、最小落地结果和防线清晰；入口协议能引导 agent 先读 `docs/first-run.md` | 用户确认执行 |
| F-007 | done | 补 Agent 行为判断表 | 让 agent 在路由前先判断本轮该停、问、推进、记录，还是写代码 | 新增 `docs/agent-behavior.md`，并在 `AGENTS.md`、`CLAUDE.md` 启动协议和关键防线中引用它，同步 backlog 与 iteration-log | 不改 PRD 内容；不进入 foundation/coding；不初始化应用代码；不重构 docs 体系 | 判断表包含五类行为的触发条件、该做什么、禁止做什么、记录落点；入口协议能引导 agent 先做行为判断 | 用户确认执行 |
| F-008 | done | 校准轻量首次启动体验 | 降低新项目第一次开机的流程摩擦，让 AI 先生成项目身份 v0，再逐步补齐完整 PRD | 更新 `docs/first-run.md` 的提问数量、落地字段和完整身份补齐条件，并同步 backlog 与 iteration-log | 不改入口协议；不改 PRD 模板；不进入技术路线、backlog、foundation 或 coding；不初始化应用代码 | 首次开机第一轮最多 3 个问题；信息 60% 清晰即可生成项目身份 v0；轻量开机不等于允许进入技术路线或 coding | 用户确认执行 |
| PB-001 | done | 纳入 Portfolio 内容系统骨架 | 将优化版项目中可复用的内容战略、Case Study Schema、内容模型和项目索引融入当前项目，形成后续页面和案例内容的统一规范 | 新增 4 个内容系统文档；更新 roadmap、tech-radar、tech-stack-decision、architecture、testing；轻量补强 AGENTS/CLAUDE/agent-behavior；同步 backlog、iteration-log、decision-log | 不改应用代码；不初始化 Next.js / Astro；不直接进入技术路线决策；不一次性填完整案例正文；不整包复制覆盖补丁包 | 4 个内容系统文档存在；关键阶段文档已 Portfolio 专属化；入口协议保持镜像；技术栈仍为未决；`apps/` 无真实应用代码 | 用户确认执行 |
| VS-001 | done | 新增 Portfolio 视觉系统护栏 | 将用户提供的 visual-system 附件中文化、项目化，形成后续页面、组件和视觉增量的执行约束 | 新增 `docs/visual-system.md`；轻量更新 AGENTS/CLAUDE 读取规则、content-model、testing、backlog、decision-log、iteration-log | 不初始化应用；不创建页面、组件或 runtime content；不把附件原样复制；不把视觉实现项提前塞进当前开发队列 | `docs/visual-system.md` 存在；文档为中文项目版且保留必要英文术语；路径统一为 `apps/ai-native-product-builder-portfolio/`；入口协议引用该文件；`apps/` 仍无真实应用代码 | 用户确认执行 |
| FN-001 | done | 初始化最小 Astro + TypeScript 基座 | 让项目具备可运行、可构建、可校验、可继续增量开发的技术底座 | 在 `apps/ai-native-product-builder-portfolio/` 下创建 Astro 7 + TypeScript + MDX + Tailwind 4 基座、基础路由、内容 schema、placeholder 内容闭环、最小组件骨架和验证命令；同步 architecture/testing/iteration-log/backlog | 不做完整页面开发；不填真实 Case Study；不做完整视觉系统；不引入 CMS、登录、数据库、AI runtime、复杂 demo、重动画或 3D | `pnpm run check`、`pnpm run build`、`pnpm run lint` 通过；Home / Projects / Case Study Detail 可静态构建；内容 schema 能校验 placeholder | `docs/tech-stack-decision.md` 已决，用户确认执行 foundation |
| UX-001 | done | 前端文案中文优先表达 | 让当前最小基座的可见前端文案以中文为主，只保留必要英文术语 | 调整 Home、Projects、Case Study Detail、共享组件标签、内容占位数据和枚举展示映射；同步 visual-system、content-model、decision-log、backlog、iteration-log、testing | 不做正式案例内容；不做新页面功能；不做视觉改版；不改变 schema 枚举、路由或技术栈 | `pnpm run check`、`pnpm run build`、`pnpm run lint` 通过；`http://127.0.0.1:4322/` 可读到中文导航、中文 CTA、中文案例卡片和中文流程标签 | `FN-001` |
| CS-001 | done | 创建第一个正式 Case Study 内容骨架 | 用一个真实项目替换 foundation placeholder 的内容生产入口，让内容系统进入可维护状态 | 选择 Ecommerce Review Copilot，按 `docs/case-study-template-schema.md` 补齐一版内容骨架；保持字段可为 `TBD`，但不删除 Product Judgment、AI Workflow、Evaluation；让首页和 Projects 从同一内容源读取 | 不一次性填完所有项目；不编造指标、截图、链接或用户反馈；不做复杂 UI polish；不新增 CMS 或 AI runtime | `pnpm run check` / `pnpm run build` / `pnpm run lint` 通过；Projects 列表出现第一个正式案例；foundation placeholder 已归档且不再生成公开静态路由 | `FN-001` |
| CS-002 | done | 扩展 Case Study Detail 正式案例展示骨架 | 让 `CS-001` 已录入的 Product Solution、Evaluation Metrics、Outcome、Reflection 等字段在详情页更完整可见 | 在现有 `CaseStudyLayout` 和必要复用组件内扩展展示结构，继续从同一内容源读取 Ecommerce Review Copilot | 不新增第二个案例；不做复杂 UI polish；不迁移截图资产；不新增 CMS、AI runtime 或真实 LLM | `pnpm run check` / `pnpm run build` / `pnpm run lint` 通过；详情页能看到 Product Judgment、AI Workflow、Product Solution、Evaluation、Outcome 和 Reflection 的主要内容；构建产物不直接暴露 `TBD` | `CS-001` |
| UX-002 | done | 首页封面能力证明链条 | 让首页第一屏从最小基座占位升级为面向 HR / 客户的能力证明入口，突出巫浩林的 AI 产品判断、Workflow 设计、原型执行和评估闭环 | 替换 Home Hero 占位文案；加入姓名“巫浩林”；新增能力链条视觉组件；更新首页流程文案和联系区占位表达 | 不做 AI 资讯板；不新增第二个 Case Study；不迁移 curated 正文为 runtime content；不新增可视化库、CMS、AI runtime、复杂动画或 3D | bundled Node 环境下 `pnpm run check` / `pnpm run build` / `pnpm run lint` 通过；首页第一屏不再出现“最小基座 / 只保留壳层”占位语气；能力链条以图标节点呈现真实业务场景、Workflow、AI 介入、人类边界、系统设计、原型和 Proof | `CS-002` |
| UX-003 | done | 首页姓名身份标识视觉优化 | 让“巫浩林”在首页第一屏从普通文字升级为更明确、更现代的个人身份锚点，同时保持 AI 产品案例库的克制专业气质 | 将 Hero 中姓名改为 identity lockup；新增“巫”字标识块；微调 Hero 强调文字；将主 accent token 从紫蓝调整为深青蓝；补充更适合中文显示的系统字体栈 | 不换整站布局；不新增外部字体文件或 Web Font；不新增案例内容；不做暗色模式、重动画、3D 或品牌 logo 系统 | bundled Node 环境下 `pnpm run check` / `pnpm run build` / `pnpm run lint` 通过；首页第一屏可检索到“巫浩林”；姓名展示为独立身份标识块；全站仍只使用一个主 accent family | `UX-002` |
| UX-004 | done | 首页姓名标识回收为文字署名 | 根据用户反馈撤掉 Hero 中过重的单字图标和英文角色行，让姓名以更克制的现代文字方式出现 | 删除 Hero identity lockup 中的“巫”字图标和 `AI Native Product Builder` 角色行；将姓名改为单独文字署名并保留轻量 accent 短线；将可见页眉品牌收敛为“巫浩林”；同步页面 title 为姓名导向 | 不重做首页布局；不改 ProofChain 能力链条；不引入外部字体、动效库或新颜色体系；不修改 PRD 产品定位和案例内容 | bundled Node 环境下 `pnpm run check` / `pnpm run build` / `pnpm run lint` 通过；首页第一屏可见“巫浩林”；源码不再包含 `identity-mark` / `identity-role`；可见页眉不再使用 `AI Native Product Builder` | `UX-003` |
| UX-005 | done | 恢复页眉产品身份文本 | 根据用户反馈，将左上角站点身份恢复为 AI Product Builder 方向，避免把产品定位从页眉中移除 | 将 `BaseLayout` 页眉品牌链接从“巫浩林”恢复为 `AI Native Product Builder`；保留 Hero 中的“巫浩林”文字署名和短线处理 | 不改 Hero 姓名样式；不恢复 Hero 中的单字图标或英文角色行；不改 ProofChain、案例内容、颜色体系或页面布局 | bundled Node 环境下 `pnpm run check` / `pnpm run build` / `pnpm run lint` 通过；构建产物页眉可检索到 `AI Native Product Builder`；Hero 仍可检索到“巫浩林” | `UX-004` |
| UX-006 | done | 首页暗色玻璃质感 Hero 改版 | 根据用户提供的封面方向，将首页第一屏升级为更神秘、高级、未来但克制的 AI 产品原型封面 | 重做 Home Hero 的暗色全幅背景、标题层级、双 CTA 和右侧玻璃拟态能力系统面板；新增 `HeroAbilitySystem` 能力星图；让首页页眉使用暗色变体 | 不改案例内容；不新增第二个 Case Study；不做全站暗色模式；不引入新依赖、3D、复杂动画、AI runtime 或数据可视化库 | bundled Node 环境下 `pnpm run check` / `pnpm run build` / `pnpm run lint` 通过；构建产物可检索到新标题、`查看作品集`、`了解能力模型`、`AI Product Prototype System`、六个能力节点和六个编号标签；浏览器预览因本地端口权限与 Browser `data:` 策略受限未完成截图 | `UX-005` |
| UX-007 | done | 首页 Hero 个人品牌识别与能力系统精修 | 在不改变暗色高级风格和左右布局的前提下，增强首页封面的个人品牌识别、信息层级和右侧能力模型系统感 | 删除 Hero 中姓名后的重复 `AI Native Product Builder Portfolio` 信息；将“巫浩林”升级为独立个人品牌签名并增加副标签；为右侧六个能力节点增加 01-06 编号；放大中心节点并增强蓝紫 radial glow；将底部英文流程标签弱化为系统日志质感 | 不改整体暗色风格；不改左右布局；不改站点页眉品牌；不新增案例内容；不做全站暗色模式；不引入新依赖、3D、复杂动画或 AI runtime | bundled Node 环境下 `pnpm run check` / `pnpm run build` / `pnpm run lint` 通过；构建产物可检索到“巫浩林”、`AI 产品原型构建者 / Personal Portfolio`、`LOG 01`、`system-node__code` 和 `AI Product Prototype System`；源码与构建产物不再检索到 `巫浩林 · AI Native Product Builder Portfolio` | `UX-006` |
| UX-008 | done | 首页精选案例重构为能力样本 | 让首页从传统项目案例列表转为单个 AIPM 方法样本，证明业务问题拆解、AI 边界判断、人机协作、AI Workflow、MVP 原型和评估闭环能力 | 将首页“精选案例”模块改为“能力样本 / 方法样本：我如何拆解一个 AI 产品机会”；把 Ecommerce Review Copilot 重包装为“样本 01：从非结构化评论到运营决策 Copilot”；使用横向重点卡片，左侧展示问题 / 判断 / 原型方向，右侧展示能力证明 | 不新增第二个案例；不添加空项目占位卡；不改 Case Study 详情页结构；不补截图、真实指标、demo link 或 GitHub link；不引入新依赖、AI runtime、复杂动画或全站视觉重做 | bundled Node 环境下 `pnpm run check` / `pnpm run build` / `pnpm run lint` 通过；构建产物可检索到“能力样本”、“方法样本：我如何拆解一个 AI 产品机会”、“样本 01：从非结构化评论到运营决策 Copilot”和“查看拆解过程”；首页构建产物不再检索到“精选案例”、“暂无案例”、“coming soon”、“mock”或“没有真实用户” | `UX-007` |
| CS-004 | todo | 优化样本 01 详情页拆解过程表达 | 让“查看拆解过程”进入的 Ecommerce Review Copilot 详情页更贴近方法拆解，而不是只像传统项目说明页 | 在现有 Case Study Detail 和同一内容源基础上，加强样本 01 的 Problem / Product Judgment / AI Workflow / Evaluation 导读、锚点和首屏摘要 | 不新增第二个案例；不改变 schema；不编造截图、真实指标、用户反馈或上线证据；不新增 CMS、AI runtime 或真实 LLM | `pnpm run check` / `pnpm run build` / `pnpm run lint` 通过；详情页能更清楚承接首页“查看拆解过程”入口，并突出产品判断链路、Human-in-the-loop 和评估闭环 | `UX-008` |
| CS-003 | deferred | 创建第二个 Featured Case Study 内容骨架 | 用 TalentSignal AI 验证统一 Case Study schema 和详情页骨架可以复用到第二个重点项目 | 选择 TalentSignal AI，按 `docs/case-study-template-schema.md` 补齐一版内容骨架；允许未确认字段为 `TBD`，但不删除 Product Judgment、AI Workflow、Evaluation、Outcome、Reflection | 不改详情页结构；不新增第三个案例；不编造 demo、GitHub、截图、用户反馈或商业指标；不新增 CMS、AI runtime 或真实 LLM | 未来恢复多 Featured 案例策略后，`pnpm run check` / `pnpm run build` / `pnpm run lint` 通过；Projects 列表出现第二个正式案例；详情页复用 `CS-002` 的完整展示骨架 | `CS-002` |

## 推荐执行顺序

| 顺序 | Backlog ID | 原因 |
| --- | --- | --- |
| 1 | F-001 | 已完成；先把入口路由说明补强，降低后续新会话恢复成本 |
| 2 | F-002 | 已完成；入口协议已从一次性融合说明收敛为可复用启动包模板 |
| 3 | F-005 | 已完成；补齐启动包的物理文件边界，后续 foundation/coding 只能进入 `apps/` |
| 4 | F-006 | 已完成；补齐首次开机引导，空白项目先补身份再推进 |
| 5 | F-007 | 已完成；补齐路由前行为判断，让 agent 先判断停、问、推进、记录或写代码 |
| 6 | F-008 | 已完成；首次开机已校准为轻量 v0，再按阶段逐步补齐 |
| 7 | PB-001 | 已完成；Portfolio 内容系统骨架已纳入，checkpoint 已完成一致性复核 |
| 8 | VS-001 | 已完成；视觉系统护栏已纳入，后续页面、组件和视觉增量需先读取 |
| 9 | FN-001 | 已完成；最小 Astro + TypeScript 基座已可运行、可构建、可校验 |
| 10 | UX-001 | 已完成；当前前端可见文案已改为中文优先表达 |
| 11 | CS-001 | 已完成；第一个正式 Case Study 内容骨架已进入内容集合 |
| 12 | CS-002 | 已完成；详情页已更完整地展示已录入的正式案例字段 |
| 13 | UX-002 | 已完成；首页封面已去除基座占位，加入巫浩林姓名和能力证明链条 |
| 14 | UX-003 | 已完成；首页姓名已升级为更明确的身份标识，并微调 accent 与中文字体栈 |
| 15 | UX-004 | 已完成；首页姓名标识已从徽章式 identity lockup 回收为更克制的文字署名 |
| 16 | UX-005 | 已完成；页眉左上角已恢复 `AI Native Product Builder` 站点身份 |
| 17 | UX-006 | 已完成；首页第一屏已按用户新方向升级为暗色玻璃质感 Hero 与能力星图 |
| 18 | UX-007 | 已完成；首页 Hero 已增强个人品牌签名层级、能力节点编号和系统日志质感 |
| 19 | UX-008 | 已完成；首页“精选案例”已收敛为单个 AIPM 方法样本，避免多项目空卡堆叠 |
| 20 | CS-004 | 下一步建议；让“查看拆解过程”进入的详情页更贴合方法样本叙事 |
| 21 | CS-003 | 已延后；当前公开阶段先不增加第二个 Featured 案例，待证据补齐后复核 |

## Foundation 后下一步

- 当前下一步唯一建议：执行 `prddev-increment` 的 `CS-004`。
- 说明：`UX-008` 已完成，首页“精选案例”已重构为单个 AIPM 方法样本；`UX-007` 已完成，首页 Hero 已增强个人品牌签名层级、右侧能力节点编号和系统日志质感；`UX-006` 已完成，首页第一屏已按用户新方向升级为暗色玻璃质感 Hero 与右侧能力星图；`CS-002` 已完成，Ecommerce Review Copilot 的详情页已能展示 Product Judgment、AI Workflow、Product Solution、Evaluation、Outcome 和 Reflection 的主要内容。
- 目标：优化 Ecommerce Review Copilot 详情页的“拆解过程”表达，让它更好承接首页“查看拆解过程”按钮，并突出产品判断链路、Human-in-the-loop 与评估闭环。
- 不做：不新增第二个案例；不改变 schema；不迁移截图资产；不补未确认 demo / GitHub 链接；不新增 CMS、登录、数据库、AI runtime 或复杂 Demo。
- 前置：`UX-008` 已完成，当前首页方法样本已通过 `check` / `build` / `lint`。

## 后续想法池

| 想法 | 来源 | 是否进入 backlog | 原因 |
| --- | --- | --- | --- |
| 将旧启动包的 `brief/context/decisions` 映射说明进一步固化到各 docs 模板顶部 | 本轮旧启动包融合讨论 | 否 | 先验证入口路由是否足够；若后续仍有恢复上下文成本，再拆成独立增量 |
