# Random Quote Viewer

A simple and aesthetic web page that displays a random quote every time it's loaded. Built with HTML, CSS, and JavaScript, and powered by a local `quotes.json` file generated via web scraping.

## 🌐 Technologies Used

This project uses the following technologies:

- **HTML5** – Structure of the page
- **CSS3** – Styling and layout
- **JavaScript (ES6+)** – Logic to load and display random quotes
- **JSON** – Stores the collection of quotes
- **Node.js + Axios + Cheerio** – Used to scrape quotes from the web (see `scraper.js`)

## 🔍 Quote Source & Scraper

All quotes displayed were extracted from the website [Quotes to Scrape](https://quotes.toscrape.com/), a publicly available site made for practicing web scraping.

The `quotes.json` file was generated using a Node.js scraper located in the repository:


To run the scraper:
cd scripts
npm install axios cheerio
node scraper.js
