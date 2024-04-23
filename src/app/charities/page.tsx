"use client";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import FilterRadioButton from "../components/FilterRadioButton";

export default function Charities() {
  const [data, setData] = useState<AllCharities | null>();
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  console.log("data :>> ", data);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://partners.every.org/v0.2/search/:children?apiKey=${apiKey}&take=50`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data test:>> ", data);
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  let radioValue = "humans";

  return (
    <div className="grid grid-cols-1 grid-rows-1 md:flex md:justify-center gap-5 gap-y-5 px-5 lg:px-5 pt-5">
      <div className="h-8 md:h-auto md:flex md:w-2/4 md:rounded-xl md:shadow-xl md:border">
        <FilterRadioButton />
      </div>
      <div>
        <p className="text-2xl text-slate-500 font-bold pb-5">
          List of {data.nonprofits.length} children charities
        </p>
        {data.nonprofits.map((charity: CharityData) => {
          if (radioValue == "") {
            return (
              <>
                <div
                  key={charity.ein}
                  className="flex w-4/4 gap-y-5 rounded-xl shadow-xl border"
                >
                  <Card charity={charity} />
                </div>
              </>
            );
          } else {
            return (
              <div>
                {charity.tags &&
                  charity.tags.map((tag) => {
                    return tag;
                  })}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
