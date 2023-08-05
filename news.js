let q = document.getElementById('input');
let apibtn = document.getElementById('btn2');

apikey = 'b4734e223d504367b46fd5a90ec862f7';
apiurl = 'https://newsapi.org/v2/everything?q=';

option = {
    method: 'GET',
    headers: {
        'X-Api-Key': apikey,
    },
}


async function getnews(q) {
    q = `news`;
    const response = await fetch(apiurl + q, option);
    var data = await response.json();
    console.log(data);

    let str = "";
    for (let item of data.articles) {
        str = str + `<div id="info">
    <div class="card" style="width: 19rem; margin-bottom: 5rem;">
    <img src="${item.urlToImage}" class="card-img-top" alt="" style="border: none;">
    <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="Author">${item.author} </p>
        <p class="source"> ${item.publishedAt}</p>
        <p class="card-text" >${item.description}</p>
    <a href="${item.url}" class="btn btn-info" style="letter-spacing: 2px;">Read more</a>
    </div>
    </div>
</div>`
    }
    document.getElementById('content').innerHTML = str;
}
getnews()

input.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
        getnews(q.value);  
    }
    document.getElexmentById('content').innerHTML = `<div class="loadingio-spinner-magnify-s5kgplyjajk" id="gif">
<div class="ldio-2gclyan3ds3">
    <div>
        <div>
            <div></div>
            <div></div>
        </div>
    </div>
</div>
</div>`
})