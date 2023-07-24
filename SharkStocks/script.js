
const url = 'https://global-stock-market-api-data.p.rapidapi.com/news/latest_news';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7af2f43e27msh7847b6f6fed0cfap111851jsn6cb2ad420860',
    'X-RapidAPI-Host': 'global-stock-market-api-data.p.rapidapi.com',
  },
};

async function fetchStockMarketNews() {
  try {
    const response = await axios.get(url, options);
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch stock market news: ' + error.message);
  }
}

// The rest of your code remains unchanged


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
    console.log(newsDescriptionsDiv)
  } catch (error) {
    console.error(error);
  }
}
function navigateToStockData() {
            // Redirect to stockData.html
            window.location.href = 'StockData.html';
}
function login() {
            // Redirect to stockData.html
            window.location.href = 'login.html';
}

updateNewsData();


function printData(){
  var data = document.getElementById('searchBar').value; 
  console.log(data);
}
