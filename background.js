chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = new URL(details.url);
    if (url.host === "howl.me" && url.pathname.startsWith("/link/")) {
      const redirectUrl = url.searchParams.get("url");
      if (redirectUrl) {
        return { redirectUrl: decodeURIComponent(redirectUrl) };
      }
    }
    else if (url.host === "redirect.viglink.com") {
      const redirectUrl = url.searchParams.get("u");
      if (redirectUrl) {
        return { redirectUrl: decodeURIComponent(redirectUrl) };
      }
    }
	else if (url.host === "events.release.narrativ.com" && url.pathname.startsWith("/api/v0/client_redirect/")) {
      const encodedRedirectUrl = url.searchParams.get("url");
      if (encodedRedirectUrl) {
        const decodedUrl = new URL(decodeURIComponent(encodedRedirectUrl));
        const murl = decodedUrl.searchParams.get("murl");
        if (murl) {
          return { redirectUrl: decodeURIComponent(murl) };
        }
      }
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
