import { useEffect } from "react";
import "./output.css";

import "aos/dist/aos.css";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

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

      <section
        data-aos="fade-up"
        className="hero flex flex-col gap-3 items-start"
      >
        <h2 className="text-2xl font-medium mb-3">Podział zadań</h2>

        <div className="p-8 rounded-md border shadow-md border-gray-600/25 w-full">
          <h3 className="text-xl font-medium">Krystian Zieja:</h3>

          <ul className="text-lg font-regular text-gray-900 list-disc mt-6">
            <li className="ml-8">Napisanie apki mobilnej</li>
            <li className="ml-8">API</li>
          </ul>
        </div>

        <div className="p-8 rounded-md border shadow-md border-gray-600/25 w-full">
          <h3 className="text-xl font-medium">Maciej Majerczyk:</h3>

          <ul className="text-lg font-regular text-gray-900 list-disc mt-6">
            <li className="ml-8">Złożenie fizyczne projektu</li>
            <li className="ml-8">Programowanie mikrokontrolerów</li>
          </ul>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="hero flex flex-col gap-3 items-start"
      >
        <h2 className="text-2xl font-medium mb-3">Stack technologiczny</h2>

        <div className="p-8 rounded-md border shadow-md border-gray-600/25 w-full">
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

        <div className="p-8 rounded-md border shadow-md border-gray-600/25 w-full">
          <h3 className="text-xl font-medium">Aplikacja Mobilna (Android)</h3>

          <ul className="text-lg font-regular text-gray-900 list-disc mt-6">
            <li className="ml-8">Kotlin</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
