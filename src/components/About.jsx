export function About() {
  return (
    <section
      id="about"
      data-aos="fade-right"
      className="hero flex flex-col gap-3 items-start"
    >
      <h2 className="text-2xl sm:text-4xl font-medium">Założenia projektu</h2>
      <p className="text-lg sm:text-xl mt-3 font-regular text-gray-900">
        Nasze urządzenie typu SmartHome będzie mierzyć temperaturę, wilgotność
        powietrza, tlenek węgla, to czy są opady na zewnątrz oraz monitorował
        ruch przy drzwiach, a następnie zapisywał w bazie danych którą będzie
        można przeglądać w aplikacji mobilnej.
      </p>
    </section>
  );
}
