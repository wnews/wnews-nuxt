<template>
  <div class="pl-8">
    <ClientOnly>
      <PressPatronBanner></PressPatronBanner>
    </ClientOnly>
    <ContentDoc class="space-y-4 pb-8" path="/past-issues/2024/2024-06-20"/>
    <RecentPosts :basePath="`${$route.fullPath + 'articles/2024'}`"/>
    <NuxtImg class="max-w-4xl" src="/images/advertise-banner.png"/>
  </div>
</template>
