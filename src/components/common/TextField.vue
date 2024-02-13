<template>
  <div
    class="flex bg-bunker gap-3 rounded-xl justify-start items-center cursor-pointer px-3 py-3 w-full max-w-[330px]"
  >
    <div class="">
      <img :src="SEARCH_ICON" alt="" />
    </div>
    <input
      class="bg-bunker outline-none font-be-vietnam-pro w-full text-sm text-link-water placeholder:text-raven"
      type="search"
      placeholder="Search by Name, Region, Subregion"
      :value="inputValue"
      @input="debouncedInputTrigger"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useDebounceFn } from "@vueuse/core";
import SEARCH_ICON from "../../assets/Search.svg";

const emit = defineEmits(["onDebouncedTrigger"]);
const inputValue = ref("");

const debouncedInputTrigger = useDebounceFn((e) => {
  inputValue.value = e.target.value;
  emit("onDebouncedTrigger", inputValue.value);
}, 1000);
</script>

<style lang="scss" scoped></style>
