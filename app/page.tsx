"use client";
import { Button } from "@/components/button";
import { FormField } from "@/components/form";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  return (
    <div className="flex flex-col p-10 h-screen w-screen">
      <h3 className="text-center text-3xl font-medium">
        Github Profile Customizer
      </h3>
      <div className="flex-grow flex flex-col items-center justify-center">
        <form
          onSubmit={() => {
            router.push(`/profile/${username}`);
          }}
          className="max-w-xs"
        >
          <div className="flex flex-col gap-2">
            <FormField>
              <Label>Github Username</Label>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormField>
            <Button>Customize Profile</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
