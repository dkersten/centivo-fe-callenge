import { useState, useEffect } from "react";

const LibraryItemForm = (props) => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [authorFirstName, setAuthorFirstName] = useState("");
  const [authorLastName, setAuthorLastName] = useState("");
  const [publisherName, setPublisherName] = useState("");
  const [publisherStreet, setPublisherStreet] = useState("");
  const [publisherCity, setPublisherCity] = useState("");
  const [publisherState, setPublisherState] = useState("");
  const [publisherPostalCode, setPublisherPostalCode] = useState("");

  //   populate form with item that needs to be edited
  useEffect(() => {
    if (props.itemToUpdate !== null) {
      setBookTitle(props.itemToUpdate.bookTitle);
      setBookGenre(props.itemToUpdate.bookGenre);
      setAuthorFirstName(props.itemToUpdate.authorFirstName);
      setAuthorLastName(props.itemToUpdate.authorLastName);
      setPublisherName(props.itemToUpdate.publisherName);
      setPublisherStreet(props.itemToUpdate.publisherAddress.street);
      setPublisherCity(props.itemToUpdate.publisherAddress.cityOrTown);
      setPublisherState(props.itemToUpdate.publisherAddress.state);
      setPublisherPostalCode(props.itemToUpdate.publisherAddress.postalCode);
    }
  }, [props.itemToUpdate]);

  //   on form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = bookTitle === "" ? null : bookTitle;
    const genre = bookGenre === [] ? null : bookGenre;
    const authFirstName = authorFirstName === "" ? null : authorFirstName;
    const authLastName = authorLastName === "" ? null : authorLastName;
    const pubName = publisherName === "" ? null : publisherName;
    const pubStreet = publisherStreet === "" ? null : publisherStreet;
    const pubCity = publisherCity === "" ? null : publisherCity;
    const pubState = publisherState === "" ? null : publisherState;
    const pubPostal = publisherPostalCode === "" ? null : publisherPostalCode;

    const randomNum = () => {
      let randNum = Math.floor(1000 + Math.random() * 9000);
      return randNum;
    };

    // build id
    let bookId;
    let authId;
    let pubId;

    if (title !== null && genre !== null) {
      bookId = `b${randomNum()}`;
    } else {
      bookId = "";
    }

    if (authFirstName !== null && authLastName !== null) {
      authId = `a${randomNum()}`;
    } else {
      authId = "";
    }

    if (
      pubName !== null &&
      pubStreet !== null &&
      pubCity !== null &&
      pubState !== null &&
      pubPostal !== null
    ) {
      pubId = `p${randomNum()}`;
    } else {
      pubId = "";
    }

    let completeId = `${bookId}${authId}${pubId}`;

    // build up date
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDay();
    let date = `${year}-${month}-${day}`;

    const itemObj = {
      id: completeId,
      createdAt: date,
      bookTitle: title,
      bookGenre: genre,
      authorFirstName: authFirstName,
      authorLastName: authLastName,
      publisherName: pubName,
      publisherAddress: {
        street: pubStreet,
        cityOrTown: pubCity,
        state: pubState,
        postalCode: pubPostal,
      },
    };

    // conditional to check if this is new item or edited item
    if (props.itemToUpdate === null) {
      // mockup call to api to add new record
      //     fetch("http://mockupurl/libraryItems/", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //       Accept: "application/json",
      //     },
      //     body: JSON.stringify(itemObj),
      //   })
      props.addFunc(itemObj);
    } else {
      itemObj.id = props.itemToUpdate.id;
      itemObj.createdAt = props.itemToUpdate.createdAt;
      // mockup call to api to add new record
      //     fetch(`http://mockupurl/libraryItems/${itemObj.id}`, {
      //     method: "PATCH",
      //     headers: {
      //       "Content-Type": "application/json",
      //       Accept: "application/json",
      //     },
      //     body: JSON.stringify(itemObj),
      //   })
      props.updateLibraryFunc(itemObj);
    }

    setBookTitle("");
    setBookGenre("");
    setAuthorFirstName("");
    setAuthorLastName("");
    setPublisherName("");
    setPublisherStreet("");
    setPublisherCity("");
    setPublisherState("");
    setPublisherPostalCode("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="book-title">
          <div>Book Title:</div>
          <input
            type="text"
            name="book-title"
            id="book-title"
            placeholder="Book Title"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
          />
        </label>
        <label htmlFor="book-genre">
          <div>Book Genre:</div>
          <input
            type="text"
            name="book-genre"
            id="book-genre"
            placeholder="Book Genre"
            value={bookGenre}
            onChange={(e) => setBookGenre(e.target.value)}
          />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="author-first-name">
          <div>Author First Name:</div>
          <input
            type="text"
            name="author-first-name"
            id="author-first-name"
            placeholder="Author First Name"
            value={authorFirstName}
            onChange={(e) => setAuthorFirstName(e.target.value)}
          />
        </label>
        <label htmlFor="author-last-name">
          <div>Author Last Name:</div>
          <input
            type="text"
            name="author-last-name"
            id="author-last-name"
            placeholder="Author Last Name"
            value={authorLastName}
            onChange={(e) => setAuthorLastName(e.target.value)}
          />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="Publisher Name">
          <div>Publisher Name:</div>
          <input
            type="text"
            name="publisher-name"
            id="publisher-name"
            placeholder="Publisher Name"
            value={publisherName}
            onChange={(e) => setPublisherName(e.target.value)}
          />
        </label>
        <div>Publisher Address:</div>
        <label htmlFor="publisher-street">
          <div>Street:</div>
          <input
            type="text"
            name="publisher-street"
            id="publisher-street"
            placeholder="Street"
            value={publisherStreet}
            onChange={(e) => setPublisherStreet(e.target.value)}
          />
        </label>
        <label htmlFor="publisher-city">
          <div>City:</div>
          <input
            type="text"
            name="publisher-city"
            id="publisher-city"
            placeholder="City/State"
            value={publisherCity}
            onChange={(e) => setPublisherCity(e.target.value)}
          />
        </label>
        <label htmlFor="publisher-state">
          <div>State:</div>
          <input
            type="text"
            name="publisher-state"
            id="publisher-state"
            placeholder="State"
            value={publisherState}
            onChange={(e) => setPublisherState(e.target.value)}
          />
        </label>
        <label htmlFor="publisher-postal-code">
          <div>Postal Code:</div>
          <input
            type="text"
            name="publisher-postal-code"
            id="publisher-postal-code"
            placeholder="Postal Code"
            value={publisherPostalCode}
            onChange={(e) => setPublisherPostalCode(e.target.value)}
          />
        </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LibraryItemForm;
