import React from 'react';
import { FiZap, FiTool, FiCheck, FiMail, FiUser, FiCode, FiTarget, FiFileText, FiMessageSquare } from 'react-icons/fi';
import { BsRocket, BsStars } from 'react-icons/bs';
import { GiCrystalBall } from 'react-icons/gi';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-primary-text p-4 flex flex-col items-center">
      {/* Sticky Navbar */}
      <div className="w-full bg-background shadow-md fixed top-0 left-0 p-4 flex items-center z-10 gap-2">
        <img src="/public/advysor-brand.png" alt="Advysor.ai logo" className="size-9" />
        <span className="text-3xl font-bold bg-accent-gradient bg-clip-text text-transparent">ADVYSOR.AI</span>
      </div>

      {/* Main Content */}
      <div className="mt-20 max-w-3xl w-full bg-background border border-[#6C47FF] rounded-2xl shadow-lg p-8 mt-6">
        {/* Hero Section */}
        <h1 className="text-4xl font-bold mb-4">Your smarter, better, faster co-founder.</h1>
        <ul className="mb-6 space-y-2">
          <li className="flex items-center gap-2">
            <FiZap className="text-accent" /> Walk through your idea in minutes and turn it into a pitch deck.
          </li>
          <li className="flex items-center gap-2">
            <FiZap className="text-accent" /> Go from vague concept to MVP, complete with product requirements.
          </li>
          <li className="flex items-center gap-2">
            <FiZap className="text-accent" /> Create user personas, competitive analysis, and a launch strategy.
          </li>
        </ul>
        <p className="text-lg font-semibold mb-6 flex items-center gap-2">
          <BsStars className="text-accent" /> No account. No fluff. Just actionable startup strategy in 15 minutes.
        </p>
        <a href="#" className="bg-accent-gradient text-background px-6 py-3 rounded-lg hover:bg-cta">
          Try it now on ChatGPT →
        </a>
      </div>

      {/* How It Works Section */}
      <div className="max-w-3xl w-full bg-background border border-[#6C47FF] rounded-2xl shadow-lg p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FiTool className="text-accent" /> How It Works
        </h2>
        <ol className="space-y-4">
          <li>
            <span className="font-bold">1. Tell us your idea</span>
            <br />
            Just a sentence or two. No need for a perfect pitch.
          </li>
          <li>
            <span className="font-bold">2. Chat through your startup plan</span>
            <br />
            Advysor asks guided questions and builds your MVP, GTM, and pitch deck.
          </li>
          <li>
            <span className="font-bold">3. Get instant outputs</span>
            <br />
            Leave with user personas, product requirements, and a strategy you can build or pitch today.
          </li>
        </ol>
      </div>

      {/* Coming Soon Section */}
      <div className="max-w-3xl w-full bg-background border border-[#6C47FF] rounded-2xl shadow-lg p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GiCrystalBall className="text-accent" /> Coming Soon to Advysor
        </h2>
        <ul className="mb-4 space-y-2">
          <li className="flex items-center gap-2">
            <FiCheck className="text-accent" /> Saved chat history across sessions
          </li>
          <li className="flex items-center gap-2">
            <FiCheck className="text-accent" /> Deeper AI context (your idea evolves over time)
          </li>
          <li className="flex items-center gap-2">
            <FiCheck className="text-accent" /> One-click exports: pitch decks, PRDs, GTM plans
          </li>
          <li className="flex items-center gap-2">
            <FiCheck className="text-accent" /> Pro features for faster iteration and better collaboration
          </li>
        </ul>
        <p className="mb-4">
          Want early access when we launch the full version? Leave your email and we'll keep you in the loop.
        </p>
        <a href="#" className="bg-cta text-background px-6 py-3 rounded-lg inline-flex items-center gap-2">
          <FiMail className="text-background" /> Join the Waitlist
        </a>
      </div>

      {/* Who It's For Section */}
      <div className="max-w-3xl w-full bg-background border border-[#6C47FF] rounded-2xl shadow-lg p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FiUser className="text-accent" /> Who It's For
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center gap-2">
            <BsRocket className="text-accent" /> First-time founders - Structure and validate your idea without hiring a
            product team.
          </li>
          <li className="flex items-center gap-2">
            <FiCode className="text-accent" /> Technical builders - Turn code-worthy ideas into investor-worthy plans.
          </li>
          <li className="flex items-center gap-2">
            <FiTarget className="text-accent" /> Product people - 10x your speed on PRDs, GTM, and strategy docs.
          </li>
        </ul>
      </div>

      {/* What You'll Get Section */}
      <div className="max-w-3xl w-full bg-background border border-[#6C47FF] rounded-2xl shadow-lg p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FiFileText className="text-accent" /> What You'll Get
        </h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <FiCheck className="text-accent" /> MVP feature list
          </li>
          <li className="flex items-center gap-2">
            <FiCheck className="text-accent" /> Product requirements document
          </li>
          <li className="flex items-center gap-2">
            <FiCheck className="text-accent" /> User personas & competitive insight
          </li>
          <li className="flex items-center gap-2">
            <FiCheck className="text-accent" /> Go-to-market plan
          </li>
          <li className="flex items-center gap-2">
            <FiCheck className="text-accent" /> Auto-generated pitch deck
          </li>
        </ul>
        <p className="mt-4">"It's like having a product co-founder in your pocket."</p>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-3xl w-full bg-background border border-[#6C47FF] rounded-2xl shadow-lg p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FiMessageSquare className="text-accent" /> What Early Users Say (Placeholder)
        </h2>
        <p>"This gave me more clarity in 15 minutes than hours of solo brainstorming." – Indie Founder</p>
        <p>
          "I shared the output with a developer and got a build quote the same day." – Non-technical Startup Builder
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-3xl w-full bg-background border border-[#6C47FF] rounded-2xl shadow-lg p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FiCheck className="text-accent" /> Call to Action
        </h2>
        <div className="space-y-4">
          <a href="#" className="bg-accent-gradient text-background px-6 py-3 rounded-lg hover:bg-cta">
            Try Advysor on ChatGPT →
          </a>
          <a href="#" className="bg-cta text-background px-6 py-3 rounded-lg">
            Join the Waitlist →
          </a>
        </div>
      </div>
    </div>
  );
}
