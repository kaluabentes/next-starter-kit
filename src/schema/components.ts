import { integer, pgTable, serial, text } from "drizzle-orm/pg-core"

import { collections } from "./collections"

export const carouselImages = pgTable("carouselImages", {
  id: serial("id").primaryKey(),
  image: text("image"),
  mobileImage: text("mobile_image"),
  path: text("path"),
})

export const featuredCollections = pgTable("featuredCollections", {
  id: serial("id").primaryKey(),
  collectionId: integer("collection_id").references(() => collections.id),
  maxItems: integer("max_items"),
})

export const banner = pgTable("banner", {
  id: serial("id").primaryKey(),
  image: text("image"),
  mobileImage: text("mobile_image"),
  path: text("path"),
})

export const about = pgTable("about", {
  id: serial("id").primaryKey(),
  image: text("image"),
  title: text("title"),
  content: text("content"),
})
