import { useTranslation } from "react-i18next";

const DeveloperPlanSection = () => {
    const { t } = useTranslation();

    return (
        <section id="techStack" className="max-w-[1140px] mx-auto md:py-[30px] md:flex md:gap-8 p-[25px]">
            <div className="w-full md:w-[66.607%] flex flex-col justify-center space-y-6">
                {/* Title */}
                <h2 className="text-3xl font-extrabold text-[#273348] leading-tight">
                    {t("devPlan.title")} <span className="ml-1">👋</span>
                </h2>

                {/* Subtext */}
                <p className="text-[#657080] text-base leading-relaxed tracking-tight">
                    {t("devPlan.subtext")}
                </p>

                {/* Availability */}
                <p className="text-[#273348] font-medium">
                    📍 {t("devPlan.location")}
                </p>

                {/* CTA Button */}
                <a
                    href="#contact"
                    className="inline-block w-fit px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
                >
                    {t("devPlan.cta")}
                </a>
            </div>

            {/* RIGHT PANEL - Tech Stack */}
            <div className="w-full md:w-[33.393%] rounded-xl p-6 bg-[#FCFCFC]">
                <h3 className="text-[#4B70F9] font-medium mb-4 text-[16px] leading-[24px] font-sans">
                    {t("techStack.enjoy")}{" "}
                    <strong className="font-bold">{t("techStack.strong")}</strong>{" "}
                    {t("techStack.with")}
                </h3>
                <ul className="text-[16px] text-[#657080] space-y-2 leading-[20px] tracking-tighter">
                    {[
                        "React / Vue",
                        "Tailwind / SCSS / Bootstrap",
                        "Java / Springboot / Node.js",
                        "PostgreSQL",
                        "React Router / Redux",
                        "Javascript/ Typescript",
                        "Docker / Git",
                        "IntelliJIDEA / VSCode",
                        "Jira / Confluence"
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
