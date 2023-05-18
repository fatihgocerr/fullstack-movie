import {useEffect, useState} from "react";
import axios from "axios";
export default function Statistics() {
const [totalData, setTotalData] = useState([])
 const getStatistic = async () => {
  let config = {
   method: 'get',
   maxBodyLength: Infinity,
   url: 'https://projectarea.online/api/v1/statistics/allCounts',
   // url: 'http://localhost:5002/api/v1/statistics/allCounts',
   headers: { }
  };

  axios.request(config)
   .then((response) => {
    setTotalData(response.data.data)
   })
   .catch((error) => {
    console.log(error);
   });
 }

 useEffect(() => {
  getStatistic()
 }, [])

 const statisticList = [
  { title: 'Users', value: totalData?.user || 0, icon: 'user', color: 'text-blue-600', subColor:'bg-blue-100' },
  { title: 'Movies', value: totalData?.movie || 0, icon: 'film', color: 'text-red-600', subColor:'bg-red-100' },
  { title: 'Series', value: totalData?.series || 0, icon: 'tv', color: 'text-green-600', subColor:'bg-green-100' },
  { title: 'Anime', value: totalData?.anime || 0, icon: 'user', color: 'text-yellow-600', subColor:'bg-yellow-100' },
 ]
 return (
  <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
   {statisticList.map((item,index) => (
    <div key={index} className="flex items-center p-8 bg-white shadow rounded-lg">
     <div
      className={`inline-flex flex-shrink-0 items-center justify-center h-16 w-16 ${item.color}  ${item.subColor} rounded-full mr-6`}>
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
             d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
     </div>
     <div>
      <span className="block text-2xl font-bold">{item.value}</span>
      <span className="block text-gray-500">{item.title}</span>
     </div>
    </div>

   ))}
   {/*
   <div className="flex items-center p-8 bg-white shadow rounded-lg">
    <div
     className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
     <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
     </svg>
    </div>
    <div>
     <span className="block text-2xl font-bold">6.8</span>
     <span className="block text-gray-500">Average mark</span>
    </div>
   </div>
   <div className="flex items-center p-8 bg-white shadow rounded-lg">
    <div
     className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
     <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"/>
     </svg>
    </div>
    <div>
     <span className="inline-block text-2xl font-bold">9</span>
     <span className="inline-block text-xl text-gray-500 font-semibold">(14%)</span>
     <span className="block text-gray-500">Underperforming students</span>
    </div>
   </div>
   <div className="flex items-center p-8 bg-white shadow rounded-lg">
    <div
     className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
     <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
     </svg>
    </div>
    <div>
     <span className="block text-2xl font-bold">83%</span>
     <span className="block text-gray-500">Finished homeworks</span>
    </div>
   </div>
   */}
  </section>

 )
}