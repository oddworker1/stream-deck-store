<template>
  <RouterLink
    :to="to"
    class="group relative overflow-hidden rounded-[28px] bg-[var(--surface-card)] p-5 shadow-[var(--shadow-panel)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--surface-card-hover)]"
  >
    <div class="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-br from-cyan-400/14 via-transparent to-transparent" />

    <div class="relative flex items-start justify-between gap-4">
      <div class="flex items-center gap-3">
        <img :src="plugin.icon" :alt="plugin.name" class="h-16 w-16 rounded-[18px] shadow-[0_18px_34px_rgba(0,0,0,0.28)]" />
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-cyan)]">
            {{ plugin.categories[0] }}
          </p>
          <h3 class="mt-1 text-2xl font-medium tracking-[-0.04em] text-white">
            {{ plugin.name }}
          </h3>
        </div>
      </div>

      <div class="flex flex-wrap justify-end gap-2">
        <span
          v-for="status in plugin.statuses"
          :key="status.label"
          class="status-chip"
          :class="statusClassMap[status.tone]"
        >
          {{ status.label }}
        </span>
      </div>
    </div>

    <p class="relative mt-5 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
      {{ plugin.shortDescription }}
    </p>

    <div class="relative mt-6 grid gap-4 lg:grid-cols-[1fr_292px]">
      <div class="space-y-4">
        <div class="grid gap-3 sm:grid-cols-3">
          <article
            v-for="metric in plugin.metrics"
            :key="metric.label"
            class="rounded-2xl bg-white/[0.03] px-4 py-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
          >
            <p class="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--text-tertiary)]">
              {{ metric.label }}
            </p>
            <p class="mt-2 text-sm font-medium text-white">
              {{ metric.value }}
            </p>
          </article>
        </div>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in plugin.tags"
            :key="tag"
            class="rounded-full bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <div class="relative min-h-[240px] overflow-hidden rounded-[24px] bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.16),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
        <img
          :src="plugin.visuals[0]?.image"
          :alt="plugin.visuals[0]?.title"
          class="floating-tile absolute left-5 top-5 h-40 w-40"
          style="--tile-delay:-0.7s; --tile-duration:7.2s; --tile-rot:-8deg;"
        />
        <img
          :src="plugin.visuals[3]?.image"
          :alt="plugin.visuals[3]?.title"
          class="floating-tile absolute left-28 top-16 h-32 w-32"
          style="--tile-delay:-2.1s; --tile-duration:8.4s; --tile-rot:8deg;"
        />
        <img
          :src="plugin.visuals[1]?.image"
          :alt="plugin.visuals[1]?.title"
          class="floating-tile absolute right-6 top-5 h-36 w-36"
          style="--tile-delay:-1.2s; --tile-duration:6.6s; --tile-rot:7deg;"
        />
        <img
          :src="plugin.visuals[2]?.image"
          :alt="plugin.visuals[2]?.title"
          class="floating-tile absolute bottom-4 right-20 h-32 w-32"
          style="--tile-delay:-2.8s; --tile-duration:7.8s; --tile-rot:-6deg;"
        />
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

import type { PluginRecord, StatusTone } from "../data/site";

defineProps<{
  plugin: PluginRecord;
  to: string;
}>();

const statusClassMap: Record<StatusTone, string> = {
  blue: "status-chip-blue",
  gold: "status-chip-gold",
  green: "status-chip-green",
  neutral: "status-chip-neutral"
};
</script>
