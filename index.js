const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Home Page</h1>`);
});

app.get("/getData", async (req, res) => {
  const email = encodeURIComponent("itsprajwalhg@gmail.com");
  const apiUrl = `https://api.mastergst.com/public/search?email=${email}&gstin=33AAGCC7144L6ZE`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        client_id: "6c3ce06d-6d7c-4150-a633-69120cbee847",
        client_secret: "9c5df864-013a-445c-8f08-03bcfdaf13b4",
      },
    });

    // console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res.json({ msg: error.message });
  }
});

app.listen(8080, () => console.log("Server running on port 8080"));
