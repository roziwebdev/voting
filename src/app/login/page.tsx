"use client";

import { useRouter } from 'next/navigation';

export default function Login() {

  const router = useRouter();

  const handleSubmit =  () => {
    router.push('/vote');
  };


    return (
    <div className="flex min-h-screen items-center justify-center p-8 bg-[url('/bg.jpg')] bg-cover bg-center">
        <div className="absolute top-48 text-center ">
            <h1 className="text-2xl font-bold mb-6 ">Selamat Datang di halaman login pemilihan ketua RT 002/RW 017</h1>
        </div>
            <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg">
                <div className="mb-4">
                    <input
                        placeholder="Enter your User ID"
                        type="text"
                        id="voterId"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button onClick={handleSubmit}
                    className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                    Login
                    </button>
                </div>
    </div>
  );
}
