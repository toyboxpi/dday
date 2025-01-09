function calculateDday() {
    const startDate = new Date("2024-09-01"); // 시작 날짜
    const now = new Date(); // 현재 시간

    // 한국 시간으로 변환 (UTC+9 기준)
    const koreaTime = new Date(now.getTime() + (9 * 60 - now.getTimezoneOffset()) * 60 * 1000);

    // 시, 분, 초를 0으로 설정해 날짜만 비교
    const koreaDate = new Date(koreaTime.getFullYear(), koreaTime.getMonth(), koreaTime.getDate());
    const startDateOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());

    // 날짜 차이 계산
    const diffTime = koreaDate - startDateOnly; // 밀리초 차이
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // 1일차부터 시작

    // 결과 표시
    document.getElementById("dDayCounter").textContent = `방송 ${diffDays}일차`;
}

calculateDday();
