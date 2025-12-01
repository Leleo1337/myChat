import { Shield, Users, Zap } from "lucide-react";
import FeatureItem from "./FeatureItem";

export default function FeaturesSection() {
    return (
        <>
            <section className="bg-slate-50">
                <div className="container w-full px-4 mx-auto py-18">
                    <h1 className="text-4xl font-bold text-center text-gray-900">Por que escolher o myChat?</h1>
                    <div className="flex flex-col w-full grid-cols-3 gap-8 pt-12 lg:grid">
                        <FeatureItem
                            icon={<Zap className="text-blue-500" />}
                            title="Rápido e Eficiente"
                            text="Mensagens instantâneas com sincronização em tempo real em todos os seus dispositivos"
                        />
                        <FeatureItem
                            icon={<Shield className="text-blue-500" />}
                            title="Autenticação 2FA"
                            text="Proteja sua conta com autenticação de dois fatores para maior segurança"
                        />
                        <FeatureItem
                            icon={<Users className="text-blue-500" />}
                            title="Organizado"
                            text="Fixe conversas importantes e mantenha tudo organizado em um só lugar"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
