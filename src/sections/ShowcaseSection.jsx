import { useState } from "react";
import { useTranslation } from "react-i18next";

const ShowcaseSection = () => {
    const { t } = useTranslation();
    const [showMoreProjects, setShowMoreProjects] = useState(false);
    const [showMoreCourses, setShowMoreCourses] = useState(false);

    return (
        <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
            {/* LEFT: Projects */}
            <div className="bg-[#EAF8F0] p-8 rounded-3xl shadow-sm flex flex-col justify-between pb-[50px]">
                <div className="mb-6 text-center">
                    <img
                        src="/src/assets/ProjectsImageBlurred.png"
                        alt="Project Preview"
                        className="mx-auto w-full rounded-lg"
                    />
                </div>
                <div>
                    <h3 className="text-[26px] leading-[1.2em] font-medium tracking-[-0.0375em] text-[#273348] font-sans mb-4">
                        {t("projects.title")}
                    </h3>
                    <p className="text-left text-[#657080] font-sans text-[15px] font-normal leading-[1.8em] tracking-[-0.05em]">{t("projects.description")}</p>
                    <ul className="space-y-3 text-sm text-gray-800 list-disc list-inside">
                    <li>✏️ {t("projects.p1")}</li>
                        <li>🧠 {t("projects.p2")}</li>
                        <li>🛫 {t("projects.p3")}</li>
                    </ul>

                    {showMoreProjects && (
                        <div className="mt-4 text-sm text-gray-700">
                            <p className="mb-2">
                                ✅ Built with React, Spring Boot, PostgreSQL, and Tailwind CSS.
                            </p>
                            <p>
                                🛠️ All projects are fully responsive, optimized, and deployed on Vercel or Netlify.
                            </p>
                        </div>
                    )}
                </div>

                <button
                    onClick={() => setShowMoreProjects(!showMoreProjects)}
                    className="mt-6 text-blue-600 font-semibold hover:underline text-left"
                >
                    {showMoreProjects ? t("projects.readLess") : t("projects.readMore")}
                </button>
            </div>

            {/* RIGHT: Courses */}
            <div
                className="relative bg-[#FFE7D8] bg-no-repeat bg-[length:67%_auto] bg-[position:150px_275px] px-[50px] pt-[50px] pb-[200px] rounded-[24px] transition-all duration-300"
                style={{
                    backgroundImage: "url('/src/assets/DiscTransparent.png')",
                }}
            >
                <div>
                    <h3 className="text-[26px] leading-[1.2em] font-medium tracking-[-0.0375em] text-[#273348] font-sans mb-4">
                        {t("coursesTitle")}
                    </h3>
                    <p className="text-left text-[#657080] font-sans text-[15px] font-normal leading-[1.8em] tracking-[-0.05em]">{t("coursesIntro")}</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-[#273348]">
                        <li>
                            <span className="inline-block w-3 h-3 bg-blue-400 rounded-full mr-2 align-middle"></span>
                            TypeScript Mastery – TotalTypeScript
                        </li>
                        <li>
                            <span className="inline-block w-3 h-3 bg-purple-400 rounded-full mr-2 align-middle"></span>
                            React Hooks Deep Dive
                        </li>
                        <li>
                            <span className="inline-block w-3 h-3 bg-red-400 rounded-full mr-2 align-middle"></span>
                            Modern CSS Layouts
                        </li>
                    </ul>

                    {showMoreCourses && (
                        <div className="mt-4 text-sm text-gray-700">
                            <p className="mb-2">
                                📖 These courses are part of my self-paced deep dive into advanced front-end development.
                            </p>
                            <p>🧪 I apply each concept immediately in real projects.</p>
                        </div>
                    )}

                    <button
                        onClick={() => setShowMoreCourses(!showMoreCourses)}
                        className="mt-4 text-blue-600 font-medium hover:underline text-left"
                    >
                        {showMoreCourses ? t("courses.readLess") : t("courses.readMore")}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
