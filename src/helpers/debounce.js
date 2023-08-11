const debounce = (callback, delay = 200) => {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(this, args), delay);
  };
};

export default debounce;
