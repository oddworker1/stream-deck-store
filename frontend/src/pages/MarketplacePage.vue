<template>
  <main class="page-shell">
    <SiteTopBar />

    <section class="page-panel">
      <div class="plugin-list-stack">
        <PluginCard
          v-for="plugin in marketplacePlugins"
          :key="plugin.id"
          :plugin="plugin"
          to="/homey.html"
        />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import PluginCard from "../components/PluginCard.vue";
import SiteTopBar from "../components/SiteTopBar.vue";
import { marketplacePlugins } from "../data/site";
</script>
