
fetch('quotes.json') 
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON');
    }
    return response.json();
  })
  .then(quotes => {
    if (!Array.isArray(quotes) || quotes.length === 0) {
      throw new Error('El JSON no contiene un array válido de citas');
    }

   
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    
    document.getElementById('quote').textContent = quote.text || 'No hay texto';
    document.getElementById('author').textContent = quote.author ? `— ${quote.author}` : 'Autor desconocido';
  })
  .catch(error => {
    console.error(error);
    document.getElementById('quote').textContent = 'Error cargando las citas.';
    document.getElementById('author').textContent = '';
  });
