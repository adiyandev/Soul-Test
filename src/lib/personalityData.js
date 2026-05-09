export const questions = [
  // E/I dimension (questions 0-4)
  { text: "You regularly make new friends.", dimension: "EI", direction: "E" },
  { text: "At social events, you rarely try to introduce yourself to new people.", dimension: "EI", direction: "I" },
  { text: "You feel more energized after spending time with a group of people.", dimension: "EI", direction: "E" },
  { text: "You prefer to have a few close friends rather than a large circle of acquaintances.", dimension: "EI", direction: "I" },
  { text: "You enjoy being the center of attention.", dimension: "EI", direction: "E" },

  // S/N dimension (questions 5-9)
  { text: "You focus more on the present than the future.", dimension: "SN", direction: "S" },
  { text: "You are drawn to exploring new ideas and theories.", dimension: "SN", direction: "N" },
  { text: "You prefer practical, hands-on experiences over abstract discussions.", dimension: "SN", direction: "S" },
  { text: "You often think about what the world could look like in the future.", dimension: "SN", direction: "N" },
  { text: "You trust your direct observations more than theoretical possibilities.", dimension: "SN", direction: "S" },

  // T/F dimension (questions 10-14)
  { text: "You prioritize logic over emotions when making important decisions.", dimension: "TF", direction: "T" },
  { text: "You find it easy to empathize with a person whose experiences differ from yours.", dimension: "TF", direction: "F" },
  { text: "You believe that being objective is more important than being compassionate.", dimension: "TF", direction: "T" },
  { text: "You consider people's feelings before telling them the hard truth.", dimension: "TF", direction: "F" },
  { text: "You value fairness and justice more than mercy and forgiveness.", dimension: "TF", direction: "T" },

  // J/P dimension (questions 15-19)
  { text: "You prefer to have a detailed plan rather than figuring things out as you go.", dimension: "JP", direction: "J" },
  { text: "You enjoy having a spontaneous, flexible lifestyle.", dimension: "JP", direction: "P" },
  { text: "You feel stressed when you don't have a clear schedule.", dimension: "JP", direction: "J" },
  { text: "You often leave things to the last minute and still get them done.", dimension: "JP", direction: "P" },
  { text: "Completing tasks well ahead of the deadline brings you satisfaction.", dimension: "JP", direction: "J" },
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
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  questions.forEach((q, i) => {
    const answer = answers[i];
    if (answer === undefined) return;

    // answer ranges from 1 (strongly disagree) to 7 (strongly agree)
    const weight = answer - 4; // ranges from -3 to 3
    
    if (weight > 0) {
      scores[q.direction] += weight;
    } else if (weight < 0) {
      // opposite direction
      const opposite = {
        E: "I", I: "E", S: "N", N: "S", T: "F", F: "T", J: "P", P: "J"
      };
      scores[opposite[q.direction]] += Math.abs(weight);
    }
  });

  const type = [
    scores.E >= scores.I ? "E" : "I",
    scores.S >= scores.N ? "S" : "N",
    scores.T >= scores.F ? "T" : "F",
    scores.J >= scores.P ? "J" : "P",
  ].join("");

  const percentages = {
    EI: Math.round((scores.E / (scores.E + scores.I || 1)) * 100),
    SN: Math.round((scores.S / (scores.S + scores.N || 1)) * 100),
    TF: Math.round((scores.T / (scores.T + scores.F || 1)) * 100),
    JP: Math.round((scores.J / (scores.J + scores.P || 1)) * 100),
  };

  return { type, percentages, details: personalityTypes[type] };
}