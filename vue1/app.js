let app = Vue.createApp({
    // template: `<h1>Hello I'm the template</h1>`,

    data(){
        return {
            enabled:true,
            mode:'En',
            title:'The final day',
            author:'àzrael',
            date:'10-02-1998',
            price:141,
            x:0,
            y:0,
            books:[
                {title: 'the book title goes here', author:'book author goes here'},
                {title: 'just some shit here man', author:'skeigrseg seriguzerg'},
                {title: 'jiqflnqlzeffsoqnzpf  pqzkf', author:'qzfqzzr here'},
                {title: 'jiqflnqf qpfsoqnzpf  pqzkf', author:'qzfqzfqzr here'},
                {title: 'jiqflnqlzef qpfsoqnzpf  pqzkf', author:'qzfqzfqzr here'},
                {title: 'jiqflnqfsoqnzpf  pqzkf', author:'qzfqzf qzfqzr here'},
            ],
            url:'https://www.goole.com',
            places:[
                {place:'a specific place', img:'/assets/a.jpg', fav:false},
                {place:'an other place', img:'/assets/b.jpg', fav:false},
                {place:'and again an other place', img:'/assets/c.jpg', fav:true},
            ]
        }
    },

    methods: {
        doo(title){
            // this.title = 'title here to include'
            this.title = title
        },
        enable(){
            this.enabled = !this.enabled
            this.mode === 'En' ? this.mode ='Dis' : this.mode ='En'
        },
        handle(e, x){
            console.log(e.type, x)
        },
        movehandler(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    },
    
    computed: {
        filteredPlaces(){
            return this.places.filter( place => place.fav)
        }
    }
})

app.mount('#app')