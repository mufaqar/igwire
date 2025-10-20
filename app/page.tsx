
import ThemeToggle from '../components/ThemeToggle';
import Card from "@/components/Card";
import TeamCard from "@/components/TeamCard";
import PostCard from "@/components/PostCard";
import ArticleFeed from '@/components/ArticleFeed';
import Footer from '@/components/footer/Footer';
import StayAhead from '@/components/StayAhead';
import { getBlogData } from '@/lib/api/getHomeData';


export default async function Home() {
  const getPost = await getBlogData(); 
  console.log("Blog Posts:", getPost);

  return (
    <>
      <main>

        <ThemeToggle />
        <Card limit={3} />
        {/* <TeamCard limit={3} /> */}
        <PostCard data={getPost}  />
        <ArticleFeed mainArticleLimit={1} secondaryArticleLimit={3} showMetaOnSecondary={true} />
         <StayAhead />
        <Footer />
      </main>
    </>
  );
}