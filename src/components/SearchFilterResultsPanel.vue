<template>
  <div
    class="absolute sm:top-1/2 sm:left-1/2 w-full sm:max-w-[90vw] bg-black-pearl sm:border-2 sm:border-[#282B30] rounded-lg sm:-translate-x-1/2 sm:-translate-y-[15%]"
  >
    <div class="m-6">
      <section class="flex flex-col gap-6">
        <div class="search-area">
          <SearchArea />
        </div>

        <div class="flex flex-col sm:flex-row justify-start gap-4">
          <div class="w-full sm:w-1/4">
            <FilterPanel @on-filter-change="filterChangeHandler" />
          </div>
          <div class="sm:w-4/5">
            <div v-if="isLoading">Loading...</div>
            <ul class="flex w-full flex-wrap text-white gap-2" v-else>
              <li v-for="country in listOfCountries">
                {{ country.name.common }}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import SearchArea from "./SearchArea.vue";
import FilterPanel from "./FilterPanel.vue";
import countryService from "../services/CountryService";
import usePromise from "../composables/common/use-promise";

const filterChangeHandler = (filters) => {
  console.log(Array.isArray(filters));
};

const {
  result: listOfCountries,
  isLoading,
  run: countriesEventRun,
} = usePromise({
  target: (params) => countryService.getAllCountries(params),
  onSuccess: (response) => {
    console.log("Countriesss", response);
  },
});

countriesEventRun();
</script>

<style lang="scss" scoped></style>
