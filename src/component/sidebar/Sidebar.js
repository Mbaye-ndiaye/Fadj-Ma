import React, { useState } from 'react';
import { CiCircleChevRight, CiViewTable } from 'react-icons/ci';
import logo from '../../assets/logo.png';
import Dashbord from '../../component/dashbord/Dashbord';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div className={`fixed top-0 left-0 h-screen bg-[#283342] px-0 duration-300 ${
          isOpen ? "w-72" : "w-20 "
        } bg-[#283342] h-screen top-0 px-0 relative duration-30`}>
        <button onClick={toggleSidebar} className="text-dark bg-[#283342] text-white absolute -right-5 bottom-9">
          <CiCircleChevRight size={24} className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <nav className="flex flex-col">
          <div className="flex items-center bg-black text-white gap-x-4 px-4 py-4">
            <img src={logo} alt="" className="w-10 h-10" />
            <h4 className={`${isOpen ? 'block' : 'hidden'} origin-left duration-200`}>Fadj-Ma</h4>
          </div>
          <div className="flex gap-x-3 items-center p-4">
            <img src={logo} alt="" className="cursor-pointer bg-red-700 w-10 h-10 rounded-full" />
            <p className='absolute left-12 top-28 w-3 h-3 bg-[#01A768] rounded-full'></p>
            <h1 className={`text-white origin-left font-medium text-xl duration-200 ${isOpen ? 'block' : 'hidden'}`}>
              Modou Fall
              <p className="text-[#FED600]">administrateur</p>
            </h1>
          </div>
          <div className="flex flex-col gap-y-2 mt-4">
            <Link to='/'>
            <p className="flex items-center text-white hover:bg-[#01A768] hover:text-black cursor-pointer gap-x-3 p-2 rounded">
              <CiViewTable size={24} />
              <span className={`${isOpen ? 'block' : 'hidden'} origin-left duration-200`}>Tableau de bord</span>
            </p>
            </Link >
            <Link to="Dashbord/Medicament">
            <p className="flex items-center text-white hover:bg-[#01A768] hover:text-black cursor-pointer gap-x-3 p-2 rounded">
              <CiViewTable size={24} />
              <span className={`${isOpen ? 'block' : 'hidden'} origin-left duration-200`}>Médicaments</span>
            </p>
            </Link>
          </div>
        </nav>
        <div className="absolute bottom-0 bg-black w-full p-2">
          <h6 className="text-sm text-white">Propulsé par Red Team @ 2024 version 1.12</h6>
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;
