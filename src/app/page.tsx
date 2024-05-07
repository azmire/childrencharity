export default async function Home() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const response = await fetch(
    `https://partners.every.org/v0.2/search/:children?apiKey=${apiKey}&take=50`
  );
  const result = await response.json();
  //console.log("result from homepage:>> ", result);
  return (
    <main>
      <div>
        <h1 className="text-4xl p-5">Welcome to Children Charity page</h1>
        <div className="p-5 pt-0">
          <p>
            Visit our Charities page and help children in need all over the
            world by donating.
            <br />
            Everylittle help is welcome.
          </p>
        </div>
      </div>
    </main>
  );
}
