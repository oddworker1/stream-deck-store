<template>
  <RouterLink :to="to" class="plugin-list-card">
    <div class="plugin-list-head">
      <div class="plugin-list-brand">
        <div class="plugin-list-brand-icons" aria-hidden="true">
          <img :src="plugin.icon" :alt="plugin.name" class="h-14 w-14 rounded-[18px]" />
          <img :src="plugin.plusIcon" alt="" class="-ml-3 h-11 w-11 rounded-[14px]" />
        </div>

        <div class="space-y-2">
          <h2 class="plugin-list-title">
            {{ plugin.name }}
          </h2>
          <p class="plugin-list-copy">
            {{ plugin.listDescription }}
          </p>
        </div>
      </div>

      <div class="plugin-list-badges">
        <span v-for="badge in plugin.badges" :key="badge" class="badge-pill">
          {{ badge }}
        </span>
      </div>
    </div>

    <div class="plugin-preview-grid" aria-hidden="true">
      <article
        v-for="tile in plugin.previewTiles"
        :key="tile.label"
        class="plugin-preview-card"
      >
        <div
          class="plugin-preview-visual"
          :class="{ 'warning-flash-frame': tile.overlayImage }"
        >
          <div class="plugin-preview-tile-stack">
            <img :alt="tile.label" :src="tile.image" class="plugin-preview-tile" />
            <img
              v-if="tile.overlayImage"
              alt=""
              :src="tile.overlayImage"
              class="plugin-preview-tile plugin-preview-alert-tile"
            />
          </div>
          <span
            v-if="tile.overlayImage"
            class="plugin-preview-flash-label"
          >
            Flash alert
          </span>
        </div>
        <span class="plugin-preview-label">{{ tile.label }}</span>
      </article>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

import type { PluginRecord } from "../data/site";

defineProps<{
  plugin: PluginRecord;
  to: string;
}>();
</script>
