import { useEffect, useState } from 'react';
import Table from '../components/tableGastos';
import { Gastos } from '../types';

export default function Home() {
  const [gastos, setGastos] = useState<Gastos[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/getGastos');  // Ajusta la ruta según tu configuración
      const result = await res.json();
      console.log(result)
      setGastos(result.result.rows);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Table data={gastos} />
    </div>
  );
}