import { useState } from "react";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats.js";
import Logo from "./components/Logo";
export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(item) {
    setItems((items) => items.filter((val) => val.id !== item.id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((val) =>
        val.id === id ? { ...val, packed: !val.packed } : val
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure want to delete all items in the list?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
