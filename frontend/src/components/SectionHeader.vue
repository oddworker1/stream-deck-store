<template>
  <div class="mb-5">
    <p class="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--accent-cyan)]">
      {{ eyebrow }}
    </p>
    <h2 class="mt-3 text-3xl font-medium tracking-[-0.05em] text-white md:text-4xl">
      {{ title }}
    </h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string;
  title: string;
}>();
</script>
