import AboutImg from "../assets/maria-digging-1.jpg";

const About = () => {
  return (
    <section className="w-full">
      <div className="max-w-[80vw] mx-auto px-4 py-8">
        <h2 className="mb-6 lg:mb-16 text-5xl font-regular flex items-baseline gap-4 after:content-[''] after:flex-1 after:h-px after:bg-current">
          OM MIG
        </h2>

        <article className="mb-8">
          <p className="font-semibold leading-relaxed">
            Jag bor utanför Gnesta i ett litet torp tillsammans med min hund
            Ebbot. Även om jag lever lite off-grid är jag engagerad i omvärlden
            – med stort intresse för cirkulär ekonomi, klimatfrågor, djurrätt
            och mänskliga rättigheter. På fritiden påtar jag i trädgården,
            håller på med något av mina hundratals diy-projekt eller vandrar
            planlöst runt i skogen (och hittar förhoppningsvis lite svamp på
            vägen).
          </p>
        </article>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            <article>
              <h3 className="text-xl font-bold uppercase mb-2">Bakgrund</h3>
              <p className="leading-relaxed">
                Jag har alltid varit nyfiken på hur saker fungerar och hur de
                kan göras bättre. Innan jag utbildade mig till logoped arbetade
                jag med pedagogik och omsorg – med barn på förskola och med
                vuxna med funktionsnedsättning. Det gav mig tidigt en förståelse
                för hur olika människors behov ser ut och hur viktigt bemötande
                är.
              </p>
              <p className="leading-relaxed mt-2">
                Logopedutbildningen tog mig sedan in i kliniskt arbete inom vård
                och rehabilitering i över sex år, med patienter med förvärvad
                hjärnskada, tal-, språk- och sväljsvårigheter, samt utprovning
                och förskrivning av kommunikationshjälpmedel. Parallellt ledde
                jag arbetsgrupper, var gästföreläsare på logopedprogrammet och
                arbetade ideellt med barn och unga i utsatta situationer.
              </p>
              <p className="leading-relaxed mt-2">
                Det var i mötet med personer med språkliga och kognitiva
                nedsättningar som något föll på plats – jag såg hur mycket
                digitala verktyg betydde, och hur ofta de föll kort. Inte för
                att tekniken saknades, utan för att den sällan var utformad med
                riktiga användare i åtanke. Den insikten väckte en önskan om att
                själv bidra till att skapa mer tillgänglighet – och det är den
                utvecklaren jag vill vara.
              </p>
            </article>
            <article>
              <h3 className="text-xl font-bold uppercase mb-2">Vad jag bidrar med</h3>
              <p className="leading-relaxed">
                Min bakgrund ger mig ett perspektiv som är svårt att skaffa sig
                på annat sätt. Jag har djup förståelse för användarperspektiv
                och tillgänglighet, inte som buzzwords utan som något jag
                arbetat med kliniskt. Jag är van att möta människor med olika
                förutsättningar och kommunicera tydligt oavsett mottagare –
                vilket gör mig till en bra länk mellan tech och verksamhet.
              </p>
              <p className="leading-relaxed mt-2">
                I ett team trivs jag lika bra i ledande som stödjande roll. Jag
                gillar miljöer där man samarbetar, delar kunskap och lyfter
                varandra – och det är den typen av kultur jag vill bidra till.
              </p>
            </article>
          </div>

          <img
            src={AboutImg}
            alt="Image of Maria digging in the garden"
            className="w-full h-auto rounded-md dark:border-none ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
