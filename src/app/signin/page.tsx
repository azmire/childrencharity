import Link from "next/link";

export default function Signin() {
  return (
    <div className="bg-white flex flex-col items-center pt-4">
      <div className="text-4xl">
        <h1>Signin</h1>
      </div>
      <div className="mt-3">
        <form>
          <div className="flex flex-col items-center">
            <label htmlFor="fname">Email</label>
          </div>
          <input
            className="rounded-full border-green-400 border-solid border-2 p-1"
            type="email"
            placeholder="Email"
          ></input>
          <div className="flex flex-col items-center">
            <label htmlFor="fname">Password</label>
          </div>
          <input
            className="rounded-full border-green-400 border-solid border-2 p-1"
            type="password"
            placeholder="Password"
          ></input>
          <div className="flex flex-col items-center pt-2 ">
            <button
              type="button"
              className="bg-green-400 rounded-full px-5 py-1"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="pt-2 ps-1">
          <p>
            New here?
            <Link className="px-1.5 text-green-400" href={"/signup"}>
              SignUp
            </Link>
            instead
          </p>
        </div>
      </div>
    </div>
  );
}
