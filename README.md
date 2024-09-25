# LinkedOut

**LinkedOut** é uma aplicação backend desenvolvida em Java que visa otimizar o processo de recrutamento e seleção de candidatos, utilizando geolocalização e inteligência artificial para priorizar candidatos que moram próximos às empresas, principalmente no estado de Pernambuco.

## Problemática

Empresas enfrentam desafios na contratação de colaboradores devido à necessidade de transporte coletivo para funcionários que moram distantes. O objetivo do LinkedOut é reduzir custos e melhorar a qualidade de vida dos colaboradores, otimizando a seleção com base na proximidade entre a residência do candidato e a empresa, além de considerar qualificações profissionais.

## Objetivos

O LinkedOut permitirá que as empresas publiquem vagas de emprego e que pessoas desempregadas se candidatem, utilizando a localização e perfis qualificados para otimizar o processo de seleção. A inteligência artificial será aplicada para recomendar candidatos com base em critérios como proximidade geográfica, habilidades e histórico profissional.

## Funcionalidades Principais

### Para Empresas:
- **Cadastro de Vagas**: Empresas poderão postar vagas de emprego, especificando requisitos e localização.
- **Busca de Candidatos por Proximidade**: Utilização de geolocalização para encontrar candidatos que moram perto da empresa.
- **Classificação de Candidatos com IA**: A inteligência artificial auxiliará na recomendação de candidatos com base em proximidade e qualificações.

### Para Candidatos:
- **Criação de Perfil Profissional**: Candidatos poderão criar perfis, listando suas experiências, qualificações e localização.
- **Busca de Vagas**: Candidatos poderão buscar vagas próximas e se candidatar de forma eficiente.
- **Geolocalização**: O sistema priorizará vagas próximas ao endereço informado pelo candidato.

### Para Administradores:
- **Gerenciamento de Usuários**: Controle de perfis de candidatos e empresas.
- **Moderação de Conteúdo**: Revisão e remoção de vagas e perfis inadequados.
- **Relatórios de Atividade**: Monitoramento de atividades da plataforma.

## User Stories

### Empresas

1. **Cadastro de Vagas**  
   Como **empresa**, eu quero **cadastrar vagas de emprego**, especificando **localização, requisitos e qualificações** necessárias, para que eu possa atrair candidatos qualificados e que moram perto da minha sede.
   
2. **Filtrar Candidatos pela Proximidade**  
   Como **empresa**, eu quero **encontrar candidatos** que **moram próximos ao endereço da empresa**, para reduzir custos com transporte e otimizar o tempo de deslocamento dos colaboradores.

3. **Classificar Candidatos com IA**  
   Como **empresa**, eu quero que o sistema **recomende candidatos** usando **inteligência artificial**, priorizando aqueles que moram perto e possuem as qualificações desejadas, para facilitar o processo de seleção.

### Candidatos

1. **Criar Perfil Profissional**  
   Como **candidato desempregado**, eu quero **criar um perfil profissional** com minhas **habilidades, qualificações e localização**, para que eu possa me candidatar a vagas de emprego e ser encontrado por empresas.

2. **Buscar Vagas Próximas**  
   Como **candidato**, eu quero **buscar vagas de emprego próximas ao meu endereço**, para que eu possa me candidatar a empregos que estejam acessíveis e reduzir meu tempo de deslocamento.

3. **Receber Notificações de Vagas**  
   Como **candidato**, eu quero **receber notificações de vagas** que estão de acordo com meu perfil e próximas da minha localização, para que eu possa aproveitar as melhores oportunidades de emprego.

### Administrador

1. **Gerenciar Perfis e Vagas**  
   Como **administrador**, eu quero **gerenciar perfis de usuários e vagas postadas**, para manter o conteúdo da plataforma adequado e atualizado.

2. **Relatórios de Atividade**  
   Como **administrador**, eu quero **acessar relatórios de atividade** do sistema, para monitorar o uso da plataforma e realizar melhorias.

## Arquitetura do Projeto

O **LinkedOut** segue uma arquitetura baseada no padrão **MVC (Model-View-Controller)**. Ele separa a lógica da aplicação em três camadas principais: a camada de dados (Model), a camada de controle (Controller) e a camada de visualização (View), que neste projeto será representada por saídas de dados via console ou serviços REST.

### Tecnologias Utilizadas:
- **Java** (versão 11 ou superior)
- **JDBC** (para comunicação com o banco de dados)
- **MySQL** ou **PostgreSQL** (para o banco de dados)
- **Geolocalização** (via API de Google Maps, OpenStreetMap ou equivalente)
- **Inteligência Artificial** (algoritmo básico para priorização de candidatos)

## Estrutura de Diretórios

```bash
linkedout-backend/
├── src/
│   ├── controller/        # Classes que controlam o fluxo da aplicação
│   ├── model/             # Classes de entidade (Candidato, Empresa, Administrador)
│   ├── service/           # Lógica de negócio (geolocalização, IA)
│   ├── repository/        # Classes de persistência no banco de dados
│   └── view/              # Interações com o usuário (linha de comando ou serviços REST)
└── README.md              # Documentação do projeto
