## Настройка проекта

Это приложение содержит как серверную часть, так и пользовательскую часть в одном репозитории.

```
├── README.md
├── .docker
├── backend
├── docker-compose.yml
└── frontend
```

### Клонирование репозитория

```bash
git clone https://github.com/George-Karpenko/test-simcoe-trade-LLC.git

```

Перейдите в корневой каталог.

```bash
$ cd test-simcoe-trade-LLC
```

Копировать в папке backend файл .env.example и переименовать в .env.

### Запуск контейнеров

Запустите контейнеры с помощью docker-compose

```bash
$ docker-compose up -d
```

Фронт запускается отдельно через npm.

Так же нужно сделать генерацию ключа в laravel и миграции. Для этого нужно выполнить команды

```bash
$ docker compose exec php bash
$ cd backend
$ composer install
$ php artisan key:generate
$ php artisan migrate
```
