import { FiZap, FiTool, FiCheck, FiUser, FiCode, FiTarget, FiFileText, FiMessageSquare } from 'react-icons/fi';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

import { BsRocket, BsStars } from 'react-icons/bs';
import { TbTargetArrow } from 'react-icons/tb';
import JoinWaitlistButton from './JoinWaitlistButton';

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

      <div id="early-access-form" />
      <div className="max-w-4xl w-full bg-background border border-[#6C47FF] rounded-2xl shadow-lg p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4 flex items-start gap-2">
          <FiZap className="text-accent size-7 flex-shrink-0" /> Get early access to your AI co-founder
        </h2>
        <p className="mb-4">
          ADVYSOR is free during beta—currently live via GPT while we build the hosted version. You’ll get access to the
          same planning workflows we use ourselves—from MVPs to GTM and monetization. As we build the hosted version,
          your feedback helps shape what’s next.
        </p>

        <JoinWaitlistButton />
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
              <p className="mb-2">
                "ADVYSOR.AI has been an eye-opener...mind blown... You don't know, what you don't know, until you try
                it."
              </p>
            </blockquote>
            <p> – Maricar H.</p>
          </p>
          <p>
            <blockquote className="text-xl italic font-semibold">
              <p className="mb-2">
                "Using ADVYSOR has saved me countless hours in validating new tech ideas and helped me understand how to
                build a business around them."
              </p>
            </blockquote>
            <p>– Scharief Salem CTO of XAI Foundation</p>
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
                Try ADVYSOR on ChatGPT
                <FaArrowUpRightFromSquare className="text-accent size-4 flex-shrink-0" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-start gap-2">
              <FiZap className="text-accent size-7 flex-shrink-0" /> Want early access to the full version with pro
              features?
            </h3>
            <p className="mb-4">
              Get access to the same planning workflows we use ourselves—from MVPs to GTM and monetization.
            </p>
            <JoinWaitlistButton />
          </div>
        </div>
      </div>
    </div>
  );
}
