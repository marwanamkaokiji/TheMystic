let handler = m => m 
 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 
  
 if (/^احا$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `احتين علي احتك 🐦🥹`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
 } 

if (/^اسف$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `ولا يهمك يا حب 🥺♥️`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
}

   if (/^عبيط|يا عبيط |اهبل |غبي$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `انت يبيبي 🥲❤️`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
   }
   
if (/^مروان$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `عيون المطور🥺♥️ `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
}
   
   if (/^شاي$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `هات معاك😪`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
   }
    if (/^اه$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `الشارع الي وراه 😂`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
    } 

    if (/^حلو$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `انت احلا😍`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
      
    }
 if (/^يب$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` قول نعم يا حب 🫶🏻 🐦❤`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 

   if (/^حبيبتي$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,'انت حبيبي😍♥️',m) //wm, null, [['Menu', '#menu']], m) botones :v

   }

   if (/^اوكيجي|اوكيجي|اوكيجي|اوكيجي$/i.test(m.text) ) { //sem prefixo
     conn.reply(m.chat,'عمك ',m) //wm, null, [['Menu','#menu']], m) botones :v

   }
 if (/^اوهايو$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `اوهايو كوزيماس `, m) //wm, null, [['Menu', '#menu']], m) botones :V

 } 

   if (/^بدور|فاضل|مريم|نازونا|هانكوك|اية$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat,'صديق ريتا الروح بروح 😂❤', m) //wm, null, [['Menu', '#menu']], m) botones :V

   }
 if (/^هرميك من الشباك$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `خلاص خلاص مترمنيش 🥺💔`, m) //wm, null, [['Menu', '#menu']], m) botones :V

 } 
  
 if (/^امزح|بهزر$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` ماشي 🥲 `, m) //wm, null, [['Menu', '#menu']], m) botones :V
   } 
  
 if (/^في ايه$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `فيه محشي و بانيه تاخد`, m) //wm, null, [['Menu', '#menu']], m) botones :V
 } 
  
 if (/^تست$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `تست تست`, m) //wm, null, [['Menu', '#menu']], m) botones :V
  
 } 
  
 if (/^بتعمل ايه دلوقت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` باكل ميلكي رايز معه الملايكه`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^انا جيت$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` نورت البيت 😂❤️`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^اخرس$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `حاضر 🥺💔`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^حرامي|سارق$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `تتهم بريء بالسرقة 
 من دون تحري او بحث 
 عن حقيقة ليست ملموسة 
 ارحنا واعمل شرطي  
 ثم افتح فمك وثرثر 
 فكلامك كـجاهل واحد  
 بل جهلاً ارحم من حديثك 
 تتصنع دور الشرطي  
 وكأنك محقق 
 بالله اصمت ولا تحرج نفسك  
 ارحنا وارح أعصابك  
 ان اكرمك الله بعقل 
 فبسكوتك اقتل جهلك 
 `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  
 if (/^ملل|مللل|ملللل$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `عارفين ف اسكت احسن لك`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^السلام عليكم|وعليكم السلام ورحمة الله وبركاته$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `وعليكم السلام ورحمة الله وبركاته `, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
 if (/^هات طبق$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` روح جيب لنفسك 🥲❤️`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
     
 if (/^🤖$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `انت بوت عشان ترسل الملصق ده 🐦`, m) //wm, null, [['Menu', '#menu']], m) botones :V 

 } 
     
 if (/^🐦$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `🐦🐦🐦🐦🐦`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
  
  if (/^ايه$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `كتك اوه 🥲`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
     
 if (/^نعم$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `حد ناداك 🌚🐦`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 

  
 if (/^كيفك|شخبارك|علوك|عامل ايه$/i.test(m.text) ) { //sem prefixo 
    conn.reply(m.chat, ` الحمد لله و انت`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
   if (/^ ناني $/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` مي تو  🌚♥️`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 }   
   if (/^منور$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `بنوري 🌚✨`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
   if (/^😈$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` يا شيطان 👀`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
 } 
   if (/^ميار$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, `صديقة ريتا 🥹♥️`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
   }
   if (/^🇲🇦$/i.test(m.text) ) { //sem prefixo 
     conn.reply(m.chat, ` بلدي العزيز 🥺♥️`, m) //wm, null, [['Menu', '#menu']], m) botones :V 
  
   }
 return !0 } 
 export default handler
