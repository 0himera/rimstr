import React from 'react';

const Map = () => {
  return (
    <section id="map" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Расположение</h2>
        <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.617635,55.755814&z=13&l=map"
            width="100%"
            height="500"
            frameBorder="0"
            title="Яндекс Карты"
            className="w-full h-full"
            allow="geolocation"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;