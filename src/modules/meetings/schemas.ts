import z from "zod";

export const meetingsInsertSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  agentId: z.string().min(1, { message: "Agents are required" }),
});

export const meetingsUptadeSchema = meetingsInsertSchema.extend({
  id: z.string().min(1, { message: "Id is required" }),
});
