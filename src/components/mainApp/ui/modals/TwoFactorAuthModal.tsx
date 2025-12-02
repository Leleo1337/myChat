import { X } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import LanguageContext from "../../../../context/LanguageContext";

export default function TwoFactorAuthModal({ setModalOpen }: any) {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const [show, setShow] = useState(false);
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
    const { languageData } = useContext(LanguageContext);

    function handleChange(index: number, value: string) {
        const newCode = [...code];
        const char = value.toUpperCase().slice(-1);

        newCode[index] = value.toUpperCase();
        setCode(newCode);

        if (inputsRef.current) {
            if (char && index >= 0) {
                const nextInput = index + 1;
                inputsRef.current[nextInput]?.focus();
            }
        }
    }

    const handleClose = () => {
        setShow(false);
        setTimeout(() => setModalOpen(false), 300);
    };

    useEffect(() => {
        setTimeout(() => setShow(true), 10);
    }, []);

    useEffect(() => {
        console.log(code);
    }, [code]);

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
                <div className="pt-4">
                    <h1 className="text-xl font-semibold text-gray-800 sm:text-2xl dark:text-slate-100">
                        {languageData.mainApp.modals?.twoFactorAuthModal.title}
                    </h1>
                    <div className="pt-2 text-sm text-gray-400">
                        {languageData.mainApp.modals?.twoFactorAuthModal.description}
                    </div>
                    <div className="grid grid-cols-6 pt-2">
                        <input
                            ref={(el) => {
                                inputsRef.current[0] = el;
                            }}
                            type="text"
                            maxLength={1}
                            value={code[0]}
                            onChange={(e) => handleChange(0, e.target.value)}
                            className="w-[80%] aspect-square text-3xl text-center 
                       dark:bg-slate-800 bg-gray-200 text-slate-100 
                        border-b-2 dark:border-slate-700 border-slate-500 rounded-md
                       transition-colors duration-200
                       focus:border-blue-500 focus:outline-none 
                       focus:ring-0"></input>
                        <input
                            ref={(el) => {
                                inputsRef.current[1] = el;
                            }}
                            type="text"
                            maxLength={1}
                            value={code[1]}
                            onChange={(e) => handleChange(1, e.target.value)}
                            className="w-[80%] aspect-square text-3xl text-center 
                       dark:bg-slate-800 bg-gray-200 text-slate-100 
                        border-b-2 dark:border-slate-700 border-slate-500 rounded-md
                       transition-colors duration-200
                       focus:border-blue-500 focus:outline-none 
                       focus:ring-0"></input>
                        <input
                            ref={(el) => {
                                inputsRef.current[2] = el;
                            }}
                            type="text"
                            maxLength={1}
                            value={code[2]}
                            onChange={(e) => handleChange(2, e.target.value)}
                            className="w-[80%] aspect-square text-3xl text-center 
                       dark:bg-slate-800 bg-gray-200 text-slate-100 
                        border-b-2 dark:border-slate-700 border-slate-500 rounded-md
                       transition-colors duration-200
                       focus:border-blue-500 focus:outline-none 
                       focus:ring-0"></input>
                        <input
                            ref={(el) => {
                                inputsRef.current[3] = el;
                            }}
                            type="text"
                            maxLength={1}
                            value={code[3]}
                            onChange={(e) => handleChange(3, e.target.value)}
                            className="w-[80%] aspect-square text-3xl text-center 
                       dark:bg-slate-800 bg-gray-200 text-slate-100 
                        border-b-2 dark:border-slate-700 border-slate-500 rounded-md
                       transition-colors duration-200
                       focus:border-blue-500 focus:outline-none 
                       focus:ring-0"></input>
                        <input
                            ref={(el) => {
                                inputsRef.current[4] = el;
                            }}
                            type="text"
                            maxLength={1}
                            value={code[4]}
                            onChange={(e) => handleChange(4, e.target.value)}
                            className="w-[80%] aspect-square text-3xl text-center 
                       dark:bg-slate-800 bg-gray-200 text-slate-100 
                        border-b-2 dark:border-slate-700 border-slate-500 rounded-md
                       transition-colors duration-200
                       focus:border-blue-500 focus:outline-none 
                       focus:ring-0"></input>
                        <input
                            ref={(el) => {
                                inputsRef.current[5] = el;
                            }}
                            type="text"
                            maxLength={1}
                            value={code[5]}
                            onChange={(e) => handleChange(5, e.target.value)}
                            className="w-[80%] aspect-square text-3xl text-center 
                       dark:bg-slate-800 bg-gray-200 text-slate-100 
                        border-b-2 dark:border-slate-700 border-slate-500 rounded-md
                       transition-colors duration-200
                       focus:border-blue-500 focus:outline-none 
                       focus:ring-0"></input>
                    </div>
                    <button className="w-full py-2 mt-4 font-semibold bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600 text-white">
                        {languageData.mainApp.modals?.twoFactorAuthModal.buttonText}
                    </button>
                </div>
            </div>
        </>
    );
}
