---
name: prddev-checkpoint
description: Synchronize project status, backlog, iteration log, decision log, and testing notes after incremental development. Use when recovering context or summarizing progress. Do not add new features.
---

# prddev-checkpoint

## 目标

同步项目状态，整理进度，修正文档漂移，帮助下一轮恢复上下文。

本 skill 只负责让文档状态与代码状态一致，不新增业务功能，不重写 PRD，不重构代码，不改变技术路线。

## 输入

开始前读取并对齐这些信息：

- `docs/prd.md`
- `docs/architecture.md`
- `docs/backlog.md`
- `docs/iteration-log.md`
- `docs/decision-log.md`
- `docs/testing.md`
- 代码库当前状态

如果关键文档缺失，先说明缺口，并只做状态同步范围内的整理；不要借机补完整 PRD、搭建基座或开发功能。

## 输出

本 skill 的产物是：

- 更新 `docs/iteration-log.md`
- 更新 `docs/backlog.md`
- 更新 `docs/decision-log.md`
- 更新 `docs/testing.md`
- 当前状态摘要
- 下一步唯一建议

更新 `docs/decision-log.md` 只用于补齐已经发生但未记录的产品或技术决策，不用于创建新方向或改变技术路线。

## 执行步骤

1. 读取 PRD、architecture、backlog、iteration-log、decision-log 和 testing 文档。
2. 检查代码库当前状态，识别已经实现、未实现、部分实现和验证缺口。
3. 对齐 `docs/backlog.md`，修正 backlog item 的状态、下一步顺序和阻塞项。
4. 对齐 `docs/iteration-log.md`，补充最近完成内容、修改文件、验证结果和遗留问题。
5. 对齐 `docs/testing.md`，记录当前可执行验证命令、已知无法执行原因和测试缺口。
6. 必要时对齐 `docs/decision-log.md`，只记录已经发生的方向或技术决策。
7. 输出当前状态摘要，包括当前阶段、已完成内容、未完成内容、风险和缺失文档。
8. 给出下一步唯一建议，指向一个 skill 或一个最小 backlog item。
9. 停止，不自动继续执行下一步。

## 禁止事项

- 不新增业务功能。
- 不重写 PRD。
- 不重构代码。
- 不改变技术路线。
- 不创建新的产品方向。
- 不把多个后续任务合并成一次执行计划。
- 不自动执行 `prddev-foundation` 或 `prddev-increment`。

## 完成标准

- 文档状态与代码状态一致。
- 下一个最小增量清晰。
- 当前状态摘要能帮助下一轮恢复上下文。
- 下一步只有一个明确建议。
