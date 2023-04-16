console.log("Injecting script");

// Store the last clicked element
let lastClickedElement = null;

// Listen for the right-click event (button 2) and store the target element
document.addEventListener('mousedown', function (event) {
    if (event.button === 2) {
        lastClickedElement = event.target;
    }
});

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log('Message received in content script');
    if (request.action === "changeToTextField") {
        changeElementToTextField(lastClickedElement);
    }
});

/**
 * Change the given element to a textarea and restore the original element when the textarea is right-clicked again.
 * @param {HTMLElement} element - The element to be replaced with a textarea.
 */
function changeElementToTextField(element) {
    console.log('Changing element to text field', element);

    // If the element is already a textarea, restore the original element
    if (element.tagName.toLowerCase() === 'textarea' && element.originalElement) {
        element.originalElement.textContent = element.value;
        element.replaceWith(element.originalElement);
        return;
    }

    // Create a new textarea element
    const textArea = document.createElement("textarea");
    textArea.value = element.textContent || "";

    // Set the width and height of the textarea to match the element's dimensions
    textArea.style.width = element.offsetWidth + 'px';
    textArea.style.height = element.offsetHeight + 'px';

    // Make the textarea resizable by dragging its corners
    textArea.style.resize = 'both';

    // Add a scrollbar when needed
    textArea.style.overflow = 'auto';

    // Store the original element as a property of the textarea
    textArea.originalElement = element.cloneNode(true);

    // Listen for the contextmenu event on the textarea and restore the original element when right-clicked
    textArea.addEventListener('contextmenu', function () {
        changeElementToTextField(textArea);
    });

    // Replace the element with the textarea and focus it
    element.replaceWith(textArea);
    textArea.focus();
}