"use client";
import { ADDTOFAVOURITE } from "@/app/api/graphql/mutations";
import { useAuth } from "@/components/context/AuthContext";
import { useMutation } from "@apollo/client";
import { HeartIcon } from "@heroicons/react/24/outline";

declare type FavouriteProps = {
  ein: string;
};

const Favourites = ({ ein }: FavouriteProps) => {
  const { user } = useAuth();
  //console.log("ein :>> ", ein);

  const [submit, { loading, error }] = useMutation(ADDTOFAVOURITE, {
    variables: { favourite: ein },
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!user) {
      alert("Login please");
    } else {
      console.log("trying to add favourite");
      const result = await submit();
      console.log("this is the result", result);
      if (result.data) {
        console.log("result.data :>> ", result.data);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input />
        <button type="submit">
          <HeartIcon className="size-8 stroke-red-500" />
        </button>
      </form>
    </div>
    // <div>
    //   <button onClick={addToFavourite}>
    //     <HeartIcon className="size-8 stroke-red-500" />
    //   </button>
    // </div>
  );
};
export default Favourites;
