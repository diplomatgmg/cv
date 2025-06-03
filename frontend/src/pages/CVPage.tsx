export const CVPage = () => {
  return (
    <div className="resume-container">
      {/* Шапка */}
      <header className="resume-header">
        <h1>Попов Кирилл</h1>
        <p className="subtitle">Backend-разработчик | Санкт-Петербург | 21 год</p>
        <div className="contacts">
          <p>
            +7 (999) 229-88-86 | Telegram: @diplomatgmg |{" "}
            <a href="mailto:diplomatgmg@gmail.com">diplomatgmg@gmail.com</a>
          </p>
          <p>Готов к переезду | Удалённая работа</p>
        </div>
      </header>

      {/* Основной контент */}
      <main className="resume-content">
        {/* Опыт работы */}
        <section className="section">
          <h2>Опыт работы (2 года 4 месяца)</h2>
          <div className="job">
            <h3>Backend-разработчик — Абакам (август 2024 — настоящее время, 11 месяцев)</h3>
            <p>
              <em>avtoversant.ru, Набережные Челны</em>
            </p>
            <ul>
              <li>Внедрил multistage Docker-сборки: размер образов уменьшен на 50%, деплой ускорен на 30%.</li>
              <li>Настроил кастомный логгер HTTP-запросов, упростив отладку.</li>
              <li>Реализовал 15+ интеграций с внешними API.</li>
              <li>Автоматизировал синхронизацию с Bitrix24, сократив вопросы от клиентов на 25%.</li>
              <li>Переписал задачи на Go, ускорив обработку данных в 8 раз.</li>
              <li>Улучшил архитектуру проекта для читаемости кода.</li>
            </ul>
            <p>
              <strong>Стек:</strong> Python, Django, DRF, Celery, PostgreSQL (PostGIS), Vue3, TypeScript, GitLab, Docker
            </p>
          </div>
          <div className="job">
            <h3>Fullstack-разработчик — TECCOD (декабрь 2023 — май 2024, 6 месяцев)</h3>
            <p>
              <em>teccod.ru</em>
            </p>
            <ul>
              <li>Разработал интерфейсы на React/Next.js и бэкенд на Django.</li>
              <li>Создал тесты с покрытием 80%.</li>
              <li>Интегрировал 8+ внешних API.</li>
              <li>Сократил время загрузки страниц на 30%.</li>
              <li>Повысил стабильность проекта на 15%.</li>
            </ul>
            <p>
              <strong>Стек:</strong> React, Redux, RTK-Query, TypeScript, Next.js, Python, Django, PostgreSQL, Git,
              Docker
            </p>
          </div>
          <div className="job">
            <h3>Frontend-разработчик — Платформа Караулова (декабрь 2022 — октябрь 2023, 11 месяцев)</h3>
            <p>
              <em>platforma-karaulov.ru</em>
            </p>
            <ul>
              <li>Разработал интерфейсы на React и TypeScript.</li>
              <li>Уменьшил легаси-код на 8%.</li>
              <li>Сократил проблемы производительности на 12%.</li>
              <li>Интегрировал Redux, снизив ошибки на 20%.</li>
            </ul>
            <p>
              <strong>Стек:</strong> React, TypeScript, Redux, JS, Git, Docker, CSS, HTML
            </p>
          </div>
        </section>

        {/* Образование */}
        <section className="section">
          <h2>Образование</h2>
          <p>
            <strong>IT колледж Хекслет</strong> — Фронтенд-разработчик (2026, в процессе)
          </p>
          <p>Топ-50 студентов колледжа</p>
        </section>

        {/* Навыки */}
        <section className="section">
          <h2>Навыки</h2>
          <p>
            <strong>Технические:</strong> Python, Django, DRF, Celery, PostgreSQL, Go, React, TypeScript, Redux, Docker,
            Git, Linux, REST API, CI/CD
          </p>
          <p>
            <strong>Языки:</strong> Русский (C2), Эсперанто (родной), Английский (B1)
          </p>
        </section>

        {/* О себе */}
        <section className="section">
          <h2>Обо мне</h2>
          <p>
            Backend-разработчик с опытом 2+ года. С 14 лет монтировал видео, с 16 увлёкся программированием,
            вдохновившись логикой и оптимизацией (от Lego до Minecraft-модов). Стремлюсь к чистому коду и best
            practices, избегаю рутины UI, фокусируюсь на масштабируемости и UX. Дома настроил сервер для pet-проектов.
          </p>
          <p>
            <strong>Профили:</strong> <a href="https://github.com/diplomatgmg">GitHub</a> |{" "}
            <a href="https://www.codewars.com/users/diplomatgmg/stats">Codewars</a>
          </p>
        </section>
      </main>
    </div>
  )
}
