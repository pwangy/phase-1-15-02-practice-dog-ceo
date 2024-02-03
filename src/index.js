const imageContainer = document.querySelector('#dog-image-container')
const breedsUl = document.getElementById('dog-breeds')

const renderImage = (imageUrl) => {
	const image = document.createElement('img')
	image.setAttribute('src', imageUrl) // image.src = imageUrl also works
	image.setAttribute('alt', 'dog image')
	image.setAttribute('class', 'dog-image')
	imageContainer.appendChild(image)
}

const fetchImages = () => {
	const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'

	fetch(imgUrl)
	.then(res => res.json())
	.then(imgData => imgData.message.forEach(url => renderImage(url)))
	.catch(err => console.error(err))
}

const listBreed = (breedName) => {
	const createLi = document.createElement('li')
	createLi.innerText = breedName
	breedsUl.appendChild(createLi)
}

const fetchBreeds = () => {
	const breedUrl = 'https://dog.ceo/api/breeds/list/all'

	fetch(breedUrl)
    .then(res => res.json())
    .then(breedObj => {
        const breedsArray = Object.keys(breedObj.message)
        breedsArray.forEach((breed) => listBreed(breed))
    })
    .catch(err => console.error(err))
}

document.addEventListener('DOMContentLoaded', function () {
	fetchImages()
    fetchBreeds()
})
