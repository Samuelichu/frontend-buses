import { useEffect, useState } from "react";
import type { Bus } from "../types/Bus";
import Button from "./button";

function Table() {
  const API_URL = "http://localhost:8080/api-v1/bus";
  const [buses, setBuses] = useState<Bus[]>([]);
  const [page, setPage] = useState(0);
  const size= 5;
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetch(`${API_URL}?page=${page}&size=${size}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("admin:1234"),
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Error en la petición");
        return response.json();
      })
      .then((data) => {
        setBuses(data.content);
        setTotalPages(data.totalPages);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [page, size]);

  const busPorId = (id: number) => {
    fetch(`${API_URL}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("admin:1234"),
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Error en la petición");
        return response.json();
      })
      .then((data) => {
        mostrarInformacion(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const mostrarInformacion = (bus: Bus) => {
    const fechaFormato = bus?.fechaCreacion.slice(0, 10).split("-").reverse().join("/")
    alert(`la información del bus seleccionado es:
        Número: ${bus?.numBus}
        Placa: ${bus?.placa}
        Marca: ${bus?.nombreMarca}
        Características: ${bus?.caracteristicas}
        Estado: ${bus?.estado ? "Activo" : "Inactivo"}
        Fecha de creación: ${bus?.fechaCreacion ? fechaFormato : '--/--/--'}
        `);
  };

  return (
    <>
      <div className="flex flex-col gap-7 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 table-auto text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-sm font-medium text-gray-700">
                ID
              </th>
              <th className="px-4 py-2  text-sm font-medium text-gray-700">
                Num Bus
              </th>
              <th className="px-4 py-2  text-sm font-medium text-gray-700">
                Placa
              </th>
              <th className="px-4 py-2  text-sm font-medium text-gray-700">
                Fecha Creación
              </th>
              <th className="px-4 py-2  text-sm font-medium text-gray-700">
                Características
              </th>
              <th className="px-4 py-2  text-sm font-medium text-gray-700">
                Marca
              </th>
              <th className="px-4 py-2  text-sm font-medium text-gray-700">
                Estado
              </th>
              <th className="px-4 py-2  text-sm font-medium text-gray-700">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {buses.map((bus) => (
              <tr key={bus.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-700">{bus.id}</td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {bus.numBus}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">{bus.placa}</td>
                <td className="px-4 py-2 text-sm text-gray-700">
                {bus.fechaCreacion.slice(0, 10).split("-").reverse().join("/")}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {bus.caracteristicas}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {bus.nombreMarca}
                </td>
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
                <td className="px-4 py-2 text-sm">
                  <Button
                    texto="Mostrar información"
                    onClick={() => busPorId(bus.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col gap-3 self-end">
          <p className="text-xs font-light">
            Página {page + 1} de {totalPages}
          </p>
          <div className="flex flex-row gap-4">
            <Button
              texto="Anterior"
              onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
              disabled={page === 0}
            />

            <Button
              texto="Siguiente"
              onClick={() =>
                setPage((prev) => Math.min(prev + 1, totalPages - 1))
              }
              disabled={page + 1 === totalPages}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
