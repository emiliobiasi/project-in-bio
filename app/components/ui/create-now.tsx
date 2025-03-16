"use client";

import { useState } from "react";
import Button from "./button";
import TextInput from "./text-input";
import { signIn } from "next-auth/react";

export default function CreateNow() {
  const [link, setLink] = useState("");

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 w-full mt-4 lg:mt-[10vh]">
      <span className="text-white text-base lg:text-xl hidden sm:block">
        projectinbio.com/
      </span>
      <TextInput
        placeholder="Seu link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="w-full sm:w-auto"
      />
      <Button
        onClick={() => {
          signIn("google", {
            redirectTo: `/criar?link=${link}`,
          });
        }}
        className="w-full sm:w-auto"
      >
        Criar agora
      </Button>
    </div>
  );
}
