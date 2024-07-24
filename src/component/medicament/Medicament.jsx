import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonProps from '../../page/buttonProps/ButtonProps';
import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Table from '../../page/table/Table';
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";
import Modal from '../../page/modal/Modal';

const Medicament = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='bg-slate-300 h-screen'>
      <div className='flex items-center justify-between bg-white p-2'>
        <div className=''>
          <input type='text'
            className='bg-slate-400 w-full px-6 p-2 border-slate-400 placeholder:text-slate-100 rounded-md'
            placeholder="Recherchez n'import quoi ici"
          />
        </div>
        <div>
          <div className='flex gap-x-3 justify-end items-center'>
            <p className='w-4 h-4 bg-[#FED600] rounded-full '></p>
            <p className='text-lg font-bold'>Bonjour</p>
          </div>
          <p className='text-lg'>14 janvier 2022 - 22h:45:00</p>
        </div>
      </div>
      
      <div className='flex items-center justify-between p-2'>
        <div>
          <h4 className='font-bold '>médicaments (298)</h4>
          <p className='text-lg'>Liste des medicaments disponibles a la vente</p>
        </div>
        <div className='flex items-center'>
          <FaPlus className='relative left-6' />
          <ButtonProps text="Nouveau medicament"
            className="border border-black w-full bg-white p-2"
            onClick={handleOpenModal}
          >Nouveau medicament</ButtonProps>
        </div>
      </div>
      <div className='mt-3 p-2 flex justify-between'>
        <div className='flex items-center'>
          <input type="text" placeholder="Enter your" className="border border-gray-300 bg-slate-400 opacity-40 placeholder:text-black rounded-md pl-2 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          <CiSearch className='relative right-8 ' />
        </div>
        <div>
          <select className="border border-gray-300 focus:border-transparent">
            <option value="">Selection un Group</option>
            <option value="">Medecine generique</option>
            <option value="">Diabete</option>
          </select>
        </div>
      </div>
      <div>
        <Table />
      </div>
      <div className='flex justify-between p-3 items-center'>
        <div>
          <h6 className='text-lg p-5'>affichage de 1 a 8 resultats sur 298</h6>
        </div>
        <div className='flex items-center'>
          <p><CiCircleChevLeft className='w-10 h-10 bg-white rounded-full' /></p>
          <select className='bg-none'>
            <option value="">page 01</option>
            <option value="">10</option>
            <option value="">10</option>
          </select>
          <p><CiCircleChevRight className='w-10 h-10 bg-white rounded-full' /></p>
        </div>
      </div>
      {modalOpen && <Modal handleClose={handleCloseModal} />}
      </div>
  );
}

export default Medicament;
