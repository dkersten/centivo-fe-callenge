import { useState, useEffect } from "react";
import LibraryItemRow from "../Components/LibraryItemRow";
import LibraryItemData from "../mock-data/libraryitems.json";

const LibraryContainer = () => {
  const [libraryItems, setLibraryItems] = useState([]);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    // const res = await fetch(`http://mockupurl/petslibraryItems`);
    // const json = await res.json();
    // setLibraryItems(json.items);

    setLibraryItems(LibraryItemData);
  }

  const renderLibraryItems = () => {
    return libraryItems.map((item) => (
      <LibraryItemRow key={item.id} {...item} />
    ));
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
            </tr>
          </thead>
          <tbody>{renderLibraryItems()}</tbody>
        </table>
      ) : null}
    </section>
  );
};

export default LibraryContainer;
