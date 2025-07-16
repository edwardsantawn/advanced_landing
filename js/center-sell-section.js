function centerSellSection() {
  const sellSection = document.querySelector('.section--sell');
  if (!sellSection) return;

  // Get viewport width
  const viewportWidth = window.innerWidth;
  
  // Get the actual width of the sell section
  const sellSectionWidth = sellSection.offsetWidth;
  
  // Calculate equal margins for left and right
  const marginSide = (viewportWidth - sellSectionWidth) / 2;
  
  // Apply the centering with equal margins
  sellSection.style.marginLeft = `${marginSide}px`;
  sellSection.style.marginRight = `${marginSide}px`;
  
  // Ensure the section doesn't exceed viewport width
  sellSection.style.maxWidth = `${viewportWidth - 40}px`; // 40px for some padding
}

// Run on page load
document.addEventListener('DOMContentLoaded', centerSellSection);

// Run on window resize
window.addEventListener('resize', centerSellSection);

// Run when content changes (if using dynamic content)
const observer = new MutationObserver(centerSellSection);
observer.observe(document.body, { childList: true, subtree: true });