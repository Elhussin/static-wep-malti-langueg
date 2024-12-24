# CodeMirror Integration Example

This project demonstrates how to integrate the CodeMirror library into a web application to create an advanced code editor. The application allows users to write JavaScript code, run it, and manage their code versions using Local Storage.

## Features

- **Code Editor:** Powered by CodeMirror with syntax highlighting for JavaScript.
- **Local Storage:** Automatically saves and loads the user's code.
- **Sanitized Output:** Ensures safe rendering of user code to prevent XSS attacks.
- **Undo Feature:** Allows users to revert to previously saved versions of their code.
- **User-Friendly Interface:** Simple buttons to run, clear, and undo code.

## Technologies Used

- **HTML:** For structuring the web page.
- **CSS:** For styling the page and CodeMirror editor.
- **JavaScript:** For implementing functionality and integrating CodeMirror.
- **CodeMirror Library:** For providing an advanced text editor.

## Installation

1. Clone or download this repository.
2. Open the `index.html` file in your favorite browser.

## Usage

1. Write your JavaScript code in the editor.
2. Click the **Run** button to display the result below the editor.
3. Use the **Clear** button to clear the editor and the result.
4. Click the **Undo** button to revert to a previous version of the code.

## CodeMirror Configuration

The editor is configured with the following options:

- **Language Mode:** JavaScript
- **Theme:** Monokai
- **Line Numbers:** Enabled
- **Auto Close Brackets:** Enabled
- **Match Brackets:** Enabled

## File Structure

```
project-folder/
|
|-- index.html       # Main HTML file
|-- code.js          # JavaScript functionality
|-- style.css        # Optional custom styles
```

## CDN Links

The project uses the following CDNs for CodeMirror:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.12/codemirror.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.12/theme/monokai.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.12/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.12/mode/javascript/javascript.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.12/addon/edit/matchbrackets.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.12/addon/edit/closebrackets.min.js"></script>
```

## How It Works

1. The `CodeMirror` library is initialized using the `fromTextArea` method.
2. The user's code is synchronized with Local Storage to persist changes across sessions.
3. Buttons are provided to execute, clear, and undo code operations.

## Example Usage

```javascript
window.onload = () => {
    const editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        mode: "javascript",
        lineNumbers: true,
        theme: "monokai",
        autoCloseBrackets: true,
        matchBrackets: true
    });

    // Event listeners for buttons
    document.getElementById("run").onclick = () => {
        const userCode = editor.getValue();
        document.getElementById("rusalt").innerHTML = userCode;
    };
};
```

## Notes

- This example demonstrates basic integration; additional features can be added, such as support for more languages or advanced editing tools.
- Ensure your browser supports Local Storage and JavaScript for full functionality.

## License

This project is licensed under the MIT License.
