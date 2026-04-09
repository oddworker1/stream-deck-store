export type StatusTone = "blue" | "gold" | "green" | "neutral";

export type PluginCardStatus = {
  label: string;
  tone: StatusTone;
};

export type PluginMetric = {
  label: string;
  value: string;
};

export type VisualCard = {
  description: string;
  image: string;
  title: string;
};

export type FaqItem = {
  answer: string;
  question: string;
};

export type SetupStep = {
  body: string;
  title: string;
};

export type SupportLink = {
  href: string;
  label: string;
};

export type HelpTopic = {
  body: string;
  related: string[];
  slug: string;
  title: string;
};

export type PluginRecord = {
  categories: string[];
  compatibility: string[];
  ctaLinks: SupportLink[];
  detailSummary: string;
  faq: FaqItem[];
  featuredSummary: string;
  filters: string[];
  helpTopics: HelpTopic[];
  highlights: string[];
  icon: string;
  id: string;
  metrics: PluginMetric[];
  name: string;
  plusBullets: string[];
  relatedPlugins: Array<{
    description: string;
    state: string;
    title: string;
  }>;
  requirements: string[];
  setupSteps: SetupStep[];
  shortDescription: string;
  statuses: PluginCardStatus[];
  supportLinks: SupportLink[];
  tags: string[];
  version: string;
  visuals: VisualCard[];
};

export const adaptedFilters = [
  "All",
  "Home automation",
  "Control",
  "Monitoring",
  "Premium",
  "Low CPU"
];

export const homeyPlugin: PluginRecord = {
  categories: ["Home automation", "Control surface"],
  compatibility: [
    "Stream Deck 6.9 or later",
    "Homey Pro local API",
    "Windows 10 or later",
    "macOS 13 or later"
  ],
  ctaLinks: [
    {
      href: "https://github.com/oddworker1/streamdeck-homey-pro-control",
      label: "Open project"
    },
    {
      href: "/homey-help-setup",
      label: "Installation help"
    },
    {
      href: "/homey-help-troubleshooting",
      label: "Troubleshooting"
    }
  ],
  detailSummary:
    "Turn Stream Deck into a clean Homey Pro surface for live values, exact state writes, room launchers, and alert-driven tiles.",
  faq: [
    {
      answer:
        "Toggle Device is for on/off style behavior. Set Device State is for exact target values such as dim percentage, cover position, or other settable capability values.",
      question: "What is the difference between Toggle Device and Set Device State?"
    },
    {
      answer:
        "Put units directly into Title Template. That keeps the display flexible and lets you choose exactly how the tile reads.",
      question: "How do I show units on the tile?"
    },
    {
      answer:
        "Yes. Plus supports typed warning comparisons for number, boolean, and text values, with separate over and under warning definitions.",
      question: "Can warnings work with booleans and text?"
    },
    {
      answer:
        "Open the Debug tab in the plugin and use Copy Debug Snapshot. It includes action settings, recent events, connection state, and selected device information.",
      question: "What should I send when something behaves wrong?"
    }
  ],
  featuredSummary:
    "A premium Stream Deck control layer for Homey Pro with deliberate visuals, exact writes, live telemetry, and product-grade troubleshooting support.",
  filters: ["Home automation", "Monitoring", "Premium", "Low CPU"],
  helpTopics: [
    {
      body:
        "Use Setup first. Enter the Homey Pro address exactly as it resolves on your network, then paste a Homey web-app Personal Access Token. Wait for the connected state before moving on to device selection.",
      related: ["Select a device and capability", "Troubleshoot connection issues"],
      slug: "setup",
      title: "Setup and connection"
    },
    {
      body:
        "Start with the device. Then choose the main capability. If you are using Plus, you can add a secondary capability for combined tiles such as power and daily consumption on the same key.",
      related: ["Display and title templates", "State write behaviors"],
      slug: "select",
      title: "Selecting devices and capabilities"
    },
    {
      body:
        "Use Toggle Device for on/off interactions. Use Set Device State for exact numeric or boolean targets. The plugin normalizes dim, cover, and common Homey capability patterns so the key behavior stays predictable.",
      related: ["Setup and connection", "Troubleshooting"],
      slug: "actions",
      title: "Control actions and state writes"
    },
    {
      body:
        "The Display tab controls the visual composition of the key. Use Title Template for exact wording, units, and value math. Position text, choose icon treatment, and style the tile for fast recognition.",
      related: ["Warnings and alert states", "Selecting devices and capabilities"],
      slug: "display",
      title: "Display styling and title templates"
    },
    {
      body:
        "Plus adds independent Warning Over and Warning Under states. Each can use different operators, icon styling, flash timing, and type-aware comparisons so alerts feel intentional instead of generic.",
      related: ["Display styling and title templates", "Troubleshooting"],
      slug: "warnings",
      title: "Warnings, flashing, and alert rules"
    },
    {
      body:
        "If a tile behaves unexpectedly, verify connection first, then confirm device and capability selection, and finally use Copy Debug Snapshot. Most configuration issues can be isolated quickly from the Debug event stream.",
      related: ["Setup and connection", "Control actions and state writes"],
      slug: "troubleshooting",
      title: "Troubleshooting and support"
    }
  ],
  highlights: [
    "Live sensor tiles with title math and secondary values",
    "Direct control actions for toggles, flows, and exact state targets",
    "Typed warnings for numbers, booleans, and text",
    "2122 icon options and richer Plus styling"
  ],
  icon: "/assets/homey/free-icon.png",
  id: "homey-pro-control",
  metrics: [
    {
      label: "Plugin status",
      value: "Actively maintained"
    },
    {
      label: "Icon library",
      value: "2122 glyphs"
    },
    {
      label: "Performance profile",
      value: "Low CPU"
    }
  ],
  name: "Homey Pro Control",
  plusBullets: [
    "Secondary values on the same tile",
    "Independent over and under warning states",
    "Typed comparisons for number, boolean, and text",
    "Room launchers and richer visual composition"
  ],
  relatedPlugins: [
    {
      description: "More Adapted Stream Deck tools will land here as the catalog grows.",
      state: "Coming next",
      title: "More plugins soon"
    }
  ],
  requirements: [
    "A Homey Pro address reachable from the Stream Deck host machine",
    "A Homey web-app Personal Access Token",
    "Stream Deck desktop app with developer mode enabled for local builds",
    "Homey devices or flows already configured in Homey"
  ],
  setupSteps: [
    {
      body:
        "Enter the Homey address and Personal Access Token, then wait for the connected state.",
      title: "Connect Homey Pro"
    },
    {
      body:
        "Choose the device first, then the main capability and optional secondary value.",
      title: "Select the signal"
    },
    {
      body:
        "Use toggle for simple control or exact state writes for dim and target-based behavior.",
      title: "Define the behavior"
    },
    {
      body:
        "Tune title math, icon treatment, warnings, and Plus-specific layout options.",
      title: "Refine the visual"
    }
  ],
  shortDescription:
    "Live Homey tiles for values, toggles, target writes, warnings, and room launchers.",
  statuses: [
    { label: "Certified", tone: "blue" },
    { label: "Updated recently", tone: "gold" },
    { label: "Low CPU", tone: "green" }
  ],
  supportLinks: [
    {
      href: "https://github.com/oddworker1/streamdeck-homey-pro-control",
      label: "GitHub"
    },
    {
      href: "/homey-help-setup",
      label: "Setup guide"
    },
    {
      href: "/homey-help-troubleshooting",
      label: "Support"
    }
  ],
  tags: ["Warnings", "Dim targets", "Live sensor tiles", "Premium visuals"],
  version: "1.1.66.0",
  visuals: [
    {
      description: "Primary and secondary value on one key.",
      image: "/assets/homey/generated/homey-energy-live.svg",
      title: "Live energy tile"
    },
    {
      description: "Typed over or under alert styling.",
      image: "/assets/homey/generated/homey-energy-warning-over.svg",
      title: "Warning tile"
    },
    {
      description: "Exact target writes for dim or position.",
      image: "/assets/homey/generated/homey-dimmer-target.svg",
      title: "Dim target tile"
    },
    {
      description: "Launch rooms, scenes, or folders.",
      image: "/assets/homey/generated/homey-room-launcher.svg",
      title: "Launcher tile"
    }
  ]
};

export const marketplacePlugins = [homeyPlugin];

export function findHelpTopic(slug: string): HelpTopic | undefined {
  return homeyPlugin.helpTopics.find((topic) => topic.slug === slug);
}
