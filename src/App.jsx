import "./output.css";

function App() {
  return (
    <div className="page px-[4rem] sm:px-[24rem] pt-[3rem] flex flex-col gap-12">
      <section className="hero flex flex-col gap-3 items-start">
        <h1 className="text-4xl font-medium">Projekt Zespołowy</h1>
        <h2 className="text-xl font-regular">
          Proste, wieloczujnikowe urządzenie smart home zbudowane w oparciu o
          Arduino i interfejs w postaci aplikacji mobilnej
        </h2>
        <p className="text-lg font-regular text-gray-700">
          Krystian Zieja | Maciej Majerczyk
        </p>
      </section>

      <hr style={{ opacity: 0.25 }} />

      <section className="hero flex flex-col gap-3 items-start">
        <h2 className="text-2xl font-medium">Założenia projektu</h2>
        <p className="text-lg font-regular text-gray-900">
          Nasze urządzenie typu SmartHome będzie mierzył temperaturę, wilgotność
          powietrza, tlenek węgla, to czy są opady na zewnątrz oraz monitorował
          ruch przy drzwiach, a następnie zapisywał w bazie danych którą będzie
          można przeglądać w aplikacji mobilnej.
        </p>
      </section>

      <section className="hero flex flex-col gap-3 items-start">
        <h2 className="text-2xl font-medium">Elementy (części)</h2>
        <ul className="text-lg font-regular text-gray-900 list-disc">
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

      <section className="hero flex flex-col gap-3 items-start">
        <h2 className="text-2xl font-medium">Podział zadań</h2>
        <ul className="text-lg font-regular text-gray-900 list-disc"></ul>
      </section>
    </div>
  );
}

export default App;
