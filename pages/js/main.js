console.log('36'); // индикатор апдейта для консиоли браузера



// Постоянное обновление перменных в хранилище при изменении данных в полях ввода
function updateVariable(input_name) {
    switch(input_name) {
        case 'coin':
            sessionStorage.setItem(input_name, document.myform.coin.value);
            break;
        case "leverage":
            sessionStorage.setItem(input_name, document.myform.leverage.value);
            break;
        case "margin":
            sessionStorage.setItem(input_name, document.myform.margin.value);
            break;
        case "entry_price":
            sessionStorage.setItem(input_name, document.myform.entry_price.value);
    }
}



// Добавление запятой в написание тысяч (для скринов позы)
function addComma (number) {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};



// ---- ГЕНЕРАЦИЯ И СОХРАНЕНИЕ СКРИНШОТОВ ----

// Конвертация html блока в png изображение + авто скачивание файла
function convertHtmlToPng(page, block_name, ss_second_name) {
    html2canvas(document.getElementById(block_name)).then(function(canvas) {
        let file_name = page + "_" + ss_second_name + generateDatetimeForFile() + ".png";
        const link = document.createElement('a');
        link.download = file_name;
        link.href = canvas.toDataURL("image/png");
        link.target = '_blank';
        link.click();
        link.delete;
    });
}


// Генерация даты и времени для названий файлов скринов
function generateDatetimeForFile() {
    let current_time = new Date();
    let year = String(current_time.getFullYear());
    let month = String(current_time.getMonth());
    let day = String(current_time.getDate());
    let hours = String(current_time.getHours());
    let minutes = String(current_time.getMinutes());
    let seconds = String(current_time.getSeconds());
    let file_name = year+"-"+month+"-"+day+"_"+hours+"-"+minutes+"-"+seconds;
    return file_name;
}



// Отрисовка шапки айфона
function formingIphoneHeader(time, battery, bg) {

    let icons_url = "";
    switch (battery) {
        case "10":
            icons_url = `url(/images/icons/${bg}/10.png)`;
            break;
        case "50":
            icons_url = `url(/images/icons/${bg}/50.png)`;
            break;
        case "90":
            icons_url = `url(/images/icons/${bg}/90.png)`;
            break;
    }
    document.getElementById('iphone_icons').style.backgroundImage = icons_url; // Акб айфона
    document.getElementById("iphone_time").textContent = time; // Время айфона
}
