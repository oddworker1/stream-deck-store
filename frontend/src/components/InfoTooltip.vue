<template>
  <span
    class="relative inline-flex"
    @mouseenter="scheduleOpen"
    @mouseleave="closeTooltip"
    @focusin="scheduleOpen"
    @focusout="closeTooltip"
  >
    <component
      :is="href ? 'a' : 'button'"
      :href="href"
      class="info-button"
      :type="href ? undefined : 'button'"
      :aria-label="title"
    >
      <CircleHelp class="h-3.5 w-3.5" />
    </component>

    <transition name="tooltip-fade">
      <div
        v-if="isOpen"
        class="info-tooltip-panel"
        :class="align === 'left' ? 'left-0 origin-top-left' : 'right-0 origin-top-right'"
      >
        <p class="info-tooltip-title">
          {{ title }}
        </p>
        <p class="info-tooltip-body">
          {{ body }}
        </p>
        <p v-if="href" class="info-tooltip-link">
          Open focused guide
        </p>
      </div>
    </transition>
  </span>
</template>

<script setup lang="ts">
import { CircleHelp } from "lucide-vue-next";
import { onBeforeUnmount, ref } from "vue";

const props = withDefaults(defineProps<{
  align?: "left" | "right";
  body: string;
  delayMs?: number;
  href?: string;
  title: string;
}>(), {
  align: "right",
  delayMs: 280
});

const isOpen = ref(false);
let timerId: number | undefined;

function scheduleOpen(): void {
  if (typeof window === "undefined") {
    isOpen.value = true;
    return;
  }

  window.clearTimeout(timerId);
  timerId = window.setTimeout(() => {
    isOpen.value = true;
  }, props.delayMs);
}

function closeTooltip(): void {
  if (typeof window !== "undefined") {
    window.clearTimeout(timerId);
  }

  isOpen.value = false;
}

onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.clearTimeout(timerId);
  }
});
</script>
