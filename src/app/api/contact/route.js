import clientPromise from '@/lib/mongo';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    const client = await clientPromise;
    const db = client.db(); // default from URI

    const result = await db.collection('contacts').insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    return Response.json({ success: true, insertedId: result.insertedId });
  } catch (err) {
    console.error('API error:', err);
    return Response.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
