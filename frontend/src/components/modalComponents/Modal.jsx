import {  useRef  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {CSSTransition} from "react-transition-group";
import { closeModal } from '../../slices/modalSlice';
import { Register } from './Register';
import { Login } from './Login';

export const Modal = () => {
  const  { isOpen, componentName } =useSelector(state=>state.modalSlice)
  const dispatch = useDispatch();
  const modalRef = useRef(null); 

  const Components = {
    "register": <Register/>,
    "login": <Login />,
  }
  let ComponentRender;
  ComponentRender = Components[componentName];

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
            {ComponentRender}
          </div>
        </div>
      </CSSTransition>
  );
}
