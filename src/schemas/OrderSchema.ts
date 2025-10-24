// src/schemas/InvestmentSchema.ts
import { z } from "zod";
import { StockType } from "../types/StockType";

export const OrderSchema = z.object({
  id: z.string().min(1, "id is required"),
  userID: z.string().nonempty().nonoptional(),
  stockName: z.string().nonempty().nonoptional(),
  amount: z.number().nonnegative().min(5, "5 is the minimun amount accepted"),
  shares: z.number().nonnegative().min(0.04, "0.05 is the minimun share accepted"),
  priceBought : z.number().nonnegative().nonoptional(),
  expectedGrowth: z.number().nonnegative().nonoptional(),
  openedAt: z.date(),
  closedAt: z.date().nullable(),
  type: z.enum(StockType),
});

export type OrderFormData = z.infer<typeof OrderSchema>;
