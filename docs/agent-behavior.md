# Agent 行为判断表

用途：作为 `prddev-*` 路由前的第一层行为判断，帮助 agent 先决定本轮该“停 / 问 / 推进 / 记录 / 写代码”。

本文件是操作协议，不是项目身份、PRD、backlog 或迭代日志。它只回答一个问题：

> 面对当前请求，agent 下一步应该采取什么行为？

## 判断优先级

每次接到用户请求后，按顺序判断：

1. **先看是否必须停**：前置身份、阶段、技术路线或范围边界是否缺失。
2. **再看是否必须问**：用户目标、边界、阶段或关键判断是否模糊。
3. **再看是否可以推进**：是否有明确阶段、明确输入、明确最小交付。
4. **过程中判断是否需要记录**：是否产生完成状态、方向变化、技术变化或待确认判断。
5. **最后才判断是否写代码**：只有 foundation / increment 阶段且前置齐全时，才允许进入 `apps/`。

只要前一层触发，就不要跳到后一层。

## 行为总表

| 行为 | 什么时候触发 | Agent 应该做什么 | 禁止做什么 | 记录到哪里 |
| --- | --- | --- | --- | --- |
| 停 | 项目身份不清、PRD 为空、技术栈前置缺失、请求过大、阶段冲突 | 停止推进，说明阻塞原因，给出唯一下一步建议 | 不要假装理解，不要写代码，不要连续推进 | 需要保存时写 `docs/iteration-log.md` |
| 问 | 用户目标模糊、边界不明、关键判断缺失、请求内部矛盾 | 最多问 3-5 个关键问题，尽量给选项和默认猜测 | 不要审问式连环追问，不要把猜测写成事实 | 需要落地时写 `docs/prd.md` 或对应阶段文档 |
| 推进 | 阶段明确、前置文档齐全、目标是一个小增量 | 执行对应 `prddev-*` skill；若 skill 不可用，按其边界手动执行 | 不要一次推进多个阶段，不要合并无关功能 | `docs/iteration-log.md` / `docs/backlog.md` |
| 记录 | 每轮完成、backlog 状态变化、方向/技术/范围变化、有待确认判断 | 更新对应 docs，写清完成内容、验证、未做内容和下一步 | 不要把普通流水账写进 decision-log | 见“记录落点” |
| 写代码 | 仅 foundation / increment 阶段，且 PRD、技术栈、架构、backlog 前置齐全 | 只在 `apps/<project-name>/` 下实现一个可验证增量 | 不要在根目录或 `docs/` 写代码，不要顺手做无关功能 | `apps/` + `docs/iteration-log.md` / `docs/backlog.md` |

## 必须停

出现以下任一情况，先停：

- “本项目的快速介绍了解”仍是占位。
- `docs/prd.md` 的产品名称或产品定位为空。
- 已有 selected project direction，但 `docs/tech-stack-decision.md` 不存在，却要求开发级 PRD、foundation 或 coding。
- 用户请求一次性实现完整 PRD。
- 用户要求多个无关功能一起做。
- 用户要求写代码，但没有明确 backlog item。
- `docs/tech-stack-decision.md` 仍未决，但用户要求初始化应用、写页面、写组件或创建 runtime content。
- 需要关键产品、技术或范围决策，但用户还没确认。

停下后输出：

```text
当前不能继续推进，因为：____
唯一下一步建议：____
本轮不会进入：____
```

## 必须问

出现以下任一情况，先问：

- 用户只说“继续推进”“优化一下”“做一下”，但没有说明阶段或目标。
- 用户给了想法，但不清楚是要调研、机会判断、PRD、技术路线还是开发。
- `docs/first-run.md` 已触发，但项目身份信息不足。
- 用户请求里有明显冲突，比如“只做方案”又要求“帮我实现”。
- 影响范围超过一个小增量，需要先拆边界。

提问要求：

- 第一轮最多问 3-5 个关键问题。
- 尽量给 A/B/C 选项，降低用户回答成本。
- 可以给默认猜测，但必须标注“我猜的，你看对不对”。
- 用户确认前，不要写入正式项目事实。

## 可以推进

满足以下条件，可以推进：

- 用户明确指定 skill、阶段或 backlog item。
- 前置文档齐全。
- 本轮目标能被一个最小增量验证。
- 推进结果有明确落点：`docs/` 或 `apps/`。
- 不需要额外关键决策，或用户已经确认。

推进时必须遵守：

- 每轮只执行一个 skill 或一个 backlog item。
- 完成后停止，不自动进入下一个阶段。
- 输出完成内容、修改文件、验证结果、未做内容、下一步建议。

## Portfolio 专属检查

当本轮涉及内容、页面、组件、项目数据或 Case Study 时，必须额外检查：

- 是否服务 AI Native Product Builder 定位。
- 是否突出 Problem、Product Judgment、AI Workflow、Prototype、Evaluation。
- 是否遵守 `docs/content-model.md` 和 `docs/case-study-template-schema.md`。
- 是否避免技能 Badge 墙、普通个人主页叙事和前端炫技叙事。
- 是否保持 `docs/` 与 `apps/` 边界：规范和策略在 `docs/`，runtime code 和 runtime content 在 `apps/ai-native-product-builder-portfolio/`。

如果用户要求新增项目案例，应先按内容模型和 Case Study Schema 产出内容草稿或字段清单，不要绕过 Schema 写自由格式页面。

## 必须记录

以下情况必须记录：

- foundation、increment 或 checkpoint 完成：更新 `docs/iteration-log.md`。
- backlog 状态变化：更新 `docs/backlog.md`。
- 产品方向、技术方向或范围边界变化：更新 `docs/decision-log.md`。
- 技术基座、模块职责或扩展边界变化：更新 `docs/architecture.md`。
- 测试策略或验证方式变化：更新 `docs/testing.md`。

以下情况默认不记录：

- 用户明确说“只做方案，不执行”。
- 只是一次普通问答，没有改变项目状态。
- 临时猜测尚未被用户确认。

## 可以写代码

只有以下阶段可以写代码：

- `prddev-foundation`
- `prddev-increment`

写代码前必须满足：

- `docs/prd.md` 已经包含清晰项目身份和范围边界。
- `docs/tech-stack-decision.md` 已决，或本轮任务就是在允许范围内完成技术路线决策。
- `docs/architecture.md` 已说明当前基座状态，或本轮任务就是创建 foundation。
- `docs/backlog.md` 有唯一明确的当前 item。
- 代码落点在 `apps/<project-name>/`。

写代码时必须遵守：

- 只实现本轮最小可验证增量。
- 不把业务代码、demo、脚本或配置写进 `docs/`。
- 不顺手做 UI polish、认证、支付、后台、AI workflow、RAG 管道等未被本轮明确包含的大模块。
- 写完必须验证，并更新 `docs/iteration-log.md` / `docs/backlog.md`。

## 记录落点

| 内容类型 | 写入位置 |
| --- | --- |
| 项目完整身份、定位、范围、MVP、验收标准 | `docs/prd.md` |
| 当前阶段、最近完成、下一步唯一建议 | `docs/iteration-log.md` |
| 可执行增量、状态、验收标准、依赖 | `docs/backlog.md` |
| 产品/技术/范围关键决策 | `docs/decision-log.md` |
| 技术路线与技术栈选择 | `docs/tech-radar.md` / `docs/tech-stack-decision.md` |
| 技术基座、模块职责、扩展规则 | `docs/architecture.md` |
| Portfolio 内容战略、Case Study Schema、内容模型、项目池 | `docs/portfolio-content-strategy.md` / `docs/case-study-template-schema.md` / `docs/content-model.md` / `docs/project-portfolio-index.md` |
| 实际应用代码、原型、脚本、测试、配置 | `apps/<project-name>/` |

## 快速口令

如果无法判断该做什么，先问自己：

```text
现在应该停、问、推进、记录，还是写代码？
如果要写代码，为什么现在已经允许写代码？
如果要推进，为什么本轮只有一个最小增量？
```
