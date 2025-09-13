import copaImg from './../assets/Hero.png'


export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 p-6 relative">
      {/* Título centrado */}
      <h1 className="absolute top-10 text-5xl md:text-6xl font-bold text-center w-full">
        Barquimia
      </h1>

      {/* Imagen más pequeña */}
      <img
        src={copaImg}
        alt="Copa de cóctel"
        className="w-40 md:w-60 lg:w-72 h-auto"
      />

      {/* Texto */}
      <div className="text-center md:text-left max-w-md">
        <p className="text-lg md:text-xl font-semibold text-gray-800">
          Somos un servicio de coctelería para{" "}
          <span className="text-blue-600 font-bold">TU</span> evento.
        </p>
      </div>
    </div>
  );
}


