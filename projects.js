document.querySelectorAll('#tag-list li').forEach(function(tag) {
    tag.addEventListener('click', function() {
        document.querySelectorAll('#tag-list li').forEach(function(tag) {
            tag.classList.remove('active');
        });

        this.classList.add('active');

        var selectedTag = this.getAttribute('data-tag');
        var projects = document.querySelectorAll('.project');

        projects.forEach(function(article) {
            var projectTags = article.getAttribute('data-tags').split(' ');

            if (selectedTag === 'all' || projectTags.includes(selectedTag)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    });
});
