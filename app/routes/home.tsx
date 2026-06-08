import type { Route } from "./+types/home";
import Navbar from "~/components/navbar";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sheets" },
    { name: "description", content: "Upload resumes, create job listings, and use AI to instantly analyze candidate fit." },
  ];
}

export default function Home() {
  return (
    <main>
      <div className="bg-[#FF5948] text-black">
        <Navbar />

        <section className="px-4 sm:px-8 lg:px-16 pt-12 pb-5">
          <div className="max-w-180 flex flex-col gap-8">
            <h1>Resume Analysis & Application Tracker</h1>
            <h2>AI-powered resume evaluation and application tracking.</h2>
          </div>
        </section>
      </div>
    </main>
  );
}