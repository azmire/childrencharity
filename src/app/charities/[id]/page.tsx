export default async function CharityDetailPage() {
  const apiKey = process.env.API_KEY;
  const response = await fetch(
    `https://partners.every.org/v0.2/nonprofit/592751953?apiKey=${apiKey}`
  );
  const result = await response.json();
  console.log("result :>> ", result);

  return (
    <main>
      <div>{result.data.nonprofit.websiteUrl}</div>;
    </main>
  );
}
