import { Shield } from "lucide-react";

export default function SecuritySection() {
    return (
        <>
            <section className="bg-white">
                <div className="container p-4 py-24 mx-auto">
                    <div className="flex justify-between gap-8">
                        <div className="w-full md:w-1/2">
                            <h1 className="pb-4 text-3xl font-bold text-center text-red-800 md:text-start">
                                Security disclaimer
                            </h1>
                            <ul className="ml-4 space-y-3 text-gray-700 list-disc list-inside">
                                <li className="font-semibold text-red-700">
                                    Apenas a sua senha está protegida de forma segura.
                                </li>
                                <li>
                                    <span className="font-semibold">Outras informações da conta</span> (como nome,
                                    e-mail) não têm garantia de segurança.
                                </li>
                                <li>
                                    <span className="font-semibold">Conteúdo de Conversas/Chats:</span> O sigilo de todo
                                    o conteúdo da conversa não é garantido.
                                </li>
                                <li>As conversas podem se tornar acessíveis ou visíveis acidentalmente a terceiros.</li>
                            </ul>
                            <p className="px-3 pt-2 text-red-500">
                                Aviso Crítico: Não insira nenhuma informação pessoal ou sensível nas funcionalidades de
                                chat. Use o serviço por sua conta e risco.
                            </p>
                        </div>
                        <div className="items-center justify-center hidden w-1/2 p-4 md:flex bg-red-500/10 rounded-2xl">
                            <Shield size={256} className="text-red-500" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
