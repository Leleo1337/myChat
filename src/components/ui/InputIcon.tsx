import type { HTMLInputTypeAttribute } from "react";

export interface InputFormProps {
    Icon: any;
    type: HTMLInputTypeAttribute;
    id: string;
    name: string;
    className: string;
}

export default function InputIcon({ Icon, id, type, name, className }: InputFormProps) {
    return (
        <>
            <div className="relative flex flex-col gap-1">
                <input type={type} id={id} name={name} className={className} />
                <Icon className="absolute w-4 h-4 text-blue-500 -translate-y-1/2 top-1/2 left-4" />
            </div>
        </>
    );
}
