# 🛡️ SHIELD Segurança Eletrônica

Website institucional desenvolvido para apresentar os serviços da **SHIELD Segurança Eletrônica**, oferecendo informações sobre a empresa, formas de contato e uma experiência simples e intuitiva para os clientes.

---

## 📋 Sobre o Projeto

Este projeto consiste em um site institucional responsivo voltado para divulgação dos serviços da SHIELD Segurança Eletrônica.

O objetivo é proporcionar uma presença digital profissional, permitindo que clientes conheçam a empresa e entrem em contato rapidamente através do WhatsApp.

---

## 🚀 Funcionalidades

* Página inicial com apresentação da empresa;
* Página "Sobre" com informações institucionais;
* Página "Contato";
* Formulário de contato integrado ao WhatsApp;
* Interface responsiva;
* Navegação simples e intuitiva;
* Design moderno utilizando efeito Glassmorphism.

---

## 🛠 Tecnologias Utilizadas

### Front-end

* HTML5
* CSS3
* JavaScript

### Recursos

* Layout responsivo
* Glassmorphism
* Integração com WhatsApp API

---

## 📁 Estrutura do Projeto

```text
Shield Segurança Eletrônica
│
├── index.html
│
├── src
│   ├── css
│   │     └── style.css
│   │
│   ├── javascript
│   │     └── script.js
│   │
│   ├── pages
│   │     ├── sobre.html
│   │     └── contato.html
│   │
│   └── images
│         └── (imagens do projeto)
│
└── README.md
```

---

## ⚙️ Funcionamento

### Página Inicial

A página principal apresenta:

* Logo da empresa;
* Slogan institucional;
* Botão para solicitar uma visita;
* Navegação entre as páginas.

### Página Sobre

Contém informações institucionais sobre a SHIELD Segurança Eletrônica e sua atuação no mercado.

### Página Contato

Possui um formulário onde o usuário informa:

* Nome;
* E-mail;
* Mensagem.

Ao enviar o formulário, o JavaScript gera automaticamente uma mensagem formatada e redireciona o usuário para uma conversa no WhatsApp.

---

## 📱 Integração com WhatsApp

O envio é realizado através da URL:

```javascript
https://wa.me/5585988618045?text=
```

A mensagem é montada dinamicamente utilizando:

```javascript
encodeURIComponent()
```

Garantindo o correto tratamento dos caracteres especiais.

---

## 🎨 Estilização

Toda a identidade visual é definida em:

```text
src/css/style.css
```

Características:

* Layout moderno;
* Transparências e efeito Glassmorphism;
* Responsividade;
* Organização em seções;
* Boa experiência do usuário.

---

## ▶️ Como Executar

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
```

### 2. Entrar na pasta

```bash
cd Shield-Seguranca-Eletronica
```

### 3. Abrir o projeto

Basta abrir o arquivo:

```text
index.html
```

ou utilizar a extensão **Live Server** do VS Code.

---

## 📌 Melhorias Futuras

* [ ] Implementar backend para armazenamento dos contatos;
* [ ] Adicionar animações e transições;
* [ ] Criar página de serviços;
* [ ] Inserir mapa de localização;
* [ ] Implementar SEO;
* [ ] Adicionar formulário com validação avançada;
* [ ] Criar painel administrativo;
* [ ] Migrar para React ou Next.js.

---

## 👨‍💻 Autor

**SHIELD Segurança Eletrônica**

Projeto desenvolvido para representar a presença digital da empresa, oferecendo soluções modernas e acessíveis para apresentação dos serviços e atendimento aos clientes.

---

## 📄 Licença

Este projeto é destinado para fins institucionais da SHIELD Segurança Eletrônica.
