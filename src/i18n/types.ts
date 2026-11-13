export type Lang = "de" | "fr" | "it" | "en";

export type NavKey =
  | "home"
  | "about"
  | "healthCompare"
  | "private"
  | "business"
  | "tax"
  | "recommend"
  | "contact";

export type ProductSection = {
  title: string;
  body?: string;
  bullets?: string[];
  note?: string;
};

export type Product = {
  slug: string;
  title: string;
  short: string;
  lead: string;
  sections: ProductSection[];
};

export type Dictionary = {
  brand: string;
  nav: Record<NavKey, string> & { cta: string; more: string };
  common: {
    more: string;
    contactUs: string;
    hoursLabel: string;
    hours: string;
    address: string;
    phone: string;
    email: string;
    send: string;
    success: string;
    required: string;
    back: string;
    mockNote: string;
  };
  home: {
    heroBrand: string;
    heroTitle: string;
    heroSub: string;
    heroPrimary: string;
    heroSecondary: string;
    welcomeEyebrow: string;
    welcomeTitle: string;
    welcomeBody: string[];
    servicesTitle: string;
    privateCardTitle: string;
    privateCardBody: string;
    businessCardTitle: string;
    businessCardBody: string;
    contactCardTitle: string;
    contactCardBody: string;
    staffTitle: string;
    staffBody: string;
    staffItems: string[];
  };
  about: {
    title: string;
    lead: string;
    body: string[];
    partnersTitle: string;
    quotes: { quote: string; name: string; role: string }[];
  };
  healthCompare: {
    title: string;
    lead: string;
    stepsTitle: string;
    steps: string[];
    formTitle: string;
    zip: string;
    year: string;
    franchise: string;
    accident: string;
    accidentYes: string;
    accidentNo: string;
    currentInsurer: string;
    model: string;
    models: string[];
    submit: string;
    resultTitle: string;
    resultBody: string;
  };
  private: {
    title: string;
    lead: string;
    products: Product[];
  };
  business: {
    title: string;
    lead: string;
    products: Product[];
  };
  tax: {
    title: string;
    lead: string;
    body: string[];
    pricingTitle: string;
    pricing: { label: string; price: string }[];
    pricingNote: string;
    exclusion: string;
    stepsTitle: string;
    steps: string[];
  };
  recommend: {
    title: string;
    lead: string;
    reward: string;
    stepsTitle: string;
    steps: string[];
    important: string;
    formTitle: string;
    yourName: string;
    yourEmail: string;
    yourPhone: string;
    friendName: string;
    friendPhone: string;
    friendEmail: string;
    submit: string;
  };
  contact: {
    title: string;
    lead: string;
    formTitle: string;
    name: string;
    email: string;
    phone: string;
    topic: string;
    topics: string[];
    message: string;
    infoTitle: string;
  };
  footer: {
    tagline: string;
    privateTitle: string;
    legal: string;
    privacy: string;
    terms: string;
    imprint: string;
    rights: string;
  };
  privacy: {
    title: string;
    lead: string;
    updated: string;
    disclaimer: string;
    sections: { title: string; body?: string; bullets?: string[] }[];
  };
  imprint: {
    title: string;
    lead: string;
    sections: { title: string; body?: string; bullets?: string[] }[];
  };
  cookies: {
    title: string;
    body: string;
    accept: string;
    essential: string;
    link: string;
  };
  whatsappLabel: string;
  trust: { label: string; items: string[] };
};
