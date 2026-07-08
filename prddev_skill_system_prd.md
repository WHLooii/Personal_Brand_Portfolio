# PRDDev Skill System 总 PRD 与执行规范

版本：v1.0  
日期：2026-07-05  
用途：交给 Codex / Claude Code 按阶段创建、维护并使用 `prddev-*` skill 体系。  
核心约束：每次会话只执行一个 skill 或一个最小交付项，完成后停下、记录、再进入下一个。

---

## 1. 背景

当前开发流程依赖 Codex 或 Claude Code 辅助推进产品。从调研、知识库沉淀、项目选择、技术路线、PRD、基座搭建，到后续单功能增量开发，整个流程具有明显的阶段性。

问题在于：如果每次都把完整背景重新告诉 AI agent，成本高且容易遗漏；如果直接让 agent 根据完整 PRD 开发，又容易一次性实现过多功能，造成架构失控、代码不可维护、产品方向偏移、后续修正成本升高。

因此需要设计一套统一前缀的 skill 体系，将整个产品开发流程拆成多个边界清晰的可复用 skill，并通过路由规则控制每次会话只做一个阶段或一个功能增量。

---

## 2. 总目标

构建一套 `prddev-*` skill 体系，用于支撑 PRD 驱动的渐进式产品开发流程。

这套体系要做到：

1. 让 Codex / Claude Code 能够判断当前项目处于哪个阶段。
2. 让每个阶段都有明确输入、输出、边界和完成标准。
3. 让调研、知识库、项目机会、技术路线、PRD、基座、增量开发、状态同步彼此解耦。
4. 让 agent 不会因为看到完整 PRD 就一次性开发大量功能。
5. 让每次开发会话只完成一个最小功能增量。
6. 让每轮完成后自动更新状态文档，便于下一轮恢复上下文。
7. 让该体系可以同时适配 Codex 和 Claude Code。

一句话目标：

> PRD 定义产品最终形态，技术路线定义实现方向，backlog 定义推进路径，每次会话只完成一个可验证的小步增量。

---

## 3. 非目标

本 PRD 不要求一次性生成所有 skill。

本 PRD 不要求一次性创建完整产品。

本 PRD 不要求把所有流程塞进一个巨大 skill。

本 PRD 不要求 agent 自动连续执行多个阶段。

本 PRD 不要求在 skill 创建阶段实现任何业务项目功能。

本 PRD 不要求为每个微动作拆 skill，例如“读取 PRD skill”“运行测试 skill”“更新日志 skill”。这些动作应属于对应阶段 skill 的内部步骤。

---

## 4. 核心原则

### 4.1 一个前缀，多 skill

统一前缀：

```text
prddev-
```

含义：

```text
PRD-driven development
```

即：PRD 驱动的渐进式开发。

### 4.2 一个 skill 负责一个阶段性产物

拆分原则：

```text
一个 skill = 一个阶段性任务 = 一个主要产物集合
```

正确拆分：

```text
调研与知识库
项目机会
技术路线与技术栈
PRD 与 backlog
技术基座
单功能增量开发
状态同步
```

错误拆分：

```text
读取文件
更新文件
运行测试
修改代码
提交 git
```

### 4.3 Router 只路由，不越权执行

`prddev-router` 是总控 skill，只负责判断阶段、选择下一个 skill、定义本次执行边界。

它不应该直接写代码，不应该重写 PRD，不应该创建所有 skill，不应该一次性串联多个阶段。

### 4.4 每次只执行一个 skill

用户每次只选择一个 skill 或一个 backlog item 让 Codex / Claude Code 执行。

执行完成后必须停止，并输出：

```text
完成了什么
修改了哪些文件
验证了什么
哪些相关内容没有做
下一步建议执行哪个 skill 或哪个 backlog item
```

### 4.5 PRD 是目标，不是一次性开发清单

PRD 定义最终产品形态，但每次开发不能直接照着 PRD 全量实现。

开发路径必须由 `docs/backlog.md` 控制。

### 4.6 技术路线在 PRD 与基座之前

在写开发级 PRD 或搭建技术基座前，必须先梳理当下行业主流技术路线，并基于本项目方向选择技术栈。

顺序是：

```text
选择项目
→ 技术路线与技术栈决策
→ 开发级 PRD / roadmap / backlog
→ 技术基座
→ 单功能增量开发
```

### 4.7 状态文档是上下文恢复机制

每轮工作结束后必须更新状态文档。这样下一次 agent 不需要依赖用户口头解释当前进度。

---

## 5. 总体流程

完整流程如下：

```text
1. 行业趋势与新资讯调研
2. 沉淀项目知识库
3. 罗列并评估项目机会
4. 用户选择一个项目方向
5. 梳理当下行业主流技术路线
6. 根据项目方向选择技术栈
7. 编写开发级 PRD、roadmap、backlog
8. 搭建最小技术基座
9. 每次只实现一个 backlog item
10. 周期性 checkpoint，修正文档漂移
```

对应 skill：

```text
prddev-research-kb
prddev-opportunity
prddev-tech-route
prddev-prd-roadmap
prddev-foundation
prddev-increment
prddev-checkpoint
```

当阶段不明确时，先使用：

```text
prddev-router
```

---

## 6. 最终 skill 列表

本体系最终包含 8 个 skill：

```text
prddev-router
prddev-research-kb
prddev-opportunity
prddev-tech-route
prddev-prd-roadmap
prddev-foundation
prddev-increment
prddev-checkpoint
```

不要继续拆得更细，除非未来出现长期稳定的新阶段。

---

## 7. 推荐目录结构

### 7.1 Codex 项目级 skill 目录

```text
repo-root/
  AGENTS.md
  .agents/
    skills/
      prddev-router/
        SKILL.md
      prddev-research-kb/
        SKILL.md
      prddev-opportunity/
        SKILL.md
      prddev-tech-route/
        SKILL.md
      prddev-prd-roadmap/
        SKILL.md
      prddev-foundation/
        SKILL.md
      prddev-increment/
        SKILL.md
      prddev-checkpoint/
        SKILL.md
```

### 7.2 Claude Code 项目级 skill 目录

```text
repo-root/
  CLAUDE.md
  .claude/
    skills/
      prddev-router/
        SKILL.md
      prddev-research-kb/
        SKILL.md
      prddev-opportunity/
        SKILL.md
      prddev-tech-route/
        SKILL.md
      prddev-prd-roadmap/
        SKILL.md
      prddev-foundation/
        SKILL.md
      prddev-increment/
        SKILL.md
      prddev-checkpoint/
        SKILL.md
```

### 7.3 项目文档目录

```text
docs/
  research/
  knowledge-base.md
  project-options.md
  tech-radar.md
  tech-stack-decision.md
  prd.md
  roadmap.md
  backlog.md
  architecture.md
  iteration-log.md
  decision-log.md
  testing.md
```

### 7.4 全局复用目录

如果希望所有项目共享同一套 skill，可将 skill 放到用户级目录：

```text
# Codex
$HOME/.agents/skills/prddev-router/SKILL.md
$HOME/.agents/skills/prddev-research-kb/SKILL.md
$HOME/.agents/skills/prddev-opportunity/SKILL.md
$HOME/.agents/skills/prddev-tech-route/SKILL.md
$HOME/.agents/skills/prddev-prd-roadmap/SKILL.md
$HOME/.agents/skills/prddev-foundation/SKILL.md
$HOME/.agents/skills/prddev-increment/SKILL.md
$HOME/.agents/skills/prddev-checkpoint/SKILL.md

# Claude Code
~/.claude/skills/prddev-router/SKILL.md
~/.claude/skills/prddev-research-kb/SKILL.md
~/.claude/skills/prddev-opportunity/SKILL.md
~/.claude/skills/prddev-tech-route/SKILL.md
~/.claude/skills/prddev-prd-roadmap/SKILL.md
~/.claude/skills/prddev-foundation/SKILL.md
~/.claude/skills/prddev-increment/SKILL.md
~/.claude/skills/prddev-checkpoint/SKILL.md
```

推荐策略：

```text
个人长期复用：放用户级目录
单项目定制：放项目级目录
```

---

## 8. 常驻说明文件

### 8.1 AGENTS.md / CLAUDE.md 的职责

`AGENTS.md` 和 `CLAUDE.md` 只放永久总规则，不放完整流程细节。

它们负责保证 agent 在 skill 未自动命中时也知道基本边界。

### 8.2 AGENTS.md / CLAUDE.md 推荐内容

```markdown
# PRD-driven Incremental Development

This project uses the `prddev-*` skill set.

Always follow these rules:

- The PRD defines the final product shape.
- The technical route defines the implementation direction.
- The backlog defines the development path.
- One development session must implement only one small feature increment.
- Do not implement the whole PRD at once.
- Do not combine unrelated features in one session.
- If the request is too large, split it into backlog items and implement only the smallest next increment.

Before writing a development-ready PRD, check:

- `docs/knowledge-base.md`
- `docs/project-options.md`
- `docs/tech-radar.md`
- `docs/tech-stack-decision.md`

Before building the foundation, check:

- `docs/prd.md`
- `docs/tech-stack-decision.md`
- `docs/architecture.md`

Before coding a feature, check:

- `docs/prd.md`
- `docs/architecture.md`
- `docs/backlog.md`
- `docs/iteration-log.md`

After coding, update:

- `docs/iteration-log.md`
- `docs/backlog.md`

Use `docs/decision-log.md` when product or technical direction changes.

Default routing:

- Research or trend work: use `prddev-research-kb`.
- Project ideation: use `prddev-opportunity`.
- Technical route or stack selection: use `prddev-tech-route`.
- PRD or roadmap work: use `prddev-prd-roadmap`.
- Foundation setup: use `prddev-foundation`.
- Feature development: use `prddev-increment`.
- Status recovery or progress sync: use `prddev-checkpoint`.
```

---

## 9. Skill 规格

### 9.1 prddev-router

#### 目标

判断当前项目处于哪个阶段，并路由到正确的 `prddev-*` skill。

#### description

```yaml
---
name: prddev-router
description: Route PRD-driven product work to the correct prddev-* skill. Use when the user says continue, asks what stage the project is in, or the next step is unclear. Do not implement code directly.
---
```

#### 输入

```text
docs/knowledge-base.md
docs/project-options.md
docs/tech-stack-decision.md
docs/prd.md
docs/roadmap.md
docs/backlog.md
docs/architecture.md
docs/iteration-log.md
docs/decision-log.md
```

#### 输出

```text
当前项目阶段
缺失关键文档
推荐使用的下一个 skill
本次只应执行的最小任务
本次明确不做的内容
```

#### 禁止事项

```text
不写业务代码
不创建所有 skill
不重写完整 PRD
不自动连续执行多个阶段
不直接替用户选择多个后续任务
```

#### 完成标准

```text
能明确回答：现在在哪个阶段，下一步只应该使用哪个 skill。
```

---

### 9.2 prddev-research-kb

#### 目标

调研行业趋势、竞品、新资讯、新技术范式，并将信息沉淀为项目知识库。

#### description

```yaml
---
name: prddev-research-kb
description: Research industry trends, competitors, recent news, and market signals, then condense findings into the project knowledge base. Do not write PRD or code.
---
```

#### 输入

```text
用户给出的行业、赛道、问题域或产品方向
已有 docs/knowledge-base.md
已有 docs/research/
```

#### 输出

```text
docs/research/<date>-<topic>.md
docs/knowledge-base.md
```

#### 产物内容

```text
行业趋势
竞品启发
用户痛点
可借鉴功能
技术变化
商业机会
不做什么
对本项目的判断
```

#### 禁止事项

```text
不写 PRD
不罗列大量未经筛选的资料
不开始开发
不搭建基座
```

#### 完成标准

```text
调研信息已经转化为项目可用判断，而不是原始资料堆叠。
```

---

### 9.3 prddev-opportunity

#### 目标

基于知识库罗列可做项目机会，并对候选项目进行展开和评估。

#### description

```yaml
---
name: prddev-opportunity
description: Generate and evaluate project opportunities from the knowledge base. Use for project ideation, opportunity ranking, MVP sketches, and feasibility comparison. Do not write code.
---
```

#### 输入

```text
docs/knowledge-base.md
用户偏好的方向、资源、约束
```

#### 输出

```text
docs/project-options.md
```

#### 每个项目候选需要包含

```text
项目名称
目标用户
核心痛点
核心价值
MVP 形态
技术可行性
商业可能性
风险
推荐优先级
```

#### 禁止事项

```text
不写完整 PRD
不做技术栈最终决策
不开始写代码
```

#### 完成标准

```text
用户可以从多个候选项目中选择一个进入技术路线阶段。
```

---

### 9.4 prddev-tech-route

#### 目标

在 PRD 和基座之前，梳理当下行业主流技术路线，并根据本项目方向选择技术栈。

#### description

```yaml
---
name: prddev-tech-route
description: Research current mainstream technical routes for a selected product direction, compare architecture and stack options, and choose the most suitable technology stack before PRD and foundation work. Do not write PRD or implement code.
---
```

#### 输入

```text
docs/knowledge-base.md
docs/project-options.md
用户选择的项目方向
已有 docs/tech-radar.md
已有 docs/tech-stack-decision.md
已有 docs/decision-log.md
```

#### 输出

```text
docs/tech-radar.md
docs/tech-stack-decision.md
docs/decision-log.md
```

#### 必须区分

```text
技术路线：产品应该以什么技术形态存在
技术栈：用哪些具体工具实现这条路线
```

#### 可选技术路线示例

```text
Web SaaS
Browser Extension
Desktop App
Mobile App
Local-first App
Cloud-first Multi-tenant SaaS
API-first Product
AI Agent Workflow
RAG Knowledge System
Automation Pipeline
CLI Tool
Plugin / Integration-first Product
Hybrid Route，例如 Browser Extension + Web Dashboard
```

#### 技术栈维度

```text
Frontend
Backend
Database
ORM / Data Access
Authentication
AI / LLM Integration
Vector Search / Retrieval
File Storage
Background Jobs
Deployment
Testing
Analytics / Monitoring
```

#### 禁止事项

```text
不直接写 PRD
不初始化项目
不创建基座代码
不因为当前流行就盲目选复杂技术
不加入 MVP 不需要的重型依赖
```

#### 完成标准

```text
已经选择一个 primary technical route。
已经选择 MVP 所需技术栈。
已经说明备选方案为什么不选。
已经给出 foundation 阶段应该如何落地。
```

---

### 9.5 prddev-prd-roadmap

#### 目标

基于已选项目方向和技术路线，编写开发级 PRD，并拆解 roadmap 与 backlog。

#### description

```yaml
---
name: prddev-prd-roadmap
description: Create or refine PRD, roadmap, MVP scope, and backlog from a selected project direction and technical stack decision. Do not implement the product or create the technical foundation.
---
```

#### 输入

```text
docs/knowledge-base.md
docs/project-options.md
docs/tech-stack-decision.md
用户选择的项目方向
```

#### 输出

```text
docs/prd.md
docs/roadmap.md
docs/backlog.md
```

#### PRD 应包含

```text
产品定位
目标用户
核心问题
价值主张
核心用户路径
功能模块
MVP 范围
非 MVP 范围
页面 / 接口 / 数据需求
验收标准
未来扩展方向
```

#### backlog 要求

每个 backlog item 都必须是小步、可验收、可独立推进的任务。

示例：

```text
F-001 Add project creation form
F-002 Add project list page
F-003 Add project detail page
F-004 Add saved prompt templates
```

#### 禁止事项

```text
不搭建基座
不写业务代码
不把完整 PRD 直接变成一次性开发任务
不把多个大模块合并成一个 backlog item
```

#### 完成标准

```text
PRD 定义最终形态。
roadmap 定义阶段。
backlog 定义小步开发路径。
下一步可以进入 prddev-foundation。
```

---

### 9.6 prddev-foundation

#### 目标

根据技术栈决策和 PRD 搭建最小可运行技术基座。

#### description

```yaml
---
name: prddev-foundation
description: Build or refine the minimal technical foundation for a PRD-driven project, including architecture, app shell, configuration, and validation setup. Do not implement multiple product features.
---
```

#### 输入

```text
docs/tech-stack-decision.md
docs/prd.md
docs/roadmap.md
docs/backlog.md
```

#### 输出

```text
最小可运行项目基座
docs/architecture.md
docs/testing.md
docs/iteration-log.md
```

#### 基座可包含

```text
项目初始化
目录结构
基础配置
最小 app shell
最小 routing
最小 data access pattern
基础 lint / test / build 命令
环境变量样例
架构说明
```

#### 基座不应包含

```text
完整认证系统
完整 dashboard
完整后台管理
完整支付系统
完整 AI workflow
完整 RAG 管道
多个业务功能
复杂 UI polish
超出 MVP 的提前抽象
```

#### 完成标准

```text
项目能运行。
后续功能有明确添加位置。
架构文档说明了如何扩展。
没有实现多个业务功能。
```

---

### 9.7 prddev-increment

#### 目标

正常开发阶段使用。每次只实现一个 backlog item 或一个最小功能增量。

#### description

```yaml
---
name: prddev-increment
description: Implement exactly one small backlog item or one minimal feature increment in a PRD-driven project. Use for normal coding sessions. Do not implement multiple features or the whole PRD.
---
```

#### 输入

```text
docs/prd.md
docs/architecture.md
docs/backlog.md
docs/iteration-log.md
docs/decision-log.md
docs/testing.md
```

#### 输出

```text
一个功能增量
更新 docs/backlog.md
更新 docs/iteration-log.md
必要时更新 docs/decision-log.md
```

#### 会话开始必须输出

```text
当前产品目标
当前架构基座
上一个已完成增量
本次选择的唯一增量
本次范围
本次不做什么
验收标准
```

#### 禁止事项

```text
不同时做多个 backlog item
不顺手做 UI 优化
不顺手加认证、支付、后台等大模块
不提前开发未来功能
不大规模重构
不更改产品方向而不记录
```

#### 完成标准

```text
只完成一个小功能。
相关验证已执行或记录无法执行原因。
backlog 和 iteration-log 已更新。
下一个建议增量明确。
```

---

### 9.8 prddev-checkpoint

#### 目标

同步项目状态，整理进度，修正文档漂移，帮助下一轮恢复上下文。

#### description

```yaml
---
name: prddev-checkpoint
description: Synchronize project status, backlog, iteration log, decision log, and testing notes after incremental development. Use when recovering context or summarizing progress. Do not add new features.
---
```

#### 输入

```text
docs/prd.md
docs/architecture.md
docs/backlog.md
docs/iteration-log.md
docs/decision-log.md
docs/testing.md
代码库当前状态
```

#### 输出

```text
更新 docs/iteration-log.md
更新 docs/backlog.md
更新 docs/decision-log.md
更新 docs/testing.md
当前状态摘要
下一步唯一建议
```

#### 禁止事项

```text
不新增业务功能
不重写 PRD
不重构代码
不改变技术路线
```

#### 完成标准

```text
文档状态与代码状态一致。
下一个最小增量清晰。
```

---

## 10. 路由规则

当用户请求不明确时，先调用 `prddev-router`。

明确请求时按以下规则路由：

```text
用户说“调研 / 趋势 / 竞品 / 新资讯”
=> prddev-research-kb

用户说“罗列项目 / 项目机会 / 可以做什么”
=> prddev-opportunity

用户说“技术路线 / 技术栈 / 选型 / 主流方案”
=> prddev-tech-route

用户说“写 PRD / roadmap / backlog / MVP 范围”
=> prddev-prd-roadmap

用户说“搭基座 / 初始化项目 / 架构 / 最小可运行”
=> prddev-foundation

用户说“继续开发 / 实现功能 / 下一个 backlog / F-xxx”
=> prddev-increment

用户说“总结进度 / 当前做到哪 / 更新状态 / 文档同步”
=> prddev-checkpoint
```

关键防线：

```text
如果 selected project direction 存在，但 tech-stack-decision.md 不存在，
则不允许进入开发级 PRD、foundation 或 coding。
应先执行 prddev-tech-route。
```

例外：

```text
如果用户只要求概念 PRD，可以先执行 prddev-prd-roadmap，
但必须标记技术路线未决，不得生成开发级 backlog。
```

---

## 11. Skill 创建 backlog

Codex 执行本 PRD 时，不得一次性完成所有条目。每次只执行一个编号。

### S-000 创建常驻说明层

目标：创建或更新 `AGENTS.md` 和 / 或 `CLAUDE.md`。

范围：只写常驻规则，不创建任何 skill。

输出：

```text
AGENTS.md
CLAUDE.md
```

完成后停止。

### S-001 创建 prddev-router

目标：创建 `prddev-router/SKILL.md`。

范围：只创建 router skill。

完成后停止。

### S-002 创建 prddev-research-kb

目标：创建 `prddev-research-kb/SKILL.md`。

范围：只创建 research-kb skill。

完成后停止。

### S-003 创建 prddev-opportunity

目标：创建 `prddev-opportunity/SKILL.md`。

范围：只创建 opportunity skill。

完成后停止。

### S-004 创建 prddev-tech-route

目标：创建 `prddev-tech-route/SKILL.md`。

范围：只创建 tech-route skill。

完成后停止。

### S-005 创建 prddev-prd-roadmap

目标：创建 `prddev-prd-roadmap/SKILL.md`。

范围：只创建 prd-roadmap skill。

完成后停止。

### S-006 创建 prddev-foundation

目标：创建 `prddev-foundation/SKILL.md`。

范围：只创建 foundation skill。

完成后停止。

### S-007 创建 prddev-increment

目标：创建 `prddev-increment/SKILL.md`。

范围：只创建 increment skill。

完成后停止。

### S-008 创建 prddev-checkpoint

目标：创建 `prddev-checkpoint/SKILL.md`。

范围：只创建 checkpoint skill。

完成后停止。

### S-009 创建 docs 模板

目标：创建项目文档模板。

范围：只创建 `docs/*.md` 模板，不开发业务项目。

输出：

```text
docs/research/.gitkeep
docs/knowledge-base.md
docs/project-options.md
docs/tech-radar.md
docs/tech-stack-decision.md
docs/prd.md
docs/roadmap.md
docs/backlog.md
docs/architecture.md
docs/iteration-log.md
docs/decision-log.md
docs/testing.md
```

完成后停止。

---

## 12. Codex 执行提示词模板

### 12.1 创建常驻说明层

```text
请读取 `prddev_skill_system_prd.md`。
本次只执行 S-000：创建常驻说明层。
只创建或更新 AGENTS.md 和 CLAUDE.md。
不要创建任何 skill。
不要执行 S-001 或后续任务。
完成后列出修改文件、验证结果和下一步建议。
```

### 12.2 创建某一个 skill

```text
请读取 `prddev_skill_system_prd.md`。
本次只执行 S-004：创建 prddev-tech-route skill。
只创建这个 skill 的 SKILL.md。
不要创建其他 prddev-* skill。
不要创建 docs 模板。
不要实现业务项目。
完成后列出修改文件、验证结果和下一步建议。
```

### 12.3 创建 docs 模板

```text
请读取 `prddev_skill_system_prd.md`。
本次只执行 S-009：创建 docs 模板。
不要修改任何 skill。
不要实现业务项目。
完成后列出修改文件、验证结果和下一步建议。
```

### 12.4 使用某个 skill 推进真实项目

```text
使用 prddev-increment。
请读取 docs/prd.md、docs/architecture.md、docs/backlog.md、docs/iteration-log.md。
本次只实现 backlog 中的 F-xxx。
不要实现其他功能。
完成后更新 backlog 和 iteration-log。
```

---

## 13. SKILL.md 质量标准

每个 `SKILL.md` 必须满足：

```text
有 YAML frontmatter
name 与目录名一致
description 简洁、边界清晰、触发词靠前
正文包含 Purpose / Inputs / Outputs / Steps / Do Not / Done Criteria
明确禁止越权执行
明确最终响应格式
```

每个 description 应避免：

```text
过长
过泛
多个阶段混在一起
看起来什么都能做
缺少 “Do not ...” 边界
```

---

## 14. 验收标准

本体系完成后，应满足以下验收标准。

### 14.1 结构验收

```text
AGENTS.md 或 CLAUDE.md 存在
8 个 prddev-* skill 目录存在
每个 skill 目录下有 SKILL.md
每个 SKILL.md frontmatter 有 name 和 description
docs 模板存在
```

### 14.2 行为验收

```text
router 能判断当前阶段
research-kb 不会写 PRD 或代码
opportunity 不会直接开始开发
tech-route 不会初始化项目
prd-roadmap 不会写代码
foundation 不会实现多个业务功能
increment 每次只做一个 backlog item
checkpoint 不会新增功能
```

### 14.3 防失控验收

```text
面对“帮我把整个 PRD 做完”，agent 会拆 backlog，只执行一个最小增量。
面对“继续开发”，agent 会先读取状态文档，再选择一个功能。
面对“搭完整系统”，agent 会限制为最小基座。
面对“顺便加一下 X”，agent 会把 X 记录为后续 backlog，而不是本次实现。
```

---

## 15. 风险与控制

### 风险 1：skill 过多导致匹配混乱

控制：维持 8 个 skill，不继续拆微任务。description 保持短、准、边界清晰。

### 风险 2：router 越权执行

控制：router 只输出阶段判断和下一步 skill，不直接修改业务代码。

### 风险 3：PRD 被误认为一次性开发清单

控制：在所有开发相关 skill 中重复声明：PRD 是目标，backlog 才是执行路径。

### 风险 4：技术栈选择过重

控制：`prddev-tech-route` 必须区分 required now 与 deferred，并记录替代方案。

### 风险 5：文档和代码漂移

控制：每次 increment 结束更新 iteration-log 和 backlog；每几轮调用 checkpoint。

---

## 16. 推荐执行顺序

建议第一次构建 skill 体系时按以下顺序执行：

```text
S-000 创建 AGENTS.md / CLAUDE.md
S-001 创建 prddev-router
S-004 创建 prddev-tech-route
S-007 创建 prddev-increment
S-005 创建 prddev-prd-roadmap
S-006 创建 prddev-foundation
S-008 创建 prddev-checkpoint
S-002 创建 prddev-research-kb
S-003 创建 prddev-opportunity
S-009 创建 docs 模板
```

为什么不是按业务流程顺序？

因为实际使用中，最先需要防失控的是：

```text
常驻规则
router
tech-route
increment
```

它们决定 agent 是否会乱跳阶段、乱选技术栈、一次性开发过多功能。

---

## 17. 后续使用建议

### 17.1 新项目从 0 到 1

```text
prddev-research-kb
→ prddev-opportunity
→ 用户选择项目
→ prddev-tech-route
→ prddev-prd-roadmap
→ prddev-foundation
→ prddev-increment
→ prddev-checkpoint
```

### 17.2 已经有想法但没有技术路线

```text
prddev-tech-route
→ prddev-prd-roadmap
→ prddev-foundation
```

### 17.3 已经有 PRD 和基座

```text
prddev-router
→ prddev-increment
→ prddev-checkpoint
```

### 17.4 每次开发会话的默认提示

```text
使用 prddev-increment。
读取项目文档，判断当前进度。
本次只选择一个最小功能增量进行开发。
不要实现多个功能。
完成后更新 backlog、iteration-log 和必要的 decision-log。
```

---

## 18. 参考资料

以下资料用于校准本 PRD 中关于 Codex / Claude Code skill 机制的实现位置和触发方式。实际落地时若工具版本变化，以官方文档为准。

1. OpenAI Codex Agent Skills: https://developers.openai.com/codex/skills
2. OpenAI Codex AGENTS.md: https://developers.openai.com/codex/guides/agents-md
3. Anthropic Claude Code Skills: https://code.claude.com/docs/en/skills
4. Anthropic Claude Code filesystem configuration: https://code.claude.com/docs/en/agent-sdk/overview

---

## 19. 给 Codex 的最高优先级执行声明

当 Codex 读取本文档时，必须遵守：

```text
不要一次性执行所有 S-xxx。
不要一次性创建所有 skill。
不要因为本文档完整就全量实现。
等待用户明确选择一个 S-xxx。
如果用户只说“继续”，先执行 router 判断，不要自动开发。
每次完成一个 S-xxx 后停止。
```

这条规则优先于本文档中任何具体实现内容。
