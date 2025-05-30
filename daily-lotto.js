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

    function showLotto() {
      const lotto = getDailyLottoNumbers();
      document.getElementById("lottoNumber").textContent =
        `${lotto.main.join(", ")} + ${lotto.bonus}`;
    }

    function updateLottoAtMidnight() {
      const now = new Date();
      const nextMidnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0, 0, 0, 0
      );
      const timeUntilMidnight = nextMidnight.getTime() - now.getTime();

      setTimeout(() => {
        showLotto();
        updateLottoAtMidnight();
      }, timeUntilMidnight);
    }

    showLotto();
    updateLottoAtMidnight();
