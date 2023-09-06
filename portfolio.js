document.addEventListener('DOMContentLoaded', function() {
    // Get the elements
    const centerText = document.querySelector('.centertext');
    const centerImage = document.querySelector('.centerimage');

    // Set up the mouseenter event for centertext
    centerText.addEventListener('mouseenter', function() {
        // Change the text color to black
        centerText.style.color = 'black';
    });

    // Set up the mouseleave event for centertext
    centerText.addEventListener('mouseleave', function() {
        // Restore the original text color (change this to the original color)
        centerText.style.color = ''; // This will remove the inline style, restoring the original color from your CSS
        // Restore the original image
        centerImage.src = 'file:///Users/yuxi/Downloads/yuxi4657_None_16ed8e2d-af0d-4cfb-bb0e-52aaddc2302d.png'; // Replace with your default image path
    });
});



