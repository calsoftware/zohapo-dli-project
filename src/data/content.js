// Central content store for the Zohapo DLI microsite.
// All statistics and references are drawn only from the supplied source
// documents (Executive Summary, Short Justification Paragraph, Why/Who/What/How of Learning).

export const navItems = [
  { id: "home", label: "Home" },
  { id: "research", label: "Research" },
  { id: "why", label: "Why" },
  { id: "who", label: "Who" },
  { id: "what", label: "What" },
  { id: "how", label: "How" },
  { id: "assessment", label: "Assessment" },
  { id: "impact", label: "Impact" },
  { id: "implementation", label: "Implementation" },
];

// The narrative this whole site follows, in order. Surfaced on the homepage
// as a short "how to read this project" line so a first time visitor knows
// it is a learning experience design case study, not a product landing page.
export const storySteps = [
  "Research",
  "Gap",
  "Personas",
  "Outcomes",
  "Content",
  "Delivery",
  "Assessment",
  "Impact",
];

export const sectors = [
  "Cyber Security",
  "Retail",
  "Care Work",
  "Administration",
  "Customer Service",
  "Hospitality",
  "Construction",
  "Data Analysis",
  "Mechanics",
  "Electrical Work",
];

export const overview = {
  eyebrow: "Project Overview",
  heading: "One core employability journey. Many personalised sector pathways.",
  body: [
    "Zohapo is an AI powered employability readiness platform designed for training providers, employability organisations, Jobcentre linked programmes, colleges, adult learning providers and workforce development organisations.",
    "It supports learners from different sectors within a single mixed employability cohort. The core programme stays consistent for every learner, while AI personalises examples, scenarios, feedback and mock interview questions to each learner's chosen sector.",
  ],
  notList: [
    { label: "Not a job board", detail: "Zohapo does not list vacancies or match learners to live roles." },
    { label: "Not a traditional LMS", detail: "Content is not generic online learning; it is scaffolded employability coaching." },
    { label: "Not just a CV builder", detail: "CVs are one output of a wider readiness, evidence and confidence journey." },
  ],
};

export const researchStages = [
  {
    id: "desk",
    title: "Desk Based Review",
    description:
      "Research into employability provision, work readiness, learner progression and the common challenges faced by job seekers. This established the case for personalised support, stronger interview preparation and better visibility of readiness for tutors.",
  },
  {
    id: "stakeholder",
    title: "Stakeholder Informed Reflection",
    description:
      "Professional knowledge of training, assessment, learner support and employability practice, alongside likely perspectives from tutors, job coaches and provider managers. This surfaced large caseloads, mixed sector interests and limited tutor time.",
  },
  {
    id: "learner",
    title: "Learner Needs Analysis",
    description:
      "Consideration of unemployed adults, career changers, school leavers, graduates, returners and those preparing for placements, and the barriers they share: low confidence, weak interview performance, and difficulty evidencing transferable skills.",
  },
  {
    id: "persona",
    title: "Persona Development",
    description:
      "Findings were converted into six realistic learner personas, each representing an employability profile with genuine potential and motivation, but a different set of barriers to becoming work ready.",
  },
  {
    id: "design",
    title: "Design Translation",
    description:
      "Personas directly informed the Zohapo design: mobile access, voice and text input, scaffolded activities, personalised AI coaching, sector relevant examples, confidence tracking and tutor progress dashboards.",
  },
];

export const evidenceStats = [
  {
    value: "957,000",
    label: "Young people NEET",
    detail: "UK 16 to 24 year olds not in education, employment or training, late 2025.",
    citation: "Reuters, 2025",
  },
  {
    value: "12.8%",
    label: "NEET rate",
    detail: "Proportion of 16 to 24 year olds who are NEET, a significant youth transition challenge.",
    citation: "Reuters, 2025",
  },
  {
    value: "14.7%",
    label: "Youth unemployment",
    detail: "The highest rate in over a decade, with the NEET population projected to keep rising without intervention.",
    citation: "ONS / Guardian, 2026",
  },
  {
    value: "707,000",
    label: "Vacancies, lowest in 5 years",
    detail: "A more competitive vacancy market means stronger interview readiness and evidence matter more than ever.",
    citation: "ONS / Guardian, 2026",
  },
  {
    value: "57%",
    label: "Graduates in full time work",
    detail: "Only 57% of 2023 to 2024 graduates were in full time employment 15 months after finishing; 7% unemployed.",
    citation: "HESA / Times Higher Education, 2025",
  },
  {
    value: "36%",
    label: "Vacancies hit by skills shortages",
    detail: "UK skills shortages doubled between 2017 and 2022 to over half a million, accounting for 36% of all job vacancies.",
    citation: "Skills England, 2025",
  },
];

export const evidenceNarrative =
  "The need for Zohapo is strengthened by current labour market evidence. The UK continues to face a significant transition challenge, with high numbers of young people not in education, employment or training, continuing youth unemployment pressures, a more competitive vacancy market and evidence that many graduates also struggle to move smoothly into full time employment. At the same time, employers increasingly expect candidates to demonstrate broader combinations of technical, professional and transferable skills. These figures suggest that completing education or training is not always enough. Learners also need confidence, interview readiness, workplace behaviour, sector relevant examples and clear evidence of employability.";

export const evidenceFootnote =
  "Separate labour market analysis of UK online job vacancies found that demand for AI related roles grew by 21% between 2018 and 2023, while mentions of a university degree requirement for those roles fell by 15%, and research covering 65 million UK job postings found employers increasingly demand broader combinations of skills rather than isolated technical ability. Together, this reinforces Zohapo's focus on transferable skills, sector contextualisation and confidence in a changing labour market.";

export const references = [
  { source: "Reuters, 2025", detail: "UK 16 to 24 NEET figures: 957,000, or 12.8% (late 2025)." },
  { source: "Government commissioned review", detail: "Around 1 million NEET (one in eight); 60% had never held a job, versus 40% in 2005." },
  { source: "ONS / Guardian, 2026", detail: "Youth unemployment 14.7%; UK unemployment 4.9% (3 months to April 2026); vacancies 707,000, lowest in 5 years." },
  { source: "HESA / Times Higher Education, 2025", detail: "57% of 2023 to 2024 graduates in full time work 15 months on; 7% unemployed; 25% in other employment." },
  { source: "Skills England, 2025", detail: "UK skills shortages doubled between 2017 and 2022 to 500,000+, accounting for 36% of vacancies." },
  { source: "UK labour market vacancy analysis", detail: "11m UK vacancy study: AI role demand up 21% between 2018 and 2023, with degree requirement mentions down 15%. 65m UK job postings study: employers demand broader skill combinations." },
];

export const whyContext = {
  body: [
    "Zohapo is designed for training providers, employability organisations, Jobcentre linked programmes, colleges, adult learning providers and workforce development organisations that support learners into employment, placements or further career progression.",
    "The target context is not a traditional academic programme where everyone studies the same subject. It is a mixed employability cohort, where learners may already have prior training, qualifications, informal experience or sector interests, for sectors such as care, retail, hospitality, administration, construction, cyber security, data analysis, mechanics or electrical work, but still need structured support to become confident, work ready and employable.",
    "A single tutor may support twenty or more learners, each preparing for a different type of work. Generic employability sessions are often not personalised enough, while fully individualised coaching is difficult to deliver at scale. Zohapo closes that gap with AI coaching, employability assessment, workplace simulations, interview preparation, evidence gathering and tutor analytics in one platform.",
  ],
};

export const whyDrivers = [
  {
    icon: "Route",
    title: "Transition gap between training and employment",
    description: "Many learners complete training but still struggle to move confidently into work. They know employability skills in theory but struggle to apply them.",
    response: "Zohapo helps learners move from knowing about employability to demonstrating it, through realistic practice.",
  },
  {
    icon: "Users",
    title: "Lack of personalised support at scale",
    description: "Learners in one cohort may be preparing for entirely different sectors, so a generic programme cannot help everyone apply skills to their own goal.",
    response: "Zohapo personalises examples, feedback and scenarios to each learner's sector interest, automatically.",
  },
  {
    icon: "HeartHandshake",
    title: "Learner confidence and self belief",
    description: "Some learners struggle because of low confidence, interview anxiety, or difficulty explaining their own strengths.",
    response: "Zohapo lets learners practise, reflect and receive supportive feedback, building confidence gradually and privately.",
  },
  {
    icon: "Gauge",
    title: "Tutor workload and limited visibility",
    description: "Tutors may know who attended a session, but not who is genuinely becoming work ready.",
    response: "Zohapo tracks engagement, confidence, readiness scores, completed activities, evidence and intervention needs.",
  },
  {
    icon: "BarChart3",
    title: "Need for measurable outcomes",
    description: "Providers must demonstrate impact beyond attendance and completion, to funders, partners and learners themselves.",
    response: "Zohapo supports this through digital employability passports, readiness profiles, progress evidence and analytics.",
  },
];

export const learningGapStatement =
  "The main learning gap is that learners may understand employability skills generally but lack confidence, evidence, sector specific examples, interview readiness and practical workplace preparation. Learners need to move from general awareness to confident, evidenced and sector relevant work readiness.";

export const beforeAfter = [
  {
    before: "Learners know communication matters but struggle to explain it in workplace terms.",
    after: "Learners can demonstrate communication using examples from their chosen sector.",
  },
  {
    before: "Learners have life, training or volunteering experience but do not present it well.",
    after: "Learners can identify transferable skills and use them in CVs, applications and interviews.",
  },
  {
    before: "Learners feel anxious about interviews.",
    after: "Learners can practise mock interviews and improve through feedback.",
  },
  {
    before: "Learners understand workplace behaviour in theory.",
    after: "Learners can respond appropriately to workplace scenarios.",
  },
  {
    before: "Tutors struggle to monitor individual progress in mixed cohorts.",
    after: "Tutors can view engagement, confidence, readiness and evidence.",
  },
  {
    before: "Providers struggle to evidence impact.",
    after: "Providers can show measurable growth in employability readiness.",
  },
];

export const learningOutcomes = [
  "Identify personal strengths, transferable skills and areas for employability development.",
  "Explain skills, experience and career goals using clear examples relevant to a chosen sector.",
  "Demonstrate appropriate workplace behaviours in realistic scenarios involving communication, teamwork, problem solving and professionalism.",
  "Construct structured interview responses using examples from personal experience, training or sector interest.",
  "Produce a portfolio of employability evidence that demonstrates skills, reflection, interview preparation and work readiness.",
  "Evaluate and apply AI and tutor feedback to improve confidence, employability readiness and preparation for employment or placement.",
];

export const learningOutcomesAlignmentStatement =
  "The learning outcomes are aligned with the identified learning gap. The gap shows that learners may understand employability skills generally but lack confidence, evidence, sector relevant examples, interview readiness and practical workplace preparation. The outcomes therefore move learners from recognising their strengths, to explaining them clearly, demonstrating workplace behaviours, constructing interview responses, producing employability evidence and evaluating feedback to improve readiness.";

// A quick, scannable read of how varied the cohort is, shown before the
// persona tabs so the diversity is explicit without clicking through all six.
export const learnerDiversitySnapshot = [
  { value: "19 to 38", label: "Age range across the six personas" },
  { value: "6", label: "Distinct sectors, from cyber security and care to construction trades" },
  { value: "3 of 6", label: "Personas carry a declared or undeclared learning, attention or anxiety related need" },
];

export const personas = [
  {
    id: "aisha",
    name: "Aisha Bello",
    age: 26,
    sector: "Cyber Security",
    color: "blue",
    initials: "AB",
    bio: "Unemployed learner preparing for entry level cyber security work after completing an introductory course. She understands phishing awareness, password protection, access control and online safety, but has limited workplace experience and lacks confidence explaining technical knowledge to non technical people.",
    goals: [
      "Secure a junior cyber security analyst, SOC analyst or IT support role.",
      "Feel confident discussing risk awareness, confidentiality and professionalism in interviews.",
      "Build evidence that shows progress from training into employment readiness.",
    ],
    barriers: [
      "Lacks confidence speaking about technical topics formally.",
      "Uses technical terms without explaining them clearly.",
      "Struggles to structure interview answers and connect training to evidence.",
      "Worries employers expect more experience than she has.",
    ],
    technology: "Comfortable with digital tools on laptop and smartphone, but needs clear structure when using a new platform: dashboards, progress indicators and step by step tasks.",
    preferences: "Short, practical, scenario based activities using phishing emails, password safety, access control and incident reporting, with instant, specific feedback.",
    designImplications: [
      "Cyber security scenarios and voice interview practice",
      "Structured answer prompts and feedback on clarity, confidence and professionalism",
      "Help turning course activities into employability evidence",
      "Avoid assuming technical knowledge alone means she is work ready",
      "Aisha benefits from structured prompts, clear examples, predictable task steps and feedback that helps her explain technical concepts in plain English. This supports learners who may be confident with technical content but less confident with professional communication and interview explanation.",
    ],
  },
  {
    id: "john",
    name: "John Richardson",
    age: 21,
    sector: "Retail",
    color: "amber",
    initials: "JR",
    bio: "Unemployed learner preparing for entry level retail work after a short employability programme. He has informal customer facing experience, such as greeting customers, arranging stock and simple transactions, but doesn't yet recognise it as strong employability evidence.",
    goals: [
      "Secure a first stable retail role in a supermarket, fashion store or customer service environment.",
      "Show he is reliable, polite, helpful and able to communicate with customers and colleagues.",
      "Feel confident in interviews and understand what retail employers expect.",
    ],
    barriers: [
      "Lacks confidence in formal interview situations.",
      "Gives short answers even when he has relevant experience.",
      "Struggles to connect informal customer service experience to employer expectations.",
      "May disengage if learning feels too academic, long or text heavy.",
      "Has a mild specific learning difficulty linked to dyslexia. He communicates well verbally but sometimes struggles with spelling, longer written tasks and structuring application answers. This can make him avoid written employability tasks, even when he has useful customer service experience.",
    ],
    technology: "Mainly uses a smartphone with regular internet access; may not always have a laptop, so the platform must work well on mobile.",
    preferences: "Practical activities based on real retail situations, customer service scenarios, short tasks and voice based responses, with supportive instant feedback that avoids judgement.",
    designImplications: [
      "Mobile first, simple and accessible design",
      "Realistic retail scenarios with voice input and short activities",
      "Help turning informal customer service experience into employability evidence",
      "Confidence building, professional communication and interview readiness",
      "Zohapo should support John through voice input, sentence starters, simple templates, spelling support, short writing tasks and supportive feedback that focuses first on meaning, confidence and employability relevance before written accuracy.",
    ],
  },
  {
    id: "sophie",
    name: "Sophie Turner",
    age: 23,
    sector: "Administration",
    color: "violet",
    initials: "ST",
    bio: "Unemployed learner preparing for entry level administrative work. She uses email, Word, online forms and spreadsheets, but has limited formal office experience and doesn't yet see her digital and communication skills as strong employability evidence.",
    goals: [
      "Secure an entry level admin assistant role in an office, provider, business or health setting.",
      "Show she can communicate professionally, manage tasks and organise information.",
      "Feel confident completing applications and admin interview questions.",
    ],
    barriers: [
      "Lacks confidence describing skills due to limited office experience.",
      "Underestimates skills gained through training, volunteering or household responsibilities.",
      "Struggles to give detailed interview examples about organisation and time management.",
      "Feels anxious using professional language in emails or calls.",
    ],
    technology: "Uses a smartphone daily and a laptop for longer tasks; benefits from clear navigation, reminders and progress indicators.",
    preferences: "Practical activities showing how skills are used in real office situations, such as templates, step by step prompts and instant feedback on accuracy, clarity and confidence.",
    designImplications: [
      "Admin based scenarios, professional email writing and structured answer prompts",
      "Works well on both mobile and laptop",
      "Help turning basic digital skills into employability evidence",
      "Supportive feedback on professionalism, accuracy and clarity",
    ],
  },
  {
    id: "laura",
    name: "Laura Bennett",
    age: 25,
    sector: "Care Work",
    color: "teal",
    initials: "LB",
    bio: "Unemployed learner preparing for entry level care work. She has supported family members with daily routines, appointments and emotional reassurance, but isn't yet confident explaining how that experience relates to paid care work.",
    goals: [
      "Secure an entry level care assistant, support worker or healthcare support role.",
      "Show she is compassionate, reliable, patient and able to communicate respectfully.",
      "Build a record of progress that shows she is becoming ready for care work.",
    ],
    barriers: [
      "May not recognise family caring responsibilities as relevant experience.",
      "Struggles to structure interview answers about empathy, safeguarding and teamwork.",
      "Needs support understanding professional boundaries versus informal care.",
      "May feel overwhelmed by text heavy or overly formal content.",
    ],
    technology: "Mainly uses a smartphone; needs a mobile friendly platform with simple navigation and voice input for reflective or interview practice.",
    preferences: "Practical, supportive activities based on realistic care situations, such as communicating with service users and responding calmly to concerns, with feedback that is supportive rather than judgemental.",
    designImplications: [
      "Care based scenarios, voice input and supportive feedback",
      "Interview practice on dignity, respect and professional boundaries",
      "Help turning informal caring experience into employability evidence",
      "Mobile first, friendly and simple design",
    ],
  },
  {
    id: "rachel",
    name: "Rachel Morgan",
    age: 38,
    sector: "Career Returner: Technology Customer Support",
    color: "rose",
    initials: "RM",
    bio: "Career returner preparing to return to work after several years away. She previously worked in technology customer service support, but maternity leave, Covid disruption and a second pregnancy extended her time out of work. She now worries the sector has moved on without her, given the growth of chatbots, automation, remote support and AI assisted service tools.",
    goals: [
      "Return to customer service, technology support, helpdesk or client support work.",
      "Rebuild confidence in modern workplace systems, digital tools and customer expectations.",
      "Explain her employment gap positively and professionally.",
      "Show employers she is experienced, reliable, adaptable and willing to refresh her skills.",
    ],
    barriers: [
      "Lacks confidence after several years out of the workplace.",
      "Worries technology and customer support systems have changed too much.",
      "Struggles to explain her career break positively.",
      "Underestimates transferable skills from work, parenting and life responsibilities.",
      "Experiences anxiety about returning to work after a long career break. She does not have a formal learning difficulty, but she needs emotional reassurance, confidence building and gradual exposure to modern workplace tools. She worries that AI, automation, remote support systems and digital customer service platforms may have moved on without her.",
    ],
    technology: "Comfortable with everyday digital communication but less confident with newer customer service systems; benefits from plain language explanations of current tools.",
    preferences: "Supportive, practical, confidence building learning that connects previous experience to modern expectations, including voice practice, mock interviews and scenario tasks.",
    designImplications: [
      "A dedicated pathway for career returners",
      "Mock interview questions about employment gaps and adaptability",
      "Scenarios covering live chat, helpdesk tickets and AI assisted support",
      "Tutor dashboards highlighting confidence growth and return to work readiness",
      "Zohapo should support Rachel through psychologically safe feedback, repeat practice, low pressure mock interviews, confidence tracking, return to work coaching and simple explanations of modern customer service tools. The design should avoid making career returners feel outdated, judged or left behind.",
    ],
  },
  {
    id: "arjun",
    name: "Arjun Patel",
    age: 19,
    sector: "Building & Practical Trades",
    color: "emerald",
    initials: "AP",
    bio: "Unemployed learner preparing for entry level work in building, construction or property maintenance. He has informal hands on experience with repairs, painting, assembling furniture and simple maintenance, but struggles to present this confidently in interviews.",
    goals: [
      "Secure a construction labourer, maintenance assistant, facilities assistant or trainee tradesperson role.",
      "Show he is reliable, practical, safety conscious and able to follow instructions.",
      "Build confidence in interviews and understand on site expectations.",
    ],
    barriers: [
      "May not see informal practical tasks as valuable evidence.",
      "Struggles to describe skills clearly in applications or interviews.",
      "Gives short answers even with useful experience.",
      "Needs support understanding punctuality, health and safety, and teamwork expectations.",
      "Has ADHD traits and may have an undiagnosed literacy difficulty. He engages better with short, practical and visual tasks than long written activities. He may lose focus if the learning feels too text heavy, too abstract or disconnected from hands on work.",
    ],
    technology: "Mainly uses a smartphone with limited regular laptop access; benefits from a mobile friendly platform with simple navigation and visual prompts.",
    preferences: "Practical, visual, scenario based learning covering site safety, teamwork, using tools responsibly and communicating with supervisors, with clear feedback that avoids judgement.",
    designImplications: [
      "Building and maintenance scenarios with voice input and visual prompts",
      "Mobile first, simple and accessible design",
      "Help turning informal hands on experience into employability evidence",
      "Confidence building around safety awareness and reliability",
      "Zohapo should support Arjun through short activities, visual prompts, voice responses, practical scenarios, clear step by step instructions, progress nudges and immediate feedback. The platform should allow him to demonstrate practical judgement without relying only on extended written responses.",
    ],
  },
];

export const personaDesignDecisions = [
  "Mobile first design",
  "Voice and text input",
  "Short, practical activities",
  "Sector contextualisation",
  "Supportive AI coaching",
  "Scaffolded practice",
  "Confidence tracking",
  "Progress indicators",
  "Employability evidence building",
  "Tutor visibility",
  "Career returner support",
  "Practical trades friendly scenarios",
];

export const inclusiveDesignSummary = {
  heading: "Inclusive Design Implications",
  body: [
    "The learner personas show that Zohapo must be designed for real mixed employability cohorts, not idealised learners. Some learners may have declared or undeclared SpLD, dyslexia, ADHD traits, anxiety, low confidence, literacy challenges or career returner concerns. These needs directly influence the learning design.",
    "Zohapo therefore includes mobile access, voice and text options, short scaffolded activities, visual prompts, sentence starters, scenario based practice, confidence tracking, supportive AI coaching and tutor visibility. These features are not only convenience features. They are inclusive design decisions that help learners demonstrate employability readiness in ways that are accessible, practical and confidence building.",
  ],
};

export const inclusiveDesignFeatures = [
  {
    icon: "Mic",
    title: "Voice and text input",
    description: "Supports learners who find extended writing difficult.",
  },
  {
    icon: "ListChecks",
    title: "Short scaffolded activities",
    description: "Supports attention, confidence and gradual skill development.",
  },
  {
    icon: "Image",
    title: "Visual and practical prompts",
    description: "Supports learners who respond better to concrete examples and real workplace scenarios.",
  },
  {
    icon: "Bot",
    title: "Supportive AI coaching",
    description: "Allows repeated practice without embarrassment or judgement.",
  },
  {
    icon: "TrendingUp",
    title: "Confidence tracking",
    description: "Helps learners and tutors see growth over time.",
  },
  {
    icon: "UserCheck",
    title: "Tutor visibility",
    description: "Helps tutors identify learners who may need additional support, reassurance or intervention.",
  },
];

export const designConsiderations = [
  "Some learners may have SpLD, dyslexia, ADHD traits, anxiety or low confidence.",
  "Some support needs may be hidden or undeclared.",
  "Learning should not rely only on long written tasks.",
  "The design should include voice input, templates, examples, visual prompts and short tasks.",
  "The tutor dashboard should help identify learners who may need extra support.",
  "The platform should build confidence without making learners feel judged.",
  "Persona images should support inclusive representation and make the learning design feel human, diverse and realistic.",
];

export const modules = [
  {
    number: 1,
    title: "Employability Diagnostic and Learner Profile",
    objective: "Identify personal strengths, employment goals, confidence levels and areas for employability development.",
    topics: ["Learner career interest", "Target sector or job role", "Current confidence level", "Existing skills and experience", "Barriers to employment", "Personal employability readiness profile"],
    aiRole: "Acts as an employability coach, asking diagnostic questions, identifying early strengths and highlighting areas for development.",
    learnerActivity: "Completes an AI guided diagnostic conversation covering career interest, sector preference, experience, confidence, interview concerns and support needs.",
    evidenceOutput: "Personal employability profile, initial confidence score, sector interest record, identified strengths, development areas, suggested learning pathway.",
    tutorVisibility: "Sees the learner's starting point, confidence level, sector interest and where support may be needed.",
  },
  {
    number: 2,
    title: "Workplace Expectations and Professional Behaviour",
    objective: "Explain key workplace expectations, including professionalism, reliability, communication, respect and accountability.",
    topics: ["Professional behaviour", "Timekeeping and attendance", "Workplace conduct", "Respect and inclusion", "Following instructions", "Employer expectations"],
    aiRole: "Explains workplace expectations with simple examples, then adapts scenarios to the learner's sector (for example, punctuality for care, confidentiality for cyber security).",
    learnerActivity: "Completes short workplace scenarios and reflects on how they would behave in different situations.",
    evidenceOutput: "Workplace expectation reflection, scenario responses, professional behaviour evidence, readiness notes.",
    tutorVisibility: "Sees whether the learner understands basic workplace expectations and whether further coaching is needed.",
  },
  {
    number: 3,
    title: "Communication for Work",
    objective: "Demonstrate clear and appropriate communication in workplace situations relevant to the learner's chosen sector.",
    topics: ["Verbal communication", "Written communication", "Active listening", "Asking for clarification", "Explaining information clearly", "Communicating with colleagues, customers, clients or service users"],
    aiRole: "Creates sector relevant communication tasks, such as explaining a phishing risk, responding to a customer, speaking respectfully to a service user, or writing a professional email.",
    learnerActivity: "Completes communication practice through text or voice: responding to a message, explaining a task, a phone response, a short email, a verbal explanation.",
    evidenceOutput: "Communication practice responses, AI feedback on clarity, written or voice based evidence, improved communication examples.",
    tutorVisibility: "Views the learner's communication evidence, AI feedback and areas for improvement.",
  },
  {
    number: 4,
    title: "Teamwork and Workplace Relationships",
    objective: "Describe how to contribute positively to a team and respond appropriately to common workplace relationship challenges.",
    topics: ["Working with colleagues", "Supporting team goals", "Respecting different views", "Managing disagreement", "Asking for help", "Giving and receiving feedback"],
    aiRole: "Presents teamwork scenarios, such as supporting a colleague during a busy shift, a care handover, an IT incident or urgent paperwork, and helps learners reflect on their response.",
    learnerActivity: "Completes scenario based tasks and reflective prompts such as describing a time they helped someone or responded to disagreement.",
    evidenceOutput: "Teamwork reflection, workplace relationship scenario responses, examples of collaboration, AI feedback on professional judgement.",
    tutorVisibility: "Sees how the learner understands teamwork, professional boundaries and workplace relationships.",
  },
  {
    number: 5,
    title: "Problem Solving and Workplace Judgement",
    objective: "Apply problem solving and judgement to realistic workplace scenarios.",
    topics: ["Identifying a problem", "Thinking through options", "Making appropriate decisions", "Escalating concerns", "Managing pressure", "Learning from mistakes and feedback"],
    aiRole: "Generates sector based scenarios, such as escalating a suspicious email, handling a difficult customer, reporting a care concern or prioritising urgent admin tasks.",
    learnerActivity: "Works through problem solving scenarios: identifying the issue, considering actions, selecting a response, explaining reasoning, reflecting on improvement.",
    evidenceOutput: "Problem solving scenario responses, AI feedback on judgement, reflection on decision making, evidence of workplace awareness.",
    tutorVisibility: "Sees whether the learner is developing appropriate judgement and needs further support before placement or employment.",
  },
  {
    number: 6,
    title: "CV, Applications and Transferable Skills",
    objective: "Present skills, experience and achievements clearly in a CV, application or personal statement.",
    topics: ["Identifying transferable skills", "Turning informal experience into evidence", "Writing skills statements", "Matching experience to job adverts", "Improving CV content", "Preparing application responses"],
    aiRole: "Helps learners identify transferable skills and rewrite experience professionally. For example, family caring becomes evidence of responsibility, patience and communication.",
    learnerActivity: "Completes a skills discovery task, CV improvement activity, job advert matching exercise, personal statement practice and application drafting.",
    evidenceOutput: "Improved CV content, skills statement, transferable skills evidence, draft application responses, AI feedback record.",
    tutorVisibility: "Reviews how well the learner presents their skills and whether evidence is clear, relevant and sector appropriate.",
  },
  {
    number: 7,
    title: "Interview Readiness and AI Mock Interview Practice",
    objective: "Prepare and deliver structured interview responses using relevant examples from personal experience, training or sector interest.",
    topics: ["Common interview questions", "Competency based questions", "Strength based questions", "STAR answer structure", "Voice interview practice", "AI feedback on clarity, confidence, relevance and professionalism"],
    aiRole: "Acts as a mock interviewer, asking sector personalised questions, reviewing responses and giving feedback.",
    learnerActivity: "Practises mock interviews through voice or text, rehearses STAR responses, receives AI feedback and improves answers through repeated attempts.",
    evidenceOutput: "Completed mock interview responses, AI feedback record, improved answer drafts, confidence score before and after practice, interview readiness evidence.",
    tutorVisibility: "Sees the learner's interview readiness, confidence trend, AI feedback and areas needing further support.",
  },
  {
    number: 8,
    title: "Employability Passport and Readiness Review",
    objective: "Compile employability evidence and reflect on progress towards work readiness.",
    topics: ["Digital employability passport", "Reflection records", "Interview practice evidence", "Workplace scenario responses", "Confidence growth", "Tutor readiness review"],
    aiRole: "Summarises learner progress, identifies strengths, highlights remaining development areas and suggests next steps.",
    learnerActivity: "Reviews completed activities and reflects on what they've learned, how confidence has changed, and how ready they feel for work or interview.",
    evidenceOutput: "Digital employability passport, readiness profile, summary of strengths, areas for development, confidence trend, suggested next steps.",
    tutorVisibility: "Reviews the learner's overall readiness, evidence, confidence, engagement and recommended support actions.",
  },
];

export const flippedFlow = {
  before: "Learners complete self paced Zohapo activities, including AI diagnostics, scenarios, communication practice, CV tasks, mock interviews and reflections.",
  during: "The tutor uses Zohapo analytics to run a targeted, practical workshop responding to real cohort gaps and confidence trends.",
  after: "Learners return to Zohapo to improve their responses, complete follow up tasks and add evidence to their employability passport.",
  cycle: ["Zohapo learning", "AI feedback", "Tutor analytics", "Workshop intervention", "Improved learner practice", "Employability passport evidence"],
};

export const modalities = [
  {
    icon: "MonitorSmartphone",
    title: "Asynchronous Learning",
    description: "The main modality. Learners complete AI coaching, scenarios, reflections, CV tasks, interview practice and passport evidence independently, at their own pace.",
  },
  {
    icon: "Presentation",
    title: "Synchronous Learning",
    description: "Targeted tutor led workshops, informed by real data and patterns from Zohapo, not generic lectures.",
  },
  {
    icon: "UsersRound",
    title: "Social Learning",
    description: "Structured peer discussion, group reflection, role play and scenario analysis. Supportive, not exposing.",
  },
  {
    icon: "Drama",
    title: "Scenario Based Learning",
    description: "Central to Zohapo. Learners rehearse realistic workplace situations before facing them in interviews, placements or employment.",
  },
];

export const learningFormats = {
  digital: ["AI guided conversations", "Multimedia eLearning", "Short explainer content", "Infographics", "Scenario based activities", "Interactive prompts", "Reflection journals", "Audio responses", "Video responses", "CV and application templates", "Employability passport evidence"],
  workshop: ["Face to face workshops", "Virtual classrooms", "Group discussions", "Breakout rooms", "Role play", "Mock interviews", "Peer activities", "Tutor coaching", "One to one support"],
  assessment: ["AI feedback", "Tutor feedback", "Quizzes", "Scenario based assessment", "Mock interview feedback", "Reflection review", "Confidence tracking", "Readiness scoring", "Employability passport review"],
};

export const sectorPersonalisation = [
  { sector: "Cyber Security", example: "Phishing, password security, incident reporting, confidentiality" },
  { sector: "Retail", example: "Customer service, stock support, difficult customers, teamwork" },
  { sector: "Care", example: "Respectful communication, safeguarding awareness, compassion, professional boundaries" },
  { sector: "Administration", example: "Email writing, task prioritisation, accuracy, diary management" },
  { sector: "Hospitality", example: "Customer complaints, teamwork, service quality, time pressure" },
  { sector: "Construction", example: "Site behaviour, health and safety, teamwork, following instructions" },
];

export const assessmentStrategy = [
  { outcome: "LO1: Identify strengths and development areas.", assessment: "AI diagnostic conversation, self assessment and reflection journal." },
  { outcome: "LO2: Explain skills and goals using sector relevant examples.", assessment: "Skills statement activity, CV improvement task and application response practice." },
  { outcome: "LO3: Demonstrate workplace behaviours.", assessment: "Scenario based workplace simulations with AI and tutor feedback." },
  { outcome: "LO4: Construct structured interview responses.", assessment: "AI mock interview, STAR answer practice and voice based interview rehearsal." },
  { outcome: "LO5: Produce employability evidence.", assessment: "Digital employability passport and evidence portfolio." },
  { outcome: "LO6: Evaluate and apply feedback to improve readiness.", assessment: "Confidence tracking, tutor dashboard review, readiness review and improvement plan." },
];

export const bloomAlignmentStatement =
  "The learning design moves learners from recognising and explaining their employability strengths towards applying them in workplace scenarios, creating evidence and evaluating their readiness through AI and tutor feedback. This progression supports the alignment between the Why, Who, What, How and Assessment strategy.";

export const bloomTaxonomy = [
  {
    outcome: "LO1: Identify personal strengths, transferable skills and areas for employability development.",
    levels: ["Remember", "Understand", "Analyse"],
    rationale: "Learners recognise their strengths, understand their relevance and analyse areas requiring further employability development.",
  },
  {
    outcome: "LO2: Explain skills, experience and career goals using clear examples relevant to a chosen sector.",
    levels: ["Understand", "Apply"],
    rationale: "Learners explain their experience and apply it to sector relevant employment contexts.",
  },
  {
    outcome: "LO3: Demonstrate appropriate workplace behaviours in realistic scenarios involving communication, teamwork, problem solving and professionalism.",
    levels: ["Apply"],
    rationale: "Learners show how they would act in practical workplace situations.",
  },
  {
    outcome: "LO4: Construct structured interview responses using examples from personal experience, training or sector interest.",
    levels: ["Apply", "Create"],
    rationale: "Learners apply a structured method such as STAR and create improved interview responses.",
  },
  {
    outcome: "LO5: Produce a portfolio of employability evidence that demonstrates skills, reflection, interview preparation and work readiness.",
    levels: ["Create"],
    rationale: "Learners produce a portfolio that brings together evidence of skills, reflections, practice and readiness.",
  },
  {
    outcome: "LO6: Evaluate and apply AI and tutor feedback to improve confidence, employability readiness and preparation for employment or placement.",
    levels: ["Evaluate", "Apply"],
    rationale: "Learners judge feedback, decide what needs improvement and apply that feedback to strengthen readiness.",
  },
];

export const formativeAssessment = ["AI diagnostic questions", "Workplace scenario responses", "Reflection activities", "Communication practice", "CV and application improvement tasks", "Mock interview attempts", "Confidence check ins", "Short quizzes"];
export const summativeAssessment = ["Completed employability passport", "Interview readiness evidence", "Workplace scenario evidence", "Confidence progression", "Communication evidence", "Tutor review summary", "AI generated readiness profile"];

export const feedbackLayers = {
  ai: ["Immediate feedback", "Clarity", "Structure", "Confidence", "Relevance", "Professional tone", "Sector alignment", "Improvement suggestions"],
  tutor: ["Human judgement", "Learner engagement review", "Progress trend review", "Readiness score review", "Evidence quality review", "Intervention planning"],
};

// Forward looking targets for the Phase 4 pilot (see implementation.timeline),
// not claimed results. This keeps Impact measurable without inventing figures.
export const impactMetrics = [
  {
    icon: "TrendingUp",
    metric: "Confidence uplift",
    target: "Average learner confidence score rises by 25% or more between the Module 1 diagnostic and the Module 8 readiness review.",
    measure: "AI confidence scoring at each module checkpoint.",
  },
  {
    icon: "Award",
    metric: "Passport completion",
    target: "80% or more of active learners complete a full employability passport by programme end.",
    measure: "Passport evidence tracking within the platform.",
  },
  {
    icon: "Mic",
    metric: "Interview readiness",
    target: "Measurable improvement in mock interview clarity, structure and confidence across repeated attempts.",
    measure: "AI mock interview scoring compared before and after practice.",
  },
  {
    icon: "Gauge",
    metric: "Tutor responsiveness",
    target: "Tutors identify and act on cohort gaps within one workshop cycle rather than at programme end.",
    measure: "Tutor analytics dashboard and workshop planning logs.",
  },
  {
    icon: "BarChart3",
    metric: "Provider reporting",
    target: "Providers can report learner engagement, readiness and evidence to funders and stakeholders.",
    measure: "Exportable readiness and evidence summaries from the passport and analytics.",
  },
];

export const tutorIntelligence = {
  body: "Zohapo helps tutors move from reactive support to evidence informed coaching. Instead of guessing what learners need, tutors can see patterns in activity, confidence, responses and readiness, so workshops can be targeted, practical and responsive. This includes flagging learners who may benefit from additional support, reassurance or early intervention, including support needs that have not been formally declared.",
  items: ["Cohort overview", "Learner engagement", "Confidence trend", "Readiness score", "Completed activities", "Learners needing support", "Common learning gaps", "Workshop planning recommendations", "Interview readiness data", "Employability passport evidence"],
};

export const competitors = [
  {
    name: "LearnKey EmployabilityHub.AI",
    owner: "LearnKey (USA)",
    focus: "AI career finder, resume editor and mock interview coach bundled into LearnKey's own LMS.",
    strength: "Multiple AI tools; integrated into training courses.",
    gap: "Built for LearnKey's own students; no tutor dashboards or evidence portfolio.",
    differentiator: "Zohapo is sector personalised and provider agnostic, with tutor analytics LearnKey lacks.",
  },
  {
    name: "Getmee AI Coaching",
    owner: "Getmee (Australia / Global)",
    focus: "AI role play coach for communication, interviews and soft skills, with advisor dashboards.",
    strength: "Proven 20% skill gain claim; scalable; advisor dashboards.",
    gap: "Narrow focus on communication and interviews rather than a full employability curriculum.",
    differentiator: "Zohapo spans the full employability journey, with sector contextualisation and a passport.",
  },
  {
    name: "COACH (CareerVillage)",
    owner: "CareerVillage.org (USA)",
    focus: "Embeddable AI career advising widget for resume, interview and career pathway guidance.",
    strength: "API integration; research backed; no UI overhead for partners.",
    gap: "No UI or community of its own; no tutor involvement or flipped classroom support.",
    differentiator: "Zohapo combines AI coaching with a tutor facing flipped classroom workshop cycle.",
  },
  {
    name: "Bodyswaps",
    owner: "Bodyswaps (UK / France)",
    focus: "AI driven VR and web role play for soft skills, including communication, empathy and conflict resolution.",
    strength: "Highly engaging simulations with a strong evidence base.",
    gap: "VR hardware is still niche; less suited to administrative or evidence portfolio needs.",
    differentiator: "Zohapo works on any device with voice or text, and adds tutor analytics plus a passport.",
  },
  {
    name: "StandOut",
    owner: "CollegeNET (USA)",
    focus: "AI video mock interview platform with a large question bank across 200+ industries.",
    strength: "Large question bank; proven in US higher education; strong interview analytics.",
    gap: "Very narrowly focused on interviews only, with no CV, teamwork or scenario content.",
    differentiator: "Zohapo treats interviews as one module within a complete readiness journey.",
  },
  {
    name: "InterviewsBy.AI",
    owner: "InterviewsBy.ai (startup)",
    focus: "Web app generating interview questions from job descriptions, with audio and text practice.",
    strength: "Simple, low cost, tailored to the job description, with voice support.",
    gap: "Only addresses interview preparation; no support for learners without a job description to input.",
    differentiator: "Zohapo personalises by sector even without a specific job advert, for whole cohorts.",
  },
  {
    name: "Pathful CRD",
    owner: "Pathful (USA)",
    focus: "Comprehensive K to 16 career readiness platform with exploration, projects and mentorship.",
    strength: "Strong industry network of 5,000+ partners, with broad coverage from school through to adult learners.",
    gap: "No AI; general rather than deep on specific employability skills.",
    differentiator: "Zohapo is AI personalised and focused in depth on confidence, interview and evidence.",
  },
  {
    name: "Access Careers Centre",
    owner: "The Access Group (UK)",
    focus: "24/7 outplacement career platform with a CV builder, interview practice and self assessments.",
    strength: "Mature toolkit with deep corporate adoption.",
    gap: "No AI; self guided online learning; no tutor tools or modern user experience.",
    differentiator: "Zohapo is AI coached, sector aware and built around tutor led flipped workshops.",
  },
  {
    name: "SkillLab",
    owner: "SkillLab (Netherlands)",
    focus: "Mobile app capturing skills via AI profiling, generating skill profiles for counsellors.",
    strength: "Pioneering skill taxonomy; proven mission impact with disadvantaged groups.",
    gap: "Not a learning platform. No courses, scenarios or interview practice.",
    differentiator: "Zohapo turns skill discovery into practised, evidenced, interview ready behaviour.",
  },
];

export const positioningAxes = {
  xLabel: "Generic content → Personalised sector support",
  yLabel: "Self service tool → Tutor informed learning system",
  zohapoPosition: "Top right: personalised sector support, fully tutor informed.",
};

export const implementation = {
  budget: [
    { item: "Design and development", note: "UX/UI design, front end build, component library." },
    { item: "AI integration", note: "Conversational coaching, mock interview and feedback models." },
    { item: "Hosting and domain", note: "dliproject.drolajide.uk subdomain hosting, SSL and CDN." },
    { item: "Content development", note: "Module content, scenario libraries, sector packs." },
    { item: "Pilot testing", note: "Provider pilots, learner and tutor feedback cycles." },
    { item: "Ongoing support", note: "Maintenance, accessibility audits, content refresh." },
  ],
  timeline: [
    { phase: "Phase 1", title: "Design and Prototype", description: "Define LX design, personas, content map and visual identity." },
    { phase: "Phase 2", title: "Content Integration", description: "Build out the eight core modules and sector scenario libraries." },
    { phase: "Phase 3", title: "AI Coach Simulation and Dashboards", description: "Build AI coach, mock interview and tutor dashboard mock ups and prototypes." },
    { phase: "Phase 4", title: "Pilot Testing", description: "Run a pilot with a training provider cohort and tutor group." },
    { phase: "Phase 5", title: "Refinement and Launch", description: "Incorporate pilot feedback, finalise accessibility and launch." },
  ],
  team: ["Project owner", "Learning experience designer", "Front end developer", "Employability subject matter adviser", "Employability tutor", "AI implementation support", "Accessibility reviewer", "Tester"],
  technology: ["Hosting under dliproject.drolajide.uk", "React front end (static in v1)", "Mobile responsive design", "AI simulated prototype in version one", "Data privacy consideration", "Accessibility testing", "Browser testing", "Future AI integration readiness"],
  risks: [
    { risk: "Learners may have limited digital confidence.", mitigation: "Mobile first design, short activities, simple navigation and voice support." },
    { risk: "Learners may disengage if content feels generic.", mitigation: "Sector contextualisation through AI prompts and scenarios." },
    { risk: "Tutors may not use analytics effectively.", mitigation: "Clear dashboard, workshop planning prompts and simple visual indicators." },
    { risk: "AI feedback may be unsuitable without oversight.", mitigation: "Tutor review, clear boundaries and human intervention points." },
    { risk: "The website may become too text heavy.", mitigation: "Cards, diagrams, accordions, modals and visual summaries throughout." },
  ],
};

export const finalStatement =
  "Zohapo provides a scalable employability readiness solution that supports learners before, during and after tutor led workshops. It helps learners build confidence, practise workplace behaviours, prepare for interviews, evidence transferable skills and progress towards employment or placement. For tutors and providers, it creates visibility of learner engagement, gaps, readiness and evidence, making employability support more personalised, measurable and sustainable.";
