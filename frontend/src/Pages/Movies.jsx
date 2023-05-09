import React, { useState } from 'react'
import { SearchCheck } from '../components/SearchCheck';

export const Movies = () => {
  const [sortType, setSortType] = useState("");
  const [categories, setCategories] = useState([
    {
      name: "Aksiyon",
      checked: true,
    },
    {
      name: "Macera",
      checked: true,
    },
    {
      name: "Komedi",
      checked: true,
    },
  ]);

  return (
    <div className='grid grid-cols-12 gap-2'>


      <div className='col-span-12 lg:col-span-10'>
     <Sort setSortType={setSortType}  title={"Filmler"} />



      </div>
      <div className='order-first col-span-12  lg:order-last lg:col-span-2 '>
        <SearchCheck
         title={"Kategoriler"}
         setCategories={setCategories}
         categories={categories}
         />
      </div>
    </div>
  )
}



export const Sort =({title, setSortType})=>{

  const options=[
    {
      value:"mostviewed", text:"En Çok İzlenen"
    },
    {
      value:"mostliked", text:"En Çok Beğenilen"
    },
    {
      value:"recently", text:"Güncelliğine Göre"
    }
  ]


  return  <div className='flex justify-between gap-4'>
            <h1>{title}</h1>

            <select 
            onChange={e=>setSortType(e.target.value)}
            className="select select-primary outline-none ">
                <option disabled selected>Sıralama</option>
                {
                  options.map((option,i)=><option key={i+"sort"} value={option.value}>{option.text}</option>)
                }
            </select>
          </div>
}