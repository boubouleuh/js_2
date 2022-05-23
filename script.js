// Quote API
var topDesc = document.getElementById('topdesc');
var authContent = document.getElementById('author');
var btnRefresh = document.getElementById('refresh');
btnRefresh.addEventListener('click');
// Quote API fetch

fetch('https://api.quotable.io/random')
.then(response=>{
    return response.json();
}).then(json=> {
    const content = json.content;
    const author = json.author;
    topDesc.innerText = content;
    authContent.innerText = author;
    console.log(author, content);
});

// TIME components 
// Récupération des elements HTML :
var time = document.getElementById('time');
var region = document.getElementById('region');
var abbr = document.getElementById('abbr');
var regionCity = document.getElementById('regionCity');
var dayYear = document.getElementById('dayYear');
var dayWeek = document.getElementById('dayWeek');
var weekNumber = document.getElementById('weekNumber');
var btnMore = document.getElementById('btn-more');
var divMore = document.getElementById('more');

// TIME API
fetch('http://worldtimeapi.org/api/ip')
.then(response=>{
    return response.json();
})
.then(json=> {
        console.log(json);
        
    const timeZone = json.timezone; // Region
    const abbreviation = json.abbreviation; // Meridian time
    const dayWeekData = json.day_of_week;
    const dayYearData = json.day_of_year;
    const weekNumberData = json.week_number;
    
    // Fonction pour convertir unixtime
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.

    function afficherDate() {
        const unixTime = json.unixtime; // Unix time
            var date = new Date(unixTime * 1000);
            // Hours part from the timestamp
            var hours = date.getHours();
            // Minutes part from the timestamp
            var minutes = "0" + date.getMinutes();
            // Seconds part from the timestamp
            var seconds = "0" + date.getSeconds();

            // Will display time in 10:30(:23) format
            var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
            time.innerText = formattedTime;  
            console.log(afficherDate);
    }
    setInterval(() => {
        afficherDate();
    }, 1000);

    region.innerText = timeZone;
    abbr.innerText = abbreviation;
    regionCity.innerText = timeZone;
    dayYear.innerText = dayYearData;
    dayWeek.innerHTML = dayWeekData;
    weekNumber.innerHTML = weekNumberData;
});

// Fonction bouton "More"
btnMore.addEventListener("click", () => {
    if(getComputedStyle(divMore).display != "none"){
    divMore.style.display = "none";
    } else {
    divMore.style.display = "flex";
    }
})