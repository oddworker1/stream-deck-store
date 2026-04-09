<template>
  <main class="page-shell page-shell-wide">
    <section class="page-panel page-panel-compact">
      <nav class="site-tabs" aria-label="Homey pages">
        <RouterLink class="tab-link" to="/homey.html">
          Sales
        </RouterLink>
        <RouterLink class="tab-link" to="/homey-faq.html">
          FAQ
        </RouterLink>
      </nav>

      <section class="sales-hero">
        <div class="space-y-5">
          <div class="flex items-center gap-3">
            <img :src="plugin.icon" :alt="plugin.name" class="h-[4.5rem] w-[4.5rem] rounded-[22px]" />
            <img :src="plugin.plusIcon" alt="" class="h-14 w-14 rounded-[18px]" />
          </div>

          <div class="flex flex-wrap gap-2">
            <span v-for="badge in plugin.badges" :key="badge" class="badge-pill">
              {{ badge }}
            </span>
          </div>

          <div class="space-y-3">
            <h1 class="page-title">
              {{ plugin.name }}
            </h1>
            <p class="page-lead">
              {{ plugin.salesIntro }}
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <a
              v-for="(link, index) in plugin.salesCtas"
              :key="link.label"
              :href="link.href"
              :class="index === 0 ? 'action-button-primary' : 'action-button-secondary'"
              :rel="link.external ? 'noreferrer' : undefined"
              :target="link.external ? '_blank' : undefined"
            >
              {{ link.label }}
            </a>
          </div>
        </div>

        <div class="plugin-preview-grid plugin-preview-grid-large" aria-hidden="true">
          <article
            v-for="tile in plugin.previewTiles"
            :key="tile.label"
            class="plugin-preview-card"
            :class="{ 'plugin-preview-card-warning': tile.overlayImage }"
          >
            <div class="plugin-preview-visual">
              <img :alt="tile.label" :src="tile.image" class="plugin-preview-tile" />
              <img
                v-if="tile.overlayImage"
                alt=""
                :src="tile.overlayImage"
                class="plugin-preview-tile warning-flash"
              />
            </div>
            <span class="plugin-preview-label">{{ tile.label }}</span>
          </article>
        </div>
      </section>
    </section>

    <section class="sales-grid">
      <article class="info-panel">
        <h2 class="panel-title">What it does</h2>
        <ul class="info-list">
          <li v-for="item in plugin.salesBullets" :key="item">
            {{ item }}
          </li>
        </ul>
      </article>

      <article class="info-panel">
        <h2 class="panel-title">Plus adds</h2>
        <ul class="info-list">
          <li v-for="item in plugin.plusBullets" :key="item">
            {{ item }}
          </li>
        </ul>
      </article>

      <article class="info-panel">
        <h2 class="panel-title">Setup</h2>
        <ol class="step-list">
          <li v-for="step in plugin.salesSteps" :key="step">
            {{ step }}
          </li>
        </ol>
      </article>

      <article class="info-panel">
        <h2 class="panel-title">Support</h2>
        <div class="support-link-list">
          <a
            v-for="link in plugin.supportLinks"
            :key="link.label"
            :href="link.href"
            class="support-link"
          >
            {{ link.label }}
          </a>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

import { homeyPlugin } from "../data/site";

const plugin = homeyPlugin;
</script>
