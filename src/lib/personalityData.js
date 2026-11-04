export const traits = [
  { key: "openness", label: "Openness", low: "Practical and familiar", high: "Curious and exploratory", description: "How strongly you seek novelty, abstract ideas, imagination, and unfamiliar perspectives." },
  { key: "conscientiousness", label: "Conscientiousness", low: "Flexible and unstructured", high: "Organised and persistent", description: "How you approach commitments, planning, detail, and follow-through." },
  { key: "sociability", label: "Social energy", low: "Reserved and inwardly recharged", high: "Outgoing and socially energised", description: "How much social interaction you tend to seek and how it affects your energy." },
  { key: "compassion", label: "Interpersonal compassion", low: "Direct and task-focused", high: "Empathic and people-aware", description: "How much you naturally attend to other people's feelings and needs." },
  { key: "emotionalReactivity", label: "Emotional reactivity", low: "Steady under everyday stress", high: "Strongly affected by emotional events", description: "How intensely and how long everyday stressors tend to affect your emotional state. This is not a diagnosis." },
  { key: "assertiveness", label: "Assertiveness", low: "Accommodating and cautious", high: "Direct and self-advocating", description: "How readily you express your views, needs, boundaries, and preferences." },
  { key: "independence", label: "Independence", low: "Feedback-oriented and interdependent", high: "Self-directed and self-reliant", description: "How much you rely on your own judgement and maintain a sense of self in relationships." },
  { key: "adaptability", label: "Adaptability", low: "Consistent and plan-oriented", high: "Flexible and change-ready", description: "How readily you revise plans, approaches, and opinions when circumstances change." },
];

export const questions = [
  {
    "text": "I enjoy exploring ideas even when they have no immediate practical use.",
    "trait": "openness",
    "polarity": 1
  },
  {
    "text": "I am curious about viewpoints that challenge what I already believe.",
    "trait": "openness",
    "polarity": 1
  },
  {
    "text": "I often connect ideas from unrelated subjects.",
    "trait": "openness",
    "polarity": 1
  },
  {
    "text": "I prefer familiar methods and established answers over experimenting.",
    "trait": "openness",
    "polarity": -1
  },
  {
    "text": "Imagining different possible futures comes naturally to me.",
    "trait": "openness",
    "polarity": 1
  },
  {
    "text": "I lose interest when a topic has no clear, concrete application.",
    "trait": "openness",
    "polarity": -1
  },
  {
    "text": "I follow through on commitments even when motivation fades.",
    "trait": "conscientiousness",
    "polarity": 1
  },
  {
    "text": "I break large goals into manageable steps.",
    "trait": "conscientiousness",
    "polarity": 1
  },
  {
    "text": "I usually notice details that could cause problems later.",
    "trait": "conscientiousness",
    "polarity": 1
  },
  {
    "text": "I often leave important tasks until the pressure becomes urgent.",
    "trait": "conscientiousness",
    "polarity": -1
  },
  {
    "text": "I keep track of responsibilities without needing repeated reminders.",
    "trait": "conscientiousness",
    "polarity": 1
  },
  {
    "text": "My plans often fall apart because I do not organise my time.",
    "trait": "conscientiousness",
    "polarity": -1
  },
  {
    "text": "After a busy social day, I usually feel energised rather than depleted.",
    "trait": "sociability",
    "polarity": 1
  },
  {
    "text": "I find it natural to start conversations with people I do not know.",
    "trait": "sociability",
    "polarity": 1
  },
  {
    "text": "I enjoy thinking out loud with other people.",
    "trait": "sociability",
    "polarity": 1
  },
  {
    "text": "I usually prefer a quiet setting to a lively group.",
    "trait": "sociability",
    "polarity": -1
  },
  {
    "text": "I feel comfortable being noticed in a group.",
    "trait": "sociability",
    "polarity": 1
  },
  {
    "text": "I need plenty of time alone after extended social interaction.",
    "trait": "sociability",
    "polarity": -1
  },
  {
    "text": "I try to understand what someone might be feeling before I respond.",
    "trait": "compassion",
    "polarity": 1
  },
  {
    "text": "I can disagree with someone while still treating their feelings carefully.",
    "trait": "compassion",
    "polarity": 1
  },
  {
    "text": "When someone is struggling, I notice even subtle changes in their behaviour.",
    "trait": "compassion",
    "polarity": 1
  },
  {
    "text": "I tend to dismiss emotional reactions when they seem illogical.",
    "trait": "compassion",
    "polarity": -1
  },
  {
    "text": "I consider how a decision will affect the people involved.",
    "trait": "compassion",
    "polarity": 1
  },
  {
    "text": "I find it difficult to stay patient when people express strong emotions.",
    "trait": "compassion",
    "polarity": -1
  },
  {
    "text": "A small negative interaction can affect my mood for hours.",
    "trait": "emotionalReactivity",
    "polarity": 1
  },
  {
    "text": "I replay upsetting conversations long after they have ended.",
    "trait": "emotionalReactivity",
    "polarity": 1
  },
  {
    "text": "Uncertainty in an important relationship can make me feel unsettled.",
    "trait": "emotionalReactivity",
    "polarity": 1
  },
  {
    "text": "I can usually recover my emotional balance quickly after a setback.",
    "trait": "emotionalReactivity",
    "polarity": -1
  },
  {
    "text": "I notice myself becoming tense when several things are unresolved.",
    "trait": "emotionalReactivity",
    "polarity": 1
  },
  {
    "text": "Criticism rarely stays on my mind for very long.",
    "trait": "emotionalReactivity",
    "polarity": -1
  },
  {
    "text": "I can express a different opinion even when the group disagrees.",
    "trait": "assertiveness",
    "polarity": 1
  },
  {
    "text": "I ask directly for what I need instead of hoping people will guess.",
    "trait": "assertiveness",
    "polarity": 1
  },
  {
    "text": "I can set a boundary without feeling that I must over-explain it.",
    "trait": "assertiveness",
    "polarity": 1
  },
  {
    "text": "I often stay silent even when something important needs to be said.",
    "trait": "assertiveness",
    "polarity": -1
  },
  {
    "text": "I am comfortable taking the lead when a situation needs direction.",
    "trait": "assertiveness",
    "polarity": 1
  },
  {
    "text": "I avoid speaking up because I worry about disappointing people.",
    "trait": "assertiveness",
    "polarity": -1
  },
  {
    "text": "I am comfortable making important choices without seeking approval.",
    "trait": "independence",
    "polarity": 1
  },
  {
    "text": "I keep my own interests and goals even when I am close to someone.",
    "trait": "independence",
    "polarity": 1
  },
  {
    "text": "I can spend time alone without feeling that something is missing.",
    "trait": "independence",
    "polarity": 1
  },
  {
    "text": "My confidence depends heavily on how other people respond to me.",
    "trait": "independence",
    "polarity": -1
  },
  {
    "text": "I prefer to form my own view before asking others what they think.",
    "trait": "independence",
    "polarity": 1
  },
  {
    "text": "I often change my preferences to avoid being different from people around me.",
    "trait": "independence",
    "polarity": -1
  },
  {
    "text": "I can adjust my approach when a plan stops working.",
    "trait": "adaptability",
    "polarity": 1
  },
  {
    "text": "Unexpected changes are usually manageable for me.",
    "trait": "adaptability",
    "polarity": 1
  },
  {
    "text": "I can consider new evidence without feeling that I have to defend my first opinion.",
    "trait": "adaptability",
    "polarity": 1
  },
  {
    "text": "I become frustrated when a situation does not follow the plan I expected.",
    "trait": "adaptability",
    "polarity": -1
  },
  {
    "text": "I am willing to experiment before deciding on the best method.",
    "trait": "adaptability",
    "polarity": 1
  },
  {
    "text": "I find it difficult to let go of a plan once I have committed to it.",
    "trait": "adaptability",
    "polarity": -1
  }
];

export const personalityTypes = {
  INTJ: {
    title: "The Architect",
    emoji: "🏛️",
    color: "from-violet-500 to-purple-700",
    tagline: "Imaginative and strategic thinkers, with a plan for everything.",
    description: "INTJs are analytical problem-solvers, eager to improve systems and processes with their innovative ideas. They have a talent for seeing possibilities for improvement, whether at work, at home, or in themselves. Often intellectual, INTJs enjoy logical reasoning and complex problem-solving.",
    strengths: ["Strategic thinking", "Independent", "Determined", "Innovative", "Confident"],
    weaknesses: ["Overly critical", "Dismissive of emotions", "Perfectionistic", "Socially reserved"],
    famousPeople: ["Elon Musk", "Isaac Newton", "Friedrich Nietzsche"],
    career: ["Scientist", "Engineer", "Strategist", "Professor", "Architect"],
  },
  INTP: {
    title: "The Logician",
    emoji: "🔬",
    color: "from-cyan-500 to-blue-700",
    tagline: "Innovative inventors with an unquenchable thirst for knowledge.",
    description: "INTPs are philosophical innovators, fascinated by logical analysis, systems, and design. They are preoccupied with theory, and search for the universal law behind everything they see. They want to understand the unifying themes of life, in all their complexity.",
    strengths: ["Analytical", "Objective", "Imaginative", "Original", "Open-minded"],
    weaknesses: ["Absent-minded", "Insensitive", "Prone to overthinking", "Socially awkward"],
    famousPeople: ["Albert Einstein", "Bill Gates", "Marie Curie"],
    career: ["Programmer", "Mathematician", "Philosopher", "Researcher", "Game Designer"],
  },
  ENTJ: {
    title: "The Commander",
    emoji: "⚔️",
    color: "from-amber-500 to-red-600",
    tagline: "Bold, imaginative, and strong-willed leaders who always find a way.",
    description: "ENTJs are strategic leaders, motivated to organize change. They are quick to see inefficiency and conceptualize new solutions, and enjoy developing long-range plans to accomplish their vision. They excel at logical reasoning and are usually articulate and quick-witted.",
    strengths: ["Efficient", "Energetic", "Self-confident", "Strong-willed", "Strategic"],
    weaknesses: ["Stubborn", "Intolerant", "Impatient", "Arrogant"],
    famousPeople: ["Steve Jobs", "Margaret Thatcher", "Napoleon Bonaparte"],
    career: ["CEO", "Lawyer", "Entrepreneur", "Manager", "Consultant"],
  },
  ENTP: {
    title: "The Debater",
    emoji: "💡",
    color: "from-orange-400 to-pink-600",
    tagline: "Smart and curious thinkers who cannot resist an intellectual challenge.",
    description: "ENTPs are inspired innovators, motivated to find new solutions to intellectually challenging problems. They are curious and clever, and seek to comprehend the people, systems, and principles that surround them. Open-minded and unconventional, they want to analyze, understand, and influence other people.",
    strengths: ["Knowledgeable", "Quick thinker", "Original", "Charismatic", "Energetic"],
    weaknesses: ["Argumentative", "Insensitive", "Intolerant of routine", "Unfocused"],
    famousPeople: ["Thomas Edison", "Benjamin Franklin", "Mark Twain"],
    career: ["Entrepreneur", "Lawyer", "Creative Director", "Consultant", "Inventor"],
  },
  INFJ: {
    title: "The Advocate",
    emoji: "🌟",
    color: "from-emerald-400 to-teal-600",
    tagline: "Quiet and mystical, yet very inspiring and tireless idealists.",
    description: "INFJs are creative nurturers with a strong sense of personal integrity and a drive to help others realize their potential. Creative and dedicated, they have a talent for helping others with original solutions to their personal challenges. They are idealistic and principled.",
    strengths: ["Insightful", "Principled", "Passionate", "Altruistic", "Creative"],
    weaknesses: ["Sensitive to criticism", "Reluctant to open up", "Perfectionistic", "Prone to burnout"],
    famousPeople: ["Martin Luther King Jr.", "Mother Teresa", "Nelson Mandela"],
    career: ["Counselor", "Writer", "Psychologist", "Nonprofit Leader", "Teacher"],
  },
  INFP: {
    title: "The Mediator",
    emoji: "🦋",
    color: "from-green-400 to-emerald-600",
    tagline: "Poetic, kind, and altruistic people, always eager to help a good cause.",
    description: "INFPs are imaginative idealists, guided by their own core values and beliefs. To a Healer, possibilities are paramount; the realism of the moment is only of passing concern. They see potential for a better future, and pursue truth and meaning with their own individual flair.",
    strengths: ["Empathetic", "Generous", "Open-minded", "Creative", "Passionate"],
    weaknesses: ["Unrealistic", "Self-isolating", "Emotionally vulnerable", "Unfocused"],
    famousPeople: ["William Shakespeare", "J.R.R. Tolkien", "Princess Diana"],
    career: ["Writer", "Artist", "Counselor", "Social Worker", "Musician"],
  },
  ENFJ: {
    title: "The Protagonist",
    emoji: "🎭",
    color: "from-yellow-400 to-orange-500",
    tagline: "Charismatic and inspiring leaders, able to mesmerize their listeners.",
    description: "ENFJs are idealist organizers, driven to implement their vision of what is best for humanity. They often act as catalysts for human growth because of their ability to see potential in other people and their charisma in persuading others to their ideas.",
    strengths: ["Tolerant", "Reliable", "Charismatic", "Altruistic", "Natural leader"],
    weaknesses: ["Overly idealistic", "Too selfless", "Sensitive", "Indecisive"],
    famousPeople: ["Barack Obama", "Oprah Winfrey", "Maya Angelou"],
    career: ["Teacher", "HR Manager", "Politician", "Coach", "Public Speaker"],
  },
  ENFP: {
    title: "The Campaigner",
    emoji: "🎪",
    color: "from-pink-400 to-rose-600",
    tagline: "Enthusiastic, creative, and sociable free spirits who always find a reason to smile.",
    description: "ENFPs are people-centered creators with a focus on possibilities and a contagious enthusiasm for new ideas, people, and activities. Energetic, warm, and passionate, they love to help other people explore their creative potential.",
    strengths: ["Curious", "Observant", "Energetic", "Enthusiastic", "Friendly"],
    weaknesses: ["Disorganized", "Overly optimistic", "Restless", "People-pleasing"],
    famousPeople: ["Robin Williams", "Walt Disney", "Robert Downey Jr."],
    career: ["Journalist", "Actor", "Consultant", "Psychologist", "Entrepreneur"],
  },
  ISTJ: {
    title: "The Logistician",
    emoji: "📋",
    color: "from-slate-500 to-blue-700",
    tagline: "Practical and fact-minded individuals whose reliability cannot be doubted.",
    description: "ISTJs are responsible organizers, driven to create and enforce order within systems and institutions. They are neat and orderly, inside and out, and tend to have a procedure for everything they do. Reliable and dutiful, ISTJs want to uphold tradition and follow regulations.",
    strengths: ["Honest", "Responsible", "Calm", "Practical", "Orderly"],
    weaknesses: ["Stubborn", "Insensitive", "Judgmental", "Resistant to change"],
    famousPeople: ["George Washington", "Angela Merkel", "Warren Buffett"],
    career: ["Accountant", "Auditor", "Military Officer", "Judge", "Administrator"],
  },
  ISFJ: {
    title: "The Defender",
    emoji: "🛡️",
    color: "from-sky-400 to-indigo-600",
    tagline: "Very dedicated and warm protectors, always ready to defend their loved ones.",
    description: "ISFJs are industrious caretakers, loyal to traditions and organizations. They are practical, compassionate, and caring, and are motivated to provide for others and protect them from the perils of life. They are devoted and generous helpers.",
    strengths: ["Supportive", "Reliable", "Patient", "Observant", "Enthusiastic"],
    weaknesses: ["Shy", "Overly altruistic", "Resistant to change", "Represses feelings"],
    famousPeople: ["Queen Elizabeth II", "Beyoncé", "Vin Diesel"],
    career: ["Nurse", "Teacher", "Social Worker", "Librarian", "HR Specialist"],
  },
  ESTJ: {
    title: "The Executive",
    emoji: "👔",
    color: "from-blue-500 to-indigo-700",
    tagline: "Excellent administrators, unsurpassed at managing things or people.",
    description: "ESTJs are hardworking traditionalists, eager to take charge in organizing projects and people. Orderly, rule-abiding, and conscientious, they like to get things done, and tend to go about projects in a systematic, methodical way.",
    strengths: ["Dedicated", "Strong-willed", "Direct", "Honest", "Loyal"],
    weaknesses: ["Inflexible", "Uncomfortable with unconventional situations", "Judgmental", "Stubborn"],
    famousPeople: ["Henry Ford", "Sonia Sotomayor", "Frank Sinatra"],
    career: ["Manager", "Judge", "Financial Officer", "School Principal", "Military Leader"],
  },
  ESFJ: {
    title: "The Consul",
    emoji: "🤝",
    color: "from-teal-400 to-cyan-600",
    tagline: "Extraordinarily caring, social, and popular people, always eager to help.",
    description: "ESFJs are conscientious helpers, sensitive to the needs of others and energetically dedicated to their responsibilities. They are highly attuned to their emotional environment and attentive to both the feelings of others and the perception others have of them.",
    strengths: ["Loyal", "Caring", "Practical", "Warm", "Good with people"],
    weaknesses: ["Needy", "Sensitive to criticism", "Reluctant to innovate", "Selfless"],
    famousPeople: ["Taylor Swift", "Bill Clinton", "Jennifer Garner"],
    career: ["Healthcare Worker", "Teacher", "Event Planner", "Social Worker", "Sales"],
  },
  ISTP: {
    title: "The Virtuoso",
    emoji: "🔧",
    color: "from-gray-500 to-zinc-700",
    tagline: "Bold and practical experimenters, masters of all kinds of tools.",
    description: "ISTPs are observant artisans with an understanding of mechanics and an interest in troubleshooting. They approach their environments with a flexible logic, looking for practical solutions to the problems at hand. They are independent and adaptable.",
    strengths: ["Optimistic", "Creative", "Practical", "Spontaneous", "Rational"],
    weaknesses: ["Stubborn", "Insensitive", "Private", "Easily bored", "Risk-prone"],
    famousPeople: ["Clint Eastwood", "Michael Jordan", "Bear Grylls"],
    career: ["Mechanic", "Engineer", "Pilot", "Forensic Scientist", "Athlete"],
  },
  ISFP: {
    title: "The Adventurer",
    emoji: "🎨",
    color: "from-rose-400 to-fuchsia-600",
    tagline: "Flexible and charming artists, always ready to explore and experience something new.",
    description: "ISFPs are gentle caretakers who live in the present moment and enjoy their surroundings with cheerful, low-key enthusiasm. They are flexible and spontaneous, and like to go with the flow to enjoy what life has to offer. They are quiet and unassuming.",
    strengths: ["Charming", "Sensitive", "Imaginative", "Passionate", "Curious"],
    weaknesses: ["Fiercely independent", "Unpredictable", "Easily stressed", "Competitive"],
    famousPeople: ["Bob Dylan", "Frida Kahlo", "Lana Del Rey"],
    career: ["Artist", "Designer", "Veterinarian", "Chef", "Photographer"],
  },
  ESTP: {
    title: "The Entrepreneur",
    emoji: "🚀",
    color: "from-red-500 to-orange-600",
    tagline: "Smart, energetic, and very perceptive people who truly enjoy living on the edge.",
    description: "ESTPs are energetic thrillseekers who are at their best when putting out fires, whether literal or metaphorical. They bring a sense of dynamic energy to their interactions with others and the world around them. They assess situations quickly and move adeptly to respond to immediate problems.",
    strengths: ["Bold", "Rational", "Direct", "Sociable", "Perceptive"],
    weaknesses: ["Impatient", "Risk-prone", "Unstructured", "Defiant"],
    famousPeople: ["Ernest Hemingway", "Madonna", "Eddie Murphy"],
    career: ["Entrepreneur", "Sales", "Marketing", "Paramedic", "Detective"],
  },
  ESFP: {
    title: "The Entertainer",
    emoji: "🎉",
    color: "from-fuchsia-400 to-purple-600",
    tagline: "Spontaneous, energetic, and enthusiastic people — life is never boring around them.",
    description: "ESFPs are vivacious entertainers who charm and engage those around them. They are spontaneous, energetic, and fun-loving, and take pleasure in the things around them: food, clothes, nature, animals, and especially people. They enjoy life in the moment.",
    strengths: ["Bold", "Original", "Practical", "Observant", "Excellent people skills"],
    weaknesses: ["Sensitive", "Easily bored", "Unfocused", "Conflict-averse"],
    famousPeople: ["Marilyn Monroe", "Jamie Oliver", "Adele"],
    career: ["Actor", "Event Planner", "Tour Guide", "Fitness Trainer", "Fashion Designer"],
  },
};

export function calculateResult(answers) {
  const profile = {};

  traits.forEach((trait) => {
    const traitItems = questions.filter((question) => question.trait === trait.key);
    const values = traitItems
      .map((question) => {
        const answer = answers[questions.indexOf(question)];
        if (answer === undefined) return null;
        return question.polarity === 1 ? answer : 8 - answer;
      })
      .filter((value) => value !== null);

    const average = values.length
      ? values.reduce((sum, value) => sum + value, 0) / values.length
      : 4;
    profile[trait.key] = Math.round(((average - 1) / 6) * 100);
  });

  // Four-letter shorthand is retained only as a familiar, secondary reference.
  // The continuous trait profile is the primary result.
  const type = [
    profile.sociability >= 50 ? "E" : "I",
    profile.openness >= 50 ? "N" : "S",
    profile.compassion >= 50 ? "F" : "T",
    profile.conscientiousness >= 50 ? "J" : "P",
  ].join("");

  const percentages = {
    EI: profile.sociability,
    SN: 100 - profile.openness,
    TF: 100 - profile.compassion,
    JP: profile.conscientiousness,
  };

  const ranked = traits
    .map((trait) => ({ ...trait, score: profile[trait.key] }))
    .sort((a, b) => b.score - a.score);

  const strongest = ranked.slice(0, 3).map((trait) => trait.label);
  const balanced = ranked
    .filter((trait) => trait.score >= 40 && trait.score <= 60)
    .map((trait) => trait.label);

  const summary = strongest.length
    ? `Your strongest current tendencies show up in ${strongest.join(", ").toLowerCase()}. These are preferences, not fixed limits: your behaviour can change with context, stress, experience, and the people around you.`
    : "Your answers show a varied profile. No single trait needs to define you.";

  return {
    type,
    percentages,
    profile,
    traits,
    summary,
    strongest,
    balanced,
    details: personalityTypes[type],
    assessment: {
      questionCount: questions.length,
      note: "This is an informal self-reflection questionnaire, not a clinically validated or diagnostic psychological assessment.",
    },
  };
}
