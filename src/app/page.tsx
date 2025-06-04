import Hero from "@/components/Hero";
import "./globals.css";
import Camp from "@/components/Camp";
import Guide from "@/components/Guide";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Camp></Camp>
      <Guide></Guide>
      <Features></Features>
      <GetApp></GetApp>
    </>
  );
}
