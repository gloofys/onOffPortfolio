import { useTranslation } from "react-i18next";

const DeveloperPlanSection = () => {
    const { t } = useTranslation();

    return (
        <section className="max-w-7xl mx-auto px-4 py-20 md:flex md:gap-8">
            <div className="w-full md:w-[66.607%] flex flex-col justify-center space-y-6">
                {/* Title */}
                <h2 className="text-3xl font-extrabold text-[#273348] leading-tight">
                    Choose the right dev partner for your project <span className="ml-1">👋</span>
                </h2>

                {/* Subtext */}
                <p className="text-[#657080] text-base leading-relaxed tracking-tight">
                    Whether you're building a sleek UI, need bug fixes, or someone to jump into an agile team — I'm here
                    to help.
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
            <div className="w-full md:w-[33.393%] rounded-xl p-6 bg-[#FCFCFC]">
                <h3 className="text-[#4B70F9] font-medium mb-4 text-[16px] leading-[24px] font-sans">
                    {t("techStack.enjoy")}{" "}
                    <strong className="font-semibold">{t("techStack.strong")}</strong>{" "}
                    {t("techStack.with")}
                </h3>
                <ul className="text-sm text-[#273348] space-y-2 ">
                    {[
                        "React / TypeScript",
                        "Tailwind / SCSS",
                        "Zustand / Redux Toolkit",
                        "React Hook Form / Zod",
                        "React Router / TanStack Query",
                        "Node.js / Express",
                        "PostgreSQL / Prisma",
                        "Docker / Git / CI",
                    ].map((item, index) => (
                        <li key={index} className="text-[#657080] flex items-start gap-2 py-[7px] leading-5">
                            <img
                                src="https://www.onoff.app/wp-content/uploads/2024/06/check.svg"
                                alt="check"
                                className="w-4 h-4 mt-1"
                            />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    );
};

export default DeveloperPlanSection;
