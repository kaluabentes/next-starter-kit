import {
  boolean,
  integer,
  numeric,
  pgTable,
  serial,
  text,
  varchar,
} from "drizzle-orm/pg-core"

import { collections } from "./collections"

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  description: text("description"),
  price: numeric("price"),
  promotionalPrice: numeric("price"),
  isActive: boolean("is_active"),
  metaTitle: varchar("meta_title", { length: 256 }),
  metaDescription: text("meta_description"),
  slug: varchar("meta_title", { length: 256 }),
  collectionId: integer("collection_id").references(() => collections.id),
})

export const productVariants = pgTable("productVariants", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  productId: integer("product_id").references(() => products.id),
})

export const productVariantOptions = pgTable("productVariantOptions", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  price: numeric("price"),
  promotionalPrice: numeric("promotional_price"),
  variantId: integer("variant_id").references(() => productVariants.id),
  imageId: integer("image_id").references(() => productVariants.id),
})

export const productImages = pgTable("productImages", {
  id: serial("id").primaryKey(),
  order: integer("order"),
  url: text("url"),
  productId: integer("product_id").references(() => products.id),
})

export const productReviews = pgTable("productReviews", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  content: text("content"),
  image: text("image"),
  rating: integer("rating"),
  productId: integer("product_id").references(() => products.id),
})
