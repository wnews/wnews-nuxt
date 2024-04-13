<template>
  <!-- <main> -->
  <NuxtImg src="/images/all-about-wildlife-banner.png"/>
  <!-- <h1>All about wildlife</h1>
  <p>
    Kirsty Ramadan from BoHollow Wildlife
is a wildlife rescue expert. Here she
shares some of her knowledge about our
very familiar wildlife neighbours.
  </p> -->
<!-- </main> -->
  <RecentPosts :basePath="`${$route.fullPath + '/2024'}`"/>
  <NuxtImg src="/images/all-about-wildlife-footer.png"/>
</template>
