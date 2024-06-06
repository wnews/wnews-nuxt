<template>
    <nuxt-link :href="article._path">
        <div class="max-w-sm w-full h-64 lg:max-w-full lg:flex bg-neutral-400 bg-cover hover:bg-blend-darken" :style="`background-image: url('${imgUrl(article.image)}')`">
        <!-- <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" 
            style="background-image: url(`${article.image}`)" title="{{ article.title }}">
        </div> -->
        <!-- <NuxtImg class="max-h-48 h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" provider="cloudflare" :src="`${article.image}`"></NuxtImg> -->
        <!-- <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"> -->
            <div class="flex flex-col justify-end">
                <div class="text-neutral-200 font-bold text-base mb-2 p-2 text-4xl font-light text-end">{{ article.title }}</div>
                <!-- <p class="text-gray-700 text-base">{{ article.description }}</p> -->
            </div>
        <!-- </div> -->
    </div>
    </nuxt-link>
</template>
<script setup>
    defineProps(['article'])
    const img = useImage()
    const backgroundStyles = computed(() => {
        const imgUrl = img('https://github.com/nuxt.png', { width: 100 })
        return { backgroundImage: `url('${imgUrl}')` }
    })
    const imgUrl = (src) => {
        return img(src || '/gallery/2024/06/wnews20240606-017.jpg', {}, {
                provider: 'cloudflare',
                // preset: 'cover',
        })
    }
</script>
