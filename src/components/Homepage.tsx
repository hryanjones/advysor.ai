import React from 'react';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
            {/* Sticky Navbar */}
            <div className="w-full bg-white shadow-md fixed top-0 left-0 p-4 flex justify-between items-center z-10">
                <span className="text-xl font-bold text-blue-500">🧭 ADVYSOR.AI</span>
            </div>

            {/* Main Content */}
            <div className="pt-20 max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8 mt-6">
                {/* Hero Section */}
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Your smarter, better, faster co-founder.</h1>
                <ul className="text-gray-600 mb-6 space-y-2">
                    <li>⚡ Walk through your idea in minutes and turn it into a pitch deck.</li>
                    <li>⚡ Go from vague concept to MVP, complete with product requirements.</li>
                    <li>⚡ Create user personas, competitive analysis, and a launch strategy.</li>
                </ul>
                <p className="text-lg font-semibold text-gray-800 mb-6">
                    ✨ No account. No fluff. Just actionable startup strategy in 15 minutes.
                </p>
                <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Try it now on ChatGPT →</a>
            </div>

            {/* How It Works Section */}
            <div className="max-w-3xl w-full bg-gray-50 rounded-2xl shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">🛠️ How It Works</h2>
                <ol className="text-gray-600 space-y-4">
                    <li><span className="font-bold">1. Tell us your idea</span><br />Just a sentence or two. No need for a perfect pitch.</li>
                    <li><span className="font-bold">2. Chat through your startup plan</span><br />Advysor asks guided questions and builds your MVP, GTM, and pitch deck.</li>
                    <li><span className="font-bold">3. Get instant outputs</span><br />Leave with user personas, product requirements, and a strategy you can build or pitch today.</li>
                </ol>
            </div>

            {/* Why Advysor Section */}
            <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">🚀 Why Advysor?</h2>
                <ul className="space-y-2">
                    <li>✅ No sign-ups or downloads.</li>
                    <li>✅ Fast, actionable outputs – no filler content.</li>
                    <li>✅ Customized strategies tailored to your specific idea.</li>
                </ul>
            </div>

            {/* Coming Soon Section */}
            <div className="max-w-3xl w-full bg-gray-50 rounded-2xl shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">🔮 Coming Soon to Advysor</h2>
                <ul className="space-y-2 text-gray-600">
                    <li>✅ Saved chat history across sessions</li>
                    <li>✅ Deeper AI context (your idea evolves over time)</li>
                    <li>✅ One-click exports: pitch decks, PRDs, GTM plans</li>
                    <li>✅ Pro features for faster iteration and better collaboration</li>
                </ul>
                <p className="mt-4">Want early access when we launch the full version?</p>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">📬 Join the waitlist</button>
                <p className="text-sm text-gray-500 mt-2">We’ll only email with meaningful updates. No spam.</p>
            </div>

            {/* Who It's For Section */}
            <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">👤 Who It’s For</h2>
                <ul className="space-y-2">
                    <li>🚀 First-time founders – Structure and validate your idea without hiring a product team.</li>
                    <li>🧑‍💻 Technical builders – Turn code-worthy ideas into investor-worthy plans.</li>
                    <li>🎯 Product people – 10x your speed on PRDs, GTM, and strategy docs.</li>
                </ul>
            </div>

            {/* What You’ll Get Section */}
            <div className="max-w-3xl w-full bg-gray-50 rounded-2xl shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">📄 What You’ll Get</h2>
                <ul className="space-y-2">
                    <li>✅ MVP feature list</li>
                    <li>✅ Product requirements document</li>
                    <li>✅ User personas & competitive insight</li>
                    <li>✅ Go-to-market plan</li>
                    <li>✅ Auto-generated pitch deck</li>
                </ul>
            </div>
        </div>
    );
}
