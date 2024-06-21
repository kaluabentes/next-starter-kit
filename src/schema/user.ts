import {
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core"

export const userTypeEnum = pgEnum("type", ["user", "admin"])

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  type: userTypeEnum("type"),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
})

export const userAddresses = pgTable("userAddresses", {
  id: serial("id").primaryKey(),
  name: text("name"),
  phone: text("phone").notNull(),
  zipcode: varchar("zipcode", { length: 256 }),
  street: varchar("street", { length: 256 }),
  number: varchar("number", { length: 256 }),
  neighborhood: varchar("neighborhood", { length: 256 }),
  city: varchar("city", { length: 256 }),
  state: varchar("state", { length: 256 }),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
})
