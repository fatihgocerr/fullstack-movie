import {useRouter} from "next/router";
import {useEffect} from "react";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {logout} from "@/store/slice/user";


export default function Logout() {
 const router = useRouter()
 const dispatch = useDispatch()

 useEffect(() => {
     localStorage.removeItem("data")
      dispatch(logout())

     router.push("/login").then(() =>{
      window.location.reload()
      toast.info("Çıkış Başarılı")
     } )
 },[])

 return (
  <div className='flex items-center justify-center w-full min-vh-100 bg-slate-700'>
   <img src='./logout.gif' alt='logout'/>
  </div>
 )
}