## BloxFlip Rain Joiner

A free, open-source userscript designed to automate rain joining on BloxFlip.

### Features

*   **Automated Joining:** Automatically detects and joins rain events without manual input.
*   **Lightweight:** Runs as a simple userscript with minimal resource impact.
*   **Open Source:** The code is transparent and available for community review.

### Installation

Follow these steps to set up the script on your browser:

1.  **Install a Userscript Manager**
    Install Tampermonkey or a compatible userscript loader for your browser. You can find Tampermonkey on the [Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) or the respective extension store for your browser.

2.  **Create a New Script**
    Open your userscript manager dashboard, select the option to create a new script, and delete any default placeholder text in the editor.

3.  **Copy the Code**
    Copy the entire contents of the `autorain.js` file from this repository.

4.  **Saving**
    Paste the code into your userscript manager editor and save it.

5.  **Activation**
    Navigate to [BloxFlip](https://bloxflip.com) and refresh the page. The script will now run automatically in the background.

### Usage Notes

For the script to function correctly, keep the BloxFlip tab open. The userscript will handle the detection and joining process automatically.

### Known Issues

1. **Not auto joining overtime**
   Check if you have memory saver or bloxflip goes idle when Chrome is minimized, you can turn off memory saver in this [setting](chrome://settings/performance) `chrome://settings/performance` (put this link in your chrome url bar)
2. **When I'm doing something else it doesn't work**
   Try leaving your browser unfocused, dont press the minimize button, but you can hover and full screen apps above.
3. **How does this work on iPhone**
   Use the [Userscripts](https://apps.apple.com/us/app/userscripts/id1463298887) extension that lets you run userscripts on Safari.
4. **How about Android? Does it work there**
   You can install the [Lemur Browser](https://play.google.com/store/apps/details?id=com.lemurbrowser.exts) that lets you add extensions to the browser, therefor letting you install Tampermonkey for the auto rain joiner.

### Support

If you need help, join the community via [Discord](https://discord.gg/predictors).
