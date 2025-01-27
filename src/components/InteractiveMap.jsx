import React from "react";

const Map = () => {
  return (
    <section id="map" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
          Расположение
        </h2>
        <div className="relative rounded-lg overflow-hidden shadow-lg max-h-[500px]">
          <img src="/map.png" alt="" className="object-center" />
          <button
            className="absolute bg-green-500 hover:bg-primary-600 easy-in duration-500 text-white py-2 px-4 rounded-full cursor-pointer z-40"
            style={{ top: "48%", left: "68%" }}
            onClick={() => window.open("https://yandex.ru/maps/?ll=47.707699%2C42.811822&mode=routes&rtext=~42.811491%2C47.711559&rtt=auto&ruri=~&z=14.4", "_blank")}
          >
            !
          </button>
        </div>
      </div>
    </section>
  );
};

export default Map;
