<template>
  <div class="min-h-screen bg-bg-deep text-slate-100">
    <header class="border-b border-neon-cyan/30 bg-bg-panel/90 px-6 py-4 shadow-glow">
      <div class="flex items-center justify-between">
        <p class="text-lg font-semibold text-neon-cyan">AiNFT</p>
        <nav class="flex gap-4 text-sm">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/explore">Explore</RouterLink>
          <RouterLink to="/studio/ai">Studio</RouterLink>
          <RouterLink to="/admin">Admin</RouterLink>
        </nav>
      </div>
    </header>

    <div class="grid min-h-[calc(100vh-73px)] grid-cols-[240px_minmax(0,1fr)_240px] gap-4 p-4">
      <aside class="rounded-xl border border-neon-purple/40 bg-bg-panel p-4 shadow-purple">
        <h2 class="mb-2 text-sm font-semibold uppercase tracking-wide text-neon-purple">Left Sidebar</h2>
        <p class="text-sm text-slate-300">Navigation and filters placeholder.</p>
      </aside>

      <main class="rounded-xl border border-neon-cyan/30 bg-bg-elevated p-6 shadow-glow">
        <RouterView />
      </main>

      <aside class="rounded-xl border border-neon-cyan/30 bg-bg-panel p-4">
        <h2 class="mb-2 text-sm font-semibold uppercase tracking-wide text-neon-cyan">Right Rail</h2>
        <p class="text-sm text-slate-300">Insights and widgets placeholder.</p>
      </aside>
    </div>
  </div>
</template>
