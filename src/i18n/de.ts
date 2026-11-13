import type { Dictionary } from "./types";

export const de: Dictionary = {
  brand: "KSAG Insurance",
  nav: {
    home: "Home",
    about: "Über uns",
    healthCompare: "Krankenkassenvergleich",
    private: "Privatkunden",
    business: "Firmenkunden",
    tax: "Steuerberatung",
    recommend: "Empfehlen",
    contact: "Kontakt",
    cta: "Beratung anfragen",
    more: "Mehr",
  },
  common: {
    more: "Mehr",
    contactUs: "Kontakt aufnehmen",
    hoursLabel: "Öffnungszeiten",
    hours: "Montag – Freitag: 08:00 – 17:00\nOder nach Vereinbarung.",
    address: "Bahnhofstrasse 12\n8001 Zürich\nSchweiz",
    phone: "+41 44 123 45 67",
    email: "hello@ksag-insurance.ch",
    send: "Absenden",
    success: "Danke — Ihre Anfrage wurde übermittelt (Demo).",
    required: "Pflichtfeld",
    back: "Zurück",
    mockNote: "Demo-Inhalt zu Illustrationszwecken.",
  },
  home: {
    heroBrand: "KSAG Insurance",
    heroTitle: "Unabhängige Beratung für klaren Versicherungsschutz.",
    heroSub:
      "Als unabhängiger Makler vergleichen wir führende Schweizer Gesellschaften und finden die Lösung, die zu Ihrem Leben oder Unternehmen passt.",
    heroPrimary: "Krankenkasse vergleichen",
    heroSecondary: "Privatkunden entdecken",
    welcomeEyebrow: "Willkommen",
    welcomeTitle: "Willkommen bei KSAG",
    welcomeBody: [
      "KSAG ist ein unabhängiger Versicherungsmakler und arbeitet mit führenden Versicherungsgesellschaften zusammen.",
      "Als geprüfter und lizenzierter Anbieter unterstützen wir Sie bei der Suche nach der bedarfsgerechten Versicherungslösung.",
      "Wir vergleichen Produkte, erklären Vor- und Nachteile und bleiben Ihr einziger kompetenter Ansprechpartner.",
    ],
    servicesTitle: "Dienstleistungen, die für Ruhe in Ihrem Leben sorgen",
    privateCardTitle: "Privatkunden?",
    privateCardBody: "Gemeinsam meistern wir den Weg durch den Versicherungsdschungel.",
    businessCardTitle: "Firmenkunden?",
    businessCardBody:
      "Massgeschneiderte Lösungen für Ihr Unternehmen zu attraktiven Prämien.",
    contactCardTitle: "Kontakt",
    contactCardBody:
      "Fragen oder persönliche Beratung? Wir helfen Ihnen gerne weiter.",
    staffTitle: "Nur das Beste für Ihr Personal",
    staffBody:
      "Zufriedene Mitarbeitende sind zentral für den Unternehmenserfolg. Gemeinsam schaffen wir eine sichere Zukunft für Ihr Personal.",
    staffItems: [
      "Berufliche Vorsorge (BVG)",
      "Unfallversicherung",
      "Kollektive Krankentaggeldversicherung",
    ],
  },
  about: {
    title: "Über uns",
    lead:
      "Unabhängiger Versicherungsmakler mit Fokus auf klare Beratung und langfristige Betreuung.",
    body: [
      "KSAG Insurance ist ein unabhängiger Versicherungsmakler. Führende Schweizer Gesellschaften zählen zu unseren Partnern. Als geprüfter und lizenzierter Anbieter unterstützen wir Privat- und Firmenkunden bei der Suche nach der passenden Lösung.",
      "Wir vergleichen Versicherungsprodukte und beraten transparent zu Vor- und Nachteilen. So haben Sie einen Ansprechpartner für alle Verträge und behalten den Überblick.",
      "Unsere Mitarbeitenden sind professionell ausgebildet, lizenziert und registriert gemäss den geltenden Versicherungsvorschriften — damit Qualität für Sie spürbar bleibt.",
    ],
    partnersTitle: "Was Partner über uns sagen",
    quotes: [
      {
        quote:
          "Sehr gute Zusammenarbeit. KSAG arbeitet unabhängig und mit unterschiedlichen Gesellschaften zusammen.",
        name: "Partnerstimme",
        role: "Versicherungsgesellschaft",
      },
      {
        quote:
          "Seriös, erreichbar und lösungsorientiert — auch wenn Kunden ein Problem haben.",
        name: "Partnerstimme",
        role: "Versicherungsgesellschaft",
      },
      {
        quote:
          "Hohes Niveau in Beratung und Betreuung. Die Zusammenarbeit funktioniert zuverlässig.",
        name: "Partnerstimme",
        role: "Versicherungsgesellschaft",
      },
    ],
  },
  healthCompare: {
    title: "Krankenkassenvergleich",
    lead:
      "In wenigen Schritten zur günstigen Grundversicherung — wir zeigen Ihnen passende Optionen und beraten Sie persönlich.",
    stepsTitle: "So funktioniert’s",
    steps: [
      "Angaben zu Wohnort, Alter und Franchise erfassen",
      "Modell und aktuelle Kasse wählen",
      "Vergleich ansehen und Beratung anfragen",
    ],
    formTitle: "Prämie berechnen (Demo)",
    zip: "PLZ oder Wohnort",
    year: "Jahrgang",
    franchise: "Franchise",
    accident: "Unfalldeckung",
    accidentYes: "Mit Unfall",
    accidentNo: "Ohne Unfall",
    currentInsurer: "Aktuelle Krankenkasse",
    model: "Gewünschtes Modell",
    models: ["Standard", "Hausarzt", "HMO", "Andere"],
    submit: "Prämie berechnen",
    resultTitle: "Ihr Demo-Vergleich ist bereit",
    resultBody:
      "In der Live-Version würden hier genehmigte Prämien erscheinen. Für KSAG ist dies eine Demo — wir melden uns gerne persönlich mit einem echten Vergleich.",
  },
  private: {
    title: "Privatkunden",
    lead:
      "Von Krankenversicherung bis Vorsorge: Wir vergleichen, erklären und betreuen — mit einem Ansprechpartner für alles.",
    products: [
      {
        slug: "krankenversicherung",
        title: "Krankenversicherung",
        short: "Grund- und Zusatzversicherung passend zu Ihren Bedürfnissen.",
        lead:
          "Dank der Zusammenarbeit mit zahlreichen Krankenversicherern gehen wir individuell auf Ihre Wünsche ein.",
        sections: [
          {
            title: "Grundversicherung (KVG)",
            body:
              "Die obligatorische Grundversicherung gewährt eine umfassende medizinische Grundversorgung für Krankheit, Mutterschaft und Unfall. Leistungen sind landesweit identisch; es besteht Aufnahmepflicht unabhängig von Alter und Gesundheit.",
            bullets: [
              "Alternative Modelle (Hausarzt, HMO u. a.) mit möglicher Prämienreduktion",
              "Unfallrisiko kann je nach Anstellung ausgeschlossen werden",
            ],
          },
          {
            title: "Zusatzversicherungen",
            body:
              "Freiwillige Zusatzversicherungen ergänzen Leistungen, die die Grundversicherung nicht oder nur ungenügend deckt. Der Bedarf hängt von Lebenssituation, Gesundheit und persönlichen Wünschen ab.",
            note:
              "Ein früher Abschluss ist oft sinnvoll — mit zunehmendem Alter oder schlechterem Gesundheitszustand kann die Aufnahme erschwert sein.",
          },
        ],
      },
      {
        slug: "fahrzeugversicherung",
        title: "Fahrzeugversicherung",
        short: "Haftpflicht, Teil- und Vollkasko — klar verglichen.",
        lead:
          "Zwischen Gesellschaften bestehen oft grosse Prämienunterschiede. Ein Vergleich lohnt sich.",
        sections: [
          {
            title: "Grunddeckungen",
            bullets: [
              "Haftpflichtversicherung (obligatorisch)",
              "Teilkaskoversicherung",
              "Vollkaskoversicherung",
            ],
          },
          {
            title: "Zusatzdeckungen",
            bullets: [
              "Bonusschutz",
              "Parkschaden",
              "Mitgeführte persönliche Sachen",
              "Scheinwerfer",
              "Insassenschutz",
            ],
          },
        ],
      },
      {
        slug: "hausratversicherung",
        title: "Hausratversicherung",
        short: "Schutz für Hab und Gut zu Hause.",
        lead:
          "Die Hausratversicherung schützt bewegliche Sachen für den Privatgebrauch. Die Summe sollte dem Wiederbeschaffungswert entsprechen.",
        sections: [
          {
            title: "Grunddeckungen",
            bullets: ["Feuer", "Wasser", "Diebstahl", "Glasbruch"],
          },
          {
            title: "Zusatzdeckungen (optional)",
            bullets: [
              "Hausratkasko",
              "Card Protection",
              "Reisegepäck",
              "Veloversicherung",
            ],
            note:
              "Neuanschaffungen melden — so vermeiden Sie Unterversicherung und Leistungskürzungen.",
          },
        ],
      },
      {
        slug: "privathaftpflichtversicherung",
        title: "Privathaftpflichtversicherung",
        short: "Unverzichtbarer Schutz bei Schäden gegenüber Dritten.",
        lead:
          "Als Einzel- oder Familienversicherung: Deckung berechtigter Forderungen und Abwehr ungerechtfertigter Ansprüche.",
        sections: [
          {
            title: "Grunddeckung",
            bullets: [
              "Personenschäden",
              "Sachschäden",
              "Garantiesummen oft bis CHF 10 Mio.",
            ],
          },
          {
            title: "Mögliche Zusatzdeckungen",
            bullets: [
              "Gelegentliche Benützung fremder Fahrzeuge",
              "Jägerhaftpflicht",
              "Modellflugzeuge",
              "Schäden an gemieteten oder geliehenen Sachen",
            ],
            note:
              "Tipp: Kombinationsrabatte z. B. mit Hausratversicherung sind häufig möglich.",
          },
        ],
      },
      {
        slug: "rechtsschutzversicherung",
        title: "Rechtsschutzversicherung",
        short: "Unterstützung bei Rechtsstreitigkeiten — privat und Verkehr.",
        lead:
          "Übernahme von Prozess-, Gerichts- und Anwaltskosten sowie juristischer Beistand. Als Einzel- oder Familienversicherung möglich.",
        sections: [
          {
            title: "Privat-Rechtsschutz (Beispiele)",
            bullets: [
              "Arbeitsrecht",
              "Nachbar- und Mietrecht",
              "Patientenrecht",
              "Vertrags- und Versicherungsrecht",
              "Schadenersatzrecht",
            ],
          },
          {
            title: "Verkehrs-Rechtsschutz",
            body:
              "Schutz als Halter, Lenker oder Mitfahrer, als Fussgänger und als Passagier — je nach Police.",
          },
        ],
      },
      {
        slug: "vorsorge",
        title: "Vorsorge",
        short: "Individuelle Altersvorsorge für Ihren Lebensstandard.",
        lead:
          "Langlebigkeit und Demografie fordern die Rentensysteme. Wir helfen Ihnen, die individuelle Vorsorge zu optimieren.",
        sections: [
          {
            title: "Unsere Begleitung",
            body:
              "Gemeinsam erarbeiten wir eine Lösung nach Ihren Bedürfnissen — klar verglichen und verständlich erklärt.",
          },
        ],
      },
    ],
  },
  business: {
    title: "Firmenkunden",
    lead:
      "Massgeschneiderte Absicherung für Unternehmen — von Personal bis Sach und Haftpflicht.",
    products: [
      {
        slug: "berufliche-vorsorge-bvg",
        title: "Berufliche Vorsorge (BVG)",
        short: "2. Säule für Ihre Mitarbeitenden.",
        lead:
          "Die berufliche Vorsorge ergänzt die 1. Säule und soll die gewohnte Lebenshaltung ermöglichen.",
        sections: [
          {
            title: "Gesetzliches Minimum & mehr",
            body:
              "Mitarbeitende über der BVG-Eintrittsschwelle sind obligatorisch zu versichern. Als Arbeitgeber können Sie Leistungen über dem Minimum gestalten.",
          },
          {
            title: "Versicherte Risiken",
            bullets: [
              "18–24: Invalidität",
              "25–Pensionierung: Invalidität, Alter, Tod",
            ],
          },
        ],
      },
      {
        slug: "unfallversicherung",
        title: "Unfallversicherung",
        short: "Obligatorischer Schutz nach UVG.",
        lead:
          "Alle Arbeitnehmer in der Schweiz sind gesetzlich zu versichern — inkl. Praktika und Lehrlinge.",
        sections: [
          {
            title: "Ab 8 Stunden/Woche",
            bullets: ["Berufsunfälle", "Berufskrankheiten", "Nichtberufsunfälle"],
          },
          {
            title: "Unter 8 Stunden/Woche",
            bullets: ["Berufsunfälle", "Berufskrankheiten"],
          },
          {
            title: "Leistungen (Überblick)",
            bullets: [
              "Taggeld",
              "Heilungskosten",
              "Spitalaufenthalt",
              "Invaliden- und Hinterlassenenrenten",
            ],
          },
        ],
      },
      {
        slug: "kollektive-krankentaggeldversicherung",
        title: "Kollektive Krankentaggeldversicherung",
        short: "Einkommensschutz bei Krankheit für Ihr Team.",
        lead:
          "Ergänzt den Personalschutz und sichert Lohnfortzahlung bei Krankheit — angepasst an Ihr Unternehmen.",
        sections: [
          {
            title: "Nutzen",
            body:
              "Wir vergleichen Kollektivlösungen und finden eine Deckung, die zu Betriebsgrösse und Risiko passt.",
          },
        ],
      },
      {
        slug: "sach-und-haftpflichtversicherungen",
        title: "Sach- und Haftpflichtversicherungen",
        short: "Schutz für Betrieb, Inventar und Haftung.",
        lead:
          "Ob Betriebshaftpflicht, Inventar oder weitere Sachrisiken — wir strukturieren den Schutz klar und vergleichen Optionen.",
        sections: [
          {
            title: "Typische Themen",
            bullets: [
              "Betriebshaftpflicht",
              "Sach- und Inventarversicherung",
              "Weitere betriebsrelevante Deckungen",
            ],
          },
        ],
      },
    ],
  },
  tax: {
    title: "Steuerberatung",
    lead:
      "Steuererklärung optimieren — zulässige Abzüge ausschöpfen und Einsprache bei Bedarf begleiten.",
    body: [
      "Kaum beginnt das Jahr, steht die Steuererklärung vor der Tür. Viele Steuerpflichtige sind unsicher, ob alle Abzüge korrekt vorgenommen wurden.",
      "Wir ergänzen und optimieren die Steuererklärung, prüfen den Einschätzungsentscheid und verfassen bei Bedarf eine Einsprache.",
    ],
    pricingTitle: "Kosten (Demo-Preise)",
    pricing: [
      { label: "Lernende, Studenten und Rentner", price: "CHF 35.00" },
      { label: "Einzelpersonen", price: "CHF 70.00" },
      { label: "Ehepaare", price: "CHF 95.00" },
      { label: "Eigenheimbesitzer*", price: "CHF 160.00" },
    ],
    pricingNote:
      "* inkl. 15 Beilagen. Zusätzliche Beilagen: CHF 5.– pro Beilage.",
    exclusion: "Selbständig Erwerbende sind von diesem Angebot ausgeschlossen.",
    stepsTitle: "Nur noch wenige Schritte",
    steps: [
      "Persönlichen Termin wünschen oder Rückruf wählen",
      "Kontaktformular vollständig ausfüllen",
      "Wir melden uns zur Besprechung des weiteren Vorgehens",
    ],
  },
  recommend: {
    title: "Empfehlen",
    lead:
      "Teilen Sie Ihr Vertrauen in KSAG mit Familie und Freunden — und profitieren Sie von einer Vermittlungsprämie.",
    reward:
      "Nach erfolgreichem Abschluss einer Kranken- oder Lebensversicherung erhalten Sie CHF 50.00 pro vermittelte Person (Demo-Aktion).",
    stepsTitle: "So einfach geht’s",
    steps: [
      "Online-Formular für die Weiterempfehlung ausfüllen",
      "Ihre Angaben und die der empfohlenen Person senden",
      "Wir kontaktieren die empfohlene Person für eine Beratung",
      "Bei erfolgreichem Abschluss erhalten Sie die Prämie",
      "Auszahlung auf Ihr angegebenes Bankkonto",
    ],
    important:
      "Wichtig: Es gelten Teilnahmebedingungen (Neukunde, Mindestalter 18, u. a.). Demo-Aktion zu Illustrationszwecken.",
    formTitle: "Weiterempfehlung senden",
    yourName: "Ihr Name",
    yourEmail: "Ihre E-Mail",
    yourPhone: "Ihr Telefon",
    friendName: "Name der empfohlenen Person",
    friendPhone: "Telefon der empfohlenen Person",
    friendEmail: "E-Mail der empfohlenen Person",
    submit: "Empfehlung senden",
  },
  contact: {
    title: "Kontakt",
    lead:
      "Haben Sie Fragen oder wünschen Sie eine persönliche Beratung? Schreiben Sie uns — wir helfen gerne.",
    formTitle: "Kontaktformular",
    name: "Name",
    email: "E-Mail",
    phone: "Telefon",
    topic: "Thema",
    topics: [
      "Krankenkasse",
      "Privatversicherung",
      "Firmenversicherung",
      "Steuerberatung",
      "Schaden",
      "Allgemein",
    ],
    message: "Nachricht",
    infoTitle: "Kontaktdaten",
  },
  footer: {
    tagline: "Unabhängiger Schweizer Versicherungsmakler.",
    privateTitle: "Privatkunden",
    legal: "Rechtliches",
    privacy: "Datenschutz",
    terms: "AGB",
    imprint: "Impressum",
    rights: "© 2026 KSAG Insurance. Alle Rechte vorbehalten.",
  },
  privacy: {
    title: "Datenschutzerklärung",
    lead:
      "Wir nehmen den Schutz Ihrer Personendaten ernst — gestützt auf das Schweizer Datenschutzgesetz (DSG/nDSG) und, soweit anwendbar, die EU-DSGVO.",
    updated: "Stand: November 2026 (Demo-Inhalt)",
    disclaimer:
      "Dieser Text ist eine Demo-Vorlage für KSAG Insurance und ersetzt keine anwaltliche Prüfung. Vor dem Live-Betrieb bitte rechtlich freigeben lassen.",
    sections: [
      {
        title: "1. Verantwortliche Stelle",
        body:
          "Verantwortlich für die Bearbeitung von Personendaten auf dieser Website ist KSAG Insurance (Demo), Bahnhofstrasse 12, 8001 Zürich, Schweiz. Kontakt: hello@ksag-insurance.ch, Tel. +41 44 123 45 67.",
      },
      {
        title: "2. Welche Daten wir bearbeiten",
        body: "Je nach Nutzung der Website können wir folgende Daten bearbeiten:",
        bullets: [
          "Kontaktdaten (Name, E-Mail, Telefon) aus Formularen",
          "Angaben zu Beratungsanfragen (z. B. Thema, Nachricht, Versicherungsinteresse)",
          "Technische Daten (IP-Adresse, Browser, Gerät, Zeitpunkt des Zugriffs)",
          "Cookie- und Einwilligungspräferenzen",
          "Bei WhatsApp-Kontakt: die von Ihnen übermittelten Chat-Inhalte gemäss WhatsApp-/Meta-Bedingungen",
        ],
      },
      {
        title: "3. Zwecke der Bearbeitung",
        bullets: [
          "Beantwortung von Anfragen und Vorbereitung von Beratungen",
          "Bereitstellung und Sicherheit der Website",
          "Verbesserung unseres Angebots (nur mit Einwilligung bzw. soweit gesetzlich zulässig)",
          "Erfüllung gesetzlicher Pflichten (z. B. Aufbewahrung, Aufsicht)",
        ],
      },
      {
        title: "4. Rechtsgrundlagen",
        body:
          "Die Bearbeitung erfolgt je nach Fall gestützt auf Vertragserfüllung bzw. vorvertragliche Massnahmen, berechtigte Interessen (z. B. Betrieb und Sicherheit der Website), Einwilligung (z. B. optionale Cookies/Marketing) oder gesetzliche Pflichten. Für die Schweiz massgeblich ist das DSG; bei Bezug zu Personen in der EU/EWR zusätzlich die DSGVO.",
      },
      {
        title: "5. Weitergabe an Dritte",
        body:
          "Eine Weitergabe erfolgt nur, wenn dies für die genannten Zwecke erforderlich ist, Sie eingewilligt haben oder eine gesetzliche Pflicht besteht. Mögliche Empfänger (Demo): Hosting-Anbieter, IT-Dienstleister, Versicherer im Rahmen einer konkreten Vermittlung, sowie WhatsApp/Meta bei Nutzung des WhatsApp-Kanals.",
      },
      {
        title: "6. Speicherdauer",
        body:
          "Wir speichern Personendaten nur so lange, wie es für die Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen gelten. Anfragen ohne Vertragsabschluss werden in der Regel nach Abschluss der Korrespondenz bzw. nach angemessener Frist gelöscht oder anonymisiert, sofern keine längere Aufbewahrung nötig ist.",
      },
      {
        title: "7. Cookies und ähnliche Technologien",
        body:
          "Wir verwenden technisch notwendige Cookies für den Betrieb der Website (z. B. Spracheinstellung, Cookie-Einwilligung). Optionale Analyse-/Marketing-Cookies setzen wir nur mit Ihrer Einwilligung. Sie können Ihre Wahl jederzeit über die Cookie-Einstellungen bzw. den Browser anpassen.",
      },
      {
        title: "8. Ihre Rechte",
        body: "Sie haben — je nach anwendbarem Recht — insbesondere folgende Rechte:",
        bullets: [
          "Auskunft über Ihre Personendaten",
          "Berichtigung unrichtiger Daten",
          "Löschung (sofern keine Aufbewahrungspflicht entgegensteht)",
          "Einschränkung der Bearbeitung",
          "Widerspruch gegen bestimmte Bearbeitungen",
          "Datenübertragbarkeit (soweit DSGVO anwendbar)",
          "Widerruf einer Einwilligung mit Wirkung für die Zukunft",
        ],
      },
      {
        title: "9. Beschwerderecht",
        body:
          "Sie können sich bei der zuständigen Aufsichtsbehörde beschweren. In der Schweiz ist dies der Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte (EDÖB). Bei EU/EWR-Bezug zusätzlich die lokale Datenschutzbehörde.",
      },
      {
        title: "10. Datensicherheit",
        body:
          "Wir treffen angemessene technische und organisatorische Massnahmen, um Personendaten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen. Eine absolute Sicherheit im Internet kann nicht garantiert werden.",
      },
      {
        title: "11. Kontakt zum Datenschutz",
        body:
          "Für Fragen zum Datenschutz schreiben Sie an hello@ksag-insurance.ch oder nutzen Sie das Kontaktformular. Wir antworten in der Regel innerhalb weniger Werktage.",
      },
    ],
  },
  imprint: {
    title: "Impressum",
    lead: "Angaben gemäss schweizerischen Informationspflichten (Demo).",
    sections: [
      {
        title: "Unternehmen",
        bullets: [
          "KSAG Insurance (Demo)",
          "Bahnhofstrasse 12",
          "8001 Zürich",
          "Schweiz",
        ],
      },
      {
        title: "Kontakt",
        bullets: [
          "E-Mail: hello@ksag-insurance.ch",
          "Telefon: +41 44 123 45 67",
        ],
      },
      {
        title: "Hinweis",
        body:
          "Dies ist ein Demo-Impressum für Entwicklungszwecke. Vor dem Go-live bitte mit realen Firmendaten, UID und rechtlichen Angaben ersetzen.",
      },
    ],
  },
  cookies: {
    title: "Cookie-Einstellungen",
    body:
      "Wir verwenden notwendige Cookies für Betrieb und Sprache. Mit «Akzeptieren» stimmen Sie auch optionalen Demo-Cookies zu. Details in der Datenschutzerklärung.",
    accept: "Akzeptieren",
    essential: "Nur notwendige",
    link: "Datenschutz",
  },
  whatsappLabel: "Chat auf WhatsApp",
  trust: {
    label: "Partnergesellschaften & Regionen",
    items: ["Zürich", "Bern", "Genève", "Lugano", "Basel", "Lausanne"],
  },
};
