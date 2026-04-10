const apiKeyGuideHref =
  "https://support.homey.app/hc/en-us/articles/8178797067292-Getting-started-with-API-Keys";

export const homeyConnectFaqHtml = String.raw`
  <div class="faq-guide">
    <p class="faq-intro-copy">The plugin uses the Homey Pro local API. You need a Homey address that works from the same PC as Stream Deck, plus a Personal Access Token from Homey.</p>
    <div class="faq-badge-row">
      <span class="faq-badge">Local address</span>
      <span class="faq-badge">Personal Access Token</span>
      <span class="faq-badge">Shared global settings</span>
      <span class="faq-badge">Realtime + polling fallback</span>
    </div>
    <figure class="faq-figure">
      <img alt="Homey setup overview with address and Personal Access Token" loading="lazy" src="/assets/homey/faq-setup-connect.svg" />
      <figcaption>One working Setup tab can feed every Homey action because the connection is stored in Stream Deck global settings.</figcaption>
    </figure>
    <div class="faq-grid">
      <section class="faq-card">
        <h3>Connection steps</h3>
        <ol class="faq-steps">
          <li>Open any Homey action and go to <strong>Setup</strong>.</li>
          <li>Enter a local address such as <code>http://192.168.1.44</code>, <code>https://homeypro.local</code>, or your <code>homeylocal.com</code> host.</li>
          <li>Paste a Personal Access Token from the Homey web app developer settings.</li>
          <li>Wait for the status line to change to <strong>Connected to Homey Pro</strong> or <strong>Connected to &lt;your Homey name&gt;</strong>.</li>
        </ol>
      </section>
      <section class="faq-card">
        <h3>What success looks like</h3>
        <ul class="faq-checklist">
          <li>The device list starts filling in on the Select tab.</li>
          <li>Other Homey actions pick up the same connection automatically.</li>
          <li>The plugin can keep live tiles fresh through realtime events plus its shared polling fallback.</li>
        </ul>
      </section>
    </div>
    <div class="faq-callout">
      <strong>Good to know</strong>
      <span>The client normalizes addresses automatically and prefers HTTPS for <code>.local</code> and <code>homeylocal.com</code> style hosts.</span>
    </div>
  </div>
`;

export const homeyEmptyCatalogFaqHtml = String.raw`
  <div class="faq-guide">
    <p class="faq-intro-copy">An empty device list is usually a connection problem, a hidden filter, or a stale saved setup. Start with the Setup status line before changing anything else.</p>
    <figure class="faq-figure">
      <img alt="Device picker with advanced search filters and capability selection" loading="lazy" src="/assets/homey/faq-device-picker.svg" />
      <figcaption>Advanced Search is useful, but it can also hide everything if room, capability, or favorites filters are still active.</figcaption>
    </figure>
    <div class="faq-grid">
      <section class="faq-card">
        <h3>Check these first</h3>
        <ol class="faq-steps">
          <li>Confirm the Setup tab says <strong>Connected</strong>. If not, fix address or token first.</li>
          <li>Open <strong>Advanced Search</strong> and clear room, capability, and favorites filters.</li>
          <li>Try the raw IP or another local hostname if your network is inconsistent with discovery.</li>
          <li>Use <strong>Debug &gt; Copy Debug Snapshot</strong> if the list still stays empty.</li>
        </ol>
      </section>
      <section class="faq-card">
        <h3>Most common causes</h3>
        <ul class="faq-checklist">
          <li>The Homey address is wrong or not reachable from this PC.</li>
          <li>The Personal Access Token is invalid, expired, or pasted with extra whitespace.</li>
          <li>Saved filters are hiding the devices you expect to see.</li>
          <li>The Homey changed network identity and the saved local address no longer points to it.</li>
        </ul>
      </section>
    </div>
    <div class="faq-callout">
      <strong>Scope note</strong>
      <span>If devices load but rooms, flows, or advanced flows look incomplete, the API key may be missing those scopes. Create a broader Personal Access Token.</span>
    </div>
  </div>
`;

export const homeySelectDeviceFaqHtml = String.raw`
  <div class="faq-guide">
    <p class="faq-intro-copy">Pick the device by outcome first, then choose the capability that actually represents the state you want on the key.</p>
    <div class="faq-badge-row">
      <span class="faq-badge">Device first</span>
      <span class="faq-badge">Capability second</span>
      <span class="faq-badge">Auto choose available</span>
      <span class="faq-badge">Advanced Search filters</span>
    </div>
    <figure class="faq-figure">
      <img alt="Device picker with device, capability, and second value fields" loading="lazy" src="/assets/homey/faq-device-picker.svg" />
      <figcaption>The plugin normalizes common Homey capabilities such as on/off, dim, temperature, humidity, alarms, power, and battery.</figcaption>
    </figure>
    <div class="faq-grid">
      <section class="faq-card">
        <h3>A good selection flow</h3>
        <ol class="faq-steps">
          <li>Pick the Homey device you actually want to glance at or control.</li>
          <li>Choose the main capability that best represents the action or reading.</li>
          <li>Leave capability on <strong>Auto choose</strong> only when the device has one obvious main value.</li>
          <li>Add a second value later if the first line is already doing the right job.</li>
        </ol>
      </section>
      <section class="faq-card">
        <h3>Common starting capabilities</h3>
        <ul class="faq-checklist">
          <li><strong>Switch / plug:</strong> <code>onoff</code></li>
          <li><strong>Dimmer:</strong> <code>dim</code></li>
          <li><strong>Blinds / covers:</strong> <code>windowcoverings_set</code> or <code>windowcoverings_tilt_set</code></li>
          <li><strong>Temperature sensor:</strong> <code>measure_temperature</code></li>
          <li><strong>Power meter:</strong> <code>measure_power</code> or <code>meter_power</code></li>
          <li><strong>Door / window:</strong> <code>alarm_contact</code></li>
        </ul>
      </section>
    </div>
    <div class="faq-callout">
      <strong>Start simple</strong>
      <span>Get one clean device and one clean capability working before adding second values, warning rules, or more advanced title templates.</span>
    </div>
  </div>
`;

export const homeySecondValueFaqHtml = String.raw`
  <div class="faq-guide">
    <p class="faq-intro-copy">A second value is useful when it answers a second question at a glance. It is not useful when it just makes the tile harder to scan.</p>
    <div class="faq-badge-row">
      <span class="faq-badge">Display Sensor Value</span>
      <span class="faq-badge">Same device only</span>
      <span class="faq-badge faq-badge-plus">Plus feature</span>
    </div>
    <div class="faq-grid">
      <section class="faq-card">
        <h3>Use a second value when</h3>
        <ul class="faq-checklist">
          <li>Temperature and humidity belong together on one climate tile.</li>
          <li>Power plus current or voltage helps explain an energy reading.</li>
          <li>You need a secondary state such as battery, alarm, or another live sensor value.</li>
        </ul>
      </section>
      <section class="faq-card">
        <h3>Skip it when</h3>
        <ul class="faq-checklist">
          <li>The second line repeats the same unit without adding context.</li>
          <li>The tile already feels crowded with three short lines.</li>
          <li>The user only needs one fast decision from that key.</li>
        </ul>
      </section>
    </div>
    <div class="faq-gallery faq-gallery-two">
      <figure class="faq-gallery-card">
        <img alt="Example climate tile with compact readable value layout" loading="lazy" src="/assets/homey/title-template-example-climate.svg" />
        <figcaption>
          <strong>Good use</strong>
          <span>Pair a main reading with one related sensor value.</span>
        </figcaption>
      </figure>
      <figure class="faq-gallery-card">
        <img alt="Example power tile using converted units" loading="lazy" src="/assets/homey/title-template-example-energy.svg" />
        <figcaption>
          <strong>Combine with templates</strong>
          <span>Second-value placeholders work well with Title Template on Plus.</span>
        </figcaption>
      </figure>
    </div>
    <div class="faq-callout">
      <strong>Template placeholders</strong>
      <span>When you enable a second value, you can use <code>{secondaryValue}</code>, <code>{secondaryValueRaw}</code>, <code>{secondaryUnit}</code>, <code>{secondaryState}</code>, <code>{secondaryCapability}</code>, and related placeholders in the title.</span>
    </div>
  </div>
`;

export const homeyActionModeFaqHtml = String.raw`
  <div class="faq-guide">
    <p class="faq-intro-copy">Choose the action by what should happen on press. If the outcome is simple, use the simplest action. If the outcome must be exact, use the action that writes an exact target.</p>
    <figure class="faq-figure">
      <img alt="Comparison between Toggle Device, Set Device State, and target percentage" loading="lazy" src="/assets/homey/faq-action-modes.svg" />
      <figcaption>Toggle Device is for state flips. Set Device State is for exact boolean, number, text, or percentage targets.</figcaption>
    </figure>
    <div class="faq-compare">
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Best for</th>
            <th>Avoid when</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Toggle Device</strong></td>
            <td>Lights, plugs, and other simple on or off behavior.</td>
            <td>You need an exact dim, cover, temperature, or text target.</td>
          </tr>
          <tr>
            <td><strong>Set Device State</strong></td>
            <td>Exact values, percentages, text, and boolean writes.</td>
            <td>You only want a one-press state flip with no target logic.</td>
          </tr>
          <tr>
            <td><strong>Run Flow</strong></td>
            <td>Homey scenes or automation logic that should decide what happens.</td>
            <td>The device capability itself is already the clearest action.</td>
          </tr>
          <tr>
            <td><strong>Refresh Data</strong></td>
            <td>Manual resync when you want to force fresh values or catalog data.</td>
            <td>You expect the key to control a device state directly.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="faq-callout">
      <strong>Plus tip</strong>
      <span><strong>Target / On</strong> and <strong>Target / Off</strong> are available for percentage-style capabilities such as dimmers and covers. They are useful when a single key should bounce between a favorite target and a fallback state.</span>
    </div>
  </div>
`;

export const homeyDimInputFaqHtml = String.raw`
  <div class="faq-guide">
    <p class="faq-intro-copy">The dim percentage field only appears when the action, capability, and value type all point to a numeric target. If one of those is wrong, the input stays hidden.</p>
    <figure class="faq-figure">
      <img alt="Action mode example with Set Device State and target percentage" loading="lazy" src="/assets/homey/faq-action-modes.svg" />
      <figcaption>Dimmers and covers are percentage-style capabilities, so the PI exposes a 0-100 target and converts it to Homey's normalized scale automatically.</figcaption>
    </figure>
    <div class="faq-grid">
      <section class="faq-card">
        <h3>How to make the field appear</h3>
        <ol class="faq-steps">
          <li>Choose <strong>Set Device State</strong>.</li>
          <li>Select a settable percentage-style capability such as <code>dim</code> or <code>windowcoverings_set</code>.</li>
          <li>Set <strong>Value Type</strong> to <strong>Percentage</strong> or <strong>Number</strong>.</li>
          <li>Enter a target from <code>0</code> to <code>100</code>.</li>
        </ol>
      </section>
      <section class="faq-card">
        <h3>Why it may still be hidden</h3>
        <ul class="faq-checklist">
          <li>The action is still <strong>Toggle Device</strong>.</li>
          <li>The selected capability is read-only and cannot accept writes.</li>
          <li><strong>Value Type</strong> is set to <strong>Boolean</strong> or <strong>Text</strong>.</li>
          <li>The device uses the opposite cover direction and needs <strong>Reverse Direction</strong>.</li>
        </ul>
      </section>
    </div>
    <div class="faq-callout">
      <strong>Scale conversion</strong>
      <span>The plugin converts dimmers and cover positions from the PI's <code>0-100</code> percentage input to Homey's normalized <code>0-1</code> scale for you.</span>
    </div>
  </div>
`;

export const homeyTitleTemplateFaqHtml = String.raw`
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

export const homeyDisplayLayoutFaqHtml = String.raw`
  <div class="faq-guide">
    <p class="faq-intro-copy">Readable tiles come from the order of decisions: content first, structure second, styling last. Do not try to fix a crowded template only with colors or font size.</p>
    <figure class="faq-figure">
      <img alt="Display layout tuning with title template, polling, and readable preview" loading="lazy" src="/assets/homey/faq-display-layout.svg" />
      <figcaption>The cleanest tiles usually start with a simple two-line template and only add more styling when the meaning is already clear.</figcaption>
    </figure>
    <div class="faq-grid">
      <section class="faq-card">
        <h3>Recommended order</h3>
        <ol class="faq-steps">
          <li>Make the title template readable with real data first.</li>
          <li>Pick a tile style that matches the amount of text you need.</li>
          <li>Set decimals and empty fallback text.</li>
          <li>Only then tune text size, position, alignment, and colors.</li>
        </ol>
      </section>
      <section class="faq-card">
        <h3>Starting defaults</h3>
        <ul class="faq-checklist">
          <li><strong>Polling:</strong> start at <code>30 seconds</code> unless the value really needs a faster fallback refresh.</li>
          <li><strong>Decimals:</strong> usually <code>1</code> for temperature and <code>0</code> for counts, alarms, and battery.</li>
          <li><strong>Empty:</strong> keep a clear fallback such as <code>--</code>.</li>
          <li><strong>Color:</strong> use it as a state signal, not as decoration.</li>
        </ul>
      </section>
    </div>
    <div class="faq-callout">
      <strong>Refresh behavior</strong>
      <span>The plugin shares refresh work across keys and also listens to realtime events where Homey exposes them. Faster polling is helpful only when the value truly changes fast and you need a tighter fallback.</span>
    </div>
  </div>
`;

export const homeyWarningRulesFaqHtml = String.raw`
  <div class="faq-guide">
    <p class="faq-intro-copy">Warning rules are independent over and under states. That means one tile can react to both extremes, with separate thresholds, colors, text size, and icons.</p>
    <div class="faq-badge-row">
      <span class="faq-badge faq-badge-plus">Plus feature</span>
      <span class="faq-badge">Over + under states</span>
      <span class="faq-badge">Primary or second value</span>
      <span class="faq-badge">Number, boolean, or text</span>
    </div>
    <figure class="faq-figure">
      <img alt="Warning rule setup with over and under examples" loading="lazy" src="/assets/homey/faq-warning-rules.svg" />
      <figcaption>Each direction has its own enable switch, compare type, condition, styling, and optional flash settings.</figcaption>
    </figure>
    <div class="faq-grid">
      <section class="faq-card">
        <h3>How to build one</h3>
        <ol class="faq-steps">
          <li>Enable <strong>Warning over</strong> or <strong>Warning under</strong>.</li>
          <li>Choose whether the rule should watch the primary value or the optional second value.</li>
          <li>Pick the compare type: number, boolean, or text.</li>
          <li>Set the condition and the threshold or expected value.</li>
          <li>Choose the warning colors, text, and icon that should take over while active.</li>
        </ol>
      </section>
      <section class="faq-card">
        <h3>Good starter patterns</h3>
        <ul class="faq-checklist">
          <li><strong>Power:</strong> over <code>4000</code> turns the tile red.</li>
          <li><strong>Leak / contact / smoke:</strong> boolean equals <code>true</code>.</li>
          <li><strong>Temperature:</strong> under <code>18</code> turns the tile blue.</li>
          <li><strong>Text states:</strong> match exact strings such as <code>open</code>, <code>jammed</code>, or another capability label.</li>
        </ul>
      </section>
    </div>
    <div class="faq-callout">
      <strong>Numeric rules use rendered values</strong>
      <span>For numeric comparisons, the plugin uses the rendered numeric value, including the normalized <code>0-100</code> percentage scale for dimmers and covers.</span>
    </div>
  </div>
`;

export const homeyWarningFlashFaqHtml = String.raw`
  <div class="faq-guide">
    <p class="faq-intro-copy">Flash is a visibility boost for active warnings. Use it to draw the eye first, then let the tile settle into a solid warning state if the condition stays true.</p>
    <figure class="faq-figure">
      <img alt="Warning rule example with flash timing" loading="lazy" src="/assets/homey/faq-warning-rules.svg" />
      <figcaption>Flash timing belongs to each warning direction, so your over and under states can behave differently.</figcaption>
    </figure>
    <div class="faq-grid">
      <section class="faq-card">
        <h3>Recommended settings</h3>
        <ul class="faq-checklist">
          <li>Start around <code>600-1000 ms</code> for glanceable alerts.</li>
          <li>The minimum flash interval is <code>200 ms</code>.</li>
          <li>Leave <strong>Flash For</strong> empty to keep flashing while the warning stays active.</li>
          <li>Set a duration if you want a short attention pulse and then a solid warning tile.</li>
        </ul>
      </section>
      <section class="faq-card">
        <h3>How it behaves</h3>
        <ol class="faq-steps">
          <li>The warning becomes active when the rule is true.</li>
          <li>The tile flashes during the configured flash window.</li>
          <li>After the flash window ends, the warning can settle as a solid state while the rule is still active.</li>
          <li>When the rule clears, the tile returns to its normal display.</li>
        </ol>
      </section>
    </div>
  </div>
`;

export const homeyDebugFaqHtml = String.raw`
  <div class="faq-guide">
    <p class="faq-intro-copy">When support needs context, start with <strong>Copy Debug Snapshot</strong>. It captures the active PI state in one pasteable JSON block and avoids guessing.</p>
    <div class="faq-badge-row">
      <span class="faq-badge">Sanitized snapshot</span>
      <span class="faq-badge">Selected device + capability</span>
      <span class="faq-badge">Recent PI events</span>
      <span class="faq-badge">Browser preview link</span>
    </div>
    <figure class="faq-figure">
      <img alt="Debug snapshot with copy button and sanitized JSON preview" loading="lazy" src="/assets/homey/faq-debug-snapshot.svg" />
      <figcaption>The Debug tab also exposes <strong>Open In Browser</strong> for visual previews and <strong>Reapply Saved Connection</strong> when the PI lost the last local cache.</figcaption>
    </figure>
    <div class="faq-grid">
      <section class="faq-card">
        <h3>Use this when</h3>
        <ol class="faq-steps">
          <li>A device or capability behaves differently than expected.</li>
          <li>The setup looks connected but the UI is out of sync.</li>
          <li>You need to show exactly which action settings are active.</li>
        </ol>
      </section>
      <section class="faq-card">
        <h3>What the snapshot includes</h3>
        <ul class="faq-checklist">
          <li>Connection state and status message.</li>
          <li>Catalog counts for devices, rooms, flows, and advanced flows.</li>
          <li>Selected device, selected capability, and secondary capability.</li>
          <li>Sanitized action settings, filter state, and recent PI events.</li>
        </ul>
      </section>
    </div>
    <div class="faq-callout">
      <strong>Secrets are redacted</strong>
      <span>The snapshot does not dump the raw Homey address or API key. It reports whether those values exist and includes sanitized settings instead.</span>
    </div>
  </div>
`;

export const homeyApiKeyFaqHtml = String.raw`
  <div class="faq-guide">
    <p class="faq-intro-copy">Use a Personal Access Token from the Homey web app. The plugin does not use your Homey cloud password or a browser session token.</p>
    <figure class="faq-figure">
      <img alt="Homey setup overview with address and Personal Access Token" loading="lazy" src="/assets/homey/faq-setup-connect.svg" />
      <figcaption>The same token is reused across actions through Stream Deck global settings, so replacing it once fixes the whole plugin.</figcaption>
    </figure>
    <div class="faq-grid">
      <section class="faq-card">
        <h3>Create the token</h3>
        <ol class="faq-steps">
          <li>Open the Homey web app developer settings.</li>
          <li>Create a new <strong>Personal Access Token</strong>.</li>
          <li>Paste it into the plugin's Setup tab.</li>
          <li>Reconnect and verify that the device list loads again.</li>
        </ol>
      </section>
      <section class="faq-card">
        <h3>Create a new token when</h3>
        <ul class="faq-checklist">
          <li>The Setup tab never reaches <strong>Connected</strong>.</li>
          <li>The token belongs to another Homey Pro.</li>
          <li>Rooms, flows, or advanced flows stay limited because the token has narrow scopes.</li>
        </ul>
      </section>
    </div>
    <div class="faq-callout">
      <strong>Official guide</strong>
      <span><a href="${apiKeyGuideHref}" rel="noreferrer" target="_blank">Open the Homey API key guide</a> if you need the exact Homey steps.</span>
    </div>
  </div>
`;
