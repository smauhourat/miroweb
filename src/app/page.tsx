import { Collab } from "@/components/Collab";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <Collab />
      <Work />
    </main>
  );
}
