<template>
  <table class="w-full block max-h-[600px]">
    <thead
      class="top-0 left-0 text-xs text-raven border-b-2 border-bunker font-semibold text-left"
    >
      <tr>
        <th
          scope="col"
          class="px-8 py-3"
          v-for="(field, idx) in headerFields"
          :key="idx"
        >
          {{ field }}
        </th>
      </tr>
    </thead>
    <tbody class="text-link-water">
      <tr
        class="cursor-pointer hover:bg-bunker"
        v-for="(country, idx) in dataFields"
        :key="idx"
        @click="onDataFieldClickHandler(country.commonName)"
      >
        <td class="px-6 sm:px-8 py-4">
          <Image
            imgClass="rounded-sm"
            width="36"
            height="20"
            v-if="country.flags"
            :src="country.flags.png"
          />
        </td>
        <td class="px-6 sm:px-8 py-4">
          {{ country.name.common }}
        </td>
        <td class="px-6 sm:px-8 py-4">
          {{ country.population }}
        </td>
        <td class="px-6 sm:px-8 py-4">
          {{ country.area }}
        </td>
        <td class="px-6 sm:px-8 py-4">
          {{ country.region }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import Image from "./Image.vue";
import { useRouter } from "vue-router";

const props = defineProps({
  headerFields: {
    type: Array,
    required: true,
  },
  dataFields: {
    type: Array,
    required: false,
  },
});

const router = useRouter();

const onDataFieldClickHandler = (name) => {
  router.push({
    name: "country",
    params: {
      name: name,
    },
  });
};
</script>

<style lang="scss" scoped></style>
