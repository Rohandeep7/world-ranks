<template>
  <div
    class="absolute sm:top-1/2 sm:left-1/2 w-full sm:max-w-[90vw] bg-black-pearl sm:border-2 sm:border-[#282B30] rounded-lg sm:-translate-x-1/2 sm:-translate-y-[5%]"
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
          <div
            class="sm:w-4/5 max-h-screen text-link-water font-be-vietnam-pro"
          >
            <div class="overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full max-h-40">
                <thead
                  class="text-xs text-raven border-b-2 border-bunker font-semibold text-left"
                >
                  <tr>
                    <th
                      scope="col"
                      class="py-3"
                      v-for="(field, idx) in RESULT_PANEL_TABLE_FIELDS"
                      :key="idx"
                    >
                      {{ field }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class=""
                    v-for="(country, idx) in getAllCountriesEvent.result.value"
                    :key="idx"
                  >
                    <td class="py-4">
                      <Image
                        :width="36"
                        :height="20"
                        v-if="country.flags"
                        :src="country.flags.png"
                      />
                    </td>
                    <td class="py-4">
                      {{ country.name.common }}
                    </td>
                    <td class="py-4">
                      {{ country.population }}
                    </td>
                    <td class="py-4">
                      {{ country.area }}
                    </td>
                    <td class="py-4">
                      {{ country.region }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import SearchArea from "./SearchArea.vue";
import FilterPanel from "./FilterPanel.vue";
import Image from "./common/Image.vue";
import countryService from "../services/CountryService";
import usePromise from "../composables/common/use-promise";
import { RESULT_PANEL_TABLE_FIELDS } from "../constants/index";

const filterChangeHandler = (filters) => {
  console.log(Array.isArray(filters));
};

const getAllCountriesEvent = usePromise({
  target: (params) => countryService.getAllCountries(params),
  onSuccess: (response) => {
    console.log("Countriesss", response);
  },
});

getAllCountriesEvent.run();
</script>

<style lang="scss" scoped></style>
