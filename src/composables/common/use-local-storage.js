import { ref, watch } from "vue";

export default function useLocalStorage(key, options = {}) {
  const storedValue = localStorage.getItem(key);
  const parsedValue = storedValue ? JSON.parse(storedValue) : null;

  const initialValue = parsedValue ? parsedValue : options.defaultValue;

  const itemValue = ref(initialValue);

  watch(
    itemValue,
    (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
      if (options.onValueChange) {
        options.onValueChange(newValue);
      }
    },
    {
      immediate: true,
    }
  );

  function setItem(newValue) {
    itemValue.value = newValue;
  }

  function clear() {
    localStorage.removeItem(key);
    itemValue.value = options.defaultValue;
  }

  function clearAll() {
    localStorage.clear();
    itemValue.value = options.defaultValue;
  }

  return { itemValue, setItem, clear, clearAll };
}
