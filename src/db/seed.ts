import { faker } from '@faker-js/faker'
import { users, restaurants } from './schema'
import { db } from './connection'
import chalk from 'chalk'
import { createId } from '@paralleldrive/cuid2'

await db.delete(users)
await db.delete(restaurants)

console.log(chalk.yellow('✔️  Database reset!'))

/**
 * Create customers
 */
await db.insert(users).values([
  {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: 'customer',
  },
  {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: 'customer',
  },
])

console.log(chalk.yellow('✔️  Created customers!'))

/**
 * Create manager
 */
const managerId = createId()

await db.insert(users).values([
  {
    id: managerId,
    name: faker.person.fullName(),
    email: 'admin@admin.com',
    role: 'manager',
  },
])

console.log(chalk.yellow('✔️  Created manager! ID:', chalk.white(managerId)))

/**
 * Create restaurant
 */
await db.insert(restaurants).values([
  {
    name: faker.company.name(),
    description: faker.lorem.paragraph(),
    managerId,
  },
])

console.log(chalk.greenBright('Database seeded successfully!'))

process.exit()
