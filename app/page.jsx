"use client";

import { useState, useEffect } from "react";
import { signIn, getProviders, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const [Providers, setProviders] = useState(null);
  useEffect(() => {
    const getP = async () => {
      const response = await getProviders();
      setProviders(response);
      console.log(response);
    };
    getP();
  }, []);
  if (!session) {
    return (
      <main className="bg-blue-900 w-screen h-screen flex flex-col justify-center items-center gap-10">
        {Providers &&
          Object.values(Providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="bg-white text-blue-600 p-2 px-4 transition-colors shadow-white text-lg rounded-md hover:bg-blue-400 hover:text-white"
                onClick={() => {
                  signIn(provider.id);
                }}
              >
                Login With {provider.name}
              </button>
            </div>
          ))}
      </main>
    );
  } else {
    return <div>logged in {session?.user.email}</div>;
  }
}
