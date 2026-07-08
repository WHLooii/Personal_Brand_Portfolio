---
name: prddev-foundation
description: Build or refine the minimal technical foundation for a PRD-driven project, including architecture, app shell, configuration, and validation setup. Do not implement multiple product features.
---

# prddev-foundation

## 目标

根据技术栈决策和 PRD 搭建最小可运行技术基座。

本 skill 只负责让项目具备可运行、可验证、可继续增量开发的基础，不实现多个业务功能，不把 PRD 当作一次性开发清单。

## 输入

开始前读取并对齐这些文件：

- `docs/tech-stack-decision.md`
- `docs/prd.md`
- `docs/roadmap.md`
- `docs/backlog.md`

如果 `docs/tech-stack-decision.md` 不存在，不要搭建基座；应先建议执行 `prddev-tech-route`。

如果 `docs/prd.md`、`docs/roadmap.md` 或 `docs/backlog.md` 缺失，不要自行补完整开发计划；应先建议执行 `prddev-prd-roadmap`。

## 输出

本 skill 的产物是：

- 最小可运行项目基座
- `docs/architecture.md`
- `docs/testing.md`
- `docs/iteration-log.md`

如果文档不存在，创建它们；如果已存在，在保留已有有效判断的基础上更新。

## 基座可包含

- 项目初始化
- 目录结构
- 基础配置
- 最小 app shell
- 最小 routing
- 最小 data access pattern
- 基础 lint / test / build 命令
- 环境变量样例
- 架构说明

## 基座不应包含

- 完整认证系统
- 完整 dashboard
- 完整后台管理
- 完整支付系统
- 完整 AI workflow
- 完整 RAG 管道
- 多个业务功能
- 复杂 UI polish
- 超出 MVP 的提前抽象

## 执行步骤

1. 读取技术栈决策、PRD、roadmap 和 backlog。
2. 确认 MVP 的最小运行目标和第一个后续 backlog item 的开发入口。
3. 初始化或整理项目目录结构，只创建后续增量开发所需的最小骨架。
4. 建立最小 app shell、最小 routing 和必要配置。
5. 建立最小 data access pattern；如果 MVP 暂不需要持久化，明确标记 deferred。
6. 配置基础 lint、test、build 或等价验证命令。
7. 创建或更新 `docs/architecture.md`，说明架构、目录职责、扩展位置和暂不做内容。
8. 创建或更新 `docs/testing.md`，记录可运行的验证命令和测试策略。
9. 创建或更新 `docs/iteration-log.md`，记录本轮完成内容、修改文件、验证结果和遗留问题。
10. 停止，并建议下一步使用 `prddev-increment` 实现第一个 backlog item。

## 禁止事项

- 不实现多个业务功能。
- 不搭完整系统。
- 不实现完整认证系统、支付系统、后台管理或 dashboard。
- 不实现完整 AI workflow 或完整 RAG 管道。
- 不做复杂 UI polish。
- 不加入超出 MVP 的提前抽象。
- 不在技术栈决策或开发级 PRD 缺失时强行初始化项目。
- 不自动继续执行 `prddev-increment`。

## 完成标准

- 项目能运行。
- 后续功能有明确添加位置。
- 架构文档说明了如何扩展。
- 没有实现多个业务功能。
