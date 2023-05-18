import axios from "axios";
import {useState} from "react";

export default function Serch() {
 const [searchData, setSearchData] = useState([])

 const inputChange = (e) => {
  if (e.length == 0) return setSearchData([])
  let config = {
   method: 'get',
   maxBodyLength: Infinity,
   // url: `http://localhost:5002/api/v1/search/search?search=${e}`,
   url: `https://projectarea.online/api/v1/search/search?search=${e}`,
   headers: { }
  };

  axios.request(config)
   .then((response) => {
    // console.log(JSON.stringify(response.data.data));
    setSearchData(response.data.data)
   })
   .catch((error) => {
    console.log(error);
   });
 }

 console.log(searchData.length)

 return (
  <div className='flex flex-col h-screen w-screen bg-slate-900 text-white items-center'>
   <div>
   <h1>Search</h1>
    <input
     onChange={(e)=>inputChange(e.target.value)}
     type="text" className='border-2 border-purple-600/50 rounded-md p-2 text-black' />
   </div>
   <div className={`bg-cyan-80000 rounded-md overflow-hidden border-black mt-2  ${searchData.length> 5 && 'overflow-y-scroll'} shadow-xl shadow-cyan-500`}>
   {
    !!searchData && searchData.map((item,index) => (
     <div className='flex w-[300px] border-b-cyan-500 border-b-2 ' key={index}>
     <div className=' w-[30%] h-20 bg-cyan-500'>
     <img src={item.poster} alt="" className=' object-cover w-full h-full ' />
     </div>
      <div className='w-[70%] px-2 gap-2 flex flex-col items-center justify-center'>
       <span className='text-center'>{item.name}</span>
       <div className='flex items-center justify-between w-full '>
       <span className=''>{item.type.toUpperCase()}</span>
       <span>IMDB: {item.imdbScore}</span>
       </div>
      </div>
     </div>
    ))
   }
   </div>
  </div>
 )
}