import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

const urls = [
  'https://quotes.toscrape.com/page/1/',
  'https://quotes.toscrape.com/page/2/',
  'https://quotes.toscrape.com/page/3/',
   'https://quotes.toscrape.com/page/4/',
  'https://quotes.toscrape.com/page/5/',
  'https://quotes.toscrape.com/page/6/',
   'https://quotes.toscrape.com/page/7/',
  'https://quotes.toscrape.com/page/8/',
  'https://quotes.toscrape.com/page/9/',
   'https://quotes.toscrape.com/page/10/'
];

async function scrapeMultiplePages() {
  try {
    const results = await Promise.all(
      urls.map(async (url) => {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const quotes = [];

        $('.quote').each((i, el) => {
          const text = $(el).find('.text').text();
          const author = $(el).find('.author').text();
          quotes.push({ text, author });
        });

        return quotes;
      })
    );

    // results es un array de arrays de quotes, aplanamos todo:
    const allQuotes = results.flat();

    fs.writeFileSync('quotes.json', JSON.stringify(allQuotes, null, 2), 'utf-8');
    console.log(`Se guardaron ${allQuotes.length} quotes de ${urls.length} páginas.`);
  } catch (error) {
    console.error('Error scraping:', error);
  }
}

scrapeMultiplePages();
