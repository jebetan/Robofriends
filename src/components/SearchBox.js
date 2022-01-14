import React from 'react';
import './SearchBox.css';

function SearchBox({searchfield, searchChange}) {
	return (
		<section className='pa2'>
			<h1 className='f1'>Robofriends</h1>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='Search Robots'
				onChange={searchChange}
			/>
		</section>
	);
}

export default SearchBox;