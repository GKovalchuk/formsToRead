import React from 'react';
import BookItem from './BookItem'

function BookList(props) {
	const { books, onRemove: handleRemove, onDone: handleDone } = props;

	return (
		<ul>
			{books.map(bookItem => <BookItem key={bookItem.id} book={bookItem} onRemove={handleRemove} onDone={handleDone} />)}
		</ul>

	);
}
export default BookList;