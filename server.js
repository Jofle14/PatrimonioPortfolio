function toggleDetails(id) {
  // Get the specific details element by ID
  const details = document.getElementById(id);

  if (details) {
    // Toggle the 'show' class only for the clicked section
    details.classList.toggle('show');
  } else {
    console.error(`Element with id "${id}" not found.`);
  }
}