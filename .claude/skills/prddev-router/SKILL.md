---
name: prddev-router
description: Route PRD-driven product work to the correct prddev-* skill. Use when the user says continue, asks what stage the project is in, or the next step is unclear. Do not implement code directly.
---

# prddev-router

## 目标

判断当前项目处于哪个阶段，并路由到正确的 `prddev-*` skill。

本 skill 只负责判断阶段、指出缺失文档、推荐下一步，不直接写业务代码，不连续执行多个阶段。

## 输入

优先检查这些项目文档：

- `docs/knowledge-base.md`
- `docs/project-options.md`
- `docs/tech-stack-decision.md`
- `docs/prd.md`
- `docs/roadmap.md`
- `docs/backlog.md`
- `docs/architecture.md`
- `docs/iteration-log.md`
- `docs/decision-log.md`

## 输出

每次使用本 skill 时，输出：

- 当前项目阶段
- 缺失关键文档
- 推荐使用的下一个 skill
- 本次只应执行的最小任务
- 本次明确不做的内容

## 路由规则

当用户请求不明确时，先使用 `prddev-router` 判断阶段。

明确请求按以下规则路由：

- 用户说“调研 / 趋势 / 竞品 / 新资讯”：路由到 `prddev-research-kb`。
- 用户说“罗列项目 / 项目机会 / 可以做什么”：路由到 `prddev-opportunity`。
- 用户说“技术路线 / 技术栈 / 选型 / 主流方案”：路由到 `prddev-tech-route`。
- 用户说“写 PRD / roadmap / backlog / MVP 范围”：路由到 `prddev-prd-roadmap`。
- 用户说“搭基座 / 初始化项目 / 架构 / 最小可运行”：路由到 `prddev-foundation`。
- 用户说“继续开发 / 实现功能 / 下一个 backlog / F-xxx”：路由到 `prddev-increment`。
- 用户说“总结进度 / 当前做到哪 / 更新状态 / 文档同步”：路由到 `prddev-checkpoint`。

## 关键防线

- 如果 selected project direction 存在，但 `docs/tech-stack-decision.md` 不存在，不允许进入开发级 PRD、foundation 或 coding；应先执行 `prddev-tech-route`。
- 如果用户只要求概念 PRD，可以先执行 `prddev-prd-roadmap`，但必须标记技术路线未决，不得生成开发级 backlog。
- 每次只推荐一个下一步 skill 或一个最小任务，不要直接替用户选择多个后续任务。

## 禁止事项

- 不写业务代码。
- 不创建所有 skill。
- 不重写完整 PRD。
- 不自动连续执行多个阶段。
- 不直接替用户选择多个后续任务。

## 完成标准

能够明确回答：现在在哪个阶段，下一步只应该使用哪个 skill。
