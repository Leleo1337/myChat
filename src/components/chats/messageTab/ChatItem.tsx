import { Link } from "react-router";
import testProfilePicture from "../../../assets/testProfilePicture.jpg";

export default function ChatItem({ id }: any) {
    return (
        <>
            <Link to={`/chat/${id}`}>
                <li className="relative flex items-center w-full gap-3 p-4 transition-all duration-200 bg-gray-100 shadow-xs cursor-pointer hover:bg-blue-100/40 rounded-2xl dark:bg-slate-800 dark:hover:bg-blue-800/30">
                    <img
                        src={testProfilePicture}
                        alt="profile picture"
                        className="object-cover w-12 h-12 border rounded-full border-blue-400/30"
                    />
                    <div className="flex flex-col flex-1 min-w-0 gap-1">
                        <div className="flex flex-row items-center justify-between w-full">
                            <h3 className="font-semibold text-gray-900 truncate dark:text-slate-100">pessoa legal</h3>
                            <div className="text-xs text-gray-500 dark:text-slate-400">00:00</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-600 truncate dark:text-slate-300">testetesteteste</p>
                            <div className="flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-blue-500 rounded-full">
                                {2}
                            </div>
                        </div>
                    </div>
                </li>
            </Link>
        </>
    );
}
