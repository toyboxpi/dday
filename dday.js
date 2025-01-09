function calculateDday() {
    const startDate = new Date("2024-09-01T00:00:00+09:00"); // 시작 날짜
    const now = new Date();
    const koreaTime = new Date(now.getTime() + (9 * 60 - now.getTimezoneOffset()) * 60 * 1000); // 한국 시간 변환

    const diffTime = koreaTime - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // 1일차부터 시작

    // 숫자만 바꿔서 업데이트
    document.getElementById("dDayCounter").textContent = `방송 ${diffDays}일차`;
}

// 페이지 로드 시 실행
calculateDday();
