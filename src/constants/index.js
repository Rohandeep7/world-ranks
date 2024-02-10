export const SORT_BY_OPTIONS = [
  {
    text: "Population",
    value: "population",
  },
  {
    text: "Name",
    value: "name",
  },
  {
    text: "Area (km²)",
    value: "area",
  },
];

export const REGIONS = [
  "Americas",
  "Antractic",
  "Africa",
  "Asia",
  "Europe",
  "Oceania",
];

export const COUNTRY_STATUS = ["Member of the United Nations", "Independent"];

export const RESULT_PANEL_TABLE_FIELDS = [
  "Flag",
  "Name",
  "Population",
  "Area (km²)",
  "Region",
];
export const BASE_URL = {
  REST_COUNTRIES_API: import.meta.env.VITE_REST_COUNTRIES_API_BASE_URL,
};
