// importing express
const express = require("express");

// creation of server
const app = express();

app.use(express.json());

/*
const calculateSum = (n) => {
    let ans = 0;
    for(let i = 0; i <= n; i++) {
        ans += i;
    }
    return ans;
}

app.get("/", (request, response) => {  
    const query = request.query.n;
    const ans = calculateSum(query);
    response.send(JSON.stringify(ans));
})
*/

const users = [
  {
    name: "John",
    kidneys: [ 
      {
        healthy: false,
      }, 
      {
        healthy: true,
      },
    ],
  },
];

console.log(users[0]);


app.get("/", (request, response) => {

    const name = users[0].name;
    noOfKidneys = users[0].kidneys.length;
    let noOfUnhealthyKidneys = 0, noOfHealthyKidneys = 0;
    
    users[0].kidneys.forEach((kidney) => {
        if (kidney.healthy) {
            noOfHealthyKidneys += 1;
        }
        else {
            noOfUnhealthyKidneys += 1;
        } 
    });

    response.status(200).json({
        noOfKidneys,
        noOfHealthyKidneys,
        noOfUnhealthyKidneys
    })
});

app.post("/", (request, response) => {
    const isHealthy = request.body.isHealthy;  

    users[0].kidneys.push({
        healthy: isHealthy || false
    })

    response.status(201).json({message: "Done"});
});

app.put("/", (request,response) => {
    users[0].kidneys.forEach(kidney => kidney.healthy = true);

    response.status(200).json(users[0]);
});

app.delete("/", (request, response) => {

    const isUnhealthyKidneys = users[0].kidneys.some((kidney) => {
        return !kidney.healthy
    })

    if(isUnhealthyKidneys) {
        /*
        const newKidneys = [];

        for(let i = 0; i < users[0].kidneys.length; i++) {
            if(users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }

        users[0].kidneys = newKidneys;
        */

        users[0].kidneys = users[0].kidneys.filter(kidney => kidney.healthy);
        
        return response.status(200).json({
            message: "Replaced"
        });
    }
    else {
        return response.status(411).end();
    }

});

const PORT = 3001;
app.listen(3001, () => {
  console.log("Server Listening at port 3001");
});
