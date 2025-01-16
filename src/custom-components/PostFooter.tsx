import { CardFooter } from "@/components/ui/card";
import IsLiked from "./isLiked";
import { Bookmark, MessageCircle, Send } from "lucide-react";
import LikedUsersDialog from "./LikedUsersDialog";
import Link from "next/link";

type likeType = {
  proImg: string;
  username: string;
  _id: string;
  email: string;
};
export type postType = {
  _id: string;
  caption: string;
  postImg: string;
  userId: userType;
  likes: likeType[];
  comments: commentType[];
}[];

export type userType = {
  _id: string;
  proImg: string;
  username: string;
};
export type commentType = {
  comment: string;
  _id: string;
  userId: userType;
  postId: string;
};
export const PostFooter = ({
  likedUsers,
  postId,
  postComments,
  postCaption,
  username,
}: {
  likedUsers: likeType[] | undefined;
  postId: string | undefined;
  postComments: commentType[] | undefined;
  postCaption: string | undefined;
  username: string | undefined;
}) => {
  return (
    <CardFooter className="space-y-2 flex flex-col items-start">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "full",
        }}
        className="flex justify-between"
      >
        <div className="flex gap-2">
          <IsLiked
            token={localStorage.getItem("accessToken") ?? ""}
            likedUsers={likedUsers}
            postId={postId}
          />
          <Link href={`/posts/${postId}`}>
            <MessageCircle className="text-white" />
          </Link>
          <Send className="text-white" />
        </div>
        <div>
          <Bookmark className="text-white" />
        </div>
      </div>

      <LikedUsersDialog likedUsers={likedUsers} />
      <div className="flex gap-2">
        <div className="text-white font-semibold">{username}</div>
        <p className="text-white">{postCaption}</p>
      </div>
      {postComments && postComments.length > 0 ? (
        <div className="flex justify-start">
          <Link
            className="text-white text-sm font-sans font-bold"
            href={`/posts/${postId}`}
          >
            View all {postComments?.length} comments
          </Link>
        </div>
      ) : null}
    </CardFooter>
  );
};
