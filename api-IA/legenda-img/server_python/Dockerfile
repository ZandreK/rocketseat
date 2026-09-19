ARG PYTHON_VERSION=3.14
FROM python:${PYTHON_VERSION}-slim as base
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

ENV PYTHONUNBUFFERED=1


WORKDIR /app

# Copia o restante do projeto
COPY . .

EXPOSE 5000

CMD uv run -- flask --app main.py run --host=0.0.0.0