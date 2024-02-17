<template>
  <div class="sm:w-[85vw]">
    <section class="flex flex-col gap-6">
      <div
        id="search-area"
        class="flex items-center flex-col-reverse sm:flex-row gap-4 justify-center sm:justify-between"
      >
        <h1
          class="font-semibold font-be-vietnam-pro text-raven text-sm sm:text-base"
        >
          {{ `Found ${numberOfCountriesFound} countries` }}
        </h1>
        <TextField
          :is-loading="getAllCountriesEvent.isLoading.value"
          @on-debounced-trigger="textChangeHandler"
        />
      </div>

      <div class="flex flex-col sm:flex-row justify-start gap-4">
        <div class="w-full sm:w-1/4">
          <FilterPanel @on-filter-change="filterChangeHandler" />
        </div>
        <div class="w-full overflow-auto overflow-x-hidden font-be-vietnam-pro">
          <Table
            :header-fields="RESULT_PANEL_TABLE_FIELDS"
            :data-fields="countries"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import TextField from "../components/common/TextField.vue";
import FilterPanel from "../components/FilterPanel.vue";
import countryService from "../services/CountryService";
import usePromise from "../composables/common/use-promise";
import Table from "../components/common/Table.vue";
import { RESULT_PANEL_TABLE_FIELDS } from "../constants/index";

const countries = ref([]);
const filters = ref([]);
const searchText = ref("");
const filterChangeHandler = (updatedFilters) => {
  filters.value = updatedFilters;
};

const textChangeHandler = (text) => {
  searchText.value = text;
};

const numberOfCountriesFound = computed(() => countries.value.length);

const getAllCountriesEvent = usePromise({
  target: (params) => countryService.getAllCountries(params),
  onSuccess: (response) => {
    countries.value = response;
  },
});

getAllCountriesEvent.run();

watch([searchText, filters], (newValue) => {
  console.log(newValue);
});
</script>

<style lang="scss" scoped></style>
