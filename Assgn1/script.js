document.addEventListener("DOMContentLoaded", function() {
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
        heading.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content && content.classList.contains('content')) {
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    const toc = document.querySelector("#table-of-contents ul");
    headings.forEach(heading => {
        const tocItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = `#${heading.textContent.trim().replace(/\s+/g, '-').toLowerCase()}`;
        link.textContent = heading.textContent;
        tocItem.appendChild(link);
        toc.appendChild(tocItem);

        heading.id = heading.textContent.trim().replace(/\s+/g, '-').toLowerCase();
    });
});
