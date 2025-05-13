import { notFound } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";

export async function generateStaticParams() {
  // Generate static parameters for the service page
  return validSlugs.map((slug) => ({ slug }));
}

const validSlugs = ["divorcio"];

interface ServicePageProps {
  params: { slug: string };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = params;

  // Redirect to 404 if the slug is not valid
  if (!validSlugs.includes(slug)) {
    return notFound();
  }

  return (
    <section
      id={`service-page-${slug}`}
      className="h-screen flex items-center justify-center bg-primary text-textPrimary"
    >
      <Navbar />

      <div className="relative w-full h-full flex items-center justify-center">
        {/* <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('./services-pages-img/divorce-img.jpg` }}></div> */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="./services-pages-img/divorce-img.jpg"
            alt="Imagem de fundo"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", opacity: 0.3 }}
          />
        </div>
      </div>
      {/* <div className="absolute top-0 left-0 w-full h-full  bg-slate-950 opacity-50"></div> */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <h1>Service Page: {slug}</h1>
        <p>This is the service page for {slug}.</p>
      </div>
    </section>
  );
}
