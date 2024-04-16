Vue.createApp({
    data() {
        return {
            firstName: '',
            middleName: '',
            lastName: '',
            txt: {
                data1: 'tes',
                data2: 'tes222'
            }
        }
    },
    computed: {
        fullName(){
            return this.firstName+' '+this.middleName+' '+this.lastName;
        }
    }
}).mount('#app')