import { createId } from '@paralleldrive/cuid2'
import { mysqlTable, varchar, timestamp } from 'drizzle-orm/mysql-core'
import { relations } from 'drizzle-orm'
import { users } from './users'

export const restaurants = mysqlTable('restaurants', {
  id: varchar('id', { length: 255 })
    .$defaultFn(() => createId())
    .primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: varchar('description', { length: 255 }),
  managerId: varchar('manager_id', { length: 255 }).references(() => users.id, {
    onDelete: 'set null',
  }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

export const restaurantsRelations = relations(restaurants, ({ one, many }) => ({
  manager: one(users, {
    fields: [restaurants.managerId],
    references: [users.id],
    relationName: 'restaurantManager',
  }),
}))
