// script.js
async function fetchStockMarketNews() {
  const apiUrl = 'https://global-stock-market-api-data.p.rapidapi.com/news/stock_market_news/1';
  const headers = {
    'X-RapidAPI-Key': '6c3f895650mshc8bddddbff7e24fp1eceacjsn94e6c904d742',
    'X-RapidAPI-Host': 'global-stock-market-api-data.p.rapidapi.com'
  };

  try {
    const response = await axios.get(apiUrl, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
}

function extractShotDescriptions(inputData) {
  const result = [];
  for (const item of inputData) {
    if (item.shotDesc) {
      result.push(item.shotDesc);
    }
  }
  return result.join('<br><br>');
}

async function updateNewsData() {
  try {
    const data = await fetchStockMarketNews();
    const extractedShotDescriptions = extractShotDescriptions(data);
    
    // Update the content of the <div> element with the extracted descriptions
    const newsDescriptionsDiv = document.getElementById('newsDescriptions');
    newsDescriptionsDiv.innerHTML = extractedShotDescriptions;
  } catch (error) {
    console.error(error);
  }
}

updateNewsData();


