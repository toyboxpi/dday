function calculateDday() {
    const startDate = new Date("2024-09-01T00:00:00+09:00"); // 시작 날짜 (한국 시간)
    const now = new Date(); // 현재 시간 (시스템 시간)
    
    // 한국 시간으로 변환
    const koreaTime = new Date(now.getTime() + (9 * 60 - now.getTimezoneOffset()) * 60 * 1000);

    // 날짜 차이 계산
    const diffTime = koreaTime - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // 1일차부터 시작

    // 디데이 숫자 업데이트
    document.getElementById("dDayCounter").textContent = `방송 ${diffDays}일차`;
}

// 페이지 로드 시 실행
calculateDday();
