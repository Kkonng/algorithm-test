/**
 * 스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.

이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

[제한사항]
numbers 배열의 크기는 1 이상 1,000 이하입니다.
numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
hand는 "left" 또는 "right" 입니다.
"left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.

 */

function solution(numbers, hand) {
    var answer = '';
    const num_arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["*", 0, '#']]
    const find_arr = []
    let left_hand = [3, 0];
    let right_hand = [3, 2];
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < num_arr.length; j++){
            if(num_arr[j].indexOf(numbers[i]) >= 0){
                find_arr.push([j, num_arr[j].indexOf(numbers[i])]);
            }
        }
    }
    for(let i = 0; i < find_arr.length; i++){
        let left_cnt = 0;
        let right_cnt = 0;
        if(find_arr[i][1] === 0){
            answer += "L";
            left_hand = find_arr[i];
        }else if(find_arr[i][1] === 2){
            answer += "R";
            right_hand = find_arr[i];
        }else{
            left_cnt += Math.abs(find_arr[i][0] - left_hand[0]);
            left_cnt += Math.abs(find_arr[i][1] - left_hand[1]);
            right_cnt += Math.abs(find_arr[i][0] - right_hand[0]);
            right_cnt += Math.abs(find_arr[i][1] - right_hand[1]);
            if(left_cnt < right_cnt){
                answer += "L";
                left_hand = find_arr[i];
            }else if(right_cnt < left_cnt){
                answer += "R";
                right_hand = find_arr[i];
            }else{
                if(hand === "right"){
                    answer += "R";
                    right_hand = find_arr[i];
                }else{
                    answer += "L";
                    left_hand = find_arr[i];
                }
            }
        }
    }
    return answer;
}