import React from 'react'
import { Dashboard } from '../components/Dashboard'
import { openModal } from '../slices/modalSlice';
import { useDispatch } from 'react-redux';


export const Index = () => {
  const dispatch = useDispatch();
  const openModalDispatch = () =>dispatch(openModal());
  return (
    <div >
      <Dashboard />
      <button onClick={openModalDispatch}>Modalı Aç</button>   
    </div>
  )
}
