chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = new URL(details.url);
    if (url.host === "howl.me" && url.pathname.startsWith("/link/")) {
      const redirectUrl = url.searchParams.get("url");
      if (redirectUrl) {
        return { redirectUrl: decodeURIComponent(redirectUrl) };
      }
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
