<template>
  <div class="flex flex-col w-full gap-2">
    <label
      for="sort-by"
      class="font-be-vietnam-pro text-sm font-semibold text-raven block"
      >{{ label }}</label
    >
    <div
      class="w-full relative after:content-arrowDownIcon after:absolute after:right-4 after:top-[13px]"
    >
      <select
        v-model="selectedValue"
        name="sort-by"
        id="sort-by"
        class="bg-black-pearl border-2 border-bunker text-sm font-semibold text-link-water rounded-xl focus:border-link-water outline-none block w-full px-3 py-3 tracking-wider cursor-pointer appearance-none"
      >
        <option v-for="option in options" :value="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
    default: "Sort By",
  },
  options: {
    type: Array,
    required: true,
  },
});

const selectedValue = defineModel();
</script>

<style lang="scss" scoped></style>
