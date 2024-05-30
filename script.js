document.addEventListener('DOMContentLoaded', function() {
    const typewriter = document.getElementById('typewriter');
    const words = ['Developer', 'Designer', 'Creator'];
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = '';
    let isDeleting = false;

    function type() {
        if (isDeleting && charIndex === 0) {
            wordIndex = (wordIndex + 1) % words.length;
            isDeleting = false;
        }
        currentWord = words[wordIndex];
        const currentDisplay = isDeleting ? currentWord.substring(0, charIndex--) : currentWord.substring(0, charIndex++);

        typewriter.textContent = currentDisplay;

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
        }

        setTimeout(type, isDeleting ? 100 : 200);
    }

    type();
});
