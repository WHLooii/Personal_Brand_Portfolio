---
name: prddev-increment
description: Implement exactly one small backlog item or one minimal feature increment in a PRD-driven project. Use for normal coding sessions. Do not implement multiple features or the whole PRD.
---

# prddev-increment

## 目标

正常开发阶段使用。每次只实现一个 backlog item 或一个最小功能增量。

PRD 定义产品最终形态，backlog 定义本轮实际开发路径。不要因为看到完整 PRD 就一次性开发多个功能。

## 输入

开始前读取并对齐这些文件：

- `docs/prd.md`
- `docs/architecture.md`
- `docs/backlog.md`
- `docs/iteration-log.md`
- `docs/decision-log.md`
- `docs/testing.md`

如果关键输入缺失，先说明缺口并建议回到对应阶段；不要自行扩大范围补完整套文档或搭建基座。

## 输出

本 skill 的产物是：

- 一个功能增量
- 更新 `docs/backlog.md`
- 更新 `docs/iteration-log.md`
- 必要时更新 `docs/decision-log.md`

只有当产品方向或技术方向发生变化时，才更新 `docs/decision-log.md`。

## 会话开始必须输出

在写代码前，先向用户说明：

- 当前产品目标
- 当前架构基座
- 上一个已完成增量
- 本次选择的唯一增量
- 本次范围
- 本次不做什么
- 验收标准

如果用户指定的任务包含多个 backlog item，先拆分并只选择其中最小、最靠前、可验证的一项执行。

## 执行步骤

1. 读取 PRD、architecture、backlog、iteration-log、decision-log 和 testing 文档。
2. 确认当前产品目标、现有架构和上一个已完成增量。
3. 选择本次唯一 backlog item 或最小功能增量。
4. 明确本次范围、明确不做的内容和验收标准。
5. 只修改完成该增量所需的最小代码与文档。
6. 执行相关验证；如果无法执行，记录原因。
7. 更新 `docs/backlog.md`，标记本次增量状态。
8. 更新 `docs/iteration-log.md`，记录完成内容、修改文件、验证结果和遗留问题。
9. 必要时更新 `docs/decision-log.md`，记录产品或技术方向变化。
10. 停止，并给出下一个建议增量。

## 禁止事项

- 不同时做多个 backlog item。
- 不顺手做 UI 优化。
- 不顺手加认证、支付、后台等大模块。
- 不提前开发未来功能。
- 不大规模重构。
- 不更改产品方向而不记录。
- 不把 PRD 当作一次性开发清单。
- 不在完成后自动继续执行下一个 backlog item。

## 完成标准

- 只完成一个小功能。
- 相关验证已执行，或记录无法执行原因。
- `docs/backlog.md` 和 `docs/iteration-log.md` 已更新。
- 下一个建议增量明确。
