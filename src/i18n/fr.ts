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
    hours: "Lundi – vendredi : 08:00 – 17:00\nOu sur rendez-vous.",
    address: "Bahnhofstrasse 12\n8001 Zurich\nSuisse",
    phone: "+41 44 123 45 67",
    email: "hello@ksag-insurance.ch",
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
    welcomeBody: [
      "KSAG est un courtier indépendant travaillant avec des assureurs de premier plan.",
      "En tant que prestataire licencié, nous vous aidons à trouver la couverture adaptée.",
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
  },
  about: {
    title: "À propos",
    lead: "Courtier indépendant axé sur un conseil clair et un suivi durable.",
    body: [
      "KSAG Insurance est un courtier indépendant. Des assureurs suisses leaders font partie de nos partenaires.",
      "Nous comparons les produits et conseillons de façon transparente — un seul interlocuteur pour tous vos contrats.",
      "Nos collaborateurs sont formés, licenciés et enregistrés selon les règles applicables.",
    ],
    partnersTitle: "Ce que disent les partenaires",
    quotes: [
      {
        quote: "Excellente collaboration. KSAG travaille de façon indépendante avec plusieurs assureurs.",
        name: "Voix partenaire",
        role: "Assureur",
      },
      {
        quote: "Sérieux, joignable et orienté solutions lorsque les clients ont besoin d’aide.",
        name: "Voix partenaire",
        role: "Assureur",
      },
      {
        quote: "Conseil de haut niveau et collaboration fiable.",
        name: "Voix partenaire",
        role: "Assureur",
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
        slug: "vorsorge",
        title: "Prévoyance",
        short: "Prévoyance individuelle pour votre niveau de vie.",
        lead: "Longévité et démographie challengent les systèmes de rente. Nous optimisons votre prévoyance.",
        sections: [
          {
            title: "Notre accompagnement",
            body: "Une solution selon vos besoins — clairement comparée et expliquée.",
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
            bullets: ["Indemnité journalière", "Frais de soins", "Hospitalisation", "Rentes"],
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
            bullets: ["RC exploitation", "Biens et inventaire", "Autres couvertures opérationnelles"],
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
  },
  footer: {
    tagline: "Courtier d’assurance suisse indépendant.",
    privateTitle: "Particuliers",
    legal: "Mentions",
    privacy: "Confidentialité",
    terms: "CG",
    imprint: "Impressum",
    rights: "© 2026 KSAG Insurance. Tous droits réservés.",
  },
  privacy: {
    title: "Politique de confidentialité",
    lead:
      "Nous protégeons vos données personnelles conformément à la LPD suisse et, le cas échéant, au RGPD de l’UE.",
    updated: "Mise à jour : novembre 2026 (contenu démo)",
    disclaimer:
      "Ce texte est un modèle démo pour KSAG Insurance et ne remplace pas un avis juridique. Faites-le valider avant la mise en ligne.",
    sections: [
      {
        title: "1. Responsable",
        body:
          "Le responsable du traitement est KSAG Insurance (démo), Bahnhofstrasse 12, 8001 Zurich, Suisse. Contact : hello@ksag-insurance.ch, tél. +41 44 123 45 67.",
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
          "Transmission uniquement si nécessaire aux finalités, avec consentement ou obligation légale. Destinataires possibles (démo) : hébergeur/IT, assureurs en cas de courtage concret, WhatsApp/Meta.",
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
          "Écrivez à hello@ksag-insurance.ch ou utilisez le formulaire de contact.",
      },
    ],
  },
  imprint: {
    title: "Impressum",
    lead: "Informations légales (démo).",
    sections: [
      {
        title: "Entreprise",
        bullets: [
          "KSAG Insurance (démo)",
          "Bahnhofstrasse 12",
          "8001 Zurich",
          "Suisse",
        ],
      },
      {
        title: "Contact",
        bullets: [
          "E-mail : hello@ksag-insurance.ch",
          "Téléphone : +41 44 123 45 67",
        ],
      },
      {
        title: "Remarque",
        body:
          "Impressum démo à remplacer par les données réelles et l’IDE avant mise en production.",
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
    label: "Partenaires et régions",
    items: ["Zurich", "Berne", "Genève", "Lugano", "Bâle", "Lausanne"],
  },
};
