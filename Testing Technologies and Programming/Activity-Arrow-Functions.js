<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=#, inital-scale=1.0">
        <title>Testing Technologies and Programming</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
        <link rel="stylesheet" href="styles.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet">
        <style> body {
            font-family: "Outfit", sans-serif;
        }
        </style>
    </head>
    <body>
    <div class="container">
        <img src="csLogo.png" style="float: left;">
        <img src="ecLogo.png" style="float: right; margin-top: 3%;">
        <br>
        <h1 style="text-align: center"><b>Codespace Bootcamp</b></h1>
    </div>
    <br>
    <br>
    <div class="row">
        <div class="col-sm-8">
            <h1>Testing Technologies and Programming</h1>
        </div>
        <div class="col-sm-4">
            <h5 style="text-align: right; width: 95%">Sarah Beaton<br>EC1937236</h5>
        </div>
    </div>
    <br>
    <h2>Activity - Arrow Functions</h2>
    <p id="answers">In this activity, we can further our understanding of Arrow Functions by writing our own code which is based on the material that we learned in the topic.</p>
    <br>
    <h3>Question 1</h3>
    <!-- Write an arrow function expression called greet(). It should accept a single argument representing 
     a person's name. It should return a greeting string as shown below.-->
    <div id="answers">
        <pre>
            <code>
                let greet = name => "Hi, " + name
                document.getElementById("q1").innerHTML = greet("Sarah!");
            </code>
        </pre>
        <p>Output:</p>
        <p id="q1"></p>
        <script>
            let greet = name => "Hi, " + name
            document.getElementById("q1").innerHTML = greet("Sarah!");
        </script>
        
    </div>
    <br>
    <h3>Question 2</h3>
    <!-- Convert the function isEven() into an equivalent arrow function.-->
    <div id="answers">
        <pre>
            <code>
                let isEven = (num) => num % 2 === 0;
                document.getElementById("q2").innerHTML = isEven(5);
            </code>
        </pre>
        <p>Output:</p>
        <p id="q2"></p>
        <script>
            let isEven = (num) => num % 2 === 0;
            document.getElementById("q2").innerHTML = isEven(5);
        </script>
    </div>
    <br>
    <h3>Question 3</h3>
    <!-- Convert the following JavaScript function declaration to arrow function syntax: -->
    <div id="answers">
        <pre>
            <code>
                let counterFunc = (counter) => {
                    if (counter > 100) {
                        counter = 0;
                    } else {
                        counter++;
                    }
                    
                    return counter;
                    }
    
                document.getElementById("q3").innerHTML = counterFunc(50);
            </code>
        </pre>
        <p>Output:</p>
        <p id="q3"></p>
        <script>
            let counterFunc = (counter) => {
                if (counter > 100) {
                    counter = 0;
                } else {
                    counter++;
                }
                
                return counter;
                }

            document.getElementById("q3").innerHTML = counterFunc(50);
        </script>
    </div>
    <br>
    <h3>Question 4</h3>
    <!-- Write an arrow function for the following JavaScript function:
    -->
    <div id="answers">
        <pre>
            <code>
                let nameAge = (name, age) => {
                    return ("Hello " + name + "You are " + age + " years old");
                    }
    
                document.getElementById("q4").innerHTML = nameAge("Sarah&lt;br>", 28);
            </code>
        </pre>
        <p>Output:</p>
        <p id="q4"></p>
        <script>
            let nameAge = (name, age) => {
                return ("Hello " + name + "You are " + age + " years old");
                }

            document.getElementById("q4").innerHTML = nameAge("Sarah<br>", 28);
        </script>
    </div>
    <br>
    <h3>Question 5</h3>
    <!-- Write the arrow function for the following:
    -->
    <div id="answers">
        <pre>
            <code>
                let printOnly = () => {
                    return ("printing");
                    }
    
                document.getElementById("q5").innerHTML = printOnly();
            </code>
        </pre>
        <p>Output:</p>
        <p id="q5"></p>
        <script>
            let printOnly = () => {
                return ("printing");
                }

            document.getElementById("q5").innerHTML = printOnly();
        </script>
    </div>
    <br>
    <h3>Question 6</h3>
    <!-- Write the arrow function for the following:
    -->
    <div id="answers">
        <pre>
            <code>
                let sum = (num1, num2) => num1 + num2;

                document.getElementById("q6").innerHTML = sum(5, 5);
            </code>
        </pre>
        <p>Output:</p>
        <p id="q6"></p>
        <script>
            let sum = (num1, num2) => num1 + num2;

            document.getElementById("q6").innerHTML = sum(5, 5);
        </script>
    </div>
    <br>
    <br>

</body>
</html>
