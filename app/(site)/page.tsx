import Hero from "@/components/home/Hero";
import Areas from "@/components/home/Areas";
import About from "@/components/home/About";
import Process from "@/components/home/Process";
import Reviews from "@/components/home/Reviews";
import BlogTeaser from "@/components/home/BlogTeaser";
import HomeFaq from "@/components/home/HomeFaq";
import Contact from "@/components/home/Contact";
import JsonLd from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/components/ui/Faq";
import { organizationGraph } from "@/lib/schema";
import { homeFaq } from "@/content/home-faq";

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationGraph()} />
      <JsonLd data={faqJsonLd(homeFaq)} />
      <Hero />
      <Areas />
      <About />
      <Process />
      <Reviews />
      <BlogTeaser />
      <HomeFaq />
      <Contact />
    </>
  );
}
