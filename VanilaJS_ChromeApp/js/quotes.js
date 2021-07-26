// 명언 10개 준비하기!
const quotes = [
    {
        quote: "Hello1",
        author: "It's me"
    },
    {
        quote: "Hello2",
        author: "It's me"
    },
    {
        quote: "Hello3",
        author: "It's me"
    },
    {
        quote: "Hello4",
        author: "It's me"
    },
    {
        quote: "Hello5",
        author: "It's me"
    },
    {
        quote: "Hello6",
        author: "It's me"
    },
    {
        quote: "Hello7",
        author: "It's me"
    },
    {
        quote: "Hello8",
        author: "It's me"
    },
    {
        quote: "Hello9",
        author: "It's me"
    },
    {
        quote: "Hello10",
        author: "It's me"
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