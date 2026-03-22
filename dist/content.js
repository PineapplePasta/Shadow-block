"use strict";
(() => {
  // src/content.ts
  var overlayElement = null;
  var isDismissed = false;
  var currentUrl = "";
  async function init() {
    console.log("[Content] Content script loaded on:", window.location.href);
    currentUrl = window.location.href;
    await checkCurrentUrl();
    observeUrlChanges();
  }
  async function checkCurrentUrl() {
    try {
      const response = await chrome.runtime.sendMessage({
        type: "CHECK_URL",
        payload: { url: currentUrl }
      });
      if (!response || !response.success) {
        console.error("[Content] Failed to check URL:", response?.error);
        return;
      }
      const { status, domain } = response.data;
      console.log(`[Content] URL status: ${status}, domain: ${domain}`);
      if (status === "DISCOURAGED" /* DISCOURAGED */) {
        chrome.runtime.sendMessage({
          type: "SITE_VISITED",
          payload: { url: currentUrl }
        });
        const stateResponse = await chrome.runtime.sendMessage({
          type: "GET_STATE"
        });
        if (stateResponse?.success) {
          const state = stateResponse.data;
          if (state.session && state.session.isActive) {
            showWarningOverlay(domain);
          }
        }
      } else if (status === "BLOCKED" /* BLOCKED */) {
        chrome.runtime.sendMessage({
          type: "SITE_VISITED",
          payload: { url: currentUrl }
        });
        const stateResponse = await chrome.runtime.sendMessage({
          type: "GET_STATE"
        });
        if (stateResponse?.success) {
          const state = stateResponse.data;
          if (state.session?.isActive) {
            console.log(
              `[Content] Blocked site detected during active session - redirecting to blocked page`
            );
            window.location.href = chrome.runtime.getURL(
              `blocked.html?url=${encodeURIComponent(domain || "unknown")}`
            );
          }
        }
      }
    } catch (error) {
      console.error("[Content] Error checking URL:", error);
    }
  }
  function observeUrlChanges() {
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
    history.pushState = function(...args) {
      originalPushState.apply(this, args);
      handleUrlChange();
    };
    history.replaceState = function(...args) {
      originalReplaceState.apply(this, args);
      handleUrlChange();
    };
    window.addEventListener("popstate", handleUrlChange);
    window.addEventListener("hashchange", handleUrlChange);
  }
  function handleUrlChange() {
    const newUrl = window.location.href;
    if (newUrl !== currentUrl) {
      console.log("[Content] URL changed:", newUrl);
      currentUrl = newUrl;
      isDismissed = false;
      removeOverlay();
      checkCurrentUrl();
    }
  }
  function showWarningOverlay(domain) {
    if (isDismissed) {
      console.log("[Content] Overlay dismissed, not showing");
      return;
    }
    if (overlayElement) {
      console.log("[Content] Overlay already exists");
      return;
    }
    console.log("[Content] Showing warning overlay for domain:", domain);
    overlayElement = document.createElement("div");
    overlayElement.id = "soul-shepherd-warning-overlay";
    overlayElement.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2147483647;
    background: linear-gradient(135deg, rgba(139, 69, 19, 0.95), rgba(101, 67, 33, 0.95));
    color: #f5e6d3;
    padding: 16px 24px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    animation: slideDown 0.3s ease-out;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  `;
    const messageContainer = document.createElement("div");
    messageContainer.style.cssText = `
    flex: 1;
    display: flex;
    align-items: center;
    gap: 12px;
  `;
    const icon = document.createElement("span");
    icon.textContent = "\u26A0\uFE0F";
    icon.style.cssText = `
    font-size: 24px;
    flex-shrink: 0;
  `;
    const text = document.createElement("span");
    text.textContent = "The Soul Shepherd senses this realm drains your Spirit. Return to your task.";
    text.style.cssText = `
    font-weight: 500;
  `;
    const dismissButton = document.createElement("button");
    dismissButton.textContent = "Dismiss";
    dismissButton.style.cssText = `
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #f5e6d3;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s ease;
    flex-shrink: 0;
  `;
    dismissButton.addEventListener("mouseenter", () => {
      dismissButton.style.background = "rgba(255, 255, 255, 0.3)";
    });
    dismissButton.addEventListener("mouseleave", () => {
      dismissButton.style.background = "rgba(255, 255, 255, 0.2)";
    });
    dismissButton.addEventListener("click", () => {
      isDismissed = true;
      removeOverlay();
    });
    messageContainer.appendChild(icon);
    messageContainer.appendChild(text);
    overlayElement.appendChild(messageContainer);
    overlayElement.appendChild(dismissButton);
    const style = document.createElement("style");
    style.textContent = `
    @keyframes slideDown {
      from {
        transform: translateY(-100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `;
    document.head.appendChild(style);
    if (document.body) {
      document.body.insertBefore(overlayElement, document.body.firstChild);
    } else {
      const observer = new MutationObserver(() => {
        if (document.body && overlayElement) {
          document.body.insertBefore(overlayElement, document.body.firstChild);
          observer.disconnect();
        }
      });
      observer.observe(document.documentElement, { childList: true });
    }
    console.log("[Content] Warning overlay displayed");
  }
  function removeOverlay() {
    if (overlayElement) {
      overlayElement.remove();
      overlayElement = null;
      console.log("[Content] Warning overlay removed");
    }
  }
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("[Content] Received message:", message.type);
    switch (message.type) {
      case "SESSION_STARTED":
        isDismissed = false;
        checkCurrentUrl();
        break;
      case "SESSION_ENDED":
      case "BREAK_STARTED":
        removeOverlay();
        isDismissed = false;
        break;
      case "SHOW_WARNING":
        if (message.payload?.domain) {
          showWarningOverlay(message.payload.domain);
        }
        break;
      case "HIDE_WARNING":
        removeOverlay();
        break;
    }
    sendResponse({ success: true });
    return true;
  });
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
