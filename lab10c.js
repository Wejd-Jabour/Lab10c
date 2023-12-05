
const http = require('http');
const fs = require('fs');

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ITR Installation Guide</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 20px;
            padding: 20px;
            background-color: #085b5e;
            color: #333;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        h1 {
            color: #007bff;
            text-align: center;
            width: 100%;
        }

        .installation-steps {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
        }

        .installation-step {
            background-color: #007bff;
            color: #fff;
            border: 1px solid #007bff;
            border-radius: 8px;
            padding: 20px;
            margin: 10px;
            width: 200px;
            text-align: left;
        }

        code {
            padding: 2px 4px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
        }
    </style>
</head>
<body>
    <h1>ITR Installation Guide</h1>

    <div style="color: white; text-align:center">
        I chose NodeJS since it was what I worked with during a summer internship. I found that as the website got more complex, node offered solutions and made other 
        functions easier to navigate. <br>
        Installing it is easy, the biggest difficulty would be getting accustomed to the new benefits and uses of NodeJS 
    </div> <br><br>
    <div style="color: white; text-align:center">
        I used this website to help quide me: <a href="https://www.pluralsight.com/guides/getting-started-with-nodejs">Click here</a>
    </div>

    <div class="installation-steps">
        <div class="installation-step">
            <p>1. Download the latest version of NodeJS from the official website.</p>
        </div>

        <div class="installation-step">
            <p>2. Restart the machine and run the following in the terminal to confirm download. <br> <code> > node -v </code> <br> <code> > npm -v</code></p>
        </div>

        <div class="installation-step">
            <p>3. Run on the terminal the following to install a package module which helps javascript developers load dependencies effectively. <br> <code> > npm install</code></p>
        </div>

        <div class="installation-step">
            <p>4. Once everything is up and running you may begin coding and exploring the benefits of NodeJS</p>
        </div>

        <div class="installation-step">
            <p>5. You can then run: <code>node .\filename </code> to then run website on a local host</p>
        </div>

    </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    
    res.write(htmlContent);
    
    res.end();
});


const hostname = '0.0.0.0';
const port = 3000;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});
