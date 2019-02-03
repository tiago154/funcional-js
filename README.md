# O que é Programação Funcional?

  

É um paradigma de programação, que simplificando é uma maneira de programar, como por exemplo orientada a objeto, estruturada ou imperativa.

O código funcional é composto por pequenas funções que se combinam para resolver um problema, onde evita estados e dados mutáveis.

  

**Vantagens:**

  

- Facilidade na manutenção e desenvolvimento testes.

- Reaproveitamento de código.

- Código legível.

- É mais amigável em relação a paralelismo.

  

**Desvantagens:**

  

- Maior consumo de memória.

  

**Pilares**:

  

- Imutabilidade

- Funções Puras

- Higher-Order Functions

  

**Funções Puras:**

  

- Possui pelo menos um parâmetro.

- Dado um parâmetro x, sempre retornará Y.

- Não geram side-effects

- Deve ser stateless

- Deve ter um retorno

  

**Higher-Order Functions:**

  

- Funções que aceitem outras funções como argumentos.

- Filter, Map e Reduce entram nessa categoria.

- Compose e Currying

  

**Compose - Exemplo**

const compose = (f,g) => x => f(g(x))

  

const toUpperCase = x => x.toUpperCase()

const exclaim = x => `${x}!!!`

  

const scream = compose(exclaim, toUpperCase)

scream('stop') // STOP!!!

  

**Currying - Exemplo**

  

const add = x => y => x + y

  

const addFive = add(5)

  

console.log(addFive(3)) // 8