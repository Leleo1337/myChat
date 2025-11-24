import { ChevronRight, Languages, LockKeyhole, Palette, User } from "lucide-react";

export default function SettingsSubTabs({ setActiveSection }: any) {
    return (
        <>
            <div className="mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-slate-100">Settings</h1>
                </div>
            </div>
            <div className="px-4 py-2 border border-gray-300 shadow rounded-xl dark:border-gray-800 dark:shadow-gray-800">
                <div
                    onClick={() => setActiveSection("appearance")}
                    className="relative flex items-center w-full p-1 mt-4 cursor-pointer rounded-xl hover:bg-blue-500/10">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-gray-100 rounded-full dark:bg-slate-800">
                            <Palette className="text-blue-500" />
                        </div>
                        <span className="font-semibold">Appearance</span>
                    </div>
                    <ChevronRight className="absolute right-0 text-slate-300" size={18} />
                </div>
                <div
                    onClick={() => setActiveSection("profile")}
                    className="relative flex items-center w-full gap-4 p-1 mt-4 cursor-pointer rounded-xl hover:bg-blue-500/10">
                    <div className="p-2 bg-gray-100 rounded-full dark:bg-slate-800">
                        <User className="text-blue-500" />
                    </div>
                    <span className="font-semibold">Profile</span>
                    <ChevronRight className="absolute right-0 text-slate-300" size={18} />
                </div>
                <div className="relative flex items-center w-full gap-4 p-1 mt-4 cursor-pointer rounded-xl hover:bg-blue-500/10">
                    <div className="p-2 bg-gray-100 rounded-full dark:bg-slate-800">
                        <Languages className="text-blue-500" />
                    </div>
                    <span className="font-semibold">Languages</span>
                    <ChevronRight className="absolute right-0 text-slate-300" size={18} />
                </div>
                <div className="w-full h-1 my-2 border-t border-gray-300 dark:border-gray-800"></div>
                <div
                    onClick={() => setActiveSection("account")}
                    className="relative flex items-center w-full gap-4 p-1 cursor-pointer rounded-xl hover:bg-blue-500/10">
                    <div className="p-2 bg-gray-100 rounded-full dark:bg-slate-800">
                        <LockKeyhole className="text-blue-500" />
                    </div>
                    <span className="font-semibold">Account</span>
                    <ChevronRight className="absolute right-0 text-slate-300" size={18} />
                </div>
            </div>
            <div className="px-4 py-2 my-4 border border-gray-300 shadow cursor-pointer dark:border-gray-800 rounded-xl dark:shadow-gray-800 hover:bg-blue-500/10">
                <div className="relative flex items-center justify-center w-full gap-4">
                    <span className="font-semibold">Privacity and security</span>
                    <ChevronRight className="absolute right-0 text-slate-300" size={18} />
                </div>
            </div>
            <div className="flex justify-center text-xs font-semibold text-slate-500">
                <span>Version 1 ( beta test )</span>
            </div>
        </>
    );
}
