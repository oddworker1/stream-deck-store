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

const homeyTitleTemplateFaqHtml = String.raw`
  <div class="template-guide">
    <p class="template-intro">Title Template is the text renderer for the key. Every line break becomes a new line on the tile, and everything inside <code>{...}</code> is replaced with live data.</p>
    <div class="template-badge-row">
      <span class="template-badge">Multi-line titles</span>
      <span class="template-badge">Live placeholders</span>
      <span class="template-badge">Units and labels</span>
      <span class="template-badge">Action-specific values</span>
      <span class="template-badge template-badge-plus">Plus: math filters and second value</span>
    </div>
    <figure class="template-screenshot">
      <img alt="Title Template field in the Display tab with a math example" loading="lazy" src="/assets/homey/title-template-property-inspector.png" />
      <figcaption>The editor accepts plain text, line breaks, and placeholders such as <code>{value}</code> or <code>{valueRaw|div:1000|fixed:1}</code>.</figcaption>
    </figure>
    <div class="template-callout">
      <strong>Start here</strong>
      <span>Use <code>{value}</code> when you want the plugin's normal formatting. Use <code>{valueRaw}</code> when you want math, custom units, or your own rounding.</span>
    </div>
    <div class="template-sections">
      <section class="template-panel">
        <h3>Common placeholders</h3>
        <p>These are the ones most users need on device and sensor tiles.</p>
        <div class="template-token-list">
          <span class="template-token"><code>{deviceName}</code> device name</span>
          <span class="template-token"><code>{value}</code> formatted value with decimals and unit</span>
          <span class="template-token"><code>{valueRaw}</code> raw value for math or custom units</span>
          <span class="template-token"><code>{state}</code> ON/OFF or current state label</span>
          <span class="template-token"><code>{unit}</code> detected or overridden unit</span>
          <span class="template-token"><code>{room}</code> Homey room name</span>
          <span class="template-token"><code>{capability}</code> capability title</span>
          <span class="template-token"><code>{capabilityId}</code> raw capability id</span>
          <span class="template-token"><code>{kind}</code> normalized type like power or temperature</span>
          <span class="template-token"><code>{deviceClass}</code> Homey device class</span>
        </div>
      </section>
      <section class="template-panel">
        <h3>Second value placeholders</h3>
        <p>Available on <strong>Display Sensor Value</strong> when you choose a second capability. This is a Plus feature.</p>
        <div class="template-token-list">
          <span class="template-token"><code>{secondaryValue}</code> formatted second value</span>
          <span class="template-token"><code>{secondaryValueRaw}</code> raw second value for math</span>
          <span class="template-token"><code>{secondaryUnit}</code> second unit</span>
          <span class="template-token"><code>{secondaryState}</code> second state label</span>
          <span class="template-token"><code>{secondaryCapability}</code> second capability title</span>
          <span class="template-token"><code>{secondaryCapabilityId}</code> second capability id</span>
          <span class="template-token"><code>{secondaryKind}</code> second normalized type</span>
        </div>
      </section>
      <section class="template-panel">
        <h3>Flow and refresh placeholders</h3>
        <p>Useful when the action is tied to a Flow, Advanced Flow, or Refresh tile.</p>
        <div class="template-token-list">
          <span class="template-token"><code>{flowName}</code> selected flow name</span>
          <span class="template-token"><code>{flowType}</code> Flow or Advanced</span>
          <span class="template-token"><code>{homeyName}</code> connected Homey name</span>
          <span class="template-token"><code>{state}</code> READY, BROKEN, or OFFLINE</span>
        </div>
      </section>
      <section class="template-panel">
        <h3>Room summary placeholders</h3>
        <p>Used by the room launcher or summary style tiles.</p>
        <div class="template-token-list">
          <span class="template-token"><code>{summary}</code> chosen summary line</span>
          <span class="template-token"><code>{power}</code> rounded room power</span>
          <span class="template-token"><code>{temperature}</code> average temperature</span>
          <span class="template-token"><code>{deviceCount}</code> total devices</span>
          <span class="template-token"><code>{activeCount}</code> active devices</span>
          <span class="template-token"><code>{alertCount}</code> alerts in the room</span>
        </div>
      </section>
    </div>
    <section class="template-panel template-panel-wide">
      <h3>Supported filters</h3>
      <p>Chain filters with <code>|</code>. Example: <code>{valueRaw|div:1000|fixed:1}</code>. Math filters are Plus-only.</p>
      <div class="template-token-list">
        <span class="template-token"><code>abs</code> absolute value</span>
        <span class="template-token"><code>add</code> or <code>plus</code> add a number</span>
        <span class="template-token"><code>sub</code> or <code>minus</code> subtract a number</span>
        <span class="template-token"><code>mul</code>, <code>multi</code>, <code>multiply</code> multiply</span>
        <span class="template-token"><code>div</code> divide</span>
        <span class="template-token"><code>round</code> round, optionally with decimals</span>
        <span class="template-token"><code>fixed</code> format with a fixed number of decimals</span>
        <span class="template-token"><code>ceil</code> round up</span>
        <span class="template-token"><code>floor</code> round down</span>
        <span class="template-token"><code>upper</code> uppercase text</span>
        <span class="template-token"><code>lower</code> lowercase text</span>
      </div>
    </section>
    <section class="template-panel template-panel-wide">
      <h3>Recipe examples</h3>
      <div class="template-recipes">
        <article class="template-recipe">
          <strong>Use the plugin's normal formatting</strong>
          <code>{deviceName}
{value}</code>
          <p>Best default. Keeps the selected decimals and unit without extra work.</p>
        </article>
        <article class="template-recipe">
          <strong>Convert watts to kilowatts</strong>
          <code>{deviceName}
{valueRaw|div:1000|fixed:1} kW</code>
          <p>Turns a raw value like <code>4820</code> into <code>4.8 kW</code>.</p>
        </article>
        <article class="template-recipe">
          <strong>Add a second live reading</strong>
          <code>{deviceName}
{value}
{secondaryValue}</code>
          <p>Great for power plus temperature, or temperature plus humidity. Plus-only.</p>
        </article>
        <article class="template-recipe">
          <strong>Show context instead of the raw reading</strong>
          <code>{room}
{capability}
{state}</code>
          <p>Useful when you want the tile to read like a status card instead of just a number.</p>
        </article>
        <article class="template-recipe">
          <strong>Flow or scene tile</strong>
          <code>{flowName}
{flowType}</code>
          <p>Simple and readable for Flow or Advanced Flow buttons.</p>
        </article>
        <article class="template-recipe">
          <strong>Room summary tile</strong>
          <code>{room}
{deviceCount} devices</code>
          <p>Good for folders or dashboards where the room itself is the main context.</p>
        </article>
      </div>
    </section>
    <section class="template-panel template-panel-wide">
      <h3>Example results</h3>
      <div class="template-gallery">
        <figure class="template-gallery-card">
          <img alt="Example tile showing a power reading in kilowatts" loading="lazy" src="/assets/homey/title-template-example-energy.svg" />
          <figcaption>
            <strong>Power tile</strong>
            <span>Custom unit conversion with <code>{valueRaw|div:1000|fixed:2} kW</code>.</span>
          </figcaption>
        </figure>
        <figure class="template-gallery-card">
          <img alt="Example tile showing a climate reading" loading="lazy" src="/assets/homey/title-template-example-climate.svg" />
          <figcaption>
            <strong>Climate tile</strong>
            <span>Readable single-value layout using <code>{deviceName}</code> and <code>{value}</code>.</span>
          </figcaption>
        </figure>
        <figure class="template-gallery-card">
          <img alt="Example tile showing a scene or flow name" loading="lazy" src="/assets/homey/title-template-example-room.svg" />
          <figcaption>
            <strong>Scene or flow tile</strong>
            <span>Compact action label using <code>{flowName}</code> and <code>{flowType}</code>.</span>
          </figcaption>
        </figure>
      </div>
    </section>
    <section class="template-panel template-panel-wide template-panel-tight">
      <h3>Good to know</h3>
      <ul class="template-checklist">
        <li>Missing placeholders render as empty text, so a whole line can end up blank if that value does not exist.</li>
        <li><code>fixed</code> is usually the last math filter because it turns the number into formatted text.</li>
        <li>Use line breaks deliberately. A clean two-line tile is usually easier to read than a crowded three-line tile.</li>
        <li>Math filters and second-value placeholders are Plus features. The basic placeholders still work in the free version.</li>
      </ul>
    </section>
  </div>
`;

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
        "Use Title Template for placeholders, line breaks, custom units, and Plus math filters like div and fixed.",
      answerHtml: homeyTitleTemplateFaqHtml,
      id: "faq-display-template",
      question: "What can Title Template actually do?"
    },
    {
      answer:
        "Start with the template first, then adjust tile style, text size, and text position. Only add extra colors or icons when they communicate something useful faster than text alone.",
      id: "faq-display-layout",
      question: "What is the best way to keep the tile readable after adding templates?"
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
  faqIntro: "Quick answers, template recipes, and troubleshooting for Homey on Stream Deck.",
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
