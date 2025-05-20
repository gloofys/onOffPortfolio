import { useTranslation } from "react-i18next";

const WhatIBring = () => {
    const { t } = useTranslation();
    const traits = t("traits", { returnObjects: true });

    return (
        <section className="bg-white px-6 md:px-20 py-16 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="text-blue-600">{t("whatIBringTitle")}</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-10">
                {traits.map((item, index) => (
                    <div key={index}>
                        <h3 className="text-xl font-semibold mb-1">
                            {index + 1}. {item.title}
                        </h3>
                        <p className="text-gray-700">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatIBring;
