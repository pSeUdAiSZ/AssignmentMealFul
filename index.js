async function stockData(){
    const url ='./P2VO[20].json'
    const response = await fetch(url);
    const datapoints = await response.json();
    return(datapoints)
};
const item_date = prompt('Enter the item_date')
let scheduledTimes=[];
let scheduledTimesDates=[];
let scheduledTimesDatesA=[];

stockData().then(datapoints=>{
    for (let index = 0; index < datapoints.length; index++) {
        const element = datapoints[index];
        if (item_date == element.item_date) {
            let time = new Date()
            time = element.schedule_time;
            scheduledTimes.push(time);

           
        }
        
    }
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
      }
      
      function formatDate(date) {
        return [
          date.getFullYear(),
          padTo2Digits(date.getMonth() + 1),
          padTo2Digits(date.getDate()),
        ].join('-');
      }

    for (let index = 0; index < scheduledTimes.length; index++) {
        let oliva = new Date(scheduledTimes[index])
        let dateA=formatDate(oliva);

      
            scheduledTimesDates.push(dateA);
    }
    console.log(scheduledTimesDates)

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }

    
    scheduledTimesDatesA = scheduledTimesDates.filter(onlyUnique)
    console.log(scheduledTimesDatesA)

    function counT(abc) {
        let count=0;
        for (let index = 0; index < scheduledTimesDates.length;index++) {
            if (scheduledTimesDates[index]==abc) {
                count++;
            }
            
    }
    return count;
    }
    let data=[];
    
    for (let index = 0; index < scheduledTimesDatesA.length; index++) {
        const element = scheduledTimesDatesA[index];
        const elem = counT(element);
        data.push(elem);
    }
    console.log(data)



    const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:scheduledTimesDatesA,
        
        datasets: [{
            label: '# of Schedules',
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        onClick:function(e){
            var gtx = document.getElementById('newChart').getContext('2d')
            const scheduledTimesTime=[];
            const sche_dates = prompt("Enter the Scheduled_date");

            for (let index = 0; index < scheduledTimes.length; index++) {
                const element = scheduledTimes[index]
                if (sche_dates==element.substr(0,10)) {
                    let myTime = element.substr(11, 19);
                scheduledTimesTime.push(myTime);
                    
                }
            }
            
            function onlyUnique(value, index, self) {
                return self.indexOf(value) === index;
              }
              const scheduledTimesTimeA=scheduledTimesTime.filter(onlyUnique);
              console.log(typeof scheduledTimesTimeA[0]);
              const scheduledTimesTimeAH=[]
              for (let index = 0; index < scheduledTimesTimeA.length; index++) {
                  const element = scheduledTimesTimeA[index].substr(0,2);
                  scheduledTimesTimeAH[index]=element;
                  
                  
              }
              

            
            
            
            let datsAC=[];
            let countM=0,countA=0,countE=0,countN=0;
            for (let index = 0; index < scheduledTimesTimeAH.length; index++) {
                let hrs = scheduledTimesTimeAH[index]
                let hours = parseInt(hrs);
                if(hours >= 09 && hours < 12)
                {
                    countM++
                }
                else if(hours >= 12 && hours <15)
                {
                    countA++;
                }
                else if(hours>=15 && hours < 18)
                {
                    countE++;
                }
                else{
                    countN++;
                }
                
            }
            datsAC=[countM,countA,countE,countN];
            console.log(datsAC)



            const newChart =new Chart(gtx, {
                type: 'bar',
                data: {
                    labels: ["Morning(9 A.M - 12 A.M)","Afternoon(12 P.M - 3 P.M)","Evening(3 P.M - 6 P.M)","Night(6 P.M - 9 P.M)" ],
                    datasets: [{
                        label: '# of schedules',
                        data: datsAC,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255,0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            
                                beginAtZero:true
                            
                        }

                    }
                }
            }
            )
        }
    }
}
);


})

