<template>
  <main
    class="flex flex-col gap-6 justify-center items-center font-be-vietnam-pro"
  >
    <Image
      img-class="-translate-y-1/2 w-40 sm:w-52 z-10"
      :src="countryDetails.flags.png"
    />
    <header class="-translate-y-12 text-link-water text-center">
      <h1 class="text-xl">{{ countryDetails.commonName }}</h1>
      <h4 class="text-base">{{ countryDetails.officialName }}</h4>
    </header>

    <!-- <section class="-translate-y-12 text-link-water">
      <div class="bg-bunker p-3 rounded-md divide-x-2 text-xs">
        <span>Population</span>
        <span>as</span>
      </div>
    </section> -->
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import usePromise from "../composables/common/use-promise";
import countryService from "../services/CountryService";
import Image from "../components/common/Image.vue";

const route = useRoute();
const countryDetails = ref(null);

const getCoutryEvent = usePromise({
  target: (params) => countryService.getCountry(params),
  onSuccess: (response) => {
    countryDetails.value = response[0];
  },
});

getCoutryEvent.run({
  name: route.params.name,
});
</script>

<style lang="scss" scoped></style>
