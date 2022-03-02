import type { IncomingMessage, ServerResponse } from 'http'
const golightHTML = `
<!DOCTYPE html>
<html>

<head>
  <meta name="go-import" content="xdao.top/golight git https://github.com/dwdcth/golight">
  <meta name="go-source"
    content="xdao.top/golight/main _ https://github.com/dwdcth/golight/tree/main{/dir} https://github.com/dwdcth/golight/tree/main{/dir}/{file}#L{line}">
  <meta http-equiv="refresh" content="0; url=https://pkg.go.dev/xdao.top/golight/main">
</head>

<body>
  Nothing to see here. Please <a href="https://pkg.go.dev/xdao.top/golight/main">move along</a>.
</body>

</html>
`
export default async (req: IncomingMessage, res: ServerResponse) => {
  const url = new URL(req.url, `http://${req.headers.host}`)
  const parts = url.pathname.split('/')
  switch (parts[1]) {
    case 'golight':
      res.end(golightHTML)
      break
    case 'plugin':
      res.end(`<!DOCTYPE html>
<html>

<head>
  <meta name="go-import" content="xdao.top/plugin/${parts[2]}/main git https://github.com/dwdcth/plugin-${parts[2]}">
  <meta name="go-source"
    content="xdao.top/plugin/${parts[2]}/main _ https://github.com/dwdcth/plugin-${parts[2]}/tree/main{/dir} https://github.com/dwdcth/plugin-${parts[2]}/tree/main{/dir}/{file}#L{line}">
  <meta http-equiv="refresh" content="0; url=https://pkg.go.dev/xdao.top/plugin/${parts[2]}/main">
</head>

<body>
  Nothing to see here. Please <a href="https://pkg.go.dev/xdao.top/plugin/${parts[2]}/main">move along</a>.
</body>

</html>     
      `)
  }
}