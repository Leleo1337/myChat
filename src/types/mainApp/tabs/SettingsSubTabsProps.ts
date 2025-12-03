import type { SettingsSubTabMode } from "./SettingsSubTabMode";

export interface SettingsSubTabProps {
    setActiveSection: React.Dispatch<React.SetStateAction<SettingsSubTabMode>>;
}
