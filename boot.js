showContent('content1');

function showContent(contentId) {
    const allContents = document.querySelectorAll('.mark-row-container');
    allContents.forEach(content => {
        content.style.display = 'none';
    });

    const selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';

    // Remove the 'active' class from all buttons
    const allButtons = document.querySelectorAll('.mark-buttons button');
    allButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Add the 'active' class to the clicked button
    const clickedButton = document.getElementById('button' + contentId.slice(-1));
    clickedButton.classList.add('active');
}