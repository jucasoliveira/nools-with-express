# nools-with-express
This is a Express test working with Nools, a rule based engine.

# Installation

```
npm install
```

the rules are created on `rules/rules.nools` you can add and remove the login from there

# Quick Start

```
npm start
```

And you going to send a POST method to link `http://localhost:3000/fact`
The format should be a JSON : `{"key":"renewal"}`

You will recieve a response if the message contain one of the rules,
eg.: `{"text":"give him a stamp!"}`

That's all
