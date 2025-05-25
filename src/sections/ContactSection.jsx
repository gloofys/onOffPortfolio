import React from "react";

const ContactSection = () => {
    return (
        <section id="contact" className="w-full py-[20px] px-[15px] md:py-[25px] max-w-[1140px] mx-auto scroll-mt-20">
            <div className="bg-[#FFF0D9] rounded-3xl  px-4 py-[25px]">
                <div className="flex justify-center">
                    <div
                        className="relative w-[300px] sm:w-[340px] aspect-[390/844] bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/assets/phoneFrame.png')",
                        }}
                    >
                        <div
                            className="absolute top-[70px] left-[25px] right-[25px] bottom-[25px] rounded-[32px] bg-white px-4 py-6 text-[#273348] overflow-hidden">
                            {/* Profile Image */}
                            <div className="flex flex-col items-center space-y-2 mb-6">
                                <img
                                    src="/assets/self_no_bg.png"
                                    alt="Fred"
                                    className="w-24 h-24 rounded-full object-cover shadow"
                                />
                                <h3 className="text-lg font-semibold">Fred Brosman</h3>
                                <p className="text-sm text-gray-500">Full-Stack Developer</p>
                            </div>

                            <div className="space-y-4 text-sm">
                                <div>
                                    <span className="font-medium block">📧 Email</span>
                                    <p className="text-black hover:underline">
                                        fred.brosman06@gmail.com
                                    </p>
                                </div>
                                <div>
                                    <span className="font-medium block">📞 Phone</span>
                                    <p className="text-black hover:underline">
                                        +372 5686 3593
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 mt-8">
                                <a
                                    href="https://www.linkedin.com/in/fred-brosman"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-[#0077B5] text-white rounded-full shadow hover:bg-[#005c94] transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white"
                                         className="w-4 h-4 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 text-customBlue hover:opacity-75 transition-opacity duration-300"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M22.23 0H1.77C.792 0 0 .77 0 1.72v20.56C0 23.23.792 24 1.77 24h20.46c.978 0 1.77-.77 1.77-1.72V1.72C24 .77 23.208 0 22.23 0zM7.16 20.452H3.648V9.036H7.16v11.416zM5.404 7.6c-1.104 0-1.993-.89-1.993-1.986 0-1.095.89-1.985 1.993-1.985s1.992.89 1.992 1.985c0 1.096-.888 1.986-1.992 1.986zM20.452 20.452h-3.516v-5.69c0-1.356-.027-3.098-1.889-3.098-1.892 0-2.181 1.477-2.181 3.003v5.785h-3.516V9.036h3.38v1.556h.049c.47-.888 1.613-1.822 3.318-1.822 3.548 0 4.201 2.334 4.201 5.368v6.314z"/>
                                    </svg>
                                    LinkedIn
                                </a>

                                <a
                                    href="https://github.com/gloofys"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-gray-800 text-white rounded-full shadow hover:bg-gray-700 transition"
                                >
                                    <img
                                        src="/assets/github-mark.png"
                                        alt="GitHub"
                                        className="w-5 h-5 bg-white rounded-full"
                                    />
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
