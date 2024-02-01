<template>
  <div class="flex text-white">
    <Select v-model="selectedValue" :options="SORT_BY_OPTIONS" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Select from "./common/Select.vue";
import { SORT_BY_OPTIONS } from "../constants";

const selectedValue = ref(SORT_BY_OPTIONS[0].value);
</script>

<style lang="scss" scoped></style>
