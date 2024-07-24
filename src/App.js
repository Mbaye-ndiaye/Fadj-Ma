import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './component/sidebar/Sidebar';
import Medicament from './component/medicament/Medicament';
import Dashbord from './component/dashbord/Dashbord';

function App() {
  return (
    <div className=" text-3xl flex">
      <Sidebar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/Dashbord/Medicament" element={<Medicament />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
