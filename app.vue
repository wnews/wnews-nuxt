<template>
  <div class="wp-layout holygrail h-screen">
      <Masthead/>
      <NavigationTop/>
      <NuxtPage />
      <SidebarAds/>
      <FooterLinks/>
  </div>
</template>
<!-- <script setup>
import '~/assets/css/layout.css'
</script> -->
<script lang="ts" setup>
import '~/assets/css/layout.css';

// const search  = ref('')

// const results = searchContent(search)

useHead({
  script: [
    { children: "(function(d) { var el, fjs = d.getElementsByTagName('script')[0]; el = d.createElement('script'); el.id = \"js-pp-banner\"; el.src = \"//dashboard.presspatron.com/dev/banner?b=jdV8hSBbgGyRsqtsRyjBbatz\"; fjs.parentNode.insertBefore(el, fjs); }(document));" }
    ],
});

</script>