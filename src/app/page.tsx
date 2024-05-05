export default async function Home() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const response = await fetch(
    `https://partners.every.org/v0.2/search/:children?apiKey=${apiKey}&take=50`
  );
  const result = await response.json();
  //console.log("result from homepage:>> ", result);
  return (
    <main>
      <ul>
        {result.nonprofits &&
          result.nonprofits.map((charity: CharityData, i: number) => {
            //console.log("charity.tags :>> ", charity.tags);
            return <li key={i}>{charity.tags}</li>;
          })}
      </ul>
    </main>
  );
}
