import React, {useState} from "react";


const viewCategory = ({data, setModal}) => {

 console.log('val', data?.[0]?.name)
 console.log('val', data)


 const formItem = [
  {label: 'Name', key: 'name', type: 'text'},
  {label: 'Description', key: 'description', type: 'text'},
  {label: 'Tags', key: 'tags', type: 'text'},
  {label: 'Movie', key: 'movie', type: 'text'},
  {label: 'Series', key: 'series', type: 'text'},
  {label: 'Anime', key: 'anime', type: 'text'},
  {label: 'Total', key: 'total', type: 'text'}
 ]


 return (
  <div className="flex-row justify-center items-center space-y-3 relative p-4 w-full">
   {formItem.map((item, index) => (
    <div key={index} className="flex justify-center items-center w-[400px] mx-auto">
     <div className="flex justify-between w-full h-8 items-center px-2">
      <label className="font-semibold pr-2">{item.label}</label>
      <input
       className="border-2 border-purple-600/50 w-[70%] rounded h-8 p-2 text-center cursor-not-allowed"
       type={item.type}
       name={item.key}
       disabled
       value={item.key === "name" ? data?.[0].name : item.key === "description" ? data?.[0].description : item.key === 'tags' ? data?.[0].tags : item.key === 'movie' ? data?.[0].movies.length : item.key === 'series' ? data?.[0].series.length : item.key === 'anime' ? data?.[0].anime.length : (data?.[0]?.movies?.length || 0) + (data?.[0]?.series?.length || 0) + (data?.[0]?.anime?.length || 0)
       }
      />
     </div>
    </div>
   ))}
   <div className="w-[400px] flex items-center justify-center mx-auto px-2">
    <div className="flex-row   w-full">
     <label className="font-semibold pr-2">Picture</label>

     <div className="flex overflow-auto my-2 p-2">

      <img
       // src={URL.createObjectURL(file)}
       src={'https://picsum.photos/200'}
       className="w-32 h-32 mr-1 rounded-xl border-2 border-purple-600/50"
      />
     </div>

    </div>
   </div>
   <div className="flex justify-between">
    <button className="bg-gray-700 text-white p-3 w-full mt-5 text-lg rounded-md hover:bg-emerald-800"
            onClick={() => setModal(false)}>OK
    </button>
   </div>
  </div>
 )
  ;
}


export default viewCategory;

