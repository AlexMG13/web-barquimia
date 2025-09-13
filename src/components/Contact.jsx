export default function Contact() {
  return (
    <section
      id="contacto"
      className="flex flex-col justify-center items-center min-h-screen bg-gray-50"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-[#222831] mb-8">
        Contacto
      </h2>

      {/* Email */}
      <div className="flex flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-600"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
          <path d="M3 7l9 6l9 -6" />
        </svg>

        <p className="text-lg sm:text-xl ml-3">mendozaalex24@gmail.com</p>
      </div>

      {/* Teléfono */}
      <div className="flex flex-row items-center mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-600"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
        </svg>

        <p className="text-lg sm:text-xl ml-3">+54 3498 520066</p>
      </div>
    </section>
  );
}

