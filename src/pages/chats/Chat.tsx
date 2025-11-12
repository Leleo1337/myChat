import EmptyChat from "../../components/ui/EmptyChat";

export default function Chat() {
    return (
        <>
            <div className="hidden w-full min-h-full lg:block">
                <EmptyChat />
            </div>
        </>
    );
}
