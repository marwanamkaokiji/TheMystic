let handler = async (m, { conn, text }) => {
  let tagme = `https://wa.me/+${m.sender.replace(`+`)}/?text=BY+Aboud+Coding`
  let mylink = [m.sender]
  conn.reply(m.chat, tagme, m, { contextInfo: { mylink }})
}
handler.help = ['منشني']
handler.tags = ['group']
handler.command = /^رابطي$/i

handler.group = false

export default handler
