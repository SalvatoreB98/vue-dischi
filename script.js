window.addEventListener("load", () => {
    const app = new Vue({
        el: '#vueContainer',
        data: {
            mp3: [
                "Bon Jovi  Born To Be My Baby.mp3",
                'Queen  Under pressure Live at Wembley.mp3',
                'Sting  Love Is Stronger Than Justice Magnificent SevenCD Ten Summoners Tales.mp3',
                "Auckland by Numbers.mp3",
                'Iron Maiden  Brave New World.mp3',
                'Tears in Heaven Live at Staples Center Los Angeles CA 818  192001.mp3',
                'Deep Purple  Made In Japan  Live 1972.mp3',
                "And Justice For All.mp3",
                'HardWired.mp3',
                'Michael Jackson  Bad Shortened Version.mp3',
            ],
            albums: [],
            genres: [],
            selected: '',
            filteredAlbums: [],
            selectedOrder: '',
            activeAlbum: null,
            spectrumBars: [
                {
                    isActive: false,
                },
                {
                    isActive: false,
                },
                {
                    isActive: false,
                },
                {
                    isActive: false,
                },
            ]
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
            },
            mouseover(index) {
                console.log("play!")
                this.activeAlbum = index;
                document.getElementById(index).play();
            },
            mouseleave(index) {
                console.log("stop")
                this.activeAlbum = null;
                document.getElementById(index).pause();
                document.getElementById(index).currentTime = 2;
            },
            barAnimation(index) {
                this.spectrumBars.forEach((element, index) => {
                    setTimeout(() => {
                        const up = setInterval(() => {
                            element.isActive = true;
                        }, 500);
                        setTimeout(() => {
                            const down = setInterval(() => {
                                element.isActive = false;
                            }, 500);
                        }, 250);
                    }, index * 100);
                })

            }
        },
        mounted() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((resp) => {
                    this.albums = [...resp.data.response];
                    this.filteredAlbums = resp.data.response
                    this.filteredAlbums.forEach((element, index) => {
                        element.mp3 = this.mp3[index];
                    });
                    console.log(this.filteredAlbums);
                    this.albums.forEach(element => {
                        if (!this.genres.includes(element.genre)) {
                            this.genres.push(element.genre);
                        }
                    });
                })

        }
    })
})
