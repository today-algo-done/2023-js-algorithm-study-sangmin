from typing import Dict


def solution(today, terms, privacies):
    # 약관 과 유효기간 매핑을 받아옴
    term2month = create_terms2month(terms)
    # 개인정보를 계속해서 오늘과 비교
    today_num = date2num(today)
    answer = []
    # 각 개인정보를 확인
    for i, privacy in enumerate(privacies, 1):  # 번호가 필요하기 떄문에 enumerate 를 사용
        # 개인정보를 수집일자와 약관으로 분리
        date, term = privacy.split()
        # 약관을 개월수 로 변환
        month = term2month[term]
        # 파기 시작 날짜
        expire_num = add_date_month(date, month)
        # 오늘+유효기간 => 폐기해야할 날짜
        if expire_num <= today_num:
            # 약관번호
            answer.append(i)

    return answer


# 약관 종류 -> 유효기간(월)
def create_terms2month(terms) -> Dict[str, int]:
    term2month = {}
    for term in terms:
        # 약관 종류 와 유효기간이 공백 하나로 구분되어 있으니 사용해서 분리
        term, month = term.split()
        # 매핑을 추가
        term2month[term] = int(month)
    return term2month


# 수집 일자 + 유효기간 -> 폐기 시작 날짜 != 오늘날짜
# str 형태에서 int 형태로 변환후 비교
def add_date_month(date, month) -> int:
    return date2num(date) + 28 * month


# 오늘날짜와 유효기간 만료일간 비교
def date2num(date) -> int:
    # 공통된 . 을 이용하여 분리
    year, month, day = date.split('.')
    year = int(year)
    month = int(month)
    day = int(day)
    # 1년 = 12달
    # 1달 = 28일
    # year * 12 = month
    # month * 28 = day
    # 28 * ((12 * year) + month) + day
    return 28*(12*year + month) + day
