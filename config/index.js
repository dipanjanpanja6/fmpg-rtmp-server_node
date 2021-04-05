module.exports = {
  jwtSecret: "MyS3cr3tK3Y",
  whitelist: ["http://localhost:3000"],
  cookieCfg: {
    httpOnly: true,
    signed: true, // sameSite: true,// secure: true
  },
}
