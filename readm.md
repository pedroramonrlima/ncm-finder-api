NCM Finder API
Esta é uma API Node.js que interage com o modelo GPT-4 da OpenAI para encontrar o NCM (Nomenclatura Comum do Mercosul) de produtos. A API possui autenticação via JWT para que somente usuários autenticados possam utilizá-la.

Funcionalidades
Autenticação com JWT: Somente usuários autenticados podem acessar a rota de busca de NCM.
Busca de NCM: Interage com a API da OpenAI para encontrar o NCM de produtos no Brasil.
Estrutura Modular: Organizada utilizando padrões de projeto como Controller-Service-Repository, facilitando a manutenção e a escalabilidade.
Índice
Tecnologias Utilizadas
Instalação
Configuração
Uso
Rotas
Autenticação
Executar no Docker
Tecnologias Utilizadas
Node.js
Express
JWT (JSON Web Token)
OpenAI API
Docker
Instalação
Requisitos
Node.js (versão 18 ou superior)
Conta na OpenAI para acessar a API GPT-4
Docker (opcional)
Passos
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/ncm-finder-api.git
cd ncm-finder-api
Instale as dependências:

bash
Copiar código
npm install
Crie um arquivo .env com as seguintes variáveis de ambiente:

bash
Copiar código
OPENAI_API_KEY=your-openai-api-key
JWT_SECRET=your-secret-key
PORT=3000
Configuração
OpenAI API Key
Você deve criar uma chave de API no site da OpenAI. Essa chave será usada para interagir com o modelo GPT-4 e buscar o NCM dos produtos.

Adicione a chave ao arquivo .env na variável OPENAI_API_KEY.

JWT Secret
Adicione um segredo seguro na variável JWT_SECRET no arquivo .env. Esse segredo é usado para assinar os tokens JWT.

Uso
Iniciar o servidor
Inicie a API com o seguinte comando:

bash
Copiar código
npm start
A API estará rodando em: http://localhost:3000

Rotas
Autenticação
POST /auth/login
Autentica o usuário e retorna um token JWT.

Exemplo de corpo da requisição:

json
Copiar código
{
  "username": "usuario1",
  "password": "senha123"
}
Resposta de sucesso:

json
Copiar código
{
  "token": "seu-token-jwt"
}
Buscar NCM
POST /api/buscar-ncm
Busca o NCM de um produto fornecido, utilizando GPT-4. É necessário enviar o token JWT no cabeçalho Authorization.

Exemplo de corpo da requisição:

json
Copiar código
{
  "produto": "coca-cola 2 litros"
}
Resposta de sucesso:

json
Copiar código
{
  "ncm": "2202.10.00 - Águas, incl. as minerais e gaseificadas, adicionadas de açúcares"
}
Cabeçalho de Autorização:

makefile
Copiar código
Authorization: Bearer <seu-token-jwt>
Autenticação
O token JWT pode ser obtido utilizando a rota /auth/login. Uma vez autenticado, o token deve ser incluído no cabeçalho Authorization para acessar a rota de busca de NCM.

Executar no Docker
Build da imagem:

bash
Copiar código
docker build -t ncm-finder-api .
Executar o container:

bash
Copiar código
docker run -d -p 3000:3000 --env-file .env ncm-finder-api
A API estará disponível em http://localhost:3000.

Contribuição
Contribuições são bem-vindas! Se você tiver alguma ideia ou encontrar problemas, fique à vontade para abrir uma issue ou enviar um pull request.

Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

