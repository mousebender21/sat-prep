/* ====== MARINE THEME ====== */
var THEME_MARINE = [
  // MATH: ALGEBRA (5 questions)
  {
    id: "theme_marine_m1",
    domain: "Algebra",
    category: "Linear Equations",
    difficulty: 1,
    text: "A marine biologist measures dolphin population in a bay. Initially, there are 45 dolphins. Each year, the population increases by 8 dolphins. Which equation represents the population P after t years?",
    choices: [
      "P = 45 + 8t",
      "P = 45t + 8",
      "P = 8t",
      "P = 45 - 8t"
    ],
    answer: 0,
    explanation: "The initial population is 45 (constant), and 8 dolphins are added each year (8t). Therefore, P = 45 + 8t."
  },
  {
    id: "theme_marine_m2",
    domain: "Algebra",
    category: "Linear Equations",
    difficulty: 2,
    text: "A coral reef covers an area of 150 square kilometers. Scientists estimate the reef is shrinking at a rate of 2.5 square kilometers per year due to ocean acidification. In how many years will the reef cover 100 square kilometers if this trend continues?",
    choices: [
      "15 years",
      "20 years",
      "25 years",
      "30 years"
    ],
    answer: 1,
    explanation: "Set up the equation: 100 = 150 - 2.5t. Solving: 2.5t = 50, so t = 20 years."
  },
  {
    id: "theme_marine_m3",
    domain: "Algebra",
    category: "Systems of Equations",
    difficulty: 1,
    text: "Two aquarium tanks contain fish species. Tank A has 3 times as many fish as Tank B. Combined, they have 120 fish. How many fish are in Tank B?",
    choices: [
      "30 fish",
      "40 fish",
      "60 fish",
      "90 fish"
    ],
    answer: 0,
    explanation: "Let b = fish in Tank B. Then Tank A has 3b. The equation is 3b + b = 120, so 4b = 120, giving b = 30."
  },
  {
    id: "theme_marine_m4",
    domain: "Algebra",
    category: "Linear Inequalities",
    difficulty: 2,
    text: "A marine sanctuary protects an area where whale migration is monitored. Scientists want to ensure whale population stays above 250. If the current population is 280 and decreases by 5 whales per year, which inequality represents the years t when the population stays above the minimum?",
    choices: [
      "280 - 5t > 250",
      "280 + 5t > 250",
      "280 - 5t < 250",
      "5t - 280 > 250"
    ],
    answer: 0,
    explanation: "Starting at 280 and decreasing by 5 per year gives 280 - 5t. We want this to be greater than 250, so 280 - 5t > 250."
  },
  {
    id: "theme_marine_m5",
    domain: "Algebra",
    category: "Quadratic Inequalities",
    difficulty: 3,
    text: "A researcher models plankton mass (in grams) with M(t) = 2t² + 3t - 5, where t is the number of days since the study began. After how many complete days will the plankton mass first exceed 30 grams?",
    choices: [
      "3 days",
      "4 days",
      "5 days",
      "6 days"
    ],
    answer: 1,
    explanation: "Set 2t² + 3t - 5 > 30, giving 2t² + 3t - 35 > 0. Checking t = 3: 2(9) + 9 - 5 = 22, which is less than 30. Checking t = 4: 2(16) + 12 - 5 = 39, which exceeds 30. The plankton mass first exceeds 30 grams after 4 complete days."
  },

  // MATH: ADVANCED MATH (4 questions)
  {
    id: "theme_marine_m6",
    domain: "Advanced Math",
    category: "Quadratic Equations",
    difficulty: 2,
    text: "A fish tank's water volume V (in liters) follows the equation V = -2t² + 20t, where t is time in hours. At what time is the volume zero?",
    choices: [
      "t = 0 or t = 10",
      "t = 2 or t = 8",
      "t = 5",
      "t = 0 or t = 20"
    ],
    answer: 0,
    explanation: "Set V = 0: -2t² + 20t = 0. Factor: -2t(t - 10) = 0. So t = 0 or t = 10."
  },
  {
    id: "theme_marine_m7",
    domain: "Advanced Math",
    category: "Rational Expressions",
    difficulty: 2,
    text: "Ocean salinity is measured as a ratio of 35 grams of salt per 1,000 grams of seawater. A marine biologist needs exactly 105 grams of salt for an experiment. How many grams of seawater must she collect?",
    choices: [
      "2,000 grams",
      "2,500 grams",
      "3,000 grams",
      "3,500 grams"
    ],
    answer: 2,
    explanation: "Set up the proportion: 35/1,000 = 105/x. Cross-multiply: 35x = 105,000, so x = 3,000 grams of seawater."
  },
  {
    id: "theme_marine_m8",
    domain: "Advanced Math",
    category: "Exponential Functions",
    difficulty: 3,
    text: "A harmful algal bloom doubles in area every 3 days. If the initial coverage is 1 square meter, after how many days will the bloom first cover at least 32 square meters?",
    choices: [
      "10 days",
      "12 days",
      "15 days",
      "18 days"
    ],
    answer: 2,
    explanation: "The coverage after d days is 2<sup>d/3</sup>. Setting 2<sup>d/3</sup> = 32 = 2⁵, we get d/3 = 5, so d = 15 days."
  },
  {
    id: "theme_marine_m9",
    domain: "Advanced Math",
    category: "Polynomial Functions",
    difficulty: 2,
    text: "A marine reserve has a rectangular boundary. The length is 2 kilometers more than the width. If the perimeter is 24 kilometers, what is the area?",
    choices: [
      "20 km²",
      "32 km²",
      "35 km²",
      "36 km²"
    ],
    answer: 2,
    explanation: "Let w = width. Length = w + 2. Perimeter: 2w + 2(w + 2) = 24. Solving: 4w + 4 = 24, so w = 5. Length = 7. Area = 5 × 7 = 35 km²."
  },

  // MATH: PROBLEM SOLVING & DATA ANALYSIS (6 questions)
  {
    id: "theme_marine_m10",
    domain: "Problem Solving & Data Analysis",
    category: "Ratios & Proportions",
    difficulty: 1,
    text: "A marine biologist observes that for every 12 fish counted, 3 are sharks. If 240 fish were counted total, how many were sharks?",
    choices: [
      "20 sharks",
      "40 sharks",
      "60 sharks",
      "80 sharks"
    ],
    answer: 2,
    explanation: "The ratio is 3 sharks per 12 fish. Using the proportion: 3/12 = x/240. Cross-multiply: 12x = 720, so x = 60."
  },
  {
    id: "theme_marine_m11",
    domain: "Problem Solving & Data Analysis",
    category: "Percentages",
    difficulty: 2,
    text: "A coral reef covers 500 square kilometers. Scientists estimate 15% will bleach this year due to climate change. If conservation efforts can prevent bleaching in 40% of the threatened area, how many square kilometers will ultimately bleach?",
    choices: [
      "30 km²",
      "45 km²",
      "60 km²",
      "75 km²"
    ],
    answer: 1,
    explanation: "Threatened area: 15% of 500 = 75 km². Conservation saves 40% of 75 = 30 km². Area that ultimately bleaches: 75 - 30 = 45 km²."
  },
  {
    id: "theme_marine_m12",
    domain: "Problem Solving & Data Analysis",
    category: "Mean, Median, Mode",
    difficulty: 3,
    text: "A whale watching expedition recorded sightings on 6 days: 12, 15, 18, 18, 22, and x. If the median number of sightings is 18, which of the following could be the value of x?",
    choices: [
      "14",
      "16",
      "17",
      "20"
    ],
    answer: 3,
    explanation: "For 6 values, the median is the average of the 3rd and 4th values when ordered. Testing x = 20: ordered data is 12, 15, 18, 18, 20, 22, so median = (18 + 18)/2 = 18. For x = 14: 12, 14, 15, 18, 18, 22, median = (15 + 18)/2 = 16.5. For x = 16: 12, 15, 16, 18, 18, 22, median = (16 + 18)/2 = 17. For x = 17: 12, 15, 17, 18, 18, 22, median = (17 + 18)/2 = 17.5. Only x = 20 gives a median of 18."
  },
  {
    id: "theme_marine_m13",
    domain: "Problem Solving & Data Analysis",
    category: "Probability",
    difficulty: 1,
    text: "In a tide pool, there are 8 starfish, 5 crabs, and 7 sea urchins. If one creature is randomly selected, what is the probability it is a starfish?",
    choices: [
      "1/4",
      "1/5",
      "2/5",
      "5/20"
    ],
    answer: 2,
    explanation: "Total creatures: 8 + 5 + 7 = 20. Probability of selecting a starfish = 8/20 = 2/5."
  },
  {
    id: "theme_marine_m14",
    domain: "Problem Solving & Data Analysis",
    category: "Rate & Work",
    difficulty: 3,
    text: "Two filtration systems clean an aquarium. System A can filter the 180-liter tank alone in 12 hours, and System B can filter it alone in 18 hours. If both systems run simultaneously, how long will it take to filter the entire tank?",
    choices: [
      "6.5 hours",
      "7.2 hours",
      "9 hours",
      "10 hours"
    ],
    answer: 1,
    explanation: "Rate of A: 1/12 tank per hour. Rate of B: 1/18 tank per hour. Combined rate: 1/12 + 1/18 = 3/36 + 2/36 = 5/36 tank per hour. Time = 1 ÷ (5/36) = 36/5 = 7.2 hours."
  },
  {
    id: "theme_marine_m20",
    domain: "Problem Solving & Data Analysis",
    category: "Rate Problems",
    difficulty: 2,
    text: "A marine research vessel needs to reach a site 72 nautical miles away. It travels at 18 knots (nautical miles per hour) for the first 2 hours, then reduces speed to 12 knots due to rough seas. How long does the entire trip take?",
    choices: [
      "4.0 hours",
      "4.5 hours",
      "5.0 hours",
      "6.0 hours"
    ],
    answer: 2,
    explanation: "Distance in first 2 hours: 18 × 2 = 36 nautical miles. Remaining distance: 72 - 36 = 36 nautical miles. Time for remainder: 36 ÷ 12 = 3 hours. Total trip: 2 + 3 = 5.0 hours."
  },

  // MATH: GEOMETRY & TRIGONOMETRY (5 questions)
  {
    id: "theme_marine_m15",
    domain: "Geometry & Trigonometry",
    category: "Area & Volume",
    difficulty: 1,
    text: "A cylindrical aquarium tank has a radius of 2 meters and a height of 5 meters. Which expression represents its volume?",
    choices: [
      "10π m³",
      "20π m³",
      "25π m³",
      "100π m³"
    ],
    answer: 1,
    explanation: "Volume of a cylinder = πr²h = π(2)²(5) = π(4)(5) = 20π m³."
  },
  {
    id: "theme_marine_m16",
    domain: "Geometry & Trigonometry",
    category: "Coordinate Geometry",
    difficulty: 2,
    text: "A triangular marine sanctuary has vertices at coordinates (0, 0), (12, 0), and (4, 6) on a map where each unit represents 1 kilometer. What is the area of the sanctuary?",
    choices: [
      "24 km²",
      "36 km²",
      "48 km²",
      "72 km²"
    ],
    answer: 1,
    explanation: "The base along the x-axis has length 12 km and the height is the perpendicular distance from the third vertex to the base, which is 6 km. Area = (1/2) × 12 × 6 = 36 km²."
  },
  {
    id: "theme_marine_m17",
    domain: "Geometry & Trigonometry",
    category: "Distance & Midpoint",
    difficulty: 2,
    text: "A whale travels from point A at (0, 0) to point B at (3, 4) in a coordinate system measuring kilometers. What is the straight-line distance traveled?",
    choices: [
      "5 km",
      "7 km",
      "12 km",
      "25 km"
    ],
    answer: 0,
    explanation: "Using the distance formula: d = √[(3-0)² + (4-0)²] = √[9 + 16] = √25 = 5 km."
  },
  {
    id: "theme_marine_m18",
    domain: "Geometry & Trigonometry",
    category: "Angles & Triangles",
    difficulty: 1,
    text: "In a right triangle model of an underwater slope, one angle is 90° and another is 35°. What is the third angle?",
    choices: [
      "35°",
      "45°",
      "55°",
      "65°"
    ],
    answer: 2,
    explanation: "The sum of angles in a triangle is 180°. So 90° + 35° + x = 180°, giving x = 55°."
  },
  {
    id: "theme_marine_m19",
    domain: "Geometry & Trigonometry",
    category: "Trigonometric Ratios",
    difficulty: 3,
    text: "A diver descends from a boat at an angle of 30° below the horizontal for 100 meters, then continues descending vertically. If the diver needs to reach a total depth of 80 meters below the surface, how many additional meters must the diver descend vertically? (sin 30° = 0.5)",
    choices: [
      "20 meters",
      "30 meters",
      "40 meters",
      "50 meters"
    ],
    answer: 1,
    explanation: "During the angled descent, the vertical component is 100 × sin(30°) = 100 × 0.5 = 50 meters. The diver needs 80 meters total depth, so additional vertical descent = 80 - 50 = 30 meters."
  },

  // READING & WRITING: CRAFT AND STRUCTURE (5 questions)
  {
    id: "theme_marine_r1",
    domain: "Reading & Writing",
    category: "Craft and Structure",
    difficulty: 1,
    text: "Which choice best describes the primary purpose of the first paragraph in a passage about marine conservation initiatives?",
    choices: [
      "To provide statistical evidence of ocean decline",
      "To introduce the central topic and its importance",
      "To refute common misconceptions about conservation",
      "To describe specific conservation techniques in detail"
    ],
    answer: 1,
    explanation: "The primary purpose of an opening paragraph is typically to introduce the topic and establish its significance for the reader."
  },
  {
    id: "theme_marine_r2",
    domain: "Reading & Writing",
    category: "Craft and Structure",
    difficulty: 2,
    text: "The author uses the phrase 'silent sentinels of the deep' to describe bioluminescent creatures. This phrase primarily serves to:",
    choices: [
      "Define the scientific classification of bioluminescent organisms",
      "Compare creatures that glow to those that do not",
      "Convey the mysterious and observant nature of deep-sea life",
      "Argue that deep-sea creatures should be protected by law"
    ],
    answer: 2,
    explanation: "This metaphorical phrase conveys imagery and emotion—'silent' (mysterious, quiet), 'sentinels' (observers, guardians), and 'deep' (unknown)—creating a sense of wonder rather than making literal scientific or legal claims."
  },
  {
    id: "theme_marine_r3",
    domain: "Reading & Writing",
    category: "Craft and Structure",
    difficulty: 2,
    text: "How does the author organize information about coral bleaching in the passage?",
    choices: [
      "By comparing past bleaching events to recent ones",
      "By listing the geographic locations affected in chronological order",
      "By explaining the causes first, then the effects and solutions",
      "By alternating between expert opinions and scientific data"
    ],
    answer: 2,
    explanation: "A logical organizational structure moves from causes (why bleaching happens) through effects (what happens) to solutions (how to address it), helping readers understand the problem systematically."
  },
  {
    id: "theme_marine_r4",
    domain: "Reading & Writing",
    category: "Craft and Structure",
    difficulty: 3,
    text: "The passage on whale communication uses technical terminology like 'echolocation' and 'infrasound.' What is the effect of this word choice?",
    choices: [
      "It makes the passage inaccessible to general readers",
      "It establishes scientific credibility and precision",
      "It suggests the author is showing off specialized knowledge",
      "It unnecessarily complicates information that should be simple"
    ],
    answer: 1,
    explanation: "Using precise technical terms establishes the author's credibility and expertise, and conveys information with scientific accuracy—even when the passage may also explain these terms for readers unfamiliar with them."
  },
  {
    id: "theme_marine_r5",
    domain: "Reading & Writing",
    category: "Craft and Structure",
    difficulty: 2,
    text: "Which sentence from the passage best serves as a topic sentence for the paragraph about marine protected areas?",
    choices: [
      "The first sentence, which introduces the definition of protected areas",
      "The middle sentence, which provides an example of a specific marine reserve",
      "The sentence that connects protected areas to broader conservation goals",
      "The final sentence, which summarizes research findings about protection effectiveness"
    ],
    answer: 0,
    explanation: "A topic sentence typically appears first in a paragraph and introduces the main idea. The sentence that defines protected areas would establish what the paragraph is about."
  },

  // READING & WRITING: INFORMATION AND IDEAS (5 questions)
  {
    id: "theme_marine_r6",
    domain: "Reading & Writing",
    category: "Information and Ideas",
    difficulty: 1,
    text: "Based on the passage about ocean plastic pollution, which statement is best supported by the text?",
    choices: [
      "Plastic pollution is the only threat to marine ecosystems",
      "Microplastics are found in marine animals and are increasing in ocean water",
      "Banning all plastic products will completely solve ocean pollution",
      "Developing countries are responsible for most ocean plastic"
    ],
    answer: 1,
    explanation: "A well-supported claim is one directly stated or strongly implied by evidence in the passage. Generic statements like 'only threat' or absolute claims like 'completely solve' are typically unsupported."
  },
  {
    id: "theme_marine_r7",
    domain: "Reading & Writing",
    category: "Information and Ideas",
    difficulty: 2,
    text: "The author cites a 2023 study showing that 90% of coral reefs could experience severe bleaching by 2050. What is the primary function of this evidence in the passage?",
    choices: [
      "To prove that coral reefs are already extinct",
      "To support the claim that coral bleaching is an urgent threat requiring action",
      "To demonstrate that scientists always make accurate predictions",
      "To show that coral reefs are located primarily in warm waters"
    ],
    answer: 1,
    explanation: "Statistical evidence about future projections is used to support arguments about urgency and the need for intervention—not to prove something is already extinct or to validate all predictions."
  },
  {
    id: "theme_marine_r8",
    domain: "Reading & Writing",
    category: "Information and Ideas",
    difficulty: 2,
    text: "According to the passage on sea turtle nesting, what is the relationship between beach erosion and turtle reproduction?",
    choices: [
      "Beach erosion eliminates nesting habitat, reducing turtle breeding success",
      "Beach erosion increases the number of available nesting sites",
      "Turtles are unaffected by beach erosion but are threatened by pollution",
      "Beach erosion and turtle reproduction are unrelated phenomena"
    ],
    answer: 0,
    explanation: "If a passage discusses sea turtle nesting and beach erosion together, it typically establishes that erosion reduces suitable nesting beaches, directly impacting turtle populations' ability to reproduce."
  },
  {
    id: "theme_marine_r9",
    domain: "Reading & Writing",
    category: "Information and Ideas",
    difficulty: 3,
    text: "The passage mentions that sharks are often portrayed negatively in media, yet states that 'humans kill 100 million sharks annually while shark attacks claim fewer than 10 human lives per year.' What inference can be made from this comparison?",
    choices: [
      "Sharks are more dangerous than humans",
      "Humans pose a greater threat to sharks than sharks do to humans",
      "Media portrayals of sharks are based entirely on statistics",
      "Shark attacks are increasing in frequency each year"
    ],
    answer: 1,
    explanation: "Comparing death tolls in opposite directions (100 million shark deaths vs. fewer than 10 human deaths) supports the inference that humans are actually the greater threat—contradicting the negative media portrayals mentioned earlier."
  },
  {
    id: "theme_marine_r10",
    domain: "Reading & Writing",
    category: "Information and Ideas",
    difficulty: 3,
    text: "The passage on mangrove restoration argues that restored mangroves support fish populations as well as native forests. What does this information suggest about the purpose of the restoration efforts?",
    choices: [
      "To replace native forests with mangroves entirely",
      "To demonstrate that restoration is unnecessary since mangroves grow naturally",
      "To show that restoration can recover both ecological and economic benefits for coastal communities",
      "To prove that mangroves are superior to all other forest types"
    ],
    answer: 2,
    explanation: "Showing that restoration supports both fish populations and forest characteristics suggests the efforts recover ecological benefits (biodiversity, habitat) and likely economic benefits (fisheries), supporting comprehensive restoration goals."
  },

  // READING & WRITING: STANDARD ENGLISH CONVENTIONS (5 questions)
  {
    id: "theme_marine_r11",
    domain: "Reading & Writing",
    category: "Standard English Conventions",
    difficulty: 1,
    text: "Which sentence uses correct subject-verb agreement?",
    choices: [
      "The coral bleaching events is becoming more frequent.",
      "The group of marine biologists study ocean temperatures.",
      "The whale populations have declined significantly in recent decades.",
      "The report on ocean temperatures show a warming trend."
    ],
    answer: 2,
    explanation: "In choice C, 'populations' (plural) correctly agrees with 'have' (plural verb). In choice A, 'events' (plural) requires 'are,' not 'is.' In choice B, 'group' (singular collective noun) requires 'studies.' In choice D, 'report' (singular) requires 'shows,' not 'show.'"
  },
  {
    id: "theme_marine_r12",
    domain: "Reading & Writing",
    category: "Standard English Conventions",
    difficulty: 2,
    text: "Which sentence has an incorrect comma usage?",
    choices: [
      "The ocean, which covers 71% of Earth's surface, is home to millions of species.",
      "Marine biologists discovered new species, and they are conducting further research.",
      "Coral reefs provide habitat for fish, crustaceans, and mollusks.",
      "Deep-sea creatures unlike shallow-water fish, are adapted to high pressure."
    ],
    answer: 3,
    explanation: "In choice D, the comma incorrectly separates the subject 'creatures' from its predicate. The correct version should be: 'Deep-sea creatures, unlike shallow-water fish, are adapted to high pressure.'"
  },
  {
    id: "theme_marine_r13",
    domain: "Reading & Writing",
    category: "Standard English Conventions",
    difficulty: 2,
    text: "Which choice correctly uses a semicolon?",
    choices: [
      "The aquarium tank needs cleaning; because algae has accumulated.",
      "Sharks migrate long distances; they travel thousands of miles annually.",
      "The research was incomplete; thus, requiring additional funding.",
      "Bioluminescence is common in deep ocean; and rare near the surface."
    ],
    answer: 1,
    explanation: "A semicolon joins two independent clauses without a conjunction. Choice B correctly connects 'Sharks migrate long distances' and 'they travel thousands of miles annually.'"
  },
  {
    id: "theme_marine_r14",
    domain: "Reading & Writing",
    category: "Standard English Conventions",
    difficulty: 2,
    text: "Which sentence uses the correct verb tense?",
    choices: [
      "When scientists arrived at the research station, the water temperature will have risen.",
      "The marine reserve protects endangered species and is preventing illegal fishing.",
      "Whale populations were declining; however, they recovered by now.",
      "If the ocean continues warming, many species will disappear."
    ],
    answer: 3,
    explanation: "Choice D correctly uses 'will disappear' (future tense) in a conditional 'if' statement. Other choices mix tenses inappropriately."
  },
  {
    id: "theme_marine_r15",
    domain: "Reading & Writing",
    category: "Standard English Conventions",
    difficulty: 2,
    text: "Which choice correctly uses a possessive pronoun?",
    choices: [
      "The dolphin protected it's calf from predators.",
      "Each sea turtle returns to their nesting beach.",
      "The marine biologists lost their equipment in the storm.",
      "The shark and it's prey disappeared into the depths."
    ],
    answer: 2,
    explanation: "Choice C correctly uses 'their' (plural possessive) to refer to 'marine biologists' (plural). 'Its' (not 'it's') should be used for the dolphin and shark."
  },

  // READING & WRITING: EXPRESSION OF IDEAS (5 questions)
  {
    id: "theme_marine_r16",
    domain: "Reading & Writing",
    category: "Expression of Ideas",
    difficulty: 1,
    text: "Which revision best improves the clarity of this sentence: 'The ocean is big and contains a lot of things, especially animals'?",
    choices: [
      "The ocean is very big and contains many living and nonliving things including animals.",
      "The ocean's vastness supports diverse ecosystems and countless animal species.",
      "The ocean contains large amounts of animals and other things that are big.",
      "The ocean is something big where many animals and things live."
    ],
    answer: 1,
    explanation: "Choice B is most precise and clear, using specific vocabulary like 'vastness,' 'ecosystems,' and 'species' while eliminating vague terms like 'things.'"
  },
  {
    id: "theme_marine_r17",
    domain: "Reading & Writing",
    category: "Expression of Ideas",
    difficulty: 2,
    text: "A passage states: 'Mangrove restoration is important. Mangroves provide habitat. Mangroves prevent erosion. Mangroves support fish.' Which revision combines these sentences most effectively?",
    choices: [
      "Mangrove restoration is important because mangroves provide habitat, prevent erosion, and support fish.",
      "Mangrove restoration is important. Mangroves are important because they provide habitat and erosion prevention and fish support.",
      "Mangroves are important for providing habitat, for preventing erosion, and for supporting fish, which is why restoration is important.",
      "Restoration of mangroves is important; mangroves provide habitat, mangroves prevent erosion, mangroves support fish."
    ],
    answer: 0,
    explanation: "Choice A uses a 'because' clause with parallel structure (three items in a list) to combine ideas efficiently and clearly."
  },
  {
    id: "theme_marine_r18",
    domain: "Reading & Writing",
    category: "Expression of Ideas",
    difficulty: 2,
    text: "Which transition word best connects these two sentences? 'Ocean warming is widely considered the primary cause of coral bleaching. _____ some researchers argue that certain coral species have developed resistance to elevated temperatures.'",
    choices: [
      "However,",
      "Therefore,",
      "Similarly,",
      "For example,"
    ],
    answer: 0,
    explanation: "The second sentence presents a finding that contrasts with the first sentence's claim about warming causing bleaching by suggesting some species resist it. 'However' correctly signals this contrast. 'Therefore' implies a logical consequence, 'Similarly' implies agreement, and 'For example' introduces an illustration."
  },
  {
    id: "theme_marine_r19",
    domain: "Reading & Writing",
    category: "Expression of Ideas",
    difficulty: 3,
    text: "Which sentence is most rhetorical in its effect and best for a persuasive essay on ocean conservation?",
    choices: [
      "Ocean conservation is a topic that many people discuss regularly.",
      "Can we afford to watch our oceans collapse while we have the power to act?",
      "Some data suggests that ocean health is declining according to recent studies.",
      "It is possible that ocean ecosystems might change in the future if conditions alter."
    ],
    answer: 1,
    explanation: "Choice B uses a rhetorical question with emotional impact and urgency to persuade readers—more compelling than the passive language in other choices."
  },
  {
    id: "theme_marine_r20",
    domain: "Reading & Writing",
    category: "Expression of Ideas",
    difficulty: 3,
    text: "A writer wants to convey that deep-sea creatures are dramatically different from surface-dwelling marine life. Which stylistic choice best achieves this purpose?",
    choices: [
      "Deep-sea creatures differ from surface-dwelling marine life.",
      "Deep-sea creatures are somewhat different than surface-dwelling marine life.",
      "In stark contrast to their surface-dwelling counterparts, deep-sea creatures represent an entirely alien world of bioluminescence, extreme pressure, and exotic adaptations.",
      "Deep-sea creatures and surface-dwelling marine life show some differences in their characteristics."
    ],
    answer: 2,
    explanation: "Choice C uses vivid imagery, parallel structure, and the metaphor 'alien world' to emphasize dramatic difference, while other choices understate or inadequately convey the contrast."
  }
];
