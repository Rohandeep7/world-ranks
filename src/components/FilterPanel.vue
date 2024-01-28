<template>
  <div class="flex">
    <div class="flex flex-col w-full gap-2">
      <label
        for="sort-by"
        class="font-be-vietnam-pro text-sm font-semibold text-raven block"
        >Sort by</label
      >
      <div
        class="w-full relative after:content-['v'] after:absolute after:right-3 after:top-[10px]"
      >
        <select
          name="sort-by"
          id="sort-by"
          class="bg-black-pearl border-2 border-bunker text-sm font-semibold spaci text-link-water rounded-xl focus:link-water focus:bunker outline-none block w-full px-3 py-3 tracking-wider cursor-pointer appearance-none"
        >
          <option value="option1">Population</option>
          <option value="option2">Name</option>
          <option value="option3">Area (km²)</option>
        </select>
      </div>

      <!-- <img
          :src="ExpandDownIcon"
          class="absolute top-0 right-0 -translate-x-4 translate-y-4"
        /> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script setup>
import ExpandDownIcon from "../assets/ExpandDown.svg";
</script>

<style lang="scss" scoped>
.select-wrapper {
  position: relative;
}

.select-wrapper::after {
  content: "▼";
  font-size: 1rem;
  top: 2px;
  right: 10px;
  position: absolute;
}
</style>
