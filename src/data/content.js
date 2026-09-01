export const navLinks = [
  { id: 'pocetna', label: 'Početna' },
  { id: 'usluge', label: 'Usluge' },
  { id: 'cijene', label: 'Cijene' },
  { id: 'reference', label: 'Reference' },
  { id: 'o-meni', label: 'O meni' },
  { id: 'faq', label: 'Najčešća pitanja' },
  { id: 'kontakt', label: 'Kontakt' },
]

export const services = [
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
]

export const pricingPlans = [
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
]

export const portfolioItems = [
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
]

export const faqItems = [
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
]

export const contactInfo = {
  email: 'kontakt@nerkod.hr',
  phone: '+387 62 512 435',
  location: 'Bosna i Hercegovina · rad na daljinu',
}
