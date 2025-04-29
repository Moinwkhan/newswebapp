const q = document.getElementById('input');
const apibtn = document.getElementById('btn2');

async function getnews() {
    const response = await fetch('news.json');
    const data = await response.json();
    console.log("Loaded from local JSON:", data);

    let str = "";
    for (let item of data) {
        str += `<div id="info">
            <div class="card" style="width: 19rem; margin-bottom: 5rem;">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="Author">${item.author}</p>
                    <p class="source">${item.source}</p>
                    <p class="card-text">${item.content}</p>
                    <a href="${item.url}" class="btn btn-info">Read more</a>
                </div>
            </div>
        </div>`;
    }
    document.getElementById('content').innerHTML = str;
}

// Search button click
apibtn.addEventListener("click", () => {
    document.getElementById('content').innerHTML = loaderHTML();
    getnews();
});

// Enter key press
q.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        document.getElementById('content').innerHTML = loaderHTML();
        getnews();
    }
});

// Loading spinner HTML
function loaderHTML() {
    return `<div class="loadingio-spinner-magnify-s5kgplyjajk" id="gif">
        <div class="ldio-2gclyan3ds3">
            <div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>`;
}
