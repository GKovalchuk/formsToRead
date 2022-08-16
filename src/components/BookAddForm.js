import React, { useState } from 'react';
import BookModel from './BookModel';
import { nanoid } from 'nanoid';

function BookAddForm(props) {
	const { onAdd } = props;
	const [form, setForm] = useState({ name: '' });
	const handleChange = evt => {
		const { name, value } = evt.target;
		setForm(prevForm => ({ ...prevForm, [name]: value }));
	}
	const handleSubmit = evt => {
		evt.preventDefault();
		const book = new BookModel(nanoid(), form.name);
		onAdd(book);
		setForm({ name: '' });
	}

	return (
		<form onSubmit={handleSubmit}>
			<input name="name" value={form.name} onChange={handleChange} placeholder="Add new book" />
		</form>
	);
}
export default BookAddForm;