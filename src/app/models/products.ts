export class Product{
  _id?: string;
  name: string="";
  price: number=0;
  stock: number=0;
  image: File | null = null;
  description: string="";
  category: number=0;
  user_id: string="";
}
