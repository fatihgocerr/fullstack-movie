import {  useRef  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {CSSTransition} from "react-transition-group";
import { closeModal } from '../slices/modalSlice';

export const Modal = () => {
  const  { isOpen } =useSelector(state=>state.modalSlice)
  const dispatch = useDispatch();
  const modalRef = useRef(null); 



  const closeModalDispatch = (e) => {
    if (e.target === modalRef.current) {
        dispatch(closeModal());
      }
  };
  
  return (
      <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="modal"
      unmountOnExit>
        <div ref={modalRef} onClick={closeModalDispatch}  className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div    className="bg-white rounded-lg w-1/2 z-50">
            <div className="px-4 py-2">
              <h2 className="text-lg font-semibold mb-2">Örnek Modal Başlığı</h2>
              <p>Modal içeriği buraya gelebilir.</p>
            </div>
            <div className="flex justify-end py-2 px-4">
              
            </div>
          </div>
        </div>
      </CSSTransition>
  );
}
