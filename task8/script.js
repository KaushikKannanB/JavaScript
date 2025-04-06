const app =  document.getElementById("app");
const routes = {
    home: `<h2>🏠 Home</h2><p>Welcome to the homepage!</p>`,
    about: `<h2>ℹ️ About</h2><p>This is a simple SPA using hash routing.</p>`,
    contact: `<h2>📞 Contact</h2><p>Reach us at example@email.com.</p>`
};

function renderRoute()
{
    const hash = window.location.hash.substring(1);
    app.classList.remove("show");
    app.innerHTML = routes[hash];
    
    void app.offsetWidth;
    app.classList.add("show");
}

window.addEventListener('hashchange', renderRoute);
// window.addEventListener('load', renderRoute);
