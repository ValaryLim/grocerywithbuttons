import { Bubble } from 'vue-chartjs';
import database from '../firebase.js';

export default {
    extends: Bubble,
    data: () => ({
        datacollection: {
            datasets: [], 
            options: {
                title: {
                display: true,
                text: 'GDP, happiness and population'
                }, 
                scales: {
                yAxes: [{ 
                    scaleLabel: {
                    display: true,
                    labelString: "Happiness"
                    }
                }],
                xAxes: [{ 
                    scaleLabel: {
                    display: true,
                    labelString: "GDP (PPP)"
                    }
                }]
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    }),
    mounted () {
        this.renderChart(this.datacollection, this.options)
    },
    methods: {
        fetchItems: function() {
            database.collection('charts').get().then(querySnapShot => {
                querySnapShot.forEach(doc => {
                    this.datacollection.datasets.push({
                        backgroundColor: doc.data().backgroundColor,
                        borderColor: doc.data().borderColor,
                        label: doc.data().label,
                        data: doc.data().data
                    })
                })
                this.renderChart(this.datacollection, this.options)
            })
        }
    },
    created() {
        this.fetchItems();
    }
}