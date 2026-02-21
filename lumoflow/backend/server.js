const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    name: "🚀 LumoFlow API",
    message: "Robin Hood dropshipping - Start free, pay less!",
    status: "healthy",
    features: ["split-payments", "0.5% fees for starters"]
  });
});

app.post('/api/payment-split', (req, res) => {
  const { amount, supplierCost } = req.body;
  const profit = amount - supplierCost;
  
  res.json({
    customerPays: amount,
    supplierGets: supplierCost,
    yourProfit: profit,
    platformFee: profit * 0.005,
    netProfit: profit * 0.995,
    message: "Zero-risk payment: vendor paid instantly, profit to you immediately"
  });
});

app.listen(3000, () => console.log('✅ API running on port 3000'));
