import { z } from 'zod'

const envSchema = z.object({
  DB_HOST: z.string().min(1),
  DB_PORT: z.coerce.number().gte(0).lte(65535),
  DB_USER: z.string().min(4),
  DB_PASSWORD: z.string().min(1),
  DB_NAME: z.string().min(1),
})

export const env = envSchema.parse(process.env)
