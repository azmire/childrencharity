"use client";
import { useAuth } from "@/components/context/AuthContext";
import { useState } from "react";

const Fundraiser = () => {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const every_sk = process.env.NEXT_PUBLIC_EVERY_ORG_SK;
  //const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("validating pass");
    if (!user) {
      alert("Log in please!");
    } else if (every_sk) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", every_sk);
      myHeaders.append(
        "Cookie",
        "_cfuvid=w1CbgbY3fk2qiyj1q75bwQiLwusWe9UJeq24hgu6Qyw-1715762423907-0.0.1.1-604800000"
      );

      const raw = JSON.stringify({
        nonprofitId: "c1c38cb5-16d6-4aca-a949-83c8e7cc1b88",
        title: "Test Your fundraiser title",
        description: "A detailed description of your fundraiser",
        startDate: "2024-05-14",
        endDate: "2024-06-30",
        goal: 10000,
        raisedOffline: 1000,
        currency: "USD",
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://partners.every.org/v0.2/fundraiser", requestOptions as any)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    } else {
      console.log("something went wrong");
    }
  };

  return (
    <div className="bg-white flex flex-col items-center pt-4">
      <div className="text-4xl">
        <h1>Create Your Fundraiser</h1>
      </div>
      <div className="mt-3">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
            <label htmlFor="fname">Title</label>
          </div>
          <input
            className="rounded-full border-green-300 border-solid border-2 p-1"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>

          <div className="flex flex-col items-center">
            <label htmlFor="fname">Goal ($ USD)</label>
          </div>
          <input
            className="rounded-full border-green-300 border-solid border-2 p-1"
            type="number"
            placeholder="Goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          ></input>
          {/* <div className="flex flex-col items-center">
            <label htmlFor="fname">Description</label>
          </div>
          <input
            className="rounded-full border-green-300 border-solid border-2 p-1"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input> */}

          <label htmlFor="message" className="flex flex-col items-center">
            Your message
          </label>
          <textarea
            id="message"
            rows={6}
            className="w-full rounded-md border-green-300 border-solid border-2 p-1"
            placeholder="Write your fundraiser description here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <div className="flex flex-col items-center pt-2 ">
            <button
              type="submit"
              className="bg-green-400 rounded-full px-5 py-1"
            >
              Create Fundraiser
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Fundraiser;
