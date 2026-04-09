<template>
  <div class="min-h-screen bg-[var(--bg-shell)] text-[var(--text-primary)]">
    <div class="pointer-events-none fixed inset-0 overflow-hidden">
      <div class="orb orb-cyan" />
      <div class="orb orb-gold" />
      <div class="orb orb-ring" />
      <div class="noise-mask" />
    </div>

    <div class="relative z-10">
      <header class="sticky top-0 z-40 border-b border-white/5 bg-[rgba(8,12,18,0.66)] backdrop-blur-2xl">
        <div class="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-6 px-4 py-4 md:px-8">
          <RouterLink class="group flex min-w-0 flex-col" to="/">
            <span class="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[var(--accent-cyan)]">
              Adapted
            </span>
            <span class="text-sm text-[var(--text-secondary)] transition-colors group-hover:text-white">
              Stream Deck Marketplace
            </span>
          </RouterLink>

          <nav class="hidden items-center gap-2 md:flex">
            <RouterLink
              v-for="link in navigation"
              :key="link.label"
              :to="link.to"
              class="nav-pill"
            >
              {{ link.label }}
            </RouterLink>
          </nav>
        </div>

        <div class="mx-auto w-full max-w-[1240px] px-4 pb-4 md:hidden">
          <nav class="flex gap-2 overflow-x-auto pb-1">
            <RouterLink
              v-for="link in navigation"
              :key="`${link.label}-mobile`"
              :to="link.to"
              class="nav-pill shrink-0"
            >
              {{ link.label }}
            </RouterLink>
          </nav>
        </div>
      </header>

      <RouterView />

      <footer class="relative z-10 border-t border-white/5 bg-[rgba(8,12,18,0.82)]">
        <div class="mx-auto grid w-full max-w-[1240px] gap-10 px-4 py-12 md:grid-cols-[1.1fr_0.9fr] md:px-8">
          <div class="space-y-4">
            <p class="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
              Adapted
            </p>
            <h2 class="max-w-lg text-3xl font-medium tracking-[-0.05em] text-white">
              Premium Stream Deck plugins for creators, operators, and advanced control surfaces.
            </h2>
            <p class="max-w-xl text-sm leading-7 text-[var(--text-secondary)]">
              Product pages, setup, and support in one place.
            </p>
          </div>

          <div class="grid gap-8 sm:grid-cols-2">
            <div class="space-y-3">
              <p class="footer-title">Marketplace</p>
              <RouterLink class="footer-link" to="/">Overview</RouterLink>
              <RouterLink class="footer-link" to="/plugins/homey-pro-control">Homey Pro Control</RouterLink>
            </div>
            <div class="space-y-3">
              <p class="footer-title">Support</p>
              <RouterLink class="footer-link" to="/homey-help-setup">Setup help</RouterLink>
              <RouterLink class="footer-link" to="/homey-help-troubleshooting">Troubleshooting</RouterLink>
              <a class="footer-link" href="https://github.com/oddworker1/streamdeck-homey-pro-control" rel="noreferrer" target="_blank">GitHub project</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const navigation = [
  { label: "Marketplace", to: "/" },
  { label: "Homey", to: "/plugins/homey-pro-control" },
  { label: "Setup Help", to: "/homey-help-setup" }
];
</script>
