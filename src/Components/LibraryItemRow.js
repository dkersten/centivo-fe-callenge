const LibraryItemRow = (props) => {
  const renderPublisherAddress = () => {
    if (props.publisherAddress !== null) {
      return (
        <td>
          <span>{props.publisherAddress.street}</span>
          <br />
          <span>
            {props.publisherAddress.cityOrTown}, {props.publisherAddress.state}{" "}
            {props.publisherAddress.postalCode}
          </span>
        </td>
      );
    } else {
      return null;
    }
  };

  const renderGenres = () => {
    if (props.bookGenre) {
      return props.bookGenre.map((genre) => <span key={genre}>{genre}</span>);
    } else {
      return null;
    }
  };

  return (
    <tr id={props.id}>
      <td>{props.bookTitle}</td>
      <td>{renderGenres()}</td>
      <td>
        {props.authorFirstName} {props.authorLastName}
      </td>
      <td>{props.publisherName}</td>
      {renderPublisherAddress()}
    </tr>
  );
};

export default LibraryItemRow;
