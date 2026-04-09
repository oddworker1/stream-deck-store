<template>
  <main class="mx-auto flex w-full max-w-[1100px] flex-col gap-8 px-4 pb-24 pt-8 md:px-8">
    <section class="rounded-[32px] bg-[var(--surface-panel)] px-5 py-8 shadow-[var(--shadow-soft)] md:px-8 md:py-10">
      <div class="flex flex-wrap items-center gap-3 text-sm text-[var(--text-tertiary)]">
        <RouterLink class="hover:text-white" to="/">Marketplace</RouterLink>
        <span>/</span>
        <RouterLink class="hover:text-white" to="/plugins/homey-pro-control">Homey Pro Control</RouterLink>
        <span>/</span>
        <span class="text-white">{{ activeTopic.title }}</span>
      </div>

      <div class="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="space-y-5">
          <p class="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--accent-cyan)]">
            Focused help
          </p>
          <h1 class="max-w-2xl text-4xl font-medium leading-[0.95] tracking-[-0.06em] text-white md:text-6xl">
            {{ activeTopic.title }}
          </h1>
          <p class="max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
            {{ activeTopic.body }}
          </p>

          <div class="flex flex-wrap gap-3">
            <RouterLink class="action-button-primary" to="/plugins/homey-pro-control">
              Back to plugin page
            </RouterLink>
            <RouterLink class="action-button-secondary" :to="nextHelpLink">
              Next focused topic
            </RouterLink>
          </div>
        </div>

        <div class="rounded-[28px] bg-[linear-gradient(180deg,rgba(0,229,255,0.08),rgba(255,255,255,0.02))] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
          <p class="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--accent-cyan)]">
            Related guidance
          </p>
          <div class="mt-5 space-y-3">
            <RouterLink
              v-for="label in activeTopic.related"
              :key="label"
              class="block rounded-[20px] bg-white/[0.03] px-4 py-4 text-sm text-[var(--text-secondary)] transition duration-200 hover:bg-white/[0.06] hover:text-white"
              :to="relatedLinkForLabel(label)"
            >
              {{ label }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="grid gap-4 md:grid-cols-2">
      <RouterLink
        v-for="topicItem in otherTopics"
        :key="topicItem.slug"
        :to="`/help/homey/${topicItem.slug}`"
        class="rounded-[24px] bg-[var(--surface-card)] px-5 py-5 shadow-[var(--shadow-soft)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--surface-card-hover)]"
      >
        <p class="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--accent-cyan)]">
          {{ topicItem.slug }}
        </p>
        <h2 class="mt-3 text-2xl font-medium tracking-[-0.05em] text-white">
          {{ topicItem.title }}
        </h2>
        <p class="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
          {{ topicItem.body }}
        </p>
      </RouterLink>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";

import { findHelpTopic, homeyPlugin } from "../data/site";

const props = defineProps<{
  topic: string;
}>();

const activeTopic = computed(() => findHelpTopic(props.topic) ?? homeyPlugin.helpTopics[0]!);
const otherTopics = computed(() => homeyPlugin.helpTopics.filter((topic) => topic.slug !== activeTopic.value.slug));

const nextHelpLink = computed(() => `/help/homey/${otherTopics.value[0]?.slug ?? "setup"}`);

function relatedLinkForLabel(label: string): string {
  const match = homeyPlugin.helpTopics.find((topic) =>
    label.toLowerCase().includes(topic.slug)
    || topic.title.toLowerCase().includes(label.toLowerCase())
  );

  return `/help/homey/${match?.slug ?? "setup"}`;
}
</script>
