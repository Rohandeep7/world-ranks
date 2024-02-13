<template>
  <div
    class="absolute sm:left-1/2 w-full sm:max-w-[90vw] bg-black-pearl sm:border-2 sm:border-bunker sm:rounded-lg sm:-translate-x-1/2 -translate-y-6 sm:-translate-y-10"
  >
    <div class="m-6">
      <section class="flex flex-col gap-6">
        <div class="search-area">
          <SearchArea
            :numberOfCountriesFound="countries.length"
            @on-text-change="searchCountries"
          />
        </div>

        <div class="flex flex-col sm:flex-row justify-start gap-4">
          <div class="w-full sm:w-1/4">
            <FilterPanel @on-filter-change="filterChangeHandler" />
          </div>
          <div
            class="w-full overflow-auto overflow-x-hidden font-be-vietnam-pro"
          >
            <table class="w-full block max-h-[600px]">
              <thead
                class="top-0 left-0 text-xs text-raven border-b-2 border-bunker font-semibold text-left"
              >
                <tr>
                  <th
                    scope="col"
                    class="px-8 py-3"
                    v-for="(field, idx) in RESULT_PANEL_TABLE_FIELDS"
                    :key="idx"
                  >
                    {{ field }}
                  </th>
                </tr>
              </thead>
              <tbody class="text-link-water">
                <tr class="" v-for="(country, idx) in countries" :key="idx">
                  <td class="px-6 sm:px-8 py-4">
                    <Image
                      imgClass="rounded-sm"
                      width="36"
                      height="20"
                      v-if="country.flags"
                      :src="country.flags.png"
                    />
                  </td>
                  <td class="px-6 sm:px-8 py-4">
                    {{ country.name.common }}
                  </td>
                  <td class="px-6 sm:px-8 py-4">
                    {{ country.population }}
                  </td>
                  <td class="px-6 sm:px-8 py-4">
                    {{ country.area }}
                  </td>
                  <td class="px-6 sm:px-8 py-4">
                    {{ country.region }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SearchArea from "./SearchArea.vue";
import FilterPanel from "./FilterPanel.vue";
import Image from "./common/Image.vue";
import countryService from "../services/CountryService";
import usePromise from "../composables/common/use-promise";
import { RESULT_PANEL_TABLE_FIELDS } from "../constants/index";

const countries = ref([]);
const filterChangeHandler = (filters) => {
  console.log(Array.isArray(filters));
};

const getAllCountriesEvent = usePromise({
  target: (params) => countryService.getAllCountries(params),
  onSuccess: (response) => {
    countries.value = response;
  },
});

const searchCountriesEvent = usePromise({
  target: (params) => countryService.searchCountries(params),
  onSuccess: (response) => {
    countries.value = response;
  },
});

const searchCountries = (searchText) => {
  const params = {
    name: searchText,
  };
  searchCountriesEvent.run(params);
};

getAllCountriesEvent.run();
</script>

<style lang="scss" scoped></style>
