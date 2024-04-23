"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Card from "../components/Card";
import Search from "../components/Search";

export default function Charities() {
  const [charities, setCharities] = useState<CharityData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputText, setInputText] = useState("");
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const getCharities = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://partners.every.org/v0.2/search/:children?apiKey=${apiKey}&take=50`
      );
      if (response.ok) {
        console.log("response", response);
        const data = await response.json();
        console.log("data", data);
        setCharities(data.nonprofits);
        setIsLoading(false);
        return;
      }
      console.log("response not ok", response);
    } catch (error) {
      console.log("error :>>", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.value", typeof e.target.value);
    setInputText(e.target.value);
  };

  const filteredCharities = charities.filter((charity) => {
    return charity.name.toLowerCase().includes(inputText.toLowerCase());
    console.log("inputText", inputText.toLowerCase);
  });

  useEffect(() => {
    getCharities();
  }, []);
  return (
    <div className="wrapper grid grid-cols-1 justify-items-center gap-y-5 p-5">
      <div>
        <Search handleInputChange={handleInputChange} />
      </div>

      <div className="grid grid-cols-1 justify-items-end gap-y-5 p-5">
        {charities &&
          filteredCharities.map((charity: CharityData) => {
            return (
              <div
                key={charity.ein}
                className=" w-3/4 rounded shadow-xl border"
              >
                <Card charity={charity} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
