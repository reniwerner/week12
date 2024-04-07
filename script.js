$(document).ready(function() {
    const tricks = [
      "Boo! Scared You!!",
      "Tricked you! Try again next time.",
      "It's a rat! Jk, it's a trick!"
    ];
  
    const treats = [
      "You got yummy candy! Happy Halloween!",
      "Enjoy your spooky candy treat!",
      "Congrats! Here is a pumpkin treat for you!"
    ];
  
    $("#play-btn").click(function() {
      const randomIndex = Math.floor(Math.random() * 2); // Randomly choose between trick (0) or treat (1)
      const resultContainer = $("#result");
      resultContainer.empty();
  
      if (randomIndex === 0) {
        const randomTrick = tricks[Math.floor(Math.random() * tricks.length)];
        resultContainer.text(randomTrick);
        resultContainer.css("color", "#ff5733"); // Spooky orange color for tricks
      } else {
        const randomTreat = treats[Math.floor(Math.random() * treats.length)];
        resultContainer.text(randomTreat);
        resultContainer.css("color", "#00cc66"); // Green color for treats
      }
    });
  });