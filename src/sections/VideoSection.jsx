import { useTranslation } from "react-i18next";

const VideoSection = () => {
    const { t } = useTranslation();

    return (
        <section id="why" className="max-w-5xl mx-auto px-4 py-10 text-center scroll-mt-20 pt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#273348]">
                <span className="text-[#4B70F9]">{t("revolution.headlineAccent")}</span> {t("revolution.headline")}
            </h2>

            <p className="text-[#657080] max-w-7xl mx-auto mt-4 text-base md:text-lg leading-relaxed">
                {t("revolution.description")}
            </p>

            <div className="relative overflow-hidden rounded-2xl shadow-md mt-10 mx-auto w-full max-w-7xl aspect-video">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/7fBGHSfXYT0"
                    title="Join the revolution video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </section>
    );
};

export default VideoSection;
