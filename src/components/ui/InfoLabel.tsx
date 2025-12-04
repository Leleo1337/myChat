import { InfoIcon } from "lucide-react";
import type { InfoLabelProps } from "../../types/ui/InfoLabelTypes";

export default function InfoLabel({ text, setInfoActive, infoActive, htmlFor, activeKey }: InfoLabelProps) {
    return (
        <>
            <div className="flex items-center gap-2 ">
                <label htmlFor={htmlFor} className="text-sm text-gray-800 dark:text-gray-200">
                    {text}
                </label>
                <div className="md:relative">
                    <InfoIcon
                        onMouseEnter={() => setInfoActive((prev) => ({ ...prev, [activeKey]: true }))}
                        onMouseLeave={() => setInfoActive((prev) => ({ ...prev, [activeKey]: false }))}
                        className="w-4 h-4 text-blue-500"
                    />
                    <div
                        className={`absolute left-1/2 -translate-x-1/2 md:translate-x-0  md:-top-4 md:left-4 w-full min-w-[300px] z-1 py-0.5 px-4 rounded-xl text-white bg-blue-500/80 transition ease-in duration-75 ${
                            infoActive[activeKey] ? "opacity-100 " : "opacity-0"
                        }`}>
                        <p className="text-sm">{text}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
