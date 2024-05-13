declare type GetCharityProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function GetCharity({ params }: GetCharityProps) {
  console.log("params", params);
  const apiKey = process.env.API_KEY;
  const { id } = params;
  const response = await fetch(
    `https://partners.every.org/v0.2/nonprofit/${id}?apiKey=${apiKey}`
  );
  const result = await response.json();
  console.log("result :>> ", result);

  return <h1>{result.data.nonprofit.name}</h1>;
}
