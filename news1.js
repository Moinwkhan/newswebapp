q = document.getElementById('input');
apibtn = document.getElementById('btn2');

const apiurl = 'https://newsdata.io/api/1/news?apikey=pub_2779380d3ac4b915f859846d02d5b5f16a16a&q=sports&country=in&language=en&category=top,world';

async function getnews(q) {
    const response = await fetch(apiurl);
    var data = await response.json();
    console.log(data);

    let str = "";
    for (let item of data.results) {
        str = str + `<div id="info">
    <div class="card" style="width: 19rem; margin-bottom: 5rem;">
    <img src="${item.urlToImage}" class="card-img-top" alt="" style="border: none;">
    <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="Author">${item.author} </p>
        <p class="source"> ${item.publishedAt}</p>
        <p class="card-text" >${item.description}</p>
        <a href="${item.url}" class="btn btn-info">Read more</a>
    </div>
    </div>
</div>`
    }
    document.getElementById('content').innerHTML = str;
}

apibtn.addEventListener("click", () => {
    getnews(q.value);
    document.getElementById('content').innerHTML = `<div class="loadingio-spinner-magnify-s5kgplyjajk" id="gif">
    <div class="ldio-2gclyan3ds3">
        <div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
    </div>`;
})

input.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
        document.getElementById('content').innerHTML = `<div class="loadingio-spinner-magnify-s5kgplyjajk" id="gif">
        <div class="ldio-2gclyan3ds3">
    <div>
        <div>
            <div></div>
            <div></div>
        </div>
        </div>
        </div>
        </div>`;
        getnews(q.value);
    }
})





