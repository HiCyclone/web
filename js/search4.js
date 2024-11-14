function handleKeyPress(event) {
    if (event.key === 'Enter') {
        search();
    }
}

function search() {
    const searchTerm = document.getElementById('searchInput').value;
    const userQueryDiv = document.getElementById('userQuery');
    userQueryDiv.innerHTML = `<p>You searched for: <strong>${searchTerm}</strong></p>`;

    // Chuyển hướng đến trang kết quả tìm kiếm
    window.location.href = `../../search.html?query=${encodeURIComponent(searchTerm)}`;
}