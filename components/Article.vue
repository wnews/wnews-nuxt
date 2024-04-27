<template>
    <ContentDoc class="space-y-4 pb-8">
    <template v-slot="{ doc }">
        <article>
        <!-- <h1>{{ doc.title }}</h1> -->
        <ContentRenderer :value="doc" class="space-y-4 pb-8"/>
        </article>
        <div class="flex flex-row gap-2">
        <SocialShare
            v-for="network in ['facebook', 'twitter', 'email']"
            :url="`https://www.wnews.org.au${doc._path}`"
            :title="`${ doc.title }`"
            user="WarangaNews"
            :key="network"
            :network="network"
            :label="false"
            class="p-4 rounded-none"
        />
        </div>
    </template>
    <template #not-found>
        <h1>Document not found</h1>
    </template>
    </ContentDoc>
    <!-- <DisqusComments :identifier="`${basePath}`"/> -->
</template>
  