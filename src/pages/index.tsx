import { useEffect, useState } from 'react';
import { Usuario } from '../types/Usuario';

export default function Home() {
  const [data, setData] = useState<Usuario[]>([]);

  return (
    <div>
      <h1>Datos de PostgreSQL</h1>

    </div>
  );
}
