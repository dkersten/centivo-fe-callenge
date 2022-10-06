import { useState, useEffect } from "react";
import LibraryItemForm from "../Components/LibraryItemForm";
import LibraryItemRow from "../Components/LibraryItemRow";
import LibraryItemData from "../mock-data/libraryitems.json";

const LibraryContainer = () => {
  const [libraryItems, setLibraryItems] = useState([]);
  const [itemToUpdate, setItemToUpdate] = useState(null);

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
    if (libraryItems !== []) {
      return libraryItems.map((item) => (
        <LibraryItemRow
          key={item.id}
          deleteFunc={deleteItem}
          editFunc={editItem}
          {...item}
        />
      ));
    }
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

  const editItem = (id) => {
    const itemObj = libraryItems.filter((item) => item.id === id);
    setItemToUpdate(itemObj[0]);
  };

  const updateLibrary = (itemObj) => {
    //   get index of item in library and update it with edited info
    const index = libraryItems.findIndex((object) => {
      return object.id === itemObj.id;
    });
    const updatedLibrary = [...libraryItems];
    updatedLibrary[index] = itemObj;
    setLibraryItems(updatedLibrary);
    setItemToUpdate(null);
  };

  const addItem = (itemObj) => {
    const updatedArr = [...libraryItems, itemObj];
    setLibraryItems(updatedArr);
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
      <LibraryItemForm
        addFunc={addItem}
        itemToUpdate={itemToUpdate}
        updateLibraryFunc={updateLibrary}
      />
    </section>
  );
};

export default LibraryContainer;
