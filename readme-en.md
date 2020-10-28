<div align="center">
  <br />
  <br />
  <br />
  
  <p align="center">
  <a href="https://covidbr.netlify.com/" target="blank">
    <img src="assets/logo.svg" width="220" alt="COVIDBR Logo" />
  </a>
  </p>
  <br />
  <br />
  <br />
</div>
  <p align="center"><a href="./readme.md">Em Português ➤</a></p>

## Description
Corona virus tracking API in Brazil

## Related projects
This API is part of the information tracking project on COVID-19 in Brazil. It is used by a webapp to track national data:
  - [COVIDBR App](https://github.com/vmarcosp/covidbr-app)

## Data source
The project currently has two data sources:
 - https://www.worldometers.info/coronavirus/ - Where the API fetches global and national data
 - https://github.com/wcota/covid19br - Where the API fetches state and municipal data
 
The second data source is temporary, given that the Ministry of Health platform, IVIS, is down and should return
coming soon.

## Up and Running

### Settings
- Create a copy of the `.env.sample` file and rename it to` .env`
- Change the `PORT` value for the port you want to run the application on

### Running the API
Open the terminal in the project folder and run the command below:
```sh
yarn dev # ou npm run dev
```
## Thanks

This project was only possible thanks to the people mentioned below:
- [Wesley Costa](https://github.com/wcota) - For providing municipal and state data
- [Iago Laguna](https://github/iagolaguna) - Contributed to the development of this API
- [Leonardo Habitzreuter](https://github.com/leonardohabitzreuter) - Contributed to the development of the API
- [Rebecca Gonzalez](https://dribbble.com/rebeccagonzalez) - Developed the entire web application design
- COVID-19 Data Treatment Group on Telegram - Keeping data updated daily, regardless of the Ministry of Health's IVIS platform

## License

COVIDBR API is [WTFPL licensed](LICENSE).

