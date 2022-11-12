const express = require('express');
const path = require('path');
const axios = require('axios');
const { all } = require('async');
const bodyparser = require('body-parser');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyparser.urlencoded({ extended : true}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.status(200).render('index');
});

app.post('/api/generate', async (req, res) => {

  const prompt = req.body.prompt1;
  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: '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',
  });
  const openai = new OpenAIApi(configuration);

  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt,
    temperature: 0.04,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  res.json(response.data.choices[0].text);

});


app.use(express.static(path.join(__dirname, 'assets')));

const port = 3000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

// create image with unsplash in HTML
// create list of paul graham top 10 essays with links with HTML formatting
