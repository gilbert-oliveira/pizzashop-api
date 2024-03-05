import mysql from 'mysql2/promise'
import chalk from 'chalk'

import { env } from '../env'
import { drizzle } from 'drizzle-orm/mysql2'
import { migrate } from 'drizzle-orm/mysql2/migrator'

export const connection = await mysql.createConnection({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  connectionLimit: 1,
})
export const db = drizzle(connection)

await migrate(db, { migrationsFolder: './drizzle' })

console.log(chalk.greenBright('Migrations applied successfully!'))

await connection.end()

process.exit()
