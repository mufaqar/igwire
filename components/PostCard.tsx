import React from 'react';
import Image from 'next/image';

const eventCardsData = [
    {
        id: 1,
        imageSrc: '/images/card-img.jpg',
        altText: 'Casino industry event',
        date: '18 Mar, 2025',
        title: 'The Rise of Live Casino: Real Dealers, Real Excitement',
        description: `The iGaming industry continues to evolve rapidly, with new regulations, partnerships, and product launches shaping the landscape.`,
        location: 'Madrid, Spain',
        eventDate: 'October 12-16, 2025',
        buttons: [
            { text: 'Learn More', link: '#' },
            { text: 'Register', link: '#' }
        ]
    },
    {
        id: 2,
        imageSrc: '/images/card-img.jpg',
        altText: 'Casino industry event',
        date: '18 Mar, 2025',
        title: 'The Rise of Live Casino: Real Dealers, Real Excitement',
        description: ``,
        location: 'Madrid, Spain',
        eventDate: 'October 12-16, 2025',
        buttons: [
            { text: 'Learn More', link: '#' },
        ]
    },
    {
        id: 3,
        imageSrc: '/images/card-img.jpg',
        altText: 'Casino industry event',
        date: '18 Mar, 2025',
        title: 'The Rise of Live Casino: Real Dealers, Real Excitement',
        description: `The iGaming industry continues to evolve rapidly, with new regulations, partnerships, and product launches shaping the landscape.`,
        location: 'Madrid, Spain',
        eventDate: 'October 12-16, 2025',
        buttons: [
            { text: 'Learn More', link: '#' },
            { text: 'Register', link: '#' },

        ]
    },

];

interface NewsProps {
    limit?: number;
    showEventCard?: boolean;
}

function PostCard({ limit = 3, showEventCard = true }: NewsProps) {
    const displayedCards = eventCardsData.slice(0, limit);

    return (
        <section className='container'>
            <div className='wraper'>
                {showEventCard && displayedCards.map((card) => (
                    <div key={card.id} className='post-card'>
                        <div className='img'>
                            <Image
                                src={card.imageSrc}
                                width={500}
                                height={500}
                                alt={card.altText}
                                className='img'
                            />

                        </div>
                        <div className='post-content'>
                            <div className='card-buttons'>
                                {card.buttons && card.buttons.length > 0 && (
                                    <div className=''>
                                        {card.buttons.map((button, index) => (
                                            <a key={index} href={button.link} className='card-button'>
                                                {button.text}
                                            </a>
                                        ))}
                                    </div>
                                )}
                                <span>{card.date}</span>
                            </div>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PostCard;
