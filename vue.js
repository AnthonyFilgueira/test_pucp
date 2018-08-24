// Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector("meta[name='csrf-token']").getAttribute('content');
var app = new Vue({
        el: '#app',
        data: {
            eu:0,
            usd:0,
            date_change_money:'',
            access_key:'bccf73e34c3b762a1dfef225d7819280',
            historic_prices: []
        },
        mounted: function () {
            this.showHistoricPrices();
        },
        computed: {
            
        },
        methods: {
        	calculateMoneyChange:function(){
        		this.$http.get('http://data.fixer.io/api/latest?access_key='+this.access_key+'&symbols=EUR,USD').then(function (response) {

        			let resultado_dolares = Number(this.eu) * Number(response.data.rates.USD);

        			this.usd = resultado_dolares;
                   	
                    console.log();
                }, function (error) {
                	//console.log("estoy aqui");
                	console.log(error);
                });
        	},
        	showHistoricPrices:function(){
        		this.$http.get('http://data.fixer.io/api/latest?access_key='+this.access_key).then(function (response) {
                   	
                   	this.date_change_money = response.data.date;
                   	this.$set(this,'historic_prices', response.data.rates);
                    console.log(response.data);
                }, function (error) {
                	//console.log("estoy aqui");
                	console.log(error);
                });
        	},
        }
    });