<template>
  <div class="pl-8">
    <ContentDoc class="space-y-4 pb-8"/>
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
    <!-- <DisqusComments :identifier="`${basePath}`"/> -->
  </div>
</template>
