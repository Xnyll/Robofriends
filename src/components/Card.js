import React from 'react';

const Card = ({ name, email, id }) => {
	//const { name, email, id } = props; destructured once and then again with this replacing the props line above
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> {/*TACHYON LIBRARY USED FOR STYLING */}
			<img alt='robots' src={`https://robohash.org/${id}test?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;