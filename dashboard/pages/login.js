import {useState} from "react";
import {Eye, EyeOff} from "react-feather";
import {toast} from "react-toastify";
import LoginServ from "@/services/auth.service";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {Watermark} from "antd";
import {login} from "@/store/slice/user";
export default function Login() {
 const [formValues, setFormValues] = useState({
  username: '',
  password: ''
 });
 const [showPass, setShowPass] = useState(false);
 const dispatch = useDispatch();
 const router = useRouter();

const logData  = useSelector((state) => state.user)
 console.log('logData',logData)
 const handleSubmit = (e) => {
  e.preventDefault();
  LoginServ(formValues).then((res) => {
   if (res.role === 'admin') {
   dispatch(login({isLoggedIn:true, user:res}))
   localStorage.setItem('data',JSON.stringify(res))
   router.push('/')
    toast.success('Login Successfully, Redirecting to Dashboard')
   } else {
   router.push('/login')
    toast('Unauthorized User')
   }
  }).catch((err) => {
   toast.error('Something Went Wrong')
  })
// alert('items',username, password)
//  console.log('lastFOrmValues',formValues)

 }

const loginMedia =[
 {src:'./login/1.gif'},
 {src:'./login/2.gif'},
 {src:'./login/3.gif'},
 {src:'./login/4.gif'},
 {src:'./login/5.gif'},
 {src:'./login/6.gif'},
]
 const handleInputChange = (e, key) => {
  const {value} = e.target;
  setFormValues((prevVal) => ({
   ...prevVal,
   [key]: value
  }));
  // console.log('formValues',formValues)
 }


 return (
  <Watermark height={50} width={40} image="./popcorn.svg" >
  <div className='flex items-center justify-center w-full h-screen bg-slate-700 '>

   <div className='flex  w-[700px] h-[500px] rounded-md overflow-hidden shadow-xl shadow-cyan-500 mx-2'>

    <div className=' flex flex-col h-full w-full lg:w-[50%] bg-slate-800 text-white gap-4 items-center pt-4 lg:pt-0 lg:justify-center relative z-10'>

     {/*<span className='font-bold top-0'>Hello, Welcome Login Page !</span>*/}
     {/*<div>*/}
     {/* <button className='flex gap-4 items-center justify-center border-2 p-2 px-4 rounded-md hover:bg-slate-700  '>*/}
     {/*  <img className='w-6 ' src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>*/}
     {/*  Log in With Google*/}
     {/* </button>*/}
     {/*</div>*/}
     {/*<span>or</span>*/}
     <div className='  '>
      <img
       className='   w-56 h-56 object-cover '
       src={loginMedia[Math.floor(Math.random() * loginMedia.length)].src} //shufle yapılacak
       alt='login'
      />
     </div>
     <div className="felx flex-col w-full px-4 ">
      <div className="flex flex-col mx-auto w-full gap-2 ">
       <div className="w-full flex  justify-between items-center  gap-2">
        <label className='hidden lg:flex'>UserName</label>
        <input type="text" placeholder="Username"
               name={'username'} onChange={(e) => handleInputChange(e, 'username')}
               className="h-10 w-full lg:w-[75%] text-black rounded-md border-2 border-cyan-500 shadow shadow-cyan-400 text-center"/>
       </div>
       <div className="w-full flex justify-between items-center  gap-2 relative">
        <label className='hidden lg:flex'>Password</label>
        <input type={`${showPass ? 'text' : 'password'}`} placeholder="Password"
               name={'password'} onChange={(e) => handleInputChange(e, 'password')}
               className="h-10 w-full lg:w-[75%] text-black rounded-md border-2 border-cyan-500 shadow shadow-cyan-400 text-center "/>
        {showPass
         ? <EyeOff className="h-6 w-6 text-gray-600 absolute right-2 cursor-pointer"
                   onClick={() => setShowPass(!showPass)}/>
         : <Eye className="h-6 w-6 text-gray-600 absolute right-2 cursor-pointer"
                onClick={() => setShowPass(!showPass)}/>}

       </div>
      </div>

      <div className="flex flex-col mx-auto w-full gap-4   items-center ">
       <button onClick={() => toast('yakında')}
               className="flex w-full justify-end text-sm pt-1 pr-2 text-gray-600">Forgot Password !
       </button>
       <button onClick={handleSubmit}
               className=" w-[80%] border-2 border-slate-600 text-center h-10 rounded-md bg-amber-500 hover:bg-[#008080] ">Log
        In
       </button>
      </div>
     </div>

     <button onClick={() => router.push('/register')}
      className='absolute bottom-2 right-4 z-10 text-xs text-gray-500'>Don't have an account ? <span
      className='text-sm font-bold text-white'>Sign Up For Free</span></button>

    </div>
    <div className=' hidden lg:flex h-full w-[50%] bg-slate-500 items-center'>
     <img src={'https://cdn1.ntv.com.tr/gorsel/ZAHJoUrrWUGoX6BleuuvVQ.jpg?width=800&mode=crop&scale=both'}
          className='object-center object-fill'/>
    </div>
   </div>
  </div>
  </Watermark>
   )
}



