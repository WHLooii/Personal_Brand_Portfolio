export const capabilityLabels = {
  business_judgment: "商业 / 产品判断",
  ai_workflow: "AI Workflow 设计",
  prototype_builder: "原型构建",
  engineering_background: "工程背景",
  product_iteration: "产品迭代",
  technical_communication: "技术沟通"
} as const;

export const statusLabels = {
  concept: "概念",
  prototype: "原型",
  mvp: "MVP",
  launched: "已上线",
  archived: "已归档"
} as const;

export const ownerLabels = {
  ai: "AI",
  human: "人",
  system: "系统"
} as const;

export function getCapabilityLabel(capability: keyof typeof capabilityLabels) {
  return capabilityLabels[capability];
}

export function getStatusLabel(status: keyof typeof statusLabels) {
  return statusLabels[status];
}

export function getOwnerLabel(owner: keyof typeof ownerLabels) {
  return ownerLabels[owner];
}
