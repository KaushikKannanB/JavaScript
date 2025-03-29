## Key Learnings

### 1. Centering Elements Using Flexbox
```css
    display: flex;
    justify-content: center;
    align-items: center;
```
- `display: flex;` - This enables the Flexbox layout, allowing easy alignment of child elements.
- `justify-content: center;` - Horizontally centers the elements inside the container.
- `align-items: center;` - Vertically centers the elements inside the container.

### 2. Styling Bold Answer Text
```css
    font-weight: bolder;
    font-size: xx-large;
    background-color: #d4edda;
    color: #155724;
    transition: all 0.5s;
```
- `font-weight: bolder;` - Makes the text bold.
- `font-size: xx-large;` - Increases the font size significantly.
- `background-color: #d4edda;` - Sets a light green background color.
- `color: #155724;` - Sets a dark green text color.
- `transition: all 0.5s;` - Applies a smooth transition effect over 0.5 seconds when styles change.

### 3. Button Hover Effect
```css
    button:hover {
        background: dodgerblue;
        transform: scale(1.1);
    }
```
- `button:hover` - Targets buttons when hovered over by the user.
- `background: dodgerblue;` - Changes the button’s background color to blue.
- `transform: scale(1.1);` - Increases the button size by 10% on hover for a visual effect.

### 4. Evaluating Mathematical Expressions Safely
```javascript
    try {
        answer.textContent = eval(display.value);
        answer.classList.add('bold');
    }
    catch(error)
    {
        alert('Invalid expression');
    }
```
- `try { ... } catch(error) { ... }` - This ensures that invalid expressions do not crash the program.
- `eval(display.value);` - Evaluates the mathematical expression typed in the input field.
- `answer.classList.add('bold');` - Adds the `bold` class to highlight the result.
- `alert('Invalid expression');` - Shows an alert message if the input is invalid.

### 5. Handling Keyboard Inputs
```javascript
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (/\d|[\+\-\*/\.\(\)]/.test(key)) {
            appendValue(key);
        } else if (key === 'Enter') {
            calculateResult();
        } else if (key === 'Backspace') {
            display.value = display.value.slice(0, -1);
            updateCalculation();
        } else if (key === 'Escape') {
            clearDisplay();
        }
    });
```
- `document.addEventListener('keydown', function(event) {...})` - Listens for keypresses.
- `const key = event.key;` - Captures the pressed key.
- `/\d|[\+\-\*/\.\(\)]/.test(key)` - Allows only numbers, operators, and parentheses.
- `key === 'Enter'` - Calls `calculateResult()` to evaluate the expression.
- `key === 'Backspace'` - Removes the last character from the display.
- `key === 'Escape'` - Clears the display and answer.

## Important Commands in Code

### Appending Values to Display
```javascript
    function appendValue(value)
    {
        display.value += value;
        updateCalculation();
    }
```
- Appends the pressed button or key to the calculator's display.
- Calls `updateCalculation()` to show the intermediate result.

### Calculating the Result
```javascript
    function calculateResult()
    {
        try {
            answer.textContent = eval(display.value);
            answer.classList.add('bold');
        }
        catch(error)
        {
            alert('Invalid expression');
        }
    }
```
- Evaluates the entered mathematical expression.
- If valid, displays the result; otherwise, alerts an error.

### Clearing the Display
```javascript
    function clearDisplay()
    {
        display.value = '';
        answer.textContent = '';
        answer.classList.remove('bold');
    }
```
- Resets the calculator’s display and removes any formatting on the result.

This README provides an overview of the core concepts, styles, and JavaScript functionality used in the calculator project.

