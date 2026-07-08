# PRD 驱动的渐进式开发常驻规则

> **镜像声明**：本文件与 `CLAUDE.md` 内容保持一致，互为 Codex / Claude Code 的项目入口协议。修改其中任一个文件时，必须同步更新另一个。

---

## 项目定位

### 本项目的快速介绍了解（新项目必须改写）

AI Native Product Builder Portfolio 是橘子的个人作品集网站，面向 AI PM / AI 产品岗位招聘方、潜在合作伙伴和客户，展示从产品问题判断、AI 机会分析、Agent/RAG/Copilot 工作流设计到前端原型落地的 AI 产品构建能力。

它应该像一个 AI 产品案例库，而不是普通个人主页、技能展示墙或前端炫技页面；完整项目身份、产品定位、目标用户、范围边界和验收标准只维护在 `docs/prd.md`。

### 启动包常驻规则（模板常驻）

本启动包使用 `prddev-*` skill 体系，支撑 PRD-driven incremental development。新项目可以按自身形态改写项目身份与 PRD 内容，但本节以下的推进规则默认保留。

一句话说明：

> PRD 定义产品最终形态，技术路线定义实现方向，backlog 定义推进路径，每次会话只完成一个可验证的小步增量。

本启动包不是让 agent 一次性生成完整产品的模板。任何 agent 进入使用本启动包的项目后，都应先判断当前阶段和本轮边界，再推进一个最小交付项。

---

## 新会话启动协议

每次打开使用本启动包的项目时，先用以下顺序快速恢复上下文：

1. **`AGENTS.md` / `CLAUDE.md` 的“本项目的快速介绍了解”** — 先识别当前项目身份；如果仍是占位，提醒用户需要改写。
2. **`docs/prd.md`** — 作为完整项目身份的唯一详细来源，读取产品定位、范围边界和验收标准。
3. **Portfolio 内容与视觉系统文档** — 如果本轮涉及内容、页面、组件、视觉系统、项目数据或 Case Study，读取 `docs/portfolio-content-strategy.md`、`docs/case-study-template-schema.md`、`docs/content-model.md`、`docs/project-portfolio-index.md`、`docs/visual-system.md`。
4. **`docs/first-run.md`** — 如果快速介绍或 PRD 身份字段仍为空，按首次开机引导卡先补齐项目身份。
5. **`docs/agent-behavior.md`** — 在路由前先判断本轮该停、问、推进、记录，还是写代码。
6. **`docs/iteration-log.md`** — 读取当前阶段、最近完成、阻塞项和下一步唯一建议。
7. **`docs/backlog.md`** — 如果本轮涉及开发或继续推进，确认唯一要执行的 backlog item。
8. **按任务类型读取对应文档** — 不要一次性展开所有阶段文档。

读完启动上下文后，直接判断阶段并推进；不要要求用户重新解释“上次做到哪了”，除非文档缺失或状态互相矛盾。

---

## 项目文件边界

- `docs/` 只用于存放项目推进过程中的文档、方案、PRD、架构说明、backlog、迭代日志、决策日志和待确认内容。
- `apps/` 是唯一的实际项目开发目录。任何应用源码、原型代码、脚本、测试代码、配置文件、runtime content 和可运行项目都必须放在 `apps/` 下。
- 每个具体项目或应用使用独立子目录，例如 `apps/<project-name>/`。
- 不允许把业务代码、可运行项目、实验 demo 直接放在仓库根目录或 `docs/` 中。
- 如果当前项目还没有进入 foundation 或 coding 阶段，可以只保留 `apps/` 空目录，不提前初始化应用代码。

---

## 渐进式开发铁律

- PRD 定义产品最终形态，不等于一次性开发清单。
- 技术路线定义实现方向，backlog 定义实际推进路径。
- 每次开发会话只实现一个小的、可验证的功能增量。
- 不要一次性实现完整 PRD。
- 不要在同一轮合并多个无关功能。
- 如果用户请求过大，先拆成 backlog item，本轮只执行最小的下一个增量。
- 当阶段不明确时，先判断当前阶段和下一步边界，再执行；不要自动连续推进多个阶段。

---

## 阶段读取规则

在编写开发级 PRD 前，先检查：

- `docs/knowledge-base.md`
- `docs/project-options.md`
- `docs/tech-radar.md`
- `docs/tech-stack-decision.md`

在搭建技术基座前，先检查：

- `docs/prd.md`
- `docs/tech-stack-decision.md`
- `docs/architecture.md`

在开发页面、组件、视觉系统、项目数据或 Case Study 前，先检查：

- `docs/prd.md`
- `docs/portfolio-content-strategy.md`
- `docs/case-study-template-schema.md`
- `docs/content-model.md`
- `docs/project-portfolio-index.md`
- `docs/visual-system.md`
- `docs/architecture.md`
- `docs/backlog.md`

在开发功能前，先检查：

- `docs/prd.md`
- `docs/architecture.md`
- `docs/backlog.md`
- `docs/iteration-log.md`

开发完成后，按需更新：

- `docs/iteration-log.md`
- `docs/backlog.md`

当产品方向、技术方向或范围边界发生变化时，使用并更新：

- `docs/decision-log.md`

---

## 默认路由

- 调研、趋势、竞品、新资讯：使用 `prddev-research-kb`。
- 项目想法、机会评估、方向比较：使用 `prddev-opportunity`。
- 技术路线、技术栈、选型、主流方案：使用 `prddev-tech-route`。
- PRD、roadmap、backlog、MVP 范围：使用 `prddev-prd-roadmap`。
- 技术基座、初始化项目、架构、最小可运行：使用 `prddev-foundation`。
- 功能开发、继续开发、下一个 backlog、`F-xxx`：使用 `prddev-increment`。
- 进度总结、状态恢复、文档同步、checkpoint：使用 `prddev-checkpoint`。

如果对应 skill 不在当前工具列表中，仍然遵守该 skill 的阶段边界和输入输出约束，用本文件和 docs 中的规则手动执行。

---

## 关键防线

- 如果已经有 selected project direction，但 `docs/tech-stack-decision.md` 不存在，不允许进入开发级 PRD、foundation 或 coding；应先执行 `prddev-tech-route`。
- 任何用户请求都必须先按 `docs/agent-behavior.md` 判断本轮该停、问、推进、记录，还是写代码；不要跳过行为判断直接执行。
- 如果用户只要求概念 PRD，可以先执行 `prddev-prd-roadmap`，但必须标记技术路线未决，不得生成开发级 backlog。
- 如果本轮只是方案或澄清，不要修改文件；用户明确要求“执行”后再落地。
- 新项目使用本启动包时，必须先按项目形态改写“本项目的快速介绍了解”；如果该段仍是占位，不要假装已经理解项目。
- 如果“本项目的快速介绍了解”仍是占位，或 `docs/prd.md` 的产品名称 / 产品定位为空，必须先帮助用户补齐项目身份；不得进入技术路线、backlog、foundation 或 coding。
- 首次补齐项目身份时，按 `docs/first-run.md` 执行；该文件只负责引导，不承载第二份项目身份。
- `docs/prd.md` 是完整项目身份的唯一详细来源；不要在 `AGENTS.md` / `CLAUDE.md` 中维护第二份完整 PRD。
- 任何实际项目开发都只能发生在 `apps/` 下；`docs/` 只能承载推进文档、设计方案、待确认内容和过程记录。
- 所有项目页面和项目内容必须遵守 `docs/content-model.md` 与 `docs/case-study-template-schema.md`；页面、组件和视觉增量必须遵守 `docs/visual-system.md`；`Product Judgment`、`AI Workflow / Agent Design`、`Evaluation` 不得省略。
- 技术路线未决前，不创建 `apps/ai-native-product-builder-portfolio/` 下的真实应用代码或 runtime content。
- 模板常驻规则可以适配措辞，但不能删除渐进式推进、阶段路由、每轮只做一个最小增量、完成后停止并同步说明的核心约束。
- 每轮完成后必须停止，并说明完成了什么、修改了哪些文件、验证了什么、哪些相关内容没有做、下一步建议执行哪个 skill 或 backlog item。

---

## 协作风格

- 协作对象是橘子：产品经理 / AI 工作流设计师 / AI Native 理念推广者。
- 语气专业但轻松，用“你”，不用“您”。
- 不确定就标记“待确认”，不要为了完整感编造。
- 遇到模糊需求，先给出 2-3 个具体选项帮助用户判断。
- 普通实现细节可以自主决定；产品方向、技术路线、范围边界变化必须记录到 `docs/decision-log.md`。
