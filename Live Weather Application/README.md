
# 🌦️ Live Weather Application

## Project Overview

The **Live Weather Application** is a web-based application that provides real-time weather information for any city worldwide. The project is designed with a clean, modern interface and includes features such as city search, live weather data, and a five-day forecast.

## Features

- **Real-Time Weather Data**: Displays current temperature, humidity, wind speed, and general weather conditions.
- **City Search Functionality**: Enter any city name to fetch and display its current weather conditions.
- **Dynamic Weather Icons**: Displays weather condition icons fetched from the API.
- **Five-Day Weather Forecast**: Includes a forecast for the upcoming five days with minimum and maximum temperatures.
- **Responsive Design**: The application is fully responsive and adapts to various screen sizes.

## Technologies Used

- **HTML5**: Structure and semantics of the application.
- **CSS3**: Styling, including the Web3-inspired theme and responsive layout.
- **JavaScript (ES6+)**: Interactivity, API requests, and dynamic content update.
- **Axios**: HTTP client used for API requests.
- **OpenWeatherMap API**: Provides the weather data.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Access2Christian/Live-Weather-Application.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd Live-Weather-Application
   ```
3. **Open the `index.html` file** in your preferred web browser.

## Usage

1. **Search for a City**: Enter the desired city name in the search bar and click "Search."
2. **View Weather Information**: Current weather data along with a five-day forecast will be displayed.
3. **Explore Dynamic Features**: Hover over different elements to interact with dynamic weather icons and forecasts.

## Code Structure

```plaintext
├── index.html       # The main HTML file
├── style.css        # The main CSS file for styling
├── index.js         # JavaScript file for weather data handling
├── Weather image.jpg  # Background image for the weather app
└── README.md        # Project documentation
```

### Key JavaScript Functions

- **`refreshWeather(response)`**: Updates the UI with the weather data fetched from the API.
- **`formatDate(date)`**: Formats the date and time based on the user's location.
- **`searchCity(city)`**: Fetches weather data for the specified city.
- **`handleSearchSubmit(event)`**: Handles the search form submission.
- **`getForecast(city)`**: Retrieves and displays the five-day forecast for the selected city.
- **`displayForecast(response)`**: Updates the UI with the forecast data.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

**Nnaji Christian**  
- GitHub: [Access2Christian](https://github.com/Access2Christian)
- LinkedIn: [Christian Nnaji](https://www.linkedin.com/in/christian-nnaji/)
