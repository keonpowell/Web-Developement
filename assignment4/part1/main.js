// Step 1
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// Step 2
storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`;

insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// Step 3
randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    // TODO: Use .replace to replace the placeholders 'insertx', 'inserty', and 'insertz' with xItem, yItem, and zItem

    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300 * 0.071429) + ' stone';
        const temperature = Math.round((94 - 32) * 5/9) + ' centigrade';
        newStory = newStory.replace('94 fahrenheit', temperature);
        // replace '300 pounds' with conversion of 'weight'
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}