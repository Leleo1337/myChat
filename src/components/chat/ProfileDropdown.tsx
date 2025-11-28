import { Phone, Video } from "lucide-react";
import { useEffect, useRef, type Dispatch, type RefObject, type SetStateAction } from "react";

export type profileDropdownTypes = {
    triggerRef: RefObject<HTMLDivElement | null>;
    setActiveDropdown: Dispatch<SetStateAction<boolean>>;
    profilePicture: any;
    username: string;
    displayName: string;
    activeDropdown: boolean;
};

export default function ProfileDropdown({
    triggerRef,
    profilePicture,
    displayName,
    username,
    activeDropdown,
    setActiveDropdown,
}: profileDropdownTypes) {
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                triggerRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                !triggerRef.current.contains(event.target as Node)
            ) {
                setActiveDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [activeDropdown]);

    return (
        <>
            <div
                ref={dropdownRef}
                className={`${
                    activeDropdown ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20 pointer-events-none"
                } transition duration-100 ease-in absolute bg-slate-800 border border-slate-700 shadow-sm rounded-xl top-8 mx-auto max-w-[300px] sm:max-w-[400px] p-4 w-full `}>
                <div className="flex flex-col items-center justify-center gap-4">
                    <img
                        src={profilePicture}
                        alt="user profile picture"
                        className="object-cover w-24 h-24 border rounded-full border-blue-400/30 group-hover:bg-blue-500"
                    />
                    <div className="text-center">
                        <h4 className="group-hover:text-blue-500">{displayName}</h4>
                        <span className="text-sm text-blue-500">@{username}</span>
                    </div>
                    <div>
                        <p className="text-sm">blablablabla</p>
                    </div>
                    <div className="flex gap-4">
                        <div
                            onClick={() => window.alert("this is not a feature for now, try again later")}
                            className="flex flex-col items-center justify-center w-[100px] py-2 bg-slate-700 rounded-xl cursor-pointer hover:bg-slate-600">
                            <Video size={20} />
                            <span>Vídeo</span>
                        </div>
                        <div
                            onClick={() => window.alert("this is not a feature for now, try again later")}
                            className="flex flex-col items-center justify-center w-[100px] py-2 bg-slate-700 rounded-xl cursor-pointer hover:bg-slate-600">
                            <Phone size={20} />
                            <span>Voz</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
