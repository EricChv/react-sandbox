import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume AI" },
    { name: "description", content: "Upload resumes, create job listings, and use AI to instantly analyze candidate fit." },
  ];
}

export default function Home() {
  // When using strings inside [url()] use double quotes
  return <main className="bg-[url('/images/bg-main.svg')]">
    <section className="main-section">
      <div className="page-heading">
        <h1>Resume Analysis & Application Tracker</h1>
        <h2>Get AI-powered resume feedback and track every job application in one place.</h2>

      </div>
    </section>
  </ main>
}
