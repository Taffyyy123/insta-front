"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import BottomNav from "@/custom-components/BottomNav";
import { userType } from "@/custom-components/isLiked";
import { useCallback, useEffect, useState } from "react";

const Page = () => {
  const [users, setUsers] = useState<userType[]>([]);
  const getUsers = useCallback(async () => {
    const token = localStorage.getItem("accessToken");
    const jsonData = await fetch(
      "https://instagram-backend-e3eq.onrender.com/user/users",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const response = await jsonData.json();
    setUsers(response);
  }, []);
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  useEffect(() => {
    console.log(users);
  }, [users]); //
  return (
    <div className="w-screen h-full bg-black flex flex-col items-center">
      <div className="text-white font-sans font-bold flex justify-center text-2xl p-3">
        Search
      </div>
      <Input
        placeholder="Search"
        className="font-sans font-bold text-lg bg-neutral-800 w-11/12 text-white mb-4"
      />
      <div className="flex flex-col gap-4 overflow-scroll h-fit pb-9">
        {users.map((user) => {
          return (
            <div
              key={user._id}
              className="text-white flex justify-start items-center gap-3"
            >
              <div className="flex justify-start items-center">
                {user?.proImg == null ? (
                  <Avatar className="w-[40px] h-[40px]">
                    <AvatarImage src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" />
                  </Avatar>
                ) : (
                  <Avatar className="w-[40px] h-[40px]">
                    <AvatarImage src={user.proImg} />
                  </Avatar>
                )}
              </div>
              <div className="font-bold font-sans text-lg">{user.username}</div>
            </div>
          );
        })}
      </div>
      <BottomNav />
    </div>
  );
};
export default Page;
