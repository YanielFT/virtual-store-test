import { z } from "zod";

export const ProductoSchema = () =>
  z.object({
    id: z.number().optional(),
    code: z.string().min(1, {
      message: "The field is required",
    }),
    productName: z.string().min(1, {
      message: "The field is required",
    }),
    type: z.string(),
    downloadLink: z.string().optional(),
    deliveryCost: z.number().optional(),
  });
