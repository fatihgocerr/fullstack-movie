import Head from 'next/head'
import Dashboards from "@/components/dashboard/Dashboards";
import PageLayout from "/layouts/PageLayout";
export default function Home() {
 return (
  <main className='bg-slate-800 w-full h-full min-h-screen flex items-center justify-center'>
   <div className='bg-slate-800 p-4 flex justify-center overflow-hidden'>
    <img src='./hb/hb.png' className='px-20 max-w-screen-sm h-auto' />
   </div>  </main>



 )
}
