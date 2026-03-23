export function Elements() {
  return (
    <section
      data-aos="fade-right"
      className="hero flex flex-col gap-3 items-start py-3"
    >
      <h2 className="text-2xl sm:text-4xl font-medium">Elementy (części)</h2>
      <ul className="text-lg sm:text-xl font-regular text-gray-900 list-disc mt-3">
        <li className="ml-8">ESP32 WiFi + BT 4.2</li>
        <li className="ml-8">Czujnik tlenku węgla MQ-9</li>
        <li className="ml-8">Czujnik ruchu PIR HC-SR501</li>
        <li className="ml-8">
          Czujnik temperatury i wilgotności powietrza DHT11
        </li>
        <li className="ml-8">Czujnik opadów YL-83</li>
        <li className="ml-8">Wyświetlacz LCD 2x16 LCD-03335</li>
        <li className="ml-8">Płytka stykowa</li>
      </ul>
    </section>
  );
}
