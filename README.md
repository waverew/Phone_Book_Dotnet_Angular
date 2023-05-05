# Документация проекта Phone_Book_Dotnet_Angular



Данный проект представляет собой приложение для управления телефонной книгой, разработанное с использованием .NET 6.0 и Angular. В этой документации описаны основные шаги для запуска проекта.

## Требования

Docker

## Запуск проекта

Клонируйте репозиторий проекта на вашем компьютере с помощью команды:

```bash
git clone https://github.com/waverew/Phone_Book_Dotnet_Angular.git
```
Перейдите в каталог проекта с помощью команды:
```bash
cd Phone_Book_Dotnet_Angular
```
Создайте Docker-образ проекта с помощью команды:

```bash
docker build -t phonebookdotnet .
```
Запустите Docker-контейнер с помощью команды:

```bash
docker run -d -p 5000:80 --name bookcontainer phonebookdotnet
```

## Запуск проекта
Откройте веб-браузер и перейдите по адресу http://localhost:5000 для доступа к приложению.
