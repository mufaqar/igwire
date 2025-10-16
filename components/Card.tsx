import Image from 'next/image';
import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";

// Multiple event cards data
const eventCardsData = [
  {
    id: 1,
    imageSrc: '/images/card-img.jpg',
    altText: 'SBC Rio de Janeiro 2025 event',
    title: 'SBC Rio de Janeiro 2025',
    description: `Codere Online (Nasdaq: CDRO / CDROW) has strengthened its position as a top-tier brand in Spain, rising to 77th place in Brand Finance's annual ranking of the country's most valuable brands—up from 85th in 2024.`,
    additionalInfo: `The company remains the only gaming operator on the prestigious list, reinforcing its dominance in the industry.`,
    location: 'Madrid, Spain',
    eventDate: 'October 12-16, 2025'
  },
  {
    id: 2,
    imageSrc: '/images/card-img.jpg',
    altText: 'SBC Rio de Janeiro 2025 event',
    title: 'SBC Rio de Janeiro 2025',
    description: `Codere Online (Nasdaq: CDRO / CDROW) has strengthened its position as a top-tier brand in Spain, rising to 77th place in Brand Finance's annual ranking of the country's most valuable brands—up from 85th in 2024.`,
    additionalInfo: `The company remains the only gaming operator on the prestigious list, reinforcing its dominance in the industry.`,
    location: 'Madrid, Spain',
    eventDate: 'October 12-16, 2025'
  },
 {
    id: 3,
    imageSrc: '/images/card-img.jpg',
    altText: 'SBC Rio de Janeiro 2025 event',
    title: 'SBC Rio de Janeiro 2025',
    description: `Codere Online (Nasdaq: CDRO / CDROW) has strengthened its position as a top-tier brand in Spain, rising to 77th place in Brand Finance's annual ranking of the country's most valuable brands—up from 85th in 2024.`,
    additionalInfo: `The company remains the only gaming operator on the prestigious list, reinforcing its dominance in the industry.`,
    location: 'Madrid, Spain',
    eventDate: 'October 12-16, 2025'
  },
 
];

interface NewsProps {
  limit?: number;
  showEventCard?: boolean;
}

function Card({ limit = 3, showEventCard = true }: NewsProps) {
  const displayedCards = eventCardsData.slice(0, limit);

  return (
    <div className='grid-col'>
      {showEventCard && displayedCards.map((card) => (
        <div key={card.id} className='card'>
          <Image
            src={card.imageSrc}
            width={500}
            height={250}
            alt={card.altText}
            className='card-image'
          />
          <div className='card-content'>
            <h3 className='card-title'>{card.title}</h3>
            <p className='card-description'>{card.description}</p>
            {card.additionalInfo && (
              <p className='card-additional-info'>{card.additionalInfo}</p>
            )}
            <div className='card-footer'>
              <div className='card-location'>
                <FaMapMarkerAlt className='card-icon' />
                <span>{card.location}</span>
              </div>
              <div className='card-event-date'>
                <FaCalendar className='card-icon' />
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




