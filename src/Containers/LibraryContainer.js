import { useState, useEffect } from "react";
import LibraryItemRow from "../Components/LibraryItemRow";
import LibraryItemData from "../mock-data/libraryitems.json";

const LibraryContainer = () => {
  const [libraryItems, setLibraryItems] = useState([]);

  useEffect(() => {
    getLibraryItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function getLibraryItems() {
    // mockup api call to get all library items
    // const res = await fetch(`http://mockupurl/libraryItems`);
    // const json = await res.json();
    // setLibraryItems(json.items);

    setLibraryItems(LibraryItemData);
  }

  const renderLibraryItems = () => {
    return libraryItems.map((item) => (
      <LibraryItemRow key={item.id} delete={deleteItem} {...item} />
    ));
  };

  const deleteItem = (id) => {
    // mock api call to delete item
    // fetch(`http://mockupurl/libraryItems/${id}`, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // })
    //   .then((resp) => resp.json())

    // update rendered list without item
    const filteredArr = libraryItems.filter((item) => item.id !== id);
    setLibraryItems(filteredArr);
  };

  return (
    <section className="library-container">
      {libraryItems === [] ? "Please wait while library items load..." : null}

      {libraryItems !== [] ? (
        <table>
          <thead>
            <tr>
              <td>Book Title</td>
              <td>Book Genre</td>
              <td>Author</td>
              <td>Publisher</td>
              <td>Publisher Address</td>
              <td></td>
            </tr>
          </thead>
          <tbody>{renderLibraryItems()}</tbody>
        </table>
      ) : null}
    </section>
  );
};

export default LibraryContainer;
