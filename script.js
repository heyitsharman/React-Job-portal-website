
// Wait for the document to load
document.addEventListener('DOMContentLoaded', () => {
  // Get all checkboxes and job cards
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const jobCards = document.querySelectorAll('.job-card');

  // Listen for changes in the checkboxes
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', filterJobs);
  });

  function filterJobs() {
    const selectedCategories = Array.from(checkboxes) // Convert NodeList to Array
      .filter((checkbox) => checkbox.checked) // Get only the checked checkboxes
      .map((checkbox) => checkbox.value); // Extract their values

    // If no checkbox is selected, show all jobs
    if (selectedCategories.length === 0) {
      jobCards.forEach((jobCard) => jobCard.style.display = 'flex');
      return;
    }

    // Filter job cards based on selected categories
    jobCards.forEach((jobCard) => {
      // Get the job type from the text content
      const jobType = jobCard.querySelector('.text-muted').textContent.toLowerCase();

      // Match against selected categories
      const matches = selectedCategories.some((category) => jobType.includes(category));

      // Show or hide the job card
      jobCard.style.display = matches ? 'flex' : 'none';
    });
  }

  // Reset filter and show all jobs when "Remove Filter" button is clicked
  document.querySelector('.apply-btn').addEventListener('click', () => {
    checkboxes.forEach((checkbox) => (checkbox.checked = false));
    jobCards.forEach((jobCard) => jobCard.style.display = 'flex');
  });
});


