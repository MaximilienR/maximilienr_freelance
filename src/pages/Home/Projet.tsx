import React, { useState } from 'react';
import entrepriseImg from '../../assets/entreprise.jpg'; // ajuste le chemin si nécessaire
import max from '../../assets/max .png'
import bucket from '../../assets/bucket.png'
import cinelounge from '../../assets/cine.png'
import anaf from '../../assets/anaf.png'
import hero from '../../assets/hero.png'
type Product = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  externalLink: string;
  image?: string; // image spécifique au projet
};

function Projet() {
  const products: Product[] = [
    {
      id: 1,
      name: 'Max&Formation',
      description: 'Ce projet met en vente des formations pour développeurs.',
      technologies: ['HTML', 'CSS', 'JS', 'React', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
      externalLink: 'https://maxformation.onrender.com/',
      image: max,
    },
    {
      id: 2,
      name: 'BucketList',
      description: '. Fonctionnalités de base (essentielles) Gestion de Bucket List ➔ Ajouter, modifier, supprimer des objectifs facilement. Dates & rappels intelligents ➔ Notifications motivantes pour réaliser les objectifs à temps. Album souvenirs ➔ Intégration de photos et vidéos des réalisations. Statistiques visuelles ➔ Graphiques pour suivre l’évolution ',
      technologies: ['Figma', 'HTML', 'CSS', 'JS', 'React ', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
      externalLink: 'https://bucketlist-ooan.onrender.com/',
      image: bucket,
    },
    {
      id: 3,
      name: 'cinelounge',
      description: 'Plateforme de streaming de films et séries avec recommandations personnalisées et interface conviviale.',
      technologies: ['HTML', 'CSS', 'JS', 'React', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
      externalLink: 'https://drive.google.com/file/d/1UpbeDvUANkv1RARs4WXp4WZb8xeih0Va/view?usp=sharing',
      image: cinelounge,
    },
    {
      id: 4,
      name: 'anaf',
      description: 'refonte totale de site de l entreprise en proposant une nouvelle charte graphique et mettre en avant leurs services.',
      technologies: ['Figma','HTML', 'CSS', 'JS', 'React', 'Bootstrap', 'Php', 'Symfony', ],
      externalLink: 'https://drive.google.com/file/d/1t_drN3BY71eTdI9qC7mCHAaG58bQJGDT/view?usp=sharing/',
      image: anaf,
    },
    {
      id: 5,
      name: 'Hero',
      description: 'Ce site est destiné à la commercialisation d’articles sous licence de vêtements et accessoires pour enfants : ',
      technologies: ['Figma','Java ','Android Studio','XML','Firebase'],
      externalLink: 'https://drive.google.com/file/d/1nrWSTTVofRNL5HHtRjoLx_4h3PermNHV/view?usp=sharing',
      image: hero,
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-slate-50">
      <h1 className="mb-8 text-4xl font-bold text-slate-900">Nos réalisations phare </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative flex items-center justify-center w-64 h-32 overflow-hidden text-lg font-bold text-white transition duration-300 ease-in-out transform rounded-lg cursor-pointer hover:scale-105"
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={() => openModal(product)}
          >
            <div className="absolute inset-0 rounded-lg bg-black/30"></div>
            <span className="relative z-10">{product.name}</span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-[90%] max-w-3xl p-6 rounded-xl shadow-lg relative flex flex-col md:flex-row gap-6">
            {/* Image */}
            {selectedProduct.image && (
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="object-cover w-full h-64 rounded-lg md:w-1/2"
              />
            )}

            {/* Contenu */}
            <div className="flex flex-col justify-between flex-1">
              <div>
                <button
                  onClick={closeModal}
                  className="absolute text-xl font-bold text-gray-500 top-4 right-4 hover:text-gray-800"
                >
                  ×
                </button>
                <h2 className="mb-4 text-2xl font-bold text-sky-900">
                  Projet : {selectedProduct.name}
                </h2>
                <p className="mb-4 text-gray-700">{selectedProduct.description}</p>
                <p className="mb-4">
                  <span className="font-semibold">Technologies utilisées :</span>{' '}
                  {selectedProduct.technologies.join(', ')}
                </p>
              </div>
              <a
                href={selectedProduct.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start px-4 py-2 mt-2 font-semibold text-white rounded-lg bg-sky-600 hover:bg-sky-700"
              >
                Voir plus
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projet;
