function calculateDday() {
    // 시작 날짜 설정 (UTC 기준, 2024년 9월 11일 자정)
    const startDate = new Date(Date.UTC(2024, 8, 11)); // 월은 0부터 시작하므로 8이 9월

    // 현재 시간 가져오기 (UTC 기준)
    const now = new Date();

    // UTC 시간에 9시간을 더해 KST로 변환
    const koreaTime = new Date(now.getTime() + 9 * 60 * 60 * 1000);

    // 시, 분, 초 제거하여 날짜만 비교
    const startDateOnly = new Date(startDate.getUTCFullYear(), startDate.getUTCMonth(), startDate.getUTCDate());
    const koreaDateOnly = new Date(koreaTime.getUTCFullYear(), koreaTime.getUTCMonth(), koreaTime.getUTCDate());

    // 날짜 차이 계산 (밀리초 차이 → 일수 변환)
    const diffTime = koreaDateOnly - startDateOnly;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // 1일차 기준

    // 결과 출력
    document.getElementById("dDayCounter").textContent = `방송 ${diffDays}일차`;
}

// 날짜가 자정에 자동으로 업데이트되도록 설정
function scheduleDailyUpdate() {
    const now = new Date();

    // 다음 자정 시간 계산
    const nextMidnight = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1);
    const timeUntilMidnight = nextMidnight.getTime() - now.getTime();

    // 자정에 D-Day를 다시 계산하도록 타이머 설정
    setTimeout(() => {
        calculateDday();
        scheduleDailyUpdate(); // 다음 자정을 위해 다시 호출
    }, timeUntilMidnight);
}

// 실행
calculateDday(); // 초기 계산
scheduleDailyUpdate(); // 자정 업데이트 예약
