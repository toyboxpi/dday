(function () {
  function getRandomLottoNumbers() {
    const numbers = [];
    while (numbers.length < 7) {
      const num = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    const main = numbers.slice(0, 6).sort((a, b) => a - b);
    const bonus = numbers[6];
    return { main, bonus };
  }

  const el = document.getElementById("lottoNumber");
  if (el) {
    const lotto = getRandomLottoNumbers();
    el.textContent = `${lotto.main.join(", ")} + ${lotto.bonus}`;
    el.style.visibility = "visible"; // 로딩 중 감추기 처리 시 유용
  }
})();
