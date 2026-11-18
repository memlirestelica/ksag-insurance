import type { Dictionary } from "./types";

export const fr: Dictionary = {
  brand: "KSAG Insurance",
  nav: {
    home: "Accueil",
    about: "À propos",
    healthCompare: "Comparaison maladie",
    private: "Particuliers",
    business: "Entreprises",
    tax: "Conseil fiscal",
    recommend: "Recommander",
    contact: "Contact",
    cta: "Demander conseil",
    more: "Plus",
  },
  common: {
    more: "Plus",
    contactUs: "Nous contacter",
    hoursLabel: "Horaires",
    hours: "Lundi – vendredi : 08:00 – 18:00\nSamedi : 10:00 – 14:00",
    address: "KSAG Insurance GmbH\nIndustriestrasse 14\n8305 Dietlikon\nSuisse",
    phone: "+41 79 138 53 36",
    phones: [
      { label: "Mobile", number: "+41 79 138 53 36" },
      { label: "Fixe", number: "+41 43 819 19 91" },
      { label: "Mobile", number: "+41 79 759 73 14" },
    ],
    email: "info@ksaggmbh.ch",
    send: "Envoyer",
    success: "Merci — demande envoyée (démo).",
    required: "Obligatoire",
    back: "Retour",
    mockNote: "Contenu démo à titre d’illustration.",
  },
  home: {
    heroBrand: "KSAG Insurance",
    heroTitle: "Conseil indépendant pour une couverture claire.",
    heroSub:
      "Courtier indépendant, nous comparons les assureurs suisses leaders et trouvons la solution adaptée à votre vie ou à votre entreprise.",
    heroPrimary: "Comparer l’assurance maladie",
    heroSecondary: "Découvrir les particuliers",
    welcomeEyebrow: "Bienvenue",
    welcomeTitle: "Bienvenue chez KSAG",
    portraitName: "Adem Delija",
    portraitRole: "Directeur · Dietlikon",
    portraitAlt: "Adem Delija, directeur de KSAG Insurance GmbH, dans le bureau de Dietlikon",
    welcomeBody: [
      "KSAG est un courtier indépendant travaillant avec des assureurs de premier plan.",
      "Depuis 2017, nous conseillons de façon indépendante depuis Dietlikon en assurances, prévoyance et planification financière.",
      "Nous comparons les produits, expliquons les avantages et restons votre interlocuteur unique.",
    ],
    servicesTitle: "Des services pour la sérénité au quotidien",
    privateCardTitle: "Particuliers ?",
    privateCardBody: "Ensemble, nous traversons la jungle des assurances.",
    businessCardTitle: "Entreprises ?",
    businessCardBody: "Solutions sur mesure pour votre société à des primes attractives.",
    contactCardTitle: "Contact",
    contactCardBody: "Des questions ou un conseil personnel ? Nous vous aidons volontiers.",
    staffTitle: "Le meilleur pour votre personnel",
    staffBody:
      "La satisfaction des collaborateurs est essentielle. Ensemble, nous sécurisons l’avenir de votre personnel.",
    staffItems: [
      "Prévoyance professionnelle (LPP)",
      "Assurance accidents",
      "Indemnité journalière maladie collective",
    ],
    visitEyebrow: "Bureau",
    visitTitle: "Rendez-vous à Dietlikon",
    visitLead:
      "Conseil à l’Industriestrasse 14. La carte indique le siège de KSAG Insurance GmbH.",
  },
  about: {
    title: "À propos",
    lead: "Conseil indépendant en assurances et prévoyance dans la région de Zurich.",
    body: [
      "KSAG Insurance GmbH conseille depuis 2017, depuis Dietlikon, de façon indépendante en assurances, prévoyance et planification financière.",
      "Nous comparons les produits pour les clients privés et les entreprises et expliquons les avantages et les inconvénients. Une seule personne reste votre interlocuteur pour tous les contrats.",
      "Le premier entretien est gratuit, pour les particuliers et les entreprises.",
    ],
    valuesTitle: "Nos valeurs",
    values: [
      {
        title: "Professionnalisme",
        text: "Un comportement exemplaire, une attitude claire et des standards éthiques élevés.",
      },
      { title: "Intégrité", text: "De la fiabilité dans chaque partie du conseil." },
      {
        title: "Service",
        text: "De la satisfaction par un suivi soigneux et une solution adaptée à l’objectif.",
      },
      {
        title: "Engagement",
        text: "Un entretien construit autour du besoin du client.",
      },
    ],
    topicsTitle: "Autres thèmes",
    topicsLead:
      "Ces thèmes font aussi partie du conseil. Demandez-nous.",
    topics: [
      "Comptabilité",
      "Conseil juridique",
      "Conseil aux entreprises",
      "Immobilier",
      "Sponsoring",
      "Emplois et carrière",
    ],
    partnersTitle: "Ce que disent les clients",
    quotes: [
      {
        quote:
          "Merci pour ce conseil excellent et compétent. Le conseil financier et de prévoyance de KSAG Insurance nous a fait économiser beaucoup d’argent.",
        name: "Cliente ou client",
        role: "Finance et prévoyance",
      },
      {
        quote:
          "Mon conseiller Adem est le meilleur. Il est professionnel, a toujours une réponse et réagit vite aux e-mails et aux appels. C’est pour cela que je reste client. Les prix de ma couverture conviennent aussi.",
        name: "Cliente ou client",
        role: "Assurance",
      },
      {
        quote: "Nous n’aurions jamais pensé qu’un conseil compétent puisse faire économiser autant.",
        name: "Cliente ou client",
        role: "Conseil",
      },
      {
        quote:
          "Nous sommes passés à KSAG Insurance il y a de nombreuses années, et Adem s’est toujours occupé de tout. Il a été honnête, juste et à jour à chaque demande. Nous le recommandons vivement.",
        name: "Cliente ou client",
        role: "Clientèle de longue date",
      },
      {
        quote: "Monsieur Adem Delija est toujours là pour nous, même pendant les vacances.",
        name: "Cliente ou client",
        role: "Disponibilité",
      },
      {
        quote:
          "Je travaille avec KSAG Insurance à titre privé et professionnel. J’obtiens toujours un service et des réponses rapides, même quand le bureau est fermé. Monsieur Adem prend son travail au sérieux, ainsi que son équipe.",
        name: "Cliente ou client",
        role: "Privé et professionnel",
      },
    ],
  },
  healthCompare: {
    title: "Comparaison d’assurance maladie",
    lead: "En quelques étapes vers une couverture de base avantageuse — puis un conseil personnel.",
    stepsTitle: "Comment ça marche",
    steps: [
      "Indiquer lieu, âge et franchise",
      "Choisir le modèle et la caisse actuelle",
      "Voir la comparaison et demander conseil",
    ],
    formTitle: "Calculer la prime (démo)",
    zip: "NPA ou localité",
    year: "Année de naissance",
    franchise: "Franchise",
    accident: "Couverture accidents",
    accidentYes: "Avec accidents",
    accidentNo: "Sans accidents",
    currentInsurer: "Caisse actuelle",
    model: "Modèle souhaité",
    models: ["Standard", "Médecin de famille", "HMO", "Autre"],
    submit: "Calculer la prime",
    resultTitle: "Votre comparaison démo est prête",
    resultBody:
      "Une version live afficherait ici des primes approuvées. Ceci est une démo KSAG — nous préparons volontiers une vraie comparaison.",
  },
  private: {
    title: "Particuliers",
    lead: "De l’assurance maladie à la prévoyance — comparé, expliqué, accompagné.",
    products: [
      {
        slug: "krankenversicherung",
        title: "Assurance maladie",
        short: "Base et complémentaires selon vos besoins.",
        lead: "Avec de nombreux assureurs maladie, nous adaptons la couverture à vos souhaits.",
        sections: [
          {
            title: "Assurance de base (LAMal)",
            body: "Couverture obligatoire pour maladie, maternité et accident. Prestations identiques dans tout le pays.",
            bullets: [
              "Modèles alternatifs avec réduction possible de prime",
              "Risque accident souvent excludable selon l’emploi",
            ],
          },
          {
            title: "Assurances complémentaires",
            body: "Complètent les prestations insuffisantes ou absentes de la base.",
            note: "Souscrire tôt est souvent utile — l’âge ou la santé peuvent limiter l’admission.",
          },
        ],
      },
      {
        slug: "fahrzeugversicherung",
        title: "Assurance véhicule",
        short: "RC, casco partielle et complète — clairement comparées.",
        lead: "Les primes varient fortement. Une comparaison vaut la peine.",
        sections: [
          {
            title: "Couvertures de base",
            bullets: ["Responsabilité civile (obligatoire)", "Casco partielle", "Casco complète"],
          },
          {
            title: "Options",
            bullets: ["Protection bonus", "Dommages parking", "Effets personnels", "Phares", "Protection occupants"],
          },
        ],
      },
      {
        slug: "hausratversicherung",
        title: "Assurance ménage",
        short: "Protection de vos biens à domicile.",
        lead: "Couvre les objets mobiliers à usage privé. La somme doit refléter la valeur de remplacement.",
        sections: [
          { title: "Couvertures de base", bullets: ["Incendie", "Eau", "Vol", "Bris de glace"] },
          {
            title: "Options",
            bullets: ["Casco ménage", "Protection cartes", "Bagages", "Vélo"],
            note: "Signalez les achats pour éviter la sous-assurance.",
          },
        ],
      },
      {
        slug: "privathaftpflichtversicherung",
        title: "Responsabilité civile privée",
        short: "Protection essentielle envers les tiers.",
        lead: "Individuelle ou familiale : couverture des prétentions justifiées et défense contre les injustifiées.",
        sections: [
          {
            title: "Couverture de base",
            bullets: ["Dommages corporels", "Dommages matériels", "Souvent jusqu’à CHF 10 mio."],
          },
          {
            title: "Options possibles",
            bullets: ["Usage occasionnel de véhicules tiers", "Chasse", "Modélisme aérien", "Objets loués ou empruntés"],
            note: "Astuce : rabais combinés avec l’assurance ménage fréquents.",
          },
        ],
      },
      {
        slug: "rechtsschutzversicherung",
        title: "Protection juridique",
        short: "Soutien en cas de litige — privé et circulation.",
        lead: "Prise en charge des frais de procédure et assistance juridique.",
        sections: [
          {
            title: "Protection privée (exemples)",
            bullets: ["Droit du travail", "Voisinage et bail", "Droit des patients", "Contrats et assurances", "Dommages"],
          },
          {
            title: "Protection circulation",
            body: "Comme détenteur, conducteur, passager ou piéton — selon la police.",
          },
        ],
      },
      {
        slug: "lebensversicherung",
        title: "Assurance vie",
        short: "Épargner pour la retraite avec une police de capital.",
        lead: "Une assurance vie de capital permet d’épargner pour l’âge et de rester assuré en même temps.",
        sections: [
          {
            title: "Prévoyance privée",
            body: "Dans la prévoyance privée, ces polices constituent un capital. Selon le produit, un avantage fiscal peut s’y ajouter.",
          },
        ],
      },
      {
        slug: "vorsorge",
        title: "Prévoyance",
        short: "Prévoyance individuelle pour votre niveau de vie.",
        lead: "Longévité et démographie challengent les systèmes de rente. Nous optimisons votre prévoyance.",
        sections: [
          {
            title: "Trois piliers",
            body: "L’AVS et l’AI forment le premier pilier. La prévoyance professionnelle et la prévoyance privée, piliers 3a et 3b, les complètent.",
          },
          {
            title: "Notre accompagnement",
            body: "Une solution selon vos besoins — clairement comparée et expliquée.",
          },
        ],
      },
      {
        slug: "kredite-und-hypotheken",
        title: "Crédits et hypothèques",
        short: "Crédit privé, auto et construction, ainsi que des hypothèques.",
        lead: "Comme partenaire de financement indépendant, KSAG compare les offres du marché suisse du crédit et cherche une solution adaptée au budget.",
        sections: [
          {
            title: "Quels financements",
            bullets: [
              "Crédit privé",
              "Crédit auto",
              "Crédit de construction",
              "Hypothèques",
              "Crédit avec assurance des mensualités",
            ],
          },
          {
            title: "Conditions habituelles",
            bullets: [
              "Revenu mensuel régulier",
              "Âge entre 18 et 65 ans",
              "Domicile en Suisse, nationalité suisse ou permis B ou C",
              "Pas de poursuites, de saisies ou d’actes de défaut de biens",
            ],
          },
        ],
      },
    ],
  },
  business: {
    title: "Entreprises",
    lead: "Couverture sur mesure — du personnel aux biens et à la responsabilité.",
    products: [
      {
        slug: "berufliche-vorsorge-bvg",
        title: "Prévoyance professionnelle (LPP)",
        short: "2e pilier pour vos collaborateurs.",
        lead: "Complète le 1er pilier et vise le maintien du niveau de vie.",
        sections: [
          {
            title: "Minimum légal et au-delà",
            body: "Les collaborateurs au-dessus du seuil LPP doivent être assurés. Vous pouvez améliorer les prestations.",
          },
          {
            title: "Risques assurés",
            bullets: ["18–24 : invalidité", "25–retraite : invalidité, vieillesse, décès"],
          },
        ],
      },
      {
        slug: "unfallversicherung",
        title: "Assurance accidents",
        short: "Protection obligatoire LAA.",
        lead: "Tous les salariés en Suisse doivent être assurés — y compris apprentis et stagiaires.",
        sections: [
          {
            title: "Dès 8 h/semaine",
            bullets: ["Accidents professionnels", "Maladies professionnelles", "Accidents non professionnels"],
          },
          {
            title: "Moins de 8 h/semaine",
            bullets: ["Accidents professionnels", "Maladies professionnelles"],
          },
          {
            title: "Prestations",
            bullets: ["Indemnité journalière", "Frais de soins", "Hospitalisation", "Rentes", "Complément LAA"],
          },
        ],
      },
      {
        slug: "kollektive-krankentaggeldversicherung",
        title: "Indemnité journalière maladie collective",
        short: "Protection du revenu en cas de maladie.",
        lead: "Soutient le versement du salaire en cas de maladie — adapté à votre entreprise.",
        sections: [
          {
            title: "Avantage",
            body: "Nous comparons des solutions collectives adaptées à votre taille et à vos risques.",
          },
        ],
      },
      {
        slug: "sach-und-haftpflichtversicherungen",
        title: "Biens et responsabilité",
        short: "Protection de l’exploitation, inventaire et responsabilité.",
        lead: "RC d’entreprise, inventaire et autres risques — structurés et comparés.",
        sections: [
          {
            title: "Thèmes typiques",
            bullets: ["RC exploitation et RC professionnelle", "Biens, inventaire et transport", "Flotte de véhicules"],
          },
        ],
      },
    ],
  },
  tax: {
    title: "Conseil fiscal",
    lead: "Optimiser la déclaration — déductions légales et éventuelle opposition.",
    body: [
      "La déclaration fiscale arrive vite chaque année. Beaucoup craignent d’avoir oublié des déductions.",
      "Nous complétons et optimisons la déclaration, vérifions la taxation et rédigeons une opposition si besoin.",
      "Un premier entretien est gratuit.",
    ],
    pricingTitle: "Tarifs (démo)",
    pricing: [
      { label: "Apprentis, étudiants et retraités", price: "CHF 35.00" },
      { label: "Personnes seules", price: "CHF 70.00" },
      { label: "Couples mariés", price: "CHF 95.00" },
      { label: "Propriétaires*", price: "CHF 160.00" },
    ],
    pricingNote: "* incl. 15 annexes. Annexes supplémentaires : CHF 5.– chacune.",
    exclusion: "Les indépendants sont exclus de cette offre.",
    stepsTitle: "Quelques étapes",
    steps: [
      "Demander un rendez-vous ou un rappel",
      "Remplir le formulaire de contact",
      "Nous vous contactons pour la suite",
    ],
  },
  recommend: {
    title: "Recommander",
    lead: "Partagez votre confiance en KSAG — et recevez une prime de recommandation.",
    reward:
      "Après conclusion réussie d’une assurance maladie ou vie : CHF 50.00 par personne (offre démo).",
    stepsTitle: "Comment procéder",
    steps: [
      "Remplir le formulaire de recommandation",
      "Envoyer vos données et celles de la personne recommandée",
      "Nous la contactons pour un conseil",
      "En cas de conclusion réussie, vous recevez la prime",
      "Versement sur votre compte bancaire",
    ],
    important:
      "Important : conditions de participation (nouveau client, 18 ans+, etc.). Offre démo.",
    formTitle: "Envoyer une recommandation",
    yourName: "Votre nom",
    yourEmail: "Votre e-mail",
    yourPhone: "Votre téléphone",
    friendName: "Nom de la personne recommandée",
    friendPhone: "Téléphone de la personne recommandée",
    friendEmail: "E-mail de la personne recommandée",
    submit: "Envoyer",
  },
  contact: {
    title: "Contact",
    lead: "Des questions ou un conseil personnel ? Écrivez-nous.",
    formTitle: "Formulaire de contact",
    name: "Nom",
    email: "E-mail",
    phone: "Téléphone",
    topic: "Sujet",
    topics: [
      "Assurance maladie",
      "Assurance privée",
      "Assurance entreprise",
      "Conseil fiscal",
      "Sinistre",
      "Général",
    ],
    message: "Message",
    infoTitle: "Coordonnées",
    mapTitle: "Bureau à Dietlikon",
    mapOpen: "Ouvrir dans Google Maps",
    mapNote: "La carte indique Industriestrasse 14 et est chargée via Google Maps.",
  },
  footer: {
    tagline: "Courtier d’assurance suisse indépendant.",
    privateTitle: "Particuliers",
    legal: "Mentions",
    privacy: "Confidentialité",
    terms: "CG",
    imprint: "Impressum",
    rights: "© 2026 KSAG Insurance GmbH. Tous droits réservés.",
  },
  privacy: {
    title: "Politique de confidentialité",
    lead:
      "Nous protégeons vos données personnelles conformément à la LPD suisse et, le cas échéant, au RGPD de l’UE.",
    updated: "Mise à jour : novembre 2026",
    disclaimer:
      "Ce texte décrit le traitement des données par KSAG Insurance GmbH et ne remplace pas un avis juridique.",
    sections: [
      {
        title: "1. Responsable",
        body:
          "Le responsable du traitement est KSAG Insurance GmbH, Industriestrasse 14, 8305 Dietlikon, Suisse. Contact : info@ksaggmbh.ch, tél. +41 79 138 53 36.",
      },
      {
        title: "2. Données traitées",
        body: "Selon l’usage du site, nous pouvons traiter :",
        bullets: [
          "Coordonnées (nom, e-mail, téléphone) via formulaires",
          "Détails de demandes de conseil",
          "Données techniques (IP, navigateur, appareil, horodatage)",
          "Préférences cookies / consentement",
          "Via WhatsApp : contenus que vous envoyez selon les conditions Meta/WhatsApp",
          "Au chargement de la carte sur la page contact : données techniques reçues par Google Maps (p. ex. adresse IP)",
        ],
      },
      {
        title: "3. Finalités",
        bullets: [
          "Répondre aux demandes et préparer un conseil",
          "Assurer le fonctionnement et la sécurité du site",
          "Améliorer nos services (avec consentement ou base légale)",
          "Respecter des obligations légales",
        ],
      },
      {
        title: "4. Bases légales",
        body:
          "Le traitement repose selon le cas sur le contrat / mesures précontractuelles, l’intérêt légitime, le consentement ou une obligation légale. La LPD s’applique ; le RGPD peut s’appliquer pour l’UE/EEE.",
      },
      {
        title: "5. Destinataires",
        body:
          "Transmission uniquement si nécessaire aux finalités, avec consentement ou obligation légale. Destinataires possibles : hébergeur/IT, assureurs en cas de courtage concret, WhatsApp/Meta, et Google au chargement de la carte.",
      },
      {
        title: "6. Durée de conservation",
        body:
          "Conservation limitée à la durée nécessaire ou aux délais légaux. Les demandes sans contrat sont en principe effacées ou anonymisées après la correspondance.",
      },
      {
        title: "7. Cookies",
        body:
          "Cookies nécessaires au fonctionnement (langue, consentement). Cookies optionnels uniquement avec votre accord.",
      },
      {
        title: "8. Vos droits",
        body: "Selon le droit applicable, vous pouvez notamment :",
        bullets: [
          "Accéder à vos données",
          "Les faire rectifier",
          "Demander l’effacement",
          "Limiter le traitement",
          "Vous opposer à certains traitements",
          "La portabilité (si RGPD)",
          "Retirer un consentement pour l’avenir",
        ],
      },
      {
        title: "9. Réclamation",
        body:
          "Vous pouvez saisir le PFPDT en Suisse et, le cas échéant, l’autorité de contrôle de l’UE/EEE.",
      },
      {
        title: "10. Sécurité",
        body:
          "Mesures techniques et organisationnelles appropriées. Aucune sécurité absolue sur Internet.",
      },
      {
        title: "11. Contact confidentialité",
        body:
          "Écrivez à info@ksaggmbh.ch ou utilisez le formulaire de contact.",
      },
    ],
  },
  imprint: {
    title: "Impressum",
    lead: "Informations sur KSAG Insurance GmbH.",
    sections: [
      {
        title: "Entreprise",
        bullets: [
          "KSAG Insurance GmbH",
          "Société à responsabilité limitée (GmbH)",
          "Industriestrasse 14",
          "8305 Dietlikon",
          "Suisse",
        ],
      },
      {
        title: "Registre du commerce",
        bullets: [
          "IDE : CHE-470.839.062",
          "N° RC : CH-020.4.060.855-4",
          "Registre du commerce du canton de Zurich",
          "Inscription : 1er mars 2017",
          "Capital social : CHF 20'000",
        ],
      },
      {
        title: "Direction",
        bullets: [
          "Granit Delija, associé et président de la direction, signature individuelle",
          "Adem Delija, directeur, signature individuelle",
        ],
      },
      {
        title: "Contact",
        bullets: [
          "E-mail : info@ksaggmbh.ch",
          "Mobile : +41 79 138 53 36",
          "Fixe : +41 43 819 19 91",
          "Mobile : +41 79 759 73 14",
          "Lundi–vendredi : 08:00–18:00",
          "Samedi : 10:00–14:00",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookies",
    body:
      "Cookies nécessaires au fonctionnement et à la langue. « Accepter » autorise aussi des cookies démo optionnels. Voir la politique de confidentialité.",
    accept: "Accepter",
    essential: "Essentiels uniquement",
    link: "Confidentialité",
  },
  whatsappLabel: "Discuter sur WhatsApp",
  trust: {
    label: "Conseil",
    stats: [
      { value: "164", label: "Sociétés et partenaires" },
      { value: "1 700", label: "Clients et contacts" },
      { value: "1 200", label: "Entretiens réalisés" },
    ],
    items: [
      "Assurance maladie",
      "Prévoyance",
      "Véhicule et ménage",
      "Crédits et hypothèques",
      "Entreprises",
    ],
  },
};
