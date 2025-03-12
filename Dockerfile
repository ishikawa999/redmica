FROM ruby:3.3-slim
WORKDIR /var/lib/redmine
RUN set -eux; apt-get update && apt-get install -y --no-install-recommends \
    build-essential libsqlite3-dev ghostscript imagemagick libyaml-dev
COPY . .

RUN set -eux; mkdir -p files logs tmp config
RUN set -eux; echo "development:\n  adapter: sqlite3\n  database: db/redmine_development.sqlite3\n\ntest:\n  adapter: sqlite3\n  database: db/redmine_test.sqlite3\n\nproduction:\n  adapter: sqlite3\n  database: db/redmine_production.sqlite3" > config/database.yml
RUN set -eux; bundle install
RUN set -eux; bin/rails generate_secret_token

EXPOSE 3000

CMD ["sh", "-c", "set -eux; bin/rails db:migrate redmine:plugins; exec bin/rails server -b 0.0.0.0"]

