class Pizza {
  constructor(sabor, tamanho, borda) {
    this.sabor = sabor;
    this.tamanho = tamanho; // 'P', 'M' ou 'G'
    this.borda = borda; // booleano: true ou false
  }

  calcularPreco() {
    let preco = 0;

    // Define o preço base de acordo com o tamanho
    if (this.tamanho === 'P') {
      preco = 25.00;
    } else if (this.tamanho === 'M') {
      preco = 35.00;
    } else if (this.tamanho === 'G') {
      preco = 50.00;
    } else {
      console.error("Tamanho inválido. Use P, M ou G.");
      return 0;
    }

    // Adiciona o valor da borda se for true
    if (this.borda === true) {
      preco += 8.00;
    }

    return preco;
  }

  resumo() {
    const valor = this.calcularPreco();
    const statusBorda = this.borda ? "com borda" : "sem borda";
    
    // Formata o valor para ter duas casas decimais
    const valorFormatado = valor.toFixed(2).replace('.', ',');

    console.log(`Pizza ${this.tamanho} ${statusBorda} custará R$ ${valorFormatado} reais`);
  }
}

// Exemplos de uso para testar o código:
const pizza1 = new Pizza('Calabresa', 'M', true);
pizza1.resumo(); 
// Saída: Pizza M com borda custará R$ 43,00 reais

const pizza2 = new Pizza('Mussarela', 'P', false);
pizza2.resumo(); 
// Saída: Pizza P sem borda custará R$ 25,00 reais