
import React from 'react';
import Image from 'next/image';

export interface Article {
    id: number;
    imageSrc?: string;
    altText?: string;
    category: string;
    timeAgo: string;
    title: string;
}

export const articles: Article[] = [
    {
        id: 1,
        imageSrc: '/images/card-img.jpg',
        altText: 'iGW Meets Dinos Stranomitis',
        category: 'OPINION',
        timeAgo: '25 minutes ago',
        title: 'iGW Meets Dinos Stranomitis at ICE Barcelona 2025 A Look into Altenars Journey and Future Plans',
    },
    {
        id: 2,
        category: 'OPINION',
        timeAgo: '25 minutes ago',
        title: 'Casino Bonuses Explained: What\'s Worth Claiming?'
    },
    {
        id: 3,
        category: 'OPINION',
        timeAgo: '25 minutes ago',
        title: 'Casino Bonuses Explained: What\'s Worth Claiming?'
    },
    {
        id: 4,
        category: 'OPINION',
        timeAgo: '25 minutes ago',
        title: 'Casino Bonuses Explained: What\'s Worth Claiming?'
    },

];


interface ArticleFeedProps {
    mainArticleLimit?: number;
    secondaryArticleLimit?: number;

    showMetaOnMain?: boolean;
    showMetaOnSecondary?: boolean;

    mainCardClassName?: string;
    secondaryCardClassName?: string;
}

const ArticleFeed: React.FC<ArticleFeedProps> = ({
    mainArticleLimit = 1,
    secondaryArticleLimit = 3,
    showMetaOnSecondary = false,

}) => {
    const mainArticles = articles.slice(0, mainArticleLimit);
    const secondaryArticles = articles.slice(mainArticleLimit, mainArticleLimit + secondaryArticleLimit)

    return (
        <section className=" container ">
            <div className='wraper'>
                {mainArticles.map((article: Article) => (
                    <div key={article.id} className='ArticleFeed'>
                        {article.imageSrc && (
                            <div className='img'>
                                <Image
                                    src={article.imageSrc}
                                    width={500}
                                    height={500}
                                    alt={article.altText ?? article.title}
                                    className='img'
                                />
                            </div>
                        )}
                        <div>
                            {showMetaOnSecondary && (
                                <div>
                                    <span className='category'>{article.category}</span>
                                    <span className='time'>{article.timeAgo}</span>
                                </div>
                            )}
                            <h2>{article.title}</h2>
                        </div>
                        <div>
                            {secondaryArticles.map((article: Article) => (
                                <div key={article.id} className='border' >
                                    {showMetaOnSecondary && (
                                        <div>
                                            <span className='category'>{article.category}</span>
                                            <span className='time'>{article.timeAgo}</span>
                                        </div>
                                    )}
                                    <h3>{article.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                {secondaryArticles.length > 0 && <div></div>}
            </div>
        </section>
    );
};

export default ArticleFeed;
