function calculateDday() {
    const startDate = new Date("2024-09-11"); // 시작 날짜

    // UTC 기준 현재 시간 가져오기
    const nowUTC = new Date();

    // UTC에 9시간을 더해 한국 시간 계산
    const koreaTime = new Date(nowUTC.getTime() + 9 * 60 * 60 * 1000);

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
