import { ref } from "vue";

export default function usePromise(options = {}) {
  const result = ref(null);
  const error = ref(null);
  const isLoading = ref(false);
  const { target, onSuccess, onError } = options;

  const run = async (...args) => {
    isLoading.value = true;
    error.value = null;
    try {
      const data = await target(...args);
      result.value = data;
      if (options.onSuccess) {
        onSuccess(data, ...args);
      }
    } catch (err) {
      error.value = err;
      if (options.onError) {
        onError(err, ...args);
      }
    } finally {
      isLoading.value = false;
    }
  };

  const reset = () => {
    result.value = null;
    error.value = null;
  };

  // Symbol()

  return {
    result,
    error,
    isLoading,
    run,
    reset,
  };
}
