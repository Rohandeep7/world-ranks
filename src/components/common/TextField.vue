<template>
  <div
    class="flex bg-bunker gap-3 rounded-xl justify-start items-center px-3 py-3 w-full max-w-[330px]"
  >
    <div class="">
      <img :src="SEARCH_ICON" alt="" />
    </div>
    <input
      class="bg-bunker outline-none font-be-vietnam-pro w-full text-sm text-link-water placeholder:text-raven"
      type="text"
      placeholder="Search by Name, Region, Subregion"
      :value="inputValue"
      @input="debouncedInputTrigger"
    />
    <Transition name="slide-fade" mode="out-in" appear>
      <div v-if="isLoading">
        <Icon name="pr-spinner" animation="spin" speed="fast" fill="grey" />
      </div>
      <div class="cursor-pointer" v-else @click="clearInput">
        <Icon name="md-clear" fill="grey" />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useDebounceFn } from "@vueuse/core";
import Icon from "../common/Icon.vue";
import SEARCH_ICON from "../../assets/Search.svg";

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["onDebouncedTrigger"]);
const inputValue = ref("");

const debouncedInputTrigger = useDebounceFn((e) => {
  inputValue.value = e.target.value;
  emit("onDebouncedTrigger", inputValue.value);
}, 1000);

const clearInput = () => {
  inputValue.value = "";
  emit("onDebouncedTrigger", inputValue.value);
};
</script>

<style lang="scss" scoped></style>
