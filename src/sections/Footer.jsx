import React from "react";
import {LanguageSwitcher} from "../components/LanguageSwitcher.jsx";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-white py-10 text-sm text-gray-600">
            <div className="max-w-[1360px] mx-auto flex flex-wrap md:flex-nowrap justify-between gap-6 px-6">

                {/* Column 1: Logo + Note */}
                <div className="w-full md:w-1/4 space-y-3">
                    <div className="flex items-center gap-2">
                        <img src="/assets/FBOnOff.png" alt="Logo" className="h-6"/>
                        <span className="text-2xl font-semibold text-gray-800">
              Fred<span className="text-blue-500">Brosman</span>
            </span>
                    </div>
                    <p className="text-xs">
                        {t("footer.note1")}<br/>{t("footer.note2")}
                    </p>
                </div>

                {/* Column 2: Navigation */}
                <div className="w-full md:w-1/4 space-y-2">
                    <h4 className="font-semibold text-gray-700">{t("footer.navigation")}</h4>
                    <ul className="space-y-1">
                        <li><a href="#why" className="hover:text-blue-600">{t("nav.why")}</a></li>
                        <li><a href="#projects" className="hover:text-blue-600">{t("nav.projects")}</a></li>
                        <li><a href="#techStack" className="hover:text-blue-600">{t("nav.techStack")}</a></li>
                        <li><a href="#aboutMe" className="hover:text-blue-600">{t("nav.aboutMe")}</a></li>
                        <li><a href="#contact" className="hover:text-blue-600">{t("footer.partnerUp")}</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div className="w-full md:w-1/4 space-y-2">
                    <h4 className="font-semibold text-gray-700">{t("footer.contact")}</h4>
                    <p>{t("footer.email")}: fred.brosman06@gmail.com</p>
                    <p>{t("footer.phone")}: +372 1234 5678</p>
            </div>

            {/* Column 4: Location or Language */}
            <div className="w-full md:w-1/4 flex md:justify-end items-center gap-6 mt-4 md:mt-0">
                    {/* Icons Block */}
                    <div className="flex items-center space-x-4 pr-4 border-r border-gray-300">
                        <a href="https://www.linkedin.com/in/fred-brosman" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://www.onoff.app/wp-content/uploads/2021/04/linkedin.png"
                                alt="LinkedIn"
                                className="w-5 h-5 sm:w-6 sm:h-6 opacity-70 hover:opacity-100 transition-opacity duration-300"
                            />
                        </a>
                        <a href="https://github.com/gloofys" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/assets/github-mark.png"
                                alt="GitHub"
                                className="w-5 h-5 sm:w-6 sm:h-6 opacity-70 hover:opacity-100 transition-opacity duration-300"
                            />
                        </a>
                    </div>

                    {/* Right Half: Language Selector */}
                    <div className="w-1/2 pl-4 flex items-center justify-center">
                        <LanguageSwitcher/>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
