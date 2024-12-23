# Multi-Language Encoder/Decoder Tool

This project is a web-based tool that allows users to encode or decode text using Base64 encoding. It includes functionality for switching between Arabic and English languages, and provides options for copying the encoded/decoded result to the clipboard.

## Features

- **Multi-Language Support**: Easily toggle between Arabic and English languages for the interface.
- **Base64 Encoding/Decoding**: Encode input text or decode Base64 strings.
- **Dynamic Output Updates**: Real-time updates of the output based on user input and selection.
- **Copy to Clipboard**: One-click functionality to copy the output result.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Elhussin/static-wep-malti-langueg.git
   ```

2. Navigate to the project directory:
   ```bash
   cd static-wep-malti-langueg
   ```

3. Open `index.html` in any modern browser to use the tool.

## Usage

### Language Toggle
- Use the **"Language"** button to switch between Arabic and English.

### Encoding/Decoding
1. Enter the text you want to encode or decode in the input box.
2. Click the corresponding **Encode** or **Decode** button.
3. View the result in the output box.

### Copy Result
- Click the **Copy Result** button to copy the output to the clipboard.

## File Structure

```
project-directory/
├── index.html       # Main HTML file
├── style.css        # CSS for styling
├── script.js        # JavaScript functionality
├── README.md        # Project documentation
```

## Code Explanation

### JavaScript Highlights

- **Dynamic Language Switching**:
  ```javascript
  const languageToggle = document.getElementById("language-toggle");
  languageToggle.addEventListener("click", () => {
      const currentLang = document.documentElement.lang;
      setLanguage(currentLang === "en" ? "ar" : "en");
  });
  ```

- **Base64 Encoding/Decoding**:
  ```javascript
  encodeButton.addEventListener("click", () => {
      try {
          outputField.value = btoa(inputField.value);
      } catch (error) {
          alert("Invalid characters for encoding.");
      }
  });
  
  decodeButton.addEventListener("click", () => {
      try {
          outputField.value = atob(inputField.value);
      } catch (error) {
          alert("Invalid Base64 string.");
      }
  });
  ```

- **Copy to Clipboard**:
  ```javascript
  copyButton.addEventListener("click", () => {
      if (outputField.value) {
          navigator.clipboard.writeText(outputField.value);
          alert("Result copied to clipboard!");
      } else {
          alert("Nothing to copy. Please generate a result first.");
      }
  });
  ```

## Contribution

Feel free to fork the repository and submit pull requests for improvements or bug fixes.

## License

This project is open-source and available under the [MIT License](LICENSE).
