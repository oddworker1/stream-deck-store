<template>
  <div class="faq-list">
    <details
      v-for="item in items"
      :id="item.id"
      :key="item.id"
      class="faq-item"
    >
      <summary>
        <span>{{ item.question }}</span>
        <span class="faq-item-mark">+</span>
      </summary>
      <div
        class="faq-answer"
        v-html="item.answerHtml ?? item.answer"
      />
    </details>
  </div>
</template>

<script setup lang="ts">
import type { FaqItem } from "../data/site";

defineProps<{
  items: FaqItem[];
}>();
</script>
