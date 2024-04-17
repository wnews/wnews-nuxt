<template>
  <div class="pl-8">
  <NuxtImg src="/images/all-about-wildlife-banner.png"/>
  <!-- <h1>All about wildlife</h1>
  <p>
    Kirsty Ramadan from BoHollow Wildlife
is a wildlife rescue expert. Here she
shares some of her knowledge about our
very familiar wildlife neighbours.
  </p> -->
  <RecentPosts :basePath="`${$route.fullPath}`"/>
  <NuxtImg src="/images/all-about-wildlife-footer.png"/>
</div>
</template>
