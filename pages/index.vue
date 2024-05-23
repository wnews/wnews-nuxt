<template>
  <div class="pl-8">
    <ContentDoc class="space-y-4 pb-8" path="/past-issues/2024/2024-05-23"/>
    <RecentPosts :basePath="`${$route.fullPath + 'articles/2024'}`"/>
    <NuxtImg src="/images/advertise-banner.png"/>
  </div>
</template>
