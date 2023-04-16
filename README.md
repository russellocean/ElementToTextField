# Element to Text Field

Element to Text Field is a browser extension that allows you to right-click on any element on a webpage and change it to a text field.

## Features

- Right-click context menu to change an element to a text field.
- Works on any element that contains text.
- Text fields are resizable and scrollable.
- Right-click the text field again to restore the original element with the updated content.

## Installation

1. Clone this repository.
2. Follow the instructions for your browser to load the extension:
   - [Chrome](https://developer.chrome.com/docs/extensions/mv3/getstarted/#manifest)
   - [Firefox](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

## Usage

1. Navigate to any webpage.
2. Right-click on the element you want to change to a text field.
3. Choose "Change to Text Field" from the context menu.
4. The clicked element will be changed to a text field.
5. Edit the content in the text field.
6. Right-click the text field to restore the original element with the updated content.

## Project Structure

- `manifest.json`: The manifest file for the extension.
- `background.js`: The background script that sets up the context menu and handles clicks.
- `inject.js`: The content script that gets injected into the webpage and handles changing the element to a text field and restoring the original element.
- `icon.png`: The extension's icon.

## Contributing

1. Fork the repository.
2. Create a new branch with your changes.
3. Submit a pull request.

Please feel free to submit issues, feature requests, or improvements.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
Icon made by Freepik from www.flaticon.com
