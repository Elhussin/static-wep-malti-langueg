// Select DOM elements
const inputField = document.getElementById("input");
const outputField = document.getElementById("output");
const encodeButton = document.getElementById("encodeBtn");
const decodeButton = document.getElementById("decodeBtn");
const copyButton = document.getElementById("copyBtn");

// Add event listeners to buttons
encodeButton.addEventListener("click", () => handleEncodingDecoding("encode"));
decodeButton.addEventListener("click", () => handleEncodingDecoding("decode"));
copyButton.addEventListener("click", copyResultToClipboard);

/**
 * Function to handle encoding and decoding
 * @param {string} mode - "encode" or "decode"
 */
function handleEncodingDecoding(mode) {
    const inputValue = inputField.value.trim();

    if (!inputValue) {
        outputField.value = "Error: Input cannot be empty.";
        return;
    }

    try {
        if (mode === "encode") {
            outputField.value = encodeBase64Unicode(inputValue);
        } else if (mode === "decode") {
            outputField.value = decodeBase64Unicode(inputValue);
        }
    } catch (error) {
        outputField.value =
            mode === "decode"
                ? "Error: The provided input is not a valid Base64 string."
                : "Error: The input contains unsupported characters.";
    }
}

/**
 * Encode a string to Base64 format, supporting Unicode characters
 * @param {string} str - Input string
 * @returns {string} - Base64 encoded string
 */
function encodeBase64Unicode(str) {
    return btoa(unescape(encodeURIComponent(str)));
}

/**
 * Decode a Base64 encoded string, supporting Unicode characters
 * @param {string} str - Base64 encoded string
 * @returns {string} - Decoded string
 */
function decodeBase64Unicode(str) {
    return decodeURIComponent(escape(atob(str)));
}

/**
 * Function to copy the result from the output field to the clipboard
 */
function copyResultToClipboard() {
    const outputValue = outputField.value.trim();

    if (!outputValue) {
        // let alert= document.getElementsById("#alert")
        document.getElementById("alert").innerHTML = "Nothing to copy. Please generate a result first.";
        // alert.innerHtml = "Nothing to copy. Please generate a result first.";
        return;
    }

    navigator.clipboard
        .writeText(outputValue)
        .then(() => {
            
            document.getElementById("alert").innerHTML =  "Result copied to clipboard!";
         
        })
        .catch(() => {
            document.getElementById("alert").innerHTML =  "Failed to copy. Please try again.";

        });
}

// Reset output on input change
inputField.addEventListener("input", () => {
    outputField.value = "";
});
