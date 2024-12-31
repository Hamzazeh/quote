
const text = document.getElementById("text")
const counter = document.getElementById("counter")
const btn = document.getElementById("btn")
const reset = document.getElementById("reset")
// const aray = ["h1", "h2", "h3", "h4"]

const aray = [
	"The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
	"The way to get started is to quit talking and begin doing. - Walt Disney",
	"Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
	"If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
	"If you look at what you have in life, you'll always have more. - Oprah Winfrey",
	"Life is what happens when you're busy making other plans. - John Lennon",
	"Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
	"The purpose of our lives is to be happy. - Dalai Lama",
	"In the middle of every difficulty lies opportunity. - Albert Einstein",
	"Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
	"It does not matter how slowly you go as long as you do not stop. - Confucius",
	"Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
	"What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
	"The best way to predict the future is to create it. - Peter Drucker",
	"You miss 100% of the shots you don’t take. - Wayne Gretzky"
]

let num = 0
let rand_item = "Quote :"


text.textContent = rand_item
counter.textContent = `Number: ${num}`

btn.onclick = function(){
	rand_item = aray[Math.floor(Math.random()* aray.length)]
	num++
	text.textContent = rand_item
	counter.textContent = `Number: ${num}`
}

reset.onclick = function(){
	rand_item = "Quote :"
	num = 0
	text.textContent = rand_item
	counter.textContent = `Number: ${num}`
}










