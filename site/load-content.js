document.addEventListener("DOMContentLoaded", function () {
    // Подключение Bootstrap и глобальных стилей
    loadStylesheet('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
    loadStylesheet('https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css');
    loadStylesheet('styles/styles.css');

    // Загрузка HTML контента и соответствующих стилей
    loadHTML('header-container', 'header.html', ['styles/header.css', 'styles/styles.css']);
    loadHTML('main-content-container', 'home/main-content.html', ['styles/button.css']); // , ['main-content.css', 'button.css']
    loadHTML('footer-container', 'footer.html', ['styles/footer.css']);
    
    // Подключение Bootstrap JS
    loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js');
});

// Функция для загрузки HTML и массива CSS файлов
function loadHTML(containerId, filePath, cssFiles) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
            // Подключаем все файлы стилей после загрузки HTML
            if (cssFiles) {
                cssFiles.forEach(cssFile => loadStylesheet(cssFile));
            }
        })
        .catch(error => console.error('Error loading file:', error));
}

// Функция для подключения CSS файла
function loadStylesheet(url) {
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
}

// Функция для подключения JS файла
function loadScript(url) {
    let script = document.createElement('script');
    script.src = url;
    script.defer = true;
    document.body.appendChild(script);
}
