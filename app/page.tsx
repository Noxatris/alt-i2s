import Image from "next/image";
import VideoContainer from "./(components)/VideoContainer";
import { CircleChevronRight, ArrowBigDownDash } from "lucide-react"

export default function Home() {
  return (
    <div className="w-screen min-h-[200vh] relative overflow-x-hidden">
      <VideoContainer />
      <section className="flex flex-col items-center mb-24 px-6">
        {/* Bloc titres inchangé */}
        <div className="text-center max-w-5xl">
          <h1 className="text-[2.8em] md:text-[3.5em] text-black font-montserrat font-bold leading-tight">
            Des formations adaptées au secteur
            <span className="text-cyan-500"> sanitaire</span> et
            <span className="text-cyan-500"> médico-social</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Accompagnement à l’évaluation HAS • Audits & conseils
          </p>
        </div>

        {/* Grille de cartes */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {/* Carte 1 : Formation */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 flex items-center justify-center bg-cyan-400 rounded-lg mb-4">
              {/* Remplacez par une icône pertinente (ex: graduation cap) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l10 5-10 5-10-5zm0 10l10 5-10 5-10-5zm0 10v-5m0-10l-10-5m20 5v5" /></svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-cyan-400">Développer les compétences</h3>
            <p className="text-gray-700">
              Vous cherchez à faire évoluer vos collaborateurs et à développer leurs compétences.
            </p>
          </div>

          {/* Carte 2 : Évaluation HAS */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 flex items-center justify-center bg-cyan-400 rounded-lg mb-4">
              {/* Remplacez par une icône pertinente (ex: certificate) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79l-4.5 4.5-2.9-2.9-1.4 1.4L16.6 19l4.4-4.4zM22 6L16 0 2 14v8h8z" /></svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-cyan-400">Accompagnement HAS</h3>
            <p className="text-gray-700">
              Vous voulez être accompagné vers votre prochaine évaluation HAS.
            </p>
          </div>

          {/* Carte 3 : Audits & Conseils */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 flex items-center justify-center bg-cyan-400 rounded-lg mb-4">
              {/* Remplacez par une icône pertinente (ex: magnifying glass) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <h3 className="font-bold text-lg mb-2 text-cyan-400">Audits et Conseils</h3>
            <p className="text-gray-700">
              Vous souhaitez des audits ou des conseils adaptés à vos besoins.
            </p>
          </div>
        </div>

        {/* CTA inchangé */}
        <div className="mt-16 flex flex-col items-center">
          <p className="italic text-gray-700 mb-6">
            "I2S Formation" vous accompagne au quotidien dans les Caraïbes
          </p>
          <button className="button-29 w-[95%]" role="button">
            Une demande de devis ? Contactez-nous !
          </button>
        </div>
      </section>
      {/* ----------------------------------------------------------------
                                 Section Services
      ------------------------------------------------------------------*/}
      <section className="text-white flex flex-col items-center bg-[#04245c] px-6 md:px-20 py-16 relative overflow-hidden">
        <svg
          className="absolute inset-y-0 left-0 h-full w-120 pointer-events-none opacity-20"
          viewBox="0 0 50 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="chevStrokeServices" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <polyline points="0,0 20,50 0,100" fill="none" stroke="url(#chevStrokeServices)" strokeWidth="12" />
          <polyline points="20,0 40,50 20,100" fill="none" stroke="url(#chevStrokeServices)" strokeWidth="12" />
        </svg>

        <div className="relative z-10 w-full max-w-5xl flex flex-col">
          {/* Texte d’intro */}
          <h1 className="text-2xl md:text-3xl font-semibold leading-snug text-center max-w-4xl mx-auto">
            I2S Formation propose des <span className="text-cyan-400">formations</span>,
            des <span className="text-cyan-400">audits & conseils</span>,
            et l’accompagnement vers votre prochaine <span className="text-cyan-400">évaluation HAS</span>.
          </h1>

          {/* Conteneur principal de la liste */}
          <div className="flex flex-col md:flex-row md:space-x-12 mt-16">
            {/* Section gauche : la liste des services */}
            <div className="flex-1 space-y-12">
              {/* Item 1 : Formations */}
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-16 h-16 flex items-center justify-center bg-cyan-400 rounded-lg shrink-0 shadow-lg">
                  {/* Remplacez par une icône pertinente (ex: graduation cap) */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l10 5-10 5-10-5zm0 10l10 5-10 5-10-5zm0 10v-5m0-10l-10-5m20 5v5" /></svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Formations</h2>
                  <p className="text-lg text-gray-200">
                    Notre équipe pédagogique construit, sur mesure, le programme de formation dont vous avez besoin.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CircleChevronRight className="h-5 w-5 mr-2 mt-1 text-cyan-400 shrink-0" />
                      <span>Secteurs d'intervention : sanitaire, médico-social, entreprises, etc.</span>
                    </li>
                    <li className="flex items-start">
                      <CircleChevronRight className="h-5 w-5 mr-2 mt-1 text-cyan-400 shrink-0" />
                      <span>Programmes sur mesure, adaptés à vos besoins spécifiques.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Item 2 : Accompagnement HAS */}
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-16 h-16 flex items-center justify-center bg-cyan-400 rounded-lg shrink-0 shadow-lg">
                  {/* Remplacez par une icône pertinente (ex: certificate) */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79l-4.5 4.5-2.9-2.9-1.4 1.4L16.6 19l4.4-4.4zM22 6L16 0 2 14v8h8z" /></svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Accompagnement évaluation HAS</h2>
                  <p className="text-lg text-gray-200">
                    Un évaluateur certifié AFNOR vous accompagne vers votre prochaine évaluation HAS.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CircleChevronRight className="h-5 w-5 mr-2 mt-1 text-cyan-400 shrink-0" />
                      <span>Préparation et audits blancs.</span>
                    </li>
                    <li className="flex items-start">
                      <CircleChevronRight className="h-5 w-5 mr-2 mt-1 text-cyan-400 shrink-0" />
                      <span>Mise en conformité avec le référentiel.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Item 3 : Audits & Conseils */}
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-16 h-16 flex items-center justify-center bg-cyan-400 rounded-lg shrink-0 shadow-lg">
                  {/* Remplacez par une icône pertinente (ex: magnifying glass) */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Audits et Conseils</h2>
                  <p className="text-lg text-gray-200">
                    Des audits ou des conseils adaptés à vos besoins.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <CircleChevronRight className="h-5 w-5 mr-2 mt-1 text-cyan-400 shrink-0" />
                      <span>Audits hygiène, management, gestion des risques.</span>
                    </li>
                    <li className="flex items-start">
                      <CircleChevronRight className="h-5 w-5 mr-2 mt-1 text-cyan-400 shrink-0" />
                      <span>Conseils pour l'optimisation des processus.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------
                                 Section Equipe 
      ------------------------------------------------------------------*/}
      <section className="text-black flex flex-col py-24 items-center relative">
        <svg className="absolute inset-0 w-full h-full opacity-10 text-gray-400 -z-50">
          <defs><pattern id="a" width="69.283" height="40" patternTransform="scale(4)" patternUnits="userSpaceOnUse"><rect width="100%" height="100%" fill="#2c904e" fillOpacity="0" /><path fill="none" stroke="#4bbcec" strokeWidth=".5" d="M46.189-20 57.736 0M46.189 20l11.547 20m-46.189 0 11.547 20M11.547 0l11.547 20m40.415 30H40.415M28.868 30H5.774m23.094-40H5.774m57.735 20H40.415m0 20L28.868 50m11.547-60L28.868 10m46.188 0L63.509 30M5.774 10-5.773 30m75.056 10H46.189L34.64 20 46.19 0h23.094q5.77 10 11.546 20zM57.736 60H34.64L23.094 40l11.547-20h23.095l11.547 20zm0-40H34.64L23.094 0l11.547-20h23.095L69.283 0c-3.87 6.7-8.118 14.06-11.547 20zM34.64 60H11.547L0 40l11.547-20h23.094L46.19 40zm0-40H11.547L0 0l11.547-20h23.094L46.19 0zM23.094 40H0l-5.773-10-5.774-10L0 0h23.094l11.547 20z" /></pattern></defs><rect width="800%" height="800%" fill="url(#a)" />
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="w-full flex justify-center">
          <h1 className="relative bg-gradient-to-r from-cyan-500 to-blue-700 
                 bg-[length:200%_200%] bg-clip-text text-transparent 
                 animate-gradient font-bold text-[4.5em] 
                 [text-shadow:_2px_2px_4px_rgba(0,0,0,0.25)] uppercase">
            Notre équipe dirigeante
          </h1>
        </div>
        <span className="text-[2.2em] my-12 italic text-cyan-500 mt-6">Guider, inspirer et soutenir</span>
        <p className="text-[1.7em] mb-2 font-montserrat">Implantés en Guadeloupe, nous assurons nos formations dans les Caraibes ainsi qu'en métropole.</p>
        <p className="text-[1.7em] font-montserrat">Dirigé par des membres fondateurs experts, I2S est spécialisé dans le secteur médico-social et sanitaire.</p>
        <div className="flex justify-around my-24 w-full">
          <div className="flex flex-col justify-center items-center gap-2 bg-gray-100 px-6 py-8 rounded-2xl shadow-xl -z-50">
            <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-inset"><Image fill src="/equipe/profile_1.avif" className="-z-100" alt="" /></div>
            <p className="font-bold mt-4">D.Trouillefou</p>
            <p>Président</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 bg-gray-100 px-6 py-8 rounded-2xl shadow-xl -z-50">
            <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-inset"><Image fill src="/equipe/profile_2.avif" alt="" className="-z-100" /></div>
            <p className="font-bold mt-4">I.Gominbaulx</p>
            <p>Directrice générale</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 bg-gray-100 px-6 py-8 rounded-2xl shadow-xl -z-50">
            <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-inset"><Image fill src="/equipe/profile_3.avif" className="-z-10" alt="" /></div>
            <p className="font-bold mt-4">Dr. R. Etonno</p>
            <p>Directrice pédagogique</p>
            <p>Référent handicap</p>
          </div>
        </div>
        <button className="button-29 w-[15%]" role="button">Organigramme <CircleChevronRight /></button>
      </section>
      <section className="text-black flex flex-col items-center pt-16 min-h-[80vh] relative overflow-hidden">
        {/* ton SVG décoratif à gauche */}
        <svg className="absolute inset-y-0 left-0 h-full w-120 pointer-events-none"
          viewBox="0 0 50 100" preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="chevStroke" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <polyline points="0,0 20,50 0,100" fill="none" stroke="url(#chevStroke)" strokeWidth="12" />
          <polyline points="20,0 40,50 20,100" fill="none" stroke="url(#chevStroke)" strokeWidth="12" />
        </svg>

        {/* contenu texte */}
        <h1 className="relative bg-gradient-to-r from-cyan-500 to-blue-700 
               bg-[length:200%_200%] bg-clip-text text-transparent 
               animate-gradient font-bold text-[4.5em] 
               [text-shadow:_2px_2px_4px_rgba(0,0,0,0.25)] uppercase">
          Situation de handicap
        </h1>

        <div className="flex w-full justify-center">
          <div className="flex flex-col justify-around w-full items-center">
            <span className="font-montserrat text-[2em] my-8">I2S Formation s'engage à vous accueillir</span>
            <span className="font-montserrat text-[2em] my-8">Une question ou un besoin ?</span>
            <ArrowBigDownDash className="mb-2 text-cyan-400 animate-bounce-smooth" size={50} />
          </div>
        </div>

        <button className="button-29 w-[20%]" role="button">Contactez le référent handicap</button>

        {/* image en arc à droite */}
        <div className="absolute inset-y-0 right-0 w-[30%]">
          <div className="h-full w-full bg-[url('/Alt_handicap.jpg')] bg-cover bg-center"
            style={{
              clipPath: "ellipse(80% 100% at 100% 50%)"
            }}>
          </div>
        </div>
      </section>
      {/* ---- GARDER POUR REVIEW ----
      <section className="text-black flex flex-col pt-16 min-h-[80vh] relative overflow-hidden">
        <div className="w-[65%] flex flex-col items-center">
          <h1 className="relative bg-gradient-to-r from-cyan-500 to-blue-700 
               bg-[length:200%_200%] bg-clip-text text-transparent 
               animate-gradient font-bold text-[4.5em] 
               [text-shadow:_2px_2px_4px_rgba(0,0,0,0.25)]">
            SITUATION DE HANDICAP
          </h1>

          <div className="flex w-full justify-center">
            <div className="flex flex-col justify-around w-full items-center">
              <span className="font-montserrat text-[2em] my-8">I2S Formation s'engage à vous accueillir</span>
              <span className="font-montserrat text-[2em] my-8">Une question ou un besoin ?</span>
              <ArrowBigDownDash className="mb-2 text-cyan-400 animate-bounce-smooth" size={50} />
            </div>
          </div>

          <button className="button-29 w-[35%]" role="button">Contactez le référent handicap</button>
        </div>
      <div className="absolute inset-y-0 right-0 w-1/3">
        <div className="h-full w-full bg-[url('/Alt_handicap.jpg')] bg-cover bg-center"
          style={{
            clipPath: "ellipse(80% 100% at 100% 50%)"
          }}>
        </div>
      </div>
    </section>
    */}
    </div >
  );
}

