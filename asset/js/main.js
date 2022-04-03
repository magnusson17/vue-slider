/**
- Partendo da un array di immagini, realizziamo uno slider con Vue.js come da mockup
1) Al click delle freccette "sinistra" e "destra" lo slider cambierà l'immagine visibile passando alla successiva oppure alla precedente.

Consigli
Ricordiamoci come visualizzare un singolo elemento alla volta di un array
Attenzione

2) Quando le immagini terminano, lo slider ricomincerà dalla prima
Bonus
applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente ( riguardare la documentazione su i lifecycle hooks )
Al click su un pallino verrà visualizzata l'immagine di riferimento associata ( il terzo pallino sarà associato alla terza immagine e così via..) */

var app = new Vue(
    {
        el: "#root",
        data: {
            immagini: [
                "https://source.unsplash.com/random/?shoes",
                "https://source.unsplash.com/random/?city",
                "https://source.unsplash.com/random/?cat"
            ],
            indexBe: 0,
        },
        created() {
            // imgCarosello.addEventListener("mouseout", setInterval(this.aheadBtn, 2000)); 
            // imgCarosello.addEventListener("mouseout", this.aheadBtn);
            // setInterval(this.aheadBtn, 3000);
        },
        methods: {
            aheadBtn: function() {
                this.indexBe++;
                if (this.indexBe > (this.immagini.length - 1)) {
                    this.indexBe = 0;
                }
            },
            beforeBtn: function() {
                this.indexBe--;
                if (this.indexBe < 0) {
                    this.indexBe = (this.immagini.length - 1);
                }
            },
            palliniFunction: function(i) {
                this.indexBe = i
            },
        }
    }
);