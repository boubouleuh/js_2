## The challenge

Your challenge is to build out this clock application and get it looking as close to the design as possible. You'll be using the following APIs to retrieve the necessary data:

- [World Time API](http://worldtimeapi.org/) to set the time based on the visitor's IP adress. This API will also be 
  used for additional dataw, like the day of the year shown in the expanded state.
- [IP Geolocation API](https://freegeoip.app/) to set the city and country underneath the time
- [Programming Quotes API](https://programming-quotes-api.herokuapp.com/) to generate random programming quotes.
    - If the Programming Quotes API doesn't work, [here's a good alternative quote API](https://github.com/lukePeavey/quotable) you can use instead. It's not programming specific, but it will do the trick.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- View the current time and location information based on their IP address
- View additional information about the date and time in the expanded state
- Be shown the correct greeting and background image based on the time of day they're visiting the site
- Generate random programming quotes by clicking the refresh icon near the quote

### Expected Behaviour

- Change the greeting depending on the time of day. It should say:
  - "Good morning" between 5am and 12pm
  - "Good afternoon" between 12pm and 6pm
  - "Good evening" between 6pm and 5am
- Change the greeting icon and background image depending on the time of day. They should show:
  - The sun icon and the daytime background image between 5am and 6pm
  - The moon icon and the nighttime background image between 6pm and 5am
- Generate a new random programming quote whenever the refresh icon is clicked

## Where to find everything

Your task is to build out the project to the design file provided. We provide Figma versions of the design.

All the required assets for this project are in the `/assets` folder. The assets are already exported for the correct screen size and optimized. Some images are reusable at multiple screen sizes. So if you don't see an image in a specific folder, it will typically be in another folder for that page.

The design system in the design file will give you more information about the various colors, fonts, and styles used in this project.

