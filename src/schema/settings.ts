import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core"

export const settings = pgTable("settings", {
  id: serial("id").primaryKey(),
  storeName: varchar("store_name", { length: 256 }),
  email: varchar("email", { length: 256 }),
  phone: varchar("phone", { length: 256 }),
  instagram: varchar("instagram", { length: 256 }),
  facebook: varchar("facebook", { length: 256 }),
  tiktok: varchar("tiktok", { length: 256 }),
  youtube: varchar("youtube", { length: 256 }),
  openingHours: text("opening_hours"),
})
