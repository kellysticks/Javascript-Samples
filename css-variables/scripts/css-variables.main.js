// Retrieve all input elements within the '.controls' class to manage user events
const inputs = document.querySelectorAll('.controls input');

// Apply style changes based on input values
function handleUpdate(){
    // Retrieve data size or set to empty if not provided
    const suffix = this.dataset.sizing || '';
    // Set CSS variable for the current element to the new value
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

//For each element, add event listener to trigger style updates
inputs.forEach((input) =>{
    input.addEventListener('change', handleUpdate)
    input.addEventListener('mousemove', handleUpdate)
})
