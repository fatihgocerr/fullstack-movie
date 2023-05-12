import React, {useState} from "react";


const ViewMovies = ({data, setModal}) => {
 const formItem = [
  {label: 'Name', key: 'name', type: 'text', selectBox: false},
  {label: 'Surname', key: 'surname', type: 'text', selectBox: false},
  {label: 'Birth Date', key: 'birthDate', type: 'text', selectBox: false},
  {label: 'Birth Place', key: 'birthPlace', type: 'text', selectBox: false},
  {label: 'Death Date', key: 'deathDate', type: 'text', selectBox: false},
  {label: 'Death Place', key: 'deathPlace', type: 'text', selectBox: false},
  {label: 'Biography', key: 'biography', type: 'text', selectBox: false},
  {label: 'Gender', key: 'gender', type: 'text', selectBox: false},
  {label: 'Awards', key: 'awards', type: 'text', selectBox: false},
  {label: 'Nationality', key: 'nationality', type: 'text', selectBox: false},
  {label: 'Movies', key: 'movies', type: 'text',length:true},
  {label: 'Series', key: 'series', type: 'text',length:true},
  {label:'Anime', key:'anime', type:'text',length:true},
  {label:'Total', key:'total', type:'text',sum:true},
 ]


const total = (data?.[0]?.movies?.length || 0) + (data?.[0]?.series?.length || 0) + (data?.[0]?.anime?.length || 0)

 return (
  <div className="flex-row justify-center items-center space-y-3 relative p-4 w-full bg-slate-200 rounded-md">
   <div className='flex'>
   <div className='flex-col justify-center items-center space-y-3  p-4 w-[75%]'>
    {formItem.map((item, index) => (
    <div key={index} className="flex justify-center items-center w-[400px] mx-auto">
     <div className="flex justify-between w-full h-8 items-center px-2">
      <label className="font-semibold pr-2">{item.label}</label>
      <input
       className="border-2 border-purple-600/50 w-[70%] rounded h-8 p-2 text-center cursor-not-allowed"
       type={item.type}
       name={item.key}
       disabled
       // value={ item.selectBox ? data?.[0]?.[item.key].map((r) => r.name) : data?.[0]?.[item.key]}
       value={item.length ? data?.[0]?.[item.key]?.length : item.sum ? total : data?.[0]?.[item.key]}
      />
     </div>
    </div>
   ))}
   </div>
    <div className="w-[20%] flex mt-8 justify-center ">

     <div className="flex flex-col w-full  space-y-3  gap-4 overflow-auto my-2 p-2">
      <label className="text-xl w-32 font-bold text-center">Avatar</label>
       <img
        // src={URL.createObjectURL(file)}
        // src={`${data?.[0].image || 'https://picsum.photos/200'}`}
        src={`https://picsum.photos/200`}
        className="w-32 h-32 mr-1 rounded-full border-2 border-purple-600/50"
        alt="image"
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


export default ViewMovies;

