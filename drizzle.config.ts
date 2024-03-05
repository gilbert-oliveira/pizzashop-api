import type { Config } from 'drizzle-kit'
import { env } from './src/env'

export default {
  schema: './src/db/schema/index.ts',
  out: './drizzle',
  driver: 'mysql2',
  dbCredentials: {
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
  },
} satisfies Config
