// Quote API
var topDesc = document.getElementById('topdesc');
var authContent = document.getElementById('author');
var btnRefresh = document.getElementById('refresh');
// Quote API Fetch and refresh with function call
quotable()
function quotable(params) {
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
}
btnRefresh.addEventListener("click", quotable);

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
var divMain = document.getElementById('main');
var divTop = document.getElementById('top');
var arrow = document.getElementById("arrow")
// TIME API

    
    // Fonction pour convertir unixtime
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.

    function afficherDate() {
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


            var options = {
                timeZone: timeZone,
                hour: 'numeric', minute: 'numeric'
            };

            var unixTime = json.unixtime; // Unix time
            var formatter = new Intl.DateTimeFormat([], options);
            var date = formatter.format(new Date(unixTime * 1000));


            // Will display time in 10:30(:23) format
            var formattedTime =  date 
            time.innerText = formattedTime;  
            console.log(afficherDate);
            region.innerText = timeZone;
            abbr.innerText = abbreviation;
            regionCity.innerText = timeZone;
            dayYear.innerText = dayYearData;
            dayWeek.innerHTML = dayWeekData;
            weekNumber.innerHTML = weekNumberData;
    },
)};
    setInterval(() => {
        afficherDate();
    }, 1000);




// Fonction bouton "More"
btnMore.addEventListener("click", () => {
    if(getComputedStyle(divMore).visibility != "hidden"){
    divMore.style.visibility = "hidden";
    divMore.style.opacity = "0";
    divMore.style.marginBottom = "-1000px"
    btnMore.style.marginBottom = "0px";
    divTop.style.opacity = "100";
    divTop.style.visibility = "visible";
    divTop.style.marginBottom = "100px";
    divMain.style.marginTop = "56px"
    arrow.style.transform = "rotate(180deg)"
    btnMore.getElementsByTagName('span').item(0).innerHTML = "more"
    } else {
    divMore.style.visibility = "visible";
    divMore.style.opacity = "90%";
    divMore.style.marginBottom = "0px";
    divTop.style.opacity = "0";
    divTop.style.visibility = "hidden";
    divTop.style.marginBottom = "0px";
    divMain.style.marginTop = "-150px"
    arrow.style.transform = "rotate(0deg)"
    btnMore.getElementsByTagName('span').item(0).innerHTML = "less"
    }
})