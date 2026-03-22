export const heroData = {
  availability: 'Available',
  status: 'System Initialized',
  titlePrefix: 'Marcos Cunha //',
  titleHighlight: 'Fullstack Engineer & AI Pioneer',
  summary:
    'Fullstack Developer with strong expertise in React, Java ecosystems, Cloud, and DevOps. Strong ownership mindset, fluent English, and a proven ability to take ideas from product discussion to reliable customer-focused delivery.',
  primaryAction: { label: 'Explore My Work', href: '#deployments' },
  secondaryAction: { label: 'Download CV', href: '#contact' },
  indicators: ['React', 'Cloud & DevOps', 'End-to-End Ownership'],
  spotlightLabel: 'Signature Strength',
  spotlightTitle: 'End-to-End Feature Ownership',
  spotlightSummary:
    'From the initial product idea through research, implementation, validation, and final delivery.',
  footerStatus: 'Fluent English',
  floatingCardLabel: 'Role',
  floatingCardValue: 'Fullstack Developer',
  portrait:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA1gE-r9Nem3uHisRF9TYOtbff-Vh354obRI5QiSz0t8vAx87rqY6f11kdUfDIpnmQaK0Fhp2QeMw8iVIm-YmVea9nYqc0czafoFFPkC-NT6kezP-d2CTJngOzlp_D4r-HYGh-wVpR2z4OFEk7fhYZYE5bSny411ILMDNq3mzbYSGukVzr6_1Iv7z8kHH1esBrtcvSB46TxG-6QtASSis1Mdd5wk0Lh5UMUDaoPUiVSp77s_Qz1Lj482e1IMyfS7Q4UJhSHEj0Sr44v',
}

export const capabilityGroups = {
  hero: {
    heading: 'AI & Modern Engineering',
    label: 'Next-Gen Stack',
    items: [
      {
        title: 'Prompt Engineering',
        summary:
          'Strong prompt engineering skills applied to practical development and delivery workflows.',
        tone: 'primary',
        tags: ['Chain-of-Thought', 'Few-shot'],
      },
      {
        title: 'Multi-agent Systems',
        summary:
          'Fast adaptation to new AI tools and multi-agent workflows that improve engineering throughput.',
        tone: 'secondary',
        tags: ['AI workflows', 'Productivity leverage'],
      },
      {
        title: 'AI Adoption Strategy',
        summary:
          'Uses AI as a practical lever for productivity, knowledge sharing, and engineering acceleration.',
        tone: 'tertiary',
        tags: ['RAG Pipelines', 'Governance'],
      },
    ],
  },
  frontend: {
    heading: 'Frontend Stack',
    items: [
      'React',
      'Next.js',
      'Redux',
      'Redux-Sagas',
      'Recoil',
      'HTML',
      'CSS',
      'JavaScript',
      'Frontend testing',
    ],
    badge: 'Customer-Focused UI Delivery',
  },
  backend: {
    heading: 'Backend Stack',
    items: [
      'Java',
      'Spring Boot',
      'Java Servlets',
      'Node.js',
      'TypeScript',
      '.NET Core',
      'Python',
      'Microservices architecture',
    ],
    stats: [
      { value: 'REST APIs', label: 'Core delivery layer' },
      { value: 'GraphQL', label: 'Schema-based integration' },
      { value: 'JWT / Sessions', label: 'Authentication flows' },
    ],
  },
  cloud: {
    heading: 'Cloud, DevOps & Data',
    items: [
      {
        label: 'AWS / Azure',
        detail: 'Terraform, ARM Templates, Docker, Kubernetes',
        tone: 'primary',
      },
      {
        label: 'CI / CD',
        detail:
          'GitHub Actions, Azure DevOps Pipelines, ArgoCD, Bash scripting',
        tone: 'secondary',
      },
      {
        label: 'Databases',
        detail: 'PostgreSQL, MySQL, MongoDB, Redis, DynamoDB',
        tone: 'tertiary',
      },
      {
        label: 'Search & Realtime',
        detail: 'Elasticsearch, PostGIS, HTTP, WebSockets',
        tone: 'neutral',
      },
    ],
  },
  convergence: {
    heading: 'Verified Highlights',
    summary:
      'The strongest profile signals are the ones already grounded in your work history, education, and delivery record.',
    actions: [
      { label: 'View Case Studies', href: '#deployments', tone: 'primary' },
      { label: 'Technical Resume', href: '#contact', tone: 'secondary' },
    ],
    metrics: [
      { value: '2024–Present', label: 'AgileEngine', tone: 'primary' },
      {
        value: '2021–2024',
        label: 'DTI Digital / Dev Lead',
        tone: 'secondary',
      },
      { value: '9.5/10 GPA', label: 'Information Systems', tone: 'tertiary' },
      { value: '3x OBMEP', label: 'Medalist', tone: 'neutral' },
    ],
  },
}

export const deployments = [
  {
    eyebrow: 'International Collaboration',
    title: 'AgileEngine',
    badge: 'Global Delivery',
    summary:
      'Developing scalable applications across frontend and backend environments while working with React, Java, Spring Boot, Java Servlets, CI/CD pipelines, containerized environments, and infrastructure as code.',
    focusTitle: 'Engineering Excellence',
    bullets: [
      'Delivering features with strong ownership from product idea through validation and final delivery.',
      'Collaborating with product and cross-functional teams to ensure solutions meet real customer needs.',
    ],
    tags: ['Java', 'Spring Boot', 'React', 'AWS Cloud'],
    footer: 'Software Engineering Services',
    tone: 'secondary',
  },
  {
    eyebrow: 'DTI Digital • Fullstack Developer / Dev Lead',
    title: 'DTI Digital',
    badge: 'Cross-Industry Delivery',
    summary:
      'Led development teams across multiple enterprise projects, owned key features end-to-end, and helped build a strong testing culture, CI/CD automation workflows, and architecture participation across retail, agriculture, and heavy industry.',
    focusTitle: 'Key Contributions',
    bullets: [
      'Led development teams across multiple enterprise projects.',
      'Owned and delivered key features end-to-end.',
      'Implemented a strong testing culture with very high automated coverage in major projects.',
      'Built and maintained CI/CD pipelines and automation workflows.',
      'Participated in architecture discussions and cloud solution design.',
      'Worked in fully English-speaking environments and collaborated closely with product teams and analytics tools.',
    ],
    projectTitle: 'Relevant Project Background',
    projectBullets: [
      'C&A Self-Service: React, .NET, PostgreSQL.',
      'Syngenta Digital: React, Spring Boot, Flask, Node.js, DynamoDB, AWS, MySQL.',
      'Ternium MES: React and Spring Boot solutions for the steel industry.',
      'RHI Magnesita: React, .NET, Ruby, PostgreSQL, Azure, leadership responsibilities, CI/CD, testing culture, architecture participation.',
    ],
    tags: ['Retail Tech', 'AgriTech', 'Industrial IoT', 'Leadership'],
    footer: 'Cross-Industry Digital Solutions',
    tone: 'tertiary',
  },
  {
    eyebrow: 'Academic Research • UFOP',
    title: 'UFOP Research',
    badge: 'Algorithm Optimization',
    summary:
      'Developed a distributed system for complex school bus routing problems. Optimized graph algorithms to minimize fuel consumption and travel time for public education logistics in the state of Minas Gerais.',
    focusTitle: 'Distributed Computing',
    bullets: [
      'High-performance heuristics for VRP (Vehicle Routing Problem).',
      'Parallel processing architecture for large-scale data sets.',
    ],
    tags: ['C++', 'Distributed Systems', 'Graph Theory', 'Logistics'],
    footer: 'Education Logistics Systems',
    tone: 'primary',
  },
]

export const directives = {
  intro:
    'The strongest patterns in my work are grounded in ownership, end-to-end delivery, clear collaboration, and practical modern engineering.',
  ownership: {
    label: 'Core Principle',
    title: 'Ownership',
    quote: 'Strong ownership of assigned features and responsibilities.',
    summary:
      'Focused on building the right solution at the right time, not just shipping code.',
  },
  delivery: {
    title: 'End-to-End Delivery',
    summary:
      'Able to take a feature from the initial product idea all the way to a final working solution.',
    bullets: [
      'understanding the original product need',
      'validating assumptions early',
      'discussing trade-offs with product and engineering teams',
      'validating continuously during development',
    ],
  },
  collaboration: {
    label: 'Execution Style',
    title: 'Autonomy & Collaboration',
    summary:
      'Highly independent and comfortable researching unfamiliar topics, while still working closely with product teams, developers, and stakeholders.',
    stats: [
      { value: 'High autonomy', label: 'Independent execution' },
      { value: 'Cross-team alignment', label: 'Clear communication' },
    ],
  },
  engineering: {
    title: 'Modern Engineering',
    items: [
      {
        title: 'AI Adoption',
        summary:
          'Created an AI agent skill repository, developed strong prompt engineering skills, and uses AI as a practical lever for productivity and knowledge sharing.',
      },
      {
        title: 'Engineering Practices',
        summary:
          'Strong testing culture, CI/CD automation, maintainability mindset, and concern for delivery efficiency without unnecessary waste.',
      },
    ],
    practicesHeading: 'Working Model',
    practices: [
      {
        title: 'AI agent skill repository',
        summary:
          'Knowledge sharing and practical AI adoption across development workflows.',
      },
      {
        title: 'Prompt engineering',
        summary:
          'Engineering acceleration through stronger tooling, faster learning, and better execution loops.',
      },
      {
        title: 'Strong testing culture',
        summary:
          'Quality-focused delivery across frontend and backend features.',
      },
    ],
  },
}
