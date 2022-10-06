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
      return <td></td>;
    }
  };

  const editItem = (e) => {
    const el = e.target.parentNode;
    const id = el.dataset.itemId;
    props.editFunc(id);
  };

  const deleteItem = (e) => {
    const el = e.target.parentNode;
    const id = el.dataset.itemId;

    // callback function to delete item from data
    props.deleteFunc(id);
  };

  return (
    <tr id={props.id}>
      <td>{props.bookTitle}</td>
      <td>{props.bookGenre}</td>
      <td>
        {props.authorFirstName} {props.authorLastName}
      </td>
      <td>{props.publisherName}</td>
      {renderPublisherAddress()}
      <td data-item-id={props.id}>
        <button
          aria-label="Edit item"
          className="btn btn-edit"
          onClick={editItem}
        >
          Edit
        </button>
        <button
          aria-label="Remove item"
          className="btn btn-remove"
          onClick={deleteItem}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default LibraryItemRow;
