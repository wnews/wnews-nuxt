<template>
    <nav id="navigation"
    class="bg-black sticky top-0 z-40 font-body shadow-card hover:shadow-cardhover transition-all duration-500 md:text-xl text-neutral-400">
<!-- Container to give Navbar a fixed width -->
    <div class="flex gap-4 mx-auto items-center justify-between flex-wrap px-4 max-w-7xl">
         <NuxtLink class="inline-block hover:bg-gray-200 p-2" to="/">
            Home
        </NuxtLink>

         <NuxtLink class="inline-block p-2 hover:bg-gray-200" to="/wildlife">
            All About Wildlife
        </NuxtLink>

         <NuxtLink class="inline-block p-2 hover:bg-gray-200" to="/history">
            50 Years Ago
        </NuxtLink>

         <NuxtLink class="inline-block p-2 hover:bg-gray-200" to="/recipes">
            Cooks Column
        </NuxtLink>

         <NuxtLink class="inline-block p-2 hover:bg-gray-200" to="/gardening">
            Garden Hints & Tips
        </NuxtLink>

         <NuxtLink class="inline-block p-2 hover:bg-gray-200" to="/past-issues">
            Past Issues
        </NuxtLink>

         <NuxtLink class="inline-block p-2 hover:bg-gray-200" to="/archive">
            Archive
        </NuxtLink>

         <NuxtLink class="inline-block p-2 hover:bg-gray-200" to="/about">
            About Us
        </NuxtLink>

      <div class="flex gap-3">
        <NuxtLink href="https://www.facebook.com/WarangaNews" title="Facebook" target="_blank"><Icon name="logos:facebook" class="size-7"/></NuxtLink>
        <NuxtLink href="https://www.linkedin.com/company/waranga-news-inc." title="LinkedIn" target="_blank"><Icon name="logos:linkedin-icon" class="size-7 bg-white rounded"/></NuxtLink>
        <NuxtLink href="https://www.instagram.com/waranganews/" title="Instagram" target="_blank"><Icon name="logos:instagram-icon" class="size-7 bg-white rounded-full"/></NuxtLink>
      </div>
    </div>
    <!-- <Weather></Weather> -->
</nav>
</template>

<script>
export default {
  components: {
    BrandLogo: () => import("/images/wnews-masthead2.png")
  },
  setup() {
    const isVisible = ref(false);
    const toggleVisibility = () => {
      isVisible.value = !isVisible.value;
    };

    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: () => import("/images/wnews.png")
        },
        {
            name: "Shorts",
            link: "/shorts",
            icon: () => import("/images/wnews.png")
        },
        {
            name: "About",
            link: "/about",
            icon: () => import("/images/wnews.png")
        }
    ];

    const socialItems = [
        // {
        //     name: "Twitter",
        //     link: process.env.TwitterUrl,
        //     icon: () => import("/images/wnews.png")
        // },
        // {
        //     name: "Github",
        //     link: process.env.GitHubUrl,
        //     icon: () => import("/images/wnews.png")
        // },
        // {
        //     name: "Linkedin",
        //     link: process.env.LinkedInUrl,
        //     icon: () => import("/images/wnews.png")
        // }
    ];
    return {
      isVisible,
      navItems,
      toggleVisibility,
      socialItems
    };
  }
};
</script>