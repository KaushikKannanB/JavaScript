# Key Learnings & Explanation

## 1. Async Functions - What Are They?
Async functions in JavaScript allow you to write code that performs asynchronous operations without blocking the execution of other tasks. They are defined using the `async` keyword before a function.

Example:
```javascript
async function fetchData() {
    return "Hello, Async!";
}
```
An async function always returns a promise, which resolves with the function's return value.

## 2. Normal Functions vs. Async Functions
- **Normal functions** execute synchronously, meaning each line runs sequentially.
- **Async functions** allow certain operations (like network requests) to run in the background, so other code continues executing without waiting.

## 3. Try-Catch in JSON Retrieval
Try-Catch is a JavaScript error-handling mechanism that helps catch errors in asynchronous operations.

Example:
```javascript
try {
    let response = await fetch(url);
    let data = await response.json();
} catch (error) {
    console.log("Error occurred: ", error);
}
```
If fetching data from the API fails (e.g., due to a network issue), the `catch` block executes, preventing the entire script from crashing.

## 4. Await - Why Use It?
The `await` keyword is used inside async functions to pause execution until a promise resolves.

Example:
```javascript
let response = await fetch(url);
```
- The function waits for `fetch(url)` to complete before moving to the next line.
- Without `await`, the code would continue executing immediately, likely causing issues.

## 5. Why Use `await` for Both Fetching and JSON Parsing?
```javascript
const response = await fetch(url);
const data = await response.json();
```
- `fetch(url)` returns a **promise** that resolves when the request is complete.
- `response.json()` is also asynchronous because it processes the response body.
- Using `await` for both ensures we get fully processed JSON data before using it.

## 6. `throw` - Throwing Errors
The `throw` keyword is used to create custom errors manually.

Example:
```javascript
if (!response.ok) {
    throw new Error("City not found!");
}
```
If the API request fails (e.g., invalid city name), the function throws an error, which is caught by the `catch` block.

## 7. `response.ok`
The `response.ok` property checks if the HTTP response status is between 200-299 (successful requests).

Example:
```javascript
if (!response.ok) {
    throw new Error("Invalid response from server");
}
```
If the request fails, `response.ok` is `false`, and we handle it using `throw`.

## 8. `classList.add()` and `classList.remove()`
These methods are used to dynamically modify CSS classes of HTML elements.

Example:
```javascript
document.getElementById("results").classList.add("bold");
```
This adds the `bold` class to the `results` element, applying new styles.

To remove a class:
```javascript
document.getElementById("results").classList.remove("bold");
```

## 9. JSON Data - Retrieval and Structure
### Raw JSON Example:
When we fetch weather data from an API, we receive a JSON object like this:
```json
{
    "location": {
        "name": "New York",
        "country": "USA"
    },
    "current": {
        "temp_c": 15,
        "humidity": 80,
        "condition": {
            "text": "Cloudy"
        }
    }
}
```

### How We Use It in JavaScript:
```javascript
const city = data.location.name;
const temp = data.current.temp_c;
const humidity = data.current.humidity;
const condition = data.current.condition.text;
```
We access nested JSON objects using dot notation to extract meaningful data.

## Summary
- Async functions help manage asynchronous tasks smoothly.
- `await` pauses execution until promises resolve.
- Try-Catch ensures error handling.
- JSON data is structured as objects with nested properties.
- `fetch()` retrieves JSON data, and `response.json()` processes it.
- CSS classes can be dynamically modified using `classList.add/remove`.
  
## Output
![image](https://github.com/user-attachments/assets/38e5231f-7427-4b0b-8912-4efb8db66f41)
![image](https://github.com/user-attachments/assets/7b02c761-01e7-4ebf-8279-911332af3dfe)

