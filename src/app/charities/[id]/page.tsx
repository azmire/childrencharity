import Favourites from "@/components/Favourites";
import ShareButton from "@/components/ShareButton";

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
  // console.log("result :>> ", result);

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-1 md:flex md:justify-center gap-5 gap-y-5 px-5 lg:px-5 md:mt-2">
        <div className="overflow-x-auto h-30 md:h-auto md:flex md:w-2/4 md:rounded-xl md:shadow-xl md:border">
          <div key={result.data.nonprofit.ein}>
            <div className="w-max lg:max-w-full lg:flex border-black">
              <img
                className="h-48 lg:h-auto w-full lg:w-fit flex-none bg-cover rounded text-center overflow-hidden"
                src={result.data.nonprofit.coverImageUrl}
                title="Charity cover image"
              ></img>
            </div>
            <div className="flex justify-start">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={result.data.nonprofit.logoUrl}
                alt="Avatar of Jonathan Reinink"
              ></img>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm">
                  <p className="text-gray-900 leading-none">
                    {result.data.nonprofit.locationAddress}
                  </p>
                </div>
                <div>
                  <Favourites ein={result.data.nonprofit.ein} />
                </div>
              </div>
            </div>
            <div className="w-full lg:max-w-full lg:flex border-black">
              <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    {result.data.nonprofit.name}
                  </div>
                  <p className="text-gray-700 text-base">
                    {result.data.nonprofit.descriptionLong}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:flex md:w-1/4 md:rounded-xl md:shadow-xl md:border">
          <a
            className="bg-green-400 h-6 border rounded-full p-5 flex justify-center items-center"
            data-every-style
            href={`https://www.every.org/${result.data.nonprofit.ein}/donate`}
          >
            Donate
          </a>
          <ShareButton />
        </div>
      </div>
    </>
  );
}
