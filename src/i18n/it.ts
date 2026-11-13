import type { Dictionary } from "./types";

export const it: Dictionary = {
  brand: "KSAG Insurance",
  nav: {
    home: "Home",
    about: "Chi siamo",
    healthCompare: "Confronto casse malati",
    private: "Privati",
    business: "Aziende",
    tax: "Consulenza fiscale",
    recommend: "Consiglia",
    contact: "Contatto",
    cta: "Richiedi consulenza",
    more: "Altro",
  },
  common: {
    more: "Di più",
    contactUs: "Contattaci",
    hoursLabel: "Orari",
    hours: "Lunedì – venerdì: 08:00 – 17:00\nO su appuntamento.",
    address: "Bahnhofstrasse 12\n8001 Zurigo\nSvizzera",
    phone: "+41 44 123 45 67",
    email: "hello@ksag-insurance.ch",
    send: "Invia",
    success: "Grazie — richiesta inviata (demo).",
    required: "Obbligatorio",
    back: "Indietro",
    mockNote: "Contenuto demo a scopo illustrativo.",
  },
  home: {
    heroBrand: "KSAG Insurance",
    heroTitle: "Consulenza indipendente per una copertura chiara.",
    heroSub:
      "Come broker indipendenti confrontiamo le principali compagnie svizzere e troviamo la soluzione adatta a voi o alla vostra azienda.",
    heroPrimary: "Confronta la cassa malati",
    heroSecondary: "Scopri i privati",
    welcomeEyebrow: "Benvenuti",
    welcomeTitle: "Benvenuti da KSAG",
    welcomeBody: [
      "KSAG è un broker assicurativo indipendente che collabora con compagnie leader.",
      "Come fornitore autorizzato vi aiutiamo a trovare la copertura adeguata.",
      "Confrontiamo i prodotti, spieghiamo pro e contro e restiamo il vostro unico referente.",
    ],
    servicesTitle: "Servizi per la tranquillità della vostra vita",
    privateCardTitle: "Privati?",
    privateCardBody: "Insieme affrontiamo la giungla assicurativa.",
    businessCardTitle: "Aziende?",
    businessCardBody: "Soluzioni su misura per la vostra impresa a premi interessanti.",
    contactCardTitle: "Contatto",
    contactCardBody: "Domande o consulenza personale? Siamo volentieri a disposizione.",
    staffTitle: "Solo il meglio per il personale",
    staffBody:
      "La soddisfazione dei collaboratori è centrale. Insieme costruiamo un futuro sicuro per il vostro personale.",
    staffItems: [
      "Previdenza professionale (LPP)",
      "Assicurazione infortuni",
      "Indennità giornaliera malattia collettiva",
    ],
  },
  about: {
    title: "Chi siamo",
    lead: "Broker indipendente con focus su consulenza chiara e assistenza duratura.",
    body: [
      "KSAG Insurance è un broker indipendente. Tra i nostri partner ci sono compagnie svizzere leader.",
      "Confrontiamo i prodotti e consuliamo in modo trasparente — un solo referente per tutti i contratti.",
      "I nostri collaboratori sono formati, autorizzati e registrati secondo le norme vigenti.",
    ],
    partnersTitle: "Cosa dicono i partner",
    quotes: [
      {
        quote: "Ottima collaborazione. KSAG lavora in modo indipendente con diverse compagnie.",
        name: "Voce partner",
        role: "Assicuratore",
      },
      {
        quote: "Seri, raggiungibili e orientati alle soluzioni quando i clienti hanno bisogno.",
        name: "Voce partner",
        role: "Assicuratore",
      },
      {
        quote: "Consulenza di alto livello e collaborazione affidabile.",
        name: "Voce partner",
        role: "Assicuratore",
      },
    ],
  },
  healthCompare: {
    title: "Confronto casse malati",
    lead: "In pochi passi verso una copertura di base conveniente — poi consulenza personale.",
    stepsTitle: "Come funziona",
    steps: [
      "Inserire luogo, età e franchigia",
      "Scegliere modello e cassa attuale",
      "Vedere il confronto e richiedere consulenza",
    ],
    formTitle: "Calcola il premio (demo)",
    zip: "NPA o località",
    year: "Anno di nascita",
    franchise: "Franchigia",
    accident: "Copertura infortuni",
    accidentYes: "Con infortuni",
    accidentNo: "Senza infortuni",
    currentInsurer: "Cassa attuale",
    model: "Modello desiderato",
    models: ["Standard", "Medico di famiglia", "HMO", "Altro"],
    submit: "Calcola premio",
    resultTitle: "Il confronto demo è pronto",
    resultBody:
      "In versione live qui apparirebbero premi approvati. Questa è una demo KSAG — prepariamo volentieri un confronto reale.",
  },
  private: {
    title: "Privati",
    lead: "Dalla cassa malati alla previdenza — confrontato, spiegato, seguito.",
    products: [
      {
        slug: "krankenversicherung",
        title: "Assicurazione malattia",
        short: "Base e complementari su misura.",
        lead: "Grazie a molte casse malati rispondiamo in modo individuale alle vostre esigenze.",
        sections: [
          {
            title: "Assicurazione di base (LAMal)",
            body: "Copertura obbligatoria per malattia, maternità e infortunio. Prestazioni identiche in tutta la Svizzera.",
            bullets: [
              "Modelli alternativi con possibile riduzione del premio",
              "Il rischio infortunio può spesso essere escluso a seconda dell’impiego",
            ],
          },
          {
            title: "Assicurazioni complementari",
            body: "Integrano prestazioni insufficienti o assenti nella base.",
            note: "Concludere presto è spesso utile — età o salute possono limitare l’ammissione.",
          },
        ],
      },
      {
        slug: "fahrzeugversicherung",
        title: "Assicurazione veicolo",
        short: "RC, casco parziale e completa — confrontate con chiarezza.",
        lead: "Tra le compagnie ci sono spesso grandi differenze di premio.",
        sections: [
          {
            title: "Coperture di base",
            bullets: ["Responsabilità civile (obbligatoria)", "Casco parziale", "Casco completa"],
          },
          {
            title: "Coperture aggiuntive",
            bullets: ["Protezione bonus", "Danni da parcheggio", "Effetti personali", "Fari", "Protezione occupanti"],
          },
        ],
      },
      {
        slug: "hausratversicherung",
        title: "Assicurazione economia domestica",
        short: "Protezione dei beni a casa.",
        lead: "Copre gli oggetti mobili per uso privato. La somma deve corrispondere al valore di rimpiazzo.",
        sections: [
          { title: "Coperture di base", bullets: ["Fuoco", "Acqua", "Furto", "Rottura vetri"] },
          {
            title: "Opzioni",
            bullets: ["Casco economia domestica", "Protezione carte", "Bagagli", "Bici"],
            note: "Segnalate i nuovi acquisti per evitare la sottoassicurazione.",
          },
        ],
      },
      {
        slug: "privathaftpflichtversicherung",
        title: "Responsabilità civile privata",
        short: "Protezione essenziale verso terzi.",
        lead: "Individuale o familiare: copertura di pretese giustificate e difesa da quelle ingiustificate.",
        sections: [
          {
            title: "Copertura di base",
            bullets: ["Danni alle persone", "Danni alle cose", "Spesso fino a CHF 10 mio."],
          },
          {
            title: "Possibili opzioni",
            bullets: ["Uso occasionale di veicoli altrui", "Caccia", "Aeromodelli", "Cose affittate o prestate"],
            note: "Consiglio: sconti combinati con l’economia domestica sono frequenti.",
          },
        ],
      },
      {
        slug: "rechtsschutzversicherung",
        title: "Protezione giuridica",
        short: "Supporto in controversie — privato e circolazione.",
        lead: "Copertura di costi processuali e assistenza legale.",
        sections: [
          {
            title: "Protezione privata (esempi)",
            bullets: ["Diritto del lavoro", "Vicini e locazione", "Diritti dei pazienti", "Contratti e assicurazioni", "Risarcimento"],
          },
          {
            title: "Protezione circolazione",
            body: "Come detentore, conducente, passeggero o pedone — a seconda della polizza.",
          },
        ],
      },
      {
        slug: "vorsorge",
        title: "Previdenza",
        short: "Previdenza individuale per il vostro tenore di vita.",
        lead: "Longevità e demografia sfidano i sistemi pensionistici. Ottimizziamo la vostra previdenza.",
        sections: [
          {
            title: "Il nostro accompagnamento",
            body: "Una soluzione secondo le vostre esigenze — confrontata e spiegata con chiarezza.",
          },
        ],
      },
    ],
  },
  business: {
    title: "Aziende",
    lead: "Copertura su misura — dal personale ai beni e alla responsabilità.",
    products: [
      {
        slug: "berufliche-vorsorge-bvg",
        title: "Previdenza professionale (LPP)",
        short: "2° pilastro per i collaboratori.",
        lead: "Integra il 1° pilastro e mira a mantenere il tenore di vita.",
        sections: [
          {
            title: "Minimo legale e oltre",
            body: "I collaboratori sopra la soglia LPP devono essere assicurati. Potete migliorare le prestazioni.",
          },
          {
            title: "Rischi assicurati",
            bullets: ["18–24: invalidità", "25–pensionamento: invalidità, vecchiaia, decesso"],
          },
        ],
      },
      {
        slug: "unfallversicherung",
        title: "Assicurazione infortuni",
        short: "Protezione obbligatoria LAINF.",
        lead: "Tutti i lavoratori in Svizzera devono essere assicurati — inclusi apprendisti e stagisti.",
        sections: [
          {
            title: "Da 8 ore/settimana",
            bullets: ["Infortuni professionali", "Malattie professionali", "Infortuni non professionali"],
          },
          {
            title: "Sotto 8 ore/settimana",
            bullets: ["Infortuni professionali", "Malattie professionali"],
          },
          {
            title: "Prestazioni",
            bullets: ["Indennità giornaliera", "Costi di cura", "Ricovero", "Rendite"],
          },
        ],
      },
      {
        slug: "kollektive-krankentaggeldversicherung",
        title: "Indennità giornaliera malattia collettiva",
        short: "Protezione del reddito in caso di malattia.",
        lead: "Supporta la continuazione del salario in caso di malattia — adatta alla vostra azienda.",
        sections: [
          {
            title: "Vantaggio",
            body: "Confrontiamo soluzioni collettive adatte a dimensioni e rischi.",
          },
        ],
      },
      {
        slug: "sach-und-haftpflichtversicherungen",
        title: "Cose e responsabilità civile",
        short: "Protezione per attività, inventario e responsabilità.",
        lead: "RC aziendale, inventario e altri rischi — strutturati e confrontati.",
        sections: [
          {
            title: "Temi tipici",
            bullets: ["RC aziendale", "Cose e inventario", "Altre coperture operative"],
          },
        ],
      },
    ],
  },
  tax: {
    title: "Consulenza fiscale",
    lead: "Ottimizzare la dichiarazione — deduzioni ammesse e eventuale opposizione.",
    body: [
      "La dichiarazione fiscale arriva presto ogni anno. Molti temono di aver dimenticato deduzioni.",
      "Completiamo e ottimizziamo la dichiarazione, verifichiamo la tassazione e redigiamo un’opposizione se serve.",
    ],
    pricingTitle: "Costi (demo)",
    pricing: [
      { label: "Apprendisti, studenti e pensionati", price: "CHF 35.00" },
      { label: "Persone singole", price: "CHF 70.00" },
      { label: "Coppie sposate", price: "CHF 95.00" },
      { label: "Proprietari di abitazione*", price: "CHF 160.00" },
    ],
    pricingNote: "* incl. 15 allegati. Allegati aggiuntivi: CHF 5.– ciascuno.",
    exclusion: "I lavoratori indipendenti sono esclusi da questa offerta.",
    stepsTitle: "Pochi passi",
    steps: [
      "Richiedere un appuntamento o una richiamata",
      "Compilare il modulo di contatto",
      "Vi contattiamo per i prossimi passi",
    ],
  },
  recommend: {
    title: "Consiglia",
    lead: "Condividete la fiducia in KSAG con familiari e amici — e ricevete un premio.",
    reward:
      "Dopo una conclusione riuscita di assicurazione malattia o vita: CHF 50.00 per persona (offerta demo).",
    stepsTitle: "Come procedere",
    steps: [
      "Compilare il modulo di raccomandazione",
      "Inviare i vostri dati e quelli della persona raccomandata",
      "La contattiamo per una consulenza",
      "In caso di conclusione riuscita ricevete il premio",
      "Accredito sul conto bancario indicato",
    ],
    important:
      "Importante: valgono le condizioni di partecipazione (nuovo cliente, 18+, ecc.). Offerta demo.",
    formTitle: "Invia una raccomandazione",
    yourName: "Il vostro nome",
    yourEmail: "La vostra e-mail",
    yourPhone: "Il vostro telefono",
    friendName: "Nome della persona raccomandata",
    friendPhone: "Telefono della persona raccomandata",
    friendEmail: "E-mail della persona raccomandata",
    submit: "Invia",
  },
  contact: {
    title: "Contatto",
    lead: "Domande o consulenza personale? Scriveteci.",
    formTitle: "Modulo di contatto",
    name: "Nome",
    email: "E-mail",
    phone: "Telefono",
    topic: "Tema",
    topics: [
      "Cassa malati",
      "Assicurazione privata",
      "Assicurazione aziendale",
      "Consulenza fiscale",
      "Sinistro",
      "Generale",
    ],
    message: "Messaggio",
    infoTitle: "Dati di contatto",
  },
  footer: {
    tagline: "Broker assicurativo svizzero indipendente.",
    privateTitle: "Privati",
    legal: "Legale",
    privacy: "Privacy",
    terms: "CG",
    imprint: "Impressum",
    rights: "© 2026 KSAG Insurance. Tutti i diritti riservati.",
  },
  privacy: {
    title: "Informativa sulla privacy",
    lead:
      "Proteggiamo i dati personali secondo la LPD svizzera e, se applicabile, il GDPR dell’UE.",
    updated: "Aggiornato: novembre 2026 (contenuto demo)",
    disclaimer:
      "Questo testo è un modello demo per KSAG Insurance e non sostituisce una consulenza legale. Fatelo verificare prima del go-live.",
    sections: [
      {
        title: "1. Titolare",
        body:
          "Il titolare del trattamento è KSAG Insurance (demo), Bahnhofstrasse 12, 8001 Zurigo, Svizzera. Contatto: hello@ksag-insurance.ch, tel. +41 44 123 45 67.",
      },
      {
        title: "2. Dati trattati",
        body: "A seconda dell’uso del sito possiamo trattare:",
        bullets: [
          "Dati di contatto dai moduli",
          "Dettagli delle richieste di consulenza",
          "Dati tecnici (IP, browser, dispositivo, orario)",
          "Preferenze cookie / consenso",
          "Via WhatsApp: contenuti inviati secondo i termini Meta/WhatsApp",
        ],
      },
      {
        title: "3. Finalità",
        bullets: [
          "Rispondere alle richieste e preparare consulenze",
          "Gestire e proteggere il sito",
          "Migliorare l’offerta (con consenso o base legale)",
          "Adempiere obblighi di legge",
        ],
      },
      {
        title: "4. Basi giuridiche",
        body:
          "Il trattamento può basarsi su contratto / misure precontrattuali, interesse legittimo, consenso o obblighi di legge. Vale la LPD; il GDPR può applicarsi per UE/SEE.",
      },
      {
        title: "5. Destinatari",
        body:
          "Comunicazione solo se necessaria, con consenso o obbligo di legge. Destinatari possibili (demo): hosting/IT, assicuratori in caso di intermediazione, WhatsApp/Meta.",
      },
      {
        title: "6. Conservazione",
        body:
          "Conserviamo i dati solo per il tempo necessario o richiesto dalla legge.",
      },
      {
        title: "7. Cookie",
        body:
          "Cookie necessari per il funzionamento. Cookie opzionali solo con il vostro consenso.",
      },
      {
        title: "8. I vostri diritti",
        body: "A seconda del diritto applicabile potete:",
        bullets: [
          "Accedere ai dati",
          "Rettificarli",
          "Chiederne la cancellazione",
          "Limitare il trattamento",
          "Opporvi a certi trattamenti",
          "Portabilità (se GDPR)",
          "Revocare il consenso per il futuro",
        ],
      },
      {
        title: "9. Reclamo",
        body:
          "Potete rivolgervi all’IFPDT in Svizzera e, se del caso, all’autorità UE/SEE.",
      },
      {
        title: "10. Sicurezza",
        body:
          "Adottiamo misure tecniche e organizzative adeguate. Nessuna sicurezza assoluta in Internet.",
      },
      {
        title: "11. Contatto privacy",
        body:
          "Scrivete a hello@ksag-insurance.ch o usate il modulo di contatto.",
      },
    ],
  },
  imprint: {
    title: "Impressum",
    lead: "Informazioni aziendali (demo).",
    sections: [
      {
        title: "Azienda",
        bullets: [
          "KSAG Insurance (demo)",
          "Bahnhofstrasse 12",
          "8001 Zurigo",
          "Svizzera",
        ],
      },
      {
        title: "Contatto",
        bullets: [
          "E-mail: hello@ksag-insurance.ch",
          "Telefono: +41 44 123 45 67",
        ],
      },
      {
        title: "Nota",
        body:
          "Impressum demo da sostituire con dati reali e IDE prima della produzione.",
      },
    ],
  },
  cookies: {
    title: "Cookie",
    body:
      "Usiamo cookie necessari per funzionamento e lingua. «Accetta» consente anche cookie demo opzionali. Dettagli nell’informativa privacy.",
    accept: "Accetta",
    essential: "Solo necessari",
    link: "Privacy",
  },
  whatsappLabel: "Chat su WhatsApp",
  trust: {
    label: "Partner e regioni",
    items: ["Zurigo", "Berna", "Ginevra", "Lugano", "Basilea", "Losanna"],
  },
};
