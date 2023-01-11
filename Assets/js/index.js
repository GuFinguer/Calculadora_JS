function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    this.display.addEventListener('keypress', e => {
      if (e.keycode !== 13) {
      this.realizaConta();
      }
                    
    });
  };

  this.capturaCliques = () => {
    document.addEventListener('click', event =>{
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumDislay(el);
      if (el.classList.contains('btn-clear')) this.clear(el);
      if (el.classList.contains('btn-dell')) this.dell( );
      if (el.classList.contains('btn-eq')) this.realizaConta(el);

    });
  };

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      if(!conta) {
        alert('Conta inválida')
        return;
      }
      this.display.value = conta;
    } catch(e) {
        alert("Conta inválida");
        return;
    }
  };

  this.addNumDislay = el => {
    this.display.value += el.innerText;
    this.display.focus();
}
  this.clear = () => this.display.value = " ";
  this.dell = () => this.display.value = this.display.value.slice(0, -1);
  
};

const calculadora = new Calculadora();
calculadora.inicia();