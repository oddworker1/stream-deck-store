<template>
  <main class="mx-auto flex w-full max-w-[1240px] flex-col gap-10 px-4 pb-24 pt-8 md:px-8">
    <section class="grid gap-8 overflow-hidden rounded-[32px] bg-[var(--surface-panel)] px-5 py-8 shadow-[var(--shadow-soft)] lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-10">
      <div class="space-y-8">
        <div class="space-y-5">
          <div class="flex items-center gap-4">
            <img :src="plugin.icon" :alt="plugin.name" class="h-20 w-20 rounded-[22px] shadow-[0_24px_38px_rgba(0,0,0,0.36)]" />
            <img alt="" class="h-16 w-16 rounded-[20px] shadow-[0_20px_34px_rgba(0,0,0,0.32)]" src="/assets/homey/plus-icon.png" />
          </div>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="status in plugin.statuses"
              :key="status.label"
              class="status-chip"
              :class="statusClassMap[status.tone]"
            >
              {{ status.label }}
            </span>
          </div>

          <h1 class="max-w-3xl text-5xl font-medium leading-[0.93] tracking-[-0.06em] text-white md:text-7xl">
            {{ plugin.name }}
          </h1>
          <p class="max-w-xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
            {{ plugin.detailSummary }}
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <a
            v-for="(link, index) in plugin.ctaLinks"
            :key="link.label"
            :href="link.href"
            :class="index === 0 ? 'action-button-primary' : 'action-button-secondary'"
            :target="link.href.startsWith('http') ? '_blank' : undefined"
            :rel="link.href.startsWith('http') ? 'noreferrer' : undefined"
          >
            {{ link.label }}
          </a>
        </div>

        <div class="grid gap-3 sm:grid-cols-3">
          <article v-for="metric in plugin.metrics" :key="metric.label" class="hero-metric-card">
            <span>{{ metric.label }}</span>
            <strong>{{ metric.value }}</strong>
          </article>
        </div>
      </div>

      <div class="relative min-h-[430px] overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_18%_18%,rgba(0,229,255,0.14),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] shadow-[var(--shadow-panel)]">
        <div class="showcase-glow showcase-glow-strong" />
        <img alt="" class="floating-tile absolute left-8 top-10 h-48 w-48" src="/assets/homey/generated/homey-energy-live.svg" style="--tile-delay:-1.4s; --tile-duration:7.1s; --tile-rot:-10deg;" />
        <img alt="" class="floating-tile absolute right-10 top-8 h-44 w-44" src="/assets/homey/generated/homey-solar-export.svg" style="--tile-delay:-2.4s; --tile-duration:8.2s; --tile-rot:9deg;" />
        <img alt="" class="floating-tile absolute left-40 top-48 h-40 w-40" src="/assets/homey/generated/homey-energy-warning-over.svg" style="--tile-delay:-0.6s; --tile-duration:6.7s; --tile-rot:7deg;" />
        <img alt="" class="floating-tile absolute bottom-8 right-14 h-40 w-40" src="/assets/homey/generated/homey-room-launcher.svg" style="--tile-delay:-3.1s; --tile-duration:7.8s; --tile-rot:-8deg;" />
      </div>
    </section>

    <section class="grid gap-6 xl:grid-cols-[1fr_320px]">
      <div class="space-y-6">
        <div class="flex flex-wrap gap-2 rounded-[24px] bg-[var(--surface-panel)] p-4 shadow-[var(--shadow-soft)]">
          <a
            v-for="anchor in sectionAnchors"
            :key="anchor.href"
            :href="anchor.href"
            class="filter-chip"
          >
            {{ anchor.label }}
          </a>
        </div>

        <section id="visuals" class="content-section">
          <SectionHeader
            eyebrow="Visual previews"
            help-body="These previews are rendered from the same tile artwork system used by the plugin, so the visuals stay grounded in the real product."
            help-href="/homey-help-display"
            help-title="Rendered from the actual plugin"
            title="Rendered from the actual plugin"
          />
          <div class="grid gap-4 lg:grid-cols-2">
            <article
              v-for="visual in plugin.visuals"
              :key="visual.title"
              class="rounded-[26px] bg-[var(--surface-card)] p-5 shadow-[var(--shadow-panel)]"
            >
              <div class="mb-5 flex min-h-[220px] items-center justify-center overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.12),transparent_38%),rgba(255,255,255,0.02)]">
                <img :alt="visual.title" :src="visual.image" class="floating-tile h-44 w-44" style="--tile-delay:-1.1s; --tile-duration:7.4s; --tile-rot:0deg;" />
              </div>
              <div class="flex items-start justify-between gap-3">
                <div>
                  <h3 class="text-xl font-medium tracking-[-0.04em] text-white">
                    {{ visual.title }}
                  </h3>
                  <p class="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                    {{ visual.description }}
                  </p>
                </div>
                <InfoTooltip
                  :body="visual.description"
                  href="/homey-help-display"
                  :title="visual.title"
                />
              </div>
            </article>
          </div>
        </section>

        <section id="features" class="content-section">
          <SectionHeader
            eyebrow="Core benefits"
            help-body="This section keeps the main use-cases scannable. Each point is phrased as a real outcome instead of a long technical explanation."
            help-href="/homey-help-actions"
            help-title="What this plugin enables"
            title="What it enables on the desk"
          />
          <div class="grid gap-4 lg:grid-cols-2">
            <article
              v-for="highlight in plugin.highlights"
              :key="highlight"
              class="rounded-[24px] bg-[var(--surface-card)] px-5 py-5 shadow-[var(--shadow-panel)]"
            >
              <span class="block text-base font-medium text-white">{{ highlight }}</span>
            </article>
          </div>
        </section>

        <section id="install" class="content-section">
          <SectionHeader
            eyebrow="Install flow"
            help-body="Setup is intentionally linear: connect Homey, choose the signal, define how the key behaves, then refine the visual."
            help-href="/homey-help-setup"
            help-title="How setup works"
            title="Set up without losing the thread"
          />
          <div class="grid gap-4 lg:grid-cols-2">
            <article
              v-for="(step, index) in plugin.setupSteps"
              :key="step.title"
              class="rounded-[26px] bg-[var(--surface-card)] p-5 shadow-[var(--shadow-panel)]"
            >
              <div class="flex items-start justify-between gap-3">
                <div>
                  <p class="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[var(--accent-cyan)]">
                    Step {{ index + 1 }}
                  </p>
                  <h3 class="mt-3 text-xl font-medium tracking-[-0.04em] text-white">
                    {{ step.title }}
                  </h3>
                  <p class="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    {{ step.body }}
                  </p>
                </div>
                <InfoTooltip
                  :body="step.body"
                  :href="installHelpLinks[index] ?? '/homey-help-setup'"
                  :title="step.title"
                />
              </div>
            </article>
          </div>
        </section>

        <section id="faq" class="content-section">
          <SectionHeader eyebrow="FAQ" title="Common questions without the documentation wall" />
          <FaqAccordion :items="plugin.faq" />
        </section>

        <section id="support" class="content-section">
          <SectionHeader
            eyebrow="Support"
            help-body="Each support route is focused on one job so users do not have to wade through a generic wall of documentation."
            help-href="/homey-help-troubleshooting"
            help-title="How support is organized"
            title="Focused help routes"
          />
          <div class="grid gap-4 md:grid-cols-2">
            <RouterLink
              v-for="topic in plugin.helpTopics"
              :key="topic.slug"
              :to="`/help/homey/${topic.slug}`"
              class="rounded-[24px] bg-[var(--surface-card)] px-5 py-5 shadow-[var(--shadow-panel)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--surface-card-hover)]"
            >
              <div class="flex items-start justify-between gap-3">
                <div>
                  <p class="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--accent-cyan)]">
                    Focused help
                  </p>
                  <h3 class="mt-3 text-xl font-medium tracking-[-0.04em] text-white">
                    {{ topic.title }}
                  </h3>
                  <p class="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    {{ topicPreview(topic.slug, topic.body) }}
                  </p>
                </div>
                <InfoTooltip
                  :body="topic.body"
                  :href="`/help/homey/${topic.slug}`"
                  :title="topic.title"
                />
              </div>
            </RouterLink>
          </div>
        </section>
      </div>

      <aside class="space-y-6 xl:sticky xl:top-24 xl:h-fit">
        <section class="rounded-[28px] bg-[var(--surface-panel)] p-5 shadow-[var(--shadow-soft)]">
          <p class="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--accent-cyan)]">
            Quick facts
          </p>
          <div class="mt-5 grid gap-3">
            <article class="quick-fact-card">
              <div class="flex items-center justify-between gap-3">
                <p class="quick-fact-label">Version</p>
                <InfoTooltip
                  body="Current public build of Homey Pro Control."
                  title="Version"
                />
              </div>
              <p class="quick-fact-value">
                {{ plugin.version }}
              </p>
            </article>

            <article class="quick-fact-card">
              <div class="flex items-center justify-between gap-3">
                <p class="quick-fact-label">Compatibility</p>
                <InfoTooltip
                  :body="plugin.compatibility.join(' • ')"
                  title="Compatibility"
                />
              </div>
              <p class="quick-fact-value">
                Homey Pro + Stream Deck 6.9+
              </p>
            </article>

            <article class="quick-fact-card">
              <div class="flex items-center justify-between gap-3">
                <p class="quick-fact-label">Requirements</p>
                <InfoTooltip
                  :body="plugin.requirements.join(' • ')"
                  href="/homey-help-setup"
                  title="Requirements"
                />
              </div>
              <p class="quick-fact-value">
                Local URL + Personal Access Token
              </p>
            </article>
          </div>
        </section>

        <section class="rounded-[28px] bg-[linear-gradient(180deg,rgba(0,229,255,0.08),rgba(255,255,255,0.02))] p-5 shadow-[var(--shadow-soft)]">
          <div class="flex items-center gap-3">
            <p class="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--accent-cyan)]">
              Get Plus
            </p>
            <InfoTooltip
              body="Plus extends the same core actions with richer tile composition, independent warning states, secondary values, and more deliberate control-surface layouts."
              href="/homey-help-warnings"
              title="What Plus adds"
            />
          </div>
          <h2 class="mt-3 text-2xl font-medium tracking-[-0.05em] text-white">
            When the tile should feel intentional
          </h2>
          <ul class="mt-4 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
            <li v-for="item in plugin.plusBullets" :key="item">{{ item }}</li>
          </ul>
        </section>

        <section class="rounded-[28px] bg-[var(--surface-panel)] p-5 shadow-[var(--shadow-soft)]">
          <p class="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--accent-cyan)]">
            Related
          </p>
          <article
            v-for="related in plugin.relatedPlugins"
            :key="related.title"
            class="mt-4 rounded-[22px] bg-[var(--surface-card)] p-4 shadow-[var(--shadow-panel)]"
          >
            <p class="text-xs uppercase tracking-[0.22em] text-[var(--text-tertiary)]">
              {{ related.state }}
            </p>
            <h3 class="mt-2 text-lg font-medium text-white">
              {{ related.title }}
            </h3>
            <p class="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
              {{ related.description }}
            </p>
          </article>
        </section>
      </aside>
    </section>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

import FaqAccordion from "../components/FaqAccordion.vue";
import InfoTooltip from "../components/InfoTooltip.vue";
import SectionHeader from "../components/SectionHeader.vue";
import { homeyPlugin, type StatusTone } from "../data/site";

const plugin = homeyPlugin;

const statusClassMap: Record<StatusTone, string> = {
  blue: "status-chip-blue",
  gold: "status-chip-gold",
  green: "status-chip-green",
  neutral: "status-chip-neutral"
};

const sectionAnchors = [
  { href: "#visuals", label: "Visuals" },
  { href: "#features", label: "Features" },
  { href: "#install", label: "Installation" },
  { href: "#faq", label: "FAQ" },
  { href: "#support", label: "Support" }
];

const installHelpLinks = [
  "/homey-help-setup",
  "/homey-help-select",
  "/homey-help-actions",
  "/homey-help-display"
];

const topicPreviewMap: Record<string, string> = {
  actions: "Toggle, target writes, and control behavior.",
  display: "Title math, icon treatment, and layout.",
  select: "Start with device, then choose the signal.",
  setup: "URL, token, and reconnect issues.",
  troubleshooting: "What to send and what to check first.",
  warnings: "Over and under rules, flashing, and types."
};

function topicPreview(slug: string, text: string): string {
  return topicPreviewMap[slug] ?? text.match(/^[^.?!]+[.?!]/)?.[0] ?? text;
}
</script>
