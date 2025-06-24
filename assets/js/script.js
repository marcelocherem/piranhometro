// Definindo as datas-chave
    // Data de partida para a Itália (para o countdown)
    const targetDate = new Date('2025-10-27T16:35:00');
    // Data de compra dos bilhetes (âncora da bandeira do Brasil)
    const purchaseDate = new Date('2025-05-01T20:00:00');
    
    // Atualiza os valores do countdown
    function updateCountdown() {
      const now = new Date();
      const remaining = targetDate - now;
      
      // Se o countdown terminou, exibe zeros
      if (remaining < 0) {
        document.getElementById('days').textContent = "00";
        document.getElementById('hours').textContent = "00";
        document.getElementById('minutes').textContent = "00";
        document.getElementById('seconds').textContent = "00";
        return;
      }
      
      // Cálculos para cada unidade de tempo
      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((remaining / (1000 * 60)) % 60);
      const seconds = Math.floor((remaining / 1000) % 60);
      
      // Atualizando cada quadradinho com dois dígitos
      document.getElementById('days').textContent = days.toString().padStart(2, '0');
      document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
      document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    // Atualiza a posição do peixinho conforme a data atual
    function updateFishPosition() {
      const now = new Date();
      let progress;
      
      // Se ainda não passou a data de compra, o peixinho fica na posição inicial (0%)
      if (now < purchaseDate) {
        progress = 0;
      } else if (now > targetDate) {
        // Se já passou da data de partida, posiciona no final (100%)
        progress = 1;
      } else {
        // Cálculo linear do progresso entre a data da compra e a data de partida
        progress = (now - purchaseDate) / (targetDate - purchaseDate);
      }
      
      // A linha pontilhada se estende de 10% até 90% do container (80% de "caminho")
      // Assim, a posição do peixinho é: 10% + 80% * progress
      const fishPosition = 10 + (80 * progress);
      document.getElementById('fish').style.left = fishPosition + '%';
    }
    
    // Função que agrupa as atualizações
    function updateAll() {
      updateCountdown();
      updateFishPosition();
    }
    
    // Atualização inicial e depois a cada segundo
    updateAll();
    setInterval(updateAll, 1000);