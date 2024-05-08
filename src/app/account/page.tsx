"use client";
import UserFavouriteList from "@/components/UserFavouriteList";
import { useAuth } from "../../components/context/AuthContext";
import React from "react";

export default function Account() {
  const { logout } = useAuth();
  return (
    <div>
      <h1>Account</h1>
      <button onClick={logout}>Logout</button>
      <UserFavouriteList />
    </div>
  );
}
