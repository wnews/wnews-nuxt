<template>
  <main>
    <ContentDoc class="p-3"/>
  </main>
</template>
<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    h1 {
      @apply text-2xl;
    }
    h2 {
      @apply text-xl;
    }
    h3 {
      @apply text-lg;
    }
}
</style>
