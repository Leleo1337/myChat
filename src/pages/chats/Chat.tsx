import EmptyChat from "../../components/ui/EmptyChat";

export default function Chat() {
    return (
        <>
            <div className="hidden w-full h-screen lg:block">
                <EmptyChat />
            </div>
        </>
    );
}
