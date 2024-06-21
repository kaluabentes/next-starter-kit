import { boolean, pgTable, serial, text, varchar } from "drizzle-orm/pg-core"

export const pages = pgTable("pages", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }),
  content: text("content"),
  isActive: boolean("is_active"),
  metaTitle: varchar("meta_title", { length: 256 }),
  metaDescription: text("meta_description"),
  slug: varchar("slug", { length: 256 }),
})
