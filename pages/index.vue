<template>
  <main>
    <ContentDoc class="p-5 space-y-4" path="/past-issues/2024/2024-04-11"/>
  </main>
  <RecentPosts :basePath="`${$route.fullPath + 'articles/2024'}`"/>
  <NuxtImg src="/images/advertise-banner.png"/>
</template>
