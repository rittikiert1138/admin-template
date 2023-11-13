import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FiLogIn, FiFacebook } from "react-icons/fi";
import { AiOutlineGoogle } from "react-icons/ai";

const LoginPage = () => {
  return (
    <div className="w-[440px] bg-white mx-auto mt-40 shadow-lg rounded-lg px-16 pt-14 pb-20">
      <div className="text-center">
        <h2 className="text-2xl uppercase font-bold">Sign In</h2>
        <p className="font-medium mt-4 text-gray-400">
          Sign in for your account
        </p>
      </div>
      <div className="mt-6">
        <Label htmlFor="username">Username</Label>
        <Input id="username" placeholder="Username..." />
      </div>
      <div className="mt-6">
        <Label htmlFor="username">Password</Label>
        <Input id="password" placeholder="Password..." />
      </div>
      <div className="mt-10">
        <Link href="dashboard">
          <Button className="w-full uppercase">
            Sign In <FiLogIn className="ml-2" />{" "}
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-10">
        <div>
          <Button className="w-full uppercase bg-white border text-gray-700 hover:bg-gray-100">
            Facebook <FiFacebook className="ml-2" />{" "}
          </Button>
        </div>
        <div>
          <Button className="w-full uppercase bg-white border text-gray-700 hover:bg-gray-100">
            Google <AiOutlineGoogle className="ml-2" />{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
