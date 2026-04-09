<template>
  <main class="page-shell">
    <SiteTopBar />

    <p class="contact-line page-contact-line">
      Contact us:
      <a :href="`mailto:${contactEmail}`" class="contact-link">
        {{ contactEmail }}
      </a>
    </p>

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

const contactEmail = marketplacePlugins[0]?.contactEmail ?? "odd@adapted.no";
</script>
