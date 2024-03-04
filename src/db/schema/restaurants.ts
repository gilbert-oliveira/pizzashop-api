import { text, timestamp, mysqlTable } from "drizzle-orm/mysql-core"
import { createId } from '@paralleldrive/cuid2'

export const restaurant = mysqlTable("restaurans", {
  id: text("id").$defaultFn(() => createId()).primaryKey(),
  name: text("email").notNull().unique(),
  description: text("description"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
})
