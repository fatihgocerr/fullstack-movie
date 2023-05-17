import {useState, useEffect} from "react";
import {getLatestUsers} from "@/services/statistics.service";
export default function () {
 /*const userData = [
  { name:'Calvin Steward', image:'https://picsum.photos/200', ratio:'8.9'},
  { name:'Ralph Richards', image:'https://picsum.photos/199', ratio:'9.3'},
  { name:'Annette Watson', image:'https://picsum.photos/198', ratio:'7.3'},
  { name:'Calvin Steward', image:'https://picsum.photos/197', ratio:'4.9'},
  { name:'Ralph Richards', image:'https://picsum.photos/196', ratio:'5.3'},
  { name: 'Archie Cooper', image: 'https://picsum.photos/195', ratio: '8.3' },
  {name: 'Jane Lane', image: 'https://picsum.photos/194', ratio: '9.7'},
  {name:'Bernard Murphy', image:'https://picsum.photos/193', ratio:'9.2'},
  { name:'Path Patel', image:'https://picsum.photos/192', ratio:'9.1'},
  { name:'Path Patel', image:'https://picsum.photos/191', ratio:'1.3'},
  { name:'Path Patel', image:'https://picsum.photos/190', ratio:'6.6'}
  ]*/
 const [userData, setUserData] = useState([])
 useEffect(() => {
  getLatestUsers().then(r =>setUserData(r))
 }, [])
 return (
  <div className="row-span-3 bg-white shadow rounded-lg">
   <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
    <span>Last Users</span>
    <button type="button"
            className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600"
            id="options-menu" aria-haspopup="true" aria-expanded="true">
     Descending
     <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"/>
     </svg>
    </button>
   </div>
   <div className="overflow-y-auto" style={{maxHeight: '24rem'}}>
    <ul className="p-6 space-y-6">
     {userData.map((item,index) => (
      <li key={index} className="flex items-center">
       <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
        <img src={item.profile.profilePicture} alt={`${item.profile.profilePicture} Profile Picture`}/>
       </div>
       <span className="text-gray-600">{item.profile.name + ' ' + item.profile.surname}</span>
       <span className="ml-auto font-semibold">{item.username}</span>
      </li>
     ))}


    </ul>
   </div>
  </div>

 )
}