# Project Title: Time and Color Customizer

This project allows users to view the current time and date in real-time, change the background color of the webpage, and customize the background of a specific section. It also adapts to different screen sizes.

## Features

1. **Real-Time Time and Date Display**: Displays the current time and date and updates them every second.
2. **Background Color Customization**: Allows users to select a background color for the entire page and a separate background color for a specific section (`main2`).
3. **Responsive Layout**: The page layout adjusts based on the screen width, ensuring a good user experience on mobile devices.

## Functionality

### Time and Date Update
- The time and date are updated dynamically using JavaScript and displayed in the `div_time` and `div_date` elements, respectively.
- The time is updated every second to keep it accurate.

### Background Color Customization
- Users can choose a background color for the entire page using the color input (`<input type="color" id="color">`).
- Users can also customize the background color for the `main2` section with another color input (`<input type="color" id="color2">`).
- The selected colors are saved using `localStorage`, so the colors remain the same when the page is refreshed.

### Screen Size Adaptation
- The layout adapts to smaller screen widths (less than 500px) by adjusting the width of the `main` section to match the screen size.

### Navbar
- The page includes a navigation bar with links to different pages such as Home, Uncode, Code, and Clocke, along with a logo.

## Usage

1. Clone or download the project files to your local machine.
2. Open the `index.html` file in your browser.
3. The page will display the current time and date, which will be updated every second.
4. You can change the background color of the page and the `main2` section by using the color pickers.
5. The layout will adapt to mobile devices by adjusting the width of the `main` section on smaller screens.

## Requirements

- A modern web browser (Chrome, Firefox, etc.) that supports JavaScript and `localStorage`.
- No external dependencies are required apart from Bootstrap for basic styling.

## License

This project is open-source and available under the MIT License.

