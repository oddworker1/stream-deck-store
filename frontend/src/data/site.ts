export type SupportLink = {
  external?: boolean;
  href: string;
  label: string;
};

export type PreviewTile = {
  image: string;
  label: string;
  overlayImage?: string;
};

export type ComparisonRow = {
  feature: string;
  free: string;
  plus: string;
};

export type FaqItem = {
  answer: string;
  id: string;
  question: string;
};

export type PluginRecord = {
  badges: string[];
  comparisonRows: ComparisonRow[];
  faq: FaqItem[];
  faqIntro: string;
  helpTopicMap: Record<string, string>;
  icon: string;
  id: string;
  listDescription: string;
  name: string;
  plusBullets: string[];
  plusIcon: string;
  previewTiles: PreviewTile[];
  salesBullets: string[];
  salesCtas: SupportLink[];
  salesIntro: string;
  salesSteps: string[];
  supportLinks: SupportLink[];
};

export const homeyPlugin: PluginRecord = {
  badges: ["Free + Plus", "Home automation"],
  comparisonRows: [
    {
      feature: "Toggle devices and set exact values",
      free: "Included",
      plus: "Included"
    },
    {
      feature: "Run Flows and Advanced Flows",
      free: "Included",
      plus: "Included"
    },
    {
      feature: "Live status and sensor values",
      free: "Included",
      plus: "Included"
    },
    {
      feature: "Second value on one key",
      free: "-",
      plus: "Included"
    },
    {
      feature: "Typed warning rules",
      free: "-",
      plus: "Included"
    },
    {
      feature: "Custom icons and richer tile styling",
      free: "-",
      plus: "Included"
    },
    {
      feature: "Room and scene folder launcher",
      free: "-",
      plus: "Included"
    }
  ],
  faq: [
    {
      answer:
        "Enter the Homey Pro address that works from the same machine as Stream Deck, then paste a Homey web app Personal Access Token and wait for the plugin to show connected.",
      id: "faq-connect-homey",
      question: "How do I connect Homey Pro?"
    },
    {
      answer:
        "If the device list is empty, the Homey address is usually wrong, the API token is invalid, or Homey is not reachable from this machine.",
      id: "faq-empty-catalog",
      question: "Why is the device list empty?"
    },
    {
      answer:
        "Choose the device first, then the capability you want to read or control. Start simple with one value and add more layout options after the tile works.",
      id: "faq-select-device",
      question: "How should I pick device and capability?"
    },
    {
      answer:
        "Use a second value only when it adds useful context. If the tile starts feeling crowded, leave it out.",
      id: "faq-second-value",
      question: "When should I use a second value?"
    },
    {
      answer:
        "Use Toggle Device for simple on or off behavior. Use Set Device State when you want an exact target such as dim percentage, cover position, or another explicit value.",
      id: "faq-action-mode",
      question: "When should I use Toggle Device or Set Device State?"
    },
    {
      answer:
        "Use Set Device State, choose a dim or position-style capability, then set the value type so the target input appears.",
      id: "faq-dim-input",
      question: "Why do I not see a dim percentage input?"
    },
    {
      answer:
        "Put the wording and units directly in Title Template. That keeps the tile short, readable, and under your control instead of forcing one display format.",
      id: "faq-display-template",
      question: "How do I show values and units cleanly?"
    },
    {
      answer:
        "Set the title, text size, and icon first. Use color only when it adds meaning instead of noise.",
      id: "faq-display-layout",
      question: "How do I keep the tile readable?"
    },
    {
      answer:
        "Plus supports separate warning rules for over and under states, with type-aware comparisons for number, boolean, and text values.",
      id: "faq-warning-rules",
      question: "How do warning rules work?"
    },
    {
      answer:
        "Yes. Warning states can flash first and then stay solid while the condition is still active.",
      id: "faq-warning-flash",
      question: "Can the warning tile flash?"
    },
    {
      answer:
        "Open the Debug tab and use Copy Debug Snapshot. That gives enough context to troubleshoot connection state, selected device, and recent plugin events quickly.",
      id: "faq-debug-snapshot",
      question: "What should I send when I need support?"
    },
    {
      answer:
        "Create a Personal Access Token in the Homey web app developer settings, then paste it into Setup inside the plugin.",
      id: "faq-api-key",
      question: "Where do I get the Homey API key?"
    }
  ],
  faqIntro: "Short answers only. Links from the plugin open the matching question automatically.",
  helpTopicMap: {
    actions: "faq-action-mode",
    display: "faq-display-template",
    select: "faq-select-device",
    setup: "faq-connect-homey",
    troubleshooting: "faq-debug-snapshot",
    warnings: "faq-warning-rules"
  },
  icon: "/assets/homey/free-icon.png",
  id: "homey-pro-control",
  listDescription: "Live Homey tiles for values, toggles, target writes, warnings, and room launchers.",
  name: "Homey Pro Control",
  plusBullets: [
    "Secondary values on the same tile",
    "Separate warning states for over and under limits",
    "Typed comparisons for numbers, booleans, and text",
    "Richer tile layouts for dedicated dashboards"
  ],
  plusIcon: "/assets/homey/plus-icon.png",
  previewTiles: [
    {
      image: "/assets/homey/generated/homey-energy-live.svg",
      label: "Live energy"
    },
    {
      image: "/assets/homey/generated/homey-room-launcher.svg",
      label: "Room launcher"
    },
    {
      image: "/assets/homey/generated/homey-energy-warning-base.svg",
      label: "Warning tile",
      overlayImage: "/assets/homey/generated/homey-energy-warning-over.svg"
    },
    {
      image: "/assets/homey/generated/homey-dimmer-target.svg",
      label: "Dim target"
    }
  ],
  salesBullets: [
    "Show live values on Stream Deck keys",
    "Control devices with toggles or exact target writes",
    "Build warning tiles for values that should stand out",
    "Keep Homey dashboards readable instead of crowded"
  ],
  salesCtas: [
    {
      href: "/homey-faq.html",
      label: "Open FAQ"
    },
    {
      external: true,
      href: "https://github.com/oddworker1/streamdeck-homey-pro-control",
      label: "GitHub"
    }
  ],
  salesIntro:
    "A focused Stream Deck plugin for Homey Pro. Use it for live values, clean control tiles, warnings, and room launchers without turning the support site into a marketplace wall.",
  salesSteps: [
    "Connect Homey Pro with a local address and Personal Access Token.",
    "Choose the device and capability you want on the key.",
    "Pick toggle or exact state writes for the behavior.",
    "Refine the tile with title text, units, and warning rules."
  ],
  supportLinks: [
    {
      href: "/homey-faq.html#faq-connect-homey",
      label: "Setup"
    },
    {
      href: "/homey-faq.html#faq-warning-rules",
      label: "Warnings"
    },
    {
      href: "/homey-faq.html#faq-debug-snapshot",
      label: "Support"
    }
  ]
};

export const marketplacePlugins = [homeyPlugin];

export function faqIdForHelpTopic(topic: string): string {
  return homeyPlugin.helpTopicMap[topic] ?? "faq-connect-homey";
}
