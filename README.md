# Entendendo decisões arquiteturais e a estrutura do projeto

## Requisitos para rodar o projeto

### Setup de ambiente:

- [Node LTS](https://nodejs.org/en)
- [Yarn 1.x](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

### Como rodar na minha máquina?

1. Clone o projeto `git@github.com:joaovictornovais/emails-suac-csv.git`
2. Rode `yarn install`
3. Rode `yarn start`
4. Tudo pronto! 🎉

## Site

### Estrutura do projeto

- `App.js` em `.src/`: Arquivo que carrega a lógica da aplicação.
- `.src/components`: Pasta na qual contém todos os componentes primordiais para a construção da interface do site.

### Como criar um novo tópico para o formulário?
1. Crie um novo componente em `.src/components`
2. No arquivo `App.js`, procure a const `formTemplate` e adicione a nova chave + valor
3. Ainda em `App.js`, procure a const `form` e instancie o novo componente com as props: `data={data} updateFieldHandler={updateFieldHandler}`
4. Entre no arquivo do novo componente, passes as props `{ data, updateFieldHandler }` e atribua-os aos inputs, como no exemplo abaixo:
```js
import React from 'react'

const Feedback = ({ data, updateFieldHandler }) => {
  return (
    <>
      <label>Nota de 0 a 5</label>
      <input value={data.feedback || ''} onChange={(e) => updateFieldHandler("feedback", e.target.value)}/>
    </>
  )
}

export default Feedback
```
