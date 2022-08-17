# Alterações do projeto

## v0.3.0
> **API**
- A listagem das tarefas agora ordena pela data de criação do _documento_

> **APP**
- Adicionados feedbacks visuais para as operações

## v0.2.0
> **Geral**
- Criado um _package.json_ na _raiz_ para facilitar a chamada dos serviços.

> **API**
- Criadas as funções para a chamada dos métodos HTTP no `TaskController`.
- Corrigida a estrutura da `TaskInterface`.
- Criadas as _rotas_ e controlaores/funções para os métodos _POST_, _PUT_, _GET_ e _DELETE_.
- Criado o `TaskSchema`.

> **APP**
- Criada a `TarefaInterface`.
- Criado o `TarefaService`.
- Melhorado o botão que chama a modal pra adicionar uma nota tarefa.
- Criação, remoção e deleção das tarefas.

## v0.1.0

**Adicionado**
- Criado o arquivo `docker-compose.yml` contendo configurações para o mongodb.
- Criada a API e suas configurações no diretório `todo-list-api`.

**Alterado**
- Os arquivos do app (Angular) passaram para o diretório `todo-list-angular`.

## v0.0.1

**Adicionado**
- Criado o header.
- Criado o footer.
- Criada a tabela das tarefas.
- Criada a modal de _edição_ e _criação_.
- Adicionado o Angular Material.
- Criada a rota home.
