import { Phone, Settings } from "lucide-react";
import testProfilePicture from "../../assets/testProfilePicture.jpg";

export default function ChatHeader() {
    return (
        <>
            <div className="w-full dark:bg-slate-900 p-4 text-gray-700 dark:text-slate-100 font-semibold border-b border-gray-300 dark:border-gray-800">
                <div className="flex items-center gap-4 justify-between">
                    <div className="flex items-center gap-4">
                        <img
                            src={testProfilePicture}
                            alt="user profile picture"
                            className="object-cover w-12 h-12 border rounded-full border-blue-400/30"
                        />
                        <h4>Pessoa legal</h4>
                    </div>
                    <div className="flex gap-4">
                        <Phone />
                        <Settings />
                    </div>
                </div>
            </div>
        </>
    );
}
