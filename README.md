# nools-with-express
This is a Express test working with Nools, a rule based engine.

# Installation

```
npm install
```

the rules are created on `rules/rules.nools` you can add and remove it from there

# Quick Start

```
npm start
```

And you going to send a POST method to link `http://localhost:3000/fact`
The format should be a JSON : ```json {"key":"renewal"}```

You will recieve a response if the message contain one of the rules,
eg.: `{"text":"give him a stamp!"}`


# Where is nools 

nools its a module wich you require at the begining of the file

## app.js

```javascript
var nools = require("nools");
```

after that , you need to define your nools node.
to read more about it , check it out [HERE](https://github.com/noolsjs/nools)

```javascript
//define nools
var flow = nools.compile(__dirname + "/rules/rules.nools");
var Message = flow.getDefined("message");
var session = flow.getSession();

session.matchUntilHalt().then(
    function() {
        //all done!
        console.log("All done!");
    },
    function(err) {
        console.log("Error matchUntilHalt()", err.stack);
    }
);

app.post('/fact', function(req, res) {

    var key = req.body.key;

    console.log("\n" + ++counter + " New fact", key);

    var newMsg = new Message(key);
    var getMsg = session.assert(newMsg);

    res.send(getMsg);
});
```

That's all
