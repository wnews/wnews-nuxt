<template>
    <header class="flex flex-row justify-between w-full px-4 pt-2">
        <div class="flex items-center gap-3">
            <ClientOnly>
                <WeatherWidget></WeatherWidget>
            </ClientOnly>
        </div>
        <div>
            <NuxtImg sizes="100vw md:1024px" class="max-w-xl" src="/images/wnews-masthead2.png" alt="Waranga News masthead image"/>
        </div>
        <div class="flex flex-wrap items-center gap-x-3 px-4">
            <NuxtLink href="/subscribe">Subscribe</NuxtLink>
            <NuxtLink href="/donations" class="bg-black text-white rounded-full px-4 py-2">Become a supporter</NuxtLink>
        </div>
    </header>
</template>