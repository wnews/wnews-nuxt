<template>
  <div class="pl-8">
    <NuxtLink to="/history">
    <NuxtImg src="/images/fifty-years-ago-banner.png"/>
  </NuxtLink>
    <ContentDoc class="p-5 space-y-4"/>
    <div class="flex flex-row gap-2">
      <SocialShare
      v-for="network in ['facebook', 'twitter', 'email']"
      :key="network"
      :network="network"
      :label="false"
      class="p-4 rounded-none"
    />
    </div>
  <NuxtImg src="/images/advertise-banner.png"/>
  </div>
</template>
