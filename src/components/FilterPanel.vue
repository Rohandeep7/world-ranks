<template>
  <div class="flex text-white gap-6 flex-col sm:gap-8">
    <Select v-model="sortBy" label="Sort by" :options="SORT_BY_OPTIONS" />
    <div class="flex gap-2 flex-col">
      <label
        for="region-checkbox"
        class="font-be-vietnam-pro text-xs font-semibold text-raven block"
        >Region</label
      >
      <ul class="flex flex-row gap-x-2.5 sm:gap-x-3 gap-y-3.5 flex-wrap">
        <li v-for="(region, index) in REGIONS" :key="index">
          <Checkbox
            v-model="selectedRegions"
            :is-check-box-visible="false"
            :label="region"
            :name="region"
            :key="index"
          />
        </li>
      </ul>
    </div>

    <div class="flex gap-3 flex-col">
      <label
        for="region-checkbox"
        class="font-be-vietnam-pro text-xs font-semibold text-raven block"
        >Status</label
      >
      <ul class="flex flex-col gap-2">
        <li v-for="(status, index) in COUNTRY_STATUS" :key="index">
          <Checkbox
            v-model="selectedStatuses"
            :label="status"
            :name="status"
            :key="index"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Select from "./common/Select.vue";
import Checkbox from "./common/Checkbox.vue";
import { SORT_BY_OPTIONS, REGIONS, COUNTRY_STATUS } from "../constants";

const emit = defineEmits(["onFilterChange"]);

const sortBy = ref(SORT_BY_OPTIONS[0].value);

const selectedRegions = ref([]);

const selectedStatuses = ref([]);

watch([sortBy, selectedRegions, selectedStatuses], (newValue, oldValue) => {
  emit("onFilterChange", newValue);
});
</script>

<style lang="scss" scoped></style>
