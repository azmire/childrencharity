import { FAVOURITES } from "@/app/api/graphql/queries";
import { useQuery } from "@apollo/client";

const UserFavouriteList = async () => {
  //fetching favourites saved by user from graphql database
  const { data } = useQuery<{ favourites: UserFavourites[] }>(FAVOURITES);

  //embedding ein saved as favourites to fetch charities from rest API
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const response = await fetch(
    `https://partners.every.org/v0.2/nonprofit/931081536?apiKey=${apiKey}&take=50`
  );
  const result = await response.json();
  console.log("result from homepage:>> ", result);

  return (
    <div>
      <p>Favourites</p>
      {data &&
        data.favourites.map((favourite) => {
          return favourite.favourite;
        })}
    </div>
  );
};
export default UserFavouriteList;
