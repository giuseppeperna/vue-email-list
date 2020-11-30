/**
@file Stampare a schermo 10 mail provenienti da una API di Boolean

@author Giuseppe Perna <giuseppeperna.cg@gmail.com>
 */

//  Init Vue object
const app = new Vue({
    el:"#app",
    data: {
        url:"https://flynn.boolean.careers/exercises/api/random/mail",
        emails:[],
    },
    mounted() {
        for(let i = 0; i<10; i++) {
            axios.get(this.url).then((result) => {
                this.emails.push(result.data.response);
                console.log(this.emails);
            });  
        }
    },
})
