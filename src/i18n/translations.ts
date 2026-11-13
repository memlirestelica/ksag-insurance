export type Lang = "de" | "fr" | "it" | "en";

export const langs: { code: Lang; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "fr", label: "FR" },
  { code: "it", label: "IT" },
  { code: "en", label: "EN" },
];

export type Dictionary = {
  nav: {
    services: string;
    why: string;
    process: string;
    faq: string;
    contact: string;
    cta: string;
  };
  hero: {
    brand: string;
    headline: string;
    sub: string;
    primary: string;
    secondary: string;
  };
  services: {
    eyebrow: string;
    title: string;
    sub: string;
    items: { title: string; desc: string }[];
  };
  why: {
    eyebrow: string;
    title: string;
    sub: string;
    points: { title: string; desc: string }[];
  };
  process: {
    eyebrow: string;
    title: string;
    sub: string;
    steps: { title: string; desc: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: { quote: string; name: string; role: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    sub: string;
    name: string;
    email: string;
    phone: string;
    topic: string;
    message: string;
    topics: string[];
    submit: string;
    success: string;
    infoTitle: string;
    address: string;
    hours: string;
    whatsapp: string;
  };
  footer: {
    tagline: string;
    links: string;
    legal: string;
    privacy: string;
    terms: string;
    imprint: string;
    rights: string;
  };
  whatsappLabel: string;
};

const de: Dictionary = {
  nav: {
    services: "Leistungen",
    why: "Warum KSAG",
    process: "Ablauf",
    faq: "FAQ",
    contact: "Kontakt",
    cta: "Beratung anfragen",
  },
  hero: {
    brand: "KSAG Insurance",
    headline: "Schutz, der mit Ihrem Leben Schritt hält.",
    sub: "Persönliche Beratung und klare Policen für Menschen und Unternehmen in der ganzen Schweiz.",
    primary: "Gratis beraten lassen",
    secondary: "Leistungen entdecken",
  },
  services: {
    eyebrow: "Leistungen",
    title: "Deckung für das, was zählt.",
    sub: "Von der Wohnung bis zum Betrieb — modular, transparent, schweizweit.",
    items: [
      {
        title: "Privat & Wohnen",
        desc: "Hausrat, Haftpflicht und Gebäude — abgestimmt auf Ihr Zuhause und Ihren Alltag.",
      },
      {
        title: "Mobilität",
        desc: "Auto, Motorrad und Flotten mit klaren Leistungen und schnellem Schaden-Support.",
      },
      {
        title: "Gesundheit & Vorsorge",
        desc: "Zusatzversicherungen und Vorsorgelösungen, die langfristig tragfähig bleiben.",
      },
      {
        title: "KMU & Betrieb",
        desc: "Betriebshaftpflicht, Inventar und Cyber — Schutz für Teams und Prozesse.",
      },
    ],
  },
  why: {
    eyebrow: "Warum KSAG",
    title: "Schweizer Klarheit statt Kleingedrucktes.",
    sub: "Wir übersetzen Komplexität in Entscheidungen, die Sie verstehen — und die halten.",
    points: [
      {
        title: "Lokale Beratung",
        desc: "Partner vor Ort in Deutschschweiz, Romandie und Tessin.",
      },
      {
        title: "Digitale Übersicht",
        desc: "Policen, Dokumente und Schadenmeldungen an einem Ort.",
      },
      {
        title: "Schnelle Schadenhilfe",
        desc: "Dedizierte Ansprechpartner statt Warteschleifen.",
      },
    ],
  },
  process: {
    eyebrow: "Ablauf",
    title: "In drei Schritten abgesichert.",
    sub: "Unkompliziert von der ersten Frage bis zur Police.",
    steps: [
      {
        title: "Bedarf klären",
        desc: "Kurzes Gespräch oder Formular — wir hören zu, bevor wir vorschlagen.",
      },
      {
        title: "Angebot vergleichen",
        desc: "Transparente Optionen mit klaren Leistungen und Preisen.",
      },
      {
        title: "Abschluss & Betreuung",
        desc: "Digital unterschreiben und danach laufend begleitet werden.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Stimmen",
    title: "Was Kundinnen und Kunden sagen.",
    items: [
      {
        quote:
          "Endlich eine Beratung, die nicht überredet, sondern erklärt. Die Police passt genau zu unserem Haushalt.",
        name: "Lena M.",
        role: "Zürich",
      },
      {
        quote:
          "Für unser KMU war der Wechsel zu KSAG erstaunlich unkompliziert — und der Schadenfall wurde rasch gelöst.",
        name: "Marco R.",
        role: "Lugano",
      },
      {
        quote:
          "Mehrsprachig, erreichbar und ehrlich bei den Kosten. Genau so stelle ich mir Versicherung vor.",
        name: "Camille D.",
        role: "Lausanne",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Häufige Fragen.",
    items: [
      {
        q: "Ist KSAG schweizweit tätig?",
        a: "Ja. Wir betreuen Kundinnen und Kunden in der ganzen Schweiz — auf Deutsch, Französisch, Italienisch und Englisch.",
      },
      {
        q: "Kann ich bestehende Policen mitnehmen?",
        a: "In den meisten Fällen ja. Wir prüfen Kündigungsfristen und begleiten den Wechsel ohne Deckungslücke.",
      },
      {
        q: "Wie melde ich einen Schaden?",
        a: "Per Formular, Telefon oder WhatsApp. Sie erhalten innerhalb eines Werktags eine erste Rückmeldung.",
      },
      {
        q: "Kostet die Erstberatung etwas?",
        a: "Nein. Das Erstgespräch und die Bedarfsanalyse sind kostenlos und unverbindlich.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Lassen Sie uns sprechen.",
    sub: "Schreiben Sie uns — wir melden uns innerhalb eines Werktags.",
    name: "Name",
    email: "E-Mail",
    phone: "Telefon",
    topic: "Thema",
    message: "Nachricht",
    topics: ["Privatversicherung", "KMU", "Schaden", "Allgemein"],
    submit: "Nachricht senden",
    success: "Danke — Ihre Anfrage wurde übermittelt (Demo).",
    infoTitle: "Direkt erreichen",
    address: "Bahnhofstrasse 12\n8001 Zürich\nSchweiz",
    hours: "Mo–Fr 08:00–18:00",
    whatsapp: "WhatsApp öffnen",
  },
  footer: {
    tagline: "Schweizer Versicherung mit klarer Haltung.",
    links: "Navigation",
    legal: "Rechtliches",
    privacy: "Datenschutz",
    terms: "AGB",
    imprint: "Impressum",
    rights: "© 2026 KSAG Insurance. Alle Rechte vorbehalten.",
  },
  whatsappLabel: "Chat auf WhatsApp",
};

const fr: Dictionary = {
  nav: {
    services: "Prestations",
    why: "Pourquoi KSAG",
    process: "Démarche",
    faq: "FAQ",
    contact: "Contact",
    cta: "Demander conseil",
  },
  hero: {
    brand: "KSAG Insurance",
    headline: "Une protection qui suit votre rythme.",
    sub: "Conseil personnel et polices claires pour les particuliers et les entreprises dans toute la Suisse.",
    primary: "Conseil gratuit",
    secondary: "Voir les prestations",
  },
  services: {
    eyebrow: "Prestations",
    title: "Couverture pour l’essentiel.",
    sub: "Du logement à l’entreprise — modulaire, transparent, partout en Suisse.",
    items: [
      {
        title: "Privé & habitation",
        desc: "Ménage, responsabilité civile et bâtiment adaptés à votre quotidien.",
      },
      {
        title: "Mobilité",
        desc: "Auto, moto et flottes avec des garanties claires et un support sinistre rapide.",
      },
      {
        title: "Santé & prévoyance",
        desc: "Complémentaires et solutions de prévoyance pensées pour durer.",
      },
      {
        title: "PME & entreprise",
        desc: "RC professionnelle, inventaire et cyber — pour vos équipes et process.",
      },
    ],
  },
  why: {
    eyebrow: "Pourquoi KSAG",
    title: "La clarté suisse, pas les petits caractères.",
    sub: "Nous traduisons la complexité en choix que vous comprenez — et qui tiennent.",
    points: [
      {
        title: "Conseil local",
        desc: "Des partenaires en Suisse alémanique, romande et au Tessin.",
      },
      {
        title: "Vue digitale",
        desc: "Polices, documents et sinistres au même endroit.",
      },
      {
        title: "Aide rapide",
        desc: "Des interlocuteurs dédiés, pas de file d’attente.",
      },
    ],
  },
  process: {
    eyebrow: "Démarche",
    title: "Assuré en trois étapes.",
    sub: "Simple, de la première question à la police.",
    steps: [
      {
        title: "Clarifier le besoin",
        desc: "Court entretien ou formulaire — nous écoutons avant de proposer.",
      },
      {
        title: "Comparer l’offre",
        desc: "Options transparentes avec garanties et prix clairs.",
      },
      {
        title: "Conclure & suivre",
        desc: "Signature digitale, puis accompagnement continu.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Témoignages",
    title: "Ce que disent nos clients.",
    items: [
      {
        quote:
          "Enfin un conseil qui explique sans pousser. La police correspond exactement à notre foyer.",
        name: "Lena M.",
        role: "Zurich",
      },
      {
        quote:
          "Pour notre PME, le passage à KSAG a été simple — et le sinistre traité rapidement.",
        name: "Marco R.",
        role: "Lugano",
      },
      {
        quote:
          "Multilingue, joignable et honnête sur les coûts. Exactement ce que j’attends.",
        name: "Camille D.",
        role: "Lausanne",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions fréquentes.",
    items: [
      {
        q: "KSAG est-elle active dans toute la Suisse ?",
        a: "Oui. Nous accompagnons nos clients partout en Suisse — en allemand, français, italien et anglais.",
      },
      {
        q: "Puis-je conserver mes polices actuelles ?",
        a: "Dans la plupart des cas, oui. Nous vérifions les délais et assurons la continuité de couverture.",
      },
      {
        q: "Comment déclarer un sinistre ?",
        a: "Via formulaire, téléphone ou WhatsApp. Première réponse sous un jour ouvrable.",
      },
      {
        q: "Le premier conseil est-il payant ?",
        a: "Non. L’entretien initial et l’analyse des besoins sont gratuits et sans engagement.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Parlons-en.",
    sub: "Écrivez-nous — réponse sous un jour ouvrable.",
    name: "Nom",
    email: "E-mail",
    phone: "Téléphone",
    topic: "Sujet",
    message: "Message",
    topics: ["Assurance privée", "PME", "Sinistre", "Général"],
    submit: "Envoyer",
    success: "Merci — votre demande a été envoyée (démo).",
    infoTitle: "Nous joindre",
    address: "Bahnhofstrasse 12\n8001 Zurich\nSuisse",
    hours: "Lun–Ven 08:00–18:00",
    whatsapp: "Ouvrir WhatsApp",
  },
  footer: {
    tagline: "Assurance suisse, attitude claire.",
    links: "Navigation",
    legal: "Mentions",
    privacy: "Confidentialité",
    terms: "CG",
    imprint: "Impressum",
    rights: "© 2026 KSAG Insurance. Tous droits réservés.",
  },
  whatsappLabel: "Discuter sur WhatsApp",
};

const it: Dictionary = {
  nav: {
    services: "Prestazioni",
    why: "Perché KSAG",
    process: "Percorso",
    faq: "FAQ",
    contact: "Contatto",
    cta: "Richiedi consulenza",
  },
  hero: {
    brand: "KSAG Insurance",
    headline: "Protezione che segue il vostro ritmo.",
    sub: "Consulenza personale e polizze chiare per privati e imprese in tutta la Svizzera.",
    primary: "Consulenza gratuita",
    secondary: "Scopri le prestazioni",
  },
  services: {
    eyebrow: "Prestazioni",
    title: "Copertura per ciò che conta.",
    sub: "Dalla casa all’azienda — modulare, trasparente, in tutta la Svizzera.",
    items: [
      {
        title: "Privati & abitazione",
        desc: "Economia domestica, RC e edificio su misura per la vostra quotidianità.",
      },
      {
        title: "Mobilità",
        desc: "Auto, moto e flotte con prestazioni chiare e supporto sinistri rapido.",
      },
      {
        title: "Salute & previdenza",
        desc: "Complementari e soluzioni previdenziali pensate per durare.",
      },
      {
        title: "PMI & azienda",
        desc: "RC aziendale, inventario e cyber — per team e processi.",
      },
    ],
  },
  why: {
    eyebrow: "Perché KSAG",
    title: "Chiarezza svizzera, non carattere piccolo.",
    sub: "Traduciamo la complessità in scelte comprensibili — e solide.",
    points: [
      {
        title: "Consulenza locale",
        desc: "Partner in Svizzera tedesca, romanda e in Ticino.",
      },
      {
        title: "Panoramica digitale",
        desc: "Polizze, documenti e sinistri in un unico posto.",
      },
      {
        title: "Aiuto rapido",
        desc: "Referenti dedicati, non code infinite.",
      },
    ],
  },
  process: {
    eyebrow: "Percorso",
    title: "Assicurati in tre passi.",
    sub: "Semplice, dalla prima domanda alla polizza.",
    steps: [
      {
        title: "Capire il bisogno",
        desc: "Breve colloquio o modulo — ascoltiamo prima di proporre.",
      },
      {
        title: "Confrontare l’offerta",
        desc: "Opzioni trasparenti con prestazioni e prezzi chiari.",
      },
      {
        title: "Concludere & accompagnare",
        desc: "Firma digitale e assistenza continua.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Voci",
    title: "Cosa dicono i clienti.",
    items: [
      {
        quote:
          "Finalmente una consulenza che spiega senza convincere a forza. La polizza è perfetta per la nostra famiglia.",
        name: "Lena M.",
        role: "Zurigo",
      },
      {
        quote:
          "Per la nostra PMI il passaggio a KSAG è stato semplice — e il sinistro risolto in fretta.",
        name: "Marco R.",
        role: "Lugano",
      },
      {
        quote:
          "Multilingue, raggiungibile e onesta sui costi. Esattamente ciò che cerco.",
        name: "Camille D.",
        role: "Losanna",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Domande frequenti.",
    items: [
      {
        q: "KSAG opera in tutta la Svizzera?",
        a: "Sì. Assistiamo clienti in tutta la Svizzera — in tedesco, francese, italiano e inglese.",
      },
      {
        q: "Posso portare le polizze esistenti?",
        a: "Nella maggior parte dei casi sì. Verifichiamo i termini e garantiamo continuità di copertura.",
      },
      {
        q: "Come segnalo un sinistro?",
        a: "Via modulo, telefono o WhatsApp. Prima risposta entro un giorno lavorativo.",
      },
      {
        q: "La prima consulenza è a pagamento?",
        a: "No. Il colloquio iniziale e l’analisi dei bisogni sono gratuiti e senza impegno.",
      },
    ],
  },
  contact: {
    eyebrow: "Contatto",
    title: "Parliamone.",
    sub: "Scriveteci — rispondiamo entro un giorno lavorativo.",
    name: "Nome",
    email: "E-mail",
    phone: "Telefono",
    topic: "Tema",
    message: "Messaggio",
    topics: ["Assicurazione privata", "PMI", "Sinistro", "Generale"],
    submit: "Invia messaggio",
    success: "Grazie — richiesta inviata (demo).",
    infoTitle: "Contatti diretti",
    address: "Bahnhofstrasse 12\n8001 Zurigo\nSvizzera",
    hours: "Lun–Ven 08:00–18:00",
    whatsapp: "Apri WhatsApp",
  },
  footer: {
    tagline: "Assicurazione svizzera con chiarezza.",
    links: "Navigazione",
    legal: "Legale",
    privacy: "Privacy",
    terms: "CG",
    imprint: "Impressum",
    rights: "© 2026 KSAG Insurance. Tutti i diritti riservati.",
  },
  whatsappLabel: "Chat su WhatsApp",
};

const en: Dictionary = {
  nav: {
    services: "Coverage",
    why: "Why KSAG",
    process: "Process",
    faq: "FAQ",
    contact: "Contact",
    cta: "Book a consult",
  },
  hero: {
    brand: "KSAG Insurance",
    headline: "Protection that keeps pace with your life.",
    sub: "Personal advice and clear policies for people and businesses across Switzerland.",
    primary: "Get free advice",
    secondary: "Explore coverage",
  },
  services: {
    eyebrow: "Coverage",
    title: "Protection for what matters.",
    sub: "From home to business — modular, transparent, nationwide.",
    items: [
      {
        title: "Home & personal",
        desc: "Contents, liability, and buildings tailored to how you actually live.",
      },
      {
        title: "Mobility",
        desc: "Cars, bikes, and fleets with clear benefits and fast claims support.",
      },
      {
        title: "Health & provision",
        desc: "Supplementary cover and long-term solutions built to last.",
      },
      {
        title: "SME & business",
        desc: "Liability, inventory, and cyber — for teams and operations.",
      },
    ],
  },
  why: {
    eyebrow: "Why KSAG",
    title: "Swiss clarity, not fine print.",
    sub: "We turn complexity into decisions you understand — and that hold up.",
    points: [
      {
        title: "Local advice",
        desc: "Partners across German-, French-, and Italian-speaking Switzerland.",
      },
      {
        title: "Digital overview",
        desc: "Policies, documents, and claims in one place.",
      },
      {
        title: "Fast claims help",
        desc: "Dedicated contacts instead of hold music.",
      },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "Covered in three steps.",
    sub: "Straightforward from first question to signed policy.",
    steps: [
      {
        title: "Clarify needs",
        desc: "A short call or form — we listen before we propose.",
      },
      {
        title: "Compare options",
        desc: "Transparent choices with clear benefits and pricing.",
      },
      {
        title: "Close & support",
        desc: "Sign digitally, then stay supported over time.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Voices",
    title: "What clients say.",
    items: [
      {
        quote:
          "Finally advice that explains instead of pushing. The policy fits our household perfectly.",
        name: "Lena M.",
        role: "Zurich",
      },
      {
        quote:
          "For our SME, switching to KSAG was surprisingly smooth — and the claim was handled fast.",
        name: "Marco R.",
        role: "Lugano",
      },
      {
        quote:
          "Multilingual, reachable, and honest about cost. Exactly how insurance should feel.",
        name: "Camille D.",
        role: "Lausanne",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions.",
    items: [
      {
        q: "Does KSAG cover all of Switzerland?",
        a: "Yes. We support clients nationwide — in German, French, Italian, and English.",
      },
      {
        q: "Can I bring existing policies?",
        a: "In most cases yes. We check notice periods and keep coverage continuous.",
      },
      {
        q: "How do I file a claim?",
        a: "By form, phone, or WhatsApp. You’ll hear back within one business day.",
      },
      {
        q: "Is the first consultation free?",
        a: "Yes. The first conversation and needs analysis are free and non-binding.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s talk.",
    sub: "Write to us — we reply within one business day.",
    name: "Name",
    email: "Email",
    phone: "Phone",
    topic: "Topic",
    message: "Message",
    topics: ["Personal insurance", "SME", "Claim", "General"],
    submit: "Send message",
    success: "Thanks — your request was sent (demo).",
    infoTitle: "Reach us directly",
    address: "Bahnhofstrasse 12\n8001 Zurich\nSwitzerland",
    hours: "Mon–Fri 08:00–18:00",
    whatsapp: "Open WhatsApp",
  },
  footer: {
    tagline: "Swiss insurance with a clear stance.",
    links: "Navigate",
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms",
    imprint: "Imprint",
    rights: "© 2026 KSAG Insurance. All rights reserved.",
  },
  whatsappLabel: "Chat on WhatsApp",
};

export const dictionaries: Record<Lang, Dictionary> = { de, fr, it, en };
