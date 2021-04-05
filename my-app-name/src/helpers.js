function choice(items) {
  let index = (Math.floor(Math.random() * items.length));
  return items[index];
}

function remove(items, item) {

  let indOfItem = items.indexOf(item);
  if (indOfItem < 0) {
    return;
  } else {
    return items.splice(indOfItem, 1);
  }

}

export {choice, remove}