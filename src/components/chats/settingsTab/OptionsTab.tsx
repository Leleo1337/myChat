import { ChevronRight, Languages, Palette, User } from "lucide-react";

export default function OptionsTab({ setActiveSection }: any) {
    return (
        <>
            <div className="mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-slate-100">Settings</h1>
                </div>
            </div>
            <div className="px-4 py-2 border border-gray-800 shadow rounded-xl shadow-gray-800">
                <div
                    onClick={() => setActiveSection("appearance")}
                    className="relative flex items-center w-full p-1 mt-4 cursor-pointer rounded-xl hover:bg-blue-500/10">
                    <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-slate-800">
                            <Palette className="text-slate-400" />
                        </div>
                        <span className="font-semibold">Appearance</span>
                    </div>
                    <ChevronRight className="absolute right-0 text-slate-300" size={18} />
                </div>
                <div className="relative flex items-center w-full gap-4 p-1 mt-4 cursor-pointer rounded-xl hover:bg-blue-500/10">
                    <div className="p-2 rounded-full bg-slate-800">
                        <Languages className="text-slate-400" />
                    </div>
                    <span className="font-semibold">Languages</span>
                    <ChevronRight className="absolute right-0 text-slate-300" size={18} />
                </div>
                <div className="w-full h-1 my-2 border-t border-gray-800"></div>
                <div className="relative flex items-center w-full gap-4 p-1 cursor-pointer rounded-xl hover:bg-blue-500/10">
                    <div className="p-2 rounded-full bg-slate-800">
                        <User className="text-slate-400" />
                    </div>
                    <span className="font-semibold">Account</span>
                    <ChevronRight className="absolute right-0 text-slate-300" size={18} />
                </div>
            </div>
            <div className="px-4 py-2 my-4 border border-gray-800 shadow cursor-pointer rounded-xl shadow-gray-800 hover:bg-blue-500/10">
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
