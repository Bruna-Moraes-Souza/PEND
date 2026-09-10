const canvas = document.querySelector('#canvas');
const contexto = canvas.getContext('2d');

contexto.lineWidth = 8;
contexto.lineCap = 'round';
contexto.lineJoin = 'round';
contexto.beginPath();
contexto.arc(250, 60, 40, 0, Math.PI * 2);
contexto.stroke();

//desenha uma linha 
contexto.beginPath();
contexto.moveTo(250, 100);
contexto.lineTo(250, 250);
contexto.stroke();

//perna esquerda
contexto.beginPath();
contexto.moveTo(250, 250);
contexto.lineTo(200, 350);
contexto.moveTo(200, 350);
contexto.lineTo(200, 450);
contexto.stroke();

//perna direita
contexto.beginPath();
contexto.moveTo(250, 250);
contexto.lineTo(300, 350);
contexto.moveTo(300, 350);
contexto.lineTo(300, 450);
contexto.stroke();

//braço direito 
contexto.beginPath();
contexto.moveTo(250, 100);
contexto.lineTo(300, 150);
contexto.lineTo(350, 100);
contexto.stroke();

//braço esquerdo
contexto.beginPath();
contexto.moveTo(250, 100);
contexto.lineTo(200, 170);
contexto.lineTo(260, 200);
contexto.stroke();