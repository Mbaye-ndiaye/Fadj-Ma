import React from 'react'
import Tbody from './Tbody'

const Table = () => {
  return (
        <table className="table table-striped  text-center container w-100 mt-5 ">
            <thead>
                <tr>
                  <th scope="col">Nom du medicament</th>
                  <th scope="col">ID du medicament</th>
                  <th scope="col">Nom du groupe</th>
                  <th scope="col">Stocke en quantite</th>
                  <th scope="col">Action</th>
                </tr>
            </thead>
            <Tbody />
        </table>
  )
}

export default Table
