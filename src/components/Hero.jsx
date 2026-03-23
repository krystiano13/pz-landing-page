export function Hero() {
  return (
    <section
      data-aos="fade-right"
      className="hero flex flex-col gap-8 items-start py-36 min-h-[100vh]"
    >
      <h1 className="text-4xl sm:text-6xl font-medium">Projekt Zespołowy</h1>
      <h2 className="text-xl sm:text-2xl font-regular">
        Proste, wieloczujnikowe urządzenie smart home zbudowane w oparciu o
        Arduino i interfejs w postaci aplikacji mobilnej
      </h2>
      <p className="text-lg sm:text-xl font-regular text-gray-700">
        Krystian Zieja | Maciej Majerczyk
      </p>
      <a href="#about">
        <button className="px-6 sm:px-8 py-2 sm:py-4 text-lg sm:text-xl rounded-xl cursor-pointer text-white bg-emerald-600 hover:bg-emerald-500 hover:scale-[1.02] transition-all">
          Przejdź dalej
        </button>
      </a>
    </section>
  );
}
