import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { NextResponse } from 'next/server';

const PDF_DIR = path.join(process.cwd(), 'public', 'pdfs');

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ filename: string }> },
) {
  const { filename } = await params;

  // Only allow a bare "<name>.pdf" — no slashes, no traversal segments.
  if (!/^[a-zA-Z0-9._-]+\.pdf$/.test(filename) || filename.includes('..')) {
    return new NextResponse('Not found', { status: 404 });
  }

  const filePath = path.join(PDF_DIR, filename);

  // Ensure the resolved path stays inside the PDF directory.
  if (!filePath.startsWith(PDF_DIR + path.sep)) {
    return new NextResponse('Not found', { status: 404 });
  }

  try {
    const file = await readFile(filePath);
    return new NextResponse(new Uint8Array(file), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        // Force INLINE viewing (overrides any static forced-download behavior).
        'Content-Disposition': `inline; filename="${filename}"`,
        'Content-Length': String(file.byteLength),
        'Cache-Control': 'public, max-age=3600, must-revalidate',
      },
    });
  } catch {
    return new NextResponse('Not found', { status: 404 });
  }
}
