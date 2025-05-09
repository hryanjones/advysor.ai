import React from 'react';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background text-primary-text p-4 flex flex-col items-center">
            {/* Sticky Navbar */}
            <div className="w-full bg-background shadow-md fixed top-0 left-0 p-4 flex items-center z-10 gap-2">
                <img src="/public/advysor-brand.png" className="size-9"></img>
                <span className="text-xl font-bold bg-accent-gradient bg-clip-text text-transparent">
                    ADVYSOR.AI
                </span>
            </div>

            {/* Main Content */}
            <div className="mt-20 max-w-3xl w-full bg-background border border-[#6C47FF] rounded-2xl shadow-lg p-8 mt-6">
                {/* Hero Section */}
                <h1 className="text-4xl font-bold mb-4">Your smarter, better, faster co-founder.</h1>
                <ul className="mb-6 space-y-2">
                    <li>⚡ Walk through your idea in minutes and turn it into a pitch deck.</li>
                    <li>⚡ Go from vague concept to MVP, complete with product requirements.</li>
                    <li>⚡ Create user personas, competitive analysis, and a launch strategy.</li>
                </ul>
                <p className="text-lg font-semibold mb-6">
                    ✨ No account. No fluff. Just actionable startup strategy in 15 minutes.
                </p>
                <a href="#" className="bg-accent-gradient text-background px-6 py-3 rounded-lg hover:bg-cta">Try it now on ChatGPT →</a>
            </div>

            {/* How It Works Section */}
            <div className="max-w-3xl w-full bg-background border border-[#6C47FF] rounded-2xl shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold mb-4">🛠️ How It Works</h2>
                <ol className="space-y-4">
                    <li><span className="font-bold">1. Tell us your idea</span><br />Just a sentence or two. No need for a perfect pitch.</li>
                    <li><span className="font-bold">2. Chat through your startup plan</span><br />Advysor asks guided questions and builds your MVP, GTM, and pitch deck.</li>
                    <li><span className="font-bold">3. Get instant outputs</span><br />Leave with user personas, product requirements, and a strategy you can build or pitch today.</li>
                </ol>
            </div>

            {/* Coming Soon Section */}
            <div className="max-w-3xl w-full bg-background border border-[#6C47FF] rounded-2xl shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold mb-4">🔮 Coming Soon to Advysor</h2>
                <ul className="mb-4 space-y-2">
                    <li>✅ Saved chat history across sessions</li>
                    <li>✅ Deeper AI context (your idea evolves over time)</li>
                    <li>✅ One-click exports: pitch decks, PRDs, GTM plans</li>
                    <li>✅ Pro features for faster iteration and better collaboration</li>
                </ul>
                <p className="mb-4">Want early access when we launch the full version? Leave your email and we’ll keep you in the loop.</p>
                <a href="#" className="bg-cta text-background px-6 py-3 rounded-lg">📬 Join the Waitlist</a>
            </div>

            {/* Who It’s For Section */}
            <div className="max-w-3xl w-full bg-background border border-[#6C47FF] rounded-2xl shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold mb-4">👤 Who It’s For</h2>
                <ul className="space-y-4">
                    <li>🚀 First-time founders - Structure and validate your idea without hiring a product team.</li>
                    <li>🧑‍💻 Technical builders - Turn code-worthy ideas into investor-worthy plans.</li>
                    <li>🎯 Product people - 10x your speed on PRDs, GTM, and strategy docs.</li>
                </ul>
            </div>

            {/* What You’ll Get Section */}
            <div className="max-w-3xl w-full bg-background border border-[#6C47FF] rounded-2xl shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold mb-4">📄 What You’ll Get</h2>
                <ul className="space-y-2">
                    <li>✅ MVP feature list</li>
                    <li>✅ Product requirements document</li>
                    <li>✅ User personas & competitive insight</li>
                    <li>✅ Go-to-market plan</li>
                    <li>✅ Auto-generated pitch deck</li>
                </ul>
                <p className="mt-4">“It’s like having a product co-founder in your pocket.”</p>
            </div>

            {/* Testimonials Section */}
            <div className="max-w-3xl w-full bg-background border border-[#6C47FF] rounded-2xl shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold mb-4">💬 What Early Users Say (Placeholder)</h2>
                <p>“This gave me more clarity in 15 minutes than hours of solo brainstorming.” – Indie Founder</p>
                <p>“I shared the output with a developer and got a build quote the same day.” – Non-technical Startup Builder</p>
            </div>

            {/* Call to Action Section */}
            <div className="max-w-3xl w-full bg-background border border-[#6C47FF] rounded-2xl shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold mb-4">✅ Call to Action</h2>
                <div className="space-y-4">
                    <a href="#" className="bg-accent-gradient text-background px-6 py-3 rounded-lg hover:bg-cta">Try Advysor on ChatGPT →</a>
                    <a href="#" className="bg-cta text-background px-6 py-3 rounded-lg">Join the Waitlist →</a>
                </div>
            </div>
        </div>
    );
}
