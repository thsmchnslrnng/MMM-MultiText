# MMM-MultiText  
A MagicMirror module that displays multiple lines of customizable text with different styles, colors, and sizes.

Installation  
To install the module, navigate to your MagicMirror `modules` folder and clone the repo:

cd ~/MagicMirror/modules  
git clone https://github.com/thsmchnslrnng/MMM-MultiText.git  
cd MMM-MultiText  
npm install  

Add the following configuration block to your config.js:
```javascript
{
    module: "MMM-MultiText",
    position: "top_left",    // Choose the position you want
    config: {
        refresh: 15 * 60 * 1000,  // Refresh every 15 minutes
        texts: [
            { text: "Line 1: Welcome to MagicMirror!", size: "20px", color: "#ffffff" },
            { text: "Line 2: Temperature: 22°C", size: "15px", color: "#ff9900" }
        ]
    }
},
```
Config Options:

- **`module`**: The name of the module (required).
- **`position`**: Position of the module on the screen. Example: `top_left`, `bottom_right`, etc.
- **`refresh`**: Time in milliseconds to refresh the content. Default: `60000` (1 minute).
- **`texts`**: Array of objects defining text lines to be displayed:
    - **`text`**: The text to display.
    - **`size`**: Font size (e.g., `20px`).
    - **`color`**: Color of the text (hex value, RGB, etc.).

Personally, I use this as a calendar key for multiple people.
