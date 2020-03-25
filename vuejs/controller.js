var app = new Vue({
    el:'#app',
    data:{
    message: {
       head: 'TODO APPLICATION',
       
    },
    todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
})

var app2 = new Vue({
    el:'#app-4',
    data: {
        title: "PROGRAMMING THE BEST",
        todos:[
            {text: 'Java'},
            {text:'C#'},
            {text:'Python'}
        ]

    }
})
