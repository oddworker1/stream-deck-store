<template>
  <main class="mx-auto flex w-full max-w-[1240px] flex-col gap-10 px-4 pb-24 pt-8 md:px-8">
    <section class="grid gap-8 overflow-hidden rounded-[32px] bg-[var(--surface-panel)] px-5 py-8 shadow-[var(--shadow-soft)] md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-10">
      <div class="space-y-8">
        <div class="space-y-5">
          <p class="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--accent-cyan)]">
            Adapted Plugin Marketplace
          </p>
          <h1 class="max-w-3xl text-5xl font-medium leading-[0.92] tracking-[-0.065em] text-white md:text-7xl">
            Stream Deck plugins that feel like product-grade control surfaces.
          </h1>
          <p class="max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
            Discover premium plugins from Adapted with richer product pages, clearer installation guidance, focused
            troubleshooting, and a marketplace that treats plugins like serious tools instead of disposable extensions.
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

      <div class="relative min-h-[420px] overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_18%_18%,rgba(0,229,255,0.14),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
        <img alt="" class="absolute left-8 top-12 h-48 w-48 -rotate-[9deg] drop-shadow-[0_26px_38px_rgba(0,0,0,0.38)]" src="/assets/homey/generated/homey-energy-live.svg" />
        <img alt="" class="absolute right-10 top-8 h-44 w-44 rotate-[9deg] drop-shadow-[0_26px_38px_rgba(0,0,0,0.38)]" src="/assets/homey/generated/homey-solar-export.svg" />
        <img alt="" class="absolute left-32 top-40 h-40 w-40 rotate-[7deg] drop-shadow-[0_24px_34px_rgba(0,0,0,0.38)]" src="/assets/homey/generated/homey-room-launcher.svg" />
        <img alt="" class="absolute bottom-8 right-20 h-40 w-40 -rotate-[7deg] drop-shadow-[0_24px_34px_rgba(0,0,0,0.38)]" src="/assets/homey/generated/homey-dimmer-target.svg" />
      </div>
    </section>

    <section class="grid gap-5 lg:grid-cols-[280px_1fr]">
      <aside class="space-y-4 rounded-[28px] bg-[var(--surface-panel)] p-5 shadow-[var(--shadow-soft)] lg:sticky lg:top-24 lg:h-fit">
        <div class="space-y-2">
          <p class="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--accent-cyan)]">
            Discover
          </p>
          <h2 class="text-2xl font-medium tracking-[-0.05em] text-white">
            Filter the catalog
          </h2>
          <p class="text-sm leading-7 text-[var(--text-secondary)]">
            Search by plugin name, capability focus, or support traits. The filter system is ready for a larger catalog, even though only Homey is live right now.
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
            <p class="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--accent-cyan)]">
              Featured plugin
            </p>
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
