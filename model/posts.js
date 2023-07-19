module.exports = {
    posts : [
        {
            id: "12345",
            title: "Teste do mural",
            description: "Descrição teste"
        }
    ],

    getAll(){
        return this.posts;
    },

    newPost(title, description){
        this.posts.push({id : generatID(), title,description})
    },

}

function generatID(){
    return Math.random().toString(36).substring(2,9)
}

function savePost(id){
    posts.forEach(post => {
        const id = post.id;
        const title = post.title;
        const desc = post.description;

        const data = {title, desc};

        console.log(data);

    })
}
savePost()