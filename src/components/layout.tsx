import Link from 'next/link';

const Layout = ({ children }:any) => {
  return (
    <div>
      <header className='mt-3 flex align-middle justify-center '>
        <nav className="border border-black w-1/2 shadow-sm shadow-gray-600 rounded">
          <ul className='flex align-middle justify-evenly'>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/gastos">Gastos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
