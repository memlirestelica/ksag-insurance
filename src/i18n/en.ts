import type { Dictionary } from "./types";

export const en: Dictionary = {
  brand: "KSAG Insurance",
  nav: {
    home: "Home",
    about: "About us",
    healthCompare: "Health comparison",
    private: "Private clients",
    business: "Business clients",
    tax: "Tax advice",
    recommend: "Refer us",
    contact: "Contact",
    cta: "Book advice",
    more: "More",
  },
  common: {
    more: "More",
    contactUs: "Get in touch",
    hoursLabel: "Opening hours",
    hours: "Monday – Friday: 08:00 – 18:00\nSaturday: 10:00 – 14:00",
    address: "KSAG Insurance GmbH\nIndustriestrasse 14\n8305 Dietlikon\nSwitzerland",
    phone: "+41 79 138 53 36",
    phones: [
      { label: "Mobile", number: "+41 79 138 53 36" },
      { label: "Landline", number: "+41 43 819 19 91" },
      { label: "Mobile", number: "+41 79 759 73 14" },
    ],
    email: "info@ksaggmbh.ch",
    send: "Send",
    success: "Thanks — your request was sent (demo).",
    required: "Required",
    back: "Back",
    mockNote: "Demo content for illustration.",
  },
  home: {
    heroBrand: "KSAG Insurance",
    heroTitle: "Independent advice for clearer cover.",
    heroSub:
      "As an independent broker we compare leading Swiss insurers and find the solution that fits your life or business.",
    heroPrimary: "Compare health insurance",
    heroSecondary: "Explore private cover",
    welcomeEyebrow: "Welcome",
    welcomeTitle: "Welcome to KSAG",
    portraitName: "Adem Delija",
    portraitRole: "Managing director · Dietlikon",
    portraitAlt: "Adem Delija, managing director of KSAG Insurance GmbH, in the Dietlikon office",
    welcomeBody: [
      "KSAG is an independent insurance broker working with leading insurers.",
      "Since 2017 we have advised independently from Dietlikon on insurance, pensions and financial planning.",
      "We compare products, explain pros and cons, and remain your single point of contact.",
    ],
    servicesTitle: "Services that bring peace of mind",
    privateCardTitle: "Private clients?",
    privateCardBody: "Together we navigate the insurance jungle.",
    businessCardTitle: "Business clients?",
    businessCardBody: "Tailored solutions for your company at attractive premiums.",
    contactCardTitle: "Contact",
    contactCardBody: "Questions or personal advice? We’re happy to help.",
    staffTitle: "Only the best for your people",
    staffBody:
      "Employee satisfaction matters. Together we build secure cover for your staff.",
    staffItems: [
      "Occupational pension (BVG)",
      "Accident insurance",
      "Collective daily sickness benefits",
    ],
    visitEyebrow: "Office",
    visitTitle: "Meet us in Dietlikon",
    visitLead: "Advice at Industriestrasse 14. The map marks the KSAG Insurance GmbH office.",
  },
  about: {
    title: "About us",
    lead: "Independent advice on insurance and pensions in the Zurich area.",
    body: [
      "KSAG Insurance GmbH has advised independently on insurance, pensions and financial planning from Dietlikon since 2017.",
      "We compare products for private and business clients and explain the trade-offs, so one person remains your contact for every policy.",
      "The first consultation is free, for private clients and companies.",
    ],
    valuesTitle: "Our values",
    values: [
      {
        title: "Professionalism",
        text: "Conduct by example, a clear attitude and high ethical standards.",
      },
      { title: "Integrity", text: "Reliability in every part of the advice." },
      {
        title: "Service",
        text: "Satisfaction through careful support and a solution that fits the goal.",
      },
      {
        title: "Commitment",
        text: "A conversation shaped around what the client actually needs.",
      },
    ],
    topicsTitle: "Further topics",
    topicsLead:
      "These topics are part of the advice as well. Ask us about them.",
    topics: [
      "Bookkeeping",
      "Legal advice",
      "Business consulting",
      "Property",
      "Sponsoring",
      "Jobs and careers",
    ],
    partnersTitle: "What clients say",
    quotes: [
      {
        quote:
          "Thank you for the excellent, competent advice. The financial and pension advice from KSAG Insurance saved us a lot of money.",
        name: "Client",
        role: "Finance and pensions",
      },
      {
        quote:
          "My adviser Adem is the best. He is professional, always has an answer and replies quickly to emails and calls. That is why I stay a client. The prices for my cover are right too.",
        name: "Client",
        role: "Insurance",
      },
      {
        quote: "We never thought competent advice could save so much money.",
        name: "Client",
        role: "Advice",
      },
      {
        quote:
          "We moved to KSAG Insurance many years ago, and Adem has always looked after everything we needed. He was honest, fair and up to date on every request. We recommend him highly.",
        name: "Client",
        role: "Long-standing client",
      },
      {
        quote: "Mr Adem Delija is always there for us, even on holiday.",
        name: "Client",
        role: "Availability",
      },
      {
        quote:
          "I work with KSAG Insurance privately and for my business. I always get fast service and fast answers, even when the office is closed. Mr Adem takes his work seriously, and so does his team.",
        name: "Client",
        role: "Private and business",
      },
    ],
  },
  healthCompare: {
    title: "Health insurance comparison",
    lead: "Reach affordable basic cover in a few steps — then get personal advice.",
    stepsTitle: "How it works",
    steps: [
      "Enter location, age and deductible",
      "Choose model and current insurer",
      "Review comparison and request advice",
    ],
    formTitle: "Calculate premium (demo)",
    zip: "Postcode or town",
    year: "Year of birth",
    franchise: "Deductible",
    accident: "Accident cover",
    accidentYes: "With accident",
    accidentNo: "Without accident",
    currentInsurer: "Current health insurer",
    model: "Preferred model",
    models: ["Standard", "Family doctor", "HMO", "Other"],
    submit: "Calculate premium",
    resultTitle: "Your demo comparison is ready",
    resultBody:
      "A live version would show approved premiums here. This is a KSAG demo — we’re happy to prepare a real comparison.",
  },
  private: {
    title: "Private clients",
    lead: "From health insurance to provision — compared, explained, supported.",
    products: [
      {
        slug: "krankenversicherung",
        title: "Health insurance",
        short: "Basic and supplementary cover tailored to you.",
        lead: "Working with many health insurers, we match cover to your needs.",
        sections: [
          {
            title: "Basic insurance (KVG)",
            body: "Mandatory basic cover for illness, maternity and accident. Benefits are identical nationwide with an obligation to accept applicants.",
            bullets: [
              "Alternative models with possible premium reductions",
              "Accident risk can often be excluded depending on employment",
            ],
          },
          {
            title: "Supplementary insurance",
            body: "Voluntary top-ups for benefits basic cover doesn’t fully include.",
            note: "Earlier enrolment is often wise as age or health can limit acceptance.",
          },
        ],
      },
      {
        slug: "fahrzeugversicherung",
        title: "Motor insurance",
        short: "Liability, partial and fully comprehensive — clearly compared.",
        lead: "Premiums differ widely between insurers. Comparison pays off.",
        sections: [
          {
            title: "Core cover",
            bullets: ["Third-party liability (mandatory)", "Partial casco", "Fully comprehensive"],
          },
          {
            title: "Add-ons",
            bullets: ["Bonus protection", "Parking damage", "Personal belongings", "Headlights", "Occupant protection"],
          },
        ],
      },
      {
        slug: "hausratversicherung",
        title: "Household contents",
        short: "Protection for belongings at home.",
        lead: "Covers movable private belongings. Sums should match replacement value.",
        sections: [
          { title: "Core cover", bullets: ["Fire", "Water", "Theft", "Glass"] },
          {
            title: "Optional add-ons",
            bullets: ["Contents casco", "Card protection", "Travel luggage", "Bike cover"],
            note: "Report new purchases to avoid underinsurance.",
          },
        ],
      },
      {
        slug: "privathaftpflichtversicherung",
        title: "Personal liability",
        short: "Essential cover for damage to third parties.",
        lead: "Individual or family cover for justified claims and defence against unjustified ones.",
        sections: [
          {
            title: "Core cover",
            bullets: ["Personal injury", "Property damage", "Limits often up to CHF 10m"],
          },
          {
            title: "Possible add-ons",
            bullets: ["Occasional use of others’ vehicles", "Hunter liability", "Model aircraft", "Rented or borrowed items"],
            note: "Tip: combination discounts with household cover are common.",
          },
        ],
      },
      {
        slug: "rechtsschutzversicherung",
        title: "Legal protection",
        short: "Support in legal disputes — private and traffic.",
        lead: "Helps with court and lawyer costs plus legal assistance.",
        sections: [
          {
            title: "Private legal protection (examples)",
            bullets: ["Employment", "Neighbour and tenancy", "Patient rights", "Contract and insurance law", "Damages"],
          },
          {
            title: "Traffic legal protection",
            body: "Cover as owner, driver, passenger or pedestrian — depending on the policy.",
          },
        ],
      },
      {
        slug: "lebensversicherung",
        title: "Life insurance",
        short: "Save for retirement with a savings policy.",
        lead: "A savings life policy lets you put money aside for retirement and stay insured at the same time.",
        sections: [
          {
            title: "Private provision",
            body: "Within private provision these policies build capital. Depending on the product, a tax advantage can apply.",
          },
        ],
      },
      {
        slug: "vorsorge",
        title: "Provision",
        short: "Personal retirement planning for your standard of living.",
        lead: "Longevity and demographics challenge pension systems. We help optimise your private provision.",
        sections: [
          {
            title: "Three pillars",
            body: "AHV and IV are the first pillar. Occupational pensions and private provision, pillars 3a and 3b, complete them.",
          },
          {
            title: "How we help",
            body: "We build a solution around your needs — clearly compared and explained.",
          },
        ],
      },
      {
        slug: "kredite-und-hypotheken",
        title: "Loans and mortgages",
        short: "Personal, car and construction loans, plus mortgages.",
        lead: "As an independent financing partner, KSAG compares offers on the Swiss credit market and looks for one that fits the budget.",
        sections: [
          {
            title: "What we arrange",
            bullets: [
              "Personal loan",
              "Car loan",
              "Construction loan",
              "Mortgages",
              "Loan with instalment insurance",
            ],
          },
          {
            title: "Usual requirements",
            bullets: [
              "Regular monthly income",
              "Age between 18 and 65",
              "Resident in Switzerland, Swiss citizenship or permit B or C",
              "No debt collection, attachments or certificates of loss",
            ],
          },
        ],
      },
    ],
  },
  business: {
    title: "Business clients",
    lead: "Tailored cover for companies — from people to property and liability.",
    products: [
      {
        slug: "berufliche-vorsorge-bvg",
        title: "Occupational pension (BVG)",
        short: "2nd pillar for your employees.",
        lead: "Occupational pensions complement the 1st pillar and help maintain living standards.",
        sections: [
          {
            title: "Legal minimum & beyond",
            body: "Employees above the BVG entry threshold must be insured. You can enhance benefits beyond the minimum.",
          },
          {
            title: "Insured risks",
            bullets: ["Ages 18–24: disability", "Ages 25–retirement: disability, old age, death"],
          },
        ],
      },
      {
        slug: "unfallversicherung",
        title: "Accident insurance",
        short: "Mandatory UVG protection.",
        lead: "All employees in Switzerland must be insured — including apprentices and interns.",
        sections: [
          {
            title: "8+ hours/week",
            bullets: ["Occupational accidents", "Occupational disease", "Non-occupational accidents"],
          },
          {
            title: "Under 8 hours/week",
            bullets: ["Occupational accidents", "Occupational disease"],
          },
          {
            title: "Benefits overview",
            bullets: ["Daily allowance", "Medical costs", "Hospital stay", "Disability and survivors’ pensions", "Supplementary accident cover"],
          },
        ],
      },
      {
        slug: "kollektive-krankentaggeldversicherung",
        title: "Collective daily sickness benefits",
        short: "Income protection for illness in your team.",
        lead: "Supports salary continuation during illness — adapted to your company.",
        sections: [
          {
            title: "Value",
            body: "We compare collective solutions that fit your size and risk profile.",
          },
        ],
      },
      {
        slug: "sach-und-haftpflichtversicherungen",
        title: "Property & liability",
        short: "Cover for operations, inventory and liability.",
        lead: "From business liability to inventory — structured clearly and compared.",
        sections: [
          {
            title: "Typical topics",
            bullets: ["Business and professional liability", "Property, inventory and transport", "Vehicle fleet"],
          },
        ],
      },
    ],
  },
  tax: {
    title: "Tax advice",
    lead: "Optimise your tax return — use lawful deductions and support objections if needed.",
    body: [
      "The tax return arrives fast each year. Many people worry deductions were missed.",
      "We complete and optimise the return, review assessments and file objections when needed.",
      "A first conversation is free.",
    ],
    pricingTitle: "Fees (demo)",
    pricing: [
      { label: "Apprentices, students and retirees", price: "CHF 35.00" },
      { label: "Individuals", price: "CHF 70.00" },
      { label: "Married couples", price: "CHF 95.00" },
      { label: "Homeowners*", price: "CHF 160.00" },
    ],
    pricingNote: "* includes 15 attachments. Extra attachments: CHF 5.– each.",
    exclusion: "Self-employed persons are excluded from this offer.",
    stepsTitle: "A few steps",
    steps: [
      "Request an appointment or a call-back",
      "Complete the contact form",
      "We contact you to plan next steps",
    ],
  },
  recommend: {
    title: "Refer us",
    lead: "Share your trust in KSAG with friends and family — and earn a referral reward.",
    reward:
      "After a successful health or life insurance policy you receive CHF 50.00 per referred person (demo offer).",
    stepsTitle: "How it works",
    steps: [
      "Fill in the referral form",
      "Send your details and the referred person’s details",
      "We contact them for advice",
      "On successful completion you receive the reward",
      "Paid to your bank account",
    ],
    important:
      "Important: participation terms apply (new customer, age 18+, etc.). Demo offer for illustration.",
    formTitle: "Send a referral",
    yourName: "Your name",
    yourEmail: "Your email",
    yourPhone: "Your phone",
    friendName: "Referred person’s name",
    friendPhone: "Referred person’s phone",
    friendEmail: "Referred person’s email",
    submit: "Send referral",
  },
  contact: {
    title: "Contact",
    lead: "Questions or personal advice? Write to us — we’re happy to help.",
    formTitle: "Contact form",
    name: "Name",
    email: "Email",
    phone: "Phone",
    topic: "Topic",
    topics: [
      "Health insurance",
      "Private insurance",
      "Business insurance",
      "Tax advice",
      "Claim",
      "General",
    ],
    message: "Message",
    infoTitle: "Contact details",
    mapTitle: "Office in Dietlikon",
    mapOpen: "Open in Google Maps",
    mapNote: "The map shows Industriestrasse 14 and is loaded from Google Maps.",
  },
  footer: {
    tagline: "Independent Swiss insurance broker.",
    privateTitle: "Private clients",
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms",
    imprint: "Imprint",
    rights: "© 2026 KSAG Insurance GmbH. All rights reserved.",
  },
  privacy: {
    title: "Privacy policy",
    lead:
      "We take personal data protection seriously — under the Swiss Federal Act on Data Protection (FADP/nDSG) and, where applicable, the EU GDPR.",
    updated: "Last updated: November 2026",
    disclaimer:
      "This text describes how KSAG Insurance GmbH handles personal data and is not a substitute for legal advice.",
    sections: [
      {
        title: "1. Controller",
        body:
          "The controller for personal data on this website is KSAG Insurance GmbH, Industriestrasse 14, 8305 Dietlikon, Switzerland. Contact: info@ksaggmbh.ch, phone +41 79 138 53 36.",
      },
      {
        title: "2. Data we process",
        body: "Depending on how you use the site, we may process:",
        bullets: [
          "Contact details (name, email, phone) from forms",
          "Advice-request details (topic, message, insurance interest)",
          "Technical data (IP address, browser, device, access time)",
          "Cookie and consent preferences",
          "If you use WhatsApp: chat content you send under WhatsApp/Meta terms",
          "When the contact-page map loads: technical data received by Google Maps (for example your IP address)",
        ],
      },
      {
        title: "3. Purposes",
        bullets: [
          "Responding to enquiries and preparing advice",
          "Operating and securing the website",
          "Improving our offering (only with consent or where lawful)",
          "Meeting legal obligations (e.g. retention, supervision)",
        ],
      },
      {
        title: "4. Legal bases",
        body:
          "Processing may be based on contract / pre-contractual steps, legitimate interests (e.g. site security), consent (e.g. optional cookies), or legal duties. Swiss FADP applies; GDPR may also apply for people in the EU/EEA.",
      },
      {
        title: "5. Sharing with third parties",
        body:
          "We share data only when needed for the stated purposes, with your consent, or where required by law. Possible recipients: hosting/IT providers, insurers in a concrete brokerage case, WhatsApp/Meta if you use that channel, and Google when the map loads.",
      },
      {
        title: "6. Retention",
        body:
          "We keep personal data only as long as needed for the purpose or required by law. Enquiries without a contract are usually deleted or anonymised after correspondence ends, unless longer retention is required.",
      },
      {
        title: "7. Cookies",
        body:
          "We use necessary cookies for site operation (e.g. language, consent). Optional analytics/marketing cookies are used only with your consent. You can change your choice anytime via cookie settings or your browser.",
      },
      {
        title: "8. Your rights",
        body: "Depending on applicable law, you may have rights to:",
        bullets: [
          "Access your personal data",
          "Rectify inaccurate data",
          "Erase data (unless retention duties apply)",
          "Restrict processing",
          "Object to certain processing",
          "Data portability (where GDPR applies)",
          "Withdraw consent for the future",
        ],
      },
      {
        title: "9. Complaints",
        body:
          "You may lodge a complaint with the competent authority. In Switzerland this is the Federal Data Protection and Information Commissioner (FDPIC). For EU/EEA matters, also your local supervisory authority.",
      },
      {
        title: "10. Security",
        body:
          "We apply appropriate technical and organisational measures against loss, misuse and unauthorised access. Absolute security on the internet cannot be guaranteed.",
      },
      {
        title: "11. Privacy contact",
        body:
          "For privacy questions email info@ksaggmbh.ch or use the contact form. We usually reply within a few business days.",
      },
    ],
  },
  imprint: {
    title: "Imprint",
    lead: "Company information for KSAG Insurance GmbH.",
    sections: [
      {
        title: "Company",
        bullets: [
          "KSAG Insurance GmbH",
          "Limited liability company (GmbH)",
          "Industriestrasse 14",
          "8305 Dietlikon",
          "Switzerland",
        ],
      },
      {
        title: "Commercial register",
        bullets: [
          "UID: CHE-470.839.062",
          "Commercial register no.: CH-020.4.060.855-4",
          "Commercial Register of the Canton of Zurich",
          "Entered: 1 March 2017",
          "Share capital: CHF 20,000",
        ],
      },
      {
        title: "Management",
        bullets: [
          "Granit Delija, shareholder and chairman of the management, single signature",
          "Adem Delija, managing director, single signature",
        ],
      },
      {
        title: "Contact",
        bullets: [
          "Email: info@ksaggmbh.ch",
          "Mobile: +41 79 138 53 36",
          "Landline: +41 43 819 19 91",
          "Mobile: +41 79 759 73 14",
          "Monday–Friday: 08:00–18:00",
          "Saturday: 10:00–14:00",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie settings",
    body:
      "We use necessary cookies for operation and language. “Accept” also allows optional demo cookies. See the privacy policy for details.",
    accept: "Accept",
    essential: "Essential only",
    link: "Privacy",
  },
  whatsappLabel: "Chat on WhatsApp",
  trust: {
    label: "Advice",
    stats: [
      { value: "164", label: "Firms and partners" },
      { value: "1,700", label: "Clients and contacts" },
      { value: "1,200", label: "Consultations held" },
    ],
    items: [
      "Health insurance",
      "Pensions",
      "Motor and household",
      "Loans and mortgages",
      "Business clients",
    ],
  },
};
