class ContaBancaria {
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0; // O saldo inicia em 0
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente");
    }
  }

  extrato() {
    console.log(`Titular ${this.titular} | Saldo: R$ ${this.saldo}`);
  }
}

// --- Teste solicitado ---
// Criando uma conta
const minhaConta = new ContaBancaria("João Silva");

// Depositando 500
minhaConta.depositar(500);

// Sacando 200
minhaConta.sacar(200);

// Mostrando o extrato
minhaConta.extrato();