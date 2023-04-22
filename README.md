# Coffee Shop Next

Este é um projeto didático que apresenta um e-commerce fictício de uma loja de café, utilizando a API do Stripe para catalogar os produtos e finalizar as compras. O projeto foi desenvolvido com as tecnologias NextJS 13 e TypeScript, com práticas de Context API e useReducer. Para a estilização, foi utilizado o framework de CSS Stitches e elementos do Radix UI.

## Como rodar o projeto

Para rodar o projeto localmente, siga os seguintes passos:

1. Clone este repositório para sua máquina.
2. Instale as dependências do projeto com o comando `yarn`.
3. Crie um arquivo `.env.local` na raiz do projeto e preencha as variáveis de ambiente necessárias seguindo como exemplo o arquivo `.env.example`
4. Rode o projeto com o comando `yarn dev`.
5. Acesse a aplicação no endereço `http://localhost:3000`.

```bash
NEXT_URL=http://localhost:3000/api
STRIPE_PUBLIC_KEY=<sua chave pública do Stripe>
STRIPE_SECRET_KEY=<sua chave secreta do Stripe>
```

## Funcionalidades

A aplicação apresenta as seguintes funcionalidades:

- Catálogo de produtos;
- Carrinho de compras;
- Finalização de compra com pagamento via Stripe;

## Telas da aplicação

Abaixo, estão algumas telas da aplicação:

### Tela de catálogo de produtos

![Tela de catálogo de produtos](https://i.imgur.com/2QdtRzR.png)

### Tela de carrinho de compras

![Tela de carrinho de compras](https://i.imgur.com/w4pC80V.png)

### Tela de finalização de compra

![Tela de finalização de compra](https://i.imgur.com/fBtzJLl.png)

## Tecnologias utilizadas

- NextJS 13
- TypeScript
- Stitches
- Radix UI
- Stripe API

## Considerações finais

Este é um projeto didático, portanto, a implementação não contempla todos os casos de uso e possíveis problemas que podem surgir em uma aplicação real. No entanto, ele serve como um bom ponto de partida para quem está aprendendo a utilizar as tecnologias apresentadas.
