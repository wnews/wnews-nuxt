<template>
  <div class="pl-8">
    <NuxtImg src="/images/garden-hints-banner.png"/>
  <!-- <h1>Garden Hints & Tips</h1> -->
  <RecentPosts :basePath="`${$route.fullPath + '/2024'}`"/>
  </div>
</template>
