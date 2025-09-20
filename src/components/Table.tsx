import React, { useEffect, useState } from 'react'
import type { Bus } from '../types/Bus';
import { obtenerBuses,obtenerBusPorId } from '../api';

function Table() {
    
    const [buses,setBuses] = useState<Bus[]>([]);

    useEffect (()=>{
        obtenerBuses()
        .then(setBuses)
        .catch
    },[])

    
  return (
    <>
     <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Num Bus</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Placa</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Fecha Creación</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Características</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Marca</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {buses.map((bus) => (
              <tr key={bus.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-700">{bus.id}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{bus.numBus}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{bus.placa}</td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {new Date(bus.fechaCreacion).toLocaleString()}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">{bus.caracteristicas}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{bus.marca.nombreMarca}</td>
                <td className="px-4 py-2 text-sm">
                  {bus.estado ? (
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded-full">
                      Activo
                    </span>
                  ) : (
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-red-800 bg-red-200 rounded-full">
                      Inactivo
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div></>
  )
}

export default Table

