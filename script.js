const stepsList = document.getElementById('steps');
const toggleButton = document.getElementById('showStepsButton');


function toggleSteps() {
    if (stepsList.style.display === 'none' || stepsList.style.display === '') {
        
        stepsList.style.display = 'block';
        toggleButton.textContent = 'Hide Steps';
    } else {
        
        stepsList.style.display = 'none';
        toggleButton.textContent = 'Show Steps';
    }
}

toggleButton.addEventListener('click', toggleSteps);