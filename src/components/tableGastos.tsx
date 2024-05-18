import Link from 'next/link';
import { Gastos } from '../types/Gastos';
import { useState } from 'react';
import Modal from './modal';

interface propGastos {
    data: Gastos[];
}

const Table = ({ data }: propGastos) => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className='relative float-right right-16 top-2 z-10 bg-red-600'>
                <button onClick={openModal}>Añadir</button>
                <Modal isOpen={isOpen} onClose={closeModal}>
                    <h2>Modal Content</h2>
                    <p>This is the content of the modal.</p>
                    <button onClick={closeModal}>Close Modal</button>
                </Modal>
            </div>
            <div className="w-100 overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Descripción
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Precio
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Día
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.descripcion}
                                </th>
                                <td className="px-6 py-4">
                                    {item.precio}
                                </td>
                                <td className="px-6 py-4">
                                    {item.dia}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
