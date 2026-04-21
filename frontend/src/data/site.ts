import {
  homeyActionModeFaqHtml,
  homeyApiKeyFaqHtml,
  homeyConnectFaqHtml,
  homeyDebugFaqHtml,
  homeyDimInputFaqHtml,
  homeyDisplayLayoutFaqHtml,
  homeyEmptyCatalogFaqHtml,
  homeyFamilyGuestsFaqHtml,
  homeyGraphBadgeFaqHtml,
  homeyLiveValueFreshnessFaqHtml,
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

export type ComparisonVisual = {
  copy: string;
  image: string;
  tag: string;
  title: string;
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
  comparisonVisuals: ComparisonVisual[];
  comparisonRows: ComparisonRow[];
  contactEmail: string;
  faq: FaqItem[];
  faqHighlights: InfoCard[];
  faqIntro: string;
  helpTopicMap: Record<string, string>;
  icon: string;
  id: string;
  listDescription: string;
  name: string;
  plusIcon: string;
  previewTiles: PreviewTile[];
  releaseNotes: InfoCard[];
  releaseVersion: string;
  salesCtas: SupportLink[];
  salesHighlights: InfoCard[];
  salesIntro: string;
  setupHighlights: InfoCard[];
  showcaseBoards: ShowcaseBoard[];
};

export const homeyPlugin: PluginRecord = {
  badges: ["Free + Plus", "Home automation"],
  comparisonIntro: "Plus includes everything in Free and adds the extras below.",
  comparisonVisuals: [
    {
      copy: "Put trend context behind the value with custom time span, range, line color, fill, and opacity controls.",
      image: "/assets/homey/generated/homey-energy-live.svg",
      tag: "Plus",
      title: "Graph backgrounds"
    },
    {
      copy: "Add a readable text plate when a graph or rich background would otherwise compete with the main label.",
      image: "/assets/homey/generated/homey-dimmer-target.svg",
      tag: "Plus",
      title: "Text badges"
    },
    {
      copy: "Let over and under states replace colors, flash behavior, and even graph styling when something crosses the limit.",
      image: "/assets/homey/generated/homey-energy-warning-over.svg",
      tag: "Plus",
      title: "Warning overrides"
    },
    {
      copy: "Use Homey avatars, remote image URLs, or imported local image paths on one named Family & Guests tile, then style the frame to fit the deck.",
      image: "/assets/homey/generated/homey-family-avatar-bob.svg",
      tag: "Plus",
      title: "Profile images"
    }
  ],
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
      feature: "Background history graphs with custom range and time span",
      free: "-",
      plus: "Included"
    },
    {
      feature: "Text badges and warning graph styling overrides",
      free: "-",
      plus: "Included"
    },
    {
      feature: "Homey avatars, remote image URLs, and imported local profile images",
      free: "-",
      plus: "Included"
    },
    {
      feature: "Warning-specific profile image overrides",
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
        "Use Display Family & Guests when the tile should follow Homey's people status instead of a device capability.",
      answerHtml: homeyFamilyGuestsFaqHtml,
      id: "faq-family-guests",
      question: "How do Family & Guests tiles work?"
    },
    {
      answer:
        "Version 1.2.1 bypasses stale Homey device cache during shared polling, so live values and negative solar export readings stay aligned with Homey.",
      answerHtml: homeyLiveValueFreshnessFaqHtml,
      id: "faq-live-values",
      question: "Why should power, solar, or graph values now stay fresh?"
    },
    {
      answer:
        "Use Graph Background for trend context, then add a text badge when the tile needs stronger foreground contrast.",
      answerHtml: homeyGraphBadgeFaqHtml,
      id: "faq-graph-background",
      question: "How do graph backgrounds and text badges work?"
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
        "Start with the template first, then adjust tile style, graph background, text badge, and warning styling only where they improve readability.",
      answerHtml: homeyDisplayLayoutFaqHtml,
      id: "faq-display-layout",
      question: "What is the best way to keep the tile readable after adding templates?"
    },
    {
      answer:
        "Plus supports separate warning rules for over and under states, with type-aware comparisons and dedicated warning graph styling overrides.",
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
  faqHighlights: [
    {
      copy: "Group, family-only, guest-only, or one named person with an optional profile image.",
      emoji: "@",
      title: "Family & Guests"
    },
    {
      copy: "Custom time span, custom range, line, fill, and positioning.",
      emoji: "~",
      title: "Graph backgrounds"
    },
    {
      copy: "Readable title plates for busy or animated tile backgrounds.",
      emoji: "#",
      title: "Text badges"
    },
    {
      copy: "Separate over and under styling, flash, and graph overrides.",
      emoji: "!",
      title: "Warning states"
    }
  ],
  faqIntro: "Detailed setup, device, Family & Guests, graph, custom profile image, warning, and troubleshooting guides for every Homey Pro info button on Stream Deck.",
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
  listDescription: "Live Homey tiles for values, Family & Guests presence, graph backgrounds, custom person images, warnings, and room launchers.",
  name: "Homey Pro",
  plusIcon: "/assets/homey/plus-icon.png",
  previewTiles: [
    {
      image: "/assets/homey/generated/homey-energy-live.svg",
      label: "Graph background"
    },
    {
      image: "/assets/homey/generated/homey-family-avatar-bob.svg",
      label: "Profile image"
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
      label: "Text badge"
    }
  ],
  releaseNotes: [
    {
      copy: "Shared polling now bypasses the stale Homey SDK device cache, so live sensor tiles keep negative solar export values and fast-changing power readings aligned with Homey.",
      emoji: "1",
      title: "Fresh live values"
    },
    {
      copy: "Family & Guests now works as a real dashboard surface for both group and person views, with clearer person-focused presentation.",
      emoji: "2",
      title: "Presence tiles"
    },
    {
      copy: "Plus can show a Homey avatar, a remote image URL, or an imported local image path on person tiles, including radius, border, background, and warning-specific overrides.",
      emoji: "3",
      title: "Profile images"
    },
    {
      copy: "Graph backgrounds, custom ranges, text badges, and warning graph overrides are now presented as a first-class part of the product instead of hidden extras.",
      emoji: "4",
      title: "Dashboard tiles"
    }
  ],
  releaseVersion: "1.2.1",
  salesHighlights: [
    {
      copy: "See power, climate, door, and status values directly on the key.",
      emoji: "+",
      title: "Live tiles"
    },
    {
      copy: "Show Family & Guests as one mixed home or away tile, one guest tile, or one named person tile.",
      emoji: "@",
      title: "Presence tiles"
    },
    {
      copy: "Add background graphs, custom ranges, and time windows to make fast-changing values readable at a glance.",
      emoji: "~",
      title: "Graph backgrounds"
    },
    {
      copy: "Use a Homey avatar, a remote image URL, or an imported local image path on person tiles so one glance tells you exactly who the tile represents.",
      emoji: "O",
      title: "Custom profile images"
    },
    {
      copy: "Turn important states into clear alarm tiles that grab your eye when something changes.",
      emoji: "!",
      title: "Alerts that stand out"
    },
    {
      copy: "Launch room or scene folders so the deck stays useful instead of crowded.",
      emoji: ">",
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
    "A focused Stream Deck plugin for Homey Pro. Use it for fresh live values, Family & Guests presence, graph-backed tiles, custom profile images, warnings, and room launchers. Version 1.2.1 also keeps solar/export power readings aligned with Homey by avoiding stale device cache reads.",
  setupHighlights: [
    {
      copy: "Add your local Homey address and a Personal Access Token.",
      emoji: "1",
      title: "1. Connect Homey"
    },
    {
      copy: "Pick the device and capability you want to show or control.",
      emoji: "2",
      title: "2. Choose the source"
    },
    {
      copy: "Decide if the key should display, toggle, or set an exact target value.",
      emoji: "3",
      title: "3. Choose behavior"
    },
    {
      copy: "Finish with title text, units, icons, graph backgrounds, profile images, text badges, and warning rules.",
      emoji: "4",
      title: "4. Make it yours"
    }
  ],
  showcaseBoards: [
    {
      caption: "Live values, presence, profile images, graph backgrounds, warning states, and room launchers on one deck.",
      tiles: [
        {
          image: "/assets/homey/generated/homey-family-guests.svg",
          label: "Presence"
        },
        {
          image: "/assets/homey/generated/homey-family-avatar-bob.svg",
          label: "Person avatar"
        },
        {
          image: "/assets/homey/generated/homey-energy-live.svg",
          label: "Energy graph"
        },
        {
          image: "/assets/homey/generated/homey-solar-export.svg",
          label: "Graph + fill"
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
          label: "Text badge"
        },
        {
          image: "/assets/homey/generated/homey-room-launcher.svg",
          label: "Room launcher"
        }
      ],
      title: "Homey Pro deck"
    }
  ]
};

export const marketplacePlugins = [homeyPlugin];

export function faqIdForHelpTopic(topic: string): string {
  return homeyPlugin.helpTopicMap[topic] ?? "faq-connect-homey";
}
