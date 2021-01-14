let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
  Owner bot saya adalah Wa.me/601116051789
  Segera hubungi jika ada keperluan
  
  YouTube
  *~Xninja FF
  `.trim(), m)
}
handler.command = /^(owner)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

