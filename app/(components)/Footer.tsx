import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="flex flex-col text-white bg-[#04245c]">
            <div>
                <div>
                    <p>Contact : contact.i2sformation@gmail.com</p>
                    <p>SIRET : 951 335 629 00014</p>
                    <p>NDA : 01973505097</p>
                    <p>APE : 8559A</p>
                    <p>RCS pointe à pitre B951 335 629  </p>
                </div>
                <div>
                    <div className="w-16 h-16 relative"><Image fill src="/placeholder.jpg" alt="" /></div>
                    <a href="">Conditions générales de vente​</a>
                    <a href="">Politique de confidentialité</a>
                    <a href="">Règlement intérieur</a>
                </div>
                <div>
                    <div className="w-16 h-16 relative"><Image fill src="/placeholder.jpg" alt="" /></div>
                    <a href="">Traitement des réclamations</a>
                    <a href="">Formulaire de réclamation</a>
                    <a href="">Gestion des abandons</a>
                </div>
            </div>
            <span>© 2025 par Noxatris.dev</span>
        </footer>
    )
}