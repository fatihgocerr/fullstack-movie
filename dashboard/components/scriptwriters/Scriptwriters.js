
import ScriptwritersTable from "@/components/scriptwriters/ScriptwritersTable";
import ScriptwritersTitle from "@/components/scriptwriters/ScriptwritersTitle";

import {useState} from "react";


const Scriptwriter = () => {
 const [refTable,setRefTable] = useState(null)

 return(
  <main className="p-6 sm:p-10 space-y-6">

   <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
    <ScriptwritersTitle setRefTable={setRefTable} />
   </div>

   <section className="grid md:grid-cols-1 xl:grid-cols-1 gap-6">

    <div className="flex-grow items-center p-8 bg-white shadow rounded-lg">
     <ScriptwritersTable refTable={refTable} />
    </div>

   </section>


  </main>

 )
}

export default Scriptwriter;