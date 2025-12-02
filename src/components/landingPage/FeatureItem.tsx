export type featureItemTypes = {
    icon: any;
    title: string;
    text: string;
};

export default function FeatureItem({ icon, title, text }: featureItemTypes) {
    return (
        <>
            <div className="p-8 bg-white border border-gray-300 shadow-sm rounded-2xl dark:text-slate-100 dark:bg-slate-800 dark:border-slate-700 ">
                <div className="flex flex-col gap-4">
                    <div className="p-3 w-fit bg-blue-500/30 rounded-xl">{icon}</div>
                    <h1 className="text-xl font-semibold text-gray-800 dark:text-slate-100">{title} </h1>
                    <p className="text-gray-600 dark:text-slate-300">{text}</p>
                </div>
            </div>
        </>
    );
}
