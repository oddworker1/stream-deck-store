import {
  homeyActionModeFaqHtml,
  homeyApiKeyFaqHtml,
  homeyConnectFaqHtml,
  homeyDebugFaqHtml,
  homeyDimInputFaqHtml,
  homeyDisplayLayoutFaqHtml,
  homeyEmptyCatalogFaqHtml,
  homeySecondValueFaqHtml,
  homeySelectDeviceFaqHtml,
  homeyTitleTemplateFaqHtml,
  homeyWarningFlashFaqHtml,
  homeyWarningRulesFaqHtml
} from "./homey-faq-content";

export type SupportLink = {
  external?: boolean;
  href: string;
  label: string;
};

export type PreviewTile = {
  alertDetail?: string;
  image: string;
  label: string;
  overlayImage?: string;
};

export type InfoCard = {
  copy: string;
  emoji: string;
  title: string;
};

export type ComparisonRow = {
  feature: string;
  free: string;
  plus: string;
};

export type ShowcaseBoard = {
  caption: string;
  title: string;
  tiles: PreviewTile[];
};

export type FaqItem = {
  answer: string;
  answerHtml?: string;
  id: string;
  question: string;
};

export type PluginRecord = {
  badges: string[];
  comparisonIntro: string;
  comparisonRows: ComparisonRow[];
  contactEmail: string;
  faq: FaqItem[];
  faqIntro: string;
  helpTopicMap: Record<string, string>;
  icon: string;
  id: string;
  listDescription: string;
  name: string;
  plusIcon: string;
  previewTiles: PreviewTile[];
  salesCtas: SupportLink[];
  salesHighlights: InfoCard[];
  salesIntro: string;
  setupHighlights: InfoCard[];
  showcaseBoards: ShowcaseBoard[];
};

export const homeyPlugin: PluginRecord = {
  badges: ["Free + Plus", "Home automation"],
  comparisonIntro: "Plus includes everything in Free and adds the extras below.",
  comparisonRows: [
    {
      feature: "Second value from the same device",
      free: "-",
      plus: "Included"
    },
    {
      feature: "Room and scene folder launcher",
      free: "-",
      plus: "Included"
    },
    {
      feature: "Over and under warning states",
      free: "-",
      plus: "Included"
    },
    {
      feature: "Warning rules for number, boolean, and text values",
      free: "-",
      plus: "Included"
    },
    {
      feature: "Warning flash interval and duration controls",
      free: "-",
      plus: "Included"
    },
    {
      feature: "Custom text size, position, alignment, and colors",
      free: "-",
      plus: "Included"
    },
    {
      feature: "Searchable Material icons with custom color and size",
      free: "-",
      plus: "Included"
    },
    {
      feature: "Title template math filters like div and fixed",
      free: "-",
      plus: "Included"
    }
  ],
  contactEmail: "odd@adapted.no",
  faq: [
    {
      answer:
        "Enter the Homey Pro address that works from the same machine as Stream Deck, then paste a Homey web app Personal Access Token and wait for the plugin to show connected.",
      answerHtml: homeyConnectFaqHtml,
      id: "faq-connect-homey",
      question: "How do I connect Homey Pro?"
    },
    {
      answer:
        "If the device list is empty, the Homey address is usually wrong, the API token is invalid, or Homey is not reachable from this machine.",
      answerHtml: homeyEmptyCatalogFaqHtml,
      id: "faq-empty-catalog",
      question: "Why is the device list empty?"
    },
    {
      answer:
        "Choose the device first, then the capability you want to read or control. Start simple with one value and add more layout options after the tile works.",
      answerHtml: homeySelectDeviceFaqHtml,
      id: "faq-select-device",
      question: "How should I pick device and capability?"
    },
    {
      answer:
        "Use a second value only when it adds useful context. If the tile starts feeling crowded, leave it out.",
      answerHtml: homeySecondValueFaqHtml,
      id: "faq-second-value",
      question: "When should I use a second value?"
    },
    {
      answer:
        "Use Toggle Device for simple on or off behavior. Use Set Device State when you want an exact target such as dim percentage, cover position, or another explicit value.",
      answerHtml: homeyActionModeFaqHtml,
      id: "faq-action-mode",
      question: "When should I use Toggle Device or Set Device State?"
    },
    {
      answer:
        "Use Set Device State, choose a dim or position-style capability, then set the value type so the target input appears.",
      answerHtml: homeyDimInputFaqHtml,
      id: "faq-dim-input",
      question: "Why do I not see a dim percentage input?"
    },
    {
      answer:
        "Use Title Template for placeholders, line breaks, custom units, and Plus math filters like div and fixed.",
      answerHtml: homeyTitleTemplateFaqHtml,
      id: "faq-display-template",
      question: "What can Title Template actually do?"
    },
    {
      answer:
        "Start with the template first, then adjust tile style, text size, and text position. Only add extra colors or icons when they communicate something useful faster than text alone.",
      answerHtml: homeyDisplayLayoutFaqHtml,
      id: "faq-display-layout",
      question: "What is the best way to keep the tile readable after adding templates?"
    },
    {
      answer:
        "Plus supports separate warning rules for over and under states, with type-aware comparisons for number, boolean, and text values.",
      answerHtml: homeyWarningRulesFaqHtml,
      id: "faq-warning-rules",
      question: "How do warning rules work?"
    },
    {
      answer:
        "Yes. Warning states can flash first and then stay solid while the condition is still active.",
      answerHtml: homeyWarningFlashFaqHtml,
      id: "faq-warning-flash",
      question: "Can the warning tile flash?"
    },
    {
      answer:
        "Open the Debug tab and use Copy Debug Snapshot. That gives enough context to troubleshoot connection state, selected device, and recent plugin events quickly.",
      answerHtml: homeyDebugFaqHtml,
      id: "faq-debug-snapshot",
      question: "What should I send when I need support?"
    },
    {
      answer:
        "Create a Personal Access Token in the Homey web app developer settings, then paste it into Setup inside the plugin.",
      answerHtml: homeyApiKeyFaqHtml,
      id: "faq-api-key",
      question: "Where do I get the Homey API key?"
    }
  ],
  faqIntro: "Detailed setup, selection, display, warning, and troubleshooting guides for every Homey info button on Stream Deck.",
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
      label: "Alarm",
      alertDetail: "Grid Load",
      overlayImage: "/assets/homey/generated/homey-energy-warning-over.svg"
    },
    {
      image: "/assets/homey/generated/homey-dimmer-target.svg",
      label: "Dim target"
    }
  ],
  salesHighlights: [
    {
      copy: "See power, climate, door, and status values directly on the key.",
      emoji: "📟",
      title: "Live tiles"
    },
    {
      copy: "Toggle a device, run a flow, or send an exact value without opening Homey first.",
      emoji: "🎛️",
      title: "Quick control"
    },
    {
      copy: "Turn important states into clear alarm tiles that grab your eye when something changes.",
      emoji: "🚨",
      title: "Alerts that stand out"
    },
    {
      copy: "Launch room or scene folders so the deck stays useful instead of crowded.",
      emoji: "🗂️",
      title: "Room launchers"
    }
  ],
  salesCtas: [
    {
      href: "/homey-faq.html",
      label: "Open FAQ"
    }
  ],
  salesIntro:
    "A focused Stream Deck plugin for Homey Pro. Use it for live values, clean control tiles, warnings, and room launchers without turning the support site into a marketplace wall.",
  setupHighlights: [
    {
      copy: "Add your local Homey address and a Personal Access Token.",
      emoji: "🔌",
      title: "1. Connect Homey"
    },
    {
      copy: "Pick the device and capability you want to show or control.",
      emoji: "🎯",
      title: "2. Choose the tile"
    },
    {
      copy: "Decide if the key should display, toggle, or set an exact target value.",
      emoji: "⚙️",
      title: "3. Choose behavior"
    },
    {
      copy: "Finish with title text, units, icons, colors, and warning rules.",
      emoji: "✨",
      title: "4. Make it yours"
    }
  ],
  showcaseBoards: [
    {
      caption: "Live values, targets, and warning tiles on one deck.",
      tiles: [
        {
          image: "/assets/homey/generated/homey-energy-live.svg",
          label: "Live energy"
        },
        {
          image: "/assets/homey/generated/homey-solar-export.svg",
          label: "Solar export"
        },
        {
          image: "/assets/homey/generated/homey-climate.svg",
          label: "Climate"
        },
        {
          image: "/assets/homey/generated/homey-energy-warning-base.svg",
          label: "Alarm",
          alertDetail: "Grid Load",
          overlayImage: "/assets/homey/generated/homey-energy-warning-over.svg"
        },
        {
          image: "/assets/homey/generated/homey-dimmer-target.svg",
          label: "Dim target"
        },
        {
          image: "/assets/homey/generated/homey-door-status.svg",
          label: "Door status"
        }
      ],
      title: "Power wall"
    },
    {
      caption: "Room access and quick control without cluttering the deck.",
      tiles: [
        {
          image: "/assets/homey/generated/homey-room-launcher.svg",
          label: "Room launcher"
        },
        {
          image: "/assets/homey/generated/homey-climate.svg",
          label: "Climate"
        },
        {
          image: "/assets/homey/generated/homey-door-status.svg",
          label: "Door status"
        },
        {
          image: "/assets/homey/generated/homey-dimmer-target.svg",
          label: "Dim target"
        },
        {
          image: "/assets/homey/generated/homey-energy-live.svg",
          label: "Live energy"
        },
        {
          image: "/assets/homey/generated/homey-solar-export.svg",
          label: "Solar export"
        }
      ],
      title: "Room control"
    }
  ]
};

export const marketplacePlugins = [homeyPlugin];

export function faqIdForHelpTopic(topic: string): string {
  return homeyPlugin.helpTopicMap[topic] ?? "faq-connect-homey";
}
