export function Tasks() {
  return (
    <section
      data-aos="fade-right"
      className="hero flex flex-col gap-3 items-start"
    >
      <h2 className="text-2xl sm:text-4xl font-medium mb-6">Podział zadań</h2>

      <div className="p-8 rounded-md border bg-gray-50 shadow-md border-gray-600/25 w-full">
        <h3 className="text-xl font-medium">Krystian Zieja:</h3>

        <ul className="text-lg font-regular text-gray-900 list-disc mt-6">
          <li className="ml-8">Napisanie apki mobilnej</li>
          <li className="ml-8">API</li>
        </ul>
      </div>

      <div className="p-8 rounded-md border bg-gray-50 shadow-md border-gray-600/25 w-full">
        <h3 className="text-xl font-medium">Maciej Majerczyk:</h3>

        <ul className="text-lg font-regular text-gray-900 list-disc mt-6">
          <li className="ml-8">Złożenie fizyczne projektu</li>
          <li className="ml-8">Programowanie mikrokontrolerów</li>
        </ul>
      </div>
    </section>
  );
}
