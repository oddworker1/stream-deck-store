<template>
  <main class="page-shell page-shell-wide">
    <SiteTopBar />

    <section class="page-panel page-panel-compact">
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
            <p class="contact-line">
              Contact us:
              <a :href="`mailto:${plugin.contactEmail}`" class="contact-link">
                {{ plugin.contactEmail }}
              </a>
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

        <div class="streamdeck-board-grid" aria-hidden="true">
          <article
            v-for="board in plugin.showcaseBoards"
            :key="board.title"
            class="streamdeck-shot"
          >
            <div class="streamdeck-shot-copy">
              <strong>{{ board.title }}</strong>
              <span>{{ board.caption }}</span>
            </div>

            <div class="streamdeck-device">
              <div class="streamdeck-key-grid">
                <div
                  v-for="tile in board.tiles"
                  :key="`${board.title}-${tile.label}`"
                  class="streamdeck-key"
                  :class="{ 'streamdeck-key-warning': tile.overlayImage }"
                >
                  <div class="streamdeck-key-visual">
                    <img :alt="tile.label" :src="tile.image" class="streamdeck-key-image" />
                    <div
                      v-if="tile.overlayImage"
                      class="streamdeck-alert-overlay warning-flash"
                    >
                      <img
                        alt=""
                        :src="tile.overlayImage"
                        class="streamdeck-key-image"
                      />
                      <div class="streamdeck-alert-copy">
                        <strong>{{ tile.label }}</strong>
                        <span>{{ tile.alertDetail ?? "Warning" }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
        <h2 class="panel-title">Setup</h2>
        <ol class="step-list">
          <li v-for="step in plugin.salesSteps" :key="step">
            {{ step }}
          </li>
        </ol>
      </article>

      <article class="info-panel comparison-panel">
        <h2 class="panel-title">Free vs Plus</h2>
        <p class="comparison-intro">
          {{ plugin.comparisonIntro }}
        </p>
        <div class="comparison-table-wrap">
          <table class="comparison-table">
            <thead>
              <tr>
                <th scope="col">
                  Feature
                </th>
                <th scope="col">
                  Free
                </th>
                <th scope="col">
                  Plus
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in plugin.comparisonRows" :key="row.feature">
                <th scope="row">
                  {{ row.feature }}
                </th>
                <td :class="{ 'comparison-value-muted': row.free === '-' }">
                  {{ row.free }}
                </td>
                <td>
                  {{ row.plus }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
import SiteTopBar from "../components/SiteTopBar.vue";
import { homeyPlugin } from "../data/site";

const plugin = homeyPlugin;
</script>
