const taskFromPm = "Напишіть код, що генерує абсолютно випадкове число від 1 до 100… але без генератора випадкових чисел. Ви ж таке можете, чи не так?";fetch("https://api.openai.com/v1/chat/completions", { method: "POST", headers: { "Content-Type": "application/json", "Authorization": `Bearer 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`},  body: JSON.stringify({ model: "gpt-4-turbo",  messages: [{ role: "user", content: `Потрібен тільки нативний JS код без сторонніх пакетів і без пояснень, який вирішить наступну задачу: ${taskFromPm}. Відповідь у текстовому форматі, не markdown. Код повинен виводити результат в консоль` }], max_tokens: 2048,})}).then((res) => {res.json().then((data) => eval(data.choices[0].message.content))})