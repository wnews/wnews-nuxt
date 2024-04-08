<template>
  <div class="wp-layout holygrail h-screen">
    <header style="display: flex; justify-content: center;">
      <Masthead/>
    </header>
    <nav>
      <NavigationTop/>
    </nav>
    <main>
      <NuxtPage />
    </main>
    <aside>
      <SidebarAds/>
    </aside>
    <footer>
      <FooterLinks/>
    </footer>
  </div>
</template>
<script setup>
import '~/assets/css/layout.css'
</script>