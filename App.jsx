
import React from 'react';
import './App.css';
import Header from './header';
import GalleryItem from './galleryItem';
import GallaryFooter from './components/GallaryFooter';

const imageData = [
  { id: 1, img: 'lake' },
  { id: 2, img: 'lake' },
  { id: 3, img: 'lake' },
  { id: 4, img: 'lake' }
];

function App() {
  return (
    <div>
      <Header />
      <div>
        {imageData.map(image => (
          <GalleryItem key={image.id} id={image.id} img={image.img} />
        ))}
      </div>
      <GallaryFooter />
    </div>
  );
}

export default App;
