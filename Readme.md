1. Javascript Learning Roadmap
    Phase 1 -- Javascript Fundamentals
        Variables: let, const, var
        Data Types and Type Consversion
        Opreators and comparisons
        Conditions if , else , switch
        Loops: for , while , for...of
        Functions and arrow Functions
        Arrays and Objects
        Scope and Closures
        Destructuring and Spread/Rest 

2. Extra Things 
    Run and Debug
    DevTools

3. Console 
    # 1 VS Code Console & Browser Console
    # 2 Different Types of Console
        1. console.log() Print Normal information. : </> console.log("Hello World")
        2. console.error() Shows error message on display. : </> console.error("Login Failed!");
        3. console.warn() Shows warning message display. : </> console.warn("Password is weak");
        4. console.table() Shows Arrays or Objects in table. : </> let user = {
            name: "Rahul",
            age: 21,
            city: "Banaras"
        };
        console.table(user);
        5. console.clear() clear visible entries in console. : </> console.clear();
        6. console.info() Shows Informational message on display. : </> console.info("Server Started");
        7. console.debug() Displays debugging information. This might be hidden in some consoles due to filtering. : </> console.debug("Checking user data");
        8. console.group() / console.groupEnd() Group to Related console messages. : </> console.group("User Details");
        console.log("Rahul");
        console.log(1200);
        console.groupEnd();
        9. console.count() Indicates how many times a particular counter has been called. : </> console.count("Login");
        console.count("Login");
        console.count("Login");
        output count 1,2,3
        10. console.time() / console.timeEnd() The time taken for code execution matters. : </> console.time("calculation");
        let result = 100 * 200;
        console.timeEnd("Calculation");
        Output: calculation (execution time) ms

