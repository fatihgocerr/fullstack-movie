import Head from 'next/head'
import Dashboards from "@/components/dashboard/Dashboards";
import PageLayout from "/layouts/PageLayout";
export default function Home() {
  return (
   <main className=''>
    <PageLayout title='DashBoard'>
     <Dashboards />
    </PageLayout>
   </main>
  )
}
