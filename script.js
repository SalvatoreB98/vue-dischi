window.addEventListener("load", () => {
    const app = new Vue({
        el: '#vueContainer',
        data: {
            albums: [],
            genres: [],
            selected: '',
            filteredAlbums: [],
            selectedOrder: '',
        },
        methods: {
            onChange() {
                this.filteredAlbums = this.albums.filter((element) => { return this.selected == element.genre || this.selected == 'all' })
            },
            selectAll() {
                this.filteredAlbums = resp.data.response;
            },
            onChangeSort() {
                console.log(this.filteredAlbums);
                console.log(this.albums);
                switch (this.selectedOrder) {
                    case 'yearInc':
                        this.filteredAlbums.sort(function (a, b) {
                            return a.year - b.year;
                        });
                        this.filteredAlbums.reverse();
                        break;
                    case 'yearDec':
                        this.filteredAlbums.sort(function (a, b) {
                            return a.year - b.year;
                        });
                        break;
                    case 'random':
                        this.filteredAlbums = [...this.albums];
                        break;
                }
            }
        },
        mounted() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((resp) => {
                    this.albums = [...resp.data.response];
                    this.filteredAlbums = resp.data.response

                    this.albums.forEach(element => {
                        if (!this.genres.includes(element.genre)) {
                            this.genres.push(element.genre);
                        }
                    });
                })

        }
    })
})
