import mangoBloomImg from "../assets/images/mango bloom.png";
import peanutButterHoneyImg from "../assets/images/peanut butter honey.png";
import coffeeWalnutImg from "../assets/images/coffee walnut.png";

export const products = [
  { id: 1, type: "Seasonal", name: "Mango Bloom", description: "Fresh tropical mango blended into sweet creamy perfection.", image: mangoBloomImg, variant: "mango", wide: false },
  { id: 2, type: "Chef's Choice", name: "Peanut Butter Honey", description: "Roasted peanut butter swirled with organic honey.", image: peanutButterHoneyImg, variant: "cocoa", wide: true },
  { id: 3, type: "Signature", name: "Coffee Walnut", description: "Rich espresso infused with crunchy toasted walnuts.", image: coffeeWalnutImg, variant: "berry", wide: false }
];
