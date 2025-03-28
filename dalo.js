(function () {
  function seededRandom(seed) {
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  function getDailyLottoNumbers() {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const koreaTime = new Date(utc + 9 * 60 * 60 * 1000);

    const year = koreaTime.getFullYear();
    const month = koreaTime.getMonth() + 1;
    const day = koreaTime.getDate();

    const seed = parseInt(`${year}${month.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}`);
    const numbers = [];

    let attempts = 0;
    while (numbers.length < 7 && attempts < 100) {
      const rand = seededRandom(seed + numbers.length + attempts) * 45 + 1;
      const num = Math.floor(rand);
      if (!numbers.includes(num) && num >= 1 && num <= 45) {
        numbers.push(num);
      }
      attempts++;
    }

    const main = numbers.slice(0, 6).sort((a, b) => a - b);
    const bonus = numbers[6];
    return { main, bonus };
  }

  // 값을 표시할 요소가 있을 경우에만 적용
  const el = document.getElementById("lottoNumber");
  if (el) {
    const lotto = getDailyLottoNumbers();
    el.textContent = `${lotto.main.join(", ")} + ${lotto.bonus}`;
  }
})();
