import moment from 'moment-timezone';

const handler = async (m, {conn}) => {
  const tzPE = moment().tz('America/Lima').format('DD/MM HH:mm');
  const tzMX = moment().tz('America/Mexico_City').format('DD/MM HH:mm');
  const tzBO = moment().tz('America/La_Paz').format('DD/MM HH:mm');
  const tzCL = moment().tz('America/Santiago').format('DD/MM HH:mm');
  const tzAR = moment().tz('America/Argentina/Buenos_Aires').format('DD/MM HH:mm');
  const tzCO = moment().tz('America/Bogota').format('DD/MM HH:mm');
  const tzEC = moment().tz('America/Guayaquil').format('DD/MM HH:mm');
  const tzCR = moment().tz('America/Costa_Rica').format('DD/MM HH:mm');
  const tzCU = moment().tz('America/Havana').format('DD/MM HH:mm');
  const tzGT = moment().tz('America/Guatemala').format('DD/MM HH:mm');
  const tzHN = moment().tz('America/Tegucigalpa').format('DD/MM HH:mm');
  const tzNI = moment().tz('America/Managua').format('DD/MM HH:mm');
  const tzPA = moment().tz('America/Panama').format('DD/MM HH:mm');
  const tzUY = moment().tz('America/Montevideo').format('DD/MM HH:mm');
  const tzVE = moment().tz('America/Caracas').format('DD/MM HH:mm');
  const tzPY = moment().tz('America/Asuncion').format('DD/MM HH:mm');
  const tzNY = moment().tz('America/New_York').format('DD/MM HH:mm');
  const tzBR = moment().tz('America/Sao_Paulo').format('DD/MM HH:mm');
  const tzAS = moment().tz('Asia/Jakarta').format('DD/MM HH:mm');
  const tzAF = moment().tz('Africa/Malabo').format('DD/MM HH:mm');
  await conn.sendMessage(m.chat, {text: `\`\`\`
< التوقيت في: >

▢ بيرو        : ${tzPE}
▢ المكسيك     : ${tzMX}
▢ بوليفيا       : ${tzBO}
▢ شيلي        : ${tzCL}
▢ الأرجنتين     : ${tzAR}
▢ كولومبيا      : ${tzCO}
▢ الاكوادور      : ${tzEC}
▢ كوستا ريكا    : ${tzCR}
▢ الاكوادور      : ${tzCU}
▢ غواتيمالا     : ${tzGT}
▢ هندوراس     : ${tzHN}
▢ نيكاراغوا     : ${tzNI}
▢ بنما        : ${tzPA}
▢ أوروغواي     : ${tzUY}
▢ فنزويلا      : ${tzVE}
▢ باراجواي      : ${tzPY}
▢ نيويورك      : ${tzNY}
▢ برازيل        : ${tzBR}
▢ اسيا         : ${tzAS}
▢ افريقيا       : ${tzAF}
\`\`\`
${String.fromCharCode(8206).repeat(850)}
▢ TZ ديل الخادم:\n • ${Intl.DateTimeFormat().resolvedOptions().timeZone}\n • ${moment().tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format('DD/MM HH:mm')}`}, {quoted: m});
};

handler.command = /^(tz|hora|fecha|التوقيت)$/i;
export default handler;
