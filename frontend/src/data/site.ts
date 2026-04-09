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

export type FaqItem = {
  answer: string;
  id: string;
  question: string;
};

export type PluginRecord = {
  badges: string[];
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
  faq: [
    {
      answer:
        "Enter the Homey Pro address that works from the same machine as Stream Deck, then paste a Homey web app Personal Access Token and wait for the plugin to show connected.",
      id: "faq-connect-homey",
      question: "How do I connect Homey Pro?"
    },
    {
      answer:
        "Choose the device first, then the capability you want to read or control. Start simple with one value and add more layout options after the tile works.",
      id: "faq-select-device",
      question: "How should I pick device and capability?"
    },
    {
      answer:
        "Use Toggle Device for simple on or off behavior. Use Set Device State when you want an exact target such as dim percentage, cover position, or another explicit value.",
      id: "faq-action-mode",
      question: "When should I use Toggle Device or Set Device State?"
    },
    {
      answer:
        "Put the wording and units directly in Title Template. That keeps the tile short, readable, and under your control instead of forcing one display format.",
      id: "faq-display-template",
      question: "How do I show values and units cleanly?"
    },
    {
      answer:
        "Plus supports separate warning rules for over and under states, with type-aware comparisons for number, boolean, and text values.",
      id: "faq-warning-rules",
      question: "How do warning rules work?"
    },
    {
      answer:
        "Open the Debug tab and use Copy Debug Snapshot. That gives enough context to troubleshoot connection state, selected device, and recent plugin events quickly.",
      id: "faq-debug-snapshot",
      question: "What should I send when I need support?"
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
