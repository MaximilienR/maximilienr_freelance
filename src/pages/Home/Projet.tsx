import React from 'react';
import entrepriseImg from '../../assets/entreprise.jpg'; // Assure-toi que le fichier est dans le même dossier ou ajuste le chemin

function Projet() {
  const products = [
    { id: 1, name: 'Produit 1' },
    { id: 2, name: 'Produit 2' },
    { id: 3, name: 'Produit 3' },
    { id: 4, name: 'Produit 4' },
    { id: 5, name: 'Produit 5' },
    { id: 6, name: 'Produit 6' },
    { id: 7, name: 'Produit 7' },
    { id: 8, name: 'Produit 8' },
    { id: 9, name: 'Produit 9' },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-center w-64 h-32 text-lg font-bold transition duration-300 ease-in-out transform rounded-lg cursor-pointer hover:scale-105 hover:text-white"
          style={{
            backgroundImage: `url(${entrepriseImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {product.name}
        </div>
      ))}
    </div>
  );
}

export default Projet;
