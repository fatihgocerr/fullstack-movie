import {useEffect, useState, useCallback} from 'react'


export default function PrModal({
                                 vsbModal, setVsbModal,
                                 mdlTitle,
                                 mdlContent,
                                 mdlBtn,
                                 mdlWidth = 'w-[800px]',
                                 mdlCloseBtn = true
                                }) {
 //const [vsbModal, setVsbModal] = useState(false)
 console.log('vsbModal', vsbModal)
 let eventFunction = useCallback((event) => {
  if (event.keyCode === 27) {
   setVsbModal(false)
  }
 }, []);
 useEffect(() => {
  document.addEventListener("keydown", eventFunction);
 }, [eventFunction]);


 return (
  <>
   {vsbModal && (
    <div className={`fixed  z-20 insert-0 bg-gray-600 bg-opacity-90 overflow-y-auto h-full w-full top-0 right-0 overflow-hidden`}>
     <button className=' absolute w-full h-full'
             onClick={() => setVsbModal(false)}/>
     <div
      className={`relative top-[20%] mx-auto  shadow-sm shadow-amber-600 rounded-md bg-white text-black z-30  ${mdlWidth}`}>
      {mdlCloseBtn && (
       <div className='absolute z-30 right-2 top-2'>
        <button className='bg-[#dddddd50] hover:bg-[#ff6a6a] float-left rounded-[50%] w-[30px]'
                onClick={() => setVsbModal(false)}>
         <svg viewBox="0 0 40 40" className='block'>
          <path className='stroke-black fill-transparent stroke-2' d="M 10,10 L 30,30 M 30,10 L 10,30"/>
         </svg>
        </button>
       </div>
      )}
      {mdlTitle && (
       <div className='w-full flex justify-center items-center'><span>{mdlTitle}</span></div>
      )}
      <div className='w-full'>
     <span>
      {mdlContent}
     </span>
      </div>
      {mdlBtn && (
       <div className='flex flex-col md:flex-row items-center justify-center gap-2 '>
        {mdlBtn}
       </div>
      )}
     </div>
    </div>
   )}
  </>
 )
}