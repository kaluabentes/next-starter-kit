import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

import * as auth from "@/schema/auth"
import * as collections from "@/schema/collections"
import * as components from "@/schema/components"
import * as orders from "@/schema/orders"
import * as pages from "@/schema/pages"
import * as settings from "@/schema/settings"
import * as user from "@/schema/user"

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, {
  schema: {
    ...auth,
    ...collections,
    ...components,
    ...orders,
    ...pages,
    ...settings,
    ...user,
  },
  logger: true,
})

export default db
