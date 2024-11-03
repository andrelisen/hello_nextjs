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


