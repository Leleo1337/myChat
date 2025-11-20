import { Search, UserPlus } from "lucide-react";

export default function UserSection() {
    const openModal = () => window.alert("abrir modal de adicionar contatos");

    return (
        <div className="w-full h-screen py-8 sm:pl-32 lg:max-w-[600px] bg-white overflow-y-scroll border-r border-gray-300 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
            <div className="px-4 sm:px-1">
                <div className="pb-4">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100">Contacts</h1>
                </div>
                <div>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full py-2.5 pl-12 pr-4 text-gray-800 placeholder-gray-500 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-3xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none dark:text-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:placeholder-slate-500"
                            placeholder="Search"
                        />
                        <Search className="absolute text-blue-500 top-[13px] left-4 dark:text-blue-400" size={20} />
                    </div>
                    <div className="py-8 border-b border-gray-300 dark:border-gray-800">
                        <button
                            onClick={openModal}
                            className="flex items-center gap-4 font-semibold text-blue-500 cursor-pointer hover:text-blue-700">
                            <div className="p-2 text-white bg-blue-500 rounded-full">
                                <UserPlus />
                            </div>
                            Adicionar novo contato
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
