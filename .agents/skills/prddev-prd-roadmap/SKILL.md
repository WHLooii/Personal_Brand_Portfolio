---
name: prddev-prd-roadmap
description: Create or refine PRD, roadmap, MVP scope, and backlog from a selected project direction and technical stack decision. Do not implement the product or create the technical foundation.
---

# prddev-prd-roadmap

## 目标

基于已选项目方向和技术路线，编写开发级 PRD，并拆解 roadmap 与 backlog。

本 skill 只负责产品与计划文档，不搭建基座，不写业务代码，不把完整 PRD 直接变成一次性开发任务。

## 输入

开始前读取并对齐这些信息：

- `docs/knowledge-base.md`
- `docs/project-options.md`
- `docs/tech-stack-decision.md`
- 用户选择的项目方向

如果用户尚未选择项目方向，先说明缺口，并建议回到 `prddev-opportunity` 或让用户明确方向。

如果 `docs/tech-stack-decision.md` 不存在，不要生成开发级 PRD、开发级 backlog 或 foundation 任务；应先建议执行 `prddev-tech-route`。如果用户只要求概念 PRD，必须标记技术路线未决，并且不得生成开发级 backlog。

## 输出

本 skill 的产物是：

- `docs/prd.md`
- `docs/roadmap.md`
- `docs/backlog.md`

如果这些文件不存在，创建它们；如果已存在，在保留已有有效判断的基础上更新。

## PRD 应包含

- 产品定位
- 目标用户
- 核心问题
- 价值主张
- 核心用户路径
- 功能模块
- MVP 范围
- 非 MVP 范围
- 页面 / 接口 / 数据需求
- 验收标准
- 未来扩展方向

## Roadmap 要求

- 用阶段表达产品推进顺序。
- 明确 MVP 阶段、增强阶段和未来扩展阶段。
- 每个阶段说明目标、主要能力、依赖条件和不做的内容。
- 不把 roadmap 当作本轮开发清单。

## Backlog 要求

每个 backlog item 都必须是小步、可验收、可独立推进的任务。

推荐格式：

```text
F-001 Add project creation form
F-002 Add project list page
F-003 Add project detail page
F-004 Add saved prompt templates
```

拆分 backlog 时遵守：

- 一个 item 只对应一个最小功能增量。
- 每个 item 写清目标、范围、不做什么和验收标准。
- 优先排列能支撑最小可运行产品的路径。
- 不把多个大模块合并成一个 item。
- 不把“实现整个 PRD”作为 item。

## 执行步骤

1. 读取知识库、项目机会、技术栈决策和用户选择的项目方向。
2. 确认技术路线与技术栈已经决策；如未决，按输入规则处理。
3. 编写或更新 `docs/prd.md`，定义最终产品形态和 MVP 边界。
4. 编写或更新 `docs/roadmap.md`，定义阶段推进顺序。
5. 编写或更新 `docs/backlog.md`，拆成小步、可验收、可独立推进的 backlog item。
6. 检查 backlog 是否能让后续 `prddev-increment` 每次只做一个 item。
7. 停止，并建议下一步进入 `prddev-foundation`。

## 禁止事项

- 不搭建基座。
- 不写业务代码。
- 不把完整 PRD 直接变成一次性开发任务。
- 不把多个大模块合并成一个 backlog item。
- 不在技术路线未决时生成开发级 backlog。
- 不自动继续执行 `prddev-foundation` 或 `prddev-increment`。

## 完成标准

- PRD 定义最终形态。
- roadmap 定义阶段。
- backlog 定义小步开发路径。
- 下一步可以进入 `prddev-foundation`。
