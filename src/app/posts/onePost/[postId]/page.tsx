"use client";
import { Card } from "@/components/ui/card";
import BottomNav from "@/custom-components/BottomNav";
import { PostContent } from "@/custom-components/PostContent";
import { PostFooter } from "@/custom-components/PostFooter";
import { PostHeader } from "@/custom-components/PostHeader";
import { use, useEffect, useState } from "react";
export type postType = {
  _id: string;
  caption: string;
  postImg: string;
  userId: userType;
  likes: likeType[];
  comments: commentType[];
};
export type userType = {
  _id: string;
  proImg: string;
  username: string;
};
export type likeType = {
  proImg: string;
  username: string;
  _id: string;
  email: string;
};
export type commentType = {
  comment: string;
  _id: string;
  userId: userType;
  postId: string;
};
const Page = ({ params }: { params: Promise<{ postId: string }> }) => {
  const [post, setPost] = useState<postType>();
  const { postId } = use(params);

  const getOnePost = async () => {
    const token = localStorage.getItem("accessToken");
    const jsonData = await fetch(
      `https://instagram-backend-e3eq.onrender.com/post/getOnePost/${postId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const response = await jsonData.json();
    setPost(response);
  };
  useEffect(() => {
    getOnePost();
  }, [postId]);
  return (
    <Card
      key={post?._id}
      className="w-fit bg-black border-gray-700 border-r-0 border-l-0 rounded-none h-screen"
    >
      <PostHeader
        proImage={post?.userId.proImg}
        username={post?.userId.username}
        userId={post?.userId._id}
      />
      <PostContent postImage={post?.postImg} post={post} />
      <PostFooter
        likedUsers={post?.likes}
        postId={post?._id}
        postComments={post?.comments}
        postCaption={post?.caption}
        username={post?.userId.username}
      />
      <BottomNav />
    </Card>
  );
};
export default Page;
