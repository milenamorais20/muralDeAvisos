
document.addEventListener('DOMContentLoaded', ()=>{
    updatePosts();
})

function updatePosts(){
    // const url = 'http://192.168.1.103:3000/api/all';
    fetch("http://192.168.1.103:3000/api/all").then(res => {
        return res.json();
    }).then(json =>{
        let postElements = ' ';
        
        let posts = JSON.parse(json);
        posts.forEach((post) => {
           let postElement = `<div id=${post.id} class="card mb-2">
                                <div class="card-header">
                                    <h5 class="card-title">${post.title}</h5>
                                </div>
                                <div class="card-body">
                                    <div  class="card-text">${post.description}</div>
                                </div>

                            </div>`

            postElements += postElement; 

        });

        document.getElementById('posts').innerHTML = postElements;
    })

}

function newPost(){
    let title = document.getElementById('title').value;
    let description = document.getElementById('desc').value;

    let post = {title, description};

    let options = {method: "POST",
                   headers: new Headers({'content-type':'application/json'}),
                   body: JSON.stringify(post)
    };

    fetch("http://192.168.1.103:3000/api/new", options).then(res => {
        console.log(res);
        updatePosts();
        document.getElementById('title').value = '';
        document.getElementById('desc').value = '';
    })

}


