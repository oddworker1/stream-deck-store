<template>
  <main class="mx-auto flex w-full max-w-[1240px] flex-col gap-10 px-4 pb-24 pt-8 md:px-8">
    <section class="grid gap-8 overflow-hidden rounded-[32px] bg-[var(--surface-panel)] px-5 py-8 shadow-[var(--shadow-soft)] md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-10">
      <div class="space-y-8">
        <div class="space-y-5">
          <div class="flex items-center gap-3">
            <p class="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--accent-cyan)]">
              Adapted Plugin Marketplace
            </p>
            <InfoTooltip
              body="A compact showroom for Adapted Stream Deck tools. Each plugin gets a product page, setup guidance, troubleshooting, and live visual previews."
              href="/plugins/homey-pro-control"
              title="How this marketplace works"
            />
          </div>
          <h1 class="max-w-3xl text-5xl font-medium leading-[0.92] tracking-[-0.065em] text-white md:text-7xl">
            Stream Deck plugins that feel like product-grade control surfaces.
          </h1>
          <p class="max-w-xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
            Browse plugins, inspect what they do, and jump straight into setup or support.
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <RouterLink class="action-button-primary" to="/plugins/homey-pro-control">
            Explore featured plugin
          </RouterLink>
          <a class="action-button-secondary" href="#plugin-grid">
            Browse plugins
          </a>
        </div>

        <div class="grid gap-3 sm:grid-cols-3">
          <article class="hero-metric-card">
            <span>Catalog state</span>
            <strong>Curated rollout</strong>
          </article>
          <article class="hero-metric-card">
            <span>Support model</span>
            <strong>Integrated docs + FAQ</strong>
          </article>
          <article class="hero-metric-card">
            <span>Visual intent</span>
            <strong>Premium dark showroom</strong>
          </article>
        </div>
      </div>

      <div class="relative min-h-[420px] overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_18%_18%,rgba(0,229,255,0.14),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] shadow-[var(--shadow-panel)]">
        <div class="showcase-glow" />
        <img alt="" class="floating-tile absolute left-8 top-12 h-48 w-48" src="/assets/homey/generated/homey-energy-live.svg" style="--tile-delay:-0.9s; --tile-duration:7.6s; --tile-rot:-9deg;" />
        <img alt="" class="floating-tile absolute right-10 top-8 h-44 w-44" src="/assets/homey/generated/homey-solar-export.svg" style="--tile-delay:-1.8s; --tile-duration:6.9s; --tile-rot:9deg;" />
        <img alt="" class="floating-tile absolute left-32 top-40 h-40 w-40" src="/assets/homey/generated/homey-room-launcher.svg" style="--tile-delay:-3s; --tile-duration:8.5s; --tile-rot:7deg;" />
        <img alt="" class="floating-tile absolute bottom-8 right-20 h-40 w-40" src="/assets/homey/generated/homey-dimmer-target.svg" style="--tile-delay:-2.3s; --tile-duration:7.3s; --tile-rot:-7deg;" />
      </div>
    </section>

    <section class="grid gap-5 lg:grid-cols-[280px_1fr]">
      <aside class="space-y-4 rounded-[28px] bg-[var(--surface-panel)] p-5 shadow-[var(--shadow-soft)] lg:sticky lg:top-24 lg:h-fit">
        <div class="space-y-2">
          <div class="flex items-center gap-3">
            <p class="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--accent-cyan)]">
              Discover
            </p>
            <InfoTooltip
              body="Search by plugin name, workflow, or support trait. Filters are tuned for a larger catalog even though Homey is the first release."
              title="Search and filter"
            />
          </div>
          <h2 class="text-2xl font-medium tracking-[-0.05em] text-white">
            Filter the catalog
          </h2>
          <p class="text-sm leading-7 text-[var(--text-secondary)]">
            Search, filter, and jump straight into a plugin page.
          </p>
        </div>

        <label class="search-shell">
          <Search class="h-4 w-4 text-[var(--text-tertiary)]" />
          <input
            v-model.trim="search"
            class="search-input"
            placeholder="Search plugins"
            type="search"
          />
        </label>

        <div class="flex flex-wrap gap-2">
          <button
            v-for="filter in adaptedFilters"
            :key="filter"
            type="button"
            class="filter-chip"
            :class="activeFilter === filter ? 'filter-chip-active' : ''"
            @click="activeFilter = filter"
          >
            {{ filter }}
          </button>
        </div>
      </aside>

      <section id="plugin-grid" class="space-y-6">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div class="flex items-center gap-3">
              <p class="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--accent-cyan)]">
                Featured plugin
              </p>
              <InfoTooltip
                body="The featured card uses real rendered tile artwork, current support status, and fast links into installation and help."
                href="/plugins/homey-pro-control"
                title="Why this card is featured"
              />
            </div>
            <h2 class="mt-2 text-3xl font-medium tracking-[-0.05em] text-white">
              Precision-built integrations
            </h2>
          </div>
          <p class="text-sm text-[var(--text-tertiary)]">
            {{ filteredPlugins.length }} plugin{{ filteredPlugins.length === 1 ? "" : "s" }}
          </p>
        </div>

        <PluginCard
          v-for="plugin in filteredPlugins"
          :key="plugin.id"
          :plugin="plugin"
          :to="`/plugins/${plugin.id}`"
        />
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Search } from "lucide-vue-next";
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";

import InfoTooltip from "../components/InfoTooltip.vue";
import PluginCard from "../components/PluginCard.vue";
import { adaptedFilters, marketplacePlugins } from "../data/site";

const search = ref("");
const activeFilter = ref("All");

const filteredPlugins = computed(() => {
  const searchValue = search.value.toLowerCase();

  return marketplacePlugins.filter((plugin) => {
    const matchesSearch = !searchValue
      || [
        plugin.name,
        plugin.shortDescription,
        ...plugin.tags,
        ...plugin.categories,
        ...plugin.filters
      ].join(" ").toLowerCase().includes(searchValue);

    const matchesFilter = activeFilter.value === "All"
      || plugin.filters.includes(activeFilter.value)
      || plugin.categories.includes(activeFilter.value);

    return matchesSearch && matchesFilter;
  });
});
</script>
