import {
  integer,
  numeric,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core"

import { products, productVariants } from "./products"
import { users } from "./user"

export const statusEnum = pgEnum("status", [
  "pending",
  "processing",
  "shipped",
  "delivered",
  "canceled",
  "returned",
  "failed",
])

export const paymentMethodEnum = pgEnum("paymentMethod", [
  "credit_card",
  "pix",
  "bank_slip",
])

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  userName: varchar("userName", { length: 256 }),
  shippingAddress: text("shipping_address"),
  status: statusEnum("status").default("pending"),
  totalPrice: numeric("price"),
  paymentMethod: statusEnum("payment_method"),
  trackingCode: varchar("tracking_code", { length: 256 }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  shippedAt: timestamp("shipped_at").defaultNow(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "set null" }),
})

export const orderItems = pgTable("orderItems", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  price: numeric("price"),
  quantity: integer("quantity"),
  variant: varchar("variant", { length: 256 }),
  productId: integer("product_id").references(() => products.id),
  variantId: integer("variant_id").references(() => productVariants.id),
})
