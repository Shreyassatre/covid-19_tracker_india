

function fetch(){
    $(document).ready(function(){
        var url="https://api.covid19india.org/data.json"

        $.getJSON(url,function(data){
            console.log(data)

            var total_active,total_recovered,total_deaths,total_confirmed

            var state = []
            var confirmed = []
            var active = []
            var recovered = []
            var deaths = []

            $.each(data.statewise, function(id,obj){
                state.push(obj.state)
                confirmed.push(obj.confirmed)
                active.push(obj.active)
                recovered.push(obj.recovered)
                deaths.push(obj.deaths)
            })

            state.shift()
            confirmed.shift()
            active.shift()
            recovered.shift()
            deaths.shift()

            console.log(state)

            total_confirmed = data.statewise[0].confirmed
            total_active = data.statewise[0].active
            total_recovered = data.statewise[0].recovered
            total_deaths = data.statewise[0].deaths
            new_confirmed = data.statewise[0].deltaconfirmed
            new_recovered = data.statewise[0].deltarecovered
            new_deaths = data.statewise[0].deltadeaths

            $("#confirmed").append(total_confirmed)
            $("#active").append(total_active)
            $("#recovered").append(total_recovered)
            $("#deaths").append(total_deaths)
            $("#new_con").append(new_confirmed)
            $("#new_rec").append(new_recovered)
            $("#new_deaths").append(new_deaths)

            var conChart = document.getElementById('conChart').getContext('2d')

            var chart = new Chart(conChart,{
                type:"line",
                data:{
                    labels:state,
                    datasets:[
                        {
                            label: "Confirmed cases",
                            data: confirmed,
                            backgroundColor: "#f1c40f",
                            minBarLength: 100
                        }
                    ]
                },
                
            })

            var actChart = document.getElementById('actChart').getContext('2d')
            var chart = new Chart(actChart,{
                type:"line",
                data:{
                    labels:state,
                    datasets:[
                        {
                            label: "Active Cases",
                            data: active,
                            backgroundColor: "rgba(52, 210, 235)",
                            minBarLength: 100
                        }
                    ]
                },
                
            })

            var recChart = document.getElementById('recChart').getContext('2d')
            var chart = new Chart(recChart,{
                type:"line",
                data:{
                    labels:state,
                    datasets:[
                        {
                            label: "Recovered Cases",
                            data: recovered,
                            backgroundColor: "rgba(76, 235, 52)",
                            minBarLength: 100
                        }
                    ]
                },
                
            })

            var deatsChart = document.getElementById('deathsChart').getContext('2d')
            var chart = new Chart(deathsChart,{
                type:"line",
                data:{
                    labels:state,
                    datasets:[
                        {
                            label: "Death Cases",
                            data: deaths,
                            backgroundColor: "rgba(230, 39, 39)",
                            minBarLength: 100
                        }
                    ]
                },
                
            })


        })
    })

    $.get("https://api.covid19india.org/data.json",
    
      function (data){
        //console.log(data['statewise'].length);
        var tbval = document.getElementById('tbval');
        
        for(var i=1; i<(data['statewise'].length); i++){
          var x = tbval.insertRow();
          x.insertCell(0);
          tbval.rows[i].cells[0].innerHTML = data['statewise'][i]['state'];
          tbval.rows[i].cells[0].style.background = 'rgb(194, 185, 185)';

          x.insertCell(1);
          tbval.rows[i].cells[1].innerHTML = data['statewise'][i]['confirmed'];

          x.insertCell(2);
          tbval.rows[i].cells[2].innerHTML = data['statewise'][i]['active'];

          x.insertCell(3);
          tbval.rows[i].cells[3].innerHTML = data['statewise'][i]['recovered'];

          x.insertCell(4);
          tbval.rows[i].cells[4].innerHTML = data['statewise'][i]['deaths'];

          x.insertCell(5);
          tbval.rows[i].cells[5].innerHTML = data['statewise'][i]['deltaconfirmed'];

          x.insertCell(6);
          tbval.rows[i].cells[6].innerHTML = data['statewise'][i]['deltarecovered'];

          x.insertCell(7);
          tbval.rows[i].cells[7].innerHTML = data['statewise'][i]['deltadeaths'];

          x.insertCell(8);
          tbval.rows[i].cells[8].innerHTML = data['statewise'][i]['lastupdatedtime'];
        }

      } 
    
    );
    
}


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});


sr.reveal('.navbar',{}); 
sr.reveal('.navbar',{delay: 200}); 

sr.reveal('.updates',{delay: 60}); 






