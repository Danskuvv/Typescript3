// TODO: Write interface Item
interface Item {
  name: string;
  price: number;
  quantity: number;
}

// Create an empty array named 'cart' to store the items
const cart: Item[] = [];

// Function to prompt the user until they provide a non-empty string

// TODO: Implement a loop to prompt the user for item details
// Use 'while' loop to keep prompting until an empty item name is entered
while (true) {
  // TODO: Prompt user for item name, price, and quantity
  const itemName: string | null = prompt("Enter item name:");

  // Break the loop if an empty item name is entered
  if (itemName === null || itemName === "") {
    break;
  }

  const itemPrice: number = parseFloat(prompt("Enter item price:") || "0");
  const itemQuantity: number = parseFloat(prompt("Enter item quantity:") || "0");

  // Create an item object and add it to the 'cart' array
  const newItem: Item = { name: itemName, price: itemPrice, quantity: itemQuantity };
  cart.push(newItem);
}

// Calculate the total cost using the 'map' and 'reduce' functions
const totalCost = cart.map(item => item.price * item.quantity).reduce((sum, cost) => sum + cost, 0);

// Display the total cost to the user
console.log(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);
