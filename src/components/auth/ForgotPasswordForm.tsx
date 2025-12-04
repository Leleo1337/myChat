import { MailIcon } from "lucide-react";
import InputIcon from "../ui/InputIcon";

export default function ForgotPasswordForm() {
    return (
        <>
            <div className="pb-10 md:pb-16">
                <h1 className="pb-2 text-4xl font-extrabold text-center text-gray-900 lg:text-5xl dark:text-gray-50">
                    Esqueceu sua senha?
                </h1>
                <p className="text-center text-gray-600 dark:text-gray-400">
                    Digite seu email para receber um link de recuperação.
                </p>

                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-full gap-4 pt-12">
                    <div className="relative flex flex-col">
                        <label htmlFor="email" className="mb-1 text-sm text-gray-800 dark:text-gray-200">
                            Email
                        </label>

                        <InputIcon
                            Icon={MailIcon}
                            type="email"
                            id="email"
                            name="email"
                            className="p-3 pl-10 text-gray-900 placeholder-gray-400 transition duration-150 bg-white border border-gray-300 rounded-lg shadow-sm dark:border-gray-600 dark:bg-slate-800 dark:text-gray-100 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button className="p-4 font-semibold text-white bg-blue-500 cursor-pointer rounded-2xl hover:bg-blue-600">
                        Enviar link de recuperação
                    </button>
                </form>
            </div>
        </>
    );
}
