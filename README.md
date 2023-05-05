# Документация проекта

## Превью
![phonebook_demo](https://user-images.githubusercontent.com/81471150/236386936-fc12df82-74b2-4b48-a5b1-fe7373b190a8.gif)

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
Клонируйте Docker-образ проекта с помощью команды:

```bash
docker pull kaban4/phonebookdotnet:v2.0
```
Запустите Docker-контейнер и загрузите Phonebook.json с помощью команды:

```bash
docker run -d -p 5000:80 -v /ваш/путь/к/Phonebook.json:/app/Phonebook.json --name bookcontainer kaban4/phonebookdotnet:v2.0
```
## Запуск проекта
Откройте веб-браузер и перейдите по адресу http://localhost:5000 для доступа к приложению.
