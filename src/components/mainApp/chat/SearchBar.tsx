import { Search } from "lucide-react";
import { useState } from "react";

export type searchBarTypes = {
    isSearchBarActive: boolean;
};

export default function SearchBar({ isSearchBarActive }: searchBarTypes) {
    const [searchTerm, setSearchTerm] = useState("");
    console.log(searchTerm);

    return (
        <>
            <div
                className={`w-full max-w-[300px] absolute right-0 top-6 transition ease-in duration-75 ${
                    isSearchBarActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-14 pointer-events-none"
                }`}>
                <div className="relative">
                    <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        type="text"
                        placeholder="Search for messages"
                        className="w-full py-1.5 pl-12 pr-4 text-gray-800 placeholder:text-sm placeholder-gray-500 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-3xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none dark:text-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:placeholder-slate-500"
                    />
                    <Search className="absolute text-blue-500 top-2.5 left-4 dark:text-blue-400" size={20} />
                </div>
            </div>
        </>
    );
}
