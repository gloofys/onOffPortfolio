import {useTranslation} from "react-i18next";

const PersonalNoteSection = () => {
    const { t } = useTranslation();
    return (
        <section id="aboutMe"
            className="max-w-[1140px] mx-auto md:py-[30px] py-[20px] px-[15px] flex flex-col md:flex-row items-center min-h-[260px] gap-6 scroll-mt-20 md:pt-20">
            {/* LEFT: Text Block */}
            <div className="md:w-[60%] bg-[#EAF8F0] rounded-2xl md:p-[50px] pt-[25px] px-[15px] pb-[15px] text-[#657080] h-full">
                <h3 className="text-[#273348] md:text-[26px] text-[20px] font-medium mb-2 md:leading-[1.2em] leading-[26px] pb-[15px]">
                    {t("personalNote.title")}
                </h3>
                <p className="text-[15px] leading-[1.8em] mb-4">
                    {t("personalNote.description")}
                </p>
                {/*<a href="#about" className="text-sm text-[#4B70F9] font-semibold hover:underline">*/}
                {/*    {t("personalNote.cta")} &gt;*/}
                {/*</a>*/}
            </div>

            {/* RIGHT: Image */}
            <div className="md:w-[40%]">
                <img
                    src="/assets/fredcatheadcards.png"
                    alt="Personal snapshot"
                    className="w-full h-[260px] md:h-[100%] object-cover rounded-2xl"
                />
            </div>
        </section>
    );
};

export default PersonalNoteSection;
