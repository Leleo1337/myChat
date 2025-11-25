import { Search, UserPlus, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function AddUserModal({ setModalOpen }: any) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setTimeout(() => setModalOpen(false), 300);
    };
    
    useEffect(() => {
        setTimeout(() => setShow(true), 10);
    }, []);

    return (
        <>
            <div
                className={`
                    fixed inset-0 z-10 bg-black/60 backdrop-blur-sm 
                    transition-opacity duration-300
                    ${show ? "opacity-100" : "opacity-0"}
                `}
                onClick={handleClose}
            />
            <div
                className={`
                    fixed z-20 w-[95%] md:w-[500px] max-w-[500px]
                    p-6 rounded-3xl shadow-2xl
                    left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    bg-white dark:bg-slate-900
                    border border-white/10 dark:border-slate-800

                    transition-all duration-300
                    ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}>
                <div className="relative">
                    <X onClick={handleClose} className="absolute right-0 cursor-pointer hover:text-red-500" />
                </div>
                <div className="pt-2">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <UserPlus size={28} />
                            <h1 className="text-xl font-semibold text-gray-800 sm:text-2xl dark:text-slate-100">
                                New contact
                            </h1>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 dark:text-slate-400">
                                Search by username to find friends
                            </p>
                        </div>
                    </div>
                    <div className="pt-4 min-h-40">
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full py-2.5 pl-12 pr-4 text-gray-800 placeholder-gray-500 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none dark:text-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:placeholder-slate-500"
                                placeholder="Search @username"
                            />
                            <Search className="absolute text-blue-500 top-[13px] left-4 dark:text-blue-400" size={20} />
                        </div>
                        <div className="py-8">
                            <p className="text-center text-gray-800 dark:text-slate-100">
                                Enter a username to find friends
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
