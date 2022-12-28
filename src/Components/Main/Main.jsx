import React from 'react';

function HeroSection() {
	return (
		<div id="hero" className="flex items-center justify-center flex-col py-20 ">
		<div className="text-center">
		<h1 className="text-8xl font-thin tracking-wider opacity-50 dark:text-indigo-400 " style={{textShadow:"0px 7px 10px #ba00ff"}}>
				MY PORTOFOLIO</h1>
				<h1 className="text-1xl md:text-1xl mb-1 md:mb-3 font-mono tracking-wider dark:text-indigo-400 ">
					Hi, It's Abuzaid
				</h1>

			</div>
		</div>
	);
}

export default HeroSection;
