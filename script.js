window.addEventListener("load", () => {
    const app = new Vue({
        el: '#vueContainer',
        data: {
            albums: [],
            genres: [],
            selected : '',
            filteredAlbums : [],
            order: '' ,
        },
        methods: {
            onChange(){
               this.filteredAlbums = this.albums.filter((element)=>{ return this.selected == element.genre || this.selected == 'all' })
            },
            selectAll(){
                this.filteredAlbums = resp.data.response;
            }
        },
        mounted() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((resp) => {
                    this.albums = resp.data.response;
                    this.filteredAlbums = resp.data.response
                    
                    this.albums.forEach(element => {
                        if(!this.genres.includes(element.genre))
                        {
                           this.genres.push(element.genre);
                        }
                    });
                })
           
        }
    })
})
