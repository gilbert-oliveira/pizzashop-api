import { text, timestamp, mysqlTable, mysqlEnum } from 'drizzle-orm/mysql-core'
import { createId } from '@paralleldrive/cuid2'

export const userRoleEnum = mysqlEnum('user_roles', ['manager', 'customer'])

export const users = mysqlTable('users', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  name: text('email').notNull().unique(),
  phone: text('phone'),
  role: userRoleEnum.default('customer').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})
