<template>
  <NuxtImg src="/images/cooks-column-banner.png"/>
  <!-- <h1>Cooks Column</h1> -->
  <RecentPosts :basePath="`${$route.fullPath + '/2024'}`"/>
</template>
