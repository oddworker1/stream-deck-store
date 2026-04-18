<template>
  <main class="page-shell page-shell-wide">
    <SiteTopBar />

    <section class="page-panel page-panel-compact">
      <div class="space-y-4">
        <div class="flex flex-wrap items-center gap-2">
          <span class="badge-pill">FAQ</span>
          <span v-if="variant === 'premium'" class="badge-pill badge-pill-bright">
            Plus context
          </span>
        </div>

        <div class="space-y-3">
          <h1 class="page-title">
            Homey FAQ
          </h1>
          <p class="page-lead">
            {{ plugin.faqIntro }}
          </p>
        </div>

        <section class="faq-status-panel" aria-label="Current FAQ coverage">
          <div class="faq-status-copy">
            <strong>Updated for the current Homey Pro feature set</strong>
            <p>
              This FAQ now covers the latest Family & Guests tiles, graph backgrounds,
              text badges, warning graph overrides, and the current room-launcher setup.
            </p>
          </div>

          <div class="faq-status-grid">
            <article
              v-for="item in plugin.faqHighlights"
              :key="item.title"
              class="faq-status-card"
            >
              <span class="faq-status-icon" aria-hidden="true">{{ item.emoji }}</span>
              <div>
                <strong class="faq-status-title">{{ item.title }}</strong>
                <p class="faq-status-text">{{ item.copy }}</p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </section>

    <section class="page-panel page-panel-compact">
      <FaqAccordion :items="plugin.faq" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

import FaqAccordion from "../components/FaqAccordion.vue";
import SiteTopBar from "../components/SiteTopBar.vue";
import { homeyPlugin } from "../data/site";

const plugin = homeyPlugin;
const route = useRoute();

const variant = computed(() => (route.query.variant === "premium" ? "premium" : "free"));

function openFaqFromHash(hash: string) {
  const id = hash.replace(/^#/, "");

  if (!id) {
    return;
  }

  nextTick(() => {
    const element = document.getElementById(id);

    if (!(element instanceof HTMLDetailsElement)) {
      return;
    }

    element.open = true;
    requestAnimationFrame(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

watch(
  () => route.hash,
  (hash) => {
    openFaqFromHash(hash);
  }
);

onMounted(() => {
  openFaqFromHash(route.hash);
});
</script>
