export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some of your items in packaging list 🚀</em>
      </footer>
    );
  }
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage !== 100
          ? `👜You have ${numItems} items on your list, and you have packed
        ${packedItems}(${percentage}%)`
          : `You got everything! Ready to go ✈️`}
      </em>
    </footer>
  );
}
