# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



modelo de IA vai estar isolado da aplicação.
Por estar no front - isolamento não vai ser tão forte.
Com API rest, seria mais isolado (futuro)

comunicação vai ser por uma chamada de função que a app vai fazer para o modelo

Com a interface API feita que será chamada quando o botão for precionada de fato. Inicia-se a implementação da lógica do modelo

A classe se comporta como singleton, significa que a cada vez que ela for chamada, ela vai retornar na mesma instância, sem criar uma nova. Pois quando a pipeline é usada, precisa-se buscar o modelo no huggingface, trazer para o pc, caheado localmente, sendo um processo que pode demorar, se formos ficar recriando a cada vez a instância toda vez que formos pegar o pipeline, pode gerar um overhead pesado



