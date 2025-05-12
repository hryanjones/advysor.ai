import {
  FiZap,
  FiTool,
  FiCheck,
  /*FiMail,*/ FiUser,
  FiCode,
  FiTarget,
  FiFileText,
  FiMessageSquare,
} from 'react-icons/fi';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

import { BsRocket, BsStars } from 'react-icons/bs';
import { GiCrystalBall } from 'react-icons/gi';
import { /*TbMailbox, */ TbTargetArrow } from 'react-icons/tb';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-primary-text p-4 flex flex-col items-center">
      {/* Sticky Navbar */}
      <div className="w-full bg-background shadow-md fixed top-0 left-0 p-4 flex items-center z-10 gap-2">
        <img src="/advysor-brand.png" alt="Advysor.ai logo" className="size-9" />
        <span className="text-3xl font-bold bg-accent-gradient bg-clip-text text-transparent">ADVYSOR.AI</span>
      </div>

      {/* Main Content */}

      {/* Hero Section*/}
      <div className="mx-auto max-w-4xl mt-14">
        <div className="">
          <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl mt-6 mb-6 text-center">
            Your smarter, better, faster co-founder.
          </h1>
          <div className="ml-10">
            <ul className="mb-6 space-y-2">
              <li className="flex items-start gap-2">
                <FiZap className="text-accent size-6 flex-shrink-0" />
                Walk through your idea in minutes and turn it into a pitch deck.
              </li>
              <li className="flex items-start gap-2">
                <FiZap className="text-accent size-6 flex-shrink-0" /> Go from vague concept to MVP, complete with
                product requirements.
              </li>
              <li className="flex items-start gap-2">
                <FiZap className="text-accent size-6 flex-shrink-0" /> Create user personas, competitive analysis, and a
                launch strategy.
              </li>
            </ul>
            <p className="text-lg font-semibold mb-6 flex items-start gap-2">
              <BsStars className="text-accent size-6 flex-shrink-0" /> No account. No fluff. Just actionable startup
              strategy in 15 minutes.
            </p>
          </div>
          <div className="text-center">
            <a
              href="https://chatgpt.com/g/g-67f1e806e6d88191bea42e0ffc617a39-startup-co-founder-ai"
              className="bg-accent-gradient text-background px-6 py-3 rounded-lg hover:bg-cta inline-flex gap-2 items-center"
            >
              Try it now on ChatGPT <FaArrowUpRightFromSquare className="text-accent size-4 flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-4xl w-full bg-background border border-[#6C47FF] rounded-2xl shadow-lg p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4 flex items-start gap-2">
          <FiTool className="text-accent size-7 flex-shrink-0" /> How It Works
        </h2>
        <ol className="space-y-4">
          <li>
            <span className="font-bold">1. Tell us your idea</span>
            <br />
            <div className="ml-4">Just a sentence or two. No need for a perfect pitch.</div>
          </li>
          <li>
            <span className="font-bold">2. Chat through your startup plan</span>
            <br />
            <div className="ml-5">Advysor asks guided questions and builds your MVP, GTM, and pitch deck.</div>
          </li>
          <li>
            <span className="font-bold">3. Get instant outputs</span>
            <br />
            <div className="ml-5">
              Leave with user personas, product requirements, and a strategy you can build or pitch today.
            </div>
          </li>
        </ol>
      </div>

      {/* Coming Soon Section */}
      <div className="max-w-4xl w-full bg-background border border-[#6C47FF] rounded-2xl shadow-lg p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4 flex items-start gap-2">
          <GiCrystalBall className="text-accent size-7 flex-shrink-0" /> Coming Soon to Advysor
        </h2>
        <ul className="mb-4 space-y-2">
          <li className="flex items-start gap-2">
            <FiCheck className="text-accent size-6 flex-shrink-0" /> Saved chat history across sessions
          </li>
          <li className="flex items-start gap-2">
            <FiCheck className="text-accent size-6 flex-shrink-0" /> Deeper AI context (your idea evolves over time)
          </li>
          <li className="flex items-start gap-2">
            <FiCheck className="text-accent size-6 flex-shrink-0" /> One-click exports: pitch decks, PRDs, GTM plans
          </li>
          <li className="flex items-start gap-2">
            <FiCheck className="text-accent size-6 flex-shrink-0" /> Pro features for faster iteration and better
            collaboration
          </li>
        </ul>
        {/* <p className="mb-4">
          Want early access when we launch the full version? Leave your email and we'll keep you in the loop.
        </p>
        <div className="text-center">
          <a href="#" className="bg-cta text-background px-6 py-3 rounded-lg inline-flex items-center gap-2">
            <FiMail className="size-5 flex-shrink-0" /> Join the Waitlist
          </a>
        </div> */}
      </div>

      {/* Who It's For Section */}
      <div className="max-w-4xl w-full bg-background border border-[#6C47FF] rounded-2xl shadow-lg p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4 flex items-start gap-2">
          <FiUser className="text-accent size-7 flex-shrink-0" /> Who It's For
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-2">
            <BsRocket className="text-accent size-5 flex-shrink-0" /> First-time founders - Structure and validate your
            idea without hiring a product team.
          </li>
          <li className="flex items-start gap-2">
            <FiCode className="text-accent size-5 flex-shrink-0" /> Technical builders - Turn code-worthy ideas into
            investor-worthy plans.
          </li>
          <li className="flex items-start gap-2">
            <FiTarget className="text-accent size-5 flex-shrink-0" /> Product people - 10x your speed on PRDs, GTM, and
            strategy docs.
          </li>
        </ul>
      </div>

      {/* What You'll Get Section */}
      <div className="max-w-4xl w-full bg-background border border-[#6C47FF] rounded-2xl shadow-lg p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4 flex items-start gap-2">
          <FiFileText className="text-accent size-6 flex-shrink-0" /> What You'll Get
        </h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <FiCheck className="text-accent size-6 flex-shrink-0" /> MVP feature list
          </li>
          <li className="flex items-center gap-2">
            <FiCheck className="text-accent size-6 flex-shrink-0" /> Product requirements document
          </li>
          <li className="flex items-center gap-2">
            <FiCheck className="text-accent size-6 flex-shrink-0" /> User personas & competitive insight
          </li>
          <li className="flex items-center gap-2">
            <FiCheck className="text-accent size-6 flex-shrink-0" /> Go-to-market plan
          </li>
          <li className="flex items-center gap-2">
            <FiCheck className="text-accent size-6 flex-shrink-0" /> Auto-generated pitch deck
          </li>
        </ul>
        <p className="mt-4">"It's like having a product co-founder in your pocket."</p>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-4xl w-full bg-background border border-[#6C47FF] rounded-2xl shadow-lg p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4 flex items-start gap-2">
          <FiMessageSquare className="text-accent size-7 flex-shrink-0" /> What Early Users Say
        </h2>
        <div className="inline-flex flex-col gap-8 text-center text-balance">
          <p>
            <blockquote className="text-xl italic font-semibold">
              <p>"This gave me more clarity in 15 minutes than hours of solo brainstorming."</p>
            </blockquote>
            <p> – Indie Founder</p>
          </p>
          <p>
            <blockquote className="text-xl italic font-semibold">
              <p> "I shared the output with a developer and got a build quote the same day."</p>
            </blockquote>
            <p>– Non-technical Startup Builder</p>
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-4xl w-full bg-background border border-[#6C47FF] rounded-2xl shadow-lg p-8 mt-8">
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-start gap-2">
              <TbTargetArrow className="text-accent size-7 flex-shrink-0" /> Want to validate your startup idea right
              now?
            </h3>
            <p className="mb-4">Try the current version free via ChatGPT.</p>
            <div className="text-center">
              <a
                href="https://chatgpt.com/g/g-67f1e806e6d88191bea42e0ffc617a39-startup-co-founder-ai"
                className="bg-accent-gradient text-background px-6 py-3 rounded-lg hover:bg-cta inline-flex gap-2 items-center"
              >
                Try Advysor on ChatGPT
                <FaArrowUpRightFromSquare className="text-accent size-4 flex-shrink-0" />
              </a>
            </div>
          </div>
          {/* <div>
            <h3 className="text-xl font-bold mb-4 flex items-start gap-2">
              <TbMailbox className="text-accent size-7 flex-shrink-0" /> Want early access to the full version with pro
              features?
            </h3>
            <p className="mb-4">Join the waitlist and be the first to try our next release.</p>
            <div className="text-center">
              <a href="#" className="bg-cta text-background px-6 py-3 rounded-lg inline-flex items-center gap-2">
                <FiMail className="size-5 flex-shrink-0" /> Join the Waitlist
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
