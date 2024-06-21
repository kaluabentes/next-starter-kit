import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core"

export const collections = pgTable("collections", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  description: text("description"),
  image: text("image"),
  metaTitle: varchar("metaTitle", { length: 256 }),
  metaDescription: text("metaDescription"),
  slug: varchar("metaTitle", { length: 256 }),
})
