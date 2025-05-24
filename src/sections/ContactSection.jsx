import { useTranslation } from "react-i18next";

const ContactSection = () => {
    const { t } = useTranslation();

    return (
        <section
            id="contact"
            className="bg-[#FFF0D9] max-w-[1140px] rounded-[24px] max-w-5xl mx-auto my-20 px-6 py-12 md:flex md:items-center md:justify-between md:gap-8"
        >
            {/* LEFT: Mobile UI Simulated */}
            <div className="md:w-1/2 flex justify-center">
                <div className="relative w-[280px] md:w-[320px] aspect-[9/18] bg-cover bg-center rounded-xl shadow-lg"
                     style={{ backgroundImage: "url('/src/assets/mobile-frame.png')" }}>
                    <div className="absolute top-[20%] left-[10%] right-[10%] text-white text-center space-y-2 text-sm">
                        <img
                            src="/public/assets/self_no_bg.png"
                            alt="Fred Brosman"
                            className="w-16 h-16 rounded-full mx-auto"
                        />
                        <p className="font-bold text-lg">Fred Brosman</p>
                        <p>📧 <a href="mailto:fred@example.com" className="underline">fred@example.com</a></p>
                        <p>📞 <a href="tel:+37212345678" className="underline">+372 1234 5678</a></p>
                        <p>💼 <a href="https://linkedin.com/in/fredbrosman" target="_blank" className="underline">LinkedIn</a></p>
                    </div>
                </div>
            </div>

            {/* RIGHT: Contact Info (backup / alt-accessible) */}
            <div className="md:w-1/2 mt-8 md:mt-0 text-[#273348]">
                <h2 className="text-2xl font-bold mb-4">{t("contactSection.title")}</h2>
                <p className="mb-4 text-[#657080]">{t("contactSection.description")}</p>

                <div className="space-y-2 text-sm">
                    <p>
                        📧 <a href="mailto:fred@example.com" className="text-blue-600 hover:underline">fred@example.com</a>
                    </p>
                    <p>
                        📞 <a href="tel:+37212345678" className="text-blue-600 hover:underline">+372 1234 5678</a>
                    </p>
                    <p>
                        💼 <a href="https://linkedin.com/in/fredbrosman" target="_blank" className="text-blue-600 hover:underline">LinkedIn</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
