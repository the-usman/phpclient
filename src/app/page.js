import BWT from "@/components/BWT";
import Card from "@/components/Card";
import Last from "@/components/Last";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="container lg:px-10 px-5 py-5">
        <div className="heading font-[700] text-[22px]">
          Quick Start
        </div>
        <div className="cardContainer py-10" >
          <Card image={'/image1.png'} heading={'Personal Portfolio'} content={'Created 6 days ago'} />
          <Card image={'/image2.png'} heading={'Personal Portfolio'} content={'Created 6 days ago'} />
          <Card image={'/image3.png'} heading={'Personal Portfolio'} content={'Created 6 days ago'} />

        </div>
        <div className="w-full flex justify-center">
        <div className="buttons flex items-center">

          <button className="button w-[40px] h-[40px] flex justify-center items-center rounded-full"><Image src={'/left.svg'} height={18} width={18} /></button>
          <button className="button w-[40px] h-[40px] flex justify-center items-center  rounded-full">1</button>
          <button className="button w-[40px] h-[40px] flex justify-center items-center  rounded-full">2</button>
          <button className="button w-[40px] h-[40px] flex justify-center items-center  rounded-full">3</button>
          <button className="button w-[40px] h-[40px] flex justify-center items-center rounded-full">4</button>
          <button className="button w-[40px] h-[40px] flex justify-center items-center rounded-full">5</button>
          <button className="button w-[40px] h-[40px] flex justify-center items-center rounded-full"><Image src={'/right.svg'} height={18} width={18} /></button>
        </div>
      </div>
      <BWT />
      <Last />

    </div>
    </main >
  );
}

