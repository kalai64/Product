import controller from "@/controllers/productController";

export async function GET() {
  const data = await controller.getProducts();
  return Response.json(data);
}

export async function POST(req) {
  const body = await req.json();
  const data = await controller.addProduct(body);
  return Response.json(data);
}