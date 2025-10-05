"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { auth } from "@/lib/auth";

export default function Home() {
  const { data: session } = authClient.useSession();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    authClient.signUp.email(
      {
        email,
        name,
        password,
      },
      {
        onSuccess: (ctx) => {
          window.alert("success");
        },
        onError: (ctx) => {
          // display the error message
          window.alert("error");
        },
      }
    );
  };

  if (session) {
    return (
    <div className="p-4 flex flex-col gap-y-4">
      <p>You are logged in as {session.user.name}</p>
      <Button onClick={() => authClient.signOut()}>
        Sign Out 
      </Button>
    </div>

    );
  }

  return (
    <div className="p-4 flex flex-col gap-y-4">
      <Input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={onSubmit} className="w-fit">
        Sign Up
      </Button>
    </div>
  );
}
