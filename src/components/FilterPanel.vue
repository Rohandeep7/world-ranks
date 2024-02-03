<template>
  <div class="flex text-white gap-6 flex-col sm:gap-8">
    <Select
      v-model="selectedValue"
      label="Sort by"
      :options="SORT_BY_OPTIONS"
    />
    <div class="flex gap-2 flex-col">
      <label
        for="region-checkbox"
        class="font-be-vietnam-pro text-sm font-semibold text-raven block"
        >Region</label
      >
      <ul class="flex flex-row gap-x-2.5 sm:gap-x-3 gap-y-3.5 flex-wrap">
        <li v-for="(region, index) in REGIONS">
          <Checkbox
            v-model="checkedValues"
            :is-check-box-visible="false"
            :label="region"
            :name="region"
            :key="index"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Select from "./common/Select.vue";
import Checkbox from "./common/Checkbox.vue";
import { SORT_BY_OPTIONS, REGIONS } from "../constants";

const selectedValue = ref(SORT_BY_OPTIONS[0].value);

const checkedValues = ref([]);
</script>

<style lang="scss" scoped></style>
