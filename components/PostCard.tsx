"use client";
import React from "react";
import Image from "next/image";
import { Post } from "@/lib/gql-types";

interface NewsProps {
  limit?: number;
  showEventCard?: boolean;
  data: Post[];
}

function PostCard({ data }: NewsProps) {
  return (
    <section className="container">
      <div className="wraper">
        {data.map((item, idx) => (
          <div key={idx} className="post-card">
            <div className="img">
              <Image
                src={
                  item.featuredImage?.node.sourceUrl || "/images/card-img.jpg"
                }
                width={500}
                height={500}
                alt={item.title || "Post Image"}
                className="img"
              />
            </div>
            <div className="post-content">
              <div className="item-buttons">
                {/* {item.buttons && item.buttons.length > 0 && (
                                    <div className=''>
                                        {item.buttons.map((button, index) => (
                                            <a key={index} href={button.link} className='card-button'>
                                                {button.text}
                                            </a>
                                        ))}
                                    </div>
                                )} */}
                <span>{item.date}</span>
              </div>
              <h3>{item.title}</h3>

              <div dangerouslySetInnerHTML={{ __html: item.excerpt || "" }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PostCard;
