<template>
  <div class="space-y-3">
    <details
      v-for="item in items"
      :key="item.question"
      class="group rounded-[22px] bg-[var(--surface-card)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
    >
      <summary class="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-white">
        <span>{{ item.question }}</span>
        <span class="text-[var(--text-tertiary)] transition group-open:rotate-45">+</span>
      </summary>
      <div class="px-5 pb-5 text-sm leading-7 text-[var(--text-secondary)]">
        {{ item.answer }}
      </div>
    </details>
  </div>
</template>

<script setup lang="ts">
import type { FaqItem } from "../data/site";

defineProps<{
  items: FaqItem[];
}>();
</script>
