import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/Marquee";
import Image from "next/image";

const reviews = [
  {
    body: "Create a stunning website for your woodworking business. Showcase your craftsmanship with ease.",
  },
  {
    body: "Build a professional website for your photography portfolio. Highlight your best shots effortlessly.",
  },
  {
    body: "Launch a sleek website for your restaurant. Easily display your menu and attract more customers.",
  },
  {
    body: "Design a modern website for your tech startup. Present your innovative solutions with style.",
  },
  {
    body: "Create a beautiful website for your handmade jewelry business. Let your creations shine online.",
  },
  {
    body: "Build a captivating website for your fitness studio. Schedule classes and engage your community.",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 flex",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      
      <blockquote className="mt-2 text-sm">{body}</blockquote>
      <Image src={'/arrow.svg'} width={30} height={30} />
    </figure>
  );
};

export default function Marquee1() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl bg-[#030014] ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
