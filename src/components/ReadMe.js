import React, { useState } from 'react';
import BookModel from './BookModel';
import Filter from './Filter';
import BookList from './BookList';
import BookAddForm from './BookAddForm';

function ReadMe(props) {
	const [books, setBooks] = useState([]);
	const [filter, setFilter] = useState('');

	const handleFilter = value => {
		setFilter(value);
	}

	const handleAdd = book => { setBooks(prevBooks => [...prevBooks, book]); }
	const handleDone = id => {
		setBooks(prevBooks => prevBooks.map(bookItem => bookItem.id === id ? new BookModel(bookItem.id, bookItem.name, !bookItem.read) : bookItem));
	}
	const handleRemove = id => {
		setBooks(prevBooks => prevBooks.filter(bookItem => bookItem.id !== id));
	}
	const filtered = books.filter(
		bookItem => bookItem.name.toLowerCase().includes(filter.trim().toLowerCase())
	);


	return (
		<React.Fragment>
			<Filter onFilter={handleFilter} filter={filter} />
			<BookList books={filtered} onRemove={handleRemove} onDone={handleDone} />
			<BookAddForm onAdd={handleAdd} />
		</React.Fragment>
	)
}

export default ReadMe;