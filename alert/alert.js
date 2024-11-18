function sendAlert() {
    const location = document.getElementById("location").value;
    const details = document.getElementById("details").value;

    if (location && details) {
        alert(`🚨 Alert Sent!\nLocation: ${location}\nDetails: ${details}`);
        document.getElementById("alertForm").reset();
        // Here you can add a function to send data to the backend
    } else {
        alert("Please fill out all fields!");
    }
}