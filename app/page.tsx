"use client"
import ThemeToggle from '../components/ThemeToggle';
import Card from "@/components/Card";
import TeamCard from "@/components/TeamCard";
import PostCard from "@/components/PostCard";
import ArticleFeed from '@/components/ArticleFeed';
import Footer from '@/components/footer/Footer';
import StayAhead from '@/components/StayAhead';


export default function Home() {
  return (
    <>
      <main>

        <ThemeToggle />
        <Card limit={3} />
        <TeamCard limit={3} />
        <PostCard limit={3} />
        <ArticleFeed mainArticleLimit={1} secondaryArticleLimit={3} showMetaOnSecondary={true} />
         <StayAhead />
        <Footer />
      </main>
    </>
  );
}