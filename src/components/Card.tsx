import Favourites from "./Favourites";

export default function Card({ charity }: CharityInfo) {
  return (
    <div key={charity.ein}>
      <div className="w-full lg:max-w-full lg:flex border-black">
        <img
          className="h-48 lg:h-auto w-full lg:w-48 flex-none bg-cover rounded text-center overflow-hidden"
          src={charity.coverImageUrl}
          title="Charity cover image"
        ></img>
        <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">
              {charity.name}
            </div>
            <p className="text-gray-700 text-base">{charity.description}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex justify-start">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={charity.logoUrl}
                alt="Avatar of Jonathan Reinink"
              ></img>
              <div className="text-sm">
                <p className="text-gray-900 leading-none">{charity.location}</p>
                <div className="pt-1 text-xs text-blue-500">
                  {/* <a href={charity.websiteUrl}>Visit Website</a> */}
                </div>
              </div>
            </div>
            <div>
              <Favourites ein={charity.ein} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
