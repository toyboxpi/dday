function calculateDday() {
    // 시작 날짜를 한국 시간 기준으로 설정
    const startDate = new Date("2024-09-11T00:00:00+09:00"); 

    // 현재 시간을 한국 시간으로 변환
    const now = new Date();
    const koreaTime = new Date(now.getTime() + (9 * 60 - now.getTimezoneOffset()) * 60 * 1000);

    // 날짜 차이를 계산
    const diffTime = koreaTime - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // 1일차부터 시작

    // HTML 요소 업데이트
    document.getElementById("dDayCounter").textContent = `방송 ${diffDays}일차`;
}

// 페이지 로드 시 실행
calculateDday();
