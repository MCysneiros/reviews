import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
	const [currentReview, setCurrentReview] = useState(0);
	const { name, jog, image, text } = people[currentReview];

	const nextPerson = () => {
		setCurrentReview(index => {
			let newIndex = index + 1;
			return newIndex >= people.length ? 0 : newIndex;
		});
	};

	const prevPerson = () => {
		setCurrentReview(index => {
			let newIndex = index - 1;
			return newIndex < 0 ? people.length - 1 : newIndex;
		});
	};

	const randomPerson = () => {
		let randomNumber = Math.floor(Math.random() * people.length);

		if (randomNumber === currentReview) {
			randomPerson();
		}

		setCurrentReview(randomNumber);
	};

	return (
		<article className='review'>
			<div className='img-container'>
				<img src={image} alt={name} className='person-img' />
				<span className='quote-icon'>
					<FaQuoteRight />
				</span>
			</div>
			<h4 className='author'>{name}</h4>
			<p className='job'>{jog}</p>
			<p className='info'>{text}</p>
			<div className='button-container'>
				<button className='prev-btn' onClick={prevPerson}>
					<FaChevronLeft />
				</button>
				<button className='next-btn' onClick={nextPerson}>
					<FaChevronRight />
				</button>
			</div>
			<button className='random-btn' onClick={randomPerson}>
				surprise me
			</button>
		</article>
	);
};

export default Review;
