export default async function Charities() {
  const apiKey = process.env.API_KEY;
  const response = await fetch(
    `https://partners.every.org/v0.2/nonprofit/children?apiKey=${apiKey}`
  );
  const result = await response.json();
  console.log("result :>> ", result);

  return (
    <main>
      <div>{result.data.nonprofit.name}</div>;
    </main>
  );
}
