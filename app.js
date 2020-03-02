const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`));