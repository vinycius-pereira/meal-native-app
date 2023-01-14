export default function mealPrice(affordability) {
  if (affordability === "luxurious") {
    return "$$$";
  } else if (affordability === "pricey") {
    return "$$";
  } else {
    return "$";
  }
}
