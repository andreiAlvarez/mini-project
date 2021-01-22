const fs = require('fs')
fs.writeFileSync('./.env',`REACT_APP_NEWS_API_SECRET_KEY=${process.env.REACT_APP_NEWS_API_SECRET_KEY}`)