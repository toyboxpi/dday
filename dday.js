function calculateDday() {
    const startDate = new Date(Date.UTC(2024, 8, 11)); // 시작 날짜 (9월 11일, 월은 0부터 시작)

    // 현재 시간 (GMT 기준으로 현재 시간 가져오기)
    const now = new Date();
    const nowGMT = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));

    // GMT 시간에 9시간을 더해 KST 계산
    const koreaTime = new Date(nowGMT.getTime() + 9 * 60 * 60 * 1000);

    // 시, 분, 초를 제거하여 날짜만 비교
    const startDateOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const koreaDateOnly = new Date(koreaTime.getFullYear(), koreaTime.getMonth(), koreaTime.getDate());

    // 날짜 차이 계산 (밀리초 차이 → 일수 변환)
    const diffTime = koreaDateOnly - startDateOnly;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // 1일차 기준

    // 결과 출력
    document.getElementById("dDayCounter").textContent = `방송 ${diffDays}일차`;
}

// 실행
calculateDday();
