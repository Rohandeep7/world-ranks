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
      <tr class="" v-for="(country, idx) in dataFields" :key="idx">
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
</script>

<style lang="scss" scoped></style>
