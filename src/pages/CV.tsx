export default function CV() {
  return (
    <article className="mx-auto max-w-3xl p-6 leading-relaxed">
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Programmering skill set</h2>
        <ul className="list-disc pl-5 grid gap-1">
          <li>JavaScript/TypeScript, React + Vite, Redux</li>
          <li>Node.js/Express, REST‑API:er</li>
          <li>MongoDB/Mongoose, PostgreSQL</li>
          <li>SCSS/Tailwind, BEM</li>
          <li>Git/GitHub, CI/CD grund</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-3">Arbetslivserfarenhet</h2>
        <div className="space-y-4">
          <Job
            period="okt 2022 – jan 2025"
            title="Hjälpmedelskonsulent"
            place="KommSyn Stockholm"
            bullets={[
              "Utprovning, förskrivning och inträning av kommunikationshjälpmedel.",
              "Utbildning av förskrivare inom hjälpmedelssortimentet.",
            ]}
          />
          <Job
            period="sep 2020 – okt 2022"
            title="Logoped"
            place="Konsultteamet Hjärnskaderehab, Danderyds sjukhus"
            bullets={["Bedömning och rehabilitering av patienter med svår förvärvad hjärnskada."]}
          />
          <Job
            period="sep 2019 – sep 2020"
            title="Logoped"
            place="Logopedi Västra"
            bullets={[
              "Bedömning och behandling av patienter med tal‑, språk‑ och sväljsvårigheter på mottagning och i hemmet.",
            ]}
          />
          <Job
            period="juni 2018 – sep 2019"
            title="Logoped"
            place="Karolinska Universitetssjukhuset Huddinge"
            bullets={[
              "Bedömning och behandling av inneliggande patienter med tal‑, språk‑ och sväljsvårigheter.",
            ]}
          />
          <Job
            period="2017 – 2018"
            title="Boendestödjare"
            place="Kungssätra LSS‑boende"
            bullets={[
              "Stöd i vardagliga sysslor, planering samt stödsamtal; målgrupp personer med Aspergers syndrom.",
            ]}
          />
          <Job period="2016 – 2017" title="Servitris" place="Holy Cow" bullets={[]} />
          <Job
            period="juni 2015 – aug 2015"
            title="Biträdande föreståndare"
            place="Rödlögaboden"
            bullets={["Ansvar för schemaläggning, personal och beställningar."]}
          />
          <Job
            period="juni 2014 – aug 2014"
            title="Kassör och bagare"
            place="Rödlögaboden"
            bullets={[]}
          />
          <Job
            period="2012 – 2014"
            title="Barnskötare"
            place="Nytorgets Förskolor"
            bullets={[
              "Pedagogiskt arbete i barngrupp, planering samt stödperson till ett barn med autism.",
            ]}
          />
          <Job
            period="2009 – 2010"
            title="Barnskötare"
            place="Daggkåpans Förskola"
            bullets={["Pedagogiskt arbete i barngrupp och planering."]}
          />
          <Job
            period="2008 – 2009"
            title="Vårdbiträde"
            place="HSB Hemtjänst Kungsholmen"
            bullets={["Omsorg och stöd till äldre."]}
          />
        </div>
      </section>

      <section className="mb-8 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold mb-2">Utbildning</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>2024 – JavaScriptutvecklare, Folkuniversitetet Göteborg (distans)</li>
            <li>2020 – Handledarutbildning, 1,5 hp, Karolinska Institutet</li>
            <li>2014–2018 – Logopedprogrammet, 240 hp, Karolinska institutet</li>
            <li>2015 – Introduktionskurs i teckenspråk 7,5 hp, Stockholms universitet</li>
            <li>2010 – Konflikthantering i praktiken 7,5 hp</li>
            <li>Utbildningsvetenskap A, 30 hp, Södertörns högskola</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Övrigt</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Körkort: B‑körkort</li>
            <li>Språk: Svenska (modersmål), Engelska (flytande), Teckenspråk (grund)</li>
            <li>Datorvana: Mycket god kunskap – PC och Mac</li>
            <li>Journalsystem: Take Care, Parasol</li>
            <li>Ideella uppdrag: 2010–2020 Projektmedarbetare fritidsverksamhet barn & unga, Stockholm United</li>
            <li>Referenser: Lämnas på begäran</li>
          </ul>
        </div>
      </section>
    </article>
  );
}

function Job({
  period,
  title,
  place,
  bullets,
}: {
  period: string;
  title: string;
  place: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-2xl border p-4">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>
      <p className="text-sm text-muted-foreground">{place}</p>
      {bullets.length > 0 && (
        <ul className="list-disc pl-5 mt-2 space-y-1">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
