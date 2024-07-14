import fs from 'fs';
const handler = async (m, {conn, args}) => {
  const group = m.chat;
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
    contextInfo: {externalAdReply: {mediaUrl: null, mediaType: 1, description: null,
      title: ' رابط الجروب ',
      body: '『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』',
      previewType: 0, thumbnail: fs.readFileSync('./Menu2.jpg'),
      sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}});
};
handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^لينك_الجروب(gro?up)?$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;
