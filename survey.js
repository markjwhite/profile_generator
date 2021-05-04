const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  rl.question('What is an activity you like doing? ', (activity) => {
    rl.question('What genre of music do you listen to while you do the previously mentioned activity? ', (music) => {
      rl.question('What is your favourite meal (eg. breakfast, lunch, or dinner)? ', (meal) => {
        rl.question('Which sport is your absolute favourite? ', (sport) => {
          rl.question('What is your superpower? In a few words tell us what you are amazing at! ', (superpower) => {
            rl.close();
            console.log(`Hello internet! My name is ${name} and I absolutely love ${activity}! When I'm enjoying ${activity} I'm 100% listening to ${music}, ${music} gets me pumped! I should also let everyone know that my favourite meal is ${meal}. I absolutely never miss ${meal}. My favourite sport is ${sport} and my superpower is ${superpower}.`);
          });
        });
      });
    });
  });
});




