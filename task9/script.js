const content = document.getElementById("content");
const load = document.getElementById("load");

let page=1;
let limit =10;
let loading = false;

async function fetchPosts(page, limit){
    const url = `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`;
    const response = await fetch(url);

    if(response.ok){
        return await response.json();
    }
    throw new Error("Failed to fetch");
}

function appendPosts(posts){
    posts.forEach(post => {
        const div = document.createElement('div');
        div.className = 'post';
        div.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        content.appendChild(div);
    });
}

async function loadMore() {
    if (loading) return ;
    loading = true;

    load.style.display = 'block';

    try
    {
        const posts = await fetchPosts(page, limit);
        if(posts.length>0){
            appendPosts(posts);
            page++;
        }
        else{
            page = 1;
            const posts = await fetchPosts(page, limit);
            appendPosts(posts);
            page++;
        }
    }
    catch(err){
        load.innerText = 'Error loading posts';
        console.error(err);
    }

    load.style.display = 'none';
    loading = false;
}
window.addEventListener('scroll',()=>{
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if(scrollTop+clientHeight>=scrollHeight-5){
        loadMore();
    }
});

loadMore();