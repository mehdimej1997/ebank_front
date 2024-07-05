import { z } from 'zod';

export const AccountOperationSchema = z.object({
  id: z.string(),
  amount: z.number(),
  operationDate: z.date(),
  type: z.string(),
  description: z.string(),
});

export const OperationSchema = z.object({
  accountId: z.string(),
  balance: z.number(),
  currentPage: z.number(),
  totalPages: z.number(),
  pageSize: z.number(),
  accountOperationDTOS: z.array(AccountOperationSchema),
});

export type OperationDto = z.infer<typeof OperationSchema>;
export type AccountOperationDto = z.infer<typeof AccountOperationSchema>;
