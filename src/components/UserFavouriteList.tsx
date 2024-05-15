"use client";
import { useEffect, useState } from "react";

const UserFavouriteList = () => {
  const [data, setData] = useState<FavouriteCharity | null>(null);
  const [isLoading, setLoading] = useState(true);

  //embedding ein saved as favourites to fetch charities from rest API
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    fetch(
      `https://partners.every.org/v0.2/nonprofit/550376118?apiKey=${apiKey}&take=50`
    )
      .then((res) => res.json())
      .then((data: FavouriteCharity) => {
        setData(data);
        console.log("data from favs :>> ", data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      <p>Favourites</p>
      <p>{data.data.nonprofit.name}</p>
    </div>
  );
};
export default UserFavouriteList;
