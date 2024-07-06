"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUpForm() {
  return (
    <form>
      <Label className="sr-only" htmlFor="email">
        Email
      </Label>
      <Input
        id="email"
        placeholder="jhon.doe@mail.com"
        type="email"
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect="off"
        className="mb-1 text-base inline-block"
      />
      <Button className="text-base w-full">Continue</Button>
    </form>
  );
}
