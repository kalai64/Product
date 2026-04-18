import controller from "@/controllers/productController";

export async function GET(req, { params }) {
  const { id } = await params;
  const data = await controller.getProductById(id);
  return Response.json(data);
}

export async function PUT(req, { params }) {
  const { id } = await params;
  const body = await req.json();
  const data = await controller.updateProduct(id, body);
  return Response.json(data);
}

export async function DELETE(req, { params }) {
  const { id } = await params;
  const data = await controller.deleteProduct(id);
  return Response.json(data);
}