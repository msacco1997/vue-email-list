const app = new Vue ({
    el: '#app',
    data: {
        emailNumber: 10,
        emailList: [],
    },

    created() {
        for (let i = 0; i < this.emailNumber; i++) {// chiedere 10 indirizzi email e stamparli in pagina all’interno di una lista
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (res) => {
                console.log(res);
                console.log(res.data);
                if(res.data.success) {
                    this.emailList.push( res.data.response );// Successivamente assicuratevi di far comparire gli indirizzi email solamente quando sono stati tutti recuperati dal server.
                }  
            })
        }
    }
})
