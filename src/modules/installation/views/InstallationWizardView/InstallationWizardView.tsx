"use client"

import Input from "@/components/Input"
import Paper from "@/components/Paper"

export default function InstallationWizardView() {
  return (
    <div className="container">
      <Paper className="asd">
        <form className="installation-form">
          <Input id="email" name="email" />
        </form>
      </Paper>
    </div>
  )
}
