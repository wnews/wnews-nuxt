<template>
  <div class="pl-8">
    <NuxtLink to="/firstpeoples">
    <NuxtImg src="/images/waranga-dreaming-banner.png"/>
  </NuxtLink>
    <ContentDoc class="p-5 space-y-4"/>
    <div class="flex flex-row gap-2">
      <SocialShare
      v-for="network in ['facebook', 'twitter', 'email']"
      :url="`https://www.wnews.org.au${this.$route.path}`"
      :key="network"
      :network="network"
      :label="false"
      class="p-4 rounded-none"
    />
    </div>
  <NuxtImg src="/images/advertise-banner.png"/>
  </div>
</template>
