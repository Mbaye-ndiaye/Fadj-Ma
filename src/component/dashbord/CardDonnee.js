import React from 'react';
import { IoHome } from 'react-icons/io5';
import { FcExpired } from "react-icons/fc";
import { BsShieldFillPlus } from "react-icons/bs";
import { FaMoneyBills } from "react-icons/fa6";
import { GrAidOption } from "react-icons/gr";
import { TiWarningOutline } from "react-icons/ti";

const CardDonnee = () => {
  return (
    <div>

    <div className="p-6 grid grid-cols-4  gap-x-6">
      <div className="bg-white  h-48 text-center rounded-lg shadow-lg border-green-500 border-2">
        <div className="card text-center">
          <BsShieldFillPlus className="text-green-600 text-4xl mx-auto mb-4 mt-3" />
          <div className="card-body">
            <h5 className="card-title text-black text-2xl font-bold">Bien</h5>
            <h6 className="card-subtitle text-lg mb-2 mt-2 text-black">Statut de l'inventaire</h6>
          </div>
          <div className="card-footer bg-[#01A768] opacity-55 text-black text-sm py-2 mt-6  rounded-b-lg">
            Afficher le rapport detaillée 
          </div>
        </div>
      </div>

      <div className="bg-white  h-48 text-center rounded-lg shadow-lg border-yellow-400 border-2">
        <div className="card text-center">
          <FaMoneyBills className="text-[#FED600] text-4xl mx-auto mb-4 mt-3" />
          <div className="card-body">
            <h5 className="card-title text-black text-2xl font-bold">4.800.432 FCFA</h5>
            {/* <h6 className="card-subtitle mb-2 text-black">Statut de l'inventaire</h6> */}
            <p className="card-text text-lg mt-3 text-black">Revenue : janvier 2022 </p>
          </div>
          <div className="card-footer bg-[#FED600] opacity-25 text-black text-sm py-2 mt-6 rounded-b-lg">
            Afficher le rapport detaillée
          </div>
        </div>
      </div>

      <div className="bg-white  h-48 text-center rounded-lg shadow-lg border-blue-500 border-2">
        <div className="card text-center">
          <GrAidOption className="text-[#03A9F5] text-4xl mx-auto mb-4 mt-3" />
          <div className="card-body">
            <h5 className="card-title text-black text-2xl font-bold">4.800.432 FCFA</h5>
            <h6 className="card-subtitle text-lg mb-2 mt-2 text-black">Medicament disponibles</h6>
          <div className="card-footer bg-[#03A9F5] opacity-25 text-black text-sm py-2 mt-6 rounded-b-lg">
            Visiter l'inventaire
          </div>
          </div>
        </div>
      </div>

      <div className="bg-white  h-48 text-center rounded-lg shadow-lg border-red-500 border-2">
        <div className="card text-center">
          <TiWarningOutline className="text-[#F0483E] text-4xl mx-auto mb-4 mt-3" />
          <div className="card-body">
            <h5 className="card-title text-black text-2xl font-bold">4.800.432 FCFA</h5>
            <h6 className="card-subtitle text-lg mb-3 mt-2 text-black">Pénurie de médicaments</h6>
          </div>
          <div className="card-footer bg-[#F0483E] opacity-75 text-black text-sm py-2 mt-6 rounded-b-lg">
            Resoudre maintenant 
          </div>
        </div>
      </div>
    </div>

    <div className="p-8 mt-7 grid grid-cols-2 gap-8">
      <div className="bg-white text-center rounded-lg shadow-lg border-black border-2">
        <div className="card">
          <div className="card-header flex justify-between p-2 bg-white border-b-2 text-black text-sm py-2 rounded-t-lg">
            inventaire
            <div>
              <h4>Aller au configuration</h4>
            </div>
          </div>
          <div className="card-body flex justify-between p-2">
            <div className="">
              <h5 className="text-start font-bold">298</h5>
              <p className="text-sm">Nombre total de médicaments</p>
            </div>
            <div className="">
              <h5 className="text-start font-bold">24</h5>
              <p className="text-sm">Groupes de médicaments</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-center rounded-lg shadow-lg border-black border-2">
        <div className="card">
          <div className="card-header flex justify-between p-2 border-b-2 text-black text-sm py-2 rounded-t-lg font-bold">
            rapport rapide
            <div>
              <h4>janvier 2022</h4>
            </div>
          </div>
          <div className="card-body flex justify-between p-2">
            <div className="p-3">
              <h5 className="text-start font-bold">70 858</h5>
              <p className="text-sm">Quantité de médicaments vendus</p>
            </div>
            <div className="p-3">
              <h5 className="text-start font-bold">52 88</h5>
              <p className="text-sm">Factures générées</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-center rounded-lg shadow-lg border-black border-2">
        <div className="card">
          <div className="card-header flex justify-between p-2 border-b-2 text-black text-sm py-2 rounded-t-lg">
            Ma pharmacie
            <div>
              <h4>Accedez a la gestion des utilisateurs</h4>
            </div>
          </div>
          <div className="card-body flex justify-between p-2">
            <div className="p-3">
              <h5 className="text-start font-bold">04</h5>
              <p className="text-sm">Nombre total de fournisseur</p>
            </div>
            <div className="p-3">
              <h5 className="text-start font-bold">05</h5>
              <p className="text-sm">Nombre total d'utilisateur</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-center rounded-lg shadow-lg border-black border-2">
        <div className="card">
          <div className="card-header flex justify-between p-2 border-b-2 text-black text-sm py-2 rounded-t-lg">
            Clients
            <div>
              <h4>aller a la page client </h4>
            </div>
          </div>
          <div className="card-body flex justify-between p-2">
            <div className="p-3">
              <h5 className="text-start font-bold">845</h5>
              <p className="text-sm">Nombre total de clients</p>
            </div>
            <div className="p-3">
              <h5 className="text-start font-bold">Adalimumab</h5>
              <p className="text-sm">Article frequement...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardDonnee;
