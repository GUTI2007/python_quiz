const GIST_ID = process.env.GIST_ID || '622f0416717322a108970381e077324d';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export default async function handler(req, res) {
  // Encabezados CORS para permitir peticiones desde cualquier cliente
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (!GITHUB_TOKEN) {
    return res.status(500).json({ error: 'GITHUB_TOKEN no configurado en las variables de entorno de Vercel' });
  }

  try {
    // 1. OBTENER PUNTAJES GLOBALES (GET)
    if (req.method === 'GET') {
      const response = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
        headers: {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'User-Agent': 'Quiz-SENA-App'
        }
      });
      if (!response.ok) {
        throw new Error(`GitHub API respondió con status: ${response.status}`);
      }
      const data = await response.json();
      const rawContent = data.files?.['scores.json']?.content || '[]';
      const scores = JSON.parse(rawContent);
      return res.status(200).json(scores);
    }

    // 2. REGISTRAR NUEVO PUNTAJE (POST)
    if (req.method === 'POST') {
      const newPlayer = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      if (!newPlayer || !newPlayer.name || typeof newPlayer.score !== 'number') {
        return res.status(400).json({ error: 'Datos de jugador incompletos o inválidos' });
      }

      // Obtener ranking actual
      const getRes = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
        headers: {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'User-Agent': 'Quiz-SENA-App'
        }
      });
      const gistData = await getRes.json();
      const rawContent = gistData.files?.['scores.json']?.content || '[]';
      let scores = JSON.parse(rawContent);

      // Agregar jugador y ordenar
      scores.push(newPlayer);
      scores.sort((a, b) => b.score - a.score || a.time - b.time);
      scores = scores.slice(0, 50);

      // Guardar en la nube
      await fetch(`https://api.github.com/gists/${GIST_ID}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'User-Agent': 'Quiz-SENA-App',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          files: {
            'scores.json': {
              content: JSON.stringify(scores)
            }
          }
        })
      });

      return res.status(200).json(scores);
    }

    // 3. REINICIAR TABLA (DELETE)
    if (req.method === 'DELETE') {
      await fetch(`https://api.github.com/gists/${GIST_ID}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'User-Agent': 'Quiz-SENA-App',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          files: {
            'scores.json': {
              content: '[]'
            }
          }
        })
      });
      return res.status(200).json([]);
    }

    return res.status(405).json({ error: 'Método no permitido' });
  } catch (error) {
    console.error('Error en API de puntajes:', error);
    return res.status(500).json({ error: 'Error interno del servidor', details: error.message });
  }
}
