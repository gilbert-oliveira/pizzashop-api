import { text, timestamp, mysqlTable } from 'drizzle-orm/mysql-core'
import { createId } from '@paralleldrive/cuid2'
import { users } from './users'
import { relations } from 'drizzle-orm'

export const restaurants = mysqlTable('restaurans', {
  id: text('id')
    .$defaultFn(() => createId())
    .primaryKey(),
  name: text('email').notNull().unique(),
  description: text('description'),
  managerId: text('manager_id').references(() => users.id, {
    onDelete: 'set null',
  }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})

export const restaurantsRelations = relations(restaurants, ({ one }) => {
  return {
    manager: one(users, {
      fields: [restaurants.managerId],
      references: [users.id],
      relationName: 'restaurant_manager',
    }),
  }
})
