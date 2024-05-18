import Link from 'next/link';

const Layout = ({ children }:any) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
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
