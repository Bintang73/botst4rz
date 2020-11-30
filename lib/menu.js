exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Oiiiie, *${id.split("@s.whatsapp.net")[0]}* 🥺
Aqui estão meus comando, por favor cuide de mim 😔💕!✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

🥰 COMANDOS 🥰:
   
=> *1.STICKER*
_${BotName} IRÁ FAZER UMA FIGURINHA COM A IMAGEM QUE VOCÊ
MANDOU: !sticker
Exemplo: !sticker (uma imagem)

=> *2.NUMEROS AUTOMÁTICOS*
_${BotName} IRÁ ENVIAR A ESCRITA NO LIVRO DE ACORDO COM O QUE VOCÊ 
ENVIOU: !nulis [kata]
Exemplo: !nulis bintang ganteng

=> *3.RIMA*
_${BotName} IRÁ ENVIAR UMA 
RIMA: !rima
Exemplo: !rima

=> *4.DOWNLOADER YOUTUBE*
_${BotName} VAI BAIXAR UM VÍDEO DO 
YOUTUBE: !yt [link]
Exemplo: !yt https://youtu.be/blablabla

=> *5.FITUR QUOTES*
_${BotName} IRÁ ENVIAR UMA PALAVRA ALEATÓRIA DE 
SABEDORIA: !quotes
Exemplo: !quotes

=> *6.PESQUISA SOBRE ALGUM LUGAR*
_${BotName} PESQUISA SOBRE ALGUM LUGAR QUE VOCÊ 
QUER: !ptl [cewek/cowok]
Exemplo: !ptl cewek

=> *7.FOTO ALEATÓRIA DE ANIME*
_${BotName} IRÁ ENVIAR FOTOS ANIME 
ALEATÓRIAS: !randomanime
Contoh: !randomanime

=> *8.PENGUBAH SUARA GOOGLE*
_${BotName} ENVIARA UM ÁUDIO COM VOZ DO GOOGLE DIZENDO OQUE VOCÊ 
MANDOU: !ttsid [kata]
Exemplo: !ttsid bintang ganteng

=> *9.FITUR QURAN*
_${BotName} ENVIARÁ VERSOS DO ALCORÃO 
ALEATORIAMENTE: !quran
Exemplo: !quran

=> *10.INFORMAÇÕES BOT*
_${BotName} INFORMAÇÕES 
SOBRE MIM 🥰: !info
Exemplo: !info

=> *11.FITUR SAY*
_${BotName} IRA DIZER OQUE VOCE 
MANDAR: !falar [kata]
Exemplo: !falar Oiiiie, meu amorzinho 🥰🥳

=> *12.YOUTUBE MP3 DOWNLOADER*
_${BotName} VAI BAIXAR UM VÍDEO DO LINK QUE VOCÊ 
MANDOU: !ytmp3 [link]
Exemplo: !ytmp3 https://youtu.be/xxxx

=> *13.INSTAGRAM VIDEO/FOTO DOWNLOADER*
_${BotName} VAI BAIXAR UM VÍDEO/FOTO DO LINK QUE VOCÊ 
MANDOU: !ig [link]
Exemplo: !ig https://instagram.com/xxxx

=> *14.FACEBOOK VIDEO/FOTO DOWLOAD*
_${BotName} VAI BAIXAR UM VÍDEO/FOTO DO LINK QUE VOCÊ 
MANDOU: !fb [link]
Exemplo: !fb https://facebook.com/xxxx

=> *15.TWITTER VIDEO/FOTO DOWLOAD*
_${BotName} VAI BAIXAR UM VÍDEO/FOTO DO LINK QUE VOCÊ 
MANDOU: !twt [link]
Exemplo: !twt https://twitter.com/xxxx

=> *16.WIKIPEAD*
_${BotName} VAI ENVIAR OQUE VOCÊ PEDIU 
PARA PESQUISAR: !wiki [query]
Exemplo: !wiki anjing

✅ Follow akun instagram admin ${instagramlu}

⚠️ ÚLTIMAS INFORMAÇÕES SOBRE COVID-19!

⚠️ POSITIVOS: *${corohelp.confirmed.value}*
⚠️ CURADOS: *${corohelp.recovered.value}*
⚠️ MORTOS: *${corohelp.deaths.value}*
⚠️ ATUALIZAÇÃO: *${corohelp.lastUpdate}*

🔰 -----[ *POWERED BY ${BotName}* ]----- 🔰`
}
