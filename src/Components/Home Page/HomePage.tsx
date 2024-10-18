import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreVertical } from "lucide-react";
import cardImg3 from "@/assets/img/cycle.png";
import cardImg2 from "@/assets/img/rickshaw2.png";
import cardImg1 from "@/assets/img/note taking.png";
import financeImg from "@/assets/img/finance 2.png";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const apps = [
    {
      title: "Finance Tracker",
      description: "2 days ago",
      color: "bg-[#171717]",
      image: financeImg,
      link : '/finance-tracker'
    },
    {
      title: "Habit Tracker",
      description: "2 days ago",
      color: "bg-[#C4DDF2]",
      image: cardImg3,
      link : '/habit-tracker'
    },
    {
      title: "Notepad",
      description: "5 days ago",
      color: "bg-[#80A49B]",
      image: cardImg1,
      link : '/notepad'
    },
    {
      title: "Todo List",
      description: "5 days ago",
      color: "bg-[#536273]",
      image: cardImg2,
      link : '/todoList'
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:gap-y-20 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  w-full md:p-7 p-10">
      {apps.map((app, index) => (
        <Link href={`${app.link}`}>
          <Card
            key={index}
            className={` ${app.color} text-white min-w-[280px] min-h-[200px] relative hover:drop-shadow-xl hover:cursor-pointer duration-300 `}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-medium">
                {app.title}
              </CardTitle>
              <MoreVertical className="h-4 w-4" />
            </CardHeader>
            <CardContent className="">
              {/* <div className="text-sm">{app.description}</div> */}
              {/* <div className="mt-4">{app.icon}</div> */}
              <div className=" absolute -right-5 -bottom-6 ">
                <Image
                  alt="card image"
                  src={app.image}
                  // className="w-48  object-cover"
                  width={150}
                  height={150}
                />
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}