document.addEventListener('DOMContentLoaded', () => {
    fetchCategories();
});

function fetchCategories() {
    fetch('/api/categories')
        .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
        })
        .then(categories => {
            const container = document.getElementById('categories-list');
            container.innerHTML = '';
            if (categories.length === 0) {
                container.innerHTML = '<p>No categories found.</p>';
            } else {
                categories.forEach(category => {
                    const div = document.createElement('div');
                    div.textContent = category.name; // Displays the 'name' field
                    container.appendChild(div);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching categories:', error);
            const container = document.getElementById('categories-list');
            container.innerHTML = `<p>Error loading categories: ${error.message}</p>`;
        });
}