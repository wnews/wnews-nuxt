<template>
  <div class="pl-8">
    <NuxtImg src="/images/fifty-years-ago-banner.png"/>
  <!-- <h1>Fifty Years ago in our district...</h1> -->
  <!-- <p>
    Looking through the pages of past ‘Rushworth Chronicles’
    .....compiled by former district resident Alan McLean
  </p> -->
  <RecentPosts :basePath="`${$route.fullPath}`"/>
  </div>
</template>
