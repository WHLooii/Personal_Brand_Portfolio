import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const status = z.enum(["concept", "prototype", "mvp", "launched", "archived"]);

const capability = z.enum([
  "business_judgment",
  "ai_workflow",
  "prototype_builder",
  "engineering_background",
  "product_iteration",
  "technical_communication"
]);

const textList = z.array(z.string()).default([]);

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    meta: z.object({
      slug: z.string(),
      visibility: z.enum(["featured", "standard", "archived"]),
      priority: z.number().int(),
      last_updated: z.string()
    }),
    basic: z.object({
      title: z.string(),
      tagline: z.string(),
      category: z.string(),
      user: z.string(),
      role: z.string(),
      timeline: z.string(),
      status,
      tech_stack_summary: textList
    }),
    brand_evidence: z.object({
      primary_capability: capability,
      secondary_capabilities: z.array(capability).default([]),
      proof_statement: z.string()
    }),
    context: z.object({
      background: z.string(),
      target_user: z.string(),
      current_workflow: z.string(),
      problem: z.string(),
      user_pain_points: textList
    }),
    product_judgment: z.object({
      why_ai: z.string(),
      ai_opportunity: z.string(),
      ai_boundary: z.array(
        z.object({
          task: z.string(),
          ai_can_do: z.string(),
          human_must_do: z.string()
        })
      ),
      human_in_the_loop: z.array(
        z.object({
          step: z.string(),
          reason: z.string()
        })
      ),
      non_goals: textList
    }),
    product: z.object({
      solution: z.string(),
      core_features: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
          user_value: z.string()
        })
      ),
      user_flow: z.array(
        z.object({
          step: z.string(),
          description: z.string()
        })
      )
    }),
    ai_design: z.object({
      ai_role: z.string(),
      workflow_summary: z.string(),
      agent_workflow: z.array(
        z.object({
          step: z.string(),
          input: z.string(),
          process: z.string(),
          output: z.string(),
          owner: z.enum(["ai", "human", "system"])
        })
      ),
      prompt_strategy: z.string(),
      context_strategy: z.string(),
      evaluation_method: z.string()
    }),
    technical: z.object({
      architecture: z.string(),
      data_flow: z.string(),
      tech_stack: z.object({
        frontend: textList,
        backend: textList,
        ai: textList,
        database: textList,
        deployment: textList
      }),
      implementation_notes: textList,
      tradeoffs: z.array(
        z.object({
          decision: z.string(),
          reason: z.string(),
          rejected_alternative: z.string()
        })
      )
    }),
    evaluation: z.object({
      product_metrics: z.array(
        z.object({
          name: z.string(),
          definition: z.string(),
          target: z.string()
        })
      ),
      ai_metrics: z.array(
        z.object({
          name: z.string(),
          definition: z.string(),
          target: z.string()
        })
      ),
      validation_status: z.string()
    }),
    outcome: z.object({
      demo_link: z.string(),
      github_link: z.string(),
      screenshots: z.array(
        z.object({
          path: z.string(),
          caption: z.string()
        })
      ),
      impact: z.string()
    }),
    reflection: z.object({
      challenges: textList,
      product_decisions: textList,
      limitations: textList,
      future_iterations: textList
    })
  })
});

export const collections = { projects };
