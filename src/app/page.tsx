import { BeakerIcon } from "@heroicons/react/16/solid";

export default async function Home() {
  const apiKey = process.env.API_KEY;
  const response = await fetch(
    `https://partners.every.org/v0.2/nonprofit/maps?apiKey=${apiKey}`
  );
  const result = await response.json();
  console.log("result :>> ", result);

  return (
    <main>
      <div>{result.data.nonprofit.description}</div>;
    </main>
  );
}
