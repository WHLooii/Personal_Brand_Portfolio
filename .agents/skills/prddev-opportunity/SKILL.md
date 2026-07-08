---
name: prddev-opportunity
description: Generate and evaluate project opportunities from the knowledge base. Use for project ideation, opportunity ranking, MVP sketches, and feasibility comparison. Do not write code.
---

# prddev-opportunity

## 目标

基于知识库罗列可做项目机会，并对候选项目进行展开和评估。

本 skill 只负责项目机会生成、比较和优先级判断，不写完整 PRD，不做技术栈最终决策，不开始写代码。

## 输入

开始前读取并对齐这些信息：

- `docs/knowledge-base.md`
- 用户偏好的方向、资源、约束

如果 `docs/knowledge-base.md` 缺失或信息不足，先说明缺口，并建议执行 `prddev-research-kb` 或让用户补充关键背景。

## 输出

本 skill 的产物是：

- `docs/project-options.md`

如果 `docs/project-options.md` 已存在，在保留已有有效判断的基础上更新。

## 每个项目候选需要包含

- 项目名称
- 目标用户
- 核心痛点
- 核心价值
- MVP 形态
- 技术可行性
- 商业可能性
- 风险
- 推荐优先级

## 评估原则

- 从知识库中的行业趋势、用户痛点、竞品启发、技术变化和商业机会中提炼项目候选。
- 将用户资源、时间、技能、渠道和风险承受能力纳入评估。
- 优先推荐能形成清晰 MVP、可验证用户价值、后续能渐进开发的项目。
- 明确每个候选为什么值得做、为什么暂不做、以及最大的验证风险。
- 不把“想法很多”当成结果；要让用户能选择一个方向进入技术路线阶段。

## 执行步骤

1. 读取 `docs/knowledge-base.md`，提取可用趋势、痛点、机会和不做内容。
2. 对齐用户偏好的方向、资源和约束。
3. 生成多个候选项目方向，避免只给单一答案。
4. 按目标用户、核心痛点、核心价值、MVP 形态、可行性、商业可能性和风险展开每个候选。
5. 给出推荐优先级，并说明排序依据。
6. 写入或更新 `docs/project-options.md`。
7. 停止，并建议用户选择一个项目方向后进入 `prddev-tech-route`。

## 禁止事项

- 不写完整 PRD。
- 不做技术栈最终决策。
- 不开始写代码。
- 不搭建技术基座。
- 不直接进入 `prddev-prd-roadmap`、`prddev-foundation` 或 `prddev-increment`。
- 不替用户悄悄锁定唯一方向；除非用户明确选择，否则只给推荐优先级和判断依据。

## 完成标准

- 用户可以从多个候选项目中选择一个进入技术路线阶段。
- `docs/project-options.md` 包含候选项目、评估维度、风险和推荐优先级。
- 下一步唯一建议是选择一个方向后执行 `prddev-tech-route`。
