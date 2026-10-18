import mammoth from 'mammoth'
import fs from 'node:fs'

fs.mkdirSync('tmp-teleo', { recursive: true })
let n = 0
const res = await mammoth.convertToHtml(
  { path: 'data/Teleologia_conciencia_y_sentido-v21-f7f3e2.docx' },
  {
    convertImage: mammoth.images.imgElement(async (image) => {
      const buf = await image.read()
      const ext = image.contentType.split('/')[1]
      const name = `img-${n++}.${ext}`
      fs.writeFileSync(`tmp-teleo/${name}`, buf)
      return { src: `__IMG_${n - 1}__` }
    }),
  },
)
fs.writeFileSync('tmp-teleo/out.html', res.value)
const blocks = res.value
  .split(/(?=<(?:p|h[1-6]|ul|ol|table)[ >])/)
  .map((b) => b.replace(/<img[^>]*src="(__IMG_\d+__)"[^>]*>/g, '[$1]'))
  .map((b) => {
    const tag = b.match(/^<(\w+)/)?.[1]
    const txt = b.replace(/<[^>]+>/g, '').trim()
    return { tag, txt, raw: b.includes('<strong>') || b.includes('<em>') ? 'fmt' : '' }
  })
  .filter((b) => b.txt)
console.log('TOTAL', blocks.length, 'images', n)
console.log('MESSAGES', res.messages.slice(0, 10))
blocks.forEach((b, i) => console.log(i, b.tag, b.raw, '|', b.txt.slice(0, 110)))
