# testing

Scratch repo for verifying the kizek-claude platform end-to-end (@claude_kizek -> PR).

## Simple Laravel website

A minimal Laravel app lives in this repo (single route serving a welcome page).

To run it:

```sh
composer install
cp .env.example .env
php artisan key:generate
php artisan serve
```

Then open http://localhost:8000.
