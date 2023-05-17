import PageLayout from "@/layouts/PageLayout";
import Anime from "@/components/anime/Anime";

export default function Home() {
  return (
   <PageLayout title={'Anime'}>
    <Anime />
   </PageLayout>
    // <div className='bg-gray-600 w-full h-screen flex items-center justify-center'>
    //  <div className='flex flex-col w-[400px]'>
    //  <span className='font-bold text-[60px] text-amber-500 -m-l-[20px]'>YAKINDA</span>
    //  <span className='font-bold text-[60px] text-[#ff6a6a] text-right -mt-[58px]'>BURADA !</span>
    //  </div>
    // </div>
  )
}
