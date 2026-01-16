let activeRequests = 0;

export const loaderStore = {
  show() {
    activeRequests++;
    document.dispatchEvent(new CustomEvent("loader:show"));
  },
  hide() {
    activeRequests = Math.max(activeRequests - 1, 0);
    if (activeRequests == 0) {
      document.dispatchEvent(new CustomEvent("loader:hide"));
    }
  },
};
