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
          <p class="max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
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

      <div class="relative min-h-[430px] overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_18%_18%,rgba(0,229,255,0.14),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
        <img alt="" class="absolute left-8 top-10 h-48 w-48 -rotate-[10deg] drop-shadow-[0_26px_40px_rgba(0,0,0,0.38)]" src="/assets/homey/generated/homey-energy-live.svg" />
        <img alt="" class="absolute right-10 top-8 h-44 w-44 rotate-[9deg] drop-shadow-[0_26px_40px_rgba(0,0,0,0.38)]" src="/assets/homey/generated/homey-solar-export.svg" />
        <img alt="" class="absolute left-40 top-48 h-40 w-40 rotate-[7deg] drop-shadow-[0_24px_38px_rgba(0,0,0,0.38)]" src="/assets/homey/generated/homey-energy-warning-over.svg" />
        <img alt="" class="absolute bottom-8 right-14 h-40 w-40 -rotate-[8deg] drop-shadow-[0_24px_38px_rgba(0,0,0,0.38)]" src="/assets/homey/generated/homey-room-launcher.svg" />
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
          <SectionHeader eyebrow="Visual previews" title="Rendered from the actual plugin" />
          <div class="grid gap-4 lg:grid-cols-2">
            <article
              v-for="visual in plugin.visuals"
              :key="visual.title"
              class="rounded-[26px] bg-[var(--surface-card)] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
            >
              <div class="mb-5 flex min-h-[220px] items-center justify-center overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.12),transparent_38%),rgba(255,255,255,0.02)]">
                <img :alt="visual.title" :src="visual.image" class="h-44 w-44 drop-shadow-[0_22px_34px_rgba(0,0,0,0.34)]" />
              </div>
              <h3 class="text-xl font-medium tracking-[-0.04em] text-white">
                {{ visual.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                {{ visual.description }}
              </p>
            </article>
          </div>
        </section>

        <section id="features" class="content-section">
          <SectionHeader eyebrow="Core benefits" title="Why this plugin is useful on a daily desk" />
          <div class="grid gap-4 lg:grid-cols-2">
            <article
              v-for="highlight in plugin.highlights"
              :key="highlight"
              class="rounded-[24px] bg-[var(--surface-card)] px-5 py-4 text-sm leading-7 text-[var(--text-secondary)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
            >
              <span class="block text-base font-medium text-white">{{ highlight }}</span>
            </article>
          </div>
        </section>

        <section id="install" class="content-section">
          <SectionHeader eyebrow="Install flow" title="A setup path that stays technical, not confusing" />
          <div class="grid gap-4 lg:grid-cols-2">
            <article
              v-for="(step, index) in plugin.setupSteps"
              :key="step.title"
              class="rounded-[26px] bg-[var(--surface-card)] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
            >
              <p class="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[var(--accent-cyan)]">
                Step {{ index + 1 }}
              </p>
              <h3 class="mt-3 text-xl font-medium tracking-[-0.04em] text-white">
                {{ step.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                {{ step.body }}
              </p>
            </article>
          </div>
        </section>

        <section id="faq" class="content-section">
          <SectionHeader eyebrow="FAQ" title="Common questions without the documentation wall" />
          <FaqAccordion :items="plugin.faq" />
        </section>

        <section id="support" class="content-section">
          <SectionHeader eyebrow="Support" title="Focused help and troubleshooting routes" />
          <div class="grid gap-4 md:grid-cols-2">
            <RouterLink
              v-for="topic in plugin.helpTopics"
              :key="topic.slug"
              :to="`/help/homey/${topic.slug}`"
              class="rounded-[24px] bg-[var(--surface-card)] px-5 py-5 transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--surface-card-hover)]"
            >
              <p class="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--accent-cyan)]">
                Focused help
              </p>
              <h3 class="mt-3 text-xl font-medium tracking-[-0.04em] text-white">
                {{ topic.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                {{ topic.body }}
              </p>
            </RouterLink>
          </div>
        </section>
      </div>

      <aside class="space-y-6 xl:sticky xl:top-24 xl:h-fit">
        <section class="rounded-[28px] bg-[var(--surface-panel)] p-5 shadow-[var(--shadow-soft)]">
          <p class="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--accent-cyan)]">
            Quick facts
          </p>
          <div class="mt-5 space-y-4">
            <div>
              <p class="text-xs uppercase tracking-[0.22em] text-[var(--text-tertiary)]">Version</p>
              <p class="mt-2 text-sm font-medium text-white">{{ plugin.version }}</p>
            </div>
            <div>
              <p class="text-xs uppercase tracking-[0.22em] text-[var(--text-tertiary)]">Compatibility</p>
              <ul class="mt-2 space-y-2 text-sm leading-7 text-[var(--text-secondary)]">
                <li v-for="item in plugin.compatibility" :key="item">{{ item }}</li>
              </ul>
            </div>
            <div>
              <p class="text-xs uppercase tracking-[0.22em] text-[var(--text-tertiary)]">Requirements</p>
              <ul class="mt-2 space-y-2 text-sm leading-7 text-[var(--text-secondary)]">
                <li v-for="item in plugin.requirements" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="rounded-[28px] bg-[linear-gradient(180deg,rgba(0,229,255,0.08),rgba(255,255,255,0.02))] p-5 shadow-[var(--shadow-soft)]">
          <p class="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--accent-cyan)]">
            Get Plus
          </p>
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
            class="mt-4 rounded-[22px] bg-[var(--surface-card)] p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
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
</script>
