import { Phone, Search, Video } from "lucide-react";
import testProfilePicture from "../../../assets/testProfilePicture.jpg";
import { useRef, useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import SearchBar from "./SearchBar";

export default function ChatHeader() {
    const [activeDropdown, setActiveDropdown] = useState(false);
    const [activeSearchBar, setActiveSearchBar] = useState(false);
    const triggerRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <div className="relative w-full p-4 font-semibold text-gray-700 border-b border-gray-300 dark:bg-slate-900 dark:text-slate-100 dark:border-gray-800">
                <div className="flex items-center justify-between gap-4">
                    <div
                        ref={triggerRef}
                        onClick={() => setActiveDropdown(!activeDropdown)}
                        className="flex items-center gap-4 cursor-pointer group">
                        <img
                            src={testProfilePicture}
                            alt="user profile picture"
                            className="object-cover w-12 h-12 border rounded-full border-blue-400/30 group-hover:bg-blue-500"
                        />
                        <h4 className="group-hover:text-blue-500">Pessoa legal</h4>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone
                            onClick={() => window.alert("this is not a feature for now, try again later")}
                            className="cursor-pointer hover:text-blue-500"
                        />
                        <Video
                            onClick={() => window.alert("this is not a feature for now, try again later")}
                            className="cursor-pointer hover:text-blue-500"
                        />
                        <Search onClick={() => setActiveSearchBar(!activeSearchBar)} className="cursor-pointer hover:text-blue-500" />
                    </div>
                </div>
                <div className="relative">
                    <ProfileDropdown
                        activeDropdown={activeDropdown}
                        displayName={"Pessoa legal"}
                        profilePicture={testProfilePicture}
                        username={"leandrolegal123"}
                        triggerRef={triggerRef}
                        setActiveDropdown={setActiveDropdown}
                    />
                    <SearchBar isSearchBarActive={activeSearchBar}/>
                </div>
            </div>
        </>
    );
}
