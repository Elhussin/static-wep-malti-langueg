
  // Initialize CodeMirror editor
  const editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    mode: "javascript", // Language mode
    lineNumbers: true, // Show line numbers
    theme: "monokai", // Theme
    autoCloseBrackets: true, // Automatically close brackets
    matchBrackets: true, // Highlight matching brackets
});

// References to buttons
const run = document.getElementById("run");
const clear = document.getElementById("clear");
const undo = document.getElementById("undo");
const rusalt = document.getElementById("rusalt");

// Helper function: Sanitize user input to prevent XSS
const sanitizeInput = (input) => {
    return input.replace(/<script.*?>.*?<\/script>/gi, "[Script Removed]");
};

// Save code versions to localStorage
const saveCodeVersion = () => {
    let history = JSON.parse(localStorage.getItem("codeHistory")) || [];
    history.push(editor.getValue());
    localStorage.setItem("codeHistory", JSON.stringify(history));
};

// Run the code and display sanitized output
const runCode = () => {
    const userCode = editor.getValue();
    saveCodeVersion();
    rusalt.innerHTML = sanitizeInput(userCode);
    localStorage.setItem("code", userCode);
};

// Clear the code and results
const clearCode = () => {
    if (confirm("Are you sure you want to clear the code and results?")) {
        editor.setValue("");
        rusalt.innerHTML = "";
        localStorage.removeItem("code");
        localStorage.removeItem("codeHistory");
    }
};

// Undo the last saved version
const undoCode = () => {
    let history = JSON.parse(localStorage.getItem("codeHistory")) || [];
    if (history.length > 0) {
        history.pop(); // Remove the latest version
        const previousCode = history[history.length - 1] || "";
        editor.setValue(previousCode);
        rusalt.innerHTML = sanitizeInput(previousCode);
        localStorage.setItem("codeHistory", JSON.stringify(history));
    } else {
        alert("No previous versions available.");
    }
};

// Load saved code on page load
const loadSavedCode = () => {
    const savedCode = localStorage.getItem("code");
    if (savedCode) {
        editor.setValue(savedCode);
        rusalt.innerHTML = sanitizeInput(savedCode);
    }
};

// Event Listeners
run.onclick = runCode;
clear.onclick = clearCode;
undo.onclick = undoCode;
window.onload = loadSavedCode;