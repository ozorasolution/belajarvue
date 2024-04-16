const app = Vue.createApp({
    data() {
        return {
            judul: "Ini Judul VUE",
            count: 0,
            message: "<b>Ini teks bold</b>",
            show: 6,
            showMsg: "tampilkan",
            showMsg2: "tampilkan 2",
            showMsg3: "tampilkan ketiga",
            showElse: "tidak ada yg tampil",
            tesBool: false,
            fruits: ['apel','jeruk','melons'],
            futbal: [
                {name: 'messi', position: 'foward'},
                {name: 'c.ronaldo', position: 'foward'},
                {name: 'l.cassilas', position: 'goalkeep'},
                {name: 's.ramos', position: 'back'},
            ]
        }
    },
    methods: {
        tambah(){
            this.count++
        },
        setBool(){
            this.tesBool = !this.tesBool
        },
        hapus(index){
            this.fruits.splice(index, 1)
        }
    },
})

app.mount('#app')

