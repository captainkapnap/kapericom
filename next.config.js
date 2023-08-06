const path = require('path')

  module.exports = {
      images: {
          remotePatterns: [
              {
                  protocol: 'https',
                  hostname: 'www.rnbjunk.com',
                  port: '',
                  pathname: '**',
              },
              {
                  protocol: 'https',
                  hostname: 'static.stereogum.com',
                  port: '',
                  pathname: '**',
              },
              {
                  protocol: 'https',
                  hostname: 'footwearnews.com',
                  port: '',
                  pathname: '**',
              },
          ],
      },
     
    sassOptions: {
        includePaths: [path.join(__dirname,'src', 'styles', 'scss')],
    },
}