// Get the display element where the time will be shown
const display = document.getElementById("nums");

// Initialize variables for stopwatch functionality
let startTime = 0; // To store the starting time
let timer = null; // To hold the timer ID for setInterval
let isRunning = false; // To track if the stopwatch is currently running
let elapsedTime = 0; // To track the elapsed time

// Function to start the stopwatch
function start() {
    // Check if the stopwatch is not already running
    if (!isRunning) {
        // Set startTime to the current time minus any previously elapsed time
        startTime = Date.now() - elapsedTime;
        // Start the timer, calling update every 10 milliseconds
        timer = setInterval(update, 10);
        // Set isRunning to true
        isRunning = true;
    }
}

// Function to stop the stopwatch
function stop() {
    // Clear the interval to stop the timer
    clearInterval(timer);
    // Calculate elapsed time by subtracting startTime from the current time
    elapsedTime = Date.now() - startTime;
    // Set isRunning to false
    isRunning = false;   
}

// Function to reset the stopwatch
function reset() {
    // Clear the interval to stop the timer
    clearInterval(timer);
    // Reset startTime to 0
    startTime = 0;
    // Set isRunning to false
    isRunning = false;
    // Reset elapsedTime to 0
    elapsedTime = 0; 
    // Update display to show "00:00:00:00"
    display.textContent = "00:00:00:00";    
}

// Function to update the stopwatch display
function update() {
    // Get the current time
    const currentTime = Date.now();
    // Calculate the elapsed time since the stopwatch started
    elapsedTime = currentTime - startTime;

    // Calculate hours, minutes, seconds, and milliseconds
    let hour = Math.floor((elapsedTime / (1000 * 60 * 60)));
    let min = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let secc = Math.floor((elapsedTime / 1000) % 60);
    let mini = Math.floor((elapsedTime % 1000) / 10);

    // Format each component to ensure it's displayed as two digits
    hour = String(hour).padStart(2, "0");
    min = String(min).padStart(2, "0");
    secc = String(secc).padStart(2, "0");
    mini = String(mini).padStart(2, "0");

    // Update the display text with formatted time
    display.textContent = `${hour}:${min}:${secc}:${mini}`;
}