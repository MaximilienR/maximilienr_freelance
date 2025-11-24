import { useState } from 'react';
import max from '../../assets/max.png';
import bucket from '../../assets/bucket.png';
import cinelounge from '../../assets/cine.png';
import anaf from '../../assets/anaf.png';
import hero from '../../assets/hero.png';
import elec from '../../assets/electord.png';

type Product = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  externalLink: string;
  image?: string;
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
      description: 'Fonctionnalités essentielles : ajouter, modifier, supprimer des objectifs, notifications et album souvenirs.',
      technologies: ['Figma', 'HTML', 'CSS', 'JS', 'React', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
      externalLink: 'https://bucketlist-ooan.onrender.com/',
      image: bucket,
    },
    {
      id: 3,
      name: 'Cinelounge',
      description: 'Plateforme de streaming de films et séries avec recommandations personnalisées et interface conviviale.',
      technologies: ['HTML', 'CSS', 'JS', 'React', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
      externalLink: 'https://drive.google.com/file/d/1UpbeDvUANkv1RARs4WXp4WZb8xeih0Va/view?usp=sharing',
      image: cinelounge,
    },
    {
      id: 4,
      name: 'ANAF',
      description: 'Refonte totale du site de l’entreprise avec une nouvelle charte graphique et mise en avant des services.',
      technologies: ['Figma', 'HTML', 'CSS', 'JS', 'React', 'Bootstrap', 'PHP', 'Symfony'],
      externalLink: 'https://drive.google.com/file/d/1t_drN3BY71eTdI9qC7mCHAaG58bQJGDT/view?usp=sharing',
      image: anaf,
    },
    {
      id: 5,
      name: 'Hero',
      description: 'Site de commercialisation d’articles sous licence de vêtements et accessoires pour enfants.',
      technologies: ['Figma', 'Java', 'Android Studio', 'XML', 'Firebase'],
      externalLink: 'https://drive.google.com/file/d/1nrWSTTVofRNL5HHtRjoLx_4h3PermNHV/view?usp=sharing',
      image: hero,
    },
    {
      id: 6,
      name: 'Electrod',
      description: 'Logiciel de bureau pour la prise de notes et la gestion de fichiers.',
      technologies: ['HTML', 'CSS', 'JS', 'Electron', 'Node.js'],
      externalLink: 'https://github.com/MaximilienR/Electrod',
      image: elec,
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  return (
    <div className="flex flex-col items-center mt-4 p-4py-min-h-screen bg-slate-50">
      <h1 className="mb-8 text-4xl font-bold text-sky-900">Nos réalisations phares</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-[90%] max-w-3xl p-6 rounded-xl shadow-lg relative flex flex-col md:flex-row gap-6">
            {selectedProduct.image && (
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="object-cover w-full h-64 rounded-lg md:w-1/2"
              />
            )}

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
