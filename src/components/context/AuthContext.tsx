"use client";

import { logoutCookie } from "@/actions/logout";
import { ApolloQueryResult, gql, useQuery } from "@apollo/client";
import { signOut, useSession } from "next-auth/react";
import {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type getMeRes = {
  getMe: User;
};

interface AuthContext {
  user: User | null;
  setUser: React.Dispatch<SetStateAction<User | null>>;
  logout: () => void;
  //refetch: () => Promise<ApolloQueryResult<getMeRes>>;
}

const AuthContext = createContext({} as AuthContext);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  const logout = () => {
    setUser(null);
    //signOut();
    logoutCookie();
    // clear cookies or nextauth signout
  };

  // NOTE how to make the active user state persist?
  const getMeQuery = gql`
    query getMe {
      getMe {
        _id
        email
        username
      }
    }
  `;

  // const session = useSession();
  // console.log("this is the open session ", session);

  const { refetch, data } = useQuery<getMeRes>(getMeQuery);
  console.log("data", data);

  useEffect(() => {
    if (data) {
      setUser(data.getMe);
    }
  }, [data]);

  // useEffect(() => {
  //   if (session.status === "authenticated") {
  //     refetch();
  //   }
  // }, [session.status])

  // use either cookie/jwt token or nextauth session to get user email for gql context

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
