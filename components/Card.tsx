import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";

// Multiple event cards data
const eventCardsData = [
  {
    id: 1,
    imageSrc: "/images/card-img.jpg",
    altText: "SBC Rio de Janeiro 2025 event",
    title: "SBC Rio de Janeiro 2025",
    description: `Codere Online (Nasdaq: CDRO / CDROW) has strengthened its position as a top-tier brand in Spain, rising to 77th place in Brand Finance's annual ranking of the country's most valuable brands—up from 85th in 2024.`,
    additionalInfo: `The company remains the only gaming operator on the prestigious list, reinforcing its dominance in the industry.`,
    location: "Madrid, Spain",
    eventDate: "October 12-16, 2025",
  },
  {
    id: 2,
    imageSrc: "/images/card-img.jpg",
    altText: "SBC Rio de Janeiro 2025 event",
    title: "SBC Rio de Janeiro 2025",
    description: `Codere Online (Nasdaq: CDRO / CDROW) has strengthened its position as a top-tier brand in Spain, rising to 77th place in Brand Finance's annual ranking of the country's most valuable brands—up from 85th in 2024.`,
    additionalInfo: `The company remains the only gaming operator on the prestigious list, reinforcing its dominance in the industry.`,
    location: "Madrid, Spain",
    eventDate: "October 12-16, 2025",
  },
  {
    id: 3,
    imageSrc: "/images/card-img.jpg",
    altText: "SBC Rio de Janeiro 2025 event",
    title: "SBC Rio de Janeiro 2025",
    description: `Codere Online (Nasdaq: CDRO / CDROW) has strengthened its position as a top-tier brand in Spain, rising to 77th place in Brand Finance's annual ranking of the country's most valuable brands—up from 85th in 2024.`,
    additionalInfo: `The company remains the only gaming operator on the prestigious list, reinforcing its dominance in the industry.`,
    location: "Madrid, Spain",
    eventDate: "October 12-16, 2025",
  },
];

interface NewsProps {
  limit?: number;
  showEventCard?: boolean;
}

function Card({ limit = 3, showEventCard = true }: NewsProps) {
  const displayedCards = eventCardsData.slice(0, limit);

  return (
    <div className="wraper">
      {showEventCard &&
        displayedCards.map((card) => (
          <div key={card.id} className="event_card">
            <Image
              src={card.imageSrc}
              width={500}
              height={250}
              alt={card.altText}
              className="img"
            />
            <div className="content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <p>{card.additionalInfo}</p>
              <div className="footer">
                <div className="loc">
                  <FaMapMarkerAlt className="icon" />
                  <span>
                    <a href="#">{card.location}</a>
                  </span>
                </div>
                <div className="date">
                  <FaCalendar className="icon" />
                  <span>{card.eventDate}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Card;
