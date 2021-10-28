import React from 'react';

const Scroll = (props) => { //Automatically every component in React has a property 'Children' This has CardList as it wraps it in App.js
	return (
		<div style={{overflowY: 'scroll', height: '1000px'}}> {/* {} is a Javascript expression, another {} as its returning an object, where you can use css styles but in camelCase */}
			{props.children}
		</div>
	);
};

export default Scroll;