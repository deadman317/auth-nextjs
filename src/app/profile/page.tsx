"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const logout = async () => {
    try {
      const res = await axios.get("/api/users/logout");
      console.log(res.data);
      if (res.status === 200) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold mb-10">Profile Page</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
