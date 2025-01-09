function calculateDday() {
    const startDate = new Date("2024-09-11T00:00:00+09:00");
    const now = new Date();
    const koreaTime = new Date(now.getTime() + (9 * 60 - now.getTimezoneOffset()) * 60 * 1000);
    const diffTime = koreaTime - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

    // 결과 업데이트
    document.getElementById("dDayCounter").textContent = `방송 ${diffDays}일차`;
}

calculateDday();
