import { pipeline } from "https://cdn.jsdelivr.net/npm/@huggingface/transformers"; // Import the pipeline function from the Hugging Face Transformers library -- 
//pipeline  faz uma sequencia de etapas que são necessárias para conversar com os modelos de IA, porque os modelos não falam a mesma linguagem que a gente.
//quando mandamos uma mensagem em texto para o chat Gpt, existe uma sequencia de etapas que acontencem para que o modelo entenda o que estou querendo dizer 
//e a resposta também seja retornada de uma forma que eu também entenda.
//A linguagem dos modelos é um vetor com varios numero (double, float) que representam a mensagem que eu mandei

//ex: oi tudo bem? -> [0.1, 0.2, 0.3, 0.4, 0.5] (vetor de numeros que representa a mensagem "oi tudo bem?") 

 //tarefa (text-generation no nosso caso): indica qual que a sequencia de pipeline que vamos precisar executar 
//-- modelo: cada modelo tem uma sequencia de etapas diferente, então precisamos informar qual modelo vamos usar para que o pipeline saiba 
// qual sequencia de etapas executar
//INstruct: significa que o modelo já foi tunado para tarefas de instrução. Ou seja, ele foi treinado para entender melhor as instruções que a gente dá para ele.
//dtype: 'q4': significa que o modelo foi quantizado para 4 bits, ou seja, ele ocupa menos espaço na memória e é mais rápido para executar.
//gererator: é a variavel que vai armazenar o pipeline que criamos, para que possamos usar ele depois
const generator = await pipeline("text-generation", "HuggingFaceTB/SmolLM2-135M-Instruct", {dtype: 'q4'})

const output = await generator("Once Upon a time", {//vai mostrar no console o pipeline que criamos, com todas as etapas que ele vai executar para conversar com o modelo de IA
    do_sample: true, //ativa a amostragem, ou seja, o modelo vai gerar respostas diferentes para a mesma mensagem que mandamos (aleatorização, modelo pode alucinar e gerar respostas diferentes para a mesma mensagem)
    temperature: 0.5, //quanto maior a temperatura, mais aleatória vai ser a resposta do modelo (0.7 é um valor bom para gerar respostas criativas)
    top_k: 10, //vai controlar o numero de possibilidades diferentes que a IA vai poder escolher para gerar a resposta, quanto maior K, mais aleatório. Quanto menor K, mais conservador.
    max_new_tokens: 100, //quantidade máxima de tokens que o modelo vai gerar na resposta, ou seja, o tamanho máximo da resposta que o modelo vai gerar. Maior o valor, mais caro 
    //é para gerar a resposta, porque o modelo vai precisar de mais tempo para gerar a resposta. Menor o valor, mais barato é para gerar a resposta, porque o modelo vai precisar 
    //de menos tempo para gerar a resposta.
    
}); 

console.log(output[0]["generated_text"]) //vai mostrar no console o resultado da execução do pipeline, ou seja, a resposta do modelo de IA para a mensagem que mandamos ("Once Upon a time")