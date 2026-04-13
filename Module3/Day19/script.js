// 1. Create a Dynamic Tabbed Interface
// Build a clean, accessible tab component where clicking on a tab header displays the corresponding tab content. It mimics real-world use like dashboards, profile settings, or pricing plans.

// Functional Requirements
// ✅ Clicking a tab title shows the corresponding content.
// ✅ Only one tab content is visible at a time.
// ✅ The active tab should have a visual highlight.
// ✅ Add a keyboard shortcut: pressing 1, 2, or 3 switches to that tab.

// Example:

// document.addEventListener("keydown", (e) => {
//     if (e.key === "1") switchToTab(1);
//     if (e.key === "2") switchToTab(2);
//     if (e.key === "3") switchToTab(3);
//     });
// ✅ Use event delegation to handle tab clicks.

// ✅ Use classList to manage active state.

// ✅ Use a custom event to broadcast when a tab is changed (log tab name to console).

// ✅ Use stopPropagation() if needed during advanced control.

const tabHeaders = document.querySelector(".tab-headers");
tabHeaders.addEventListener("click", (e) => {
  if (e.target.classList.contains("tab")) {
    const dataTabVal = e.target.getAttribute("data-tab");
    switchToTab(dataTabVal);
  }
});
function switchToTab(dataTabVal) {
  const contents = document.querySelectorAll(".content");
  contents.forEach((content) => {
    if (dataTabVal === content.getAttribute("data-tab")) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  });
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    if (dataTabVal === tab.getAttribute("data-tab")) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "1") switchToTab("1");
  if (e.key === "2") switchToTab("2");
  if (e.key === "3") switchToTab("3");
});
