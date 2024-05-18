import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-2">
      <Head>
        <title>Ventana de Inicio</title>
        <meta name="description" content="Bienvenido a nuestra aplicación Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Bienvenido a{' '}
          <a className="text-blue-600" href="#">
            Nuestra Aplicación Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Comienza editando{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.tsx
          </code>
        </p>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desarrollado por{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}

export default Home;
