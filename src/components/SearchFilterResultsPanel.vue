<template>
  <div
    class="absolute sm:top-1/2 sm:left-1/2 w-full sm:max-w-[90vw] bg-black-pearl sm:border-2 sm:border-[#282B30] rounded-lg sm:-translate-x-1/2 sm:-translate-y-[15%]"
  >
    <div class="m-6">
      <section class="flex flex-col gap-8">
        <div class="search-area">
          <SearchArea />
        </div>

        <div class="flex justify-center items-center gap-4">
          <div class="w-full sm:w-1/4">
            <FilterPanel />
          </div>
          <div class="sm:w-4/5"></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import SearchArea from "./SearchArea.vue";
import FilterPanel from "./FilterPanel.vue";
</script>

<style lang="scss" scoped></style>
