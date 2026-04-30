import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex justify-between items-center bg-slate-200 p-4">
          <div className="flex gap-1 items-center">
            <Image
              src={news.author?.img}
              alt={news.author?.img}
              width={40}
              height={40}
              className="rounded-full"
            />

            <div>
              <h2 className="font-semibold">{news.author?.name}</h2>
              <p className="text-xs">{news.author?.published_date}</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <CiShare2 size={25} className="cursor-pointer" />
            <CiBookmark size={25} className="cursor-pointer" />
          </div>
        </div>
        <h2 className="card-title">{news.title}</h2>

        <figure>
          <Image
            src={news.image_url}
            alt={news.title}
            width={500}
            height={300}
            className="w-full"
          />
        </figure>

        <p className="line-clamp-3">{news.details}</p>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <h2 className="flex items-center gap-2"><FaStar color="yellow" size={25}/>{news.rating.number}</h2>
            <h2 className="flex items-center gap-2"><FaEye />{news.total_view}</h2>
          </div>

          <Link href={"/news/${news._id}"}>
            <button className="btn">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
