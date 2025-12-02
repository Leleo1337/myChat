import dateFormatter from "../../../utils/dateFormatter";

export default function MessageBubble({ sender, content, timestamp }: any) {
    return (
        <>
            <div className={`flex w-full ${sender == "me" ? "justify-end" : "justify-start"}`}>
                <div className="flex flex-col">
                    <div
                        className={`${
                            sender == "me" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-800"
                        } px-3 py-2 rounded-2xl max-w-[400px] break-all`}>
                        <p>{content}</p>
                    </div>
                    <span
                        className={`text-[10px] px-0.5 flex ${
                            sender == "me"
                                ? "text-gray-600 dark:text-gray-200 justify-start"
                                : "text-gray-400 justify-end"
                        }`}>
                        {dateFormatter(timestamp)}
                    </span>
                </div>
            </div>
        </>
    );
}
