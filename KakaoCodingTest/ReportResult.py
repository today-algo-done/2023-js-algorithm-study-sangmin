from collections import defaultdict


def solution(id_list, report, k):
    recv2cnt = defaultdict(int)  # 신고받은 횟수

    # 신고 한사람 에서 신고받은 사람 저장(중복은 허용X 정지당한 유저의 횟수 만 저장하기 때문에 데이터 타입은 set으로 저장)
    send2recv = defaultdict(set)

    # report 를 돌면서 각각의 변수를 업데이트를 함
    for r in report:
        # 신고를 한사람과 받은 사람을 띄어쓰기로 구분이 되어있기 때문에 split(' ')로 구분
        send, recv = r.split(' ')
        if recv in send2recv[send]:  # 중복을 허용하지 않기 때문에 구분해줌
            continue  # 이미 신고한 유저라면 지나가고
        send2recv[send].add(recv)  # 처음 신고한 유저라면 신고한유저 목록에 업데이트
        recv2cnt[recv] += 1  # 신고를 당한 횟수 추가 해줌

    answer = []
    for send in id_list:  # 주어진 유저의 순서대로 리턴을 해주어야 하기 때문에
        # 신고한사람을 확인해서 그 수를 모두 더해준다.
        stop_cnt = sum([recv2cnt[recv] >= k for recv in send2recv[send]])
        # 신고 를 당한 횟수 = 신고한 사람들의 수  를 모두 answer 에 업데이트 해준다.
        answer.append(stop_cnt)
    return answer
# 중복 허용 x
# 신고받은 횟수 저장
# 신고한 사람 -> 신고받은 사람 저장
# 신고한 사람: send
# 신고받은 사람 : recv
