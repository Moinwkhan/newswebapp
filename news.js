let apibtn = document.getElementById('btn2');

apikey = 'd549b82a4ba64aa2b5baa3d91c128a0c';
apiurl = 'https://newsapi.org/v2/everything?q=';

option = {
    method: 'GET',
    headers: {
        'x-Api-Key': apikey,
    },
}

async function getnews() {
    let q = 'news'; // You can set the search query here
    const response = await fetch(apiurl + q, option);
    var data = await response.json();
    console.log(data);

    let str = "";
    for (let item of data.articles) {
        str += `
            <div id="info">
                <div class="card" style="width: 19rem; margin-bottom: 5rem;">
                    <img src="${item.urlToImage}" class="card-img-top" alt="" style="border: none;">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="Author">${item.author}</p>
                        <p class="source">${item.publishedAt}</p>
                        <p class="card-text">${item.description}</p>
                        <a href="${item.url}" class="btn btn-info" style="letter-spacing: 2px;">Read more</a>
                    </div>
                </div>
            </div>`;
    }

    document.getElementById('content').innerHTML = str;
}

getnews();
