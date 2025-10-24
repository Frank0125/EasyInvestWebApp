import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  balance: z.number().nonnegative(),
  earnings: z.number(),
  totalInvested: z.number(),
});

export type User = z.infer<typeof UserSchema>;