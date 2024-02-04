<template>
  <div
    class="relative font-be-vietnam-pro font-semibold select-none tracking-normal sm:tracking-wide"
  >
    <input
      type="checkbox"
      :id="name"
      :value="label"
      v-model="checkedValue"
      class="hidden peer"
    />
    <img
      v-if="isCheckBoxVisible"
      :src="doneRound"
      class="hidden peer-checked:block absolute top-0 left-0 w-[20px]"
    />
    <label
      v-if="isCheckBoxVisible"
      :for="name"
      class="before:border-2 before:min-w-5 before:p-2 before:h-5 before:rounded-[3px] before:mr-2 before:border-raven peer-checked:before:bg-royal-blue peer-checked:before:border-royal-blue inline-flex items-center justify-between text-sm text-link-water cursor-pointer"
    >
      {{ label }}
    </label>

    <label
      v-else
      :for="name"
      class="inline-flex items-center justify-between p-2.5 text-sm rounded-xl text-raven border-gray-200 cursor-pointer peer-checked:bg-bunker peer-checked:text-link-water"
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup>
import doneRound from "../../assets/DoneRound.svg";

const props = defineProps({
  name: {
    type: String,
    required: false,
    default: "checkBox",
  },
  label: {
    type: String,
    required: true,
  },
  isCheckBoxVisible: {
    type: String,
    default: true,
  },
});

const checkedValue = defineModel({ default: false });
</script>

<style scoped></style>
