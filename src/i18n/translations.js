export const translations = {
  bs: {
    nav: {
      links: [
        { id: 'pocetna', label: 'Početna' },
        { id: 'usluge', label: 'Usluge' },
        { id: 'cijene', label: 'Cijene' },
        { id: 'reference', label: 'Reference' },
        { id: 'o-meni', label: 'O meni' },
        { id: 'faq', label: 'Najčešća pitanja' },
        { id: 'kontakt', label: 'Kontakt' },
      ],
      cta: 'Zatraži ponudu',
      ariaMain: 'Glavna navigacija',
      ariaMobile: 'Mobilna navigacija',
      openMenu: 'Otvori izbornik',
      closeMenu: 'Zatvori izbornik',
    },
    hero: {
      pill: 'Izrada web stranica',
      titleBefore: 'Vaša ideja zaslužuje ',
      titleAccent: 'web stranicu',
      titleAfter: ' koja radi posao za vas',
      leadBefore: 'Ja sam iza obrta ',
      leadAfter:
        ' — projektiram i razvijam brze, moderne i responzivne web stranice za obrtnike, male firme i startupe, od prve ideje do lansiranja.',
      ctaPrimary: 'Zatraži besplatnu ponudu',
      ctaSecondary: 'Pogledaj reference',
      badges: [
        { icon: 'layout', label: 'Moderan dizajn' },
        { icon: 'search', label: 'SEO spremno' },
        { icon: 'shield', label: 'Pouzdana podrška' },
      ],
      graphicAlt: 'Prikaz izrađene web stranice',
      floatCard: 'Stranica lansirana',
    },
    services: {
      eyebrow: 'Usluge',
      title: 'Sve što vam treba za snažnu online prisutnost',
      subtitle:
        'Od prve prezentacijske stranice do potpune online trgovine — biramo rješenje koje odgovara vašem poslovanju i budžetu.',
      items: [
        {
          title: 'Izrada web stranica',
          description:
            'Prezentacijske stranice skrojene prema vašem brendu — brze, moderne i optimizirane za sve uređaje.',
          icon: 'layout',
        },
        {
          title: 'Web shopovi',
          description:
            'Online trgovine s preglednim katalogom proizvoda, sigurnim plaćanjem i jednostavnim upravljanjem narudžbama.',
          icon: 'cart',
        },
        {
          title: 'Redizajn stranice',
          description:
            'Osvježite zastarjelu stranicu suvremenim dizajnom, boljim performansama i jasnijom porukom.',
          icon: 'refresh',
        },
        {
          title: 'SEO optimizacija',
          description:
            'Tehnička i on-page optimizacija kako bi vas novi klijenti lakše pronašli putem Googlea.',
          icon: 'search',
        },
        {
          title: 'Održavanje i podrška',
          description:
            'Redovita ažuriranja, sigurnosne provjere i brza tehnička podrška nakon lansiranja stranice.',
          icon: 'shield',
        },
        {
          title: 'Hosting i domena',
          description:
            'Pomoć oko odabira i postavljanja hostinga, domene te email adresa vezanih uz vaš brend.',
          icon: 'server',
        },
      ],
    },
    pricing: {
      eyebrow: 'Cijene',
      title: 'Transparentni paketi, bez skrivenih troškova',
      subtitle:
        'Orijentacijske cijene za najčešće vrste projekata. Konačna ponuda ovisi o opsegu i funkcionalnostima koje vam trebaju.',
      popularBadge: 'Najpopularnije',
      note: 'Svaki projekt je drugačiji — ako vam ne odgovara nijedan paket, javite se i pripremit ću ponudu skrojenu po mjeri.',
      plans: [
        {
          name: 'Start',
          price: '300 KM',
          period: 'od',
          description: 'Za obrtnike i osobne stranice kojima treba jasna online prezentacija.',
          features: [
            'Jednostranična (one-page) stranica',
            'Responzivan dizajn za sve uređaje',
            'Osnovna SEO optimizacija',
            'Kontakt forma',
            '1 krug revizija dizajna',
          ],
          highlighted: false,
          cta: 'Zatraži ponudu',
        },
        {
          name: 'Business',
          price: '600 KM',
          period: 'od',
          description: 'Za firme kojima treba više sadržaja, stranica i prostora za rast.',
          features: [
            'Do 5 podstranica',
            'Responzivan dizajn za sve uređaje',
            'Napredna SEO optimizacija',
            'Kontakt forma i Google karta',
            'Povezivanje s društvenim mrežama',
            '2 kruga revizija dizajna',
            '30 dana besplatne podrške',
          ],
          highlighted: true,
          cta: 'Zatraži ponudu',
        },
        {
          name: 'Web shop',
          price: '1.000 KM',
          period: 'od',
          description: 'Za online prodaju proizvoda ili usluga s punom kontrolom nad trgovinom.',
          features: [
            'Neograničen broj proizvoda',
            'Sistem za online plaćanje',
            'Upravljanje narudžbama i zalihama',
            'Napredna SEO optimizacija',
            'Kratka edukacija za samostalan rad',
            '60 dana besplatne podrške',
          ],
          highlighted: false,
          cta: 'Zatraži ponudu',
        },
      ],
    },
    portfolio: {
      eyebrow: 'Reference',
      title: 'Vrste projekata koje razvijam',
      subtitle:
        'Portfelj se stalno puni novim projektima — ovo su tipovi rješenja koje mogu izraditi za vaše poslovanje.',
      items: [
        {
          category: 'Ugostiteljstvo',
          title: 'Prezentacijska stranica restorana',
          description: 'Jednostranična stranica s jelovnikom, galerijom i rezervacijom stola.',
          tags: ['React', 'Responzivno', 'SEO'],
        },
        {
          category: 'Frizerski salon',
          title: 'Stranica s online zakazivanjem',
          description: 'Prikaz usluga i cjenika uz jednostavan obrazac za zakazivanje termina.',
          tags: ['React', 'Booking forma'],
        },
        {
          category: 'Zanatska radnja',
          title: 'Predstavljanje obrta i usluga',
          description: 'Portfolio radova, reference klijenata i kontakt forma za upite.',
          tags: ['Portfolio', 'Responzivno'],
        },
        {
          category: 'Web shop',
          title: 'Online prodaja ručnih proizvoda',
          description: 'Katalog proizvoda, košarica i sigurno online plaćanje.',
          tags: ['E-commerce', 'Plaćanje online'],
        },
        {
          category: 'Osobni brend',
          title: 'Portfolio stranica',
          description: 'Minimalistička stranica za predstavljanje radova i usluga freelancera.',
          tags: ['Portfolio', 'Minimalizam'],
        },
        {
          category: 'Udruga',
          title: 'Informativna stranica udruge',
          description: 'Predstavljanje misije, novosti i kontakt informacija za članove.',
          tags: ['CMS', 'Responzivno'],
        },
      ],
    },
    about: {
      pill: 'O meni',
      title: 'Iza NerKod stoji jedan developer — ja.',
      paragraphs: [
        'Obrt NerKod nastao je iz želje da manji biznisi i obrtnici dobiju web stranicu kakvu inače imaju samo velike firme — brzu, preglednu i napravljenu s razumijevanjem za njihov posao, a ne generičku predložak stranicu.',
        'Svakom projektu pristupam osobno, od prvog razgovora do lansiranja, s ciljem da stranica zaista odgovara vašim ciljevima — ne samo da lijepo izgleda.',
      ],
      values: [
        {
          title: 'Direktna komunikacija',
          description: 'Bez posrednika i bez žargona — dogovaramo se jasno, brzo i transparentno.',
        },
        {
          title: 'Poštivanje rokova',
          description: 'Dogovoreni datum lansiranja je obaveza, ne procjena.',
        },
        {
          title: 'Moderne tehnologije',
          description: 'Stranice gradim u Reactu — brze, stabilne i spremne za rast.',
        },
      ],
      cta: 'Popričajmo o vašem projektu',
    },
    faq: {
      eyebrow: 'Najčešća pitanja',
      title: 'Sve što vas zanima prije nego krenemo',
      subtitle: 'Niste pronašli odgovor na svoje pitanje? Slobodno se javite putem kontakt forme.',
      items: [
        {
          question: 'Koliko traje izrada web stranice?',
          answer:
            'Ovisno o opsegu projekta, izrada obično traje od 1 do 2 sedmice — od dogovora oko sadržaja i dizajna do lansiranja stranice.',
        },
        {
          question: 'Kolika je cijena izrade stranice?',
          answer:
            'Cijena ovisi o broju stranica, funkcionalnostima i dizajnu. Nakon kratkog razgovora o vašim potrebama pripremam personaliziranu ponudu bez obaveze.',
        },
        {
          question: 'Mogu li sam/a kasnije uređivati sadržaj stranice?',
          answer:
            'Da. Po potrebi stranicu izrađujem s jednostavnim sistemom za upravljanje sadržajem, ili vas kratko educiram kako biste samostalno mijenjali tekst i slike.',
        },
        {
          question: 'Nudite li hosting i domenu?',
          answer:
            'Mogu pomoći oko odabira i postavljanja hostinga i domene, ili povezati novu stranicu na vaš postojeći hosting ako ga već imate.',
        },
        {
          question: 'Što ako mi zatreba izmjena nakon lansiranja?',
          answer:
            'Svaki paket uključuje određeni broj besplatnih izmjena nakon lansiranja. Nakon toga dostupno je mjesečno održavanje ili obračun po dogovoru.',
        },
        {
          question: 'Kako izgleda proces saradnje?',
          answer:
            'Krećemo kratkim razgovorom o cilju stranice, zatim slijedi prijedlog dizajna, izrada, krug revizija i na kraju lansiranje uz kratku obuku za korištenje.',
        },
      ],
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Razgovarajmo o vašem projektu',
      subtitle: 'Ispunite formu ili se javite direktno — obično odgovaram u roku od jednog radnog dana.',
      emailLabel: 'Email',
      phoneLabel: 'Telefon',
      locationLabel: 'Lokacija',
      form: {
        nameLabel: 'Ime i prezime',
        namePlaceholder: 'Vaše ime',
        emailLabel: 'Email',
        emailPlaceholder: 'vas@email.com',
        messageLabel: 'Poruka',
        messagePlaceholder: 'Recite mi nešto o vašem projektu...',
        submit: 'Pošalji poruku',
        success: 'Hvala na poruci! Javit ću vam se uskoro na uneseni email.',
      },
    },
    footer: {
      tagline: 'Izrada web stranica i web shopova za obrtnike, male firme i startupe.',
      navHeading: 'Navigacija',
      contactHeading: 'Kontakt',
      rights: 'Sva prava pridržana.',
    },
    contactInfo: {
      email: 'contact@nerkod.com',
      phone: '+387 62 512 435',
      location: 'Bosna i Hercegovina · rad na daljinu',
    },
  },

  en: {
    nav: {
      links: [
        { id: 'pocetna', label: 'Home' },
        { id: 'usluge', label: 'Services' },
        { id: 'cijene', label: 'Pricing' },
        { id: 'reference', label: 'Portfolio' },
        { id: 'o-meni', label: 'About' },
        { id: 'faq', label: 'FAQ' },
        { id: 'kontakt', label: 'Contact' },
      ],
      cta: 'Get a Quote',
      ariaMain: 'Main navigation',
      ariaMobile: 'Mobile navigation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    hero: {
      pill: 'Web Development',
      titleBefore: 'Your idea deserves a ',
      titleAccent: 'website',
      titleAfter: ' that works for you',
      leadBefore: "I run ",
      leadAfter:
        ' — I design and build fast, modern, responsive websites for tradespeople, small businesses and startups, from the first idea to launch.',
      ctaPrimary: 'Get a Free Quote',
      ctaSecondary: 'View Portfolio',
      badges: [
        { icon: 'layout', label: 'Modern Design' },
        { icon: 'search', label: 'SEO Ready' },
        { icon: 'shield', label: 'Reliable Support' },
      ],
      graphicAlt: 'Preview of a finished website',
      floatCard: 'Website launched',
    },
    services: {
      eyebrow: 'Services',
      title: 'Everything you need for a strong online presence',
      subtitle:
        'From a first landing page to a full online store — we pick the solution that fits your business and budget.',
      items: [
        {
          title: 'Website Development',
          description:
            'Landing pages tailored to your brand — fast, modern and optimized for every device.',
          icon: 'layout',
        },
        {
          title: 'Online Stores',
          description:
            'Online shops with a clear product catalog, secure payments and simple order management.',
          icon: 'cart',
        },
        {
          title: 'Website Redesign',
          description:
            'Refresh an outdated site with a modern design, better performance and a clearer message.',
          icon: 'refresh',
        },
        {
          title: 'SEO Optimization',
          description:
            'Technical and on-page optimization so new clients find you more easily on Google.',
          icon: 'search',
        },
        {
          title: 'Maintenance & Support',
          description:
            'Regular updates, security checks and fast technical support after your site goes live.',
          icon: 'shield',
        },
        {
          title: 'Hosting & Domain',
          description:
            'Help choosing and setting up hosting, a domain, and email addresses tied to your brand.',
          icon: 'server',
        },
      ],
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'Transparent packages, no hidden costs',
      subtitle:
        'Indicative prices for the most common project types. The final quote depends on the scope and features you need.',
      popularBadge: 'Most Popular',
      note: "Every project is different — if none of these packages fit, get in touch and I'll put together a custom quote.",
      plans: [
        {
          name: 'Start',
          price: '300 KM',
          period: 'from',
          description: 'For tradespeople and personal sites that need a clear online presence.',
          features: [
            'Single-page (one-page) site',
            'Responsive design for all devices',
            'Basic SEO optimization',
            'Contact form',
            '1 round of design revisions',
          ],
          highlighted: false,
          cta: 'Get a Quote',
        },
        {
          name: 'Business',
          price: '600 KM',
          period: 'from',
          description: 'For companies that need more content, pages and room to grow.',
          features: [
            'Up to 5 subpages',
            'Responsive design for all devices',
            'Advanced SEO optimization',
            'Contact form and Google map',
            'Social media integration',
            '2 rounds of design revisions',
            '30 days of free support',
          ],
          highlighted: true,
          cta: 'Get a Quote',
        },
        {
          name: 'Web Shop',
          price: '1,000 KM',
          period: 'from',
          description: 'For selling products or services online with full control over your store.',
          features: [
            'Unlimited products',
            'Online payment system',
            'Order and inventory management',
            'Advanced SEO optimization',
            'Short training for independent use',
            '60 days of free support',
          ],
          highlighted: false,
          cta: 'Get a Quote',
        },
      ],
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Types of projects I build',
      subtitle:
        "The portfolio keeps growing — here are the kinds of solutions I can build for your business.",
      items: [
        {
          category: 'Hospitality',
          title: 'Restaurant landing page',
          description: 'A single-page site with a menu, gallery and table reservations.',
          tags: ['React', 'Responsive', 'SEO'],
        },
        {
          category: 'Hair Salon',
          title: 'Site with online booking',
          description: 'Services and pricing overview with a simple appointment booking form.',
          tags: ['React', 'Booking Form'],
        },
        {
          category: 'Craft Business',
          title: 'Business and services showcase',
          description: 'Portfolio of work, client references and a contact form for inquiries.',
          tags: ['Portfolio', 'Responsive'],
        },
        {
          category: 'Web Shop',
          title: 'Online sale of handmade products',
          description: 'Product catalog, cart and secure online payment.',
          tags: ['E-commerce', 'Online Payment'],
        },
        {
          category: 'Personal Brand',
          title: 'Portfolio website',
          description: "A minimalist site to showcase a freelancer's work and services.",
          tags: ['Portfolio', 'Minimal'],
        },
        {
          category: 'Association',
          title: 'Association information site',
          description: 'Presenting the mission, news and contact information for members.',
          tags: ['CMS', 'Responsive'],
        },
      ],
    },
    about: {
      pill: 'About',
      title: 'Behind NerKod is one developer — me.',
      paragraphs: [
        'NerKod was born out of a wish to give small businesses and tradespeople the kind of website usually reserved for large companies — fast, clear and built with an understanding of their business, not a generic template.',
        "I approach every project personally, from the first conversation to launch, with the goal of a site that truly matches your goals — not just one that looks nice.",
      ],
      values: [
        {
          title: 'Direct Communication',
          description: 'No middlemen and no jargon — we agree on things clearly, quickly and transparently.',
        },
        {
          title: 'Respecting Deadlines',
          description: 'An agreed launch date is a commitment, not an estimate.',
        },
        {
          title: 'Modern Technology',
          description: 'I build sites in React — fast, stable and ready to grow.',
        },
      ],
      cta: "Let's talk about your project",
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Everything you want to know before we start',
      subtitle: "Didn't find an answer to your question? Feel free to reach out via the contact form.",
      items: [
        {
          question: 'How long does it take to build a website?',
          answer:
            'Depending on the scope of the project, it usually takes 1 to 2 weeks — from agreeing on content and design to launching the site.',
        },
        {
          question: 'How much does a website cost?',
          answer:
            'The price depends on the number of pages, features and design. After a short conversation about your needs I put together a personalized, no-obligation quote.',
        },
        {
          question: 'Can I edit the content myself later?',
          answer:
            'Yes. If needed, I build the site with a simple content management system, or give you a short walkthrough so you can update text and images yourself.',
        },
        {
          question: 'Do you offer hosting and a domain?',
          answer:
            'I can help choose and set up hosting and a domain, or connect the new site to your existing hosting if you already have one.',
        },
        {
          question: 'What if I need a change after launch?',
          answer:
            'Every package includes a number of free changes after launch. After that, monthly maintenance or an agreed hourly rate is available.',
        },
        {
          question: 'What does the collaboration process look like?',
          answer:
            'We start with a short conversation about the goal of the site, followed by a design proposal, development, a round of revisions and finally launch with a short training session.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk about your project",
      subtitle: "Fill out the form or reach out directly — I usually reply within one business day.",
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      form: {
        nameLabel: 'Full name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'you@email.com',
        messageLabel: 'Message',
        messagePlaceholder: 'Tell me a bit about your project...',
        submit: 'Send message',
        success: "Thanks for your message! I'll get back to you soon at the email you entered.",
      },
    },
    footer: {
      tagline: 'Building websites and online stores for tradespeople, small businesses and startups.',
      navHeading: 'Navigation',
      contactHeading: 'Contact',
      rights: 'All rights reserved.',
    },
    contactInfo: {
      email: 'contact@nerkod.com',
      phone: '+387 62 512 435',
      location: 'Bosnia and Herzegovina · remote work',
    },
  },
}

export const languages = [
  { code: 'bs', label: 'BS' },
  { code: 'en', label: 'EN' },
]
