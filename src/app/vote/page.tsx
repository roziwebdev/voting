"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Vote() {
  const [selectedCandidate, setSelectedCandidate] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

  const candidates = [
    { name: 'H. Mirzah', image: '/1.jpeg' },
    { name: 'Puguh Hadi P', image: '/2.jpeg' },
    { name: 'Suratman', image: '/3.jpeg' },
    { name: 'Fuad Nur Aziz', image: '/4.jpeg' },
  ];

  const handleVote = async () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmVote = () => {
    router.push('/terimakasih');
  };

  return (
    <div className="p-8 min-h-screen flex flex-col items-center bg-[url('/bg.jpg')] bg-cover bg-center">
      <h1 className="text-2xl font-bold mb-6 text-center">Berikut Kandidat Ketua RT 002/RW 017</h1>
      <div className="grid grid-cols-2 gap-6 w-full max-w-lg bg-opacity-80 p-6 rounded-lg">
        {candidates.map((candidate) => (
          <div
            key={candidate.name}
            className={`border rounded-lg p-4 flex flex-col items-center ${
              selectedCandidate === candidate.name
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300'
            }`}
          >
            <img
              src={candidate.image}
              alt={candidate.name}
              className="w-32 h-32 rounded-lg mb-4"
            />
            <label className="text-lg font-medium">{candidate.name}</label>
            <input
              type="radio"
              name="candidate"
              value={candidate.name}
              className="mt-2"
              onChange={(e) => setSelectedCandidate(e.target.value)}
            />
          </div>
        ))}
      </div>
      <button
        className="mt-8 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 disabled:bg-gray-300"
        onClick={handleVote}
        disabled={!selectedCandidate}
      >
        Submit Vote
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">Anda yakin akan memilih kandidat ini?</h2>
            <p className="mb-4">Anda akan memilih {selectedCandidate}.</p>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={confirmVote}
              >
                Iya
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
                onClick={closeModal}
              >
                Tidak
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
