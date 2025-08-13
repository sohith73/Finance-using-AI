import Link from "next/link";

const AboutPage = () => {
    return (
        <div className="font-sans bg-[#f5ebdc] dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 text-gray-800 dark:text-gray-200 transition-all duration-300 min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-teal-500/10 dark:from-emerald-900/30 dark:via-green-900/20 dark:to-teal-900/30">
                <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
                <div className="relative z-10 max-w-4xl mx-auto w-full">
                    <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-[#f98a62] dark:text-emerald-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 from-[#C15F3C] to-[#f98a62] rounded-full animate-pulse"></span>
                        <span className="hidden sm:inline">Powered by AI</span>
                        <span className="sm:hidden">
                            AI Powered Application
                        </span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-gray-100 leading-tight">
                        About{" "}
                        <span className="bg-gradient-to-r from-[#C15F3C] to-[#f98a62] bg-clip-text text-transparent">
                            SpendSage
                        </span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                        Your Zen expense companion effortlessly track, mindfully
                        manage, and unlock AI-powered financial clarity.
                    </p>
                    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0">
                        <Link
                            href="/sign-up"
                            className="group relative overflow-hidden bg-gradient-to-r from-[#C15F3C] to-[#f98a62] hover:from-[#C15F3C] hover:via-[#e0693e] hover:to-[#f46835] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5"
                        >
                            <span className="relative z-10">
                                Start Your Journey
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Mission Section */}

            {/* Features Section */}
            <section className="py-20 px-8 bg-[#f5ebdc] dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-[#db4f1c] dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium mb-6">
                            <span className="w-1.5 h-1.5 from-[#C15F3C] to-[#f98a62] rounded-full"></span>
                            Features
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                            Why Choose{" "}
                            <span className="text-[#C15F3C] dark:text-[#f98a62]">
                                SpendSage?
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Discover the powerful features that make our
                            AI-driven platform the smart choice for modern
                            financial management.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group relative bg-[#f4b9a4] dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#C15F3C] to-[#f98a62] rounded-xl flex items-center justify-center shadow-lg mb-6">
                                    <span className="text-white text-xl">
                                        🤖
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                                    AI-Powered Insights
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Get intelligent analysis of your spending
                                    patterns with personalized AI
                                    recommendations and automated category
                                    suggestions that learn from your behavior.
                                </p>
                            </div>
                        </div>

                        <div className="group relative bg-[#f4b9a4] dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#C15F3C] to-[#f98a62] rounded-xl flex items-center justify-center shadow-lg mb-6">
                                    <span className="text-white text-xl">
                                        ✨
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                                    Smart Categorization
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Let our AI automatically categorize your
                                    expenses with 99% accuracy and provide
                                    tailored recommendations to enhance your
                                    budget management effortlessly.
                                </p>
                            </div>
                        </div>

                        <div className="group relative bg-[#f4b9a4] dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#C15F3C] to-[#f98a62] rounded-xl flex items-center justify-center shadow-lg mb-6">
                                    <span className="text-white text-xl">
                                        📊
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                                    Intelligent Dashboard
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Experience a modern, AI-enhanced interface
                                    with real-time insights, interactive
                                    financial analytics, and beautiful
                                    visualizations that make sense of your data.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}

            {/* Call to Action Section */}
            <section className="py-20 px-8 bg-[#f5ebdc] dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C15F3C] to-[#f98a62]"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 text-[#db4f1c] dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
                        <span className="w-2 h-2 from-[#C15F3C] to-[#f98a62] rounded-full animate-pulse"></span>
                        Ready to Transform Your Finances?
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-gray-100">
                        Take Control of Your{" "}
                        <span className="bg-gradient-to-r from-[#C15F3C] to-[#f98a62] bg-clip-text text-transparent">
                            Financial Future
                        </span>
                    </h2>

                    <p className="text-xl md:text-2xl mb-10 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Join thousands of users who have already transformed
                        their financial habits with SpendSage. Start your
                        journey towards smarter budgeting today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/sign-up"
                            className="group relative overflow-hidden bg-gradient-to-r from-[#C15F3C] to-[#f98a62]  hover:from-[#C15F3C] hover:via-[#e0693e] hover:to-[#f46835] text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Get Started Free
                                <span className="text-lg">→</span>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                        </Link>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[#C15F3C] dark:text-[#f98a62] mb-2">
                                Free
                            </div>
                            <div className="text-gray-600 dark:text-gray-400">
                                No credit card required
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                                24/7
                            </div>
                            <div className="text-gray-600 dark:text-gray-400">
                                AI-powered support
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                                Instant
                            </div>
                            <div className="text-gray-600 dark:text-gray-400">
                                Setup in minutes
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
