import { useState } from "react";
import { useTranslation } from "react-i18next";

const ShowcaseSection = () => {
    const { t } = useTranslation();
    const [showMoreProjects, setShowMoreProjects] = useState(false);
    const [showMoreCourses, setShowMoreCourses] = useState(false);

    return (
        <section id="projects" className="max-w-[1140px] mx-auto px-4 py-[15px] grid md:grid-cols-2 gap-8 scroll-mt-20 pt-20">
            {/* LEFT: Projects */}
            <div className="bg-[#EAF8F0] p-8 rounded-3xl shadow-sm flex flex-col justify-between pb-[50px]">
                <div className="mb-6 text-center">
                    <img
                        src="/assets/ProjectsImageBlurred.png"
                        alt="Project Preview"
                        className="mx-auto w-full rounded-lg"
                    />
                </div>
                <div>
                    <h3 className="text-[26px] leading-[1.2em] font-medium tracking-[-0.0375em] text-[#273348] font-sans mb-4">
                        {t("projects.title")}
                    </h3>
                    <p className="text-left text-[#657080] font-sans text-[15px] font-normal leading-[1.8em] tracking-[-0.05em]">
                        {t("projects.intro")}
                    </p>

                    {showMoreProjects && (
                        <div className="mt-4 space-y-3 text-sm text-blue-600 font-medium">
                            <h3 className="text-[#273348] text-base font-semibold mb-1">
                                {t("projects.detailsTitle")}
                            </h3>
                            <a href="https://fredbrosman.vercel.app" target="_blank" rel="noopener noreferrer"
                               className="block hover:underline">
                                {t("projects.p1")}
                            </a>
                            <a href="https://opacitypuzzle.vercel.app" target="_blank" rel="noopener noreferrer"
                               className="block hover:underline">
                                {t("projects.p2")}
                            </a>
                            <a href="https://badacsony.vercel.app" target="_blank" rel="noopener noreferrer" className="block hover:underline">
                                {t("projects.p3")}
                            </a>
                        </div>
                    )}
                </div>

                <button
                    onClick={() => setShowMoreProjects(!showMoreProjects)}
                    className="text-[#4B70F9] font-sans text-[15px] font-semibold leading-[18px] hover:underline text-left mt-6"
                >
                    {showMoreProjects ? t("projects.readLess") : t("projects.readMore")}
                </button>
            </div>

            {/* RIGHT: Courses */}
            <div
                className="relative bg-[#FFE7D8] bg-no-repeat bg-[length:67%_auto] bg-[position:150px_275px] px-[50px] pt-[50px] rounded-[24px] transition-all duration-300"
                style={{
                    backgroundImage: "url('/assets/DiscTransparent.png')",
                }}
            >
                <div className="flex flex-col justify-between min-h-[260px] pb-[50px]">
                    {/* Title + description */}
                    <div>
                        <h3 className="text-[26px] leading-[1.2em] font-medium tracking-[-0.0375em] text-[#273348] font-sans mb-4">
                            {t("courses.coursesTitle")}
                        </h3>
                        <p className="text-left text-[#657080] font-sans text-[15px] font-normal leading-[1.8em] tracking-[-0.05em]">
                            {t("courses.coursesIntro")}
                        </p>


                        {showMoreCourses && (
                            <div className="mt-4 space-y-3 text-sm text-blue-600 font-medium">
                                <h3 className="text-[#273348] text-base font-semibold mb-1">
                                    {t("courses.detailsTitle")}
                                </h3>
                                <a href="https://drive.google.com/file/d/1YGfdoiRxxFLWRi0wOU-ajrRsOCCs6D4-/view" target="_blank" rel="noopener noreferrer"
                                   className="block hover:underline">
                                    {t("courses.c1")}
                                </a>
                                <a href="https://drive.google.com/file/d/1xS9VL7EKNYhXEUtR-CWraQuRKKla0kSW/view" target="_blank" rel="noopener noreferrer"
                                   className="block hover:underline">
                                    {t("courses.c2")}
                                </a>
                                <a href="https://drive.google.com/file/d/1isRMZIlRed4iB1CooNtRrO1mIEmNAUuO/view" target="_blank" rel="noopener noreferrer"
                                   className="block hover:underline">
                                    {t("courses.c3")}
                                </a>
                            </div>
                        )}

                        <button
                            onClick={() => setShowMoreCourses(!showMoreCourses)}
                            className="text-[#4B70F9] font-sans text-[15px] font-semibold leading-[18px] hover:underline text-left mt-6"
                        >
                            {showMoreCourses ? t("courses.readLess") : t("courses.readMore")}
                        </button>
                    </div>

                    {/* CTA */}

                </div>

            </div>
        </section>
    );
};

export default ShowcaseSection;
