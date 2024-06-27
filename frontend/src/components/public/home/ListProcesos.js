import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ListProcesos = () => {
  const [procesos, setProcesos] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Número de elementos por página

  useEffect(() => {
    const fetchProcesos = async (page) => {
      try {
        const response = await axios.get('http://localhost:4000/proceso', {
          params: { page, limit: itemsPerPage }
        });
        setProcesos(response.data.procesos);
        setTotal(response.data.total);
      } catch (error) {
        console.error('Error fetching the processes', error);
      }
    };

    fetchProcesos(currentPage);

    const intervalId = setInterval(() => {
      fetchProcesos(currentPage);
    }, 5000);

    return () => clearInterval(intervalId);

  }, [currentPage]);

  const totalPages = Math.ceil(total / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="pb-5 mb-5">
      <h1>Listado de Procesos</h1>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>PID</th>
            <th>Nombre del Proceso</th>
            <th>Tipo</th>
            <th>Tamaño</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {procesos.map(proceso => (
            <tr key={proceso.id}>
              <td>{proceso.id}</td>
              <td>{proceso.pid}</td>
              <td>{proceso.nombre_proceso}</td>
              <td>{proceso.tipo}</td>
              <td>{proceso.size}</td>
              <td>{new Date(proceso.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </div>
  );
};
