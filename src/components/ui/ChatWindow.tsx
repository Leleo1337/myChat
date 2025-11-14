import EmptyChat from "./EmptyChat";

export default function ChatWindow({ activeChat }: any) {
    return (
        <>
            {activeChat ? (
                <div></div>
            ) : (
                <div className="hidden w-full min-h-full lg:block">
                    <EmptyChat />
                </div>
            )}
        </>
    );
}
