<template>
    <main class="bg-white px-4 pt-2 pb-20 sm:px-6 lg:px-8 lg:pt-6 lg:pb-28">
      <div class="mx-auto max-w-lg lg:max-w-7xl">
        <div class="border-b border-b-gray-200 pb-6">
          <h2
              class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
          >
            Recent Posts
          </h2>
        </div>
        <div class="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          <ContentList :path="`${basePath}`" v-slot="{ list }">
            <Card
                v-for="article in list"
                :key="article._path"
                :article="article"
            >
          </Card>

            <!-- <div
                v-for="article in list"
                :key="article._path"
                class="flex flex-col justify-between rounded-lg border border-gray-200 p-4"
            >
              <nuxt-link :href="article._path">
                <div class="flex flex-row h-32">
                  <div class="">
                    <NuxtImg class="" provider="cloudflare" :src="`${article.image}`"></NuxtImg>
                  </div>
                  <div>
                    <h1 class="text-xl text-gray-900">{{ article.title }}</h1>
                    <p class="mt-3 text-gray-500">
                      {{ article.description }}
                    </p>
                  </div>
                </div>
              </nuxt-link>
              <div class="mt-6">
                <a
                    :href="`?author=${article.author}`"
                    class="text-sm font-medium text-gray-900"
                >
                  {{ article.author }}
                </a>
                <div class="text-sm text-gray-500">
                  <time datetime="2020-03-16">{{ article.date }}</time>
                </div>
              </div>
            </div> -->
          </ContentList>
        </div>
      </div>
    </main>
  </template>
<script setup>
defineProps({
  basePath: {
    default() {
      return '/articles'
    }
  }
})
</script>