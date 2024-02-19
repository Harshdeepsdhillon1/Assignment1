const part1Array = ['Mom', 'Dog', 'Dad', 'Cat'];
const part2Array = ['sat on', 'danced with', 'ate', 'saw'];
const part3Array = ['a funny', 'a scary', 'a fat', 'a barking'];
const part4Array = ['a goat', 'a fish', 'a monkey', 'frog'];
const part5Array = ['on the chair', 'on the moon', 'on the grass', 'in my soup'];


const part1 = document.getElementById('part1');
const part2 = document.getElementById('part2');
const part3 = document.getElementById('part3');
const part4 = document.getElementById('part4');
const part5 = document.getElementById('part5');
const viewStory = document.getElementById('view-story');
const storyOutput = document.getElementById('story-output');
const randomStory = document.getElementById('random-story');
const resetStory = document.getElementById('reset-story');

let story = [];

function updateStory(part, array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    part.textContent = array[randomIndex];
    story[part.id] = array[randomIndex];
}

function viewStoryOutput() {
    const storySentence = story.join(' ');
    storyOutput.textContent = storySentence;
    
}

function resetStoryArray() {
    story = [];
    part1.textContent = 'Part 1';
    part2.textContent = 'Part 2';
    part3.textContent = 'Part 3';
    part4.textContent = 'Part 4';
    part5.textContent = 'Part 5';
}

part1.addEventListener('click', () => updateStory(part1, part1Array));
part2.addEventListener('click', () => updateStory(part2, part2Array));
part3.addEventListener('click', () => updateStory(part3, part3Array));
part4.addEventListener('click', () => updateStory(part4, part4Array));
part5.addEventListener('click', () => updateStory(part5, part5Array));

viewStory.addEventListener('click', viewStoryOutput);
randomStory.addEventListener('click', () => {
    updateStory(part1, part1Array);
    updateStory(part2, part2Array);
    updateStory(part3, part3Array);
    updateStory(part4, part4Array);
    updateStory(part5, part5Array);
    viewStoryOutput();
});

resetStory.addEventListener('click', resetStoryArray);