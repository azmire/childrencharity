"use client";
import UserFavouriteList from "@/components/UserFavouriteList";
import React, { useEffect } from "react";

export default function Account() {
  // const { logout } = useAuth();

  const getFundRaiser = async () => {
    // setIsLoading(true);
    try {
      const response = await fetch(
        `https://partners.every.org/v0.2/nonprofit/c1c38cb5-16d6-4aca-a949-83c8e7cc1b88/fundraiser/8969f106-0e98-40fc-b743-5722410f37e6`
      );
      if (response.ok) {
        console.log("response", response);
        const data = await response.json();
        console.log("data from acc", data);
        return;
      }
      console.log("response not ok", response);
    } catch (error) {
      console.log("error :>>", error);
    }
  };

  useEffect(() => {
    getFundRaiser();
  }, []);

  return (
    <div>
      <h1>Account</h1>
      {/* <button onClick={logout}>Logout</button> */}
      <UserFavouriteList />
    </div>
  );
}
