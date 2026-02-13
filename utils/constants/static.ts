export type SpecialityT = {
  title: string;
  image: string;
  description: string;
};

export const specialities: SpecialityT[] = [
  {
    title: "Anxiety & Panic Disorders",
    image: "/images/speciality1.webp",
    description:
      "Personalized anxiety treatment, combining thorough psychiatric evaluation with evidence-based care to help you feel calmer, steadier, and more in control.",
  },
  {
    title: "Trauma & PTSD Treatment",
    image: "/images/speciality2.jpg",
    description:
      "Unresolved trauma — whether from a single event or long-term experiences — can affect your nervous system, relationships, and sense of safety. I'm here to guide you through these complexities to help you feel more regulated in everyday life.",
  },
  {
    title: "Depression & Mood Disorder Treatment",
    image: "/images/speciality3.webp",
    description:
      "Low energy, emotional numbness, irritability, or loss of motivation may signal depression or other mood conditions. I provide collaborative depression treatment that addresses both biological and psychological factors.",
  },
  {
    title: "Burnout & Chronic Stress in High-Achieving Adults",
    image: "/images/speciality4.jpg",
    description:
      "Treatment focuses on reducing stress overload, improving nervous system balance, and restoring sustainable performance.",
  },
  {
    title: "Perfectionism & High Internal Pressure",
    image: "/images/speciality5.jpg",
    description:
      "Chronic self-criticism and relentless standards often drive anxiety and burnout. Psychiatric care can help shift rigid patterns, reduce internal pressure, and build a healthier, more supportive internal dialogue.",
  },
];

export type AccordionT = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: AccordionT[] = [
  {
    id: "faq-1",
    question: "How do I know if therapy is right for me?",
    answer:
      "Therapy may be helpful if you feel overwhelmed by anxiety, stress, burnout, or the effects of past experiences — even if you appear functional on the outside. Many of my clients are high-achieving and self-aware but feel internally exhausted, stuck in overthinking, or emotionally on edge. Therapy offers a structured, supportive space to better understand what you're experiencing and develop healthier, more sustainable patterns.",
  },
  {
    id: "faq-2",
    question: "What types of issues do you specialize in?",
    answer:
      "I specialize in working with adults experiencing anxiety, panic, trauma, burnout, perfectionism, and high internal pressure. This includes both single-incident trauma and more complex, long-standing patterns rooted in earlier life experiences or chronic stress. My approach integrates evidence-based methods such as CBT, EMDR, mindfulness-based practices, and body-oriented techniques.",
  },
  {
    id: "faq-3",
    question: "Do you offer in-person and telehealth sessions?",
    answer:
      "Yes. I offer in-person therapy from my Santa Monica office, a quiet and private space designed to feel calm and grounding. I also provide secure telehealth sessions for clients located anywhere in California, allowing flexibility while maintaining the same thoughtful and collaborative approach to care.",
  },
];

export const psychiatristBackgroundFaqs: AccordionT[] = [
  {
    id: "faq-bg-1",
    question: "What is your professional training and background?",
    answer:
      "I am a board-certified psychiatrist with specialized training in adult psychiatry. My background includes comprehensive medical education, psychiatric residency training, and ongoing continuing education focused on anxiety disorders, trauma-related conditions, mood disorders, and burnout. My approach integrates both medical expertise and a thoughtful understanding of psychological and nervous system health.",
  },
  {
    id: "faq-bg-2",
    question: "What is your approach to medication management?",
    answer:
      "My approach to medication is careful, collaborative, and individualized. When medication is appropriate, I prescribe thoughtfully and monitor closely, ensuring you understand your options, potential benefits, and side effects. My goal is not simply symptom reduction, but supporting long-term stability, clarity, and overall well-being.",
  },
  {
    id: "faq-bg-3",
    question: "Do you provide therapy in addition to psychiatric care?",
    answer:
      "Yes. In addition to psychiatric evaluation and medication management, I incorporate therapeutic principles into our sessions. My work is collaborative and structured, allowing space for reflection and depth while addressing both the biological and emotional aspects of what you’re experiencing.",
  },
];

export const footerlinks = [
  "Privacy & Cookies Policy",
  "Good Faith Estimate",
  "Website Terms & Conditions",
  "Disclaimer",
];
