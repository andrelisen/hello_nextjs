Para criar um projeto com Next 
```
npx create-next-app <nome>
```

Para iniciá-lo
```
npm run dev
```

### Estrutura de pastas
- /app: contém todas as rotas, componentes e lógica para a sua aplicação.
- /app/lib: contém funções usadas em seu aplicativo, como funções de utilitários reutilizáveis e funções de busca de dados. 
- /app/ui: contém todos os componentes de UI para seu aplicativo, como cards, tabelas e formulários. 
- /public: contém tudo que é estático. Por exemplo as imagens.

### Páginas e roteamento
- Os arquivos que geram o roteamento, ou seja, com base no nome do arquivo teremos a geração de URLs do projeto.
- O arquivo page.tsx sinaliza a criação da rota base. 
    - Exemplo: https://www.meuexemplo.com => page.tsx
- O roteamento do next é baseado em Filesystem
- Então se eu tenho uma pasta dentro de /app/users/cadastro/page.tsx ela será a rota => https://www.meuexemplo.com/users/cadastro
- Preciso sempre criar uma pasta com um arquivo .tsx dentro para criar essa nova rota. 
    - Por exemplo, criei a pasta /about e um aruqivo page.tsx e agora consigo chamar a rota /about.
- Cada pasta dentro de /app pode criar uma rota
    - /app/about/page.tsx => cria a rota de /about
    - /app/products/page.tsx => cria a rota de /products
    - /app/products/shirt/page.tsx => cria a rota de /products/shirt
    - /app/products/skirt/page.tsx => cria a rota de /products/skirt

### Navegando entre páginas
- Para navegar entre páginas no NextJS utilizamos o componente Link
- Precisamos passar o link da página pela *prop href* do componente

### Componentes
- São aqueles elementos que se repetem e seguem um "padrão"
- Podemos replicar esse componente em diferentes páginas
- A ideia é sempre criar uma pasta chamada /components para não misturar com as pastas
- Quando queremos que um componente de layout seja "obrigatório" em todas as páginas, precisamos criá-lo como componente e depois add sua declaração no arquivo layout.tsx


