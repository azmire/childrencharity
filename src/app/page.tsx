export default async function Home() {
  const apiKey = process.env.API_KEY;
  const response = await fetch(
    `https://partners.every.org/v0.2/search/:children?apiKey=${apiKey}`
  );
  const result = await response.json();
  console.log("result :>> ", result);
  return (
    <main>
      <ul>
        {result.nonprofits &&
          result.nonprofits.map((charity) => {
            return <li>{charity.name}</li>;
          })}
      </ul>
    </main>
  );
}
