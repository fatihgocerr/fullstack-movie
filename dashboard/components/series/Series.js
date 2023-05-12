
import SeriesTable from "@/components/series/SeriesTable";
import SeriesTitle from "@/components/series/SeriesTitle";

export default function SeriesHome() {
 return (
  <main className="p-6 sm:p-10 space-y-6">

   <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
    <SeriesTitle />
   </div>

   <section className="grid md:grid-cols-1 xl:grid-cols-1 gap-6">

    <div className="flex-grow items-center p-8 bg-white shadow rounded-lg">
     <SeriesTable />
    </div>

   </section>


  </main>

 );

}



