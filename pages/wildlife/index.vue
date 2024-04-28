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
  <RecentPosts :basePath="`${$route.fullPath + '/2024'}`"/>
  <div class="border-b border-b-gray-200 pb-6">
    <h2>Archive</h2>
    <p>
      <a href="wildlife/2022">2022</a> |
      <a href="wildlife/2021">2021</a> |
      <a href="wildlife/2020">2020</a> |
      <a href="wildlife/2017">2017</a>
    </p>
  </div>
  <NuxtImg src="/images/all-about-wildlife-footer.png"/>
</div>
</template>
