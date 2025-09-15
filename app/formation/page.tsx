import Image from "next/image"
import Link from "next/link"
import { User, CircleChevronRight, ArrowUpRight, Users, Timer, CheckCircle, Smile, Quote } from "lucide-react"

export default function Formation() {
    const formationsData = [
        {
            nom: "Utilisation du défibrillateur semi-automatique",
            description: "Une formation animée par des formateurs expérimentés, infirmiers anesthésistes.",
            ficheTechnique: "/",
            dossierPresentation: "/",
            icon: " defibrillator", // Placeholder for a dynamic icon or image
        },
        {
            nom: "Urgence en structure",
            description: "Une formation animée par des formateurs expérimentés, infirmiers anesthésistes.",
            ficheTechnique: "/",
            dossierPresentation: "/",
            icon: " first aid kit", // Placeholder
        },
        {
            nom: "Troubles du comportement chez la personne âgée",
            description: "Une formation animée par des formateurs expérimentés, psychologue, cadre de santé, directeur d'ESSMS.",
            ficheTechnique: "/",
            dossierPresentation: "/",
            icon: " brain", // Placeholder
        },
        {
            nom: "Les actes de la fonction aide-soignante",
            description: "Une formation animée par des formateurs expérimentés, cadre de santé, hygiéniste, directeur d'ESSMS.",
            ficheTechnique: "/",
            dossierPresentation: "/",
            icon: " medical uniform", // Placeholder
        },
        {
            nom: "Prévenir les chutes et la régression chez la personne âgée",
            description: "Une formation animée par des formateurs expérimentés, cadre de santé, infirmiers, directeur d'ESSMS.",
            ficheTechnique: "/",
            dossierPresentation: "/",
            icon: " walking stick", // Placeholder
        },
    ];

    const testimonials = [
        {
            nom: "Hélène",
            avis: "Formation enrichissante. Les formateurs sont compétents, pédagogues et très formateurs.",
            color: "bg-blue-500", // Using a consistent color from your palette
        },
        {
            nom: "Pascal",
            avis: "Bonne formation, intervenant très compétent, explications top!",
            color: "bg-cyan-500", // Another color from your palette
        },
        {
            nom: "Stéphanie",
            avis: "Très satisfaite de cette formation, très enrichissante.",
            color: "bg-teal-500", // A new but fitting color
        },
    ];

    return (
        <div className="min-h-[80vh] text-gray-900">
            {/* Hero */}
            <section className="relative">
                <div className="absolute inset-0 -z-10 flex justify-between opacity-20 w-full">
                    <div className="w-48 h-full bg-cyan-500"></div>
                    <div className="w-48 h-[60%] bg-blue-600"></div>
                    <div className="w-48 h-[85%] bg-cyan-400"></div>
                    <div className="w-48 h-[60%] bg-blue-700"></div>
                    <div className="w-48 h-[90%] bg-cyan-600"></div>
                </div>
                <div className="pt-[15vh] w-full flex flex-col md:flex-row justify-around items-center gap-10 mb-20">
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="text-[2.8em] md:text-[3.5em] text-black font-montserrat font-bold leading-tight">Catalogue de <span className="text-cyan-500">formation</span> 2025</h1>
                        <p className="text-lg text-gray-600 mb-6">
                            Découvrez nos formations professionnelles adaptées à vos besoins.
                        </p>
                        <Link href="/" className="button-29 w-[40%]">
                            Nos formations <CircleChevronRight className="ml-4" />
                        </Link>
                        <div className="mt-6 space-y-2 text-gray-700">
                            <p className="font-semibold">Un besoin sur mesure</p>
                            <p>Nous vous accompagnons dans vos projets</p>
                        </div>
                    </div>
                    <div className="relative w-[25%] h-160 rounded-xl overflow-hidden shadow-lg">
                        <Image fill src="/catalogueFormation.avif" alt="Couverture du catalogue de formation" className="object-cover" />
                    </div>
                </div>
            </section>

            {/* Formations */}
            <section id="formations" className="max-w-7xl mx-auto px-6 py-20">
                <h2 className="relative bg-gradient-to-r from-cyan-500 to-blue-700
                           bg-[length:200%_200%] bg-clip-text text-transparent
                           animate-gradient font-bold text-[4.5em]
                           [text-shadow:_2px_2px_4px_rgba(0,0,0,0.25)] uppercase text-center mb-16">
                    Nos formations
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {formationsData.map((data, i) => (
                        <div
                            key={i}
                            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="p-8 bg-white h-full">
                                {/* Option: use a dynamic icon or an image based on `data.icon` */}
                                <div className="w-12 h-12 flex items-center justify-center bg-cyan-500 rounded-lg mb-6 text-white text-3xl">
                                    {data.icon === " defibrillator" ? "⚡" : data.icon === " first aid kit" ? "⚕️" : data.icon === " brain" ? "🧠" : data.icon === " medical uniform" ? "🧑‍⚕️" : data.icon === " walking stick" ? "🚶" : "❓"}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{data.nom}</h3>
                                <p className="text-gray-600">{data.description}</p>
                            </div>
                            <div className="flex w-full text-white font-semibold text-lg relative z-10">
                                <a
                                    href={data.ficheTechnique}
                                    className="w-1/2 py-4 text-center bg-blue-600 transition-colors hover:bg-blue-700 flex justify-center items-center gap-2"
                                >
                                    Fiche technique
                                    <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>
                                <a
                                    href={data.dossierPresentation}
                                    className="w-1/2 py-4 text-center bg-cyan-500 transition-colors hover:bg-cyan-600 flex justify-center items-center gap-2"
                                >
                                    Présentation
                                    <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Témoignages */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="relative bg-gradient-to-r from-cyan-500 to-blue-700
                           bg-[length:200%_200%] bg-clip-text text-transparent
                           animate-gradient font-bold text-[4.5em]
                           [text-shadow:_2px_2px_4px_rgba(0,0,0,0.25)] uppercase text-center mb-16">
                        Témoignages de nos stagiaires
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {testimonials.map((testimonial, i) => (
                            <div
                                key={i}
                                className="group relative bg-gray-50 p-6 border border-gray-200 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                            >
                                <div className="flex items-center space-x-4 mb-4">
                                    {/* Using a placeholder avatar with initials */}
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${testimonial.color} text-white font-bold text-xl shadow-md`}>
                                        {testimonial.nom.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{testimonial.nom}</p>
                                        <div className="flex text-yellow-500 mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10.868 2.884c.321-.715.935-.911 1.696-.653a1.865 1.865 0 0 1 1.096.993L16.3 7.214a1.865 1.865 0 0 0 1.096.993c.761.258.975.845.653 1.558l-1.928 4.351a1.865 1.865 0 0 1-1.258.917L12.55 15.34a1.865 1.865 0 0 0-1.049.774l-.99.99c-.388.388-.934.582-1.48.582s-1.092-.194-1.48-.582l-.99-.99a1.865 1.865 0 0 0-1.05-.774l-2.264-.788a1.865 1.865 0 0 1-1.258-.917l-1.928-4.35c-.322-.714-.108-1.301.653-1.558a1.865 1.865 0 0 1 1.096-.993l2.63-2.68a1.865 1.865 0 0 0 1.096-.993c.321-.714.935-.91 1.696-.652l2.264.788z" clipRule="evenodd" /></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10.868 2.884c.321-.715.935-.911 1.696-.653a1.865 1.865 0 0 1 1.096.993L16.3 7.214a1.865 1.865 0 0 0 1.096.993c.761.258.975.845.653 1.558l-1.928 4.351a1.865 1.865 0 0 1-1.258.917L12.55 15.34a1.865 1.865 0 0 0-1.049.774l-.99.99c-.388.388-.934.582-1.48.582s-1.092-.194-1.48-.582l-.99-.99a1.865 1.865 0 0 0-1.05-.774l-2.264-.788a1.865 1.865 0 0 1-1.258-.917l-1.928-4.35c-.322-.714-.108-1.301.653-1.558a1.865 1.865 0 0 1 1.096-.993l2.63-2.68a1.865 1.865 0 0 0 1.096-.993c.321-.714.935-.91 1.696-.652l2.264.788z" clipRule="evenodd" /></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10.868 2.884c.321-.715.935-.911 1.696-.653a1.865 1.865 0 0 1 1.096.993L16.3 7.214a1.865 1.865 0 0 0 1.096.993c.761.258.975.845.653 1.558l-1.928 4.351a1.865 1.865 0 0 1-1.258.917L12.55 15.34a1.865 1.865 0 0 0-1.049.774l-.99.99c-.388.388-.934.582-1.48.582s-1.092-.194-1.48-.582l-.99-.99a1.865 1.865 0 0 0-1.05-.774l-2.264-.788a1.865 1.865 0 0 1-1.258-.917l-1.928-4.35c-.322-.714-.108-1.301.653-1.558a1.865 1.865 0 0 1 1.096-.993l2.63-2.68a1.865 1.865 0 0 0 1.096-.993c.321-.714.935-.91 1.696-.652l2.264.788z" clipRule="evenodd" /></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10.868 2.884c.321-.715.935-.911 1.696-.653a1.865 1.865 0 0 1 1.096.993L16.3 7.214a1.865 1.865 0 0 0 1.096.993c.761.258.975.845.653 1.558l-1.928 4.351a1.865 1.865 0 0 1-1.258.917L12.55 15.34a1.865 1.865 0 0 0-1.049.774l-.99.99c-.388.388-.934.582-1.48.582s-1.092-.194-1.48-.582l-.99-.99a1.865 1.865 0 0 0-1.05-.774l-2.264-.788a1.865 1.865 0 0 1-1.258-.917l-1.928-4.35c-.322-.714-.108-1.301.653-1.558a1.865 1.865 0 0 1 1.096-.993l2.63-2.68a1.865 1.865 0 0 0 1.096-.993c.321-.714.935-.91 1.696-.652l2.264.788z" clipRule="evenodd" /></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10.868 2.884c.321-.715.935-.911 1.696-.653a1.865 1.865 0 0 1 1.096.993L16.3 7.214a1.865 1.865 0 0 0 1.096.993c.761.258.975.845.653 1.558l-1.928 4.351a1.865 1.865 0 0 1-1.258.917L12.55 15.34a1.865 1.865 0 0 0-1.049.774l-.99.99c-.388.388-.934.582-1.48.582s-1.092-.194-1.48-.582l-.99-.99a1.865 1.865 0 0 0-1.05-.774l-2.264-.788a1.865 1.865 0 0 1-1.258-.917l-1.928-4.35c-.322-.714-.108-1.301.653-1.558a1.865 1.865 0 0 1 1.096-.993l2.63-2.68a1.865 1.865 0 0 0 1.096-.993c.321-.714.935-.91 1.696-.652l2.264.788z" clipRule="evenodd" /></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10.868 2.884c.321-.715.935-.911 1.696-.653a1.865 1.865 0 0 1 1.096.993L16.3 7.214a1.865 1.865 0 0 0 1.096.993c.761.258.975.845.653 1.558l-1.928 4.351a1.865 1.865 0 0 1-1.258.917L12.55 15.34a1.865 1.865 0 0 0-1.049.774l-.99.99c-.388.388-.934.582-1.48.582s-1.092-.194-1.48-.582l-.99-.99a1.865 1.865 0 0 0-1.05-.774l-2.264-.788a1.865 1.865 0 0 1-1.258-.917l-1.928-4.35c-.322-.714-.108-1.301.653-1.558a1.865 1.865 0 0 1 1.096-.993l2.63-2.68a1.865 1.865 0 0 0 1.096-.993c.321-.714.935-.91 1.696-.652l2.264.788z" clipRule="evenodd" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <blockquote className="relative italic text-gray-700">
                                    <Quote size={28} className="absolute -top-4 -left-4 text-gray-300 opacity-70 transform -scale-x-100" />
                                    <p className="relative z-10">"{testimonial.avis}"</p>
                                </blockquote>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-50">
                <h2 className="relative bg-gradient-to-r from-cyan-500 to-blue-700
                           bg-[length:200%_200%] bg-clip-text text-transparent
                           animate-gradient font-bold text-[4.5em]
                           [text-shadow:_2px_2px_4px_rgba(0,0,0,0.25)] uppercase text-center mb-16">
                    Nos statistiques en 2024
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Visuals Column */}
                    <div className="flex flex-col items-center justify-center space-y-8">
                        {/* Circle for Satisfaction */}
                        <div className="relative w-64 h-64 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                            <div className="absolute w-56 h-56 rounded-full bg-white flex flex-col items-center justify-center border-4 border-blue-500">
                                <span className="text-4xl font-bold text-blue-600">93%</span>
                                <span className="text-lg text-gray-600 mt-1">Très satisfait</span>
                            </div>
                        </div>
                        {/* Keywords Section */}
                        <div className="w-full text-center">
                            <p className="font-semibold text-lg mb-4">Quelques mots qui qualifient nos formations :</p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {["Dynamique", "Interactive", "Qualité"].map((m, i) => (
                                    <span key={i} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium shadow-sm">
                                        {m}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Text & Data Column */}
                    <div className="space-y-8 p-6 md:p-0">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Stagiaires */}
                            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
                                <div className="w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-full">
                                    <Users className="text-cyan-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-900">340</h3>
                                    <p className="text-gray-600">Stagiaires formés</p>
                                </div>
                            </div>

                            {/* Heures de formation */}
                            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
                                <div className="w-12 h-12 flex items-center justify-center bg-cyan-100 rounded-full">
                                    <Timer className="text-cyan-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-900">3 268</h3>
                                    <p className="text-gray-600">Heures de formation</p>
                                </div>
                            </div>
                        </div>

                        {/* Satisfaction Details */}
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold mb-2">Taux de satisfaction global</h3>
                            <div className="space-y-2">
                                <p className="flex items-center text-gray-700">
                                    <CheckCircle className="text-green-500 mr-2" size={20} />
                                    Satisfaction globale : <span className="font-bold text-blue-600 ml-2">97%</span>
                                </p>
                                <p className="flex items-center text-gray-700">
                                    <Smile className="text-yellow-500 mr-2" size={20} />
                                    Satisfaction des formateurs : <span className="font-bold text-blue-600 ml-2">100%</span>
                                </p>
                            </div>
                        </div>

                        {/* Detailed Indicators Link */}
                        <div className="flex justify-center md:justify-start">
                            <a href="/" className="inline-flex items-center text-blue-600 hover:underline font-semibold">
                                Voir les indicateurs détaillés
                                <span className="ml-1 text-sm">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
