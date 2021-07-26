// 명언 10개 준비하기!
const quotes = [
    {
        quote: "If I have seen further it is by standing on the shoulders of Giants.",
        author: "Isaac Newton"
    },
    {
        quote: "In the field of observation, chance favors only the prepared mind.",
        author: "Louis Pasteur"
    },
    {
        quote: "I'm only one, still I am one. I can not do everything, still I can do something. I will not refuse to do the something I can do.",
        author: "Helen Keller"
    },
    {
        quote: "To laugh at yourself is to love yourself.",
        author: "Mickey Mouse"
    },
    {
        quote: "You cannot be happy everyday, but there are happy things everyday.",
        author: "Pooh"
    },
    {
        quote: "Cambiar el mundo, amigo Sancho, no es ni utopía ni locura, es justicia.",
        author: "Don Quixote"
    },
    {
        quote: "It's not whether you get knocked, It's whether you get back up.",
        author: "Vince Lombardi"
    },
    {
        quote: "They say that time changes things, but you actually have to change them yourself.",
        author: "Andy Warhol"
    },
    {
        quote: "If you would win a man to your cause, First convince him that you are his sincere friend.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Patience is bitter, but its fruit is sweet.",
        author: "Aristoteles"
    }
];

// first-child = 첫번째, span을 가져온다.
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

// Math.round(); 반올림
// Math.ceil(); 올림
// Math.floor(); 내림