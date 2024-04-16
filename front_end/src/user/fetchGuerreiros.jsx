import axios from 'axios';

async function fetchGuerreiros() {
  try {
    
    const response = await axios.post('http://localhost:5000/batalha');
    
    
    return response.data;
  } catch (error) {
    
    console.error('Erro ao buscar guerreiros:', error);
    return [];
  }
}

export default fetchGuerreiros;
