import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t } = useTranslation();

    return (
        <div className="p-[15px] pb-0 transition-all duration-300 bg-white font-sans">
            <section className="bg-[#C2E5FF] pt-[100px] px-[50px] pb-0 rounded-[24px]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* LEFT COLUMN: Text */}
                    <div className="md:w-1/2 space-y-6 text-center md:text-left">
                        <h1 className="text-[48px] leading-[58px] font-medium tracking-[-0.0375em] text-[#273348]">
                            {t("heroLine1")}
                            <br/>
                            <span className="gradient-text">{t("heroLine2")}</span>
                        </h1>

                        <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                            {t("heroDescLine1")}
                            <br/>
                            {t("heroDescLine2")}
                        </p>

                        <a
                            href="#contact"
                            className="inline-block bg-[#4B70F9] hover:bg-blue-700 text-white text-base font-semibold px-6 py-3 rounded-full transition"
                        >
                            {t("heroCTA")}
                        </a>
                    </div>

                    {/* RIGHT COLUMN: Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="/src/assets/manwithtelephonetransparent.png"
                            alt="Phone mockup"
                            className="w-[300px] md:w-[400px] drop-shadow-xl"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
