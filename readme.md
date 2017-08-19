# about node-red-contrib-helloworld-button
This is example of node with button.

## install
```
npm install node-red-contrib-helloworld-button
```

## Features
### 1. helloworld-button
This is similar to injection node.
When button is pushed, this node send out message of "helloworld".

#### explanation
"helloworld-button.html" sends trigger of button by ajax.
"helloworld-button.js" receives REST message from html.

### 2. helloworld-button2
This is similar to debug node.
When button is active, node send "hello world2" every one second. But button is not hidden in disable like debug.

#### explanation
"helloworld-button2.html" sends state of button by REST API.
"helloworld-button2.js" receives the state of button.
