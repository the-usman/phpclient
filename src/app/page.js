"use client";

import React, { useState } from "react";
import BWT from "@/components/BWT";
import Card from "@/components/Card";
import Last from "@/components/Last";
import Sidebar from "@/components/Sidebar";
import Pagination from "@/components/Pagination"; 

export default function Home() {
  const items = [
    { image: '/image1.png', heading: 'Personal Portfolio', content: 'Created 6 days ago' },
    { image: '/image2.png', heading: 'Personal Portfolio', content: 'Created 6 days ago' },
    { image: '/image3.png', heading: 'Personal Portfolio', content: 'Created 6 days ago' },
    { image: '/image4.png', heading: 'Personal Portfolio', content: 'Created 6 days ago' },
    { image: '/image5.png', heading: 'Personal Portfolio', content: 'Created 6 days ago' },
    { image: '/image6.png', heading: 'Personal Portfolio', content: 'Created 6 days ago' },
    { image: '/image7.png', heading: 'Personal Portfolio', content: 'Created 6 days ago' },
    { image: '/image8.png', heading: 'Personal Portfolio', content: 'Created 6 days ago' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <main className="flex">
      <Sidebar />
      <div className="container px-5 py-5">
        <div className="heading font-[700] text-[22px]">
          Quick Start
        </div>
        <div className="cardContainer py-10">
          {currentItems.map((item, index) => (
            <Card key={index} image={item.image} heading={item.heading} content={item.content} />
          ))}
        </div>
        <div className="w-full flex justify-center">
          <Pagination 
            totalPages={totalPages} 
            currentPage={currentPage} 
            onPageChange={handlePageChange} 
          />
        </div>
        <BWT />
        <Last />
      </div>
    </main>
  );
}
