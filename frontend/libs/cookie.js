import cookie from 'cookie'

export default (ctx) => cookie.parse(
  ctx.req && ctx.req.headers.cookie ? ctx.req.headers.cookie : document.cookie
)

export const clearCookie = async () => {
  let allCookie = cookie.parse(document.cookie)
  for (const key of Object.keys(allCookie)) {
    document.cookie = await cookie.serialize(key, allCookie[key], { maxAge: 0 })
  }
}
