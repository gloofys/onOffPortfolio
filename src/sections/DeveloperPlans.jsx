import { useTranslation } from "react-i18next";

const DeveloperPlanSection = () => {
    const { t } = useTranslation();

    return (
        <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8">
            {/* LEFT: Availability Panel */}
            <div className="flex flex-col justify-center space-y-6">
                {/* Title */}
                <h2 className="text-3xl font-extrabold text-[#273348] leading-tight">
                    Choose the right dev partner for your project <span className="ml-1">👋</span>
                </h2>

                {/* Subtext */}
                <p className="text-[#657080] text-base leading-relaxed tracking-tight">
                    Whether you're building a sleek UI, need bug fixes, or someone to jump into an agile team — I'm here to help.
                </p>

                {/* Availability */}
                <p className="text-[#273348] font-medium">
                    📍 Tallinn — available to work <strong>5 days in office</strong> and/or <strong>remote</strong>
                </p>

                {/* CTA Button */}
                <a
                    href="#contact"
                    className="inline-block w-fit px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
                >
                    Let’s work together
                </a>
            </div>

            {/* RIGHT PANEL - Tech Stack */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-[#273348] font-semibold text-lg mb-4">
                    {t("techStack.title")}
                </h3>
                <ul className="text-sm text-[#273348] space-y-2">
                    <li>⚛️ React / TypeScript</li>
                    <li>🌐 Tailwind / SCSS</li>
                    <li>🧠 Zustand / Redux Toolkit</li>
                    <li>🪝 React Hook Form / Zod</li>
                    <li>🎯 React Router / TanStack Query</li>
                    <li>🚀 Node.js / Express</li>
                    <li>🗄️ PostgreSQL / Prisma</li>
                    <li>🐳 Docker / Git / CI</li>
                </ul>
            </div>
        </section>
    );
};

export default DeveloperPlanSection;
