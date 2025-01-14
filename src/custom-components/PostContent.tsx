import { postType } from "@/app/posts/onePost/[postId]/page";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export const PostContent = ({
  postImage,
  post,
}: {
  postImage: string | undefined;
  post: postType | undefined;
}) => {
  return (
    <CardContent className="flex justify-center ">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            {" "}
            {post?.postImg ? (
              <Image
                src={postImage}
                alt="Post Image"
                priority={true}
                width={500}
                height={500}
              />
            ) : null}
          </CarouselItem>
          {/* <CarouselItem>
            {" "}
            <img src={postImage} className="w-screen" />
          </CarouselItem>
          <CarouselItem>
            {" "}
            <div>
              <img src={postImage} className="w-screen" />\
            </div>
          </CarouselItem> */}
        </CarouselContent>
      </Carousel>
    </CardContent>
  );
};
