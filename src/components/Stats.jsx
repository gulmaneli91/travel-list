function Stats({ items }) {
  if (!items.length)
    return (<p className="stats">
      <em>Start adding some items to your packing list</em>
    </p>);
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercentage = Math.round(numPacked / numItems * 100);
  return (
    <footer className="stats">
      <em>
        {numPercentage === 100 ? 'You got everithing! Ready to go' : `
         You have ${numItems} items on your list, and you alread packed ${numPacked} (${numPercentage}%) `} </em>
    </footer>
  );
}

export default Stats();
