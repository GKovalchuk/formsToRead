import React from 'react';

function BookItem(props) {
	const { book, onRemove: handleRemove, onDone: handleDone } = props;

	return (
		<li key={book.id}>
			<p className='bookItem-title'>{book.read && 'check'} {book.name}</p>
			<button onClick={() => handleDone(book.id)}> Done!</button>
			<button onClick={() => handleRemove(book.id)}>Remove</button>
		</li >

	);
}
export default BookItem;