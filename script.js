const scholarships = [
    { title: 'National Merit Scholarship', description: 'For outstanding academic performance.', image: 'https://via.placeholder.com/300x150' },
    { title: 'State Talent Scholarship', description: 'Awarded to state-level academic toppers.', image: 'https://via.placeholder.com/300x150' },
    { title: 'Women in Tech Grant', description: 'For women pursuing technical education.', image: 'https://via.placeholder.com/300x150' },
    { title: 'Minority Scholarship Program', description: 'Support for students from minority communities.', image: 'https://via.placeholder.com/300x150' }
];

function displayScholarships(data) {
    const grid = document.getElementById('scholarshipGrid');
    grid.innerHTML = data.map(scholarship => `
        <div class="card">
            <img src="${scholarship.image}" alt="${scholarship.title}">
            <div class="card-content">
                <h3 class="card-title">${scholarship.title}</h3>
                <p class="card-description">${scholarship.description}</p>
            </div>
        </div>
    `).join('');
}

function searchScholarships() {
    const query = document.querySelector('.search-bar input').value.toLowerCase();
    const filtered = scholarships.filter(scholarship => 
        scholarship.title.toLowerCase().includes(query) || 
        scholarship.description.toLowerCase().includes(query)
    );
    displayScholarships(filtered);
}

// Initial display
displayScholarships(scholarships);

function redirectToScholarshipFinder() {
    window.location.href = "scholarship-finder-india.html"; // Replace with the actual path to your file
}

