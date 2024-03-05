import { createId } from '@paralleldrive/cuid2'
import {
  mysqlEnum,
  mysqlTable,
  varchar,
  timestamp,
} from 'drizzle-orm/mysql-core'

export const userRoleEnum = mysqlEnum('user_roles', ['manager', 'customer'])

export const users = mysqlTable('users', {
  id: varchar('id', { length: 255 })
    .$defaultFn(() => createId())
    .primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  phone: varchar('phone', { length: 11 }),
  role: userRoleEnum.default('customer').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})
