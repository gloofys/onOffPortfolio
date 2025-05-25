import i18n from "../i18n";

const languages = [
    {
        code: "en",
        label: "English",
        flag: "https://www.onoff.app/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png",
    },
    {
        code: "fr",
        label: "Français",
        flag: "https://www.onoff.app/wp-content/plugins/sitepress-multilingual-cms/res/flags/fr.png",
    },
];

export const LanguageSwitcher = () => {
    const currentLang = i18n.language || "en";
    const current = languages.find((l) => l.code === currentLang) || languages[0];

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        localStorage.setItem("lang", code);
    };

    return (
        <div className="relative inline-block text-left group">
            {/* Trigger */}
            <div className="flex items-center px-3 py-1 rounded text-sm hover:bg-gray-100 cursor-pointer">
                <img src={current.flag} alt={current.label} className="w-5 h-5 mr-2" />
                {current.label}
                <svg className="ml-2 h-3 w-3" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            </div>

            {/* Dropdown (shown on hover) */}
            <ul className="absolute mt-1 w-full bg-white border border-gray-300 rounded shadow text-sm z-50 hidden group-hover:block">
                {languages.map((lang) => (
                    <li key={lang.code}>
                        <button
                            onClick={() => changeLanguage(lang.code)}
                            className={`w-full text-left px-3 py-2 hover:bg-blue-50 flex items-center ${
                                lang.code === currentLang ? "text-blue-600 font-semibold" : ""
                            }`}
                        >
                            <img src={lang.flag} alt={lang.label} className="w-5 h-5 mr-2" />
                            {lang.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
