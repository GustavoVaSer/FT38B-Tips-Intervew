function MaxValue(shares) {
  // Your code here:
  let minPrice = shares[0]; // Precio mínimo inicialmente
  let maxProfit = 0; // Ganancia máxima inicialmente

  for (let i = 1; i < shares.length; i++) {
    const currentPrice = shares[i];

    // Actualizar el precio mínimo de compra si encontramos un valor menor
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }

    // Calcular la ganancia potencial si vendemos en el precio actual
    const potentialProfit = currentPrice - minPrice;

    // Actualizar la ganancia máxima si encontramos una ganancia mayor
    if (potentialProfit > maxProfit) {
      maxProfit = potentialProfit;
    }
  }

  return maxProfit;
}

module.exports = MaxValue;
