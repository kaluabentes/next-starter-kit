import Header from "@/components/Header"
import Heading from "@/components/Heading"
import AppLayout from "@/layouts/AppLayout"
import verifyInstallation from "@/modules/installation/actions/verifyInstallation"

export default async function Home() {
  await verifyInstallation()

  return (
    <AppLayout title="Home">
      <Header>
        <Heading>Home</Heading>
      </Header>
    </AppLayout>
  )
}
