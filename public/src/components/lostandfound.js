import React from 'react';

export default class LostAndFound extends React.Component {
	render() {
		return (
			<div className="page">
			<h1>Lost and Found</h1>
      <form>
        <label>Email: </label>
        <input type="email" placeholder="" />
        <label>Phone Number: </label>
        <input type="email" placeholder="" />
        <label>Lost:</label>
        <input type="email" placeholder="" />
        <label>Found:</label>
        <input type="email" placeholder="" />
        <label>Image:</label>
        <input type="email" placeholder="" />
        <label>Pet Name:</label>
        <input type="text" placeholder="" />
        <label>Date Lost or Found:</label>
        <input type="date" placeholder="" / >
        <label>Animal Type:</label>
        <input type="text" placeholder="" />
        <label>Breed:</label>
        <input type="text" placeholder="" />
        <label>Description:</label>
        <input type="text" placeholder="" />
      </form>
			</div>
		)
	}

}