// services/ncmService.js
const openai = require('../config/openai');

function extractJsonFromString(str) {
    try {
        // Encontrar o início e o fim do JSON
        const startIndex = str.indexOf('{');
        const endIndex = str.lastIndexOf('}') + 1;

        // Verificar se os índices são válidos
        if (startIndex === -1 || endIndex === -1) {
            throw new Error('JSON não encontrado na string.');
        }

        // Extrair a substring que contém o JSON
        const jsonString = str.substring(startIndex, endIndex);

        // Analisar o JSON
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("string", str);
        console.error('Erro ao extrair ou analisar o JSON:', error);
        return null; // Ou lance um erro, dependendo da sua necessidade
    }
}

exports.findNCM = async (produto) => {
  const prompt = `Qual é o NCM completo do(a) ${produto} no Brasil, retorne somente um json {"ncm":"ncm","descricao":"descricao"}`;
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Você é um analista contabil e sabe todos os NCM do Brasil.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 100,
      temperature: 0.7,
    });
    console.log(response.choices[0].message.content.trim());
    return extractJsonFromString(response.choices[0].message.content.trim());
  } catch (error) {
    console.error('Erro ao chamar a API OpenAI:', error);
    throw error;
  }
};
