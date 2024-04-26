<template>
  <div class="pl-8">
  <NuxtLink to="/wildlife">
    <NuxtImg src="/images/all-about-wildlife-banner.png"/>
  </NuxtLink>
  <!-- <h1>All about wildlife</h1>
  <p>
    Kirsty Ramadan from BoHollow Wildlife
is a wildlife rescue expert. Here she
shares some of her knowledge about our
very familiar wildlife neighbours.
  </p> -->
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
  <NuxtImg src="/images/all-about-wildlife-footer.png"/>
</div>
</template>
