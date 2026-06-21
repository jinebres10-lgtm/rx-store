import { NextRequest, NextResponse } from "next/server";

// POST /api/mercadopago — Crear preferencia de pago
// TODO: Instalar mercadopago SDK: npm install mercadopago
// TODO: Configurar MERCADOPAGO_ACCESS_TOKEN en .env

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items, payer } = body;

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "No items provided" },
        { status: 400 }
      );
    }

    // Cuando se configure MercadoPago, descomentar:
    /*
    const { MercadoPagoConfig, Preference } = await import("mercadopago");

    const client = new MercadoPagoConfig({
      accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
    });

    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: items.map((item: any) => ({
          title: item.title,
          quantity: item.quantity,
          unit_price: item.unit_price,
          currency_id: "COP",
        })),
        payer: {
          name: payer.name,
          email: payer.email,
          phone: { number: payer.phone },
        },
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout?status=success`,
          failure: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout?status=failure`,
          pending: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout?status=pending`,
        },
        auto_return: "approved",
      },
    });

    return NextResponse.json({
      id: result.id,
      init_point: result.init_point,
    });
    */

    return NextResponse.json({
      message:
        "MercadoPago no está configurado aún. Configura MERCADOPAGO_ACCESS_TOKEN en .env",
      status: "pending_setup",
    });
  } catch (error) {
    console.error("MercadoPago error:", error);
    return NextResponse.json(
      { error: "Error creating payment preference" },
      { status: 500 }
    );
  }
}
