<template>
  <div class="min-h-screen bg-[var(--bg-shell)] text-[var(--text-primary)]">
    <div class="pointer-events-none fixed inset-0 overflow-hidden">
      <div class="orb orb-cyan" />
      <div class="orb orb-ring" />
      <div class="noise-mask" />
    </div>

    <div class="relative z-10">
      <RouterView />
    </div>
  </div>
</template>
