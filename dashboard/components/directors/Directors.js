import DirectorsTable from "@/components/directors/DirectorsTable";
import DirectorsTitle from "@/components/directors/DirectorsTitle";
import {useState} from "react";


const Director = () => {
 const [refTable,setRefTable] = useState(null)

 return(
  <main className="p-6 sm:p-10 space-y-6">

   <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
    <DirectorsTitle setRefTable={setRefTable} />
   </div>

   <section className="grid md:grid-cols-1 xl:grid-cols-1 gap-6">

    <div className="flex-grow items-center p-8 bg-white shadow rounded-lg">
     <DirectorsTable refTable={refTable} />
    </div>

   </section>


  </main>

 )
}

export default Director;