<template>
  <div class="mb-5 flex items-start justify-between gap-4">
    <div>
      <p class="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--accent-cyan)]">
        {{ eyebrow }}
      </p>
      <h2 class="mt-3 text-3xl font-medium tracking-[-0.05em] text-white md:text-4xl">
        {{ title }}
      </h2>
    </div>

    <InfoTooltip
      v-if="helpBody"
      :body="helpBody"
      :href="helpHref"
      :title="helpTitle || title"
    />
  </div>
</template>

<script setup lang="ts">
import InfoTooltip from "./InfoTooltip.vue";

defineProps<{
  eyebrow: string;
  helpBody?: string;
  helpHref?: string;
  helpTitle?: string;
  title: string;
}>();
</script>
