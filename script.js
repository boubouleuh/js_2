var time = document.getElementById('time');
var region = document.getElementById('region');
var abbr = document.getElementById('abbr');
var topDesc = document.getElementById('topdesc');
var authContent = document.getElementById('author');

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


    fetch('http://worldtimeapi.org/api/ip')
    .then(response=>{
        return response.json();
    }).then(json=> {
        console.log(json);
        
    const unixTime = json.unixtime;
    const timeZone = json.timezone;
    const abbreviation = json.abbreviation;
    const dayWeek = json.day_of_week;
    const dayYear = json.day_of_year;
    const weekNumber = json.week_number;
    // Fonction pour convertir unixtime

    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unixTime * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    // var seconds = "0" + date.getSeconds();

    // Will display time in 10:30(:23) format
    var formattedTime = hours + ':' + minutes.substr(-2);

    time.innerText = formattedTime;
    region.innerText = timeZone;
    abbr.innerText = abbreviation;

    });