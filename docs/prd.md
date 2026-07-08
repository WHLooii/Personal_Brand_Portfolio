# 产品需求文档

用途：由 `prddev-prd-roadmap` 定义产品最终形态、MVP 范围和验收标准。PRD 是目标，不是一次性开发清单。

本文件是完整项目身份的唯一详细来源。新项目使用启动包时，`AGENTS.md` / `CLAUDE.md` 只保留 1-3 行快速介绍，产品定位、目标用户、范围边界、MVP 和验收标准必须在本文件维护。

## 文档状态

- 产品名称：AI Native Product Builder Portfolio
- selected project direction：个人 AI 产品能力作品集 / AI 产品案例库
- 依赖技术栈决策：`docs/tech-stack-decision.md`（已决：Astro-powered Editorial Product Experience System）
- 依赖视觉系统护栏：`docs/visual-system.md`
- 状态：概念 PRD 已完成；技术路线与视觉系统护栏已同步；最小技术基座已完成；首页当前公开阶段已收敛为 AIPM 方法样本优先
- 最后更新：2026-07-08

## 产品定位

- 一句话定位：面向 AI PM / AI 产品岗位招聘方、潜在合作伙伴和客户的 AI Native Product Builder Portfolio，用案例展示橘子如何判断 AI 产品机会、设计 Agent/RAG/Copilot 工作流，并将想法快速落地为可运行原型。
- 产品边界：以 AI 产品案例库为核心，重点呈现 Product Judgment、AI Workflow Design、Prototype Execution 和 Evaluation，而不是围绕个人履历、技能标签或视觉包装展开。
- 不做什么：
  - 不做普通个人主页。
  - 不做技能 Badge 墙或技术栈罗列页。
  - 不做大面积渐变、毛玻璃、AI 科幻背景、机器人插画、3D 元素、炫酷动画、Web3 风格或模板化 SaaS 宣传页。
  - 不用空泛自我介绍表达“热爱 AI”或“熟悉 ChatGPT 等工具”。
  - 不跳过 `prddev-foundation` 直接进入完整页面开发、组件开发、大量 runtime content 创建或复杂 Demo。

## 目标用户

| 用户类型 | 场景 | 需求强度 | 备注 |
| --- | --- | --- | --- |
| AI PM / AI 产品岗位招聘方 | 快速判断候选人是否具备 AI 产品判断、工作流设计和原型落地能力 | 高 | 重点看案例中的问题判断、AI 边界、人机协作和验证方式 |
| 潜在合作伙伴 / 客户 | 评估橘子是否能把业务问题转成可验证的 AI 产品原型 | 高 | 重点看方法论、交付路径、案例质量和可信度 |
| 同领域产品 / 创业 / AI Workflow 从业者 | 理解橘子的产品思考方式和协作风格 | 中 | 可作为合作、交流或内容传播入口 |

## 核心问题

- 当前问题：传统个人作品集常展示页面、技术栈或经历，但很难证明一个人是否具备“判断什么问题值得 AI 化、如何让 AI 进入业务流程、如何控制 AI 输出质量、如何用原型验证假设”的能力。
- 现有替代方案：简历、普通个人主页、项目截图墙、GitHub 仓库、技术博客或作品集模板。
- 为什么现在值得解决：AI PM 和 AI Native 产品岗位更重视产品判断、工作流设计、人机协作和原型验证；作品集需要从“我会什么工具”转向“我如何把 AI 放进真实产品问题里”。

## 价值主张

- 对用户的核心价值：让访问者在较短时间内判断橘子是否具备 AI 产品机会识别、Agent/RAG/Copilot 流程设计、Human-in-the-loop 控制和原型执行能力。
- 对业务的核心价值：将橘子的个人品牌从“会用 AI 工具的人”升级为“能定义、设计并验证 AI 产品的人”，提高求职、合作和客户沟通的转化效率。
- 可验证指标：
  - 访问者能准确复述橘子的定位：AI Native Product Builder。
  - 访问者能从案例中看到 AI Value、AI Boundary、Human-in-the-loop 和 Evaluation。
  - 访问者能找到至少一个可深入阅读的案例，并理解问题、工作流、原型和下一步。

## 核心用户路径

1. 访问 Home，先理解橘子的定位不是普通个人主页，而是 AI 产品案例库。
2. 浏览 What I Build / 能力样本，判断她如何拆解 AI 产品机会、控制 AI 边界并把判断落成原型。
3. 进入某个 Case Study，按 Overview、Problem、Product Judgment、AI Workflow、Prototype、Evaluation、Next Iteration 阅读完整案例。
4. 通过 Product Building Process / Capability Map 理解她的方法论和协作方式。
5. 通过 About / Contact 发起招聘、合作或进一步沟通。

## 功能模块

| 模块 | 目标 | MVP 是否包含 | 验收标准 |
| --- | --- | --- | --- |
| Home Hero | 第一屏明确定位和作品集叙事 | 是 | 访问者能在 10 秒内理解这是 AI Native Product Builder Portfolio，而不是普通个人主页 |
| What I Build | 概括橘子构建的 AI 产品类型 | 是 | 清楚表达 AI Opportunity、Workflow、Prototype 三类能力 |
| 能力样本 / Method Sample | 展示一个完整的 AIPM 判断链路样本 | 是 | 当前公开阶段先展示 1 个横向重点样本卡，覆盖 Problem、Product Judgment、AI Workflow、Prototype、Evaluation；不放多个空项目占位卡 |
| Product Building Process | 展示从问题判断到原型验证的方法 | 是 | 流程包含 Problem、AI Fit、Workflow、Prototype、Evaluation |
| Capability Map | 系统化呈现能力结构 | 是 | 不以技能 Badge 为主，而以判断、工作流、原型、评估等能力域组织 |
| Projects Index | 承载所有案例入口 | 是 | 访问者可从列表进入单个 Case Study |
| Case Study Template | 统一案例结构 | 是 | 每个案例包含 Overview、Problem、Product Judgment、AI Workflow、Prototype、Evaluation、Next Iteration |
| About / Contact | 说明背景并提供行动入口 | 是 | 不写空泛自我介绍，重点连接产品定位、工程背景和合作入口 |
| Live Demo / 可运行原型嵌入 | 展示真实交互能力 | 延后 | 在案例内容和部署策略明确后逐个加入 |
| 内容管理系统 | 降低新增案例成本 | 延后 | V1 采用 Astro Content Collections + MDX + Zod schema 管理内容，不做 CMS 或在线编辑器 |

## MVP 范围

- 必须包含：
  - Home 基础信息架构：Hero、What I Build、能力样本 / Method Sample、Product Building Process、Capability Map、About、Contact。
  - Projects 列表页。
  - 统一 Case Study 内容模板。
  - 项目数据模型草案，覆盖 Overview、Problem、Product Judgment、AI Workflow、Prototype、Evaluation、Next Iteration。
  - 初始项目池：TalentSignal AI、Ecommerce Review Copilot、AI PM Judgment Coach、JD Research Analyzer、Unity Optoelectronic Learning System；当前首页公开阶段先重点展示 Ecommerce Review Copilot 的方法样本。
- 可以延后：
  - 每个项目的完整内容填充。
  - 可运行 Demo 嵌入。
  - 高级 SEO、性能优化、分析埋点。
  - 自动化内容管理后台。
- 明确不做：
  - 不一次性生成最终网站。
  - 不在同一轮完成所有案例。
  - 不做复杂动画、3D、AI 科幻视觉或大面积渐变。
  - 不把技术栈展示作为主叙事。

## 视觉与体验边界

- 视觉系统依据：`docs/visual-system.md`。
- 视觉原则：视觉表现力不是装饰，而是产品判断、信息组织和 AI Workflow 表达能力的一部分。
- 视觉气质：Calm Intelligence、Structured Builder、Premium Technical Editorial。
- 视觉实现必须服务内容理解，重点呈现 Product Judgment、AI Workflow、Decision Matrix、Workflow Diagram、Architecture Block、Capability Map 和 Evaluation。
- 动效用于引导注意力，不用于炫技；V1 以 CSS micro-interactions、Astro View Transitions 和少量 React Islands 为边界。
- 页面、组件和视觉增量必须遵守 `docs/visual-system.md` 的色彩、Typography、Layout、Component、Motion、Accessibility、Performance、Visual QA Checklist 和 Anti-patterns。

## 页面 / 接口 / 数据需求

### 页面

| 页面 | 用户目标 | 关键元素 |
| --- | --- | --- |
| Home | 快速理解橘子的 AI 产品构建定位和方法样本 | Hero、What I Build、能力样本 / Method Sample、Process、Capability Map、About、Contact |
| Projects | 浏览所有 AI 产品案例 | 项目列表、项目定位、能力标签、状态、入口 |
| Case Study Detail | 深入理解单个项目的判断、工作流、原型和评估 | Overview、Problem、Product Judgment、AI Workflow、Prototype、Evaluation、Next Iteration |

### 接口

| 接口 | 用途 | 输入 | 输出 |
| --- | --- | --- | --- |
| 暂无后端接口 | V1 以静态内容站为主体 | 无 | Astro 构建生成 Home、Projects、Case Study Detail 等静态页面；单个 Demo 如需接口，未来单独评估 |

### 数据

| 数据对象 | 字段 | 用途 | 备注 |
| --- | --- | --- | --- |
| Project | id、name、summary、positioning、audience、role、status、capabilities、caseStudySlug | 支撑 Projects 列表和 Home 案例卡片 | V1 按 Astro Content Collections + MDX + Zod schema 维护 |
| CaseStudy | overview、problem、productJudgment、workflow、prototype、evaluation、nextIteration | 支撑统一案例详情页 | 未来每个项目按同一模板维护，并遵守 `docs/case-study-template-schema.md` |
| WorkflowStep | label、description、input、processing、output、humanRole | 展示 Agent/RAG/Copilot 工作流 | 可用于流程图或结构化 section |
| EvaluationMetric | name、target、current、evidence | 展示产品指标和 AI 输出质量 | 初期允许为空或待验证 |
| ContactLink | label、href、purpose | 支撑联系入口 | 可包含邮箱、社媒、作品链接等 |

## 验收标准

| 能力 | 验收方式 | 通过标准 |
| --- | --- | --- |
| 定位清晰 | 阅读 Home 第一屏和案例入口 | 访问者能理解这是 AI 产品案例库，而不是普通个人主页 |
| 产品判断可见 | 阅读任一完整 Case Study | 能看到为什么这个问题值得解决、为什么适合 AI、AI 边界在哪里、人如何参与 |
| 工作流设计可见 | 阅读 AI Workflow 模块 | 能看到 Input、AI Processing、Reasoning / Retrieval、Human Review、Output、Feedback |
| 原型执行可信 | 阅读 Prototype 模块 | 能看到页面、用户流程、核心交互或可运行 Demo 证据 |
| 视觉方向克制 | 视觉检查 | 符合 `docs/visual-system.md`：极简、清晰、系统化、产品感、技术可信、文档化，不使用禁用视觉风格 |
| 渐进式开发合规 | 检查 iteration-log / backlog | 每轮只完成一个可验证小增量，未一次性生成完整网站 |

## 未来扩展方向

- 为每个重点项目补齐完整 Case Study。
- 将可运行 Demo 或交互原型逐步嵌入对应案例。
- 在 Astro Content Collections + MDX + Zod schema 基础上优化内容维护体验，让新增案例不需要重写页面。
- 增加 SEO、Open Graph、站点地图和部署监控。
- 根据招聘或客户反馈优化案例排序和叙事密度。
