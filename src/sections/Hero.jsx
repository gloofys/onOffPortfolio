import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t } = useTranslation();

    return (
        <div className="p-[15px] pb-0 transition-all duration-300 bg-white font-sans">
            <section
                className="bg-[#C2E5FF] pt-[100px] px-[50px] pb-0 lg:pt-[90px] lg:px-0 md:pt-0 md:px-[15px] rounded-[24px]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* LEFT COLUMN: Text */}
                    <div className="md:w-1/2 space-y-6 text-left md:text-left">
                        <h1 className="text-[32px] leading-[38px] md:text-[48px] md:leading-[58px] font-medium tracking-[-0.0375em] text-[#273348]">
                            {t("heroLine1")}
                            <br/>
                            <span className="gradient-text">{t("heroLine2")}</span>
                        </h1>

                        <p className="text-left text-[#657080] font-sans text-[17px] font-normal leading-[1.5em] tracking-[-0.047em] max-w-md mx-auto md:mx-0">
                            {t("heroDescLine1")}
                            <br/>
                            {t("heroDescLine2")}
                        </p>

                    </div>

                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="/assets/manwithtelephonetransparent.png"
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
