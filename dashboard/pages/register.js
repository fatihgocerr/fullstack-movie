import {Eye, EyeOff} from "react-feather";
import {toast} from "react-toastify";
import {useState} from "react";
import {create, uploadAvatar} from "@/services/user.service";
import {useRouter} from "next/router";

export default function Register() {
 const router = useRouter();
 const [formValues, setFormValues] = useState({
  username: '',
  password: '',
  passwordRepeat: '',
  email: '',
  profile: {
   name: "",
   surname: "",
   country: '',
  },
  role: 'user',
 });

 const [showPass, setShowPass] = useState(false);


 const formItem = [
  {label: 'User Name', key: 'username', type: 'text', selectBox: false},
  {label: 'Password', key: 'password', type: 'password', selectBox: false},
  {label: 'Password Repeat', key: 'passwordRepeat', type: 'password', selectBox: false},
  {label: 'Email', key: 'email', type: 'email', selectBox: false},
  {label: 'Name', key: 'profile.name', type: 'text', selectBox: false},
  {label: 'Surname', key: 'profile.surname', type: 'text', selectBox: false},
  {label: 'Country', key: 'profile.country', type: 'text', selectBox: false},
 ]


 const handleSubmit =async (e) => {
  e.preventDefault();
  if (formValues.password !== formValues.passwordRepeat) {
   toast.error('Passwords do not match')
   return;
  }
  if (formValues.password.length < 6) {
   toast.error('Password must be at least 6 characters')
   return;
  }
  if (formValues.username.length < 3 ||formValues.username.length > 20) {
   toast.error('Username must be between 3 and 20 characters')
   return;
  }

  const { passwordRepeat, ...newFormValues } = formValues; // passwordRepeat alanı çıkarılır

  await create(newFormValues).then(async (res) => {
    // console.log(`${!!err.response.data.validationErrors?.[0].msg ? err.response.data.validationErrors?.[0].msg : 'image upload failed '}`)
    const toastPromise = new Promise((resolve, reject) => {
     res.code === 200 ? resolve('success') : reject('error')
    })
    toast.promise(toastPromise, {
     pending: 'pending ...',
     success: 'Created Success 👌',
     error: 'Created Error, Please Wait and Again 🤯'
    })
    await router.push('/login')


  }).catch((err) => {
   toast.error(`${!!err.response?.data?.validationErrors?.[0].msg ? err.response.data.validationErrors?.[0].msg : 'Something went wrong '}`)
   console.log('err', err)
  })


 }

 const handleInputChange = (event) => {
  const {name, value} = event.target;

  if (name.includes('.')) {
   const [parentKey, childKey] = name.split('.'); // nokta ayracını kullanarak key değerine ulaşma

   setFormValues((prevValues) => ({
    ...prevValues,
    [parentKey]: {
     ...prevValues[parentKey],
     [childKey]: value, // ilgili alanı güncelleme
    },
   }));
  } else {
   setFormValues((prevValues) => ({
    ...prevValues,
    [name]: value, // ilgili alanı güncelleme
   }));
  }
 };


 return (
  <div className='flex items-center justify-center w-full h-screen bg-slate-700'>
   <div className='flex w-full mx-4 md:mx-0 md:w-[700px] h-[500px] rounded-md overflow-hidden shadow-xl shadow-cyan-500'>
    <div className=' flex flex-col h-full w-full md:w-[50%] bg-slate-800 text-white gap-4 items-center justify-center relative'>
     <img src='./popcorn.svg' alt='popcorn' className='w-8 h-8 mx-auto absolute top-2 rotate-12'/>
     <div className="felx flex-col w-full px-4 ">
      <div className="flex flex-col mx-auto w-full gap-2 ">
       {formItem.map((item, index) => (


        <div key={index} className="w-full flex  justify-center items-center  gap-2">

         {/*<label>{item.label}</label>*/}
         {item.type === 'password' ? (
          <>
           <input type={`${showPass ? 'text' : 'password'}`} placeholder={item.label}
                  name={item.key} onChange={(e) => handleInputChange(e, item.key)}
                  className="h-10 w-[95%] text-black rounded-md border-2 border-cyan-500 shadow shadow-cyan-400 text-center "/>
           {showPass
            ? <EyeOff className="h-6 w-6 text-gray-600 absolute right-8 cursor-pointer"
                      onClick={() => setShowPass(!showPass)}/>
            : <Eye className="h-6 w-6 text-gray-600 absolute right-8 cursor-pointer"
                   onClick={() => setShowPass(!showPass)}/>}
          </>
         ) : (
          <input type={item.type} placeholder={item.label}
                 name={item.key} onChange={(e) => handleInputChange(e, item.key)}
                 className="h-10 w-[95%] text-black rounded-md border-2 border-cyan-500 shadow shadow-cyan-400 text-center"/>

         )}
        </div>
       ))}

      </div>

      <div className="flex flex-col mx-auto w-full gap-4  p-2 items-center ">
       <button onClick={handleSubmit}
               className=" w-[80%] border-2 border-slate-600 text-center h-10 rounded-md bg-amber-500 hover:bg-[#008080] ">Register
       </button>
      </div>
     </div>

     <button onClick={() => router.push('/login')}
      className='absolute bottom-2 right-4 z-10 text-xs text-gray-500'>Do have an account ? <span
      className='text-sm font-bold text-white'>{'LogIn -->'} </span></button>

    </div>
    <div className='hidden md:flex   h-full w-[50%] bg-slate-500 items-center relative'>
     <div className=' absolute top-8 left-4'>
      <span className='font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-red-500 via-30% to-amber-500 to-90%"'>Hello, Welcome Register Page !</span>
     </div>

     <img src={'https://cdn1.ntv.com.tr/gorsel/ZAHJoUrrWUGoX6BleuuvVQ.jpg?width=800&mode=crop&scale=both'}
          className='object-center object-fill'/>
    </div>
   </div>
  </div>
 )
}




