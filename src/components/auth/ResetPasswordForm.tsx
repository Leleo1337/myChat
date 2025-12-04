import { LockIcon } from "lucide-react";
import InputIcon from "../ui/InputIcon";

export default function ResetPasswordForm() {
    return (
        <>
            <div className="pb-10 md:pb-16">
                <h1 className="text-4xl font-extrabold text-center text-gray-600 dark:text-gray-50">Redefinir senha</h1>
                <p className="text-center text-gray-600 dark:text-gray-400">Escolha uma nova senha para sua conta</p>
                <form className="flex flex-col w-full gap-4 pt-10" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="text-sm text-gray-800 dark:text-gray-200">
                            New password
                        </label>
                        <InputIcon
                            Icon={LockIcon}
                            type="password"
                            id="password"
                            name="password"
                            className="p-3 pl-10 text-gray-900 placeholder-gray-400 transition duration-150 bg-white border border-gray-300 rounded-lg shadow-sm dark:border-gray-600 dark:bg-slate-800 dark:text-gray-100 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="confirm" className="text-sm text-gray-800 dark:text-gray-200">
                            Confirm password
                        </label>
                        <InputIcon
                            Icon={LockIcon}
                            type="password"
                            id="password"
                            name="confirm"
                            className="p-3 pl-10 text-gray-900 placeholder-gray-400 transition duration-150 bg-white border border-gray-300 rounded-lg shadow-sm dark:border-gray-600 dark:bg-slate-800 dark:text-gray-100 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button className="p-4 font-semibold text-white bg-blue-500 cursor-pointer rounded-2xl hover:bg-blue-600">
                        Update password
                    </button>
                </form>
            </div>
        </>
    );
}
