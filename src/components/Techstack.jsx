export function Techstack() {
  return (
    <section
      data-aos="fade-right"
      className="hero flex flex-col gap-3 items-start"
    >
      <h2 className="text-2xl sm:text-4xl font-medium mb-6">
        Stack technologiczny
      </h2>

      <div className="p-8 rounded-md border bg-gray-50 shadow-md border-gray-600/25 w-full">
        <h3 className="text-xl font-medium">Aplikacja API</h3>

        <ul className="text-lg font-regular text-gray-900 list-disc mt-6">
          <li className="ml-8">
            Bun.js - środowisko uruchomieniowe Javascript
          </li>
          <li className="ml-8">
            Express.js - framework do aplikacji backendowych
          </li>
          <li className="ml-8">PostreSQL - baza danych</li>
          <li className="ml-8">Docker</li>
        </ul>
      </div>

      <div className="p-8 rounded-md border bg-gray-50 shadow-md border-gray-600/25 w-full">
        <h3 className="text-xl font-medium">Aplikacja Mobilna (Android)</h3>

        <ul className="text-lg font-regular text-gray-900 list-disc mt-6">
          <li className="ml-8">Kotlin</li>
        </ul>
      </div>
    </section>
  );
}
