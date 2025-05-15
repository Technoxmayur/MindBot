function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value;
  if (!message.trim()) return;

  const chatBox = document.getElementById("chat-box");
  const userMessage = document.createElement("div");
  userMessage.textContent = "You: " + message;
  chatBox.appendChild(userMessage);

  const botReply = document.createElement("div");
  botReply.textContent = "MindBot: " + getBotResponse(message);
  chatBox.appendChild(botReply);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
  const lower = message.toLowerCase();
  if (lower.includes("sad") || lower.includes("depressed")) {
    return "I'm sorry to hear that. Talking about your feelings is a brave step.";
  } else if (lower.includes("anxious") || lower.includes("anxiety")) {
    return "Try taking a few deep breaths. You are not alone.";
  } else if (lower.includes("help")) {
    return "You can visit the Resources page for professional help.";
  } else {
    return "I'm here to listen. Feel free to share more.";
  }
}
