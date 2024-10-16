// components/SearchBar/SearchBar.tsx

import React from 'react';
import Input from '@/components/Input/Input';

const SearchBar: React.FC = () => {
  const locations = [
    { value: 'brasilia', label: 'Brasília' },
    { value: 'rio-de-janeiro', label: 'Rio de Janeiro' },
    { value: 'sao-paulo', label: 'São Paulo' },
    { value: 'salvador', label: 'Salvador' },
    { value: 'fortaleza', label: 'Fortaleza' },
    { value: 'belo-horizonte', label: 'Belo Horizonte' },
    { value: 'curitiba', label: 'Curitiba' },
    { value: 'recife', label: 'Recife' },
    { value: 'porto-alegre', label: 'Porto Alegre' },
    { value: 'manaus', label: 'Manaus' },
    { value: 'belém', label: 'Belém' },
    { value: 'joao-pessoa', label: 'João Pessoa' },
    { value: 'teresina', label: 'Teresina' },
    { value: 'macapá', label: 'Macapá' },
    { value: 'maceió', label: 'Maceió' },
    { value: 'aracaju', label: 'Aracaju' },
    { value: 'campo-grande', label: 'Campo Grande' },
    { value: 'cuiabá', label: 'Cuiabá' },
    { value: 'rio-branco', label: 'Rio Branco' },
    { value: 'boa-vista', label: 'Boa Vista' },
    { value: 'porto-velho', label: 'Porto Velho' },
    { value: 'florianopolis', label: 'Florianópolis' },
    { value: 'vitoria', label: 'Vitória' },
  ];

  return (
    <div className="search-bar">
      <Input 
        className="search-input" 
        iconSrc="./loupe.png" 
        placeholder="Search Job"
      />
      <Input 
        className="location-input" 
        selectClassName='location-select'
        iconSrc="./location.png" 
        placeholder="Select Location" 
        options={locations}
      />
    </div>
  );
};

export default SearchBar;
