import { Search, UserPlus } from "lucide-react";
import { mockContacts } from "../../../data/mockContacts";
import Avatar from "react-avatar";
import { useContext, useState } from "react";
import AddUserModal from "../../ui/modals/AddUserModal";
import LanguageContext from "../../../context/LanguageContext";

export default function ContactSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { languageData } = useContext(LanguageContext);

    return (
        <>
            {isModalOpen && <AddUserModal setModalOpen={setIsModalOpen} />}
            <div className="w-full h-screen py-8 sm:pl-32 lg:max-w-[600px] bg-white overflow-y-scroll border-r border-gray-300 dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
                <div className="px-4 sm:px-1">
                    <div className="pb-4">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100">
                            {languageData.mainApp.contactsSection?.title}
                        </h1>
                    </div>
                    <div>
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full py-2.5 pl-12 pr-4 text-gray-800 placeholder-gray-500 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-3xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 focus:outline-none dark:text-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:placeholder-slate-500"
                                placeholder={languageData.mainApp.contactsSection?.inputPlaceholder}
                            />
                            <Search className="absolute text-blue-500 top-[13px] left-4 dark:text-blue-400" size={20} />
                        </div>
                        <div className="py-8 border-b border-gray-300 dark:border-gray-800">
                            <button
                                onClick={() => setIsModalOpen(!isModalOpen)}
                                className="flex items-center gap-2 font-semibold text-blue-500 cursor-pointer hover:text-blue-700">
                                <div className="p-1.5 text-white bg-blue-500 rounded-full">
                                    <UserPlus />
                                </div>
                                {languageData.mainApp.contactsSection?.newContactButton}
                            </button>
                        </div>
                    </div>
                    <div className="py-4">
                        <div className="pb-4 text-lg font-semibold text-gray-900 dark:text-gray-200">
                            <h1> {languageData.mainApp.contactsSection?.myContactsTitle}</h1>
                        </div>
                        <div className="flex flex-col gap-4">
                            {mockContacts.map((contact) => (
                                <div className="flex items-center gap-2">
                                    {contact.pfp ? (
                                        <img src={contact.pfp} alt="" />
                                    ) : (
                                        <Avatar
                                            name={contact.name}
                                            size="40"
                                            className={`text-xs rounded-full outline-1 transition-none ${
                                                contact.status == "Online" ? "outline-green-500" : "outline-gray-500"
                                            }`}
                                        />
                                    )}
                                    <div className="flex flex-col">
                                        <p className="font-semibold">{contact.name}</p>
                                        <p
                                            className={`${
                                                contact.status == "Online" ? "text-green-500" : "text-gray-500"
                                            } text-sm`}>
                                            {contact.status}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
