import {
  FiArrowRight,
  FiBookOpen,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiCommand,
  FiCpu,
  FiFeather,
  FiLayers,
  FiPlay,
  FiShield,
  FiSun,
  FiTarget,
  FiZap,
} from "react-icons/fi";
import type { IconType } from "react-icons";

export interface StatItem {
  value: string;
  label: string;
}

export interface SystemStep {
  icon: IconType;
  title: string;
  body: string;
}

export interface CurriculumItem {
  title: string;
  duration: string;
  body: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Testimonials", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
];

export const heroStats: StatItem[] = [
  { value: "4.9/5", label: "student rating" },
  { value: "2.5k+", label: "focused operators" },
  { value: "14 days", label: "to first system" },
];

export const problemCards = [
  "Inbox, Slack, and notifications fracture your best hours.",
  "Every priority feels urgent, so meaningful work keeps moving.",
  "You end the day busy, but not closer to the outcome that matters.",
];

export const systemSteps: SystemStep[] = [
  {
    icon: FiTarget,
    title: "Clarify the target",
    body: "Turn scattered goals into one measurable deep-work outcome for the week.",
  },
  {
    icon: FiShield,
    title: "Protect attention",
    body: "Build a practical distraction protocol that survives real workdays.",
  },
  {
    icon: FiClock,
    title: "Design focus blocks",
    body: "Create repeatable 60-90 minute sessions with a clear start, finish, and review.",
  },
  {
    icon: FiZap,
    title: "Compound results",
    body: "Use a lightweight scorecard so momentum becomes visible and repeatable.",
  },
];

export const curriculum: CurriculumItem[] = [
  {
    title: "Module 01 - The Deep Work Reset",
    duration: "18 min",
    body: "Audit where your attention is leaking and install a simple reset ritual before every session.",
  },
  {
    title: "Module 02 - Priority Architecture",
    duration: "24 min",
    body: "Convert vague outcomes into a weekly focus map that removes decision fatigue.",
  },
  {
    title: "Module 03 - Distraction Defense",
    duration: "21 min",
    body: "Create environmental, digital, and social boundaries without needing perfect conditions.",
  },
  {
    title: "Module 04 - Execution Sprints",
    duration: "29 min",
    body: "Run deep-work sprints using a cadence that balances intensity, recovery, and accountability.",
  },
  {
    title: "Module 05 - Review & Scale",
    duration: "16 min",
    body: "Review progress, refine the system, and make your focus practice sustainable long term.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The framework helped me stop context switching and ship work I had delayed for months.",
    author: "Jordan Ellis",
    role: "Product Designer",
    image: "/image/pexels-mizunokozuki-12903131.png",
  },
  {
    quote:
      "It is short, practical, and refreshingly specific. My calendar finally reflects my priorities.",
    author: "Ari Chen",
    role: "Founder",
    image: "/image/pexels-anthonyshkraba-production-8278849.png",
  },
  {
    quote:
      "I use the shutdown ritual every afternoon. It made focused work feel calm instead of forced.",
    author: "Maya Ortiz",
    role: "Engineering Manager",
    image: "/image/pexels-annushka-ahuja-8055837.png",
  },
];

export const pricingFeatures = [
  "6h of videos - Step-by-step deep work strategies.",
  "Templates & Trackers – Stay on track effortlessly.",
  "Live Q&As – Expert guidance & accountability.",
  "Exclusive Community – Connect with others."
];

export const featureIcons = [
  FiPlay,
  FiCpu,
  FiCheckCircle,
  FiCommand,
  FiLayers,
  FiBookOpen,
  FiFeather,
  FiCalendar,
  FiArrowRight,
  FiSun,
];
