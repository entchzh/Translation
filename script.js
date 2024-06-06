document.getElementById('linkForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const text = encodeURIComponent(document.getElementById('text').value);
    const source = encodeURIComponent(document.getElementById('source').value);
    const target = encodeURIComponent(document.getElementById('target').value);

    const apiUrl = `https://playentry.org/api/expansionBlock/papago/translate/n2mt?text=${text}&target=${target}&source=${source}&projectId=4hmj1`;

    const generatedLinkElement = document.getElementById('generatedLink');
    generatedLinkElement.textContent = apiUrl;

    const copyButton = document.getElementById('copyButton');
    copyButton.style.display = 'inline';
});

document.getElementById('copyButton').addEventListener('click', function() {
    const generatedLink = document.getElementById('generatedLink').textContent;

    navigator.clipboard.writeText(generatedLink).then(function() {
        alert('Link copied to clipboard!');
    }, function() {
        alert('Failed to copy link.');
    });
});
