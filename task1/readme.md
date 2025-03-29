## Key Learnings

### 1. The `<span>` Tag
- The `<span>` tag is used to hold the task text inside each list item (`<li>`).
- It allows inline text modifications without breaking the layout.

#### **Example:**
```html
<li>
    <span>Task Name (added at 12:30 PM)</span>
</li>
```

### 2. Passing the Whole Button to Another Function Using `this` Keyword
- When we click a button inside a task, we pass `this` to get the **specific button's parent** (`<li>`).

#### **Example:**
```js
<button onclick="editTask(this)">✏️</button>
<button onclick="completetask(this)">✅</button>
<button onclick="removetask(this)">X</button>
```

### 3. `setTimeout(() => { li.classList.add("show"); }, 10);`
- This ensures that the animation plays **after** the element is added to the DOM.
- If `.show` is added immediately, **CSS transitions** may not apply properly.

#### **Example:**
```js
setTimeout(() => {
    li.classList.add("show");
}, 10);
```

### 4. `querySelector` and How It’s Used Here
- `querySelector()` selects the **first matching element** inside an element.

#### **Example:**
```js
let span = li.querySelector("span");  // Finds the span inside the <li>
```

### 5. `onblur` Function
- `onblur` fires when an **input field loses focus**.
- Used here to **save** edited task names when the user clicks away.

#### **Example:**
```js
input.onblur = function() {
    if (input.value !== "") {
        span.textContent = input.value.trim() + span.textContent.slice(span.textContent.indexOf(" (added at"));
    }
    li.replaceChild(span, input);
};
```

### 6. `li.replaceChild(span, input);` vs. `li.replaceChild(input, span);`
- **`li.replaceChild(input, span);`**: Replaces text (`<span>`) with an input field for editing.
- **`li.replaceChild(span, input);`**: Restores the span after editing is done.

#### **Example:**
```js
li.replaceChild(input, span);  // Switch to input field
li.replaceChild(span, input);  // Switch back to text
```

### 7. `appendChild` Function
- `appendChild()` is used to **add new elements** inside a parent.

#### **Example:**
```js
document.getElementById("tasklist").appendChild(li);
```

### 8. `onblur` is Not a Function but an Event Property
- Instead of calling it like `onblur()`, we **assign a function** to it.

#### **Example:**
```js
input.onblur = function() { ... };
```

### 9. `setTimeout` for Adding to Completed List and Removing from Normal List
- First, **animate showing** the completed task (`cli.classList.add("show")`)
- Then, **remove** the original task **after 500ms** delay.

#### **Example:**
```js
setTimeout(() => {
    cli.classList.add("show");
}, 10);

li.classList.remove("show");
setTimeout(() => {
    li.remove();  // Remove after fade-out animation
}, 500);
```

### 10. CSS `transition: ease-in-out`
- `ease-in-out` makes animations **start slow, speed up, then slow down** at the end.

#### **Example:**
```css
transition: opacity 0.5s ease-in-out;
```

### 11. `transform: scale` and What It Does
- `scale(1.1)` **slightly enlarges** the button when hovered.

#### **Example:**
```css
button:hover {
    transform: scale(1.1);
}
```

---

## **Important Commands in the Code**
| Command | Description |
|---------|-------------|
| `querySelector()` | Selects the first matching element |
| `setTimeout(() => { ... }, time);` | Delays execution for smooth animation |
| `appendChild()` | Adds an element inside a parent element |
| `replaceChild(newChild, oldChild)` | Replaces an old element with a new one |
| `onblur` | Event property triggered when an input loses focus |
| `transition: ease-in-out` | Smooth UI animations |
| `transform: scale(1.1)` | Slightly enlarges the element |

---

Output: 
<br>
![image](https://github.com/user-attachments/assets/df9df66d-2ff1-44d4-9282-4e637e3e3d98)
![image](https://github.com/user-attachments/assets/c34fe2dc-385b-4944-8189-bb0898c9df15)
![image](https://github.com/user-attachments/assets/fb54b792-0cdc-4b25-9917-1c3afe651d24)
