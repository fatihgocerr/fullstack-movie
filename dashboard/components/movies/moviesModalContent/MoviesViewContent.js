import React, {useState} from "react";


const ViewMovies = ({data, setModal}) => {

 const formItem = [
  {label: 'Name', key: 'title', type: 'text',selectBox:false},
  {label: 'Genre', key: 'genre', type: 'text',selectBox:true},
  {label: 'release Date', key: 'released', type: 'text',selectBox:false},
  {label: 'Imdb Score', key: 'imdbScore', type: 'text',selectBox:false},
  {label: 'Director Id', key: 'directorId', type: 'text',selectBox:true},
  {label: 'Stars', key: 'stars', type: 'text',selectBox:true},
  {label: 'Scriptwriter', key: 'scriptwriter', type: 'text',selectBox:true},
  {label: 'Trailer', key: 'trailer', type: 'text',selectBox:false},
  {label: 'Tags', key: 'tags', type: 'text',selectBox:false},
  {label: 'Summary', key: 'summary', type: 'text',selectBox:false},
  {label: 'Budget', key: 'budget', type: 'text',selectBox:false},
  {label: 'Box Office', key: 'boxOffice', type: 'text',selectBox:false},
  {label: 'Year', key: 'year', type: 'text',selectBox:false},
  {label: 'Awards', key: 'awards', type: 'text',selectBox:false},
  {label: 'Conditions', key: 'conditions', type: 'text',selectBox:false},
  {label: 'Series', key: 'series', type: 'text',selectBox:false},
  {label: 'Country', key: 'country', type: 'text',selectBox:false},
  {label: 'Language', key: 'language', type: 'text',selectBox:false},
  {label: 'Producer', key: 'producer', type: 'text',selectBox:false},
 ]



 return (
  <div className="flex-row justify-center items-center space-y-3 relative p-4 w-full bg-slate-200 rounded-md">
   {formItem.map((item, index) => (
    <div key={index} className="flex justify-center items-center w-[400px] mx-auto">
     <div className="flex justify-between w-full h-8 items-center px-2">
      <label className="font-semibold pr-2">{item.label}</label>
      <input
       className="border-2 border-purple-600/50 w-[70%] rounded h-8 p-2 text-center cursor-not-allowed"
       type={item.type}
       name={item.key}
       disabled
       value={ item.selectBox ? data?.[0]?.[item.key].map((r) => r.name) : data?.[0]?.[item.key]}
      />
     </div>
    </div>
   ))}
   <div className="w-[400px] flex items-center justify-center mx-auto px-2">
    {['poster','bannerPoster'].map((item, index) => (
    <div className="flex-row   w-full">
     <label className="font-semibold pr-2">{item}</label>

     <div className="flex overflow-auto my-2 p-2">

      <img
       // src={URL.createObjectURL(file)}
       src={`${data?.[0]?.[item] || 'https://picsum.photos/200'}`}
       className="w-32 h-32 mr-1 rounded-xl border-2 border-purple-600/50"
       alt="image"
      />
     </div>

    </div>
    ))}

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

