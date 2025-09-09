# Meu Linktree Pessoal

Página de links e portfólio pessoal construída com um backend Django e um frontend React. Este projeto serve como uma central de links para redes sociais e projetos, demonstrando a conexão entre as duas tecnologias.

## Tecnologias Utilizadas

* **Frontend:** React, HTML, CSS
* **Backend:** Django, Django REST Framework
* **Gerenciamento de Versão:** Git
* **Hospedagem:** GitHub Pages

---

## Funcionalidades

* Página de perfil com foto, nome e descrição.
* Links dinâmicos para redes sociais e projetos (gerenciados pelo painel administrativo do Django).
* Design totalmente responsivo para desktop e mobile.
* Favicon personalizado.

---

## Aprendizados e Desafios

Neste projeto, enfrentei e superei vários desafios comuns no desenvolvimento Full Stack. Alguns dos principais foram:

* **Configuração de Servidor:** Como resolver o erro 404 ao tentar servir arquivos de mídia do Django (o problema do caminho da imagem).
* **Comunicação entre Frontend e Backend:** Como o frontend React deve formatar a URL para buscar arquivos de imagem do backend Django.
* **Cache do Navegador:** Como lidar com o cache para forçar o navegador a exibir a versão mais recente do site, resolvendo o problema do favicon.
* **Design Responsivo:** Como usar Media Queries no CSS para garantir que a página se adapte a diferentes tamanhos de tela (como o problema do nome quebrava em duas linhas).

---

## Como Rodar o Projeto

### Backend (Django)

1.  Clone o repositório.
2.  Navegue até a pasta `linktree_project`.
3.  Instale as dependências do Python: `pip install -r requirements.txt` (ou instale Django e Django REST Framework manualmente).
4.  Rode as migrações: `python manage.py migrate`
5.  Inicie o servidor: `python manage.py runserver`

### Frontend (React)

1.  Navegue até a pasta `linktree_frontend`.
2.  Instale as dependências: `npm install`
3.  Inicie o servidor de desenvolvimento: `npm start`

---
