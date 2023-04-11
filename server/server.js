const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3051;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiKey = process.env.FLICKR_API_KEY || "ad0f9431ad0f7558f60a1df1d976c654";
const apiUrl = "https://www.flickr.com/services/rest/";

// Search query that calls the Flickr search api with a required keyword/search term
app.get("/api", async (req, res) => {
  searchQuery = req.query.query;
  if (searchQuery) {
    const url = `${apiUrl}?method=flickr.photos.search&api_key=${apiKey}&text=${searchQuery}&format=json&nojsoncallback=1`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const photos = data.photos.photo;
      res.json({ photos });
    } catch (error) {
      console.error("Error fetching photos:", error);
      res.status(500).json({ message: "Error fetching photos" });
    }
  } else {
    res.status(400).json({ message: "Query parameter 'query' is required" });
  }
});

// server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}.`);
});
