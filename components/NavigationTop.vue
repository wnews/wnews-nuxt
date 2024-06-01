<template>
    <nav id="navigation"
    class="bg-black sticky top-0 z-40 font-body shadow-card hover:shadow-cardhover transition-all duration-500 md:text-lg text-neutral-400">
<!-- Container to give Navbar a fixed width -->
    <div class="flex md:gap-2 mx-auto items-center justify-between flex-wrap px-4 max-w-7xl">
         <NuxtLink class="inline-block hover:underline decoration-emerald-800 decoration-8 underline-offset-[6px] p-2" to="/">
            Home
        </NuxtLink>

         <NuxtLink class="inline-block p-2 hover:underline decoration-emerald-800 decoration-8 underline-offset-[6px]" to="/wildlife">
            All About Wildlife
        </NuxtLink>

         <NuxtLink class="inline-block p-2 hover:underline decoration-emerald-800 decoration-8 underline-offset-[6px]" to="/history">
            50 Years Ago
        </NuxtLink>

         <NuxtLink class="inline-block p-2 hover:underline decoration-emerald-800 decoration-8 underline-offset-[6px]" to="/recipes">
            Cooks Column
        </NuxtLink>

         <NuxtLink class="inline-block p-2 hover:underline decoration-emerald-800 decoration-8 underline-offset-[6px]" to="/gardening">
            Garden Hints & Tips
        </NuxtLink>

         <NuxtLink class="inline-block p-2 hover:underline decoration-emerald-800 decoration-8 underline-offset-[6px]" to="/past-issues">
            Past Issues
        </NuxtLink>


         <NuxtLink class="inline-block p-2 hover:underline decoration-emerald-800 decoration-8 underline-offset-[6px]" to="/about">
            About Us
        </NuxtLink>

        <div class="relative inline-block text-left" @mouseleave="onMouseLeave">
          <!-- Trigger -->
          <div @mouseenter="isDropdownOpen = true">
            <button
              class="inline-flex items-center p-2 hover:underline decoration-emerald-800 decoration-8 underline-offset-[6px] focus:outline-none">
              More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>
          <!-- Dropdown -->
          <div v-show="isDropdownOpen"
            class="absolute z-10 w-56 mt-0 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
            @mouseleave="onMouseLeave">
            <NuxtLink class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/firstpeoples">
                Waranga Dreaming
            </NuxtLink>
            <NuxtLink class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/immigration">
                Celestial Connections
            </NuxtLink>
            <NuxtLink class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/archive">
                Archive
            </NuxtLink>
          </div>
        </div>

    </div>
    <!-- <Weather></Weather> -->
</nav>
</template>

<script setup>
import { ref } from 'vue';

const isDropdownOpen = ref(false);

const onMouseLeave = (event) => {
  // Check if the mouse is leaving both the trigger and the dropdown
  if (!event.relatedTarget || !event.currentTarget.contains(event.relatedTarget)) {
    isDropdownOpen.value = false;
  }
};
</script>
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