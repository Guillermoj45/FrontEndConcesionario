export class Vehicle {
  id?: number;
  model: string;
  year: Date;
  price: number;
  image: string;
  brand: string;
  status: string;

  constructor(id: number, model: string, year: Date, price: number, image: string, brand: string, status: string) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.price = price;
    this.image = image;
    this.brand = brand;
    this.status = status;
  }
}
