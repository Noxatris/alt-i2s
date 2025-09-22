import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#04245c] text-white px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
                {/* Infos légales */}
                <div className="space-y-2 text-sm">
                    <p>Contact : contact.i2sformation@gmail.com</p>
                    <p>SIRET : 951 335 629 00014</p>
                    <p>NDA : 01973505097</p>
                    <p>APE : 8559A</p>
                    <p>RCS pointe à pitre B951 335 629</p>
                </div>

                {/* Bloc 1 */}
                <div className="space-y-3">
                    <div className="relative w-20 h-20 mx-auto md:mx-0">
                        <Image fill src="/footer1.jpg" alt="Logo I2S" className="object-contain" />
                    </div>
                    <div className="flex flex-col space-y-1 text-sm">
                        <a href="" className="hover:underline">Conditions générales de vente</a>
                        <a href="" className="hover:underline">Politique de confidentialité</a>
                        <a href="" className="hover:underline">Règlement intérieur</a>
                    </div>
                </div>

                {/* Bloc 2 */}
                <div className="space-y-3">
                    <div className="relative w-20 h-20 mx-auto md:mx-0">
                        <Image fill src="/footer2.avif" alt="Logo Réclamation" className="object-contain" />
                    </div>
                    <div className="flex flex-col space-y-1 text-sm">
                        <a href="" className="hover:underline">Traitement des réclamations</a>
                        <a href="" className="hover:underline">Formulaire de réclamation</a>
                        <a href="" className="hover:underline">Gestion des abandons</a>
                    </div>
                </div>

                {/* Certification Qualiopi */}
                <div className="flex justify-center md:justify-end">
                    <div className="relative w-60 h-28 md:w-72 md:h-32">
                        <Image
                            fill
                            src="/certification.avif"
                            alt="Certification Qualiopi"
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Bas de page */}
            <div className="text-center mt-8 text-xs opacity-80">
                © 2025 par Noxatris.dev
            </div>
        </footer>
    );
}
