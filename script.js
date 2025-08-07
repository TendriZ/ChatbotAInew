// Global variables
let isProcessing = false;

// Improved pesan function with better UI
function pesan() {
  if (isProcessing) return;
  
  const input = document.getElementById("pesan");
  const message = input.value.trim();
  
  if (!message) return;
  
  isProcessing = true;
  const sendBtn = document.getElementById("send-btn");
  sendBtn.disabled = true;
  sendBtn.textContent = "Sending...";
  
  // Add user message with better styling
  addMessage(message, 'user');
  input.value = "";
  
  // Add typing indicator
  const typingDiv = addTypingIndicator();
  
  geminiChatAi(message).then((balas) => {
    // Remove typing indicator
    removeTypingIndicator(typingDiv);
    // Add AI response
    addMessage(balas, 'bot');
    
    // Re-enable send button
    isProcessing = false;
    sendBtn.disabled = false;
    sendBtn.textContent = "Send";
    
    // Focus back to input
    input.focus();
  }).catch((error) => {
    console.error("Error:", error);
    removeTypingIndicator(typingDiv);
    addMessage("Sorry, I encountered an error. Please try again.", 'bot');
    
    isProcessing = false;
    sendBtn.disabled = false;
    sendBtn.textContent = "Send";
    input.focus();
  });
  
  scrollToBottom();
}

// Handle form submission
function handleSubmit(event) {
  event.preventDefault();
  pesan();
}

// Add message with proper styling
function addMessage(text, type) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${type}`;
  
  if (type === 'user') {
    messageDiv.innerHTML = `<strong>You:</strong> ${text}`;
  } else {
    messageDiv.innerHTML = `<strong>TendriZ AI:</strong> ${text}`;
  }
  
  document.getElementById("out").appendChild(messageDiv);
  scrollToBottom();
  return messageDiv;
}

// Add typing indicator
function addTypingIndicator() {
  const typingDiv = document.createElement('div');
  typingDiv.className = 'message bot typing-indicator';
  typingDiv.innerHTML = '<strong>TendriZ AI:</strong> <span id="typing-text">Thinking</span><span id="dots">...</span>';
  document.getElementById("out").appendChild(typingDiv);
  
  // Animate dots
  let dotCount = 0;
  const dotsInterval = setInterval(() => {
    const dotsSpan = typingDiv.querySelector('#dots');
    if (dotsSpan) {
      dotCount = (dotCount + 1) % 4;
      dotsSpan.textContent = '.'.repeat(dotCount);
    }
  }, 500);
  
  typingDiv.dotsInterval = dotsInterval;
  scrollToBottom();
  return typingDiv;
}

// Remove typing indicator
function removeTypingIndicator(typingDiv) {
  if (typingDiv && typingDiv.dotsInterval) {
    clearInterval(typingDiv.dotsInterval);
    typingDiv.remove();
  }
}

// Clear chat function
function clearChat() {
  const chatArea = document.getElementById("out");
  chatArea.innerHTML = `
    <div class="message bot">
      <strong>TendriZ AI:</strong> Hello! I'm TendriZ AI, your intelligent assistant. How can I help you today?
    </div>
  `;
  document.getElementById("pesan").focus();
}

// Scroll to bottom
function scrollToBottom() {
  setTimeout(() => {
    const chatArea = document.getElementById("out");
    chatArea.scrollTop = chatArea.scrollHeight;
  }, 100);
}

// Your existing geminiChatAi function (unchanged)
async function geminiChatAi(prompt) {
  const apiKey = "YOUR_GEMINI_API_KEY_HERE"; // Replace with your actual API key
  return await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.candidates && data.candidates.length > 0) {
        return data.candidates[0].content.parts[0].text;
      } else {
        console.error("api error :", data);
        return "Sorry, I couldn't generate a response. Please try again.";
      }
    })
    .catch((err) => {
      console.error(err);
      return "Network error. Please check your connection.";
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Clear chat button
  document.getElementById('clear-chat-btn').addEventListener('click', clearChat);
  
  // Auto-focus input
  document.getElementById('pesan').focus();
  
  // Enter key to send message
  document.getElementById('pesan').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      pesan();
    }
  });
});