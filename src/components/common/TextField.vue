<template>
  <div
    class="flex bg-bunker gap-3 rounded-xl justify-start items-center cursor-pointer px-3 py-[10px] w-full max-w-[360px]"
  >
    <div class="">
      <img :src="SEARCH_ICON" alt="" />
    </div>
    <input
      class="bg-bunker outline-none font-be-vietnam-pro w-full text-link-water placeholder:text-raven"
      type="search"
      placeholder="Search by Name, Region, Subregion"
    />
  </div>
</template>

<script setup>
import SEARCH_ICON from "../../assets/Search.svg";
</script>

<style lang="scss" scoped></style>
