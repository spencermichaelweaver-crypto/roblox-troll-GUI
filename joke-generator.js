const jokeGenerator = async () => {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        console.log(`Joke: ${data.setup} - ${data.punchline}`);
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
};

jokeGenerator();