const app2 = Vue.createApp({
    data() {
        return {
            judul: "Ini Judul VUE2",
            tiket: "https://my.avianbrands.com/avian-ticket-it/public/ticket",
            kary: {
                nama: "tono",
                alt: "Avian",
                width: '150px',
                textRed: 'textMerah',
                image: "https://my.avianbrands.com/avian-ticket-it/public/images/avian-logo-icon.png"
            },
            usrnm: "",
            address: "Alamat saya",
            gender: "",
            kerja: "",
            jobs: [
                {id: 1, job: "Masinis"},
                {id: 2, job: "Pilot"},
                {id: 3, job: "IT"},
                {id: 4, job: "Finance"}
            ],
            hobbies: []
        }
    },
    methods: {
        notif(){
            alert('Input nya masuk bos!')
        },
        doSomething(){
            alert('Input nya klik dan ctrl masuk bos!')
        },
        jobChange(){
            if(this.kerja - 1 < 0)
                $('#job-view').html('-');
            else
                $('#job-view').html(this.jobs[this.kerja-1].job);
        }
    },
})

app2.mount('#app2')

