
  // Pobieramy wszystkie elementy details na stronie
  const allDetails = document.querySelectorAll('details');

  allDetails.forEach((targetDetail) => {
    targetDetail.addEventListener('toggle', () => {
      // Jeśli właśnie otworzyliśmy ten element
      if (targetDetail.open) {
        // Przechodzimy przez wszystkie i zamykamy inne niż ten kliknięty
        allDetails.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute('open');
          }
        });
      }
    });
  });