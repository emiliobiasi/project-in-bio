import { Metadata } from "next";
import FAQ from "../components/landing-page/faq";
import Header from "../components/landing-page/header";
import Hero from "../components/landing-page/hero";
import Pricing from "../components/landing-page/pricing";
import VideoExplanation from "../components/landing-page/video-explanation";
import { trackServerEvent } from "../lib/mixpanel";
import { getSEOTags } from "../lib/seo";
import Footer from "../components/landing-page/footer";

export const metadata: Metadata = getSEOTags({
  appName: "ProjectInBio",
  appDescription:
    "ProjectInBio - Seus projetos e redes sociais em um único link",
  keywords: ["ProjectInBio", "projetos", "redes sociais", "link"],
  appDomain: "https://micro-saas-course-projectinbio-bice.vercel.app/",
  canonicalUrlRelative: "/",
});

export default function Home() {
  trackServerEvent("page_view", {
    page: "home",
  });

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0">
      <Header />
      <Hero />
      <VideoExplanation />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
