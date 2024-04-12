## POC de Conexão com Replicação PostgreSQL Usando NestJS e TypeORM

# Introdução

Este README documenta o Proof of Concept (POC) para conectar um aplicativo NestJS a um banco de dados PostgreSQL com replicação. A replicação garante alta disponibilidade e escalabilidade de leitura para o banco de dados, permitindo que o aplicativo continue funcionando mesmo em caso de falha no nó mestre.

## Tecnologias Utilizadas

- **NestJS**: Um framework JavaScript para desenvolvimento de APIs backend robustas e escaláveis.
- **TypeORM**: Um ORM (Object-Relational Mapping) para gerenciar entidades e consultas em bancos de dados relacionais.
- **PostgreSQL**: Um banco de dados SQL de código aberto poderoso e confiável, com suporte a replicação mestre-escravo.

## Instalação

```bash
$ yarn
```

## Subir docker e configurar o banco

```bash
# unit tests
$ yarn up
```

## Rodar o server

```bash
# development
$ yarn dev
```

## Rodar o comando de Seed

```bash
$ yarn seed
```
