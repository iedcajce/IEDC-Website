"use client";
import { cn } from "@/lib/utils";
import Marquee from "./marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://www.boardofinnovation.com/wp-content/uploads/elementor/thumbs/Colgate-Logo-qoxowibfv49j4l6losspk0z9b2iin2hzwdui7aj3sw.png",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://www.boardofinnovation.com/wp-content/uploads/elementor/thumbs/Pepsico-Logo-qoxox6r8st73lrnylb3i29z8tuuwgdl96fwp32tuyo.png",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://www.boardofinnovation.com/wp-content/uploads/elementor/thumbs/Philips-Logo-qoxox9krdbauha309mkw2c3mj8s5uai7o4rl4beosg.png",
  },

  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://www.boardofinnovation.com/wp-content/uploads/elementor/thumbs/Google-Logo-qoxownyh04hd5kf9n2yyoeq0y5fk6fimfuuzhjlqf4.png",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://www.boardofinnovation.com/wp-content/uploads/elementor/thumbs/Amazon-Logo-1-qoxpo4sopu30fcix8yehjh6xvi1p40k8vt5scmvklc.png",
  },
];

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <div className={cn("flex-shrink-0 w-64")}>
      <img
        className="w-{100px} h-auto "
        alt=""
        src={img}
      />
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden   ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
