import React from 'react'
import CardDonnee from './CardDonnee'
import ButtonProps from '../../page/buttonProps/ButtonProps'



const Dashbord = () => {
  return (
    <div className='bg-slate-300 h-screen'>
        <div className='flex items-center justify-between bg-white p-2'>
      <div className=''>
        {/* <p className='bg-slate-400 w-full px-4 rounded-md'>Recherchez n'import quoi ici</p> */}
        <input type='text' 
        className='bg-slate-400 w-full px-6 p-2 border-slate-400 placeholder:text-slate-100  rounded-md'
        placeholder="Recherchez n'import quoi ici "
        />
      </div>
      <div >
        <div className='flex gap-x-3 justify-end  items-center'>
        <p className='w-4 h-4 bg-[#FED600] rounded-full '></p>
        <p className='text-lg font-bold'>Bonjour</p>    
        </div>
            <p className='text-lg'>14 janvier 2022 - 22h:45:00</p>
      </div>
    </div>
    <div className='flex justify-between items-center p-4'>
        <div>
            <h1 className='text-'>Tableau de bord</h1>
            <p className='text-lg'>Un apercu rapide des donnees de votre pharmacie</p>
        </div>
        <div className='bg-red-700'>
        <ButtonProps text="Telecharger le rapport" className="border-black bg-white p-2 " >Telecharger le rapport</ButtonProps>
        </div>
    </div>
    <CardDonnee />
    </div>
  )
}

export default Dashbord

