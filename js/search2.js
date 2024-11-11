function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function displayResults(query) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<h2>Kết quả tìm kiếm: ${query}</h2>`;

    // Giả sử đây là dữ liệu tìm kiếm
    const data = [
        { title: 'Result 1', description: 'Description for result 1' },
        { title: 'Result 2', description: 'Description for result 2' },
        { title: 'Result 3', description: 'Description for result 3' }
    ];

    // Lọc kết quả dựa trên từ khóa tìm kiếm
    const filteredResults = data.filter(item => item.title.includes(query) || item.description.includes(query));

    // Hiển thị kết quả
    filteredResults.forEach(item => {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result';
        resultDiv.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
        resultsDiv.appendChild(resultDiv);
    });
}

const query = getQueryParameter('query');
if (query) {
    displayResults(query);
}