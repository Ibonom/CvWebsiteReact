import Weather from '../Assets/WeatherApp.png'
import SmartBrain from '../Assets/SmartBrainApi.PNG'
import FeedMe from '../Assets/FeedMe.PNG'
import cvJs from '../Assets/cvSite.PNG'
import AchiveLive from '../Assets/AchiveLive.PNG'

const ProjectData = [
    {
        id:'00',
        name:'SmartBrain',
        githubLink:'https://github.com/Ibonom/SmartBrainapiFrontEnd',
        link:"https://smartbraindgg.herokuapp.com", 
        img: SmartBrain,
        describe: 'The goal of the project was to create a website that combines both, front\'end and back\'end. The site has complex account management along with password encryption and uses a facial recognition API to detect and tag a face in a given photo in real time with a link. Technologies used (React, Node.js, express.js, PostgreSQL, npmPackages, clarifai (API ). Ps: the page may take longer to load the first time you use it, this is due to "putting the server to sleep when it is idle. Back-end files are avalible in my github too. If you want link write to me, because I had there my api key'

    },
    {
        id:'01',
        name:'Weather App',
        link: 'https://pogodynka24h.netlify.app',
        githubLink:'https://github.com/Ibonom/WeatherPage',
        img: Weather,
        describe: 'The target of the project was to create a page that displays the current weather with the help of an external API that transmits data via JSON files. The site has the ability to search any city. An additional feature that has been implemented is the display of the current air condition. Applied technologies: Html, Css, Js, Figma https://openweathermap.org (Weather API), https://unsplash.com/developers (background images based on current cloud cover).'
    },
    {
        id:'02',
        name:'JS Vanila CV',
        githubLink:'https://github.com/Ibonom/cvWebsite',
        link:'https://cvwebdg.netlify.app',
        img: cvJs,
        describe:'The goal of the project was to create a website from scratch, which will be primarily based on pure javascript html and css. Additionally it has a working contact form and dynamic display of a list with current projects. The whole project was planned to be stylized in crime theme'
    },
    
    {
        id:'03',
        name:'FeedMe',
        githubLink:'https://github.com/Ibonom/FeedMe/',
        link:'',
        img: FeedMe,
        describe: 'The goal of the project was to create a typical website for commercial use, which was to be used to order food, based on React framework. On the page you can dynamically add and subtract products to the cart. '
    },
   
    {
        id:'04',
        name:'AchiveLive',
        githubLink:'https://github.com/Ibonom/AchiveLife',
        link:'',
        img: AchiveLive,
        describe:'The target of the Achive Life app was to use gamification elements in everyday life. The user of the app can choose from a number of activities that include tasks. Once a month, you commit to select at least one activity that includes a series of weekly tasks. When you use the app every day, you can accept selected tasks from the weekly list. When you complete or fail quest, you will be rewarded with positive or negative points, which you can then redeem for rewards from the Store app. Official version is only available in command line in future will be full publication with GUI'
    }  
]

export default ProjectData