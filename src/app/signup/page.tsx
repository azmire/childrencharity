import Link from "next/link";

export default function SignUp() {
  return (
    <div className="bg-white flex flex-col items-center pt-4">
      <div className="text-4xl">
        <h1>SignUp</h1>
      </div>
      <div className="mt-3">
        <form>
          <div className="flex flex-col items-center">
            <label htmlFor="fname">Email</label>
          </div>
          <input
            className="rounded-full border-green-300 border-solid border-2 p-1"
            type="email"
            placeholder="Email"
          ></input>
          <div className="flex flex-col items-center">
            <label htmlFor="fname">Username</label>
          </div>
          <input
            className="rounded-full border-green-300 border-solid border-2 p-1"
            type="text"
            placeholder="Username"
          ></input>
          <div className="flex flex-col items-center">
            <label htmlFor="fname">Password</label>
          </div>
          <input
            className="rounded-full border-green-300 border-solid border-2 p-1"
            type="password"
            placeholder="Password"
          ></input>
          <div className="flex flex-col items-center">
            <label htmlFor="fname">Repeat password</label>
          </div>
          <input
            className="rounded-full border-green-300 border-solid border-2 p-1"
            type="password"
            placeholder="Repeat password"
          ></input>
          <div className="flex flex-col items-center pt-2 ">
            <button
              type="button"
              className="bg-green-400 rounded-full px-5 py-1"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
      <div className="pt-2 ps-1">
        <p>
          Already have an account?
          <Link className="px-1.5 text-green-400" href={"/signin"}>
            Signin
          </Link>
          here
        </p>
      </div>
    </div>
  );
}
