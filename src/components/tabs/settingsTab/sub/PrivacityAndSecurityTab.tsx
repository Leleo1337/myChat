import { ChevronLeft, Scale, Shield } from "lucide-react";

export default function PrivacityAndSecurityTab({ setActiveSection }: any) {
    const status = "Disabled";
    return (
        <>
            <div className="p-5 transition-colors border border-gray-300 shadow-md bg-gray-50 dark:bg-gray-900 dark:border-slate-800 rounded-2xl">
                <div className="relative flex items-center justify-center pb-8">
                    <div
                        className="absolute left-0 flex items-center justify-center p-1 transition-colors rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800"
                        onClick={() => setActiveSection("options")}>
                        <ChevronLeft className="text-gray-600 dark:text-gray-300" />
                    </div>
                    <div className="flex items-center gap-2">
                        <Scale className="text-blue-500" size={24} />
                        <span className="font-semibold text-gray-800 dark:text-gray-100">Privacity and Security</span>
                    </div>
                </div>
                <div>
                    <div className="pb-4">
                        <div className="flex items-center gap-2 pb-2 text-base font-semibold border-b border-gray-300 dark:border-slate-800">
                            <Shield className="text-blue-500" />
                            <h2 className="text-gray-800 dark:text-gray-200">Two factor Authentication (2FA)</h2>
                        </div>
                        <div className="p-4 mt-4 bg-gray-100 border border-gray-300 rounded-md dark:bg-slate-800/50 dark:border-slate-800">
                            <div className="flex items-center justify-between">
                                <div>
                                    status:{" "}
                                    <span
                                        className={`${
                                            status == "Disabled"
                                                ? "text-red-500 font-semibold"
                                                : "text-green-500 font-semibold"
                                        }`}>
                                        {status}
                                    </span>
                                </div>
                                <button className="text-sm bg-blue-500 px-4 py-1.5 rounded-xl cursor-pointer hover:bg-blue-600 font-semibold text-white">
                                    Enable 2FA
                                </button>
                            </div>
                        </div>
                        <p className="py-2 text-xs text-gray-700 dark:text-gray-400">
                            When enabled, a security code will be sent to your registered email adress for every new
                            login attempt
                        </p>
                    </div>
                    <div className="pt-4">
                        <div className="flex gap-2 pb-2 text-base font-semibold border-b border-gray-300 dark:border-slate-800">
                            <Scale className="text-blue-500" />
                            <h2 className="text-gray-800 dark:text-gray-200">Terms of Use and Legal Disclaimer</h2>
                        </div>
                        <div>
                            <h3 className="pt-2 font-bold text-gray-700 dark:text-gray-200">
                                Important note: Study project
                            </h3>
                            <p className="py-2 text-sm text-gray-600 dark:text-gray-200">
                                {" "}
                                This application is a non-profit study and development project. It was created solely
                                for the purpose of learning and demonstrating technical skills.
                            </p>
                            <div className="pt-4 text-red-500">
                                <p className="text-sm font-semibold">
                                    <span className="font-bold ">SECURITY DISCLAIMER: </span>
                                    Only password data is securely protected. Other account information and all chat
                                    content are not guaranteed to be secure. Chats may be visible or accessible in
                                    unintended ways. Use the service and its chat features at your own risk, and do not
                                    enter sensitive or personal information.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
