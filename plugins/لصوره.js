let handler = async (m, { conn, usedPrefix, command }) => {
  const notStickerMessage = `*✳️ المرجو الاشارة للملصق الذي تريد تحويله لصورة ثم اكتب :*\n\n *${usedPrefix + command}*`
  if (!m.quoted) throw notStickerMessage
  const q = m.quoted || m
  let mime = q.mediaType || ''
  if (/webp/.test(mime)) throw notStickerMessage
  let media = await q.download()
  await conn.sendMessage(m.chat, {image: media, caption: '『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』'}, {quoted: m})
}
handler.help = ['toimg2']
handler.tags = ['sticker']
handler.command = /^(لصورة)$/i
export default handler
