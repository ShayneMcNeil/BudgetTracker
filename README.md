## Expense Management System – README

### About This Project

This project is a simple **Personal Finance Management System** that allows users to **track income, expenses, and savings** by entering transaction data through prompts. It uses Object-Oriented Programming concepts to manage financial data in a structured way. This program runs in the browser using JavaScript.

---

## How to Run the Program

You have two easy options:

---

### Option 1: Run in an Online JavaScript Compiler / Emulator

1. Go to an online JavaScript editor, such as:
   - [JSFiddle](https://jsfiddle.net/)
   - [JSBin](https://jsbin.com/)
   - [CodePen](https://codepen.io/)
   - [PlayCode](https://playcode.io/)
   - [Programiz JS Online Editor](https://www.programiz.com/javascript/online-compiler)

2. Paste the entire JavaScript code into the editor.

3. If you're using a site that separates **HTML** and **JS** (like JSFiddle), make sure to select the **JavaScript tab** and paste your code there.

4. Run the code.

5. Use the **console tab** (or output pane) to view prompts and results. Some editors (like JSFiddle) require you to open the browser’s DevTools (F12) and switch to the **Console** tab.

---

### Option 2: Run in a Browser with a Local HTML Page

1. Create a new file called `index.html`.

2. Paste the following content into it:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Expense Management System</title>
</head>
<body>
    <h1>Open your browser's console to use the Expense Management System</h1>
    <script src="budgetTracker.js"></script>
</body>
</html>
```

3. Open `index.html` in your browser (double-click it or right-click and choose “Open with” > your browser).

4. Press **F12** to open the **Developer Tools**, and go to the **Console** tab.

5. Interact with the program through the prompts and view results in the console.

---

## What You Can Do with the Program

- Add income and expense transactions
- Automatically calculate total income, total expenses, and balance
- View a list of all recorded transactions

---

## Notes

- The program runs in the browser environment using `prompt()` and `console.log()`.
- No external libraries are required.
- All input is validated to ensure correct types and formats (e.g. `YYYY-MM-DD` date format).
