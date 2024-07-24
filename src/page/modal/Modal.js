import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";

const Modal = ({ handleClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={handleClose}></div>
      <div className="bg-white p-6 rounded shadow-lg z-10 relative">
        <button onClick={handleClose} className="absolute top-6 left-4"><FaArrowLeftLong /></button>
        <form className='w-full max-w-lg mx-3'>
          <h4 className='font-medium text-lg text-center mb-4'>Ajouter un medicament</h4>
          <div className="mb-3">
            <input type="text" 
            className="w-full bg-gray-200 border rounded-md placeholder:p-2 placeholder:text-lg border-slate-300" 
            placeholder='Nom du medicament'/>
          </div>

          <div className="mb-3">
            <input type="text" 
            className="w-full bg-gray-200 border rounded-md placeholder:p-2 placeholder:text-lg border-b-4" 
            placeholder='ID'/>
          </div>

          <div className="mb-3">
            <input type="email" 
            className="w-full bg-gray-200 border rounded-md placeholder:p-2 placeholder:text-lg border-b-4" 
            placeholder='Nom du groupe'/>
          </div>

          <div className="mb-3">
            <input type="email" 
            className="w-full bg-gray-200 border rounded-md placeholder:p-2 placeholder:text-lg border-b-4" 
            placeholder='Stock en qualité'/>
          </div>
          
          
          <button type="submit" className="btn btn-primary border w-full bg-gray-300 text-lg">Ajouter</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
