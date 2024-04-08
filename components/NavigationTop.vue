<template>
    <nav id="navigation"
    class="bg-white sticky top-0 z-40 font-body shadow-card hover:shadow-cardhover transition-all duration-500 md:text-xl text-blue-400">
<!-- Container to give Navbar a fixed width -->
    <div class="flex mx-auto items-center justify-center flex-wrap p-4 max-w-7xl">
      <span class="flex flex-row mt-6 md:mt-0 mr-6">
         <NuxtLink class="inline-block border border-white rounded hover:border-gray-200 hover:bg-gray-200" to="/">
            Home
        </NuxtLink>
      </span>

      <span class="flex flex-row mt-6 md:mt-0 mr-6">
         <NuxtLink class="inline-block border border-white rounded hover:border-gray-200 hover:bg-gray-200" to="/wildlife">
            All About Wildlife
        </NuxtLink>
      </span>

      <span class="flex flex-row mt-6 md:mt-0 mr-6">
         <NuxtLink class="inline-block border border-white rounded hover:border-gray-200 hover:bg-gray-200" to="/history">
            50 Years Ago
        </NuxtLink>
      </span>

      <span class="flex flex-row mt-6 md:mt-0 mr-6">
         <NuxtLink class="inline-block border border-white rounded hover:border-gray-200 hover:bg-gray-200" to="/recipes">
            Cooks Column
        </NuxtLink>
      </span>

      <span class="flex flex-row mt-6 md:mt-0 mr-6">
         <NuxtLink class="inline-block border border-white rounded hover:border-gray-200 hover:bg-gray-200" to="/gardening">
            Garden Hints & Tips
        </NuxtLink>
      </span>

      <span class="flex flex-row mt-6 md:mt-0 mr-6">
         <NuxtLink class="inline-block border border-white rounded hover:border-gray-200 hover:bg-gray-200" to="/past-issues">
            Past Issues
        </NuxtLink>
      </span>

      <span class="flex flex-row mt-6 md:mt-0 mr-6">
         <NuxtLink class="inline-block border border-white rounded hover:border-gray-200 hover:bg-gray-200" to="/about">
            About Us
        </NuxtLink>
      </span>
    </div>
    <Weather></Weather>
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