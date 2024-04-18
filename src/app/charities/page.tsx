import Card from "../components/Card";

export default async function Charities() {
  const apiKey = process.env.API_KEY;
  const response = await fetch(
    `https://partners.every.org/v0.2/search/:children?apiKey=${apiKey}&take=50`
  );
  const result = await response.json();
  //console.log("result :>> ", result);

  return (
    <div className="grid grid-cols-1 justify-items-end gap-y-5 p-5">
      {result.nonprofits &&
        result.nonprofits.map((charity: CharityData) => {
          return (
            <div className=" w-3/4 rounded shadow-xl border">
              <Card charity={charity} />
            </div>
          );
        })}
    </div>
  );
}
