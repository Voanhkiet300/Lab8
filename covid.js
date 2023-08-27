let covid = []
let contentElement = document.getElementById('content')
console.log(contentElement);
async function getWeather() {
    const API = await (await fetch('https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST'))
    const information = await API.json()
    console.log(information);
    const Vietnam = {
        "infected": information.infected,
        "recovered": information.recovered,
        "deceased": information.deceased,
        "treated": information.treated
    }
    VietnamHTML = `
    <div class="center">
      <h4 class="location">Việt Nam</h4>
      <p class="description">Tình hình dịnh bệnh</p>
    </div>
    <!-- 3/3 -->
    <div class="bottom">
      <!-- Left -->
      <div>
        <p><b>Nhiễm bệnh:</b>
        ${Vietnam.infected}</p>
        <p><b>Đã phục hồi:</b>
        ${Vietnam.recovered}</p>
      </div>
      <!-- Right -->
      <div>
        <p><b>Tử vong:</b>
        ${Vietnam.deceased}</p>
        <p><b>Được điều trị:</b>
        ${Vietnam.treated}</p>
      </div>
    </div>`
    contentElement.innerHTML = VietnamHTML
    console.log(Vietnam);
    covid = information.detail
    console.log(covid);

}
getWeather()
let input = document.getElementById('input')
input.addEventListener('input', event => {
    const value = event.target.value.toLowerCase()
    for (let i = covid.length - 1; i >= 0; i--) {
        if (covid[i].name.toLowerCase().includes(value) == true) {
            var results = [];
            results.push(covid[i])
            var contentHTML = `
            <div class="center">
              <h4 class="location">${results[0].name}</h4>
              <p class="description">Tình hình dịnh bệnh</p>
            </div>
            <!-- 3/3 -->
            <div class="bottom">
              <!-- Left -->
              <div>
                <p><b>Nhiễm bệnh:</b>
                ${results[0].cases}</p>
                <p><b>Nhiễm hôm nay</b>
                ${results[0].casesToday}</p>
              </div>
              <!-- Right -->
              <div>
                <p><b>Tử vong:</b>
                ${results[0].death}</p>
                <p><b>Được điều trị:</b>
                ${results[0].treating}</p>
              </div>
            </div>`
            contentElement.innerHTML = contentHTML
        }
    }
})