---
name: prddev-tech-route
description: Research current mainstream technical routes for a selected product direction, compare architecture and stack options, and choose the most suitable technology stack before PRD and foundation work. Do not write PRD or implement code.
---

# prddev-tech-route

## 目标

在 PRD 和基座之前，梳理当下行业主流技术路线，并根据本项目方向选择技术栈。

本 skill 只负责技术路线与技术栈决策，不写 PRD，不初始化项目，不创建基座代码。

## 输入

优先检查这些信息：

- `docs/knowledge-base.md`
- `docs/project-options.md`
- 用户选择的项目方向
- 已有 `docs/tech-radar.md`
- 已有 `docs/tech-stack-decision.md`
- 已有 `docs/decision-log.md`

如果用户尚未选择项目方向，先说明缺口，并建议回到 `prddev-opportunity` 或让用户明确方向。

## 输出

本 skill 的产物是：

- `docs/tech-radar.md`
- `docs/tech-stack-decision.md`
- `docs/decision-log.md`

如果这些文件不存在，创建它们；如果已存在，在保留已有有效判断的基础上更新。

## 必须区分

- 技术路线：产品应该以什么技术形态存在。
- 技术栈：用哪些具体工具实现这条路线。

不要把“React / Next.js / Python / PostgreSQL”这类工具名当成技术路线。先判断产品形态，再选择实现工具。

## 可选技术路线示例

评估时可参考这些路线，但不要机械穷举：

- Web SaaS
- Browser Extension
- Desktop App
- Mobile App
- Local-first App
- Cloud-first Multi-tenant SaaS
- API-first Product
- AI Agent Workflow
- RAG Knowledge System
- Automation Pipeline
- CLI Tool
- Plugin / Integration-first Product
- Hybrid Route，例如 Browser Extension + Web Dashboard

## 技术栈维度

根据项目需要选择 MVP 必需维度，不要强行补齐所有项：

- Frontend
- Backend
- Database
- ORM / Data Access
- Authentication
- AI / LLM Integration
- Vector Search / Retrieval
- File Storage
- Background Jobs
- Deployment
- Testing
- Analytics / Monitoring

## 执行步骤

1. 读取已有输入，确认用户选择的项目方向和主要约束。
2. 梳理当前主流技术路线，结合项目目标、用户场景、交付成本、维护成本和扩展空间进行比较。
3. 选择一个 primary technical route，并列出关键备选路线。
4. 为 primary technical route 选择 MVP 所需技术栈。
5. 对每个技术栈维度标注 `required now` 或 `deferred`，避免加入 MVP 不需要的重型依赖。
6. 说明备选方案为什么不选，包括风险、成本或与项目阶段不匹配的原因。
7. 记录 foundation 阶段应该如何落地，包括最小项目形态、必要模块和第一轮不做的内容。
8. 更新 `docs/decision-log.md`，记录关键产品形态或技术选型决策。

## 禁止事项

- 不直接写 PRD。
- 不初始化项目。
- 不创建基座代码。
- 不因为当前流行就盲目选复杂技术。
- 不加入 MVP 不需要的重型依赖。
- 不跳到 `prddev-foundation` 或 `prddev-increment` 连续执行。

## 完成标准

- 已经选择一个 primary technical route。
- 已经选择 MVP 所需技术栈。
- 已经说明备选方案为什么不选。
- 已经给出 foundation 阶段应该如何落地。
- 已经清楚区分 `required now` 与 `deferred`。
