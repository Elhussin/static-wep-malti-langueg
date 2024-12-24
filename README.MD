# Multi-Language Encoder/Decoder Tool

This project is a web-based tool that allows users to encode or decode text using Base64 encoding. It includes functionality for switching between Arabic and English languages, and provides options for copying the encoded/decoded result to the clipboard. allows users to view the current time and date in real-time, change the background color of the webpage, and customize the background of a specific section.

## Features

- **Multi-Language Support**: Easily toggle between Arabic and English languages for the interface.
- **Base64 Encoding/Decoding**: Encode input text or decode Base64 strings.
- **Dynamic Output Updates**: Real-time updates of the output based on user input and selection.
- **Copy to Clipboard**: One-click functionality to copy the output result.
- **Code Editor with CodeMirror**: Integrated advanced code editor with syntax highlighting for JavaScript.
- **Real-Time Time and Date Display**: Displays the current time and date and updates them every second.
- **Background Color Customization**: Allows users to select a background color for the entire page and a separate background color for a specific section (`main2`).
- **Responsive Layout**: The page layout adjusts based on the screen width, ensuring a good user experience on mobile devices.

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

### Code Editing
1. Write JavaScript code in the integrated editor.
2. Click the **Run** button to execute the code and view the result below the editor.
3. Use the **Clear** button to clear the editor and result.
4. Click the **Undo** button to revert to a previous version of the code.

### Copy Result
- Click the **Copy Result** button to copy the output to the clipboard.

### Clokc

1. Clone or download the project files to your local machine.
2. Open the `index.html` file in your browser.
3. The page will display the current time and date, which will be updated every second.
4. You can change the background color of the page and the `main2` section by using the color pickers.
5. The layout will adapt to mobile devices by adjusting the width of the `main` section on smaller screens.

## File Structure

```
project-directory/
├── index.html       # Main HTML file
├── uncode.html      # Encoding/Decoding Html
├── code.html        # Code Editing Html
├── static
    ├── style.css    # CSS for styling
    ├── script.js    # JavaScript functionality
    ├── code.js      # JavaScript Code Editing
    ├── uncode.js    # JavaScript Encoding/Decoding
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

- **CodeMirror Integration**:
  ```javascript
  const editor = CodeMirror.fromTextArea(document.getElementById("code"), {
      mode: "javascript",
      lineNumbers: true,
      theme: "monokai",
      autoCloseBrackets: true,
      matchBrackets: true
  });

  document.getElementById("run").onclick = () => {
      const userCode = editor.getValue();
      document.getElementById("rusalt").innerHTML = userCode;
  };
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
- **Time and Date Update**
    - The time and date are updated dynamically using JavaScript and displayed in the `div_time` and `div_date` elements, respectively.
    - The time is updated every second to keep it accurate.

- **Background Color Customization**
    - Users can choose a background color for the entire page using the color input (`<input type="color" id="color">`).
    - Users can also customize the background color for the `main2` section with another color input (`<input type="color" id="color2">`).
    - The selected colors are saved using `localStorage`, so the colors remain the same when the page is refreshed.


## Contribution

Feel free to fork the repository and submit pull requests for improvements or bug fixes.

## License

This project is open-source and available under the [MIT License](LICENSE).
