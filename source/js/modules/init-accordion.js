// Функция для инициализации аккордеонов
export function initializeAccordions() {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(accordion => {
    const toggleButton = accordion.querySelector('.accordion__toggle');
    const content = accordion.querySelector('.accordion__content');

    toggleButton.addEventListener('click', function() {
      // Если элемент уже открыт, закрываем его
      const isActive = accordion.classList.contains('active');

      // Закрыть все элементы
      accordions.forEach(item => item.classList.remove('active'));

      // Если этот элемент был не открыт, то открываем его
      if (!isActive) {
        accordion.classList.add('active');
      }
    });
  });
}
