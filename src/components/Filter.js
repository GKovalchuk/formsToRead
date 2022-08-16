import React from 'react';

function Filter(props) {

	const handleFilter = evt => {
		const { value } = evt.target;
		props.onFilter(value);
	}

	return (
		<div>
			<input type="search" value={props.filter} onChange={handleFilter} placeholder="Find а book" />
		</div>
	);
}
export default Filter;