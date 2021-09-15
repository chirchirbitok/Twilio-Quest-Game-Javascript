function mutate(shippingItems)
{
  let mutatedItems = [];

  shippingItems.forEach(function(item)
  {
    mutatedItems.push(item.toUpperCase());
  })
  return mutatedItems;
}

const cargo = ['apples', 'ray guns', 'oranges'];
const mutatedCargo = mutate(cargo);

console.log("The results of mutated item is" + mutatedCargo);