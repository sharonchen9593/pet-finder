import React from 'react';

export default class NewEntry extends React.Component {
  render() {
    return (
      <div className="page newentry">
        <h1>Lost and Found</h1>

        <div className="entrytype">
        <div className="lost">

        <i className="fa fa-search fa-5x" aria-hidden="true"></i><br/>
        <h2>
        Lost
        </h2>
        </div>
        <div className="found">

        <i className="fa fa-paw fa-5x" aria-hidden="true"></i><br/>
        <h2>
        Found
        </h2>
        </div>
        </div>

        <br/>
        <form>
          <label>Email: </label>
          <br />

          <input type="email" name="email" required/>
          <br />

          <label>Phone Number: </label>
          <br />

          <input type="text" name="phoneNumber" />
          <br />

          <label>Image:</label>
          <br />

          <input type="email" name="imageStr" />
          <br />

          <label>Location:</label>
          <br />

          <input type="text" name="location" placeholder="Ex: San Francisco, CA" required/>
          <br />

          <label>Pet Name:</label>
          <br />

          <input type="text" name="petName" placeholder="Ex: Fluffy" required/>
          <br />

          <label>Date Lost or Found:</label>
          <br />

          <input type="date" name="dateLostOrFound" required/>
          <br />

          <label>Animal Type:</label>
          <br />

          <input type="text" name="animal" placeholder="Ex: Dog" required/>
          <br />

          <label>Breed:</label>
          <br />

          <input type="text" name="breed" placeholder="Ex: Husky" required/>
          <br />

          <label>Description:</label>
          <br />

          <textarea rows="4" cols="50" name="description" placeholder="Ex: Grey and White. 60 pounds. Last seen at the park chasing a squirrel." required>
          </textarea>
          <br/>
          <button type="submit">Submit</button>
        </form>


      </div>
    )
  }

}