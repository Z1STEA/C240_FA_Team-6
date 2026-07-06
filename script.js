// Toggle Visibility between Launcher Icon and Panel Box
function toggleChat() {
    const chatWidget = document.getElementById("chatWidget");
    chatWidget.classList.toggle("hidden");
}

// Function to generate the current time string
function getCurrentTimeString() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // convert '0' to '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    return hours + ':' + minutes + ampm;
}

function sendMessage() {
    let input = document.getElementById("userInput");
    let chatBody = document.getElementById("chatBody");

    if (input.value.trim() === "") return;

    const currentTime = getCurrentTimeString();
    const userMessage = input.value;
    const userQuery = userMessage.toLowerCase();
    
    input.value = ""; // Clear input immediately

    // Inject User Bubble and Timestamp
    const userHTML = `
        <div class="message user">${userMessage}</div>
        <div class="timestamp user-time">${currentTime}</div>
    `;
    chatBody.insertAdjacentHTML('beforeend', userHTML);
    chatBody.scrollTop = chatBody.scrollHeight;

    // Delayed Bot Response
    setTimeout(() => {
        let responseText = "";

        if (userQuery.includes("cut-off") || userQuery.includes("cop") || userQuery.includes("infocomm")) {
            responseText = "The JAE Cut-Off Point for the Diploma in Infocomm Security Management (R55) typically ranges around 22 points. Would you like to view entry requirements or see portfolio tips?";
        } else if (userQuery.includes("eae") || userQuery.includes("portfolio")) {
            responseText = "For your EAE submission, focus on highlighting relevant skills and projects in your 1000-character statement. Keep it structured and passionate!";
        } else {
            responseText = "Thanks for your inquiry! I can assist you best with EAE criteria, JAE pathways, or specific RP admission timelines.";
        }

        const botTime = getCurrentTimeString();
        const botHTML = `
            <div class="message bot">${responseText}</div>
            <div class="timestamp bot-time">${botTime}</div>
        `;
        
        chatBody.insertAdjacentHTML('beforeend', botHTML);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 600);
}

// Support keypress "Enter" execution
document.getElementById("userInput")?.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});