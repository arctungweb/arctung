import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const W = 1200;
const H = 630;

const overlay = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="veil" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#0d0f12" stop-opacity="0.97"/>
      <stop offset="0.52" stop-color="#0d0f12" stop-opacity="0.88"/>
      <stop offset="1" stop-color="#0d0f12" stop-opacity="0.30"/>
    </linearGradient>
    <linearGradient id="bottom" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#0d0f12" stop-opacity="0"/>
      <stop offset="1" stop-color="#0d0f12" stop-opacity="0.75"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#veil)"/>
  <rect y="${H - 140}" width="${W}" height="140" fill="url(#bottom)"/>

  <!-- logo mark -->
  <g transform="translate(72,64)">
    <circle cx="22" cy="22" r="15" fill="none" stroke="#e08a4f" stroke-width="3.6"/>
    <circle cx="22" cy="22" r="4.6" fill="none" stroke="#bab7b1" stroke-width="2.8"/>
    <rect x="20.2" y="0" width="3.6" height="8" rx="1" fill="#cf7136"/>
    <text x="56" y="32" font-family="Arial, sans-serif" font-size="27" font-weight="bold" fill="#ecebe8">Arc</text>
    <text x="114" y="32" font-family="Arial, sans-serif" font-size="27" font-weight="bold" fill="#e08a4f">Tung</text>
  </g>

  <!-- headline -->
  <text x="72" y="270" font-family="Arial, sans-serif" font-size="62" font-weight="bold" fill="#f5f4f2">Tungsten-Copper</text>
  <text x="72" y="344" font-family="Arial, sans-serif" font-size="62" font-weight="bold" fill="#e08a4f">Electrode Wheels</text>

  <!-- divider -->
  <rect x="74" y="392" width="72" height="3" fill="#cf7136"/>

  <!-- value props -->
  <text x="72" y="446" font-family="Arial, sans-serif" font-size="27" font-weight="bold" fill="#bab7b1">No MOQ&#160;&#160;&#183;&#160;&#160;10&#8211;14 Day Lead Time&#160;&#160;&#183;&#160;&#160;Factory-Direct</text>

  <text x="72" y="500" font-family="Arial, sans-serif" font-size="22" fill="#b8b8b8">W/Cu 75/25 &#183; W/Cu 70/30 &#183; OD up to 400 mm &#183; FOB Shenzhen</text>

  <!-- url -->
  <text x="${W - 72}" y="${H - 48}" text-anchor="end" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#e08a4f" letter-spacing="2">arctung.com</text>
</svg>
`);

mkdirSync('public/og', { recursive: true });

await sharp('src/assets/factory/10-production-floor.jpg')
  .resize(W, H, { fit: 'cover', position: 'centre' })
  .composite([{ input: overlay }])
  .png({ compressionLevel: 9 })
  .toFile('public/og/og-default.png');

console.log('public/og/og-default.png written');
