---
name: prddev-research-kb
description: Research industry trends, competitors, recent news, and market signals, then condense findings into the project knowledge base. Do not write PRD or code.
---

# prddev-research-kb

## 目标

调研行业趋势、竞品、新资讯、新技术范式，并将信息沉淀为项目知识库。

本 skill 只负责调研与知识库沉淀，不写 PRD，不写代码，不开始开发，不搭建技术基座。

## 输入

开始前读取并对齐这些信息：

- 用户给出的行业、赛道、问题域或产品方向
- 已有 `docs/knowledge-base.md`
- 已有 `docs/research/`

如果用户没有给出足够明确的问题域或方向，先说明缺口，并将本轮限定为澄清调研主题；不要自行扩大到完整产品规划。

## 输出

本 skill 的产物是：

- `docs/research/<date>-<topic>.md`
- `docs/knowledge-base.md`

如果 `docs/research/` 不存在，创建目录；如果 `docs/knowledge-base.md` 已存在，在保留已有有效判断的基础上更新。

## 产物内容

调研产物应覆盖：

- 行业趋势
- 竞品启发
- 用户痛点
- 可借鉴功能
- 技术变化
- 商业机会
- 不做什么
- 对本项目的判断

## 执行原则

- 将事实、来源、推断和项目判断分开表达。
- 优先沉淀可用于后续 opportunity、tech-route、PRD 的判断。
- 避免复制资料堆叠；每条重要信息都要说明它对本项目意味着什么。
- 对“最新”“近期”“当前主流”等信息，使用可验证来源，并记录时间背景。
- 明确哪些方向暂不值得做，避免后续误入范围。

## 执行步骤

1. 明确本轮调研主题、问题域和输出边界。
2. 读取已有 `docs/knowledge-base.md` 和 `docs/research/`，避免重复沉淀。
3. 收集行业趋势、竞品、新资讯、技术范式和市场信号。
4. 筛选高价值信息，剔除与本项目无关或不可验证的资料。
5. 写入 `docs/research/<date>-<topic>.md`，记录调研主题、关键信息、来源摘要、判断和不做内容。
6. 更新 `docs/knowledge-base.md`，只沉淀可复用的项目判断。
7. 停止，并建议下一步进入 `prddev-opportunity` 或继续一个更窄的 research-kb 主题。

## 禁止事项

- 不写 PRD。
- 不罗列大量未经筛选的资料。
- 不开始开发。
- 不搭建基座。
- 不直接做技术栈最终决策；技术路线与技术栈选择应交给 `prddev-tech-route`。
- 不直接替用户选择最终项目方向；项目机会评估应交给 `prddev-opportunity`。

## 完成标准

- 调研信息已经转化为项目可用判断，而不是原始资料堆叠。
- `docs/research/<date>-<topic>.md` 记录了本轮调研依据和判断。
- `docs/knowledge-base.md` 沉淀了后续阶段可复用的结论。
