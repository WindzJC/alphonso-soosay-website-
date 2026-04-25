
export const seo = {
  siteDescription:
    "The official author website for Alphonso Soosay and My Passion “Audio Awareness”, a practical book on audio recording, live sound, and room acoustics.",
  home: {
    title: "Home",
    description:
      "Explore Alphonso Soosay and My Passion “Audio Awareness”, a practical guide to audio recording, live sound, room acoustics, and clearer audio decisions.",
  },
  about: {
    title: "About Alphonso Soosay",
    description:
      "Learn about Alphonso Soosay, author of My Passion “Audio Awareness”, and his practical focus on recording, live sound, and room acoustics.",
  },
  books: {
    title: "Books by Alphonso Soosay",
    description:
      "Explore My Passion “Audio Awareness” by Alphonso Soosay, including published editions focused on audio recording, live sound, and room acoustics.",
  },
  media: {
    title: "Media & Videos",
    description:
      "Watch selected media connected to Alphonso Soosay and My Passion “Audio Awareness”.",
  },
  contact: {
    title: "Contact Alphonso Soosay",
    description:
      "Contact Alphonso Soosay for book inquiries, media requests, and messages related to My Passion “Audio Awareness”.",
  },
} as const;

export const siteConfig = {
  name: "Alphonso Soosay",
  title: "Author · Musician · Sound Recording Engineer",
  description: seo.siteDescription,
  url: "https://placeholder.invalid",
  ogImage: "[OG_IMAGE]",
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Books", href: "/books" },
    { label: "Media", href: "/media" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: [
    { label: "About", href: "/about" },
    { label: "Books", href: "/books" },
    { label: "Media", href: "/media" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const headerContent = {
  eyebrow: siteConfig.name,
  title: "Author · Musician · Sound Recording Engineer",
  ctaLabel: "Explore the Book",
} as const;

export const footerContent = {
  eyebrow: siteConfig.name,
  body:
    "Practical audio knowledge for musicians, students, performers, event teams, and readers who want to better understand sound.",
} as const;

export const placeholderImageContent = {
  placeholderBadge: "Asset Needed",
  portraitBadge: "Portrait Needed",
  suppliedLabel: "Image pending",
  approvedLabel: "Image pending",
} as const;

export const bookEditions = [
  {
    title:
      "My Passion “Audio Awareness”: It’s All About “Audio Recording” & “Live Sound” Experience",
    coverSrc: "/assets/images/my-passion-audio-awareness-cover.gif",
    coverAlt: "Book cover for My Passion Audio Awareness by Alphonso Soosay",
    isbn13: "9781524518752",
    isbn10: "1524518751",
    publisher: "Xlibris / Xlibris AU",
    published: "November 16, 2016",
    pages: "612",
    topics: ["Audio recording", "Live sound", "Room acoustics"],
    links: [
      {
        label: "Amazon",
        href: "https://www.amazon.com/Passion-Audio-Awareness-Alphonso-Soosay/dp/1524518751",
      },
      {
        label: "Apple Books",
        href: "https://books.apple.com/gb/book/my-passion-audio-awareness/id1179409745",
      },
      {
        label: "Barnes & Noble",
        href: "https://www.barnesandnoble.com/w/my-passion-audio-awareness-alphonso-soosay/1125174428",
      },
      {
        label: "Books-A-Million",
        href: "https://www.booksamillion.com/p/My-Passion-Audio-Awareness/Alphonso-Soosay/9781524518752",
      },
    ],
  },
  {
    title:
      "My Passion “Audio Awareness”: Reveals Practical Applications On “Studio Recordings”, “Concert Sound Proficiency” & “Understanding Room Acoustics”",
    coverSrc: "/assets/images/my-passion-audio-awareness-stratton-cover.jpg",
    coverAlt:
      "Book cover for My Passion Audio Awareness revised Stratton Press edition by Alphonso Soosay",
    isbn13: "9781643451497",
    isbn10: "1643451499",
    publisher: "Stratton Press",
    published: "September 2018",
    format: "Paperback",
    pages: "656",
    topics: ["Studio recordings", "Concert sound proficiency", "Room acoustics"],
    links: [
      {
        label: "Amazon",
        href: "https://www.amazon.com/-/es/Alphonso-Soosay/dp/1643451499",
      },
      {
        label: "Amazon Australia",
        href: "https://www.amazon.com.au/Passion-Audio-Awareness-Applications-Understanding/dp/1643451499",
      },
      {
        label: "Amazon Singapore",
        href: "https://www.amazon.sg/Passion-Audio-Awareness-Applications-Understanding/dp/1643451499",
      },
    ],
  },
] as const;

export const featuredBook = {
  author: siteConfig.name,
  title: "My Passion “Audio Awareness”",
  subtitle: "It’s All About “Audio Recording” & “Live Sound” Experience",
  publisher: "Xlibris / Xlibris AU",
  publishDate: "November 16, 2016",
  pageCount: "612",
  isbn13: "9781524518752",
  isbn10: "1524518751",
  topics: ["Audio recording", "Live sound", "Room acoustics"],
  coverSrc: "/assets/images/my-passion-audio-awareness-cover.gif",
  coverAlt: "Book cover for My Passion Audio Awareness by Alphonso Soosay",
  authorPortraitSrc: "/assets/images/alphonso-soosay-portrait.png",
  authorPortraitAlt: "Portrait of Alphonso Soosay",
  coverPlaceholder: "[BOOK_COVER_MY_PASSION_AUDIO_AWARENESS]",
  authorPortraitPlaceholder: "[AUTHOR_PORTRAIT]",
  coverLabel: "My Passion “Audio Awareness”",
  authorPortraitLabel: siteConfig.name,
  retailerLinks: [
    {
      label: "Amazon",
      href: "https://www.amazon.com/Passion-Audio-Awareness-Alphonso-Soosay/dp/1524518751",
    },
    {
      label: "Apple Books",
      href: "https://books.apple.com/gb/book/my-passion-audio-awareness/id1179409745",
    },
    {
      label: "Barnes & Noble",
      href: "https://www.barnesandnoble.com/w/my-passion-audio-awareness-alphonso-soosay/1125174428",
    },
    {
      label: "Books-A-Million",
      href: "https://www.booksamillion.com/p/My-Passion-Audio-Awareness/Alphonso-Soosay/9781524518752",
    },
  ],
} as const;

export const heroContent = {
  badge: "Practical Audio Education",
  eyebrow: "Recording. Live Sound. Room Acoustics.",
  title: siteConfig.name,
  body:
    "A practical guide to audio recording, live sound, and room acoustics for musicians, students, performers, event teams, and audio enthusiasts.",
  primaryCta: "Explore the book",
  secondaryCta: "View media",
  portraitLabel: featuredBook.authorPortraitLabel,
  portraitCaption: "A portrait of Alphonso Soosay.",
  portraitFrameLabel: "Author portrait",
  featuredTitleLabel: "Featured book",
  primaryTopicsLabel: "Core subject areas",
} as const;

export const credibilityItems = [
  { label: "Featured Book", value: featuredBook.title },
  { label: "Published", value: featuredBook.publishDate },
  { label: "Pages", value: featuredBook.pageCount },
  { label: "Focus", value: "Recording, Live Sound, Room Acoustics" },
] as const;

export const featuredBookContent = {
  eyebrow: "Featured Book",
  title: "My Passion “Audio Awareness”",
  body:
    "My Passion “Audio Awareness” helps readers understand how sound is captured, shaped, reinforced, and affected by the spaces where music is recorded or performed.",
  publishedWorkLabel: "Featured Book",
  coverCaption: "The cover of My Passion “Audio Awareness”.",
  scopeEyebrow: "Inside The Book",
  scopeTitle: "Recording, live sound, and room acoustics in practical terms",
  scopeBody:
    "The book connects recording, performance sound, and room awareness so readers can make better decisions in real audio situations.",
} as const;

export const bookDetailsContent = {
  eyebrow: "Book Details",
  labels: {
    author: "Author",
    title: "Title",
    subtitle: "Subtitle",
    publisher: "Publisher",
    publishDate: "Published",
    pageCount: "Pages",
    isbn13: "ISBN-13",
    isbn10: "ISBN-10",
  },
} as const;

export const bookEditionsContent = {
  eyebrow: "Editions",
  title: "Available editions",
  body:
    "The editions below show the published versions of My Passion “Audio Awareness”, each centered on practical sound knowledge for recording, performance, and acoustic spaces.",
  formatLabel: "Format",
  publisherLabel: "Publisher",
  publishedLabel: "Published",
  pagesLabel: "Pages",
  isbn13Label: "ISBN-13",
  isbn10Label: "ISBN-10",
  topicsLabel: "Topics",
  linksLabel: "Find this edition",
} as const;

export const audienceSectionContent = {
  eyebrow: "Who The Book Is For",
  title: "For musicians, students, performers, and sound-focused readers",
  body:
    "My Passion “Audio Awareness” is written for people who want practical audio knowledge they can apply to rehearsals, recordings, performances, events, and everyday listening.",
  cards: [
    {
      title: "Musicians & Songwriters",
      body: "Understand how recording choices influence the final sound.",
    },
    {
      title: "Audio Students & School Leavers",
      body:
        "Build a clearer foundation in recording, live sound, and acoustic awareness.",
    },
    {
      title: "Bands & Performing Artists",
      body:
        "Learn how better audio decisions can support rehearsals, performances, and recordings.",
    },
    {
      title: "Studios, Churches & Event Teams",
      body:
        "Develop practical awareness of common sound problems in real rooms and live environments.",
    },
  ],
} as const;

export const learningSectionContent = {
  eyebrow: "What Readers Will Learn",
  title: "Practical audio awareness across studio, stage, and room",
  body:
    "The book focuses on how sound is captured, how it behaves in live settings, and how rooms influence what listeners hear.",
  items: [
    {
      title: "Audio Recording",
      body:
        "Gain a clearer sense of how recording choices affect tone, balance, clarity, and the final listening experience.",
    },
    {
      title: "Live Sound",
      body:
        "Build stronger awareness of how sound behaves in rehearsal rooms, performance spaces, and event environments.",
    },
    {
      title: "Room Acoustics",
      body:
        "Learn why rooms matter, how they shape what people hear, and why acoustic awareness improves audio decisions.",
    },
  ],
} as const;

export const topicGridContent = {
  description: "A core area of focus within My Passion “Audio Awareness”.",
} as const;

export const aboutPreviewContent = {
  eyebrow: "About Alphonso",
  title: "About Alphonso Soosay",
  body:
    "Alphonso Soosay is the author of My Passion “Audio Awareness”, a practical audio book focused on recording, live sound, and room acoustics.",
  portraitLabel: featuredBook.authorPortraitLabel,
  portraitCaption: "A portrait of Alphonso Soosay.",
  scopeEyebrow: "About The Work",
  scopeTitle: "Centered on practical audio education",
  scopeBody:
    "His work speaks to readers, students, musicians, event teams, and audio enthusiasts looking for grounded guidance in recording and sound awareness.",
  primaryCta: "Read about Alphonso",
  secondaryCta: "Send an inquiry",
} as const;

export const homeMediaPreviewContent = {
  eyebrow: "Media",
  title: "Videos and media connected to the book",
  body:
    "Watch selected media connected to Alphonso Soosay and My Passion “Audio Awareness”.",
  buttonLabel: "View media",
} as const;

export const mediaCardContent = {
  eyebrow: "Media Link",
  buttonLabel: "Open link",
} as const;

export const mediaLinks = [
  {
    title: "Facebook Promo HD",
    href: "[FACEBOOK_PROMO_HD_LINK]",
    body:
      "A promotional video connected to Alphonso Soosay and My Passion “Audio Awareness”.",
  },
  {
    title: "Facebook Audio Awareness Video",
    href: "[FACEBOOK_AUDIO_AWARENESS_VIDEO_LINK]",
    body:
      "A video connected to the book and its practical audio-awareness message.",
  },
] as const;

export const contactCtaContent = {
  eyebrow: "Contact",
  title: "Connect with Alphonso",
  body:
    "For book inquiries, media requests, or messages related to My Passion “Audio Awareness”, use the contact page to get in touch.",
  primaryCta: "Contact Alphonso",
  secondaryCta: "View media",
} as const;

export const aboutPageContent = {
  eyebrow: "About",
  title: "About Alphonso Soosay",
  body:
    "Alphonso Soosay is the author of My Passion “Audio Awareness”, a practical audio book focused on recording, live sound, room acoustics, and clearer listening.",
  aside:
    "A practical introduction for readers who want to understand the audio-focused work behind the book.",
  portraitLabel: featuredBook.authorPortraitLabel,
  portraitCaption: "A portrait of Alphonso Soosay.",
  cardEyebrow: "Author Focus",
  cardTitle: "Built around practical audio understanding",
  cardBody:
    "The book focuses on how sound is captured, how it behaves in live settings, and how room awareness shapes better audio decisions.",
  primaryCta: "Review book details",
  secondaryCta: "Send an inquiry",
  focusEyebrow: "Focus",
  focusTitle: "Recording, live sound, and room acoustics",
  focusBody:
    "This introduction is anchored to the book’s central subjects and the audiences most likely to benefit from them.",
} as const;

export const booksPageContent = {
  eyebrow: "Books",
  title: "My Passion “Audio Awareness”",
  body:
    "Explore Alphonso Soosay’s practical audio book and its published editions, each focused on recording, live sound, and acoustic understanding.",
  topicsEyebrow: "Primary Topics",
  topicsTitle: "Audio-centered themes for practical readers",
  topicsBody:
    "The book is organized around the subject areas most relevant to musicians, students, performers, event teams, and sound-focused readers.",
} as const;

export const mediaPageContent = {
  eyebrow: "Media",
  title: "Media & Videos",
  body:
    "Explore selected media connected to Alphonso Soosay and My Passion “Audio Awareness”.",
  aside:
    "Selected video links for readers, presenters, and contacts interested in the book.",
  linksEyebrow: "Links",
  linksTitle: "Videos connected to the book",
  linksBody:
    "These videos introduce the book and its practical audio-awareness message.",
  portraitLabel: featuredBook.authorPortraitLabel,
  portraitCaption: "Author image.",
  coverLabel: featuredBook.coverLabel,
  coverCaption: "Book cover.",
  inquiriesEyebrow: "Media Inquiries",
  inquiriesTitle: "Reach out through the contact page",
  inquiriesBody:
    "For interviews, appearances, and book-related correspondence, use the contact page to get in touch.",
  inquiriesCta: "Open contact page",
} as const;

export const contactPageContent = {
  eyebrow: "Contact",
  title: "Get in touch",
  body:
    "Use the contact form for reader notes, media requests, speaking interest, and messages related to the book.",
} as const;

export const contactFormContent = {
  panelEyebrow: "Contact",
  panelTitle: "Reader, media, and book-related inquiries",
  panelBody:
    "The form is available for readers, musicians, organizers, and media contacts who want to reach out about the book and its subject matter.",
  notes: [
    "Reader notes, interview requests, and speaking inquiries are welcome.",
    "Messages may relate to recording, live sound, room acoustics, or the book itself.",
  ],
  formAction: "[CONTACT_FORM_ENDPOINT]",
  fields: {
    name: { label: "Full name", placeholder: "Full name" },
    email: { label: "Email address", placeholder: "Email address" },
    subject: { label: "Subject", placeholder: "Subject" },
    message: { label: "Message", placeholder: "Your message" },
  },
  submitLabel: "Submit Inquiry",
  secondaryCta: "View the book page",
} as const;
