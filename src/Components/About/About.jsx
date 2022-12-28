import React from 'react';
import myImg from '../Images/hero.jpg'
import SectionTitle from '../SectionTitle/SectionTitle'

function About() {
	return (
		<div className='w-4/6 fixed mx-auto' >
			<div className="flex flex-col md:flex-row items-center font-mono justify-center gap-10 md:gap-20 py-12  text-gray-600 dark:text-indigo-400 ">
				<div className="md:w-6/12">
					<SectionTitle>About Me</SectionTitle>
					<p className="text-md text-gray-700 dark:text-gray-400 font-mono border-solid border-2" >
						I'm a 22 year old student studying Information Systems. I'm passionate about web development and design, and am always looking for new ways to expand my knowledge and skillset in the tech world. I'm excited to see how technology can be used to create solutions to everyday problems and to create experiences that make life more enjoyable.
					</p>

				</div>

				<img 
					src={myImg}
					alt="Cat Coding"
					className="md:w-6/12 rounded-lg object-cover opacity-80"
				/>
			</div>
		</div>
	);
}

export default About;
