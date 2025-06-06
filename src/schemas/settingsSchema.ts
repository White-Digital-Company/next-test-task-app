import { z } from 'zod';

export const SettingsSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  password: z
    .string()
    .min(4, 'Password must be at least 4 characters')
    .max(12, 'Password must be at most 12 characters')
    .optional()
    .or(z.literal('')),
});

export type SettingsFormData = z.infer<typeof SettingsSchema>;
