<template>
  <div>
    <input
      type="checkbox"
      :id="name"
      :value="label"
      v-model="checkedValue"
      class="peer w-4 h-4 text-red-600 bg-red-100 border-gray-300 rounded"
      :class="isCheckBoxVisible ? 'visible' : 'hidden'"
    />
    <label
      :for="name"
      class="inline-flex items-center justify-between p-2.5 text-sm rounded-xl font-be-vietnam-pro text-raven border-gray-200 cursor-pointer peer-checked:bg-bunker peer-checked:text-link-water font-semibold select-none tracking-normal sm:tracking-wide"
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup>
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
    default: false,
  },
});

const checkedValue = defineModel({ default: false });
</script>

<style lang="scss" scoped></style>
