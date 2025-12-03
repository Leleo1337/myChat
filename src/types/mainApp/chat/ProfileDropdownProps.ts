import type { Dispatch, RefObject, SetStateAction } from "react";

export type triggerRefType = RefObject<HTMLDivElement | null>;
export type setActiveDropdownType = Dispatch<SetStateAction<boolean>>;

export interface ProfileDropdownProps {
    triggerRef: triggerRefType;
    setActiveDropdown: setActiveDropdownType;
    profilePicture: any;
    username: string;
    displayName: string;
    activeDropdown: boolean;
}
