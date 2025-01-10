function fetchKoreanTime() {
    fetch("https://worldtimeapi.org/api/timezone/Asia/Seoul")
        .then(response => response.json())
        .then(data => {
            const currentTime = data.datetime; // API에서 가져온 ISO 형식의 현재 시간
            calculateDday(currentTime); // D-Day 계산 함수 호출
        })
        .catch(error => {
            console.error("한국 시간 API 요청 실패:", error);
            document.getElementById("dDayCounter").textContent = "시간 정보를 불러올 수 없습니다.";
        });
}

function calculateDday(currentTime) {
    const startDate = new Date("2024-09-11"); // 시작 날짜
    const currentDate = new Date(currentTime); // WorldTimeAPI에서 가져온 현재 한국 시간

    // 시, 분, 초를 제거하여 날짜만 비교
    const startDateOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const currentDateOnly = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

    // 날짜 차이 계산 (밀리초 차이 → 일수 변환)
    const diffTime = currentDateOnly - startDateOnly;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // 1일차 기준

    // 결과 출력
    document.getElementById("dDayCounter").textContent = `방송 ${diffDays}일차`;
}

// 실행
fetchKoreanTime();
