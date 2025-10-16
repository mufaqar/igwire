import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card";
import TeamCard from "@/components/TeamCard";



export default function Home() {
  return (
    <>
      <Card limit={3} />
      <TeamCard limit={3} />
   
    </>
  );
}
