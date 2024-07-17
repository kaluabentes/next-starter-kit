"use server"

import { eq } from "drizzle-orm"
import { redirect } from "next/navigation"

import db from "@/infra/database/db"
import { users } from "@/schema/user"

export default async function verifyInstallation() {
  const result = await db.query.users.findFirst({
    where: eq(users.type, "admin"),
  })

  if (!result) {
    redirect("/admin/installation")
  }

  return result
}
