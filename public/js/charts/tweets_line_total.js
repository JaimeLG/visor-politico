Highcharts.chart('tweets_line_chart', {
    chart: {
        type: 'spline'
    },
    title: {
        text: ' '
    },
    subtitle: {
        text: 'candidatos'
    },
    /*xAxis: {
        type: 'datetime',
        labels: {
            overflow: 'justify'
        }
        },*/
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%e. %b',
            year: '%b'
        },
        min: Date.UTC(2018,3,28)
    },
    
    plotOptions: {
        spline: {
            lineWidth: 4,
            states: {
                hover: {
                    lineWidth: 5
                }
            },
            marker: {
                enabled: false
            },
            //pointInterval: 3600000, // one hour
            //pointStart: Date.UTC(2018, 4, 20, 0, 0, 0)
        }
    },
    yAxis: {
        title: {
            text: 'Tweets'
        },
       
    },
    tooltip: {
        crosshairs: true,
        //shared: true
    },
    
    series: validateData()
});

function validateData() {
    candidates = [];
    
    for (var candidate in jsonData) {
        candidates.push({
            name: candidate.capitalize() +'<br>'+ jsonData[candidate]["data"]["twitter"],
            data: jsonData[candidate]["tweets"]
        });
    }

    return candidates;
    
}
