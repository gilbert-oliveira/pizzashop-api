import mysql from 'mysql2/promise'
import { env } from '../env'
import { drizzle } from 'drizzle-orm/mysql2'

export const pollConnection = await mysql.createPool({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
})

export const db = drizzle(pollConnection)
