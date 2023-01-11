function criaCalculador() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
          this.display.addEventListener('keyup', e => {
            if(e.keyCode === 13) {
                this.realizaConta();
            }
          })
        },
       
        realizaConta() {
            let conta = this.display.value;

            try {
              conta = eval(conta);

              if(!conta) {
                alert('Verifique a conta, conta inválida');
                return;
              }
              this.display.value = String(conta);
            } catch(e) {
               alert('Conta Inválida');
               return;
            }
        },

        clearDisplay() {
            this.display.value = ' ';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },


        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-dell')) {
                    this.apagaUm(); 
                }

                if (el.classList.contains('btn-eq')) {
                this.realizaConta();
                }

            });

        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculador();
calculadora.inicia()

//Sempre que temos que referenciar uma chave do meu objeto no próprio objeto eu preciso usar this